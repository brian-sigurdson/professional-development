locals {
  env    = "prod"
  region = "us-east-1"
}

provider "aws" {
  region = "us-east-1"
}

module "webserver_cluster" {
  source = "../../../modules/services/webserver-cluster"

  cluster_name           = "webservers-${local.env}"
  db_remote_state_bucket = "name-bks-terraform-up-and-running-3rd-state"
  db_remote_state_key    = "${local.env}/data-stores/mysql/terraform.tfstate"
  min_size               = 2
  max_size               = 10
  instance_type          = "t2.micro"
}

resource "aws_autoscaling_schedule" "scale_out_during_business_hours" {
  scheduled_action_name = "scale-out-during-business-hours"
  min_size              = 2
  max_size              = 10
  # desired_capacity      = 10
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