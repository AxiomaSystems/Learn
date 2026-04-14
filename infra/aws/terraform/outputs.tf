output "s3_bucket_name" {
  value       = aws_s3_bucket.app_storage.bucket
  description = "Private bucket used for application file storage."
}

output "storage_prefix" {
  value       = local.normalized_prefix
  description = "Prefix the application is expected to use for managed objects."
}

output "app_storage_access_key_id" {
  value       = aws_iam_access_key.app_storage.id
  description = "Access key id for the storage app user."
}

output "app_storage_secret_access_key" {
  value       = aws_iam_access_key.app_storage.secret
  description = "Secret access key for the storage app user."
  sensitive   = true
}

output "application_env" {
  value = {
    S3_BUCKET                         = aws_s3_bucket.app_storage.bucket
    S3_REGION                         = var.aws_region
    S3_SERVER_SIDE_ENCRYPTION         = var.enable_kms ? "aws:kms" : "AES256"
    S3_KMS_KEY_ID                     = var.enable_kms ? var.kms_key_arn : ""
    S3_PRESIGNED_UPLOAD_TTL_SECONDS   = tostring(var.presigned_upload_ttl_seconds)
    S3_PRESIGNED_DOWNLOAD_TTL_SECONDS = tostring(var.presigned_download_ttl_seconds)
    S3_TENANT_PREFIX                  = local.normalized_prefix
    AWS_ACCESS_KEY_ID                 = aws_iam_access_key.app_storage.id
    AWS_SECRET_ACCESS_KEY             = aws_iam_access_key.app_storage.secret
  }
  sensitive   = true
  description = "Application environment variables to copy into local or hosted environments."
}
