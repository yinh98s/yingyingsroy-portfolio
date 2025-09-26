// app/components/ProjectCard.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../libs/types";
import { cn, isExternal } from "../libs/utils";

export default function ProjectCard({ p }: { p: Project }) {
    const primaryLink = p.href || p.repo;
    const external = primaryLink ? isExternal(primaryLink) : false;

    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className={cn(
                "group overflow-hidden rounded-2xl border bg-white dark:bg-gray-900",
                "border-gray-200 dark:border-gray-800 hover:shadow-soft"
            )}
        >
            {p.image && (
                <div className="relative aspect-[16/9] w-full">
                    {primaryLink ? (
                        <a
                            href={primaryLink}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            aria-label={`Open ${p.title}`}
                        >
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                sizes="(min-width: 768px) 600px, 100vw"
                            />
                        </a>
                    ) : (
                        <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 600px, 100vw"
                        />
                    )}
                    {/* subtle overlay on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
            )}

            <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>

                    {(p.href || p.repo) && (
                        <div className="flex gap-2">
                            {p.href && (
                                <a
                                    href={p.href}
                                    className="inline-flex items-center gap-1 text-sm text-brand-600 dark:text-brand-400 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${p.title} live demo`}
                                >
                                    Live <ArrowUpRight size={14} />
                                </a>
                            )}
                            {p.repo && (
                                <a
                                    href={p.repo}
                                    className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${p.title} source code`}
                                >
                                    Code <ArrowUpRight size={14} />
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {p.description && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {p.description}
                    </p>
                )}

                {p.tags?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-gray-200 px-2 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300"
                            >
                {t}
              </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.article>
    );
}
