import { Controller, Get } from "@nestjs/common";
import type { NotificationsInbox } from "@axioma/domain";
import { NotificationsService } from "./notifications.service";

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get("student/notifications")
  getStudentNotifications(): Promise<NotificationsInbox> {
    return this.notificationsService.getInboxForRole("STUDENT");
  }

  @Get("educator/notifications")
  getEducatorNotifications(): Promise<NotificationsInbox> {
    return this.notificationsService.getInboxForRole("EDUCATOR");
  }
}
