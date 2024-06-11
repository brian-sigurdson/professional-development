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

variable "aws_subnet_cidr_block" {
  type    = string
  default = "10.0.0.0/24"
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

variable "aws_instance_user_data" {
  type    = string
  default = <<EOF
#! /bin/bash
sudo amazon-linux-extras install -y nginx1
sudo service nginx start
sudo rm /usr/share/nginx/html/index.html
echo '<html><head><title>Taco Team Server</title></head><body style=\"background-color:#1F778D\"><p style=\"text-align: center;\"><span style=\"color:#FFFFFF;\"><span style=\"font-size:28px;\">You did it! Have a &#127790;</span></span></p></body></html>' | sudo tee /usr/share/nginx/html/index.html
EOF
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