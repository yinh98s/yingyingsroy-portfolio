// libs/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import { Mail, ExternalLink } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

/* -------------------------- core class/url helpers ------------------------- */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "") {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    return new URL(path, base).toString();
}

export const isExternal = (href: string) => /^https?:\/\//i.test(href);

/* ----------------------------- UI style helpers ---------------------------- */
export function buttonVariants(
    variant: "primary" | "outline" | "ghost" | "link" = "primary"
) {
    const base =
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2";
    switch (variant) {
        case "primary":
            return cn(
                base,
                "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-600/30 shadow-sm hover:-translate-y-0.5"
            );
        case "outline":
            return cn(
                base,
                "border border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
            );
        case "ghost":
            return cn(
                base,
                "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            );
        case "link":
            return "inline-flex items-center gap-1 text-brand-600 hover:underline";
    }
}

/* ----------------------------- social utilities ---------------------------- */
export type Social = { href: string; label: string };
export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const detectKind = (
    s: Social
): "github" | "linkedin" | "email" | "external" => {
    const l = s.label.toLowerCase();
    const u = s.href.toLowerCase();
    if (l.includes("github") || u.includes("github")) return "github";
    if (l.includes("linkedin") || u.includes("linkedin")) return "linkedin";
    if (l.includes("email") || u.startsWith("mailto:")) return "email";
    return "external";
};

export const iconFor = (s: Social): IconComponent => {
    switch (detectKind(s)) {
        case "github":
            return SiGithub; // brand icon via Simple Icons
        case "linkedin":
            return SiLinkedin;
        case "email":
            return Mail; // Lucide generic icon
        default:
            return ExternalLink; // Lucide generic icon
    }
};

export const filterToCore = (list: Social[]) =>
    list.filter((s) => ["github", "linkedin"].includes(detectKind(s)));

export const buildContacts = (socials: Social[], email?: string): Social[] => {
    const base = filterToCore(socials);
    return email ? [...base, { href: `mailto:${email}`, label: "Email" }] : base;
};

/* ------------------------------ scroll helpers ----------------------------- */
// Simple scroll-spy for section highlighting
export function useScrollSpy(ids: string[], rootMargin = "0px 0px -60% 0px") {
    const [activeId, setActiveId] = React.useState<string>("");
    React.useEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean) as Element[];
        if (!elements.length) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveId(e.target.id);
                });
            },
            { root: null, rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        elements.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [ids, rootMargin]);

    return activeId;
}
