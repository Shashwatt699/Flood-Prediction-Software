function Card({ title, subtitle, children, tone = 'default' }) {
  return (
    <div className={`card card--${tone}`}>
      {(title || subtitle) && (
        <div className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {subtitle && <p className="card__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card__content">
        {children}
      </div>
    </div>
  )
}

export default Card


