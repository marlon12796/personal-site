# Data sources para obtener dinámicamente la región y la cuenta actual de AWS
data "aws_region" "current" {}
data "aws_caller_identity" "current" {}

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "Marlon-Personal-Site"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}



module "ses" {
  source = "../../modules/ses"

  email_identities = var.contact_emails
  iam_user_name    = "portfolio-ses-mailer-${var.environment}"

  tags = {
    Component = "EmailNotification"
  }
}
