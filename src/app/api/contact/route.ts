import { NextResponse } from "next/server";
import { Resend } from "resend";
import { formSchema } from "@/lib/validatons/form";


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = formSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          errors: parsed.error.errors.map((err) => ({
            title: 'Validation Error',
            detail: err.message,
          })),
        },
        { status: 422 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        {
          errors: [
            {
              title: 'Configuration Error',
              detail: 'Falta configurar RESEND_API_KEY en las variables de entorno (.env).',
            },
          ],
        },
        { status: 500 }
      );
    }

    const { email, message } = parsed.data;
    const resend = new Resend(apiKey);
    const recipient = process.env.CONTACT_EMAIL || 'fabrisio021@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'CONTACT FORM <onboarding@resend.dev>',
      to: [recipient],
      subject: `Nuevo mensaje de portafolio (${email})`,
      replyTo: email,
      text: message,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        {
          errors: [
            {
              title: 'Resend Error',
              detail: error.message || 'Error al enviar el correo mediante Resend.',
            },
          ],
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json(
      {
        errors: [
          {
            title: 'Internal Server Error',
            detail: 'Ocurrió un error inesperado al procesar el mensaje.',
          },
        ],
      },
      { status: 500 }
    );
  }
}
