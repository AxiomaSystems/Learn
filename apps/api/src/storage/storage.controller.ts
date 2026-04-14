import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from "@nestjs/common";
import { z } from "zod";
import { StorageService } from "./storage.service";

const presignUploadSchema = z.object({
  storageKey: z.string().trim().min(1).max(512),
  fileName: z.string().trim().min(1).max(255),
  mimeType: z.string().trim().min(1).max(255),
});

@Controller("storage")
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Get("security-profile")
  getSecurityProfile() {
    return this.storageService.getSecurityProfile();
  }

  @Post("presign-upload")
  async presignUpload(@Body() body: unknown) {
    const parsedBody = presignUploadSchema.safeParse(body);

    if (!parsedBody.success) {
      throw new BadRequestException(parsedBody.error.flatten());
    }

    try {
      const upload = await this.storageService.createUploadUrl(parsedBody.data);

      if (!upload) {
        throw new BadRequestException(
          "S3 storage is not configured yet. Set the required AWS environment variables first.",
        );
      }

      return {
        ok: true,
        storageKey: parsedBody.data.storageKey,
        ...upload,
      };
    } catch (error) {
      throw new BadRequestException(
        error instanceof Error ? error.message : "Storage presign failed.",
      );
    }
  }
}
