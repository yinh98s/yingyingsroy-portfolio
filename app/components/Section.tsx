import { cn } from "../libs/utils";
import React from "react";


export default function Section({ id, title, className, children }: React.PropsWithChildren<{ id?: string; title?: string; className?: string }>) {
    return (
        <section id={id} className={cn("section", className)}>
            <div className="container-wide">
                {title && (
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 flex items-center gap-3">
                        <span className="inline-block w-2 h-6 bg-brand-500 rounded" />
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
}

