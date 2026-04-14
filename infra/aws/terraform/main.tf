locals {
  normalized_prefix = endswith(var.storage_prefix, "/") ? var.storage_prefix : "${var.storage_prefix}/"

  default_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "terraform"
    Service     = "storage"
  }

  tags = merge(local.default_tags, var.tags)
}

resource "aws_s3_bucket" "app_storage" {
  bucket        = var.bucket_name
  force_destroy = var.allow_force_destroy

  tags = local.tags
}

resource "aws_s3_bucket_public_access_block" "app_storage" {
  bucket = aws_s3_bucket.app_storage.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "app_storage" {
  bucket = aws_s3_bucket.app_storage.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_versioning" "app_storage" {
  bucket = aws_s3_bucket.app_storage.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "app_storage" {
  bucket = aws_s3_bucket.app_storage.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = var.enable_kms ? "aws:kms" : "AES256"
      kms_master_key_id = var.enable_kms ? var.kms_key_arn : null
    }
    bucket_key_enabled = var.enable_kms
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "app_storage" {
  bucket = aws_s3_bucket.app_storage.id

  rule {
    id     = "abort-incomplete-multipart-uploads"
    status = "Enabled"

    abort_incomplete_multipart_upload {
      days_after_initiation = 7
    }
  }

  rule {
    id     = "expire-stale-draft-submissions"
    status = "Enabled"

    filter {
      prefix = local.normalized_prefix
    }

    expiration {
      days = var.draft_expiration_days
    }

    noncurrent_version_expiration {
      noncurrent_days = var.noncurrent_version_expiration_days
    }
  }
}

data "aws_iam_policy_document" "app_storage_access" {
  statement {
    sid    = "ListBucketForManagedPrefix"
    effect = "Allow"

    actions = [
      "s3:ListBucket",
    ]

    resources = [
      aws_s3_bucket.app_storage.arn,
    ]

    condition {
      test     = "StringLike"
      variable = "s3:prefix"
      values   = ["${local.normalized_prefix}*"]
    }
  }

  statement {
    sid    = "ReadWriteManagedObjects"
    effect = "Allow"

    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:AbortMultipartUpload",
    ]

    resources = [
      "${aws_s3_bucket.app_storage.arn}/${local.normalized_prefix}*",
    ]
  }

  dynamic "statement" {
    for_each = var.enable_kms ? [1] : []

    content {
      sid    = "UseKmsKeyForS3Objects"
      effect = "Allow"

      actions = [
        "kms:Decrypt",
        "kms:Encrypt",
        "kms:GenerateDataKey",
      ]

      resources = [var.kms_key_arn]
    }
  }
}

resource "aws_iam_user" "app_storage" {
  name = "${var.project_name}-${var.environment}-storage-app"
  path = "/service-users/"

  tags = local.tags
}

resource "aws_iam_access_key" "app_storage" {
  user = aws_iam_user.app_storage.name
}

resource "aws_iam_user_policy" "app_storage" {
  name   = "${var.project_name}-${var.environment}-storage-app"
  user   = aws_iam_user.app_storage.name
  policy = data.aws_iam_policy_document.app_storage_access.json
}
