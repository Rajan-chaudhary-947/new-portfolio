import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { assessmentProjects, featuredProjects, type Project } from "@/lib/projects";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

function getProject(slug: string): Project | null {
  return [...featuredProjects, ...assessmentProjects].find((project) => project.slug === slug) || null;
}

export async function generateStaticParams() {
  return [...featuredProjects, ...assessmentProjects].map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name} — Project Case Study`;
  return {
    title,
    description: project.description,
    keywords: [project.name, `${project.name} project`, "Rajan Chaudhary", ...project.stack],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | Rajan Chaudhary`,
      description: project.description,
      url: `${site.url}/projects/${project.slug}`,
      type: "article",
      images: project.image ? [{ url: project.image, alt: `${project.name} project preview` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Rajan Chaudhary`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: `${site.url}/projects/${project.slug}`,
    image: project.image ? `${site.url}${project.image}` : undefined,
    keywords: project.stack,
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    programmingLanguage: project.stack,
    author: { "@id": `${site.url}/#person` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${site.url}/projects/${project.slug}` },
    ],
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <section className="case-hero">
        <div className="container">
          <div className="case-topbar">
            <Link className="back-link" href="/work">← Back to work</Link>
          </div>
          <div className="case-hero-copy">
            <span className="eyebrow">{project.eyebrow}</span>
            <h1>{project.name}</h1>
            <p>{project.longDescription}</p>
            <div className="hero-actions">
              {project.githubUrl ? <a className="btn secondary" href={project.githubUrl} target="_blank" rel="noreferrer"><Icon name="github" /> Source code</a> : null}
              {project.liveUrl ? <a className="btn primary" href={project.liveUrl} target="_blank" rel="noreferrer"><Icon name="external" /> Live project</a> : null}
              {project.privacyUrl && (
                <a
                  href={project.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="case-study-title">
        <div className="container case-grid">
          <article className="case-main">
            <h2 id="case-study-title">What I built</h2>
            <p className="muted">{project.description}</p>
            <h2>Engineering highlights</h2>
            <ul className="bullet-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>Technology</h2>
            <div className="tag-row">{project.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
          </article>
        </div>
      </section>
    </main>
  );
}
