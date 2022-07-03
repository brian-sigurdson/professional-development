# just copied here to finish the chapter
# i appreciate creating good modules, but I need to make headway
# on the book, so that I can get onto terratest too
#
# added locals and two data sources to complete the example

locals {
  http_port       = 80
  any_port        = 0
  any_protocol    = "-1"
  tcp_protocol    = "tcp"
  all_ips         = ["0.0.0.0/0"]
  region          = "us-east-2"
  ec2_listen_port = 8080
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

###################################################################################################
# loadbalancer related
###################################################################################################

resource "aws_lb" "example" {
  name               = var.alb_name
  load_balancer_type = "application"
  subnets            = data.aws_subnets.default.ids
  security_groups    = [aws_security_group.alb.id]
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.example.arn
  port              = local.http_port
  protocol          = "HTTP"

  # by default return a simple 404 page
  default_action {
    type = "fixed-response"

    fixed_response {
      content_type = "text/plain"
      message_body = "404: page not found"
      status_code  = 404
    }
  }
}

###################################################################################################
# alb sg related
###################################################################################################
resource "aws_security_group" "alb" {
  name = var.alb_name
}

resource "aws_security_group_rule" "alb_allow_http_inbound" {
  # eg I want alb to listen on 80
  from_port         = local.http_port
  protocol          = local.tcp_protocol
  security_group_id = aws_security_group.alb.id
  to_port           = local.http_port
  type              = "ingress"

  # cidr_blocks = [data.aws_vpc.default.cidr_block]
  cidr_blocks = local.all_ips
}

resource "aws_security_group_rule" "alb_allow_all_outbound" {
  # i want the alb to send outbound on port 80?
  from_port         = local.any_port
  protocol          = local.tcp_protocol
  security_group_id = aws_security_group.alb.id
  to_port           = local.any_port
  type              = "egress"

  # cidr_blocks = [data.aws_vpc.default.cidr_block]
  cidr_blocks = local.all_ips
}
