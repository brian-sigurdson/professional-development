variable "naming_prefix" {
  type        = string
  description = "Naming prefix for all resources."
  default     = "globoweb"
}

variable "aws_region" {
  type        = string
  description = "Region for AWS Resources"
  default     = "us-east-1"
}

variable "vpc_cidr_block" {
  type        = string
  description = "default cidr block"
  default     = "10.0.0.0/16"
}

variable "vpc_subnet_count" {
  type        = number
  description = "Number of subnets to create"
  default     = 2
}

variable "enable_dns_hostnames" {
  type        = bool
  description = "enable dns hostnames?"
  default     = true
}

variable "vpc_subnets_cidr_block" {
  type        = list(string)
  description = "Cidr blocks for subnets in vpc"
  default     = ["10.0.0.0/24", "10.0.1.0/24"]
}

variable "map_public_ip_on_launch" {
  type        = bool
  description = "map public ip on launch"
  default     = true
}

variable "instance_type" {
  type        = string
  description = "Instance type for ec2 instances"
  default     = "t2.micro"
}

variable "vpc_instance_count" {
  type        = number
  description = "Number of instances to create"
  default     = 2
}

variable "company" {
  type        = string
  description = "Company name for resource tagging"
  default     = "Globomantics"
}

variable "project" {
  type        = string
  description = "Project name for resource tagging"
}

variable "billing_code" {
  type        = string
  description = "Billing code for resource tagging"
}