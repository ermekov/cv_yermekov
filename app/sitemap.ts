import { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;

  const languageAlternates = (path: string) =>
    Object.fromEntries(locales.map((l) => [l, `${site.domain}/${l}${path}`]));

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({
      url: `${site.domain}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: languageAlternates("") },
    });

    for (const project of projects) {
      routes.push({
        url: `${site.domain}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: languageAlternates(`/projects/${project.slug}`) },
      });
    }
  }

  return routes;
}
