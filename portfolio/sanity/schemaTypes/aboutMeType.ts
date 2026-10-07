import { defineArrayMember, defineField, defineType } from "sanity";

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
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      description: "Groups such as Backend or Frontend, each with its own list.",
      type: "array",
      of: [
        defineArrayMember({
          name: "skillGroup",
          title: "Skill Group",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "items",
              title: "Skills",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              options: {
                layout: "tags",
              },
            }),
          ],
          preview: {
            select: {
              title: "title",
              items: "items",
            },
            prepare: ({ title, items }) => ({
              title,
              subtitle: (items ?? []).join(", "),
            }),
          },
        }),
      ],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "institution",
              title: "Institution",
              type: "string",
            }),
            defineField({ name: "degree", title: "Degree", type: "string" }),
            defineField({ name: "year", title: "Year", type: "number" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
        defineField({ name: "github", title: "GitHub URL", type: "url" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
