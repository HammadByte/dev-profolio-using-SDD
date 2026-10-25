import { describe, expect, it } from "vitest";
import { portfolio } from "@/data/portfolio";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

describe("portfolio content", () => {
  it("defines a profile, contact address, and core stack", () => {
    expect(portfolio.profile.name.trim().length).toBeGreaterThan(0);
    expect(portfolio.profile.title.trim().length).toBeGreaterThan(0);
    expect(portfolio.profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(portfolio.profile.coreStack.length).toBeGreaterThan(0);
  });

  it("only links navigation items to real sections", () => {
    expect(portfolio.nav.length).toBeGreaterThan(0);

    for (const item of portfolio.nav) {
      expect(item.href.startsWith("#")).toBe(true);
      expect(sectionIds).toContain(item.href.slice(1));
    }

    const hrefs = portfolio.nav.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("keeps skill categories unique and non-empty", () => {
    const ids = portfolio.skills.map((category) => category.id);
    expect(new Set(ids).size).toBe(ids.length);

    for (const category of portfolio.skills) {
      expect(category.title.length).toBeGreaterThan(0);
      expect(category.skills.length).toBeGreaterThan(0);
    }
  });

  it("keeps projects complete and uniquely identified", () => {
    const ids = portfolio.projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(portfolio.projects.filter((project) => project.featured)).toHaveLength(
      1,
    );

    for (const project of portfolio.projects) {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.summary.length).toBeGreaterThan(0);
      expect(project.technologies.length).toBeGreaterThan(0);
    }
  });

  it("uses optional links only when they are absolute", () => {
    const links = portfolio.projects.flatMap((project) =>
      [project.liveUrl, project.repositoryUrl].filter(
        (url): url is string => Boolean(url),
      ),
    );

    for (const link of links) {
      expect(link).toMatch(/^https:\/\//);
    }
  });

  it("does not contain duplicate experience or education entries", () => {
    const experienceIds = portfolio.experience.map((item) => item.id);
    const educationIds = portfolio.education.map((item) => item.id);

    expect(new Set(experienceIds).size).toBe(experienceIds.length);
    expect(new Set(educationIds).size).toBe(educationIds.length);
  });

  it("only exposes approved social profiles over HTTPS", () => {
    for (const link of portfolio.socialLinks) {
      expect(link.href).toMatch(/^https:\/\//);
    }
  });
});
