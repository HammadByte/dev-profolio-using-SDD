import type { PortfolioData } from "@/types/portfolio";

/**
 * Single source of truth for site content.
 *
 * PLACEHOLDER CONTENT
 * -------------------
 * Every personal detail below is a placeholder. Replace the values with
 * owner-approved information before publishing, then set
 * `site.showPlaceholderNotice` to false.
 *
 * Rules:
 * - Do not add achievements, metrics, dates, or credentials that cannot be verified.
 * - Only add social profiles and contact destinations the owner has approved.
 * - Leave optional fields out rather than inventing content.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const portfolio: PortfolioData = {
  site: {
    name: "Your Name",
    title: "Your Name — Full-Stack Developer",
    description:
      "Personal portfolio of Your Name, a full-stack developer building thoughtful, accessible, and maintainable web products.",
    url: siteUrl,
    locale: "en_US",
    copyrightYear: 2026,
    showPlaceholderNotice: true,
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  profile: {
    name: "Your Name",
    initials: "YN",
    title: "Full-Stack Developer",
    headline: "Design-minded engineering for the web.",
    intro:
      "I build thoughtful web products end to end — from accessible interfaces and clean component systems to the APIs and data layers behind them. Replace this introduction with your own approved summary, focus, and the kind of work you want to be known for.",
    location: "City, Country",
    email: "hello@example.com",
    coreStack: ["TypeScript", "React", "Next.js", "Node.js"],
    focusAreas: [
      {
        title: "Product-minded engineering",
        description:
          "Translate product goals into small, durable systems instead of one-off screens.",
      },
      {
        title: "Accessible by default",
        description:
          "Treat semantic HTML, keyboard support, and clear feedback as part of the build.",
      },
      {
        title: "Maintainable foundations",
        description:
          "Prefer typed content, reusable components, and conventions the next developer can follow.",
      },
    ],
  },

  skills: [
    {
      id: "languages",
      title: "Languages",
      description: "The languages I reach for most often.",
      icon: "code",
      skills: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      id: "frameworks",
      title: "Frameworks & libraries",
      description: "Tools used to shape interfaces and services.",
      icon: "layers",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Express"],
    },
    {
      id: "data",
      title: "Data & persistence",
      description: "Working knowledge of application data layers.",
      icon: "database",
      skills: ["PostgreSQL", "Prisma", "REST APIs", "Redis"],
    },
    {
      id: "tooling",
      title: "Tooling",
      description: "Day-to-day development and quality workflows.",
      icon: "wrench",
      skills: ["Git", "GitHub", "Docker", "Vitest", "Playwright", "Figma"],
    },
    {
      id: "delivery",
      title: "Cloud & delivery",
      description: "Getting work from a branch to a reliable deployment.",
      icon: "cloud",
      skills: ["Vercel", "GitHub Actions", "AWS", "Cloudflare"],
    },
  ],

  projects: [
    {
      id: "project-one",
      index: "01",
      title: "Project One",
      summary:
        "A short, specific sentence describing what this project does and who it serves.",
      description:
        "Replace this placeholder with the problem, your approach, and a verified outcome. Keep it focused on what you personally built and what changed as a result.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      accent: "cobalt",
      featured: true,
      // repositoryUrl: "https://github.com/your-handle/project-one",
      // liveUrl: "https://project-one.example.com",
    },
    {
      id: "project-two",
      index: "02",
      title: "Project Two",
      summary:
        "A concise summary of a second project, including your role and the core problem.",
      description:
        "Replace this placeholder with verified details. Optional links such as a repository or live demo are omitted automatically when they are not provided.",
      technologies: ["React", "Node.js", "REST APIs"],
      accent: "violet",
      // repositoryUrl: "https://github.com/your-handle/project-two",
    },
    {
      id: "project-three",
      index: "03",
      title: "Project Three",
      summary:
        "One sentence that makes the value of this project clear without exaggeration.",
      description:
        "Replace this placeholder with the context, technical decisions, and result you can stand behind. Avoid adding metrics or claims you cannot verify.",
      technologies: ["TypeScript", "Prisma", "Playwright"],
      accent: "emerald",
      // liveUrl: "https://project-three.example.com",
    },
  ],

  experience: [
    {
      id: "experience-one",
      organization: "Company Name",
      role: "Role Title",
      period: "20XX — Present",
      location: "City, Country",
      summary:
        "Replace this placeholder with a verified description of your role, team, and scope.",
      highlights: [
        "Replace with a responsibility or outcome you can verify.",
        "Add a second highlight that shows your contribution and how you work.",
      ],
      technologies: ["TypeScript", "React", "Node.js"],
    },
    {
      id: "experience-two",
      organization: "Previous Company",
      role: "Previous Role Title",
      period: "20XX — 20XX",
      location: "City, Country",
      summary:
        "Replace this placeholder with the context of your previous role and the work you owned.",
      highlights: [
        "Replace with a verified responsibility, project, or achievement.",
      ],
      technologies: ["JavaScript", "React", "PostgreSQL"],
    },
  ],

  education: [
    {
      id: "education-one",
      institution: "University Name",
      credential: "Degree or Qualification",
      period: "20XX — 20XX",
      details:
        "Optional: add a verified field of study, honours, or relevant coursework.",
    },
  ],

  // Only add certifications that have been verified. An empty list is handled safely.
  certifications: [],

  // Add only owner-approved profiles, for example:
  // { label: "GitHub", href: "https://github.com/your-handle", icon: "github" },
  // { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", icon: "linkedin" },
  socialLinks: [],
};
