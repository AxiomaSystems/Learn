import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
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

  @Post("presign-upload")
  async presignUpload(@Body() body: unknown) {
    const parsedBody = presignUploadSchema.safeParse(body);

    if (!parsedBody.success) {
      throw new BadRequestException(parsedBody.error.flatten());
    }

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
  }
}
