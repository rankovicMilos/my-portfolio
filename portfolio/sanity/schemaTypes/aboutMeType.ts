import { defineField, defineType } from "sanity";

export const aboutMeType = defineType({
  name: "aboutMe",
  title: "About Me",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio/Introduction",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "institution", title: "Institution", type: "string" },
            { name: "degree", title: "Degree", type: "string" },
            { name: "year", title: "Year", type: "number" },
          ],
        },
      ],
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        { name: "email", title: "Email", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "github", title: "GitHub URL", type: "url" },
      ],
    }),
  ],
});
