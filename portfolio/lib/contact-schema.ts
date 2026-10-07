import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name"),
  email: z.email("Enter a valid email address"),
  company: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Add a few more words, at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
