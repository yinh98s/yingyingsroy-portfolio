// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { OG, SITE } from "./libs/data";
import { cn } from "./libs/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: SITE.title,
    description: SITE.description,
    keywords: OG ? undefined : SITE.keywords,
    metadataBase: new URL(SITE.url),
    openGraph: {
        url: OG?.url ?? SITE.url,
        siteName: OG?.siteName ?? SITE.name,
        title: OG?.title ?? SITE.title,
        description: OG?.description ?? SITE.description,
        images: OG?.images,
    },
    twitter: {
        card: "summary_large_image",
        title: SITE.title,
        description: SITE.description,
        images: OG?.images,
    },
    alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className="h-full">
        <body className={cn(inter.className, "min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100")}>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        </body>
        </html>
    );
}