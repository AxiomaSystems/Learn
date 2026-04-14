import { z } from "zod";

export const notificationLevelSchema = z.enum([
  "info",
  "success",
  "warning",
  "critical",
]);

export const notificationItemSchema = z.object({
  id: z.string().min(1),
  level: notificationLevelSchema,
  title: z.string().min(1),
  body: z.string().min(1),
  href: z.string().nullable(),
  readAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
});

export const notificationsInboxSchema = z.object({
  source: z.enum(["database", "fallback"]),
  recipientName: z.string().min(1),
  institutionName: z.string().min(1),
  items: z.array(notificationItemSchema),
});

export type NotificationLevel = z.infer<typeof notificationLevelSchema>;
export type NotificationItem = z.infer<typeof notificationItemSchema>;
export type NotificationsInbox = z.infer<typeof notificationsInboxSchema>;
