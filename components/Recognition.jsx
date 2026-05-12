function Recognition() {
  const items = [
    { year: '2025', title: 'UCL AI and Digital Health Hackathon', body: 'Overall winner. ScleroDx \u2014 AI diagnostic for systemic sclerosis.', link: 'https://github.com/Amelia3141/Hackathon' },
    { year: '2024', title: 'Snowdon Trust full master\u2019s scholarship', body: 'Selected from 572 applicants (top 1.4%).', link: 'https://www.snowdontrust.org.uk/' },
    { year: '2024', title: 'BSc Neuroscience, First Class with PLUS Award', body: 'University of Bristol.', link: null },
  ];

  return (
    <section id="recognition" className="page" style={{ paddingTop: 40, paddingBottom: 40, borderTop: '1px solid var(--rule-2)' }}>
      <SectionHeader num="05" title="recognition/" />
      <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0 }}>
        {items.map((it, i) => (
          <li key={it.title} style={{
            display: 'grid', gridTemplateColumns: '110px 1fr 80px', gap: 20,
            padding: '10px 0',
            borderTop: i === 0 ? '1px solid var(--rule-2)' : 'none',
            borderBottom: '1px solid var(--rule-2)',
            alignItems: 'baseline',
          }}>
            <span style={{ fontSize: 15, color: 'var(--ink-3)' }}>{it.year}</span>
            <div>
              <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)' }}>{it.title}</div>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', margin: '2px 0 0' }}>{it.body}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              {it.link && (
                <a href={it.link} style={{
                  fontSize: 14, color: 'var(--accent)', textDecoration: 'none',
                }}>→ link</a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
