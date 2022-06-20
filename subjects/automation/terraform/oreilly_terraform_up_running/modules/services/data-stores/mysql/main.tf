terraform {
  backend "s3" {
    bucket = "bks-name-us-east-2-tf-brikman-state"
    key    = "stage/services/data-stores/mysql/terraform.tfstate"
    region = "us-east-2"

    dynamodb_table = "tf-up-running-locks"
    encrypt        = true
  }
}

provider "aws" {
  region = "us-east-2"
}

resource "aws_db_instance" "example" {
  identifier_prefix   = "tf-up-and-running"
  engine              = "mysql"
  allocated_storage   = 10
  instance_class      = "db.t2.micro"
  db_name             = "example_database"
  username            = "admin"
  password            = data.aws_ssm_parameter.db_password.value
  skip_final_snapshot = true
}

data "aws_ssm_parameter" "db_password" {
  name = "/brikman/terraform-up-and-running/ch03/mysql-database-password"
}
