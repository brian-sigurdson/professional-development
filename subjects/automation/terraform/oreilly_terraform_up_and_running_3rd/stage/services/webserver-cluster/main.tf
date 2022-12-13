locals {
  env = "stage"
  region = "us-east-1"
}

provider "aws" {
    region = "us-east-1"
}

module "webserver_cluster" {
    source = "../../../modules/services/webserver-cluster"

    cluster_name = "webservers-${local.env}"
    db_remote_state_bucket = "name-bks-terraform-up-and-running-3rd-state"
    db_remote_state_key = "${local.env}/data-stores/mysql/terraform.tfstate"
    aws_region = local.region
}