variable "server_port" {
  description = "The port the server will use for http requests"
  type        = number
  default     = 8080
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

variable "instance_type" {
  description = "The type of ec2 instances to run (eg. t2.micro)"
  type        = string
}

variable "min_size" {
  description = "The minimum number of ec2 instances in the ASG"
  type        = number
}

variable "max_size" {
  description = "The maximum number of ec2 instances in the ASG"
  type        = number
}

variable "db_address" {
  description = "Connect to the database at this endpoint"
  type        = string
}

variable "db_port" {
  description = "The port the database is listening on"
  type        = string
}
