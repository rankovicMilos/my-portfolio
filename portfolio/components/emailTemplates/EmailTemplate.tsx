import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  company,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>
        <strong>From:</strong> {firstName} {lastName}
        {company && ` (${company})`}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      {phone && (
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      )}
      <div style={{ marginTop: "20px" }}>
        <strong>Message:</strong>
        <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
      </div>
    </div>
  );
}
