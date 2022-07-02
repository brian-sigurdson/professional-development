variable "db_remote_state_bucket" {
  description = "The name of the S3 bucket for the database's remote state"
  type        = string
}

variable "db_remote_state_key" {
  description = "The path for the database's remote state in S3"
  type        = string
}

variable "db_address" {
  description = "Connect to the database at this endpoint"
  type        = string
}

variable "db_port" {
  description = "The port the database is listening on"
  type        = string
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

variable "server_text" {
  description = "The text the web server should return"
  type        = string
  default     = "Hello, World"
}
