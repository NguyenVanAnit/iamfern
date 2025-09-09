import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api", "/admin", "/private"],
            },
        ],
        sitemap: "https://xfinancelanding.vnfite.com.vn/sitemap.xml",
    }
}