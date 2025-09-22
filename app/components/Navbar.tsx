"use client";


import Link from "next/link";
import { NAV_LINKS, SITE } from "../libs/data";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/70 dark:bg-gray-950/60 shadow-soft" : "bg-transparent"}`}>
            <nav className="container-wide py-4 flex items-center justify-between">
                <Link href="#" className="font-semibold tracking-tight text-lg">{SITE.name}</Link>
                <div className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((l) => (
                        <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            {l.label}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>
                <div className="md:hidden"><ThemeToggle /></div>
            </nav>
        </header>
    );
}