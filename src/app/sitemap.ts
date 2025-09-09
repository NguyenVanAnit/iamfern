import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // dùng async để sau này có thể gọi API hoặc Dynamic Routes
    return [
        {
            url: "https://xfinancelanding.vnfite.com.vn",
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1.0,
        },
        {
            url: "https://xfinancelanding.vnfite.com.vn/about",
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
        {
            url: "https://xfinancelanding.vnfite.com.vn/services",
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: "https://xfinancelanding.vnfite.com.vn/news",
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
        {
            url: "https://xfinancelanding.vnfite.com.vn/support",
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        }
    ]
}