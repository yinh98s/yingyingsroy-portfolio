export type Social = { label: string; href: string };

export type Project = {
    title: string;
    description: string;
    href?: string;
    repo?: string;
    tags: string[];
    image?: string;
};

export type Experience = {
    company: string;
    role: string;
    start: string;
    end: string;
    details: string[];
};