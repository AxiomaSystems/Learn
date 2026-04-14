import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
  type S3ClientConfig,
  type ServerSideEncryption,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

@Injectable()
export class StorageService {
  constructor(private readonly configService: ConfigService) {}

  private readonly maxSignedUrlTtlSeconds = 60 * 15;

  private get bucket() {
    return this.configService.get<string>("S3_BUCKET") ?? "";
  }

  private get region() {
    return this.configService.get<string>("S3_REGION") ?? "us-east-1";
  }

  private get endpoint() {
    return this.configService.get<string>("S3_ENDPOINT") ?? undefined;
  }

  private get accessKeyId() {
    return this.configService.get<string>("AWS_ACCESS_KEY_ID") ?? "";
  }

  private get secretAccessKey() {
    return this.configService.get<string>("AWS_SECRET_ACCESS_KEY") ?? "";
  }

  private get forcePathStyle() {
    return this.configService.get<string>("S3_FORCE_PATH_STYLE") === "true";
  }

  private get uploadTtlSeconds() {
    const value = Number(
      this.configService.get<string>("S3_PRESIGNED_UPLOAD_TTL_SECONDS") ?? "600",
    );

    return Number.isFinite(value)
      ? Math.max(60, Math.min(this.maxSignedUrlTtlSeconds, value))
      : 600;
  }

  private get downloadTtlSeconds() {
    const value = Number(
      this.configService.get<string>("S3_PRESIGNED_DOWNLOAD_TTL_SECONDS") ?? "600",
    );

    return Number.isFinite(value)
      ? Math.max(60, Math.min(this.maxSignedUrlTtlSeconds, value))
      : 600;
  }

  private get serverSideEncryption(): ServerSideEncryption {
    const value =
      this.configService.get<string>("S3_SERVER_SIDE_ENCRYPTION") ?? "AES256";

    return value === "aws:kms" ? "aws:kms" : "AES256";
  }

  getSecurityProfile() {
    return {
      configured: this.isConfigured(),
      bucket: this.bucket || null,
      region: this.region || null,
      endpointConfigured: Boolean(this.endpoint),
      forcePathStyle: this.forcePathStyle,
      uploadTtlSeconds: this.uploadTtlSeconds,
      downloadTtlSeconds: this.downloadTtlSeconds,
      kmsKeyConfigured: Boolean(this.configService.get<string>("S3_KMS_KEY_ID")),
      serverSideEncryption:
        this.configService.get<string>("S3_SERVER_SIDE_ENCRYPTION") ?? "AES256",
    };
  }

  validateStorageKey(storageKey: string) {
    const tenantPrefix =
      this.configService.get<string>("S3_TENANT_PREFIX") ?? "submissions/";
    const trimmedPrefix = tenantPrefix.endsWith("/")
      ? tenantPrefix
      : `${tenantPrefix}/`;

    if (!storageKey.startsWith(trimmedPrefix)) {
      throw new Error(
        `Storage key must start with the configured tenant prefix "${trimmedPrefix}".`,
      );
    }

    if (storageKey.includes("..")) {
      throw new Error("Storage key cannot contain path traversal segments.");
    }

    if (storageKey.length > 512) {
      throw new Error("Storage key is too long.");
    }
  }

  isConfigured() {
    return Boolean(
      this.bucket &&
        this.region &&
        this.accessKeyId &&
        this.secretAccessKey,
    );
  }

  private getClient() {
    if (!this.isConfigured()) {
      return null;
    }

    const clientConfig: S3ClientConfig = {
      region: this.region,
      forcePathStyle: this.forcePathStyle,
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
      },
    };

    if (this.endpoint) {
      clientConfig.endpoint = this.endpoint;
    }

    return new S3Client(clientConfig);
  }

  async createUploadUrl(input: {
    storageKey: string;
    mimeType: string;
    fileName: string;
  }) {
    const client = this.getClient();

    if (!client) {
      return null;
    }

    this.validateStorageKey(input.storageKey);

    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: input.storageKey,
      ContentType: input.mimeType,
      ServerSideEncryption: this.serverSideEncryption,
      SSEKMSKeyId: this.configService.get<string>("S3_KMS_KEY_ID") || undefined,
      Metadata: {
        originalFileName: input.fileName,
      },
    });

    const uploadUrl = await getSignedUrl(client, command, {
      expiresIn: this.uploadTtlSeconds,
    });

    return {
      uploadUrl,
      expiresInSeconds: this.uploadTtlSeconds,
    };
  }

  async createDownloadUrl(input: {
    storageKey: string;
    fileName?: string | null;
  }) {
    const client = this.getClient();

    if (!client) {
      return null;
    }

    this.validateStorageKey(input.storageKey);

    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: input.storageKey,
      ResponseContentDisposition: input.fileName
        ? `inline; filename="${input.fileName}"`
        : undefined,
    });

    return getSignedUrl(client, command, {
      expiresIn: this.downloadTtlSeconds,
    });
  }
}
