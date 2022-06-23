locals {
  region = "us-east-2"
}

provider "aws" {
  region = local.region
}

resource "aws_iam_user" "example" {
  count = length(var.user_names)
  name  = var.user_names[count.index]
}
