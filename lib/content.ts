import type {
  ContactLink,
  EducationItem,
  ExperienceItem,
  HelpEntry,
  HireReason,
  Project,
  SkillGroup,
} from "./types";

/**
 * ============================================================
 *  PORTFOLIO CONTENT
 *  This is the ONLY file you should need to edit to update
 *  your name, links, projects, resume, and copy.
 * ============================================================
 */

export const PROFILE = {
  name: "Haris Bhoraniya",
  role: "Full Stack / React Developer",
  handle: "haris@portfolio",
  tagline:
    "Building production-grade web and desktop experiences with React, Next.js and Electron.js.",
};

export const ABOUT_PARAGRAPHS: string[] = [
  "I'm a Full Stack / React Developer focused on building clean, production-grade interfaces and the systems behind them. My core stack is React, Next.js, TypeScript and Tailwind CSS, extended into desktop with Electron.js and mobile with React Native (Expo).",
  "I'm currently working as a Full Stack Developer Intern, shipping real client work end to end — real estate platforms, CRM dashboards, and internal admin panels — from API integration to final pixel-level polish.",
  "I care about clean component architecture, responsive UI that actually feels native on every screen, and writing code a teammate can pick up without a walkthrough.",
];

export const ABOUT_STATS = [
  { value: "6+", label: "Shipped Projects" },
  { value: "7", label: "Core Tech" },
  { value: "100%", label: "Hands-on" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Redux / Context API",
    ],
  },
  {
    title: "Backend Basics",
    items: ["Node.js", "Express", "REST APIs", "JWT Auth", "Server Architecture Basics"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Cross-platform UI"],
  },
  {
    title: "Desktop App",
    items: ["Electron.js", "IPC Communication", "Windows Packaging"],
  },
  {
    title: "Tools",
    items: ["Git / GitHub", "Postman", "Figma", "VS Code", "Vercel"],
  },
  {
    title: "UI / UX",
    items: [
      "Responsive Design",
      "Design Systems",
      "Glassmorphism",
      "Accessibility Basics",
      "Performance-aware UI",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "real-estate",
    name: "Real Estate Platforms",
    description:
      "Multiple production real estate websites — property listings, search & filters, inquiry forms, fully responsive.",
    tags: ["Next.js", "Tailwind", "REST API"],
    emoji: "🏠",
    href: "#", // EDIT ME: link to live project
  },
  {
    id: "crm-dashboard",
    name: "CRM Dashboard",
    description:
      "Web-based CRM / admin application for managing leads, clients and internal data with role-based views.",
    tags: ["React", "TypeScript", "REST API"],
    emoji: "📊",
    href: "#",
  },
  {
    id: "electron-app",
    name: "Electron Desktop App",
    description:
      "Cross-platform desktop app with system tray, IPC communication and packaging for Windows.",
    tags: ["Electron.js", "React", "TypeScript"],
    emoji: "🖥️",
    href: "#",
  },
  {
    id: "expo-app",
    name: "React Native Expo App",
    description:
      "Cross-platform mobile app with shared logic across iOS/Android and clean native-feel navigation.",
    tags: ["React Native", "Expo", "TypeScript"],
    emoji: "📱",
    href: "#",
  },
  {
    id: "chrome-extension",
    name: "Chrome Extension",
    description:
      "Browser extension with popup UI, content scripts and a background service worker.",
    tags: ["JavaScript", "Chrome APIs"],
    emoji: "🧩",
    href: "#",
  },
  {
    id: "nexyn-studios",
    name: "Nexyn Studios Website",
    description:
      "Agency marketing website with custom motion, modern layout and CMS-ready structure.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    emoji: "🎬",
    href: "#",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    meta: "Dec 2025 — Present",
    points: [
      "Built and shipped multiple live real estate websites and a CRM dashboard application for real clients.",
      "Learned and applied Electron.js to build cross-platform desktop tools from scratch.",
      "Integrated real-time third-party APIs and implemented authentication flows.",
      "Worked with database fundamentals — schema design, CRUD operations, basic data modeling.",
      "Built a Chrome extension and contributed to a React Native (Expo) mobile app.",
      "Collaborated directly with a manager and team across the full dev lifecycle, from build to deployment.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech / B.E. — Computer Science (or related field)",
    meta: "University Name Placeholder · Graduation Year Placeholder", // EDIT ME
  },
  {
    degree: "Self-directed learning",
    meta: "Ongoing — React ecosystem, Electron.js, React Native, backend fundamentals",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    value: "haris.bhoraniya@example.com", // EDIT ME
    href: "mailto:haris.bhoraniya@example.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/haris-bhoraniya", // EDIT ME
    href: "#",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/harisbhoraniya", // EDIT ME
    href: "#",
    icon: "github",
  },
  {
    label: "Instagram",
    value: "instagram.com/haris.dev", // EDIT ME
    href: "#",
    icon: "instagram",
  },
  {
    label: "Website",
    value: "harisbhoraniya.dev", // EDIT ME
    href: "#",
    icon: "website",
  },
];

export const RESUME = {
  href: "#", // EDIT ME: point this to /resume.pdf in /public, or an external link
  note: "Placeholder — link this button to your hosted resume PDF.",
};

export const HIRE_REASONS: HireReason[] = [
  {
    title: "Fast learner",
    desc: "Picked up Electron, Expo and Chrome Extension APIs on real deadlines — not just tutorials.",
  },
  {
    title: "Real project experience",
    desc: "Shipped production real estate sites, a CRM dashboard and admin panels for actual clients.",
  },
  {
    title: "Strong frontend",
    desc: "Pixel-accurate, fully responsive UI with React, Next.js and Tailwind CSS.",
  },
  {
    title: "API-comfortable",
    desc: "Integrates REST APIs, handles auth flows, and works with third-party services confidently.",
  },
  {
    title: "Clean structure",
    desc: "Writes maintainable, typed, reusable components — not one-off scripts.",
  },
  {
    title: "Performance-aware",
    desc: "Thinks about load times, re-renders and UX polish, not just 'does it work'.",
  },
];

export const HELP_ENTRIES: HelpEntry[] = [
  { cmd: "about", desc: "Who I am, in short" },
  { cmd: "skills", desc: "Tech stack by category" },
  { cmd: "projects", desc: "Things I've shipped" },
  { cmd: "experience", desc: "Internship & work history" },
  { cmd: "education", desc: "Academic background" },
  { cmd: "contact", desc: "Ways to reach me" },
  { cmd: "resume", desc: "Download my resume" },
  { cmd: "hire-me", desc: "Why you should hire me" },
  { cmd: "clear", desc: "Clear the terminal" },
];

export const BOOT_MESSAGES: string[] = [
  "[    0.000000] Linux version 6.1.0-kali9 (root@kali)",
  "[    0.004521] Command line: BOOT_IMAGE=/boot/vmlinuz-6.1.0",
  "[    0.112842] Memory: 16384MB available",
  "[    0.234100] CPU: Intel Core i9-14900K detected",
  "[    0.451200] Mounting root filesystem... done.",
  "[    0.612300] Starting SSH server: sshd.",
  "[    1.023400] Loading haris-portfolio modules...",
  "[    1.234500] Portfolio data decrypted successfully.",
  "[    1.456700] All services started.",
  "root@kali:~# ./portfolio --interactive",
];

export const QUICK_CHIPS: { cmd: string; featured?: boolean }[] = [
  { cmd: "about" },
  { cmd: "skills" },
  { cmd: "projects" },
  { cmd: "experience" },
  { cmd: "education" },
  { cmd: "contact" },
  { cmd: "resume", featured: true },
  { cmd: "hire-me", featured: true },
  { cmd: "clear" },
];
