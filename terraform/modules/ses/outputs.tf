output "access_key_id" {
  description = "AWS Access Key ID for SES mailer user"
  value       = aws_iam_access_key.mailer_key.id
}

output "secret_access_key" {
  description = "AWS Secret Access Key for SES mailer user"
  value       = aws_iam_access_key.mailer_key.secret
  sensitive   = true
}

output "verified_emails" {
  description = "List of email identities registered in SES"
  value       = [for identity in aws_ses_email_identity.emails : identity.email]
}
