import type { MetadataRoute } from "next";
import { assessmentProjects, featuredProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = [...featuredProjects, ...assessmentProjects].map((project) => `${site.url}/projects/${project.slug}`);

  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...projectUrls.map((url) => ({ url, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
