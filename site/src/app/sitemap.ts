import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { areaList } from "@/content/areas";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/sobre-o-escritorio",
    "/equipe",
    "/areas-de-atuacao",
    "/blog",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const area of areaList) {
    entries.push({
      url: `${site.url}/areas/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const post of posts) {
    entries.push({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  return entries;
}
