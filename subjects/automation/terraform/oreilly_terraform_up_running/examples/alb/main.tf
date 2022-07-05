provider "aws" {
  region = "us-east-2"

  # Allow any 2.x version of the AWS provider
  # version = "~> 2.0"
}

data "aws_vpc" "default" {
  default = true
}

data "aws_subnet_ids" "default" {
  vpc_id = data.aws_vpc.default.id
}

module "alb" {
  source = "../../modules/networking/alb"

  alb_name   = "my-alb"
  subnet_ids = data.aws_subnet_ids.default.ids
}
