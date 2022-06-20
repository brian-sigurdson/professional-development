provider "aws" {
  region = "us-east-2"
}

# this needs to go in the mysql/main.tf for prod
# terraform {
#   backend "s3" {
#     bucket = "bks-name-us-east-2-tf-brikman-state"
#     key    = "prod/services/webserver-cluster/terraform.tfstate"
#     region = "us-east-2"

#     dynamodb_table = "tf-up-running-locks"
#     encrypt        = true
#   }
# }

module "webserver_cluster" {
  source = "../../../modules/services/webserver-cluster"

  cluster_name           = "webservers-stage"
  db_remote_state_bucket = "bks-name-us-east-2-tf-brikman-state"
  db_remote_state_key    = "stage/services/webserver-cluster/terraform.tfstate"

  instance_type = "t2.micro"
  max_size      = 2
  min_size      = 2
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

}
