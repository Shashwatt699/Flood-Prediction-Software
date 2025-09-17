import { useMemo } from 'react'

function Alerts() {
  const districts = useMemo(() => ([
    { name: 'Idukki', level: 'Red' },
    { name: 'Ernakulam', level: 'Orange' },
    { name: 'Alappuzha', level: 'Yellow' },
  ]), [])

  const redDistricts = districts.filter(d => d.level === 'Red').map(d => d.name)

  return (
    <main className="page page--alerts">
      {redDistricts.length > 0 && (
        <div className="banner banner--danger" role="alert">
          <strong>Red Alert:</strong> {redDistricts.join(', ')}
        </div>
      )}

      <header className="page__header">
        <h1>District Alerts</h1>
        <p>Live alerts by district and severity.</p>
      </header>

      <section className="grid grid--3">
        {districts.map(d => (
          <div key={d.name} className={`card card--${d.level.toLowerCase()}`}>
            <h3>{d.name}</h3>
            <p>Alert Level: <strong>{d.level}</strong></p>
            <p>Recommendations: Follow local advisories and stay updated.</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Alerts


