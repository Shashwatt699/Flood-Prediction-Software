import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      // Simulate success
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    }, 600)
  }

  return (
    <main className="page page--contact">
      <header className="page__header">
        <h1>Contact</h1>
        <p>Questions or partnership requests? Send us a note.</p>
      </header>

      {status === 'error' && <div role="alert" className="alert alert--error">Something went wrong.</div>}
      {status === 'success' && <div role="status" className="alert alert--success">Thanks, we will get back soon.</div>}

      <section className="panel">
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__field">
            <span>Name</span>
            <input value={name} onChange={e => setName(e.target.value)} required />
          </label>
          <label className="form__field">
            <span>Email</span>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
          <label className="form__field">
            <span>Message</span>
            <textarea rows="4" value={message} onChange={e => setMessage(e.target.value)} required />
          </label>
          <button className="btn btn--primary" type="submit" disabled={status==='loading'}>
            {status==='loading' ? 'Sending…' : 'Send'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Contact


