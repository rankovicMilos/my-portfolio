import { EmailTemplate } from "@/components/emailTemplates/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: {
      firstName: string;
      lastName: string;
      email: string;
      company?: string;
      message?: string;
    };
  }
) {
  try {
    const { data, error } = await resend.emails.send({
      from: params.email,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        firstName: params.firstName,
        lastName: params.lastName,
        email: params.email,
        company: params.company,
        message: params.message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
