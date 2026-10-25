export type NavItem = {
  label: string;
  href: string;
};

export type SocialIcon = "github" | "linkedin" | "x" | "mail";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  initials: string;
  title: string;
  headline: string;
  intro: string;
  location: string;
  email: string;
  coreStack: string[];
  focusAreas: FocusArea[];
};

export type SkillIcon =
  | "code"
  | "layers"
  | "database"
  | "wrench"
  | "cloud";

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: SkillIcon;
  skills: string[];
};

export type ProjectAccent = "cobalt" | "violet" | "emerald";

export type Project = {
  id: string;
  index: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  accent: ProjectAccent;
  featured?: boolean;
  repositoryUrl?: string;
  liveUrl?: string;
};

export type ExperienceItem = {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
};

export type EducationItem = {
  id: string;
  institution: string;
  credential: string;
  period: string;
  details?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export type SiteMeta = {
  name: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  copyrightYear: number;
  showPlaceholderNotice: boolean;
};

export type PortfolioData = {
  site: SiteMeta;
  nav: NavItem[];
  profile: Profile;
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  socialLinks: SocialLink[];
};
