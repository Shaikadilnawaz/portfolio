/*
  Single source of truth for everything on the page.
  Edit here — no component needs touching.
*/

export const profile = {
  name: "Shaik Adil Nawaz",
  // Used for the nav logo — not derived from `name`, whose first word is the
  // family name.
  shortName: "Adil",
  role: "Full-Stack Developer",
  tagline:
    "Computer Science student building real-time web applications with React and Node.js — and turning data-structure fundamentals into things people actually use.",
  location: "Kurnool, Andhra Pradesh",
  email: "shhaikadil@gmail.com",
  phone: "+91 87123 40562",

  // Shown next to the avatar in the hero.
  status: "Open to jobs & internships",

  bio: [
    "I'm a B.Tech Computer Science student at Mohan Babu University, Tirupati, currently in my third year. Most of what I know came from building — picking a problem that annoyed me, then shipping something that fixed it.",
    "My main project, MConnects, is a smart transportation platform for students: real-time auto-booking and tracking, a React frontend, Node.js APIs behind it. It placed in the Top 20 of 100+ teams at our university hackathon and it's live today.",
    "Alongside that I keep a steady habit of DSA and debugging practice, because the fundamentals are what make the rest go faster. Outside the editor you'll find me reading, volunteering, or on a badminton court.",
  ],

  socials: [
    // TODO: swap in your real profile URLs
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Email", href: "mailto:shhaikadil@gmail.com" },
  ],
};

export const stats = [
  { value: "Top 20", label: "of 100+ teams, university hackathon" },
  { value: "2", label: "Oracle Cloud certifications" },
  { value: "2027", label: "B.Tech CSE, expected" },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "C / C++", "JavaScript"] },
  { group: "Frontend", items: ["React.js", "HTML", "CSS", "Tailwind"] },
  { group: "Backend & Data", items: ["Node.js", "REST APIs", "MySQL"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
  {
    group: "Concepts",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "SDLC",
    ],
  },
];

export const projects = [
  {
    title: "MConnects",
    subtitle: "Smart Transportation Platform",
    year: "2025",
    featured: true,
    // Rendered as a live, scrollable embed in the Work section.
    preview: "https://mconnects.vercel.app",
    href: "https://mconnects.vercel.app",
    repo: null,
    blurb:
      "A real-time auto-booking and tracking system that makes student transport predictable. Riders see live availability and transparent fares instead of haggling at the gate; the platform surfaces demand-based insights on the other side.",
    highlights: [
      "Real-time booking and vehicle tracking",
      "React frontend, Node.js REST APIs",
      "Transparent fares + demand-based insights",
      "Top 20 of 100+ teams at the university hackathon",
    ],
    tags: ["React", "Node.js", "REST APIs", "MySQL"],
  },
];

export const credentials = {
  education: [
    {
      title: "B.Tech, Computer Science and Engineering",
      org: "Mohan Babu University, Tirupati",
      period: "2023 — 2027",
      note: null,
    },
    {
      title: "Intermediate (Class XII)",
      org: "Narayana Junior College",
      period: "2021 — 2023",
      note: "88.5%",
    },
    {
      title: "Schooling (Class X)",
      org: "Montessori High School",
      period: null,
      note: "99%",
    },
  ],
  certifications: [
    {
      title: "Oracle Fusion Cloud Applications ERP Foundations Associate",
      org: "Oracle",
      period: "March 2025",
      note: null,
    },
    {
      title: "Oracle Fusion Cloud Applications HCM Certified Foundations Associate",
      org: "Oracle",
      period: "March 2025",
      note: null,
    },
  ],
};

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Professional" },
  { name: "Telugu", level: "Professional" },
  { name: "Japanese", level: "Beginner" },
];

export const interests = [
  "Reading",
  "Volunteering",
  "Badminton",
  "Sprint",
  "Soccer",
  "Learning new skills",
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];
