# I don't like having a mysql in stage and prod, but I'm not sure how to get around
# the use of the S3 backend without having this terraform {} block 
#
# Maybe in the next chapter we'll decouple
#
# I know we can't specify terraform vars in the terraform block
#
# Terragrunt provides a work around
#
terraform {
  backend "s3" {
    bucket = "bks-name-us-east-2-tf-brikman-state"
    key    = "stage/services/webserver-cluster/terraform.tfstate"
    region = "us-east-2"

    dynamodb_table = "tf-up-running-locks"
    encrypt        = true
  }
}

locals {
  region          = "us-east-2"
  env             = "stage"
  ec2_listen_port = 8080
}

provider "aws" {
  region = local.region
}

module "webserver_cluster" {
  source = "../../../modules/services/webserver-cluster"

  cluster_name           = "webservers-${local.env}"
  db_remote_state_bucket = "bks-name-us-east-2-tf-brikman-state"
  db_remote_state_key    = "${local.env}/services/webserver-cluster/terraform.tfstate"
  instance_type          = "t2.micro"
  max_size               = 4
  min_size               = 2
  db_address             = module.mysql.db_address
  db_port                = module.mysql.db_port
  server_port            = local.ec2_listen_port

  depends_on = [
    module.mysql
  ]
}

# example from pg. 125, not to be implemented
# resource "aws_security_group_rule" "allow_testing_inbound" {
#   from_port         = 12345
#   protocol          = "tcp"
#   security_group_id = module.webserver_cluster.alb_security_group_id
#   to_port           = 12345
#   type              = "ingress"
#   cidr_blocks       = ["0.0.0.0/0"]
# }

module "mysql" {
  source = "../../../modules/services/data-stores/mysql"

  region                      = local.region
  db_admin_pwd_ssm_param      = "/brikman/terraform-up-and-running/${local.env}/admin/mysql-database-password"
  db_admin_username_ssm_param = "/brikman/terraform-up-and-running/${local.env}/admin/username"
  env                         = local.env

}
