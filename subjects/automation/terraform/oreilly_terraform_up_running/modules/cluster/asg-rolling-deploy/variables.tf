
variable "cluster_name" {
  description = "The name to use for all the cluster resources"
  type        = string
}

variable "ami" {
  description = "The AMI to run in the cluster"
  type        = string
  default     = "ami-02f3416038bdb17fb" # ubuntu should have busybox installed by default
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

variable "custom_tags" {
  description = "Custom tags to set on the instances in the ASG"
  type        = map(string)
  default     = {}
}

variable "server_port" {
  description = "The port the server will use for http requests"
  type        = number
}
