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

variable "environment" {
  description = "The name of the environment we're deploying to"
  type        = string
}

variable "server_port" {
  description = "The port the server will use for http requests"
  type        = number
}

variable "cluster_name" {
  description = "The name to use for all the cluster resources"
  type        = string
}
