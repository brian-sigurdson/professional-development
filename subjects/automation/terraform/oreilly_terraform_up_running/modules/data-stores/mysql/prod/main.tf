terraform {
  backend "s3" {
    bucket = "bks-name-us-east-2-tf-brikman-state"
    key    = "prod/services/webserver-cluster/terraform.tfstate"
    region = "us-east-2"

    dynamodb_table = "tf-up-running-locks"
    encrypt        = true
  }
}

locals {
  region                      = "us-east-2"
  db_admin_pwd_ssm_param      = "/brikman/terraform-up-and-running/${local.env}/admin/mysql-database-password"
  db_admin_username_ssm_param = "/brikman/terraform-up-and-running/${local.env}/admin/username"
  env                         = "prod"
}

resource "aws_db_instance" "example" {
  identifier_prefix   = "tf-up-and-running-${local.env}"
  engine              = "mysql"
  allocated_storage   = 10
  instance_class      = var.db_instance_class
  db_name             = "example_database"
  username            = data.aws_ssm_parameter.db_uname.value
  password            = data.aws_ssm_parameter.db_password.value
  skip_final_snapshot = true
}

data "aws_ssm_parameter" "db_password" {
  name = local.db_admin_pwd_ssm_param
}

data "aws_ssm_parameter" "db_uname" {
  name = local.db_admin_username_ssm_param
}
