import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section-shell page-section">
      <p className="eyebrow">404</p>
      <h1>Seite nicht gefunden.</h1>
      <p>Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
      <Link className="button button-primary" to="/">Zur Startseite</Link>
    </section>
  );
}
