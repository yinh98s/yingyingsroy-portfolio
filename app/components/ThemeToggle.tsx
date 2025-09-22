"use client";


import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");


    useEffect(() => {
        setMounted(true);
        const stored = (localStorage.getItem("theme") as "light" | "dark" | null) ?? null;
        const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const t = stored ?? system;
        setTheme(t);
        document.documentElement.classList.toggle("dark", t === "dark");
    }, []);


    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };


    if (!mounted) return null;


    return (
        <button onClick={toggle} aria-label="Toggle theme" className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm hover:shadow-soft">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
    );
}