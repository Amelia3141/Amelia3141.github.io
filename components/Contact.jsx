function Contact() {
  const rows = [
    { label: 'email', value: 'amelia.ghaneahercock.24@ucl.ac.uk', href: 'mailto:amelia.ghaneahercock.24@ucl.ac.uk' },
    { label: 'phone', value: '+44 7341 384667', href: 'tel:+447341384667' },
    { label: 'github', value: '@Amelia3141', href: 'https://github.com/Amelia3141' },
    { label: 'linkedin', value: 'amelia-gh', href: 'https://www.linkedin.com/in/amelia-gh' },
    { label: 'based', value: 'London, UK', href: null },
  ];

  return (
    <section id="contact" className="page" style={{ paddingTop: 40, paddingBottom: 40, borderTop: '1px solid var(--rule-2)' }}>
      <SectionHeader num="06" title="contact/" />
      <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0 }}>
        {rows.map((r, i) => (
          <li key={r.label} style={{
            display: 'grid', gridTemplateColumns: '140px 1fr', gap: 20,
            padding: '8px 0',
            borderTop: i === 0 ? '1px solid var(--rule-2)' : 'none',
            borderBottom: '1px solid var(--rule-2)',
            alignItems: 'baseline',
          }}>
            <span style={{ fontSize: 15, color: 'var(--ink-3)' }}>{r.label}/</span>
            {r.href ? (
              <a href={r.href} style={{ fontSize: 17, color: 'var(--accent)', textDecoration: 'none', wordBreak: 'break-word' }}>{r.value}</a>
            ) : (
              <span style={{ fontSize: 17, color: 'var(--ink)' }}>{r.value}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
