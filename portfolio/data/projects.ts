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

export interface ProjectDTO {
  id: string;
  title: string;
  slug: { current: string };
  mainImage: {
    asset: { _ref: string };
    alt?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "healthcare-api-platform",
    name: "Patient Documentation System for Ophtomology Clinics",
    description:
      "Scalable platform specifically for ophthalmologists, offering a streamlined solution for managing patient information, including detailed records of patient histories and surgical procedures, integrating and transforming ophthalmology device data into human-friendly data. Utilizing the latest web technologies, the platform delivers a secure, intuitive and efficient platform for ophthalmologists and their support teams.",
    tech: [".NET", "ASP.NET Core", "MySQL", "Angular"],
    repoUrl: "#",
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
    slug: "padel-booking-management-platform",
    name: "Padel Booking Management Platform",
    description:
      "A modern platform designed to simplify court reservations, player management, and tournament organization for padel clubs",
    tech: ["NestJS", "TypeScript", "Next.js", "Vercel"],
    repoUrl: "https://github.com/rankovicMilos/padel-pro-booking",
    role: "Full-Stack Developer",
    impact: [
      "Developed a user-friendly interface for seamless court reservations",
      "Implemented player management features to streamline club operations",
      "Created tournament organization tools to enhance player engagement",
    ],
    year: "2025",
  },
  {
    slug: "nextjs-portfolio",
    name: "This Portfolio",
    description:
      "Personal portfolio built with Next.js App Router and Tailwind CSS, showcasing full-stack projects.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/rankovicMilos/my-portfolio",
    role: "Full-Stack Engineer",
    impact: [
      "Designed and developed a responsive portfolio website to showcase projects",
      "Implemented modern web technologies for optimal performance and user experience",
    ],
    year: "2025",
  },
  {
    slug: "landscaping-company-website",
    name: "Landscaping Company Website",
    description:
      "Website for a landscaping company built with Next.js App Router and Tailwind CSS, showcasing services and projects.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/rankovicMilos/landscaping-website",
    role: "Full-Stack Engineer",
    impact: [
      "Designed and developed a responsive landscaping website to showcase projects",
      "Implemented modern web technologies for optimal performance and user experience",
    ],
    year: "2025",
  },
];
