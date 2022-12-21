variable "db_admin_username" {
  type        = string
  description = "The admin username"
  sensitive   = true
}

variable "db_admin_password" {
  type        = string
  description = "The admin password"
  sensitive   = true
}
