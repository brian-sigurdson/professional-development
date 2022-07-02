output "if_else_directive_name" {
  value = "Hello, %{if var.if_else_directive_name != ""}${var.if_else_directive_name}%{else} (unnamed)%{endif}"
}

output "alb_dns_name" {
  value       = module.alb.alb_dns_name
  description = "The domain name of the load balancer"
}

output "asg_name" {
  value       = module.asg.asg_name
  description = "The name of the Auto Scaling Group"
}

output "instance_security_group_id" {
  value       = module.asg.instance_security_group_id
  description = "The ID of the EC2 Instance Security Group"
}
