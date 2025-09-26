// app/components/Hero.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { SITE, SOCIALS } from "../libs/data";
import { FileText } from "lucide-react";
import {
    cn,
    buildContacts,
    iconFor,
    isExternal,
    type Social,
} from "../libs/utils";
import { JSX } from "react"; // <- adjust this import path

export default function Hero(): JSX.Element {
    const resumeIsExternal = !!(SITE.resumeUrl && isExternal(SITE.resumeUrl));
    const contacts: Social[] = buildContacts(
        (Array.isArray(SOCIALS) ? SOCIALS : []) as Social[],
        SITE.email
    );

    return (
        <section className="relative overflow-hidden">
            <div className="container-wide pt-16 md:pt-24">
                <div className="grid items-center gap-10 md:grid-cols-[1fr,280px]">
                    {/* Copy */}
                    <div>
                        <p className="text-sm uppercase tracking-widest text-brand-600">
                            Portfolio
                        </p>

                        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                {SITE.title}
              </span>{" "}
                            <span className="text-gray-500" aria-hidden="true"></span>
                        </h1>

                        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                            {SITE.description}
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className={cn(
                                    "rounded-lg bg-brand-600 px-5 py-2.5 font-medium text-white",
                                    "hover:bg-brand-700 transition shadow-sm hover:translate-y-[-1px]",
                                    "focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                                )}
                                aria-label="Skip to projects"
                            >
                                View projects
                            </a>

                            {SITE.resumeUrl && (
                                <a
                                    href={SITE.resumeUrl}
                                    target={resumeIsExternal ? "_blank" : undefined}
                                    rel={resumeIsExternal ? "noopener noreferrer" : undefined}
                                    className={cn(
                                        "group inline-flex items-center gap-2 rounded-lg border px-5 py-2.5",
                                        "border-gray-300 text-gray-900 hover:bg-gray-50",
                                        "dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800",
                                        "transition"
                                    )}
                                    aria-label="Open resume"
                                >
                                    <FileText className="h-4 w-4 transition group-hover:scale-105" />
                                    <span>Resume</span>
                                    {resumeIsExternal && (
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4 opacity-70"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
                                            />
                                        </svg>
                                    )}
                                </a>
                            )}
                        </div>

                        {/* Contacts: GitHub, LinkedIn, Email */}
                        {contacts.length > 0 && (
                            <ul className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                                {contacts.map((s) => {
                                    const Icon = iconFor(s);
                                    const ext = isExternal(s.href);
                                    return (
                                        <li key={s.href}>
                                            <a
                                                href={s.href}
                                                target={ext ? "_blank" : undefined}
                                                rel={ext ? "noopener noreferrer" : undefined}
                                                className="group inline-flex items-center gap-2 text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                                aria-label={s.label}
                                                title={s.label}
                                            >
                                                <Icon className="h-4 w-4 transition group-hover:scale-110" />
                                                <span className="whitespace-nowrap">{s.label}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>

                    {/* Avatar */}
                    <div className="justify-self-center md:justify-self-end">
                        <div className="relative">
                            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-white shadow-soft dark:ring-gray-900 md:h-56 md:w-56">
                                <Image
                                    src={SITE.ogImage}
                                    alt={SITE.name ?? "Profile"}
                                    fill
                                    sizes="(min-width: 768px) 14rem, 10rem"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
