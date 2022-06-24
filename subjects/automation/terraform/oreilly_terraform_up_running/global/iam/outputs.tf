# count
# output "neo_arn" {
#   value       = aws_iam_user.example[0].arn
#   description = "The ARN for user Neo"
# }

# output "all_arns" {
#   value       = aws_iam_user.example[*].arn
#   description = "The ARNs for all users"
# }

# for_each
output "neo_arn" {
  value       = aws_iam_user.example["neo"].arn
  description = "The ARN for user Neo"
}

output "all_arns" {
  value       = aws_iam_user.example
  description = "The ARNs for all users"
}

output "all_arns2" {
  value       = values(aws_iam_user.example)[*].arn
  description = "The ARNs for all users"
}

output "upper_names" {
  value = [for name in var.user_names : upper(name)]
}

output "upper_names_less_5" {
  value = [for name in var.user_names : upper(name) if length(name) < 5]
}
