// Unified research output, sourced from CV.
const RESEARCH_ITEMS = [
  {
    type: 'working-paper',
    typeLabel: 'working paper',
    year: '2026',
    title: 'Mechanistic interpretability for bias detection in clinical LLMs',
    authors: 'A. Ghanea et al.',
    venue: 'In preparation · first author',
    abstract: 'Sparse-autoencoder pipelines and feature-analysis tooling to identify and measure demographic bias encoded in clinical AI model representations. Develops fairness-evaluation frameworks across protected characteristics in healthcare AI.',
    tags: ['SAEs', 'mech interp', 'fairness', 'medical LLMs'],
    link: null,
  },
  {
    type: 'thread',
    typeLabel: 'thread',
    year: '2025',
    title: 'Ordinal SuStaIn for the EDS–POTS–MCAS triad',
    authors: 'A. Ghanea',
    venue: 'UCL · ~8,000-patient registry · ongoing',
    abstract: 'Applying ordinal SuStaIn for data-driven disease subtyping in a hypermobility-spectrum registry. GPU-accelerated JAX/CUDA implementation achieving significant speedup over existing Python MCMC.',
    tags: ['SuStaIn', 'JAX', 'subtyping'],
    link: 'https://github.com/Amelia3141/mphil',
    linkLabel: 'github.com/Amelia3141/mphil',
  },
  {
    type: 'thread',
    typeLabel: 'thread',
    year: '2025',
    title: 'NLP phenotyping of 1,400 PubMed Central articles',
    authors: 'A. Ghanea',
    venue: 'UCL · F1 = 84.7% vs. manual annotation',
    abstract: 'Built an NLP pipeline for systematic phenotyping of 1,400 PubMed Central articles, extracting structured patient data across 20 symptom categories. Identified diagnostic ascertainment bias through quantitative terminology drift analysis across a major clinical-criteria boundary.',
    tags: ['NLP', 'phenotyping', 'ascertainment bias'],
    link: 'https://github.com/Amelia3141/mphil',
    linkLabel: 'github.com/Amelia3141/mphil',
  },
  {
    type: 'tool',
    typeLabel: 'tool',
    year: '2025',
    title: 'ScleroDx — AI diagnostic for systemic sclerosis',
    authors: 'A. Ghanea',
    venue: 'UCL Digital Health AI Hackathon · overall winner',
    abstract: 'AI-powered diagnostic tool for systemic sclerosis addressing health equity in rare-disease diagnosis.',
    tags: ['rare disease', 'diagnostics', 'health equity'],
    link: 'https://github.com/Amelia3141/Hackathon',
    linkLabel: 'github.com/Amelia3141/Hackathon',
  },
  {
    type: 'thread',
    typeLabel: 'thread',
    year: '2025',
    title: 'New Scientist Live — AI medical misinformation',
    authors: 'A. Ghanea',
    venue: 'New Scientist Live 2025 · 26,000+ attendees',
    abstract: 'Designed and deployed an interactive public-engagement game on AI-generated medical misinformation. Over 300 participants tested their ability to distinguish real from AI-generated medical content.',
    tags: ['public engagement', 'misinformation'],
    link: 'https://github.com/Amelia3141/spot-the-fake-game',
    linkLabel: 'github.com/Amelia3141/spot-the-fake-game',
  },
  {
    type: 'tool',
    typeLabel: 'tool',
    year: '2024',
    title: 'BioBERT pharmacovigilance text-mining tool',
    authors: 'A. Ghanea',
    venue: 'BSc Neuroscience dissertation · Bristol',
    abstract: 'BioBERT-based text mining system and open-access web tool for pharmacovigilance research.',
    tags: ['BioBERT', 'pharmacovigilance', 'NLP'],
    link: 'https://github.com/Amelia3141/IvabradineTdP',
    linkLabel: 'github.com/Amelia3141/IvabradineTdP',
  },
];

const FRAMING_TITLES = {
  research: 'research/',
  work: 'work/',
  output: 'output/',
};

