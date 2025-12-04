import { EmailTemplate } from "@/components/emailTemplates/EmailTemplate";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, message } = body;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // You need to use a verified domain with Resend
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        company,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
