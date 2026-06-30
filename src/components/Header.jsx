const navItems = [
  { href: '#arbeiten', label: 'Arbeiten' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#skills', label: 'Skills' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Zur Startseite">
        <span className="brand-mark">SW</span>
        <span>
          <strong>Sina Werner</strong>
          <small>Web · Content · KI</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Sprungnavigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
