import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { formSchema } from "@/lib/validatons/form";
import { sesConfig } from "@/lib/ses/config";

// ─── SES Client ──────────────────────────────────────────────────────────────

const sesClient = new SESClient({
  region: sesConfig.region,
  credentials: sesConfig.credentials,
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildEmailCommand(email: string, message: string): SendEmailCommand {
  return new SendEmailCommand({
    Source: sesConfig.fromEmail,
    Destination: { ToAddresses: [sesConfig.toEmail] },
    Message: {
      Subject: {
        Data: `Portfolio contact from ${email}`,
        Charset: "UTF-8",
      },
      Body: {
        Text: {
          Data: `From: ${email}\n\n${message}`,
          Charset: "UTF-8",
        },
      },
    },
  });
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  const body = await request.json();

  const parsed = formSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        errors: parsed.error.errors.map((err) => ({
          title: "Validation Error",
          detail: err.message,
        })),
      },
      { status: 422 },
    );
  }

  const { email, message } = parsed.data;

  await sesClient.send(buildEmailCommand(email, message));

  return NextResponse.json(
    { message: "Email sent successfully" },
    { status: 200 },
  );
}
