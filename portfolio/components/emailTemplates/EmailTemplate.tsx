import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName?: string;
  email?: string;
  company?: string;
  message?: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  company,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>
        Dear, {firstName} {lastName} {company ? `from ${company}` : ""}!
      </h1>
      <p>
        Thank you for reaching out. I have received your message and will get
        back to you shortly.
      </p>
    </div>
  );
}
