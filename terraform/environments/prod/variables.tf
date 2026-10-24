variable "aws_region" {
  description = "AWS region for SES and IAM resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment name"
  type        = string
  default     = "prod"
}

variable "contact_emails" {
  description = "Emails to verify in AWS SES for sending and receiving portfolio messages"
  type        = list(string)
  default     = ["fabrisio021@gmail.com", "marlon.tafur.21@gmail.com"]
}
