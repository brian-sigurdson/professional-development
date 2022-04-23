# aws_lb
resource "aws_lb" "nginx" {
    name                = "globo_web_alb"
    internal            = "false"
    load_balancer_type  = "application"
    security_groups     = [aws_security_group.alb_sg.id]
    subnets             = [aws_subnet.subnet1.id, aws_subnet.subnet2.id]

    tags = local.common_tags
}


# aws_lb_listener
resource "aws_lb_listener" "front_end" {
  load_balancer_arn = aws_lb.front_end.arn

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.front_end.arn
  }
}


# aws_lb_target_group (instance target group)
resource "aws_lb_target_group" "front_end" {
  name     = "tf-example-lb-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.vpc.id
}


# aws_lb_target_group_attachment
resource "aws_lb_target_group_attachment" "nginx1" {
  target_group_arn = aws_lb_target_group.front_end.arn
  target_id        = aws_instance.nginx1.id
  port             = 80
}

resource "aws_lb_target_group_attachment" "nginx2" {
  target_group_arn = aws_lb_target_group.front_end.arn
  target_id        = aws_instance.nginx2.id
  port             = 80
}