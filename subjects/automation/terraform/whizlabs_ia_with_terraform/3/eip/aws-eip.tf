provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "with_eip" {
  ami           = "ami-0661cd3308ec33aaa"
  instance_type = "t2.micro"

  tags = {
    Name = "bks-example"
  }
}

resource "aws_eip" "my_eip" {
  instance = aws_instance.with_eip.id
  vpc      = true
}