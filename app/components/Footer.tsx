import { COPYRIGHT, SOCIALS } from "../libs/data";


export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
            <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">{COPYRIGHT}</p>
                <div className="flex gap-4 text-sm">
                    {SOCIALS.map((s) => (
                        <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            {s.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}