import { Link } from 'react-router-dom';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={featured ? 'project-card project-card-featured' : 'project-card'}>
      <div className="project-visual" aria-hidden="true">
        <span>{project.title.split(' ').map((word) => word[0]).join('').slice(0, 2)}</span>
      </div>
      <div className="project-content">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.tags.slice(0, featured ? 7 : 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="text-link" to={`/projects/${project.slug}`}>
          Case Study lesen
        </Link>
      </div>
    </article>
  );
}
