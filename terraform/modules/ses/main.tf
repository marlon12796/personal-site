# Verify each email identity in AWS SES
resource "aws_ses_email_identity" "emails" {
  for_each = toset(var.email_identities)
  email    = each.value
}

# Dedicated IAM user for the portfolio contact form
resource "aws_iam_user" "mailer" {
  name = var.iam_user_name
  tags = var.tags
}

# Restrict permissions exclusively to SES email sending actions
resource "aws_iam_user_policy" "mailer_policy" {
  name = "${var.iam_user_name}-ses-policy"
  user = aws_iam_user.mailer.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ]
        Resource = "*"
      }
    ]
  })
}

# Programmatic access keys for Next.js .env
resource "aws_iam_access_key" "mailer_key" {
  user = aws_iam_user.mailer.name
}
