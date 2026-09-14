import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";
import { blogPosts } from "@/lib/posts";

export const dynamic = "force-static";

const routes = [
  "",
  "iptv/",
  "lista-iptv/",
  "planos/",
  "teste-gratis/",
  "blog/",
  "faq/",
  "quem-somos/",
  "contato/",
  "politica-de-privacidade/",
  "termos-de-uso/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = routes.map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: new Date(),
  }));

  const postEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
  }));

  return [...staticEntries, ...postEntries];
}
