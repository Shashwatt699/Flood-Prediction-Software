import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a className="navbar__brand" href="#">Kerala Flood Prediction System</a>

        <button className="navbar__toggle" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar__bar" />
          <span className="navbar__bar" />
          <span className="navbar__bar" />
        </button>

        <nav className={`navbar__menu ${isOpen ? 'is-open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>Home</NavLink>
          <NavLink to="/predictions" className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>Predictions</NavLink>
          <NavLink to="/alerts" className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>Alerts</NavLink>
          <NavLink to="/info" className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>Info</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


