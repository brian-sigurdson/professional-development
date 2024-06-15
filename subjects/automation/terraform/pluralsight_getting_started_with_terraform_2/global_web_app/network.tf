##################################################################################
# DATA
##################################################################################
data "aws_availability_zones" "available" {
  state = "available"
}

##################################################################################
# RESOURCES
##################################################################################

# NETWORKING #
module "app" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "4.0.2"

  cidr = var.vpc_cidr_block

  azs = slice(data.aws_availability_zones.available.names, 0, var.vpc_public_subnet_count)
  # private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets = [for subnet in range(var.vpc_public_subnet_count) : cidrsubnet(var.vpc_cidr_block, 8, subnet)]

  enable_nat_gateway = false
  enable_vpn_gateway = false

  enable_dns_hostnames    = var.aws_vpc_enable_dns_hostnames
  map_public_ip_on_launch = var.aws_subnet_map_public_ip_on_launch

  tags = merge(local.common_tags, { Name = "${local.naming_prefix}-vpc" })
}

# SECURITY GROUPS #
# Nginx security group 
resource "aws_security_group" "nginx_sg" {
  name   = "${local.naming_prefix}-vpc"
  vpc_id = module.app.vpc_id

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

  tags = merge(local.common_tags, { Name = "${local.naming_prefix}-nginx_sg" })
}

resource "aws_security_group" "alb_sg" {
  name   = "${local.naming_prefix}-sg"
  vpc_id = module.app.vpc_id

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

  tags = merge(local.common_tags, { Name = "${local.naming_prefix}-alb_sg" })
}
