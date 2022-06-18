provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "example" {
  ami           = "ami-02d1e544b84bf7502"
  instance_type = "t2.micro"

  security_groups = [aws_security_group.instance.name]

  user_data = <<-EOF
    #!/bin/bash
    echo "Hello World" > index.html
    nohup busybox httpd -f -p "${var.server_port}" &
    EOF

  tags = {
    "Name"    = "terraform-example"
    "Chapter" = "2"
    "Eample"  = "single-server"
  }
}

resource "aws_security_group" "instance" {
  name = "terraform-example-instance"
  ingress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = var.server_port
    protocol    = "tcp"
    to_port     = var.server_port
  }

}

variable "server_port" {
  description = "The port the server will use for http requests"
  type        = number
  default     = 8080
}

output "public_ip" {
  value       = aws_instance.example.public_ip
  description = "The public IP address of the webserver"
}
