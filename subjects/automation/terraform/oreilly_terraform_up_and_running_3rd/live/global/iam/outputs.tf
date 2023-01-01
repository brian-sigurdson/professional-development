# output "first_arn" {
#   value       = aws_iam_user.example[0].arn
#   description = "The ARN for the first user"
# }

# output "all_arns" {
#   value       = aws_iam_user.example[*].arn
#   description = "The ARNs for all users"
# }

output "all_users" {
  value = aws_iam_user.example[*].arn
}

output "upper_names" {
  value = [for name in var.user_names : upper(name)]
}

output "short_upper_names" {
  value = [for name in var.user_names : upper(name) if length(name) < 5]
}

output "bios" {
  value = [for name, role in var.hero_thousand_faces : "${name} is the ${role}"]
}

output "list-to-map" {
  value = {for name in var.user_names : name => length(name)}
}

output "map-to-map" {
  value = {for name, role in var.hero_thousand_faces : name => length(role)}
}

output "for_directive" {
  value = "%{ for name in var.user_names }${name}, %{ endfor }"
}

output "for_directive_index" {
  value = "%{ for i, name in var.user_names }(${i}) ${name}, %{ endfor }"
}