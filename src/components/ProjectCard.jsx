function ProjectVisual({ project, featured }) {
  if (featured) {
    return (
      <a className="project-visual project-visual-featured" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live ansehen`}>
        <div className="browser-chrome">
          <span />
          <span />
          <span />
        </div>
        <div className="site-preview">
          <div className="preview-hero" />
          <div className="preview-nav">
            <span>Alle Patterns</span>
            <span>Häkeln</span>
            <span>Stricken</span>
          </div>
          <div className="preview-grid">
            <span />
            <span />
            <span />
          </div>
        </div>
        <strong>{project.previewLabel}</strong>
      </a>
    );
  }

  return (
    <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
      <span>{project.previewLabel}</span>
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={featured ? 'project-card project-card-featured' : 'project-card'}>
      <ProjectVisual project={project} featured={featured} />

      <div className="project-content">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="tag-row">
          {project.tags.slice(0, featured ? 7 : 5).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl ? (
            <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live ansehen
            </a>
          ) : null}
          {project.repoUrl ? (
            <a className="button button-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
          {project.pdfUrl ? (
            <a className="button button-secondary" href={project.pdfUrl} target="_blank" rel="noreferrer">
              PDF anschauen
            </a>
          ) : null}
        </div>

        {project.pdfLinks ? (
          <div className="pdf-link-row" aria-label="SEO Arbeitsproben">
            {project.pdfLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        <details className="case-toggle">
          <summary>Case Study lesen</summary>
          <div className="case-toggle-body">
            <div>
              <h4>Ausgangslage</h4>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h4>Umsetzung</h4>
              <p>{project.process}</p>
            </div>
            <div>
              <h4>Ergebnis</h4>
              <p>{project.result}</p>
            </div>
            <div>
              <h4>Learnings</h4>
              <ul>
                {project.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>
      </div>
    </article>
  );
}