function Research({ framing = 'research', grouped = true }) {
  const sections = grouped ? [
    { key: 'working-paper', heading: 'working_papers/' },
    { key: 'tool',          heading: 'tools/' },
    { key: 'thread',        heading: 'threads/' },
    { key: 'talk',          heading: 'talks/' },
  ] : [{ key: '__all', heading: null }];

  const yearKey = (it) => {
    const m = String(it.year).match(/(\d{4})/g);
    return m ? parseInt(m[m.length - 1], 10) : 0;
  };
  const sortDesc = (arr) => [...arr].sort((a, b) => yearKey(b) - yearKey(a));

  return (
    <section id="research" className="page" style={{ paddingTop: 40, paddingBottom: 40, borderTop: '1px solid var(--rule-2)' }}>
      <SectionHeader num="02" title={FRAMING_TITLES[framing] || 'research/'} sub="// papers, tools, threads." />
      <div style={{ marginTop: 18 }}>
        {sections.map((sec) => {
          const items = sortDesc(grouped ? RESEARCH_ITEMS.filter(i => i.type === sec.key) : RESEARCH_ITEMS);
          if (items.length === 0) return null;
          return (
            <div key={sec.key} style={{ marginBottom: grouped ? 24 : 0 }}>
              {grouped && sec.heading && (
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  paddingBottom: 6, borderBottom: '1px solid var(--rule)',
                  fontSize: 14, color: 'var(--ink-3)', marginTop: 14,
                }}>
                  <span>{sec.heading}</span>
                  <span>{String(items.length).padStart(2, '0')}</span>
                </div>
              )}
              {items.map((item, idx) => (
                <ResearchRow key={item.title} item={item} last={idx === items.length - 1} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ResearchRow({ item, last }) {
  const [open, setOpen] = React.useState(false);

  return (
    <article style={{
      display: 'grid',
      gridTemplateColumns: '110px 1fr',
      gap: 20,
      padding: '12px 0',
      borderBottom: last ? 'none' : '1px solid var(--rule-2)',
      cursor: 'pointer',
    }} onClick={() => setOpen((v) => !v)}>
      <div>
        <div style={{ fontSize: 15, color: 'var(--ink-3)' }}>{item.year}</div>
        <div style={{ fontSize: 14, marginTop: 2, color: 'var(--accent)' }}>{item.typeLabel}/</div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <h4 style={{ fontSize: 19, fontWeight: 600, margin: 0, lineHeight: 1.3, color: 'var(--ink)' }}>
            {item.title}
          </h4>
          <span style={{ fontSize: 17, color: 'var(--ink-3)', flexShrink: 0 }}>{open ? '[−]' : '[+]'}</span>
        </div>
        <div style={{ fontSize: 15, color: 'var(--ink-2)', marginTop: 4, display: 'flex', flexWrap: 'wrap', gap: '0 10px' }}>
          <span>{item.authors}</span>
          <span style={{ color: 'var(--ink-3)' }}>·</span>
          <span style={{ color: 'var(--ink-3)' }}>{item.venue}</span>
        </div>
        <div style={{
          maxHeight: open ? 400 : 0,
          opacity: open ? 1 : 0.0,
          overflow: 'hidden',
          transition: 'max-height 240ms ease, opacity 180ms ease, margin-top 180ms ease',
          marginTop: open ? 10 : 0,
        }}>
          <p style={{ fontSize: 16, color: 'var(--ink-2)', margin: '0 0 8px', maxWidth: 720, lineHeight: 1.55 }}>{item.abstract}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            {item.tags.map(t => (
              <span key={t} style={{
                fontSize: 13, padding: '2px 8px', border: '1px solid var(--rule)',
                color: 'var(--ink-2)',
              }}>{t}</span>
            ))}
          </div>
          {item.link && (
            <a href={item.link} onClick={(e) => e.stopPropagation()} style={{
              fontSize: 15, color: 'var(--accent)', textDecoration: 'none',
              borderBottom: '1px solid currentColor', paddingBottom: 1,
            }}>→ {item.linkLabel}</a>
          )}
        </div>
      </div>
    </article>
  );
}
