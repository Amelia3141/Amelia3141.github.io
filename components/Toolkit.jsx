function Toolkit() {
  const groups = [
    { heading: 'lang', items: ['Python', 'R', 'JavaScript', 'HTML / CSS'] },
    { heading: 'ml', items: ['PyTorch', 'JAX', 'scikit-learn', 'XGBoost', 'BioBERT', 'lifelines', 'shap'] },
    { heading: 'fairness', items: ['Sparse autoencoders', 'mech interp', 'bias detection', 'fairness metrics', 'model auditing'] },
    { heading: 'stats', items: ['Bootstrap validation', 'cross-validation', 'Cox regression', 'MCMC sampling'] },
    { heading: 'data', items: ['pandas', 'numpy'] },
    { heading: 'human', items: ['English', 'French', 'Farsi', 'Italian', 'Turkish'] },
  ];

  return (
    <section id="toolkit" className="page" style={{ paddingTop: 40, paddingBottom: 40, borderTop: '1px solid var(--rule-2)' }}>
      <SectionHeader num="04" title="toolkit/" />
      <div style={{
        marginTop: 18,
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        borderTop: '1px solid var(--rule-2)',
      }}>
        {groups.map((g) => (
          <div key={g.heading} style={{
            padding: '12px 16px 12px 0',
            borderRight: '1px solid var(--rule-2)',
            borderBottom: '1px solid var(--rule-2)',
          }}>
            <div style={{ fontSize: 17, color: 'var(--accent)', marginBottom: 8, fontWeight: 600 }}>
              {g.heading}/
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {g.items.map((it) => (
                <li key={it} style={{ fontSize: 15, color: 'var(--ink)' }}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
