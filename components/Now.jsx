function Now() {
  const items = [
    { tag: 'phd', text: 'Ordinal SuStaIn on a ~8,000-patient registry for data-driven subtyping of the EDS–POTS–MCAS triad. JAX/CUDA acceleration over Python MCMC.' },
    { tag: 'fairness', text: 'Mechanistic interpretability methods for detecting and mitigating demographic bias in clinical LLMs. First-author paper in prep.' },
    { tag: 'consulting', text: 'NetIntel AI foresight platform with Z/Yen & SI Units; decision-support tooling with University of Oxford.' },
  ];

  return (
    <section className="page" style={{ paddingTop: 32, paddingBottom: 32, borderTop: '1px solid var(--rule-2)' }}>
      <SectionHeader num="01" id="now" title="now/" sub="// current focus" />
      <ul style={{ listStyle: 'none', margin: '18px 0 0', padding: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{
            display: 'grid', gridTemplateColumns: '140px 1fr', gap: 24, alignItems: 'baseline',
            padding: '10px 0',
            borderTop: '1px solid var(--rule-2)',
            borderBottom: i === items.length - 1 ? '1px solid var(--rule-2)' : 'none',
          }}>
            <span style={{ fontSize: 15, color: 'var(--accent)', fontWeight: 500 }}>{it.tag}/</span>
            <span style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--ink)' }}>{it.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SectionHeader({ num, title, sub }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>§{num}</span>
      <h2 style={{ fontSize: 24, fontWeight: 600, margin: 0, color: 'var(--ink)' }}>{title}</h2>
      {sub && <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>{sub}</span>}
    </div>
  );
}
window.SectionHeader = SectionHeader;
