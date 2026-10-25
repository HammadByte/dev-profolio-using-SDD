import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types/portfolio";

const baseProject: Project = {
  id: "example",
  index: "01",
  title: "Example project",
  summary: "A short summary of the project.",
  description: "A longer description of the project and its outcomes.",
  technologies: ["Next.js", "TypeScript"],
  accent: "cobalt",
};

describe("ProjectCard", () => {
  it("renders content without inventing links", () => {
    render(<ProjectCard project={baseProject} />);

    expect(
      screen.getByRole("heading", { name: "Example project" }),
    ).toBeInTheDocument();
    expect(screen.getByText("A short summary of the project.")).toBeVisible();
    expect(
      within(
        screen.getByRole("list", { name: "Example project technologies" }),
      ).getByText("Next.js"),
    ).toBeVisible();
    expect(
      screen.queryByRole("link", { name: /live demo/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /source code/i }),
    ).not.toBeInTheDocument();
  });

  it("renders verified links with safe external attributes", () => {
    render(
      <ProjectCard
        project={{
          ...baseProject,
          liveUrl: "https://example.dev/demo",
          repositoryUrl: "https://github.com/example/project",
        }}
      />,
    );

    const live = screen.getByRole("link", { name: /live demo/i });
    const source = screen.getByRole("link", { name: /source code/i });

    expect(live).toHaveAttribute("href", "https://example.dev/demo");
    expect(live).toHaveAttribute("target", "_blank");
    expect(live).toHaveAttribute("rel", "noopener noreferrer");
    expect(source).toHaveAttribute(
      "href",
      "https://github.com/example/project",
    );
  });
});
