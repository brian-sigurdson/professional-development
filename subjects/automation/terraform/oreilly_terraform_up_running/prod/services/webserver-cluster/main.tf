locals {
  region = "us-east2"
  env    = "prod"
}

provider "aws" {
  region = local.region
}

module "webserver_cluster" {
  source = "../../../modules/services/webserver-cluster"

  cluster_name           = "webservers-stage"
  db_remote_state_bucket = "bks-name-us-east-2-tf-brikman-state"
  db_remote_state_key    = "prod/services/webserver-cluster/terraform.tfstate"

  instance_type = "t2.micro"
  max_size      = 10
  min_size      = 2
}

resource "aws_autoscaling_schedule" "scale_out_during_business_hours" {
  scheduled_action_name = "scale-out-during-business-hours"
  min_size              = 2
  max_size              = 10
  desired_capacity      = 10
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
  source = "../data-stores/mysql/"

  region                      = local.region
  db_admin_pwd_ssm_param      = "/brikman/terraform-up-and-running/${local.env}/admin/mysql-database-password"
  db_admin_username_ssm_param = "/brikman/terraform-up-and-running/${local.env}/admin/username"
  env                         = local.env

}
