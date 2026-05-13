function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme] = React.useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { href: '#research', label: 'research/' },
    { href: '#experience', label: 'experience/' },
    { href: '#toolkit', label: 'toolkit/' },
    { href: '#recognition', label: 'recognition/' },
    { href: '#contact', label: 'contact/' },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'color-mix(in oklch, var(--paper) 92%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rule-2)' : '1px solid transparent',
      transition: 'all 200ms ease',
    }}>
      <div className="page nav-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '14px 40px' }}>
        <a href="#top" className="nav-brand" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)' }}>amelia.ghanea</span>
          <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>~/</span>
        </a>
        <div className="nav-items">
          {items.map((it) => (
            <a key={it.href} href={it.href} style={{
              fontSize: 15, color: 'var(--ink-2)', textDecoration: 'none', fontWeight: 400, whiteSpace: 'nowrap',
            }}>{it.label}</a>
          ))}
        </div>
        <div className="nav-toggle">
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        </div>
      </div>
    </nav>
  );
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? 'switch to light mode' : 'switch to dark mode'}
      title={isDark ? 'light mode' : 'dark mode'}
      style={{
        background: 'transparent',
        border: 'none',
        color: 'var(--ink)',
        width: 28, height: 28, padding: 0,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        transition: 'color 180ms ease',
      }}
    >
      {isDark ? (
        // Moon outline
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      ) : (
        // Sun outline
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}
