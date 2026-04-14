variable "project_name" {
  description = "Short project slug used for names and tags."
  type        = string
  default     = "axioma-learn"
}

variable "environment" {
  description = "Deployment environment such as dev, staging, or prod."
  type        = string
}

variable "aws_region" {
  description = "AWS region for the storage stack."
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Unique bucket name for application files."
  type        = string
}

variable "storage_prefix" {
  description = "Top-level prefix the application is allowed to manage."
  type        = string
  default     = "submissions/"
}

variable "presigned_upload_ttl_seconds" {
  description = "Upload URL TTL written back into application env."
  type        = number
  default     = 600
}

variable "presigned_download_ttl_seconds" {
  description = "Download URL TTL written back into application env."
  type        = number
  default     = 600
}

variable "enable_kms" {
  description = "Whether to use SSE-KMS instead of SSE-S3."
  type        = bool
  default     = false
}

variable "kms_key_arn" {
  description = "Existing KMS key ARN when enable_kms is true."
  type        = string
  default     = ""
}

variable "allow_force_destroy" {
  description = "Whether Terraform may destroy the bucket even if it still contains objects."
  type        = bool
  default     = false
}

variable "draft_expiration_days" {
  description = "Optional lifecycle expiration window for stale draft submissions."
  type        = number
  default     = 30
}

variable "noncurrent_version_expiration_days" {
  description = "Retention window for noncurrent object versions."
  type        = number
  default     = 90
}

variable "tags" {
  description = "Extra AWS tags."
  type        = map(string)
  default     = {}
}
