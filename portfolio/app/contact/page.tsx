"use client";

import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setLoading(true);
    console.log("Form submitted:", data);
    const response = fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <Section
      eyebrow="Get in touch"
      title="Contact Me"
      description="Have a project in mind or want to collaborate? Fill out the form below and I'll get back to you as soon as possible."
    >
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        {/* Form - Left Side */}
        <div>
          <Card className="border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <CardContent className="pt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-200">
                            First Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              className="bg-slate-900/60 border-white/10 text-slate-100 placeholder:text-slate-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-200">
                            Last Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              className="bg-slate-900/60 border-white/10 text-slate-100 placeholder:text-slate-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john.doe@example.com"
                            className="bg-slate-900/60 border-white/10 text-slate-100 placeholder:text-slate-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="bg-slate-900/60 border-white/10 text-slate-100 placeholder:text-slate-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">
                          Company Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Acme Inc."
                            className="bg-slate-900/60 border-white/10 text-slate-100 placeholder:text-slate-400"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or inquiry..."
                            rows={6}
                            className="bg-slate-900/60 border-white/10 text-slate-100 placeholder:text-slate-400 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {loading && (
                    <p className="text-sm text-slate-300">Sending message...</p>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    size="lg"
                    variant="default"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Information - Right Side */}
        <aside className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-100">
              Let's Work Together
            </h3>
            <p className="text-sm text-slate-300">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
          </div>

          <Card className="border-white/10 bg-slate-900/60 p-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-1">
                  Response Time
                </h4>
                <p className="text-sm text-slate-400">
                  I typically respond within 24-48 hours
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-1">
                  Availability
                </h4>
                <p className="text-sm text-slate-400">
                  Open to freelance and contract work
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-1">
                  Location
                </h4>
                <p className="text-sm text-slate-400">Remote friendly</p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </Section>
  );
}
