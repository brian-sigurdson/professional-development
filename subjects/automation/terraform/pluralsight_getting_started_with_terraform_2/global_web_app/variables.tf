variable "region" {
  type        = string
  description = "AWS region to sue for resources."
  default     = "us-east-1"
}

variable "aws_ssm_parameter_name" {
  type    = string
  default = "/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2"
}

variable "aws_vpc_cidr_block" {
  type        = string
  description = "The VPC cidr setting"
  default     = "10.0.0.0/16"
}

variable "aws_vpc_enable_dns_hostnames" {
  type    = bool
  default = true
}

variable "aws_public_subnets_cidr_block" {
  type        = list(string)
  description = "CIDR Block for public subnets in vpc"
  default     = ["10.0.0.0/24", "10.0.1.0/24"]
}

variable "aws_subnet_map_public_ip_on_launch" {
  type    = bool
  default = true
}

variable "aws_route_table_cidr_block" {
  type    = string
  default = "0.0.0.0/0"
}

variable "aws_security_group_name" {
  type    = string
  default = "nginx_sg"
}

variable "aws_security_group_ingress_cidr_blocks" {
  type    = string
  default = "0.0.0.0/0"
}

variable "aws_security_group_egress_cidr_blocks" {
  type    = string
  default = "0.0.0.0/0"
}

variable "aws_instance_instance_type" {
  type    = string
  default = "t3.micro"
}

variable "company" {
  type    = string
  default = "Globomantics"
}

variable "project" {
  type = string
}

variable "billing_code" {
  type = string
}