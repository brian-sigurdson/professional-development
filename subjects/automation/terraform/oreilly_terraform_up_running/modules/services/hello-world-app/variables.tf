variable "db_remote_state_bucket" {
  description = "The name of the S3 bucket for the database's remote state"
  type        = string
  default     = "bks-name-us-east-2-tf-brikman-state"
}

variable "db_remote_state_key" {
  description = "The path for the database's remote state in S3"
  type        = string
  default     = "stage/services/webserver-cluster/terraform.tfstate"
}

# variable "db_address" {
#   description = "Connect to the database at this endpoint"
#   type        = string
# }

variable "db_port" {
  description = "The port the database is listening on"
  type        = string
  default     = "3306"
}

variable "server_text" {
  description = "The text the web server should return"
  type        = string
  default     = "Hello, World"
}

variable "environment" {
  description = "The name of the environment we're deploying to"
  type        = string
  default     = "stage"
}

variable "server_port" {
  description = "The port the server will use for http requests"
  type        = number
  default     = 8080
}

variable "cluster_name" {
  description = "The name to use for all the cluster resources"
  type        = string
  default     = "my-cluster"
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

variable "enable_autoscaling" {
  description = "If set to true, enable auto scaling"
  type        = bool
  default     = false
}

variable "instance_listen_port" {
  description = "The port the server will use for http requests"
  type        = number
}
