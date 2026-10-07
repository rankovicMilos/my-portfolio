import { EmailTemplate } from "@/components/emailTemplates/EmailTemplate";
import { contactSchema } from "@/lib/contact-schema";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const parsed = contactSchema.safeParse(await request.json());

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, company, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!, // Your verified domain email
      to: process.env.RESEND_TO_EMAIL!, // Where you want to receive emails
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email, // User's email for easy reply
      react: EmailTemplate({
        name,
        email,
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
