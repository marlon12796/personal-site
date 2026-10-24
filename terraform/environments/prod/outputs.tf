output "aws_region" {
  description = "AWS Region configured for SES"
  value       = data.aws_region.current.name
}

output "aws_account_id" {
  description = "AWS Account ID where resources are deployed"
  value       = data.aws_caller_identity.current.account_id
}

output "ses_access_key_id" {
  description = "AWS_ACCESS_KEY_ID to put in your .env"
  value       = module.ses.access_key_id
}

output "ses_secret_access_key" {
  description = "AWS_SECRET_ACCESS_KEY to put in your .env"
  value       = module.ses.secret_access_key
  sensitive   = true
}

output "verified_emails" {
  description = "Emails submitted for verification in SES"
  value       = module.ses.verified_emails
}

output "env_instructions" {
  description = "Command to print ready-to-copy .env variables"
  value       = "Run: terraform output -raw ses_secret_access_key to get your secret"
}
