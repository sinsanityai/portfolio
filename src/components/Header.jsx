import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Start' },
  { to: '/projects/sinsanity-threads', label: 'Sinsanity Threads' },
  { to: '/projects/seo-content-writing', label: 'SEO' },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Zur Startseite">
        <span className="brand-mark">SW</span>
        <span>
          <strong>Sina Werner</strong>
          <small>KI Web · Content · Media</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Hauptnavigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
