locals {
  region = "us-east-2"
  # any_port     = 0
  # any_protocol = "-1"
  # tcp_protocol = "tcp"
  # all_ips      = ["0.0.0.0/0"]
}

provider "aws" {
  region = local.region
}

data "aws_vpc" "default" {
  default = true
}

data "aws_subnet_ids" "default" {
  vpc_id = data.aws_vpc.default.id
}

module "asg" {
  source = "../../modules/cluster/asg-rolling-deploy"

  cluster_name  = "my-example-cluster"
  ami           = "ami-02f3416038bdb17fb"
  instance_type = "t2.micro"

  min_size             = 1
  max_size             = 1
  enable_autoscaling   = false
  instance_listen_port = 8080

  subnet_ids = data.aws_subnet_ids.default.ids
}

module "elb" {
  source = "../../modules/networking/alb"

  alb_name   = "my-test-name-alb"
  subnet_ids = data.aws_subnet_ids.default.ids
}
