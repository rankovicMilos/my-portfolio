import { type SchemaTypeDefinition } from "sanity";

import { projectType } from "./projectType";
import { aboutMeType } from "./aboutMeType";
import { experienceCardType } from "./experienceCardType";
import { siteSettingsType } from "./siteSettingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, aboutMeType, experienceCardType, siteSettingsType],
};
