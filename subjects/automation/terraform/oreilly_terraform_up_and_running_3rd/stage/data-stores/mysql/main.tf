terraform {
  backend "s3" {
    bucket = "name-bks-terraform-up-and-running-3rd-state"
    key    = "stage/data-stores/mysql/terraform.tfstate"
    region = "us-east-1"

    dynamodb_table = "name-bks-terraform-up-and-running-3rd-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_db_instance" "example" {
  identifier_prefix   = "tfuar"
  engine              = "mysql"
  allocated_storage   = 10
  instance_class      = "db.t2.micro"
  skip_final_snapshot = true
  db_name             = "example_db"
  username            = var.db_admin_username
  password            = var.db_admin_password
}