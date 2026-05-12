// Personal site root. Static composition; no editor scaffolding.
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Now />
      <Research />
      <Experience />
      <Toolkit />
      <Recognition />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
