import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email?: string;
  company?: string;
  message?: string;
}

export function EmailTemplate({
  name,
  email,
  company,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>
        <strong>From:</strong> {name}
        {company && ` (${company})`}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <div style={{ marginTop: "20px" }}>
        <strong>Message:</strong>
        <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
    </div>
  );
}
