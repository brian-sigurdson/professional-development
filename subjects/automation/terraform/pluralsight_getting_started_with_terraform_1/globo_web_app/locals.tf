resource "random_integer" "rand" {
  min = 10000
  max = 99999
}

locals {
  common_tags = {
    company      = var.company
    project      = "${var.company}-${var.project}"
    billing_code = var.billing_code
  }

  env         = "dev"
  name_prefix = "${var.naming_prefix}-${local.env}"

  s3_bucket_name = lower("${local.name_prefix}-${random_integer.rand.result}")
}
