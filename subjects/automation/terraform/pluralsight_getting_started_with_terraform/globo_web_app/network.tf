locals {
  name = "ps-ned"
}

##################################################################################
# DATA
##################################################################################

data "aws_ssm_parameter" "ami" {
  name = "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2"
}

data "aws_availability_zones" "available" {
  state = "available"
}

##################################################################################
# RESOURCES
##################################################################################

# NETWORKING #
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.10.0"

  cidr = var.vpc_cidr_block

  azs            = slice(data.aws_availability_zones.available.names, 0, (var.vpc_subnet_count))
  public_subnets = [for subnet in range(var.vpc_subnet_count) : cidrsubnet(var.vpc_cidr_block, 8, subnet)]

  enable_nat_gateway = false
  enable_vpn_gateway = false

  tags = merge(local.common_tags, { name = "${local.name_prefix}-vpc" })
}


# SECURITY GROUPS #
# Nginx security group 
resource "aws_security_group" "nginx-sg" {
  name   = "${local.name_prefix}-nginx-sg"
  vpc_id = module.vpc.vpc_id

  tags = merge(local.common_tags, { name = "${local.name_prefix}-nginx-sg" })

  # HTTP access from anywhere
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [var.vpc_cidr_block]
  }

  # outbound internet access
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# ALB security group 
resource "aws_security_group" "alb_sg" {
  name   = "${local.name_prefix}-alb_sg"
  vpc_id = module.vpc.vpc_id

  tags = merge(local.common_tags, { name = "${local.name_prefix}-alb_sg" })

  # HTTP access from anywhere
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # outbound internet access
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

}

