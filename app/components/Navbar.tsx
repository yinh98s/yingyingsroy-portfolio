// app/components/Navbar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "../libs/data";
import ThemeToggle from "./ThemeToggle";
import { cn, useScrollSpy } from "../libs/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Gather section IDs from NAV_LINKS like "#projects"
    const sectionIds = React.useMemo(
        () =>
            NAV_LINKS.map((l) => l.href).filter((h) => h.startsWith("#")).map((h) => h.slice(1)),
        []
    );
    const activeId = useScrollSpy(sectionIds);

    return (
        <>
            {/* Skip link for a11y */}
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-600 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
            >
                Skip to content
            </a>

            <header
                className={cn(
                    "sticky top-0 z-50 transition-all",
                    scrolled ? "backdrop-blur bg-white/70 dark:bg-gray-950/60 shadow-soft" : "bg-transparent"
                )}
            >
                <nav className="container-wide flex items-center justify-between py-4">
                    <Link href="/" className="text-lg font-semibold tracking-tight">
                        {SITE.name}
                    </Link>

                    {/* Desktop */}
                    <div className="hidden items-center gap-6 md:flex">
                        {NAV_LINKS.map((l) => {
                            const isHash = l.href.startsWith("#");
                            const id = isHash ? l.href.slice(1) : undefined;
                            const active = id && id === activeId;
                            return isHash ? (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className={cn(
                                        "text-sm transition",
                                        active
                                            ? "text-gray-900 dark:text-white"
                                            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    )}
                                >
                                    {l.label}
                                </a>
                            ) : (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                        <ThemeToggle />
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden">
                        <button
                            aria-label={open ? "Close menu" : "Open menu"}
                            onClick={() => setOpen((v) => !v)}
                            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                        >
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile drawer */}
                {open && (
                    <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
                        <div className="container-wide flex flex-col gap-3 py-4">
                            {NAV_LINKS.map((l) =>
                                l.href.startsWith("#") ? (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        onClick={() => setOpen(false)}
                                    >
                                        {l.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        onClick={() => setOpen(false)}
                                    >
                                        {l.label}
                                    </Link>
                                )
                            )}
                            <ThemeToggle />
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
