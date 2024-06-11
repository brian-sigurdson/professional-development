terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~>3.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "~>3.0"
    }
  }
}

##################################################################################
# PROVIDERS
##################################################################################

provider "aws" {
  #   shared_config_file       = "/home/bsigurdson/.aws/config"
  #   shared_credentials_file  = "/home/bsigurdson/.aws/credentials"
  profile = "brian-dev-devops"
  region  = var.aws_region
}