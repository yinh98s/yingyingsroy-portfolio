import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { OG, SITE } from "./libs/data";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: SITE.title,
    description: SITE.description,
    keywords: OG ? undefined : SITE.keywords,
    openGraph: {
        url: OG.url,
        siteName: OG.siteName,
        title: OG.title,
        description: OG.description,
        images: OG.images,

    },
    twitter: {
        card: "summary_large_image",
        title: SITE.title,
        description: SITE.description,
        images: OG.images,
    },
    metadataBase: new URL(SITE.url),
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}