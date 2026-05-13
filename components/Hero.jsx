function Hero() {
  return (
    <header id="top" className="page" style={{ paddingTop: 56, paddingBottom: 48 }}>
      <pre style={{
        fontSize: 14, color: 'var(--ink-2)', margin: '0 0 22px', lineHeight: 1.4,
        fontFamily: 'inherit',
      }}>{`# amelia ghanea
# mphil/phd, ucl health informatics
# london`}</pre>

      <h1 style={{
        fontSize: 'clamp(20px, 2.2vw, 26px)',
        lineHeight: 1.4, letterSpacing: '-0.005em', fontWeight: 500,
        margin: '0 0 22px', color: 'var(--ink)',
        maxWidth: 820,
      }}>
        Applied ML researcher and MPhil/PhD candidate at UCL, focused on mechanistic interpretability, algorithmic fairness, and computational methods for clinical AI. Experience spans bias detection in medical LLMs, GPU-accelerated Bayesian inference for disease subtyping, and building technology intelligence platforms integrating computational analysis with expert foresight.
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: 15, color: 'var(--ink-2)' }}>
        <span><span style={{ color: 'var(--ink-3)' }}>email </span><a href="mailto:amelia.ghaneahercock.24@ucl.ac.uk" style={{ color: 'var(--accent)', textDecoration: 'none' }}>amelia.ghaneahercock.24@ucl.ac.uk</a></span>
        <span style={{ color: 'var(--rule)' }}>·</span>
        <span><span style={{ color: 'var(--ink-3)' }}>github </span><a href="https://github.com/Amelia3141" style={{ color: 'var(--accent)', textDecoration: 'none' }}>@Amelia3141</a></span>
        <span style={{ color: 'var(--rule)' }}>·</span>
        <span><span style={{ color: 'var(--ink-3)' }}>linkedin </span><a href="https://www.linkedin.com/in/amelia-gh" style={{ color: 'var(--accent)', textDecoration: 'none' }}>amelia-gh</a></span>
      </div>
    </header>
  );
}
