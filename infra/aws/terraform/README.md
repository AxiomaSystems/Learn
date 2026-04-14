# AWS Storage Stack

This Terraform stack provisions the AWS storage baseline for Axioma Learn:

- private S3 bucket
- public access fully blocked
- versioning enabled
- server-side encryption enabled
- lifecycle rules for incomplete uploads and stale objects
- least-privilege IAM user for the application

## What this stack is for

Use it when you want the application to move from storage stub mode to real AWS-backed file handling.

It is designed around the current application contract:

- uploads happen through presigned `PUT` URLs
- downloads happen through short-lived presigned `GET` URLs
- object keys stay inside the configured prefix, usually `submissions/`

## Files

- `providers.tf`: Terraform and provider versions
- `variables.tf`: configurable inputs
- `main.tf`: S3 + IAM resources
- `outputs.tf`: generated env values
- `terraform.tfvars.example`: example variable values

## Expected flow

1. Copy `terraform.tfvars.example` to `terraform.tfvars`
2. Set a globally unique `bucket_name`
3. Run `terraform init`
4. Run `terraform plan`
5. Run `terraform apply`
6. Copy the `application_env` output into your app environment

## Security defaults

- Bucket is private by default
- Public ACLs and public policies are blocked
- Versioning is enabled
- Encryption defaults to `AES256`
- Optional `aws:kms` support is available if you supply `kms_key_arn`
- IAM access is limited to the configured prefix

## Notes

- The stack creates an IAM access key because the current app expects static credentials through env vars.
- Once the platform moves to hosted AWS infrastructure, the better next step is replacing static keys with an IAM role.
- The lifecycle rule is intentionally conservative. Tighten it further when retention requirements are clearer.
