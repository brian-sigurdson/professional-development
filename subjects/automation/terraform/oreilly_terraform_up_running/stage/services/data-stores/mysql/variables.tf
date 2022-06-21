variable "region" {
  description = "The region in which to run"
  type        = string
  default     = "us-east-2"
  nullable    = false

  validation {
    # just lock it down for now
    condition     = contains(["us-east-2"], var.region)
    error_message = "Only us-east-2 is allowed."
  }
}

variable "db_admin_pwd_ssm_param" {
  description = "The ssm parameter that has the database administrative user password"
  type        = string
}

variable "db_admin_username_ssm_param" {
  description = "The ssm parameter that has the database administrative user name"
  type        = string
}

variable "env" {
  description = "The environment in which to run"
  type        = string
  nullable    = false

  validation {
    condition     = contains(["prod", "stage"], var.env)
    error_message = "Only prod or stage are allowed."
  }
}

variable "db_instance_class" {
  description = "The database instance class"
  type        = string
  nullable    = false
  default     = "t2.micro"

  validation {
    condition     = contains(["t2.micro"], var.db_instance_class)
    error_message = "Only t2.micro is allowed."
  }
}
