variable "email_identities" {
  description = "List of email addresses to verify in AWS SES"
  type        = list(string)
}

variable "iam_user_name" {
  description = "Name of the IAM user dedicated to sending emails via SES"
  type        = string
  default     = "portfolio-ses-mailer"
}

variable "tags" {
  description = "Resource tags"
  type        = map(string)
  default     = {}
}
