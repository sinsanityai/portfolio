const navItems = [
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#arbeiten', label: 'Arbeiten' },
  { href: '#schwerpunkte', label: 'Schwerpunkte' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Zur Startseite">
        <strong>Sina Werner</strong>
        <small>Junior Content & Digital Designerin</small>
      </a>

      <nav className="site-nav" aria-label="Sprungnavigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-contact" aria-label="Kontaktlinks">
        <a href="mailto:hello@example.com">Mail</a>
        <a href="https://github.com/sinsanityai" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </header>
  );
}
