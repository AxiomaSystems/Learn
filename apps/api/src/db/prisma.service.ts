import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "../../../../packages/db/generated/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
