'use server'
import { Resend } from 'resend'
import { formSchema, type formSchemaType } from '@/lib/validatons/form'
const resend = new Resend(process.env.RESEND_API_KEY)
export const getData = async (values: formSchemaType) => {
  try {
    const form = formSchema.safeParse(values)
    if (form.success === false) {
      return {
        errors: form.error.errors.map((err) => ({
          title: 'Validation Error',
          detail: err.message
        })),
        status: 422
      }
    }
    const data = await resend.emails.send({
      from: 'CONTACT FORM <onboarding@resend.dev>',
      to: ['fabrisio021@gmail.com'],
      subject: 'Message From ContactForm',
      replyTo: values.email,
      text: values.message
    })
    return { data, status: 200 }
  } catch (_error) {
    return {
      errors: [
        {
          title: 'Unexpected Error',
          detail: 'An unexpected error occurred while processing your request.'
        }
      ],
      status: 400
    }
  }
}
