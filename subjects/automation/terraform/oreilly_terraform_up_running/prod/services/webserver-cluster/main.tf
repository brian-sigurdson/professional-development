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
    key    = "prod/services/webserver-cluster/terraform.tfstate"
    region = "us-east-2"

    dynamodb_table = "tf-up-running-locks"
    encrypt        = true
  }
}

locals {
  region = "us-east-2"
  env    = "prod"
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
  max_size               = 10
  min_size               = 2
  db_address             = module.mysql.db_address
  db_port                = module.mysql.db_port

  depends_on = [
    module.mysql
  ]
}

# the desired capacities for autoscaling schedules are the same
# i don't need 5 instances running when I happen to be testing in the afternoon
resource "aws_autoscaling_schedule" "scale_out_during_business_hours" {
  scheduled_action_name = "scale-out-during-business-hours"
  min_size              = 2
  max_size              = 10
  desired_capacity      = 2
  recurrence            = "0 9 * * *"

  autoscaling_group_name = module.webserver_cluster.asg_name
}

resource "aws_autoscaling_schedule" "scale_in_at_night" {
  scheduled_action_name = "scale-in-at-night"
  min_size              = 2
  max_size              = 10
  desired_capacity      = 2
  recurrence            = "0 17 * * *"

  autoscaling_group_name = module.webserver_cluster.asg_name
}

module "mysql" {
  source = "../../../modules/services/data-stores/mysql"

  region                      = local.region
  db_admin_pwd_ssm_param      = "/brikman/terraform-up-and-running/${local.env}/admin/mysql-database-password"
  db_admin_username_ssm_param = "/brikman/terraform-up-and-running/${local.env}/admin/username"
  env                         = local.env

}
