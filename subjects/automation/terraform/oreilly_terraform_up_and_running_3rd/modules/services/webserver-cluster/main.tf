#
# data
#
data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# data "terraform_remote_state" "db" {
#   backend = "s3"

#   config = {
#     bucket = var.db_remote_state_bucket
#     key    = var.db_remote_state_key
#     region = "us-east-2"
#   }
# }

#
# resources
#
# data "template_file" "user_data" {
#   template = file("${path.module}/user-data.sh")
#   vars = {
#     server_port = var.server_port
#     db_address  = data.terraform_remote_state.db.outputs.address
#     db_port     = data.terraform_remote_state.db.outputs.port
#   }
# }

resource "aws_launch_template" "example" {
  # image_id = "ami-0866a3c8686eaeeba" # us-east-1
  image_id      = "ami-0ea3c35c5c3284d82" # us-east-2
  instance_type = var.instance_type   # free tier
  vpc_security_group_ids = [aws_security_group.instance.id]

  # user_data = base64encode(data.template_file.user_data.rendered)
  user_data = base64encode(templatefile("${path.module}/user-data.sh", {
    server_port = var.server_port
    db_address = "db_address" #data.terraform_remote_state.db.address
    db_port = "db_port" #data.terraform_remote_state.db.outputs.port
    }
  ))

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_autoscaling_group" "example" {
  # launch_configuration = aws_launch_template.example.name
  launch_template {
    id      = aws_launch_template.example.id
    version = "$Latest"
  }
  vpc_zone_identifier = data.aws_subnets.default.ids
  # availability_zones = data.aws_subnets.default.ids

  target_group_arns = [aws_lb_target_group.asg.arn]
  health_check_type = "ELB"

  min_size = var.min_size
  max_size = var.max_size

  tag {
    key                 = "Name"
    value               = "${var.cluster_name}-asg"
    propagate_at_launch = true
  }
}

resource "aws_lb" "example" {
  name               = "${var.cluster_name}-alb"
  load_balancer_type = "application"
  subnets            = data.aws_subnets.default.ids
  security_groups    = [aws_security_group.alb.id]
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.example.arn
  port              = local.http_port
  protocol          = local.http_protocol

  # By default, return a simple 404 page
  default_action {
    type = "fixed-response"

    fixed_response {
      content_type = "text/plain"
      message_body = "404: page not found"
      status_code  = 404
    }
  }
}

resource "aws_lb_listener_rule" "asg" {
  listener_arn = aws_lb_listener.http.arn
  priority     = 100

  condition {
    path_pattern {
      values = ["*"]
    }
  }

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.asg.arn
  }
}

resource "aws_lb_target_group" "asg" {
  name     = "${var.cluster_name}-asg-example"
  port     = var.server_port
  protocol = local.http_protocol
  vpc_id   = data.aws_vpc.default.id

  health_check {
    path                = "/"
    protocol            = local.http_protocol
    matcher             = "200"
    interval            = 15
    timeout             = 3
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }
}

resource "aws_security_group" "alb" {
  name = "${var.cluster_name}-alb"
}

resource "aws_security_group_rule" "allow_http_inbound" {
  type = "ingress"
  security_group_id = aws_security_group.alb.id

    from_port   = local.http_port
    to_port     = local.http_port
    protocol    = local.tcp_protocol
    cidr_blocks = local.all_ips
}

resource "aws_security_group_rule" "allow_http_outbound" {
  type = "egress"
  security_group_id = aws_security_group.alb.id

    from_port   = local.any_port
    to_port     = local.any_port
    protocol    = local.any_protocol
    cidr_blocks = local.all_ips
}

resource "aws_security_group" "instance" {
  name = "${var.cluster_name}-instance"

  ingress {
    from_port   = var.server_port
    to_port     = var.server_port
    protocol    = local.tcp_protocol
    cidr_blocks = local.all_ips
  }
}