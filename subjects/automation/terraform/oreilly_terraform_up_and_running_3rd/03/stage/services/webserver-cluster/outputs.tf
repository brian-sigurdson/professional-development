#
# output
#
output "alb_dns_name" {
  value       = aws_lb.example.dns_name
  description = "The domain name of the load balancer"
}

output "db_address" {
  value = data.terraform_remote_state.db.outputs.address
}

output "db_port" {
  value = data.terraform_remote_state.db.outputs.port
}