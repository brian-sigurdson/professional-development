output "public_dns_hostname" {
  value = "https://${aws_instance.nginx1.public_dns}"
}