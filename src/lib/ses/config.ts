/**
 * AWS SES configuration
 *
 * All infrastructure/environment variables are centralised here.
 * Import `sesConfig` wherever SES client or email addresses are needed.
 */
export const sesConfig = {
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ''
  },
  fromEmail: process.env.AWS_SES_FROM_EMAIL ?? 'fabrisio021@gmail.com',
  toEmail: process.env.CONTACT_EMAIL ?? 'fabrisio021@gmail.com'
} as const
