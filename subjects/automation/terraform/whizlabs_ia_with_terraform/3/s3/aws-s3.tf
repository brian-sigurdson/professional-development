provider "aws" {
  region = var.aws-region
}

resource "aws_s3_bucket" "bucket1" {
  bucket = "name-bks-whizlabs-terraform"

  tags = {
    Name        = "bks-example"
    Environment = "dev"
  }

}