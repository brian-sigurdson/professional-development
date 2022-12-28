resource "aws_iam_user" "example" {
  name = var.user_name
}

variable "user_name" {
  description = "The name to use"
  type        = string
}

output "user_arn" {
  value       = aws_iam_user.example.arn
  description = "The ARN of the created IAM user"
}