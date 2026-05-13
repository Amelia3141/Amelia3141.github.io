function Experience() {
  const roles = [
    {
      from: 'jul.2025', to: 'present',
      company: 'Independent', position: 'Freelance technical consultant',
      link: null,
      bullets: [
        'NetIntel (Z/Yen & SI Units): technical lead on AI foresight platform combining expert workshop data with scientometric and embedding analysis.',
        'Built real-time collaborative visualisation tool (Next.js, TypeScript, Firebase) with interactive React/SVG signal visualisations and export.',
        'University of Oxford: decision-support platform with prompt-engineered LLM, BERT classification, and RAG retrieval. React frontend, deployed on Vercel.',
      ],
    },
    {
      from: 'apr.2025', to: 'aug.2025',
      company: 'Advai', position: 'ML research scientist',
      link: 'https://www.advai.co.uk/',
      bullets: [
        'Led research on bias detection and fairness evaluation in medical LLMs using mechanistic interpretability.',
        'Built sparse-autoencoder pipelines and feature-analysis tools to surface demographic bias in clinical model representations.',
        'Designed evaluation frameworks for algorithmic fairness across protected characteristics in healthcare AI.',
        'First-author paper in preparation.',
      ],
    },
    {
      from: 'jun.2024', to: 'aug.2024',
      company: 'Elsevier · Global Health Markets', position: 'Technology optimisation intern (Windsor Fellowship)',
      link: 'https://www.elsevier.com/',
      bullets: [
        'Developed RAG system integrating 1,000,000+ medical papers.',
        'Produced SDLC documentation integrating Agile best practices.',
      ],
    },
    {
      from: 'may.2023', to: 'may.2024',
      company: 'Neuro-Bio Ltd', position: 'Computational neuroscientist',
      link: 'https://www.neuro-bio.com/',
      bullets: [
        'Specificity database for 90+ antibodies, saving £500k on low-quality assays.',
        'Multivariate compound selection in collaboration with Unilever research.',
      ],
    },
  ];

  return (
    <section id="experience" className="page" style={{ paddingTop: 40, paddingBottom: 40, borderTop: '1px solid var(--rule-2)' }}>
      <SectionHeader num="03" title="experience/" />
      <ol style={{ listStyle: 'none', margin: '18px 0 0', padding: 0 }}>
        {roles.map((r, i) => (
          <li key={r.company + i} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr', gap: 24,
            padding: '14px 0',
            borderTop: i === 0 ? '1px solid var(--rule-2)' : 'none',
            borderBottom: '1px solid var(--rule-2)',
          }}>
            <div>
              <div style={{ fontSize: 15, color: 'var(--ink-2)' }}>
                {r.from} → {r.to}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>
                {r.position}
              </div>
              <div style={{ fontSize: 15, color: 'var(--ink-2)', marginTop: 2 }}>
                @ {r.link ? <a href={r.link} style={{ color: 'var(--accent)', textDecoration: 'none' }}>{r.company}</a> : r.company}
              </div>
              <ul style={{ margin: '8px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {r.bullets.map((b, bi) => (
                  <li key={bi} style={{ fontSize: 16, color: 'var(--ink-2)', display: 'flex', gap: 10, lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--ink-3)', flexShrink: 0 }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
