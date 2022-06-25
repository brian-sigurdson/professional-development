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

output "bios" {
  value = [for name, role in var.hero_thousand_faces : "${name} is the ${role}"]
}

output "upper_roles_1" {
  value = { for name in var.user_names : upper(name) => name }
}

output "upper_roles_2" {
  value = { for name, role in var.hero_thousand_faces : upper(name) => upper(role) }
}

output "for_directive" {
  value = <<EOF
  %{~for name in var.names}
    ${name}
  %{~endfor}
  EOF
}
