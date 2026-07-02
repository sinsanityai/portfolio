import ProjectCard from '../components/ProjectCard.jsx';
import { focusAreas, projects } from '../data/projects.js';

const workStripItems = [
  {
    label: 'Obsidian Ritual',
    meta: 'AI-assisted Art Direction',
    type: 'editorial',
  },
  {
    label: 'Sinsanity Threads',
    meta: 'Shop-Prototyp & Webdesign',
    type: 'webshop',
  },
  {
    label: 'SEO Content',
    meta: 'Landingpages & Blogtexte',
    type: 'seo',
  },
  {
    label: 'Fix & Remix',
    meta: 'Konzept & Storytelling',
    type: 'concept',
  },
];

export default function Home() {
  const featuredProject = projects.find((project) => project.slug === 'sinsanity-threads');
  const supportingProjects = projects.filter((project) => project.slug !== 'sinsanity-threads');

  return (
    <div id="top">
      <section className="work-strip section-shell" aria-label="Visueller Einblick in Arbeitsbereiche">
        {workStripItems.map((item) => (
          <article key={item.label} className={`work-strip-card work-strip-card-${item.type}`}>
            <span>{item.meta}</span>
            <strong>{item.label}</strong>
          </article>
        ))}
      </section>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio · Sina Werner</p>
          <h1>Junior Content & Digital Designerin.</h1>
          <p className="hero-text">
            Mit SEO-Erfahrung, didaktischem Hintergrund und Praxis in KI-gestützter Konzeption und Web-Prototyping. Ich strukturiere Inhalte und Ideen so, dass daraus verständliche, visuelle und digitale Projekte werden.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#arbeiten">Arbeiten ansehen</a>
            <a className="button button-secondary" href="#kontakt">Kontakt</a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Portfolio-Schwerpunkte">
          <div className="panel-card large">
            <span>01</span>
            <strong>Content & Zielgruppenansprache</strong>
            <p>SEO-orientiertes Schreiben, natürliche Keyword-Integration, verständliche Sprache und klare Informationsstruktur.</p>
          </div>
          <div className="panel-card">
            <span>02</span>
            <strong>KI-Konzeption & Storytelling</strong>
            <p>Promptentwicklung, visuelle Konsistenz, Storytelling und iterative Überarbeitung mit kritischem Blick.</p>
          </div>
          <div className="panel-card accent">
            <span>03</span>
            <strong>Digitale Projektpraxis</strong>
            <p>Web-Prototyping mit KI-Unterstützung, React/Vite im Praxisprojekt, Testing und Deployment im Projektkontext.</p>
          </div>
        </div>
      </section>

      <section className="section-shell intro-grid" id="ueber-mich">
        <div>
          <p className="eyebrow">Über mich</p>
          <h2>Sprache, Struktur und Storytelling als roter Faden.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Mein Hintergrund liegt in Sprache, SEO-Content und Lehre. Als Dozentin für Deutsch als Zweitsprache habe ich gelernt, Inhalte so aufzubereiten, dass sie verständlich, zugänglich und nützlich werden. Dieser didaktische Hintergrund prägt bis heute meinen Blick auf Zielgruppen, Verständlichkeit und klare Struktur.
          </p>
          <p>
            In meiner Weiterbildung zur KI Content- und Mediengestalterin verbinde ich diese Erfahrung mit Prompting, visueller Konzeption, Storytelling und Web-Prototyping. Ich arbeite gern iterativ: mit einer ersten Idee, klarer Richtung, kritischem Blick und der Bereitschaft, Entwürfe so lange zu schärfen, bis sie wirklich tragen.
          </p>
        </div>
      </section>

      <section className="section-shell focus-section" id="schwerpunkte">
        <div className="section-heading focus-heading">
          <p className="eyebrow">Schwerpunkte</p>
          <h2>Ein Kern, vier Arbeitsbereiche.</h2>
          <p>
            Die Bereiche greifen ineinander: Sprache und Struktur geben den Rahmen, KI-Workflows helfen beim Entwickeln und Schärfen, digitale Projektpraxis macht Ideen sichtbar.
          </p>
        </div>

        <div className="focus-map" aria-label="Mindmap meiner Schwerpunkte">
          <article className="focus-core">
            <strong>Ich strukturiere Inhalte und Ideen.</strong>
            <p>So entstehen verständliche, visuelle und digitale Projekte.</p>
          </article>

          {focusAreas.map((area, index) => (
            <article className={`focus-node focus-node-${index + 1}`} key={area.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="arbeiten">
        <div className="section-heading">
          <p className="eyebrow">Ausgewählte Arbeiten</p>
          <h2>Featured Project</h2>
        </div>
        <ProjectCard project={featuredProject} featured />
      </section>

      <section className="section-shell project-grid-section">
        <div className="section-heading">
          <p className="eyebrow">Arbeitsproben</p>
          <h2>Weitere Projekte</h2>
        </div>
        <div className="project-grid">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell contact-section" id="kontakt">
        <p className="eyebrow">Kontakt</p>
        <h2>Lass uns über Projekte sprechen.</h2>
        <p>
          Diese Portfolio-Version ist als klarer Onepager aufgebaut: schnelle Orientierung, visuelle Arbeitsproben und ausklappbare Case Studies für den Prozess dahinter.
        </p>
        <a className="button button-primary" href="mailto:hello@example.com">Mail schreiben</a>
      </section>
    </div>
  );
}
