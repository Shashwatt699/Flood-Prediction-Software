import './home.css'

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">Kerala Flood Prediction</h1>
            <p className="hero__subtitle">Early warnings. Informed decisions. Safer communities.</p>
            <p className="hero__text">
              Use real-time rainfall, river gauge and terrain signals to estimate flood risk across
              Kerala districts. Visualize risk levels and get actionable guidance for preparedness.
            </p>
            <div className="hero__actions">
              <a href="#predict" className="btn btn--primary">Get Flood Risk</a>
              <a href="#learn" className="btn btn--ghost">How it works</a>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="features">
        <div className="features__container">
          <div className="feature">
            <h3>District-level Insights</h3>
            <p>Assess risk for each district factoring rainfall intensity, river discharge and slope.</p>
          </div>
          <div className="feature">
            <h3>Near Real-time Signals</h3>
            <p>Ingest MET data and water-level readings when available for timely estimation.</p>
          </div>
          <div className="feature">
            <h3>Actionable Guidance</h3>
            <p>Simple, color-coded risk with preparedness tips for citizens and authorities.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home


