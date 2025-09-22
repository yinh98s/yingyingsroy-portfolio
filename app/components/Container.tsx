import { cn } from "../libs/utils";
import React from "react";


export default function Container({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return <div className={cn("container-wide", className)}>{children}</div>;
}