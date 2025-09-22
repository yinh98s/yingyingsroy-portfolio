"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../libs/types";

export default function ProjectCard({ p }: { p: Project }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-soft bg-white dark:bg-gray-900"
        >
            {p.image && (
                <div className="relative h-48 w-full">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
            )}
            <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    {(p.href || p.repo) && (
                        <div className="flex gap-2">
                            {p.href && (
                                <a
                                    href={p.href}
                                    className="inline-flex items-center gap-1 text-sm text-brand-600 dark:text-brand-400 hover:underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live <ArrowUpRight size={14} />
                                </a>
                            )}
                            {p.repo && (
                                <a
                                    href={p.repo}
                                    className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code <ArrowUpRight size={14} />
                                </a>
                            )}
                        </div>
                    )}
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                        <span
                            key={t}
                            className="text-xs border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-300"
                        >
              {t}
            </span>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}
