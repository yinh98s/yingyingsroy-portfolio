import type { Experience } from "../libs/types";    // ✅ types from lib/types

export default function Timeline({ items }: { items: Experience[] }) {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-800">
            {items.map((it, i) => (
                <li key={i} className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-brand-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-950" />
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-base font-semibold">
                            {it.role} · <span className="text-gray-500">{it.company}</span>
                        </h3>
                        <span className="text-sm text-gray-500">
              {it.start} — {it.end}
            </span>
                    </div>
                    <ul className="mt-2 list-disc ms-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        {it.details.map((d, j) => (
                            <li key={j}>{d}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ol>
    );
}
