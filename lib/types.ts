export type CommandName =
  | "help"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "contact"
  | "resume"
  | "hire-me"
  | "clear";

export interface HelpEntry {
  cmd: CommandName;
  desc: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  emoji: string;
  href?: string;
}

export interface ExperienceItem {
  role: string;
  meta: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  meta: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "instagram" | "website";
}

export interface HireReason {
  title: string;
  desc: string;
}

/** Which view is currently rendered in the right-hand preview panel. */
export type PreviewView =
  | "welcome"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "contact"
  | "resume"
  | "hire-me"
  | "help";

/** A single rendered line inside the terminal output stream. */
export interface TerminalLine {
  id: string;
  kind: "echo" | "muted" | "amber" | "error" | "heading";
  content: string;
}
