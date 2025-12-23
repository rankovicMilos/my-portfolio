// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, mainImage
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project" && defined(slug.current)][0...12]{
  _id, title, slug, mainImage, description, technologies, githubUrl, liveUrl, year, order
}`);

export const PROJECT_QUERY =
  defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  title, description, technologies, githubUrl, liveUrl, year, mainImage
}`);

export const EXPERIENCE_QUERY = 
  defineQuery(`*[_type == "experienceCard"][0...12]{
  _id, role, company, startDate, endDate, isCurrent, summary, highlights, order
}`);

export const AboutPageQuery = defineQuery(`*[_type == "aboutMe"][0]{
  title, eyebrow, profileImage, bio, skills, education, contactInfo
}`);
