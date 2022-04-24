# bucket name
variable "bucket_name" {
  type        = string
  description = "s3 bucket name"
}

# elb service account arn
variable "elb_service_account_arn" {
  type        = string
  description = "ARN of ELB service account"
}

# common tags
variable "common_tags" {
  type        = map(string)
  description = "Map of tags to be applied to all resources"
  default     = {}
}