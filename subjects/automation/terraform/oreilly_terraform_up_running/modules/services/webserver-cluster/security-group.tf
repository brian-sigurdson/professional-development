###################################################################################################
# security group related
###################################################################################################

resource "aws_security_group" "instance" {
  name = "${var.cluster_name}-instance"
}

resource "aws_security_group_rule" "instance_allow_http_inbound" {
  # eg I want ec2 to listen on 8080
  from_port         = var.server_port
  protocol          = local.tcp_protocol
  security_group_id = aws_security_group.instance.id
  to_port           = var.server_port
  type              = "ingress"

  cidr_blocks = [data.aws_vpc.default.cidr_block]
}

resource "aws_security_group" "alb" {
  name = "${var.cluster_name}-alb"
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
