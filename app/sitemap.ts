import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.nolancn.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.nolancn.com/files/NOLANCHAN_RESUME_WEB_JUNE2024.pdf",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
