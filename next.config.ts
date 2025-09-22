import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // Prefer remotePatterns for clarity
        remotePatterns: [
            { protocol: "https", hostname: "yingyingsroy-portfolio.vercel.app" },
            { protocol: "https", hostname: "instagram.fpnh18-6.fna.fbcdn.net" }, // your current URL's host
            // Optional: add other Instagram hosts you might see
            { protocol: "https", hostname: "scontent.cdninstagram.com" },
            { protocol: "https", hostname: "*.fbcdn.net" as any }, // may not match in all Next versions; remove if it errors
        ],
    },
};

export default nextConfig;
