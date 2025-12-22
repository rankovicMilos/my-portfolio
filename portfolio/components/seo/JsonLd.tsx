export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://milosrankovic.com";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milos Rankovic",
    url: siteUrl,
    jobTitle: "Software Engineer",
    description:
      "Full-stack software engineer specializing in .NET, NestJS, Next.js and Angular.",
    sameAs: [
      // Add your social links here
      // "https://github.com/milosrankovic",
      // "https://linkedin.com/in/milosrankovic",
      // "https://twitter.com/milosrankovic",
    ],
    knowsAbout: [
      ".NET",
      "NestJS",
      "Next.js",
      "Angular",
      "React",
      "TypeScript",
      "Full-stack Development",
      "Web Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Milos Rankovic Portfolio",
    url: siteUrl,
    description:
      "Full-stack software engineer specializing in .NET, NestJS, Next.js and Angular.",
    author: {
      "@type": "Person",
      name: "Milos Rankovic",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
