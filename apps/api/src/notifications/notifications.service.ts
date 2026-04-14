import { Injectable } from "@nestjs/common";
import type { NotificationLevel, NotificationsInbox } from "@axioma/domain";
import { PrismaService } from "../db/prisma.service";

function toNotificationLevel(
  level: "INFO" | "SUCCESS" | "WARNING" | "CRITICAL",
): NotificationLevel {
  if (level === "SUCCESS") return "success";
  if (level === "WARNING") return "warning";
  if (level === "CRITICAL") return "critical";
  return "info";
}

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createNotification(input: {
    institutionId: string;
    recipientUserId: string;
    level: "INFO" | "SUCCESS" | "WARNING" | "CRITICAL";
    title: string;
    body: string;
    href?: string | null;
  }) {
    return this.prisma.notification.create({
      data: {
        institutionId: input.institutionId,
        recipientUserId: input.recipientUserId,
        level: input.level,
        title: input.title,
        body: input.body,
        href: input.href ?? null,
      },
    });
  }

  async getInboxForRole(role: "STUDENT" | "EDUCATOR"): Promise<NotificationsInbox> {
    const fallbackName = role === "STUDENT" ? "Nysa Thompson" : "Avery Thompson";
    const fallback: NotificationsInbox = {
      source: "fallback",
      recipientName: fallbackName,
      institutionName: "North River University",
      items: [],
    };

    try {
      const user = await this.prisma.user.findFirst({
        where: {
          role,
        },
        include: {
          institution: true,
          notifications: {
            orderBy: {
              createdAt: "desc",
            },
            take: 25,
          },
        },
      });

      if (!user) {
        return fallback;
      }

      return {
        source: "database",
        recipientName: user.fullName,
        institutionName: user.institution.name,
        items: user.notifications.map((item) => ({
          id: item.id,
          level: toNotificationLevel(item.level),
          title: item.title,
          body: item.body,
          href: item.href ?? null,
          readAt: item.readAt?.toISOString() ?? null,
          createdAt: item.createdAt.toISOString(),
        })),
      };
    } catch {
      return fallback;
    }
  }
}
