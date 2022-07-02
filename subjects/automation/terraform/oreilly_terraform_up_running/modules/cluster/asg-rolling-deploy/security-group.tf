###################################################################################################
# instance security group related
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


