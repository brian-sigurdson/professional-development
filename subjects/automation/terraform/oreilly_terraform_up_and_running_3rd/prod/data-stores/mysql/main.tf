terraform {
  backend "s3" {
    bucket = "name-bks-terraform-up-and-running-3rd-state"
    key    = "prod/data-stores/mysql/terraform.tfstate"
    # terraform blocks cannot contain vars, so we'll get an error if the region var is different.
    # eventually, use Terragrunt
    region = "us-east-1"

    dynamodb_table = "name-bks-terraform-up-and-running-3rd-locks"
    encrypt        = true
  }
}

locals {
  env    = "prod"
  region = "us-east-1"
}

provider "aws" {
  region = local.region
}

resource "aws_db_instance" "example" {
  identifier_prefix   = "tfuar"
  engine              = "mysql"
  allocated_storage   = 10
  instance_class      = "db.t2.micro"
  skip_final_snapshot = true
  db_name             = "example_${local.env}"
  username            = var.db_admin_username
  password            = var.db_admin_password
}