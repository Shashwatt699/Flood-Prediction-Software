function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__credits">
          <span>Built with support from Govt. of Kerala & NGOs</span>
        </div>
        <div className="footer__social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
        </div>
        <div className="footer__copy">© {year} Kerala Flood Prediction</div>
      </div>
    </footer>
  )
}

export default Footer


