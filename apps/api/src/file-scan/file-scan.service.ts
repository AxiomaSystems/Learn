import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Job, Queue, QueueEvents, Worker } from "bullmq";
import IORedis from "ioredis";
import { PrismaService } from "../db/prisma.service";
import { NotificationsService } from "../notifications/notifications.service";

type FileScanJobPayload = {
  submissionId: string;
  institutionId: string;
  requestedByUserId: string;
  trigger: "handoff" | "admin_rescan";
};

type FileScanDecision = {
  status: "CLEAN" | "QUARANTINED" | "REJECTED";
  notes: string;
};

const FILE_SCAN_QUEUE_NAME = "file-scan";

@Injectable()
export class FileScanService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(FileScanService.name);
  private publisher?: IORedis;
  private workerConnection?: IORedis;
  private queue?: Queue<FileScanJobPayload>;
  private queueEvents?: QueueEvents;
  private worker?: Worker<FileScanJobPayload>;

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async onModuleInit() {
    const redisUrl = this.configService.get<string>("REDIS_URL");

    if (!redisUrl) {
      this.logger.warn(
        "REDIS_URL is not configured. File scans will stay in manual moderation mode.",
      );
      return;
    }

    this.publisher = new IORedis(redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    });
    this.workerConnection = new IORedis(redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    });

    this.queue = new Queue<FileScanJobPayload>(FILE_SCAN_QUEUE_NAME, {
      connection: this.publisher,
    });
    this.queueEvents = new QueueEvents(FILE_SCAN_QUEUE_NAME, {
      connection: this.publisher,
    });
    this.worker = new Worker<FileScanJobPayload>(
      FILE_SCAN_QUEUE_NAME,
      async (job: Job<FileScanJobPayload>) => {
        await this.processScanJob(job.data);
      },
      {
        connection: this.workerConnection,
      },
    );

    this.worker.on("completed", (job: Job<FileScanJobPayload>) => {
      this.logger.log(`Completed file scan job ${job.id ?? "unknown"}.`);
    });
    this.worker.on("failed", (job: Job<FileScanJobPayload> | undefined, error: Error) => {
      this.logger.error(
        `File scan job ${job?.id ?? "unknown"} failed: ${error.message}`,
      );
    });
  }

  async onModuleDestroy() {
    await this.worker?.close();
    await this.queueEvents?.close();
    await this.queue?.close();
    await this.publisher?.quit();
    await this.workerConnection?.quit();
  }

  isQueueConfigured() {
    return Boolean(this.queue);
  }

  async enqueueSubmissionScan(input: FileScanJobPayload) {
    if (!this.queue) {
      this.logger.warn(
        `File scan queue unavailable for submission ${input.submissionId}.`,
      );
      return false;
    }

    await this.queue.add("scan", input, {
      jobId: `submission-scan:${input.submissionId}`,
      removeOnComplete: 100,
      removeOnFail: 100,
    });

    await this.prisma.auditEvent.create({
      data: {
        institutionId: input.institutionId,
        actorUserId: input.requestedByUserId,
        action: "submission.file_scan_enqueued",
        entityType: "submission",
        entityId: input.submissionId,
        payload: {
          trigger: input.trigger,
          queuedAt: new Date().toISOString(),
        },
      },
    });

    return true;
  }

  private async processScanJob(job: FileScanJobPayload) {
    const submission = await this.prisma.submission.findUnique({
      where: {
        id: job.submissionId,
      },
      include: {
        student: true,
        coursework: {
          include: {
            class: true,
          },
        },
      },
    });

    if (
      !submission ||
      !submission.storageKey ||
      !submission.fileName ||
      !submission.mimeType
    ) {
      this.logger.warn(
        `Skipping file scan for submission ${job.submissionId} because file metadata is incomplete.`,
      );
      return;
    }

    const decision = this.determineScanOutcome({
      fileName: submission.fileName,
      mimeType: submission.mimeType,
      storageKey: submission.storageKey,
    });

    const scannedAt = new Date();
    await this.prisma.submission.update({
      where: {
        id: submission.id,
      },
      data: {
        fileScanStatus: decision.status,
        scannedAt,
        scanNotes: decision.notes,
      },
    });

    await this.prisma.auditEvent.create({
      data: {
        institutionId: submission.coursework.class.institutionId,
        actorUserId: job.requestedByUserId,
        action: "submission.file_scan_completed",
        entityType: "submission",
        entityId: submission.id,
        payload: {
          trigger: job.trigger,
          engine: "stub_rules_v1",
          nextScanStatus: decision.status,
          scanNotes: decision.notes,
          completedAt: scannedAt.toISOString(),
        },
      },
    });

    await this.notificationsService.createNotification({
      institutionId: submission.coursework.class.institutionId,
      recipientUserId: submission.studentId,
      level:
        decision.status === "CLEAN"
          ? "SUCCESS"
          : decision.status === "QUARANTINED"
            ? "WARNING"
            : "CRITICAL",
      title:
        decision.status === "CLEAN"
          ? "Your file passed automated scanning"
          : decision.status === "QUARANTINED"
            ? "Your file was quarantined for review"
            : "Your file was rejected",
      body:
        decision.status === "CLEAN"
          ? `The upload for ${submission.coursework.title} is now available for educator review.`
          : decision.status === "QUARANTINED"
            ? `The upload for ${submission.coursework.title} matched a suspicious pattern and is being held for admin review.`
            : `The upload for ${submission.coursework.title} used a blocked file type and must be replaced.`,
      href: `/student/coursework/${submission.courseworkId}`,
    });

    await this.notificationsService.createNotification({
      institutionId: submission.coursework.class.institutionId,
      recipientUserId: submission.coursework.class.educatorId,
      level:
        decision.status === "CLEAN"
          ? "INFO"
          : decision.status === "QUARANTINED"
            ? "WARNING"
            : "WARNING",
      title:
        decision.status === "CLEAN"
          ? "A submission file is ready for review"
          : decision.status === "QUARANTINED"
            ? "A submission file was quarantined"
            : "A submission file was rejected",
      body:
        decision.status === "CLEAN"
          ? `${submission.student.fullName} submitted a clean file for ${submission.coursework.title}.`
          : decision.status === "QUARANTINED"
            ? `A file for ${submission.coursework.title} was quarantined before educator review.`
            : `A file for ${submission.coursework.title} was rejected before educator review.`,
      href: `/educator/coursework/${submission.courseworkId}`,
    });
  }

  private determineScanOutcome(input: {
    fileName: string;
    mimeType: string;
    storageKey: string;
  }): FileScanDecision {
    const lowerFileName = input.fileName.toLowerCase();
    const lowerMimeType = input.mimeType.toLowerCase();
    const lowerStorageKey = input.storageKey.toLowerCase();
    const combined = `${lowerFileName} ${lowerMimeType} ${lowerStorageKey}`;

    const rejectedExtensions = [
      ".exe",
      ".msi",
      ".bat",
      ".cmd",
      ".ps1",
      ".js",
      ".vbs",
      ".scr",
      ".com",
      ".apk",
    ];

    if (rejectedExtensions.some((extension) => lowerFileName.endsWith(extension))) {
      return {
        status: "REJECTED",
        notes:
          "Automatic scan rejected this upload because the file type is not allowed for coursework submissions.",
      };
    }

    const quarantineSignals = [
      "virus",
      "malware",
      "trojan",
      "payload",
      "ransom",
      "eicar",
      "macro-enabled",
      "suspicious",
    ];

    if (
      quarantineSignals.some((signal) => combined.includes(signal)) ||
      lowerMimeType.includes("application/x-msdownload")
    ) {
      return {
        status: "QUARANTINED",
        notes:
          "Automatic scan quarantined this upload because the file metadata matched a suspicious pattern.",
      };
    }

    return {
      status: "CLEAN",
      notes: "Automatic scan marked this upload as clean.",
    };
  }
}
