import { Controller, Get } from "@nestjs/common";
import type { AppHealth } from "@axioma/domain";

@Controller("health")
export class HealthController {
  @Get()
  getHealth(): AppHealth {
    return {
      status: "ok",
      service: "axioma-api",
      environment: process.env.NODE_ENV ?? "development",
      version: process.env.npm_package_version ?? "0.1.0",
      timestamp: new Date().toISOString(),
    };
  }
}
