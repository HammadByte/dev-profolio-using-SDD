import { portfolio } from "@/data/portfolio";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlaceholderNotice } from "@/components/layout/PlaceholderNotice";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background"
      >
        Skip to content
      </a>

      {portfolio.site.showPlaceholderNotice ? <PlaceholderNotice /> : null}

      <Header
        name={portfolio.profile.name}
        initials={portfolio.profile.initials}
        nav={portfolio.nav}
      />

      <main id="main">
        <HeroSection
          profile={portfolio.profile}
          socialLinks={portfolio.socialLinks}
        />
        <AboutSection profile={portfolio.profile} />
        <SkillsSection skills={portfolio.skills} />
        <ProjectsSection projects={portfolio.projects} />
        <ExperienceSection experience={portfolio.experience} />
        <EducationSection
          education={portfolio.education}
          certifications={portfolio.certifications}
        />
        <ContactSection
          profile={portfolio.profile}
          socialLinks={portfolio.socialLinks}
        />
      </main>

      <Footer
        profile={portfolio.profile}
        nav={portfolio.nav}
        socialLinks={portfolio.socialLinks}
        copyrightYear={portfolio.site.copyrightYear}
      />
    </>
  );
}
