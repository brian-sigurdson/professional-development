locals {
  http_port    = 80
  any_port     = 0
  any_protocol = "-1"
  tcp_protocol = "tcp"
  all_ips      = ["0.0.0.0/0"]
  region       = "us-east-2"
}



data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

data "aws_iam_users" "example" {}
data "aws_iam_user" "neo" {
  user_name = "neo"
}

###################################################################################################
# iam related
###################################################################################################

# data "aws_iam_policy" "cloudwatch_read_only" {
#   name = "cloudwatch-read-only"
# }

# data "aws_iam_policy" "cloudwatch_full_access" {
#   name = "cloudwatch-full-access"
# }

# resource "aws_iam_policy" "cloudwatch_read_only" {

#   name   = "cloudwatch-read-only"
#   policy = data.aws_iam_policy_document.cloudwatch_read_only.json
# }

# data "aws_iam_policy_document" "cloudwatch_read_only" {
#   statement {
#     effect = "Allow"
#     actions = [
#       "cloudwatch:Describe*",
#       "cloudwatch:Get*",
#       "cloudwatch:List*"
#     ]
#     resources = ["*"]
#   }
# }

# resource "aws_iam_policy" "cloudwatch_full_access" {
#   # do not create if it already exists
#   count = data.aws_iam_policy.cloudwatch_full_access.policy_id == null ? 1 : 0

#   name   = "cloudwatch-full-access"
#   policy = data.aws_iam_policy_document.cloudwatch_full_access.json
# }

# data "aws_iam_policy_document" "cloudwatch_full_access" {
#   statement {
#     effect    = "Allow"
#     actions   = ["cloudwatch:*"]
#     resources = ["*"]
#   }
# }

# resource "aws_iam_user_policy_attachment" "neo_cloudwatch_full_access" {
#   count = var.give_neo_cloudwatch_full_access ? 1 : 0

#   # should be able to us "neo" because aws_iam_user.example is a map, uses for_each, not count, which would be an array
#   # user = aws_iam_users.example[0].name
#   user       = data.aws_iam_user.neo.user_name
#   policy_arn = aws_iam_policy.cloudwatch_full_access[0].arn
# }

# resource "aws_iam_user_policy_attachment" "neo_cloudwatch_read_only" {

#   # should be able to us "neo" because aws_iam_user.example is a map, uses for_each, not count, which would be an array
#   # user = aws_iam_users.example[0].name
#   user       = data.aws_iam_user.neo.user_name
#   policy_arn = aws_iam_policy.cloudwatch_read_only[0].arn
# }
