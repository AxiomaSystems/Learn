import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AdminController } from "./admin/admin.controller";
import { AuthController } from "./auth/auth.controller";
import { HealthController } from "./common/health/health.controller";
import { PrismaService } from "./db/prisma.service";
import { EducatorController } from "./educator/educator.controller";
import { FileScanService } from "./file-scan/file-scan.service";
import { NotificationsController } from "./notifications/notifications.controller";
import { NotificationsService } from "./notifications/notifications.service";
import { StorageController } from "./storage/storage.controller";
import { StorageService } from "./storage/storage.service";
import { StudentController } from "./student/student.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
    controllers: [
      AdminController,
      HealthController,
      AuthController,
      StudentController,
      EducatorController,
      NotificationsController,
      StorageController,
    ],
  providers: [PrismaService, StorageService, FileScanService, NotificationsService],
})
export class AppModule {}
