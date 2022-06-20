provider "aws" {
  region = "us-east-2"
}

# this needs to go in the mysql/main.tf for stage
# terraform {
#   backend "s3" {
#     bucket = "bks-name-us-east-2-tf-brikman-state"
#     key    = "stage/services/webserver-cluster/terraform.tfstate"
#     region = "us-east-2"

#     dynamodb_table = "tf-up-running-locks"
#     encrypt        = true
#   }
# }

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

}
