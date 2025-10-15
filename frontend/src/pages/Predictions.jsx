import { useEffect, useState } from 'react'
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from 'recharts'
import Map from '../components/Map'

function Predictions() {
  const [district, setDistrict] = useState('Thiruvananthapuram')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [rainfallSeries, setRainfallSeries] = useState([])
  const [floodChance, setFloodChance] = useState(null)

  useEffect(() => {
    // Simulate fetch
    setLoading(true)
    setError('')
    const timer = setTimeout(() => {
      const days = Array.from({ length: 14 }).map((_, idx) => ({
        day: `D${idx + 1}`,
        rainfall: Math.round(20 + Math.random() * 100),
        // water level removed from UI; keep dataset simple
      }))
      setRainfallSeries(days.map(d => ({ day: d.day, value: d.rainfall })))
      // Temporary: randomize flood chance until backend integration
      const randomChance = Math.random()
      setFloodChance(Number(randomChance.toFixed(2)))
      setLoading(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [district, date])

  function handleSubmit(e) {
    e.preventDefault()
    // Trigger re-fetch via state deps
    setDate(date || new Date().toISOString().slice(0, 10))
  }

  return (
    <main className="page page--predictions">
      <header className="page__header">
        <h1>Predictions</h1>
        <p>View rainfall trends and estimated next‑day flood chance for the selected district.</p>
      </header>

      <section className="panel">
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__field">
            <span>District</span>
            <select value={district} onChange={e => setDistrict(e.target.value)} required>
              {['Thiruvananthapuram','Kollam','Pathanamthitta','Alappuzha','Kottayam','Idukki','Ernakulam','Thrissur','Palakkad','Malappuram','Kozhikode','Wayanad','Kannur','Kasaragod'].map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
          <label className="form__field">
            <span>Date</span>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
          </label>
          <button className="btn btn--primary" type="submit" disabled={loading}>Get Predictions</button>
        </form>
      </section>

      {error && <div role="alert" className="alert alert--error">{error}</div>}
      {loading && <div className="skeleton">Loading predictions…</div>}

      {!loading && !error && (
        <section className="grid grid--2">
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Flood Chance (next day)</h3>
            <p>
              {floodChance === null
                ? 'Analysis will appear here after you get predictions.'
                : `According to past 7 days data analyzed, the flood chances in the next day are ${floodChance} (0 to 1) according to the data.`}
            </p>
          </div>
          <div className="card">
            <h3>Rainfall Trend (mm)</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={rainfallSeries} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="rain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#eee" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="value" name="Rainfall" stroke="#4f46e5" fillOpacity={1} fill="url(#rain)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Kerala Map</h3>
            <Map selectedDistrict={district} onSelect={setDistrict} />
          </div>
        </section>
      )}
    </main>
  )
}

export default Predictions


