import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section-shell page-section">
        <p className="eyebrow">Nicht gefunden</p>
        <h1>Dieses Projekt gibt es noch nicht.</h1>
        <Link className="button button-primary" to="/">Zurück zur Startseite</Link>
      </section>
    );
  }

  return (
    <article className="section-shell case-study">
      <Link className="back-link" to="/">← Zurück zur Übersicht</Link>

      <header className="case-header">
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="hero-text">{project.summary}</p>
        <div className="meta-grid">
          <div>
            <span>Projektart</span>
            <strong>{project.category}</strong>
          </div>
          <div>
            <span>Jahr</span>
            <strong>{project.year}</strong>
          </div>
          <div>
            <span>Rolle</span>
            <strong>{project.role}</strong>
          </div>
        </div>
        <div className="tag-row wide">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="hero-actions">
          {project.liveUrl ? <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live ansehen</a> : null}
          {project.repoUrl ? <a className="button button-secondary" href={project.repoUrl} target="_blank" rel="noreferrer">GitHub ansehen</a> : null}
        </div>
      </header>

      <section className="case-grid">
        <div className="case-block">
          <p className="eyebrow">Ausgangslage</p>
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
        </div>
        <div className="case-block">
          <p className="eyebrow">Umsetzung</p>
          <h2>Prozess</h2>
          <p>{project.process}</p>
        </div>
        <div className="case-block">
          <p className="eyebrow">Ergebnis</p>
          <h2>Result</h2>
          <p>{project.result}</p>
        </div>
        <div className="case-block list-block">
          <p className="eyebrow">Highlights</p>
          <h2>Was gezeigt wird</h2>
          <ul>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-block learnings">
        <p className="eyebrow">Learnings</p>
        <h2>Was ich daraus mitnehme</h2>
        <ul>
          {project.learnings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
