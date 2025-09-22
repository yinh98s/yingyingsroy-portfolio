import { MetadataRoute } from "next";
import { SITE } from "./libs/data";


export default function sitemap(): MetadataRoute.Sitemap {
    const base = SITE.url;
    return [
        { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ];
}