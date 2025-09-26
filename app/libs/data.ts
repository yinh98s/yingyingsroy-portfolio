// lib/data.ts
import { absoluteUrl } from "./utils";
import type { Experience, Project, Social } from "./types"; // ⬅️ was ../libs/types

export const SITE = {
    name: "YingYing Sroy",
    title: "YingYing Sroy – Software Engineer",
    description:
        " Driven software  developer with dual Computer science  and Mathematics degree, bring  a unique analytical mindset to solving complex technical challenges. ",
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
    { label: "Email", href: "mailto:yying6890@gmail.com"},
];

export const PROJECTS: Project[] = [
    {
        title: "2D-Game(Using the Gaming API)",
        description: "Developed a 2D game utilizing the provided gaming API as per the assignment instructions.,"+
         "Build a 2D game engine in Java implementation collision detection, pathfinding algorithms, and sprite-based character movement system.",
        repo: "https://github.com/yinh98s/2D-Game",
        tags: ["Next.js", "Edge", "Tailwind"],
    },
    {
        title: "Web Development Project(Senior Project)",
        description: "Developed an e-commerce platform for a local pizza store, incorporating various programming languages such as React.Js, Bootstrap, CSS",
        tags: ["React", "D3", "TypeScript"],
    },
];

export const EXPERIENCE: Experience[] = [
    {
        company: "California State Teachers' Retirement System",
        role: "Database Developer & System Analyst",
        start: "2023",
        end: "2024",
        details: [
            "Architected and maintained enterprise database infrastructure supporting 50,000+ confidential teacher retirement records, " +
            "designing custom SQL queries and automated data validation scripts that reduced processing errors by 40% and improved data integrity compliance.",
            "Developed automated document formatting pipeline that processed 1000+ departmental communication," +
            "implementing standardized protocols that reduced manual processing time by %60 while ensuring consistent information" +
            "delivery to stakeholders",
        ],
    },
    {
        company: "California State University,Sacramento",
        role: "Student Assistant and Grader",
        start: "2022",
        end: "2022",
        details: [
            "Supported Java programming instruction for 120+ students by designing code review frameworks, debugging complex algorithmic problems, and facilitating hands-,"+
            "on lab session that improved student comprehension score by 25%.",
            "Developed standardlized grading critria and automated evaluation scripts for Java Programming assignments, ensuring consistent assessment of 200+ submissions,"+
            "per week while maintaining rigorous coding standards and providing constructive technical feedback.",
            "Implemented streamlined communication system using digital platforms to deliver courses updates and programming resources to students,reducing  response time,"+
            "for technical queries from 24 hours to 2 hours and improving overall course satisfaction ratings.",
        ],
   },



];

export const SKILLS = [
    "TypeScript","Java", "C/C++", "JavaScript","SQL", "React.js", "HTML5","CSS3", "Bootstrap", "Responsive Design", "Spring boot",
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
