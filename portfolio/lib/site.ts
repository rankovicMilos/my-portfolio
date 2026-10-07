export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://milosrankovic.com";

// Used when the About document in Sanity has no contact details yet
export const contactFallback = {
  email: "rankovic.milos0804@gmail.com",
  github: "https://github.com/rankovicMilos",
  linkedin: "https://www.linkedin.com/in/milos-rankovic84/",
};

export const navItems = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
