variable "region_name" {
  description = "Region name of AWS to manage the resources"
  type        = string
  default     = "us-east-1"
}

variable "vpc_cidr_block" {
  description = "Provider CIDR for VPC to use for EKS Cluster"
  type        = string
  default     = "10.10.0.0/16"
}

variable "public_subnets" {
  description = "Specify Public subnet details for VPC"
  type        = list(string)
  default     = ["10.10.0.0/24", "10.10.2.0/24"]
}

variable "private_subnets" {
  description = "Specify Private subnet details for VPC"
  type        = list(string)
  default     = ["10.10.1.0/24", "10.10.3.0/24"]
}

variable "public_az" {
  description = "AZ names to create Public Subnets"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
  #TODO: Need to add validation
}

variable "private_az" {
  description = "AZ names to create Private Subnets"
  type        = list(string)
  default     = ["us-east-1a", "us-east-1b"]
  #TODO: Need to add validation
}

variable "environment" {
  description = "Environment name for target Deployment"
  type        = string
  default     = "Development"
}