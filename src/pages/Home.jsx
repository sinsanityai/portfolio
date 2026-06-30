import ProjectCard from '../components/ProjectCard.jsx';
import { projects, skills } from '../data/projects.js';

export default function Home() {
  const featuredProject = projects.find((project) => project.slug === 'sinsanity-threads');
  const supportingProjects = projects.filter((project) => project.slug !== 'sinsanity-threads');

  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio · Sina Werner</p>
          <h1>KI-gestützte Web-, Content- und Mediengestaltung.</h1>
          <p className="hero-text">
            Ich entwickle digitale Inhalte, visuelle Konzepte und Webprojekte — von SEO-Texten über AI-assisted Art Direction bis zur umgesetzten React/Vite-Webanwendung.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Projekte ansehen</a>
            <a className="button button-secondary" href="mailto:hello@example.com">Kontakt aufnehmen</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Portfolio-Schwerpunkte">
          <div className="panel-card large">
            <span>01</span>
            <strong>Webdesign & Frontend</strong>
            <p>React/Vite, mobile-first Layouts, UX-Struktur und Deployment.</p>
          </div>
          <div className="panel-card">
            <span>02</span>
            <strong>SEO & Content</strong>
            <p>Strukturierte Texte, Landingpages, Blogartikel und Metadaten.</p>
          </div>
          <div className="panel-card accent">
            <span>03</span>
            <strong>KI-Workflows</strong>
            <p>Prompting, Konzeptentwicklung, Bildsprache und iterative Steuerung.</p>
          </div>
        </div>
      </section>

      <section className="section-shell intro-grid">
        <div>
          <p className="eyebrow">Profil</p>
          <h2>Content-Verständnis trifft Web-Umsetzung.</h2>
        </div>
        <p>
          Mein Hintergrund liegt in Sprache, Kommunikation und SEO. In der Weiterbildung zur KI Medien- und Content-Gestalterin verbinde ich diese Erfahrung mit Webentwicklung, visueller Konzeption und KI-gestützten Workflows. Dadurch kann ich Projekte nicht nur schreiben oder gestalten, sondern auch strukturiert planen, testen und online bringen.
        </p>
      </section>

      <section className="section-shell" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Ausgewählte Arbeiten</p>
          <h2>Featured Project</h2>
        </div>
        <ProjectCard project={featuredProject} featured />
      </section>

      <section className="section-shell project-grid-section">
        <div className="section-heading">
          <p className="eyebrow">Case Studies</p>
          <h2>Weitere Arbeitsproben</h2>
        </div>
        <div className="project-grid">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell skills-section">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Womit ich arbeite</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section-shell contact-section">
        <p className="eyebrow">Kontakt</p>
        <h2>Lass uns über Projekte sprechen.</h2>
        <p>
          Diese Seite ist als erste Portfolio-Version gedacht: klar, fokussiert und erweiterbar. Als Nächstes können Screenshots, echte Kontaktlinks und zusätzliche Projektbilder ergänzt werden.
        </p>
        <a className="button button-primary" href="mailto:hello@example.com">Mail schreiben</a>
      </section>
    </>
  );
}
