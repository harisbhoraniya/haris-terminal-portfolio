import type { CommandName, PreviewView } from "./types";

export const VALID_COMMANDS: CommandName[] = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
  "resume",
  "hire-me",
  "clear",
];

/** Confirmation text printed to the terminal before the preview panel updates. */
export const COMMAND_CONFIRMATION: Partial<Record<CommandName, string>> = {
  about: "Rendering about...",
  skills: "Rendering skills...",
  projects: "Rendering projects...",
  experience: "Rendering experience...",
  education: "Rendering education...",
  contact: "Rendering contact...",
  resume: "Preparing resume...",
  "hire-me": "Compiling case for hiring Haris...",
};

/** Maps a command directly to the preview view it renders. */
export const COMMAND_TO_VIEW: Partial<Record<CommandName, PreviewView>> = {
  help: "help",
  about: "about",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  education: "education",
  contact: "contact",
  resume: "resume",
  "hire-me": "hire-me",
};

export function isValidCommand(input: string): input is CommandName {
  return VALID_COMMANDS.includes(input.toLowerCase() as CommandName);
}

export function normalizeCommand(raw: string): string {
  return raw.trim().toLowerCase();
}
