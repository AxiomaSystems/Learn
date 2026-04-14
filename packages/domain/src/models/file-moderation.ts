import { z } from "zod";
import { fileScanStatusSchema } from "./coursework-handoff";

export const fileModerationItemSchema = z.object({
  submissionId: z.string().min(1),
  courseworkId: z.string().min(1),
  classCode: z.string().min(1),
  classTitle: z.string().min(1),
  courseworkTitle: z.string().min(1),
  studentName: z.string().min(1),
  fileName: z.string().min(1),
  mimeType: z.string().min(1),
  fileSizeBytes: z.number().int().nonnegative(),
  storageKey: z.string().min(1),
  scanStatus: fileScanStatusSchema,
  scannedAt: z.string().datetime().nullable(),
  scanNotes: z.string().nullable(),
  submittedAt: z.string().datetime().nullable(),
});

export const fileModerationQueueSchema = z.object({
  source: z.enum(["database", "fallback"]),
  institutionName: z.string().min(1),
  items: z.array(fileModerationItemSchema),
});

export type FileModerationItem = z.infer<typeof fileModerationItemSchema>;
export type FileModerationQueue = z.infer<typeof fileModerationQueueSchema>;
