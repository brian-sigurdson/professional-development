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
  default     = "us-east-1"
}