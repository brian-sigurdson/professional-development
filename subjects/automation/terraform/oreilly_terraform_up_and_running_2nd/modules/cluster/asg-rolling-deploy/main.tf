# just copied here to finish the chapter
# i appreciate creating good modules, but I need to make headway
# on the book, so that I can get onto terratest too
#
# added locals and two data sources to complete the example

locals {
  any_port     = 0
  any_protocol = "-1"
  tcp_protocol = "tcp"
  all_ips      = ["0.0.0.0/0"]
}


###################################################################################################
# autoscaling group related
###################################################################################################

resource "aws_autoscaling_group" "example" {
  # Explicitly depend on the launch configuration's name so each time it's replaced, this ASG is also replaced  
  name                 = "${var.cluster_name}-${aws_launch_configuration.example.name}"
  launch_configuration = aws_launch_configuration.example.name
  vpc_zone_identifier  = var.subnet_ids
  target_group_arns    = var.target_group_arns
  health_check_type    = var.health_check_type
  max_size             = var.max_size
  min_size             = var.min_size

  # Wait for at least this many instances to pass health checks before considering the ASG deployment complete
  min_elb_capacity = var.min_size

  # When replacing this ASG, create the replacement first, and only delete the original after
  lifecycle {
    create_before_destroy = true
  }

  tag {
    key                 = "Name"
    value               = "${var.cluster_name}-asg-example"
    propagate_at_launch = true
  }

  dynamic "tag" {
    for_each = {
      for key, value in var.custom_tags : key => upper(value)
      if key != "Name"
    }

    content {
      key                 = tag.key
      value               = tag.value
      propagate_at_launch = true
    }
  }
}

resource "aws_launch_configuration" "example" {
  image_id        = var.ami
  instance_type   = var.instance_type
  security_groups = [aws_security_group.instance.id]
  user_data       = var.user_data

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_autoscaling_schedule" "scale_out_during_business_hours" {
  count = var.enable_autoscaling ? 1 : 0

  scheduled_action_name  = "scale-out-during-business-hours"
  min_size               = 2
  max_size               = 10
  desired_capacity       = 5
  recurrence             = "0 9 * * *"
  autoscaling_group_name = aws_autoscaling_group.example.name
}

resource "aws_autoscaling_schedule" "scale_in_at_night" {
  count = var.enable_autoscaling ? 1 : 0

  scheduled_action_name  = "scale-in-at-night"
  min_size               = 2
  max_size               = 10
  desired_capacity       = 2
  recurrence             = "0 17 * * *"
  autoscaling_group_name = aws_autoscaling_group.example.name
}


###################################################################################################
# instance security group related
###################################################################################################

resource "aws_security_group" "instance" {
  name = "${var.cluster_name}-instance"
}

resource "aws_security_group_rule" "instance_allow_http_inbound" {
  # eg I want ec2 to listen on 8080
  from_port         = var.instance_listen_port
  protocol          = local.tcp_protocol
  security_group_id = aws_security_group.instance.id
  to_port           = var.instance_listen_port
  type              = "ingress"

  cidr_blocks = local.all_ips
}
