provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "example1" {
  ami           = "ami-0661cd3308ec33aaa"
  instance_type = "t2.micro"

  tags = {
    Name = "bks-example"
  }

}