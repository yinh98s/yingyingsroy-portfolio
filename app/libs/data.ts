// lib/data.ts
import { absoluteUrl } from "./utils";
import type { Experience, Project, Social } from "./types"; // ⬅️ was ../libs/types

export const SITE = {
    name: "YingYing Sroy",
    title: "YingYing Sroy – Software Engineer",
    description:
        "Full-stack engineer specializing in TypeScript, React, and performant web apps.",
    url: "https://yingyingsroy-portfolio.vercel.app",
    ogImage: "https://instagram.fpnh18-6.fna.fbcdn.net/v/t51.2885-19/534210380_17856184476497745_7712636267863597570_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4zMjAuYzIifQ&_nc_ht=instagram.fpnh18-6.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QFcnZiSB2kNW5yg-LHa_9CfnFTJ_7GcedgxZHypfumBnIj8T1w7zJeSHDojh2JnRMM&_nc_ohc=uEFhiQ2VYzMQ7kNvwEZDbge&_nc_gid=6tRtiGHmSsiNlgt600Thpw&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AfYDwwsaX-zpx82wXL7HD_X35H-7Frl03WubuAOkg02G_A&oe=68D6D3F5&_nc_sid=ead929",
    avatarUrl: "https://instagram.fpnh18-6.fna.fbcdn.net/v/t51.2885-19/534210380_17856184476497745_7712636267863597570_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4zMjAuYzIifQ&_nc_ht=instagram.fpnh18-6.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QFcnZiSB2kNW5yg-LHa_9CfnFTJ_7GcedgxZHypfumBnIj8T1w7zJeSHDojh2JnRMM&_nc_ohc=uEFhiQ2VYzMQ7kNvwEZDbge&_nc_gid=6tRtiGHmSsiNlgt600Thpw&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AfYDwwsaX-zpx82wXL7HD_X35H-7Frl03WubuAOkg02G_A&oe=68D6D3F5&_nc_sid=ead929",
    keywords: ["Next.js", "TypeScript", "Portfolio", "React"],
    location: "California, United States",
    email: "y.sroy.job@gmail.com",
    resumeUrl: "/resume.pdf",
};

export const SOCIALS: Social[] = [
    { label: "GitHub", href: "https://github.com/yinh98s" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yingying-sroy" },
    { label: "Email", href: "mailto:y.sroy.job@gmail.com" },
];

export const PROJECTS: Project[] = [
    {
        title: "Project Alpha",
        description: "A fast, accessible web app that does amazing things.",
        href: "https://alpha.example.com",
        repo: "https://github.com/yourname/alpha",
        tags: ["Next.js", "Edge", "Tailwind"],
        image: "/alpha.png",
    },
    {
        title: "DataViz Kit",
        description: "Composable charts toolkit built with React and D3.",
        repo: "https://github.com/yourname/dataviz-kit",
        tags: ["React", "D3", "TypeScript"],
    },
];

export const EXPERIENCE: Experience[] = [
    {
        company: "Tech Co.",
        role: "Senior Software Engineer",
        start: "2022",
        end: "Present",
        details: [
            "Led migration to Next.js App Router and improved TTFB by 35%.",
            "Built a component library used across 5 product teams.",
        ],
    },
    {
        company: "Startup XYZ",
        role: "Full-stack Engineer",
        start: "2020",
        end: "2022",
        details: [
            "Designed and shipped a real-time dashboard with websockets.",
            "Set up CI/CD and testing strategy (Playwright + Vitest).",
        ],
    },
];

export const SKILLS = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Postgres",
    "Tailwind",
    "Playwright",
];

export const NAV_LINKS = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export const COPYRIGHT = `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`;

export const OG = {
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage], // absolute already; absoluteUrl() optional
    locale: "en_US",
    type: "website" as const,
};
