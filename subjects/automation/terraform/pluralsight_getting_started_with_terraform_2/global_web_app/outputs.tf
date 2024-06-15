# output "public_dns_hostname" {
#   value = "https://${aws_instance.nginx1.public_dns}"
# }

output "aws_alb_public_dns" {
  description = "Public dns for the alb"
  value       = "https://${aws_lb.nginx.dns_name}"
}