variable "server_port" {
  type        = number
  default     = 8080
  description = "The port the server will use for HTTP requests"
}

variable "cluster_name" {
  description = "The name to use for all the cluster resources"
  type        = string
}

variable "db_remote_state_bucket" {
  description = "The name of the S3 bucket for the database's remote state"
  type        = string
}

variable "db_remote_state_key" {
  description = "The path for the database's remote state in S3"
  type        = string
}

variable "aws_region" {
  description = "The region to deploy resources"
  type        = string
  default     = "us-east-2"
}

variable "instance_type" {
  description = "The type of EC2 instances to run (eg. t2.micro)"
  type        = string
  default     = "t2.micro"
}

variable "min_size" {
  description = "The minimum number of EC2 instnaces to run"
  type        = number
  default     = 2
}

variable "max_size" {
  description = "The maximum number of EC2 instnaces to run"
  type        = number
  default     = 5
}