locals {
  region      = "us-east-2"
  bucket_name = "bks-name-${local.region}-tf-brikman-state"
}
provider "aws" {
  region = local.region
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = local.bucket_name

  # prevent accidental deletion
  lifecycle {
    prevent_destroy = true
  }

  # enable versioning to keep a full history of state file revisions
  versioning {
    enabled = true
  }

  # enable server-side encryption by default
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}
