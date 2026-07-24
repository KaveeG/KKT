import { useState } from 'react'
import { AuthLayout } from '../components/AuthLayout'

interface RegisterPageProps {
  onNavigate: (page: string) => void
}

export function RegisterPage({ onNavigate }: RegisterPageProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    // Preview: navigate to profile after registration
    onNavigate('profile')
  }

  return (
    <AuthLayout watermarkWord="Sign Up" watermarkCount={5} onNavigate={onNavigate}>
      <p className="auth-subtitle">
        Create a new account to join our community and get<br />access to exclusive offers, rewards and content.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="kk-row">
          <div className="kk-input-wrap">
            <label htmlFor="reg-first" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              First Name
            </label>
            <input
              id="reg-first"
              className="kk-input"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              autoComplete="given-name"
            />
          </div>
          <div className="kk-input-wrap">
            <label htmlFor="reg-last" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              Last Name
            </label>
            <input
              id="reg-last"
              className="kk-input"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="kk-input-wrap">
          <label htmlFor="reg-email" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            E-mail
          </label>
          <input
            id="reg-email"
            className="kk-input"
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="kk-input-wrap">
          <label htmlFor="reg-password" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            Password
          </label>
          <input
            id="reg-password"
            className="kk-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="kk-btn-primary">
          Create Account
        </button>
      </form>

      <button type="button" className="kk-btn-secondary" onClick={() => onNavigate('login')}>
        Login
      </button>
    </AuthLayout>
  )
}
