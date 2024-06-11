##################################################################################
# DATA
##################################################################################

data "aws_elb_service_account" "root" {}

##################################################################################
# RESOURCES
##################################################################################
# aws_lb
resource "aws_lb" "web-alb" {
  name               = "${local.name_prefix}-web-alb"
  internal           = "false"
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = module.vpc.public_subnets

  access_logs {
    bucket  = module.web_app_s3.web_bucket.bucket
    prefix  = "alb-logs"
    enabled = true
  }

  tags = merge(local.common_tags, { name = "${local.name_prefix}-web-alb" })
}


# aws_lb_listener
resource "aws_lb_listener" "nginx" {
  load_balancer_arn = aws_lb.web-alb.arn
  port              = 80
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.nginx.arn
  }
}


# aws_lb_target_group (instance target group)
resource "aws_lb_target_group" "nginx" {
  port     = 80
  protocol = "HTTP"
  vpc_id   = module.vpc.vpc_id
}


# aws_lb_target_group_attachment
resource "aws_lb_target_group_attachment" "nginxes" {
  count            = var.vpc_instance_count
  target_group_arn = aws_lb_target_group.nginx.arn
  target_id        = aws_instance.nginx[count.index].id
  port             = 80
}
