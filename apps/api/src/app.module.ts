import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthController } from "./auth/auth.controller";
import { HealthController } from "./common/health/health.controller";
import { PrismaService } from "./db/prisma.service";
import { EducatorController } from "./educator/educator.controller";
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
      HealthController,
      AuthController,
      StudentController,
      EducatorController,
      StorageController,
    ],
  providers: [PrismaService, StorageService],
})
export class AppModule {}
