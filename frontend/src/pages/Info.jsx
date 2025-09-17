function Info() {
  return (
    <main className="page page--info">
      <header className="page__header">
        <h1>About & Information</h1>
        <p>Learn about data sources, methodology, and usage guidance.</p>
      </header>

      <section className="panel">
        <h3>Methodology</h3>
        <p>This system combines rainfall intensity, river gauge levels, terrain slope, and historical patterns to estimate flood risk. Models are updated periodically.</p>
      </section>

      <section className="panel">
        <h3>Data Sources</h3>
        <ul>
          <li>IMD Rainfall Estimates</li>
          <li>Central Water Commission Gauges</li>
          <li>OpenStreetMap Elevation & Terrain</li>
        </ul>
      </section>
    </main>
  )
}

export default Info


