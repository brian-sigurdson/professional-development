# aws_elb_service_account
# Use this data source to get the Account ID of the AWS Elastic Load Balancing Service Account in a given region for the purpose of permitting in S3 bucket policy.
data "aws_elb_service_account" "root" {}

# aws_lb
resource "aws_lb" "nginx" {
  name               = "globo-web-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = module.app.public_subnets
  depends_on         = [aws_s3_bucket_policy.web_bucket]

  enable_deletion_protection = false

  access_logs {
    bucket  = aws_s3_bucket.web_bucket.bucket
    prefix  = "alb-logs"
    enabled = true
  }

  tags = local.common_tags
}

# aws_lb_target_group
resource "aws_lb_target_group" "nginx_alb_target_group" {
  name     = "globo-web-alb-web-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = module.app.vpc_id

  tags = local.common_tags
}

# aws_lb_listener
resource "aws_lb_listener" "nginx_alb_listener" {
  load_balancer_arn = aws_lb.nginx.arn
  port              = "80"
  protocol          = "HTTP"
  #   ssl_policy        = "ELBSecurityPolicy-2016-08"
  #   certificate_arn   = "arn:aws:iam::187416307283:server-certificate/test_cert_rab3wuqwgja25ct3n4jdj2tzu4"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.nginx_alb_target_group.arn
  }

  tags = local.common_tags
}

# aws_lb_target_group_attachement
resource "aws_lb_target_group_attachment" "nginx_instances" {
  count            = (var.instance_count > var.vpc_public_subnet_count ? var.vpc_public_subnet_count : var.instance_count)
  target_group_arn = aws_lb_target_group.nginx_alb_target_group.arn
  target_id        = aws_instance.nginx_instances[count.index].id
  port             = 80
}

