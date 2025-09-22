import Image from "next/image";
import { SITE, SOCIALS } from "../libs/data";


export default function Hero() {
    return (
        <div className="container-wide pt-16 md:pt-24">
            <div className="grid md:grid-cols-[1fr,280px] gap-10 items-center">
                <div>
                    <p className="text-sm uppercase tracking-widest text-brand-600">Portfolio</p>
                    <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
                        {SITE.name} <span className="text-gray-500">—</span> Software Engineer
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">{SITE.description}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="#projects" className="rounded-lg bg-brand-600 text-white px-5 py-2.5 font-medium hover:bg-brand-700">View projects</a>
                        <a href={SITE.resumeUrl} className="rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-2.5" target="_blank" rel="noreferrer">Resume</a>
                    </div>
                    <div className="mt-6 flex gap-5 text-sm">
                        {SOCIALS.map((s) => (
                            <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">{s.label}</a>
                        ))}
                    </div>
                </div>
                <div className="justify-self-center md:justify-self-end">
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900 shadow-soft">
                        <Image
                            src={SITE.ogImage}
                            alt={SITE.name}
                            fill
                            sizes="(min-width: 768px) 14rem, 10rem"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}