import { useState } from 'react'

// Placeholder interactive map. Swap with a real Kerala SVG geo map later.
function Map({ selectedDistrict, onSelect }) {
  const districts = ['Thiruvananthapuram','Kollam','Pathanamthitta','Alappuzha','Kottayam','Idukki','Ernakulam','Thrissur','Palakkad','Malappuram','Kozhikode','Wayanad','Kannur','Kasaragod']
  const [hover, setHover] = useState('')

  return (
    <div className="map" role="img" aria-label="Kerala districts map">
      <div className="map__grid">
        {districts.map(d => (
          <button
            key={d}
            className={`map__cell ${selectedDistrict === d ? 'is-selected' : ''}`}
            onMouseEnter={() => setHover(d)}
            onMouseLeave={() => setHover('')}
            onClick={() => onSelect?.(d)}
            aria-pressed={selectedDistrict === d}
            title={d}
          >
            <span className="map__label">{d}</span>
          </button>
        ))}
      </div>
      {hover && <div className="map__tooltip">{hover}</div>}
    </div>
  )
}

export default Map


