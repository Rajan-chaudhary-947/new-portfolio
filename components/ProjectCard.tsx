import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-media" aria-label={`${project.name} project preview`}>
        {project.image ? <img src={project.image} alt={`${project.name} preview`} /> : <span>Image / product preview</span>}
      </div>
      <div className="project-content">
        <div className="project-meta"><span>{project.eyebrow}</span></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.stack.slice(0, 6).map((tech) => <span className="tag" key={tech}>{tech}</span>)}
        </div>
        <div className="project-actions">
          {project.liveUrl ? (
            <a className="text-link strong" href={project.liveUrl} target="_blank" rel="noreferrer">Live link <Icon name="external" /></a>
          ) : (
            <Link className="text-link strong" href={`/projects/${project.slug}`}>Case study <Icon name="arrow" /></Link>
          )}
          {project.githubUrl ? <a className="icon-link" href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} GitHub repository`}><Icon name="github" /></a> : null}
          {project.liveUrl ? <a className="icon-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open live ${project.name} project`}><Icon name="external" /></a> : null}
        </div>
      </div>
    </article>
  );
}
