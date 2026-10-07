// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

// Projects with a live site lead, then the editor's own order
export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)] | order(defined(liveUrl) desc, order asc)[0...24]{
  _id, title, "slug": slug.current, description, technologies, liveUrl, year
}`);

export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  title, description, technologies, githubUrl, liveUrl, year
}`);

export const PROJECT_SLUGS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)] | order(defined(liveUrl) desc, order asc){
  "slug": slug.current, title, _updatedAt
}`);

export const EXPERIENCE_QUERY =
  defineQuery(`*[_type == "experienceCard"] | order(order asc)[0...12]{
  _id, role, company, startDate, endDate, isCurrent, highlights,
  "summary": pt::text(summary)
}`);

export const AboutPageQuery = defineQuery(`*[_type == "aboutMe"][0]{
  title, bio, education,
  profileImage{
    asset, hotspot, crop,
    "lqip": asset->metadata.lqip,
    "dimensions": asset->metadata.dimensions{width, height}
  }
}`);

export const SKILLS_QUERY =
  defineQuery(`*[_type == "aboutMe"][0].skills[defined(title)]{_key, title, items}`);

export const CONTACT_INFO_QUERY =
  defineQuery(`*[_type == "aboutMe"][0].contactInfo{email, linkedin, github}`);

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]{
  "heroVideoUrl": heroVideo.asset->url
}`);
