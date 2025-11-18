// src/data/projects.ts
export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  role?: string;
  repoUrl?: string;
  liveUrl?: string;
  impact?: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    slug: "dotnet-api-platform",
    name: "Patient Documentation System for Ophtomology Clinics",
    description:
      "Scalable platform specifically for ophthalmologists, offering a streamlined solution for managing patient information, including detailed records of patient histories and surgical procedures, integrating and transforming ophthalmology device data into human-friendly data. Utilizing the latest web technologies, the platform delivers a secure, intuitive and efficient platform for ophthalmologists and their support teams.",
    tech: [".NET", "ASP.NET Core", "MySQL", "Angular"],
    repoUrl: "https://github.com/youruser/dotnet-api-platform",
    role: "Backend Developer",
    impact: [
      "Develop and implement features based on design and acceptance criteria",
      "Optimize code for enhanced performance and efficiency",
      "Design and implement an effective database schema",
      "Conduct thorough quality control to ensure project excellence",
    ],
    year: "2022",
  },
  {
    slug: "nestjs-microservice",
    name: "NestJS Microservice Architecture",
    description:
      "Event-driven microservices using NestJS, RabbitMQ and PostgreSQL for a modular e-commerce backend.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ"],
    repoUrl: "https://github.com/youruser/nestjs-microservice",
    role: "Principal Engineer",
    impact: [
      "Handled 2.5M req/day with end-to-end observability and zero-downtime deploys.",
    ],
    year: "2023",
  },
  {
    slug: "nextjs-portfolio",
    name: "This Portfolio",
    description:
      "Personal portfolio built with Next.js App Router and Tailwind CSS, showcasing full-stack projects.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/youruser/portfolio",
    role: "Product Engineer",
    impact: ["Showcases reusable UI system + CMS-backed content pipeline."],
    year: "2025",
  },
];
