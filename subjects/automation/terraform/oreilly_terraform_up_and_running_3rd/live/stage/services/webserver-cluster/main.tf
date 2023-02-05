locals {
  env    = "stage"
  region = "us-east-2"
}

provider "aws" {
  region = "us-east-2"
}

module "webserver_cluster" {
  source = "../../../../modules/services/webserver-cluster"

  cluster_name           = "webservers-${local.env}"
  db_remote_state_bucket = "name-bks-terraform-up-and-running-3rd-ed-state"
  db_remote_state_key    = "${local.env}/data-stores/mysql/terraform.tfstate"
  aws_region             = local.region
  min_size               = 2
  max_size               = 2
  instance_type          = "t2.micro"
}