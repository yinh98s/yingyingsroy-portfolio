// app/components/Section.tsx
import * as React from "react";
import { cn } from "../libs/utils";

type Props = React.PropsWithChildren<{
    id?: string;
    title?: string;
    subtitle?: string;
    className?: string;
}>;

export default function Section({ id, title, subtitle, className, children }: Props) {
    return (
        <section id={id} className={cn("scroll-mt-28 py-10 md:py-16", className)}>
            <div className="container-wide">
                {title && (
                    <header className="mb-8">
                        <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight md:text-3xl">
                            <span className="inline-block h-6 w-2 rounded bg-brand-500" />
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
                                {subtitle}
                            </p>
                        )}
                    </header>
                )}
                {children}
            </div>
        </section>
    );
}
