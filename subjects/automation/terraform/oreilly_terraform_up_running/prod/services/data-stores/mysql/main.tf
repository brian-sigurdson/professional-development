# terraform {
#   backend "s3" {
#     bucket = "bks-name-us-east-2-tf-brikman-state"
#     key    = "prod/services/data-stores/mysql/terraform.tfstate"
#     region = "us-east-2"

#     dynamodb_table = "tf-up-running-locks"
#     encrypt        = true
#   }
# }

# provider "aws" {
#   region = var.region
# }

resource "aws_db_instance" "example" {
  identifier_prefix   = "tf-up-and-running-${var.env}"
  engine              = "mysql"
  allocated_storage   = 10
  instance_class      = var.db_instance_class
  db_name             = "example_database"
  username            = data.aws_ssm_parameter.db_uname.value
  password            = data.aws_ssm_parameter.db_password.value
  skip_final_snapshot = true
}

data "aws_ssm_parameter" "db_password" {
  name = var.db_admin_pwd_ssm_param
}

data "aws_ssm_parameter" "db_uname" {
  name = var.db_admin_username_ssm_param
}
