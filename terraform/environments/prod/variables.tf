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

variable "cloudflare_account_id" {
  description = "Cloudflare account ID that owns the Workers"
  type        = string
  default     = "4971e7f91c13c559b661bfba252a9bc4"
}

variable "cloudflare_domain" {
  description = "Cloudflare zone where the portfolio is published"
  type        = string
  default     = "marloncloud.com"
}

variable "cloudflare_worker_name" {
  description = "Worker service that serves the portfolio"
  type        = string
  default     = "personal-site"
}

variable "cloudflare_response_store_bucket_name" {
  description = "R2 bucket used by the response store Worker"
  type        = string
  default     = "personal-site-response-store-cache-bodies"
}
