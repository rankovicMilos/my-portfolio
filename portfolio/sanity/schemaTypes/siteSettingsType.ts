import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "heroVideo",
      title: "Hero Video",
      description:
        "Plays muted and looped on the opening screen. Without it, previews of live projects are shown.",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
