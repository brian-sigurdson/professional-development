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
  from_port         = var.server_port
  protocol          = local.tcp_protocol
  security_group_id = aws_security_group.alb.id
  to_port           = var.server_port
  type              = "egress"

  cidr_blocks = [data.aws_vpc.default.cidr_block]
  # cidr_blocks = [local.all_ips]
}
