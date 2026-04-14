import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
  type S3ClientConfig,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

@Injectable()
export class StorageService {
  constructor(private readonly configService: ConfigService) {}

  private get bucket() {
    return this.configService.get<string>("S3_BUCKET") ?? "";
  }

  private get region() {
    return this.configService.get<string>("S3_REGION") ?? "us-east-1";
  }

  private get endpoint() {
    return this.configService.get<string>("S3_ENDPOINT") ?? undefined;
  }

  private get accessKeyId() {
    return this.configService.get<string>("AWS_ACCESS_KEY_ID") ?? "";
  }

  private get secretAccessKey() {
    return this.configService.get<string>("AWS_SECRET_ACCESS_KEY") ?? "";
  }

  private get forcePathStyle() {
    return this.configService.get<string>("S3_FORCE_PATH_STYLE") === "true";
  }

  isConfigured() {
    return Boolean(
      this.bucket &&
        this.region &&
        this.accessKeyId &&
        this.secretAccessKey,
    );
  }

  private getClient() {
    if (!this.isConfigured()) {
      return null;
    }

    const clientConfig: S3ClientConfig = {
      region: this.region,
      forcePathStyle: this.forcePathStyle,
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
      },
    };

    if (this.endpoint) {
      clientConfig.endpoint = this.endpoint;
    }

    return new S3Client(clientConfig);
  }

  async createUploadUrl(input: {
    storageKey: string;
    mimeType: string;
    fileName: string;
  }) {
    const client = this.getClient();

    if (!client) {
      return null;
    }

    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: input.storageKey,
      ContentType: input.mimeType,
      Metadata: {
        originalFileName: input.fileName,
      },
    });

    const uploadUrl = await getSignedUrl(client, command, {
      expiresIn: 60 * 10,
    });

    return {
      uploadUrl,
      expiresInSeconds: 60 * 10,
    };
  }

  async createDownloadUrl(input: {
    storageKey: string;
    fileName?: string | null;
  }) {
    const client = this.getClient();

    if (!client) {
      return null;
    }

    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: input.storageKey,
      ResponseContentDisposition: input.fileName
        ? `inline; filename="${input.fileName}"`
        : undefined,
    });

    return getSignedUrl(client, command, {
      expiresIn: 60 * 10,
    });
  }
}
