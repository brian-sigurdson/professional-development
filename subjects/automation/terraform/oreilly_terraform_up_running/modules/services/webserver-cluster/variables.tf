variable "server_port" {
  description = "The port the server will use for http requests"
  type        = number
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

variable "custom_tags" {
  description = "Custom tags to set on the instances in the ASG"
  type        = map(string)
  default     = {}
}

variable "enable_autoscaling" {
  description = "If set to true, enable auto scaling"
  type        = bool
  default     = false
}

variable "give_neo_cloudwatch_full_access" {
  description = "If true, neo gets full access to cloudwatch"
  type        = bool
}

variable "if_else_directive_name" {
  description = "A name to render"
  type        = string
  default     = "bob"
}

variable "ami" {
  description = "The AMI to run in the cluster"
  type        = string
  default     = "ami-02f3416038bdb17fb" # ubuntu should have busybox installed by default
}

variable "server_text" {
  description = "The text the web server should return"
  type        = string
  default     = "Hello, World"
}
