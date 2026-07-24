import { useState } from 'react'
import { AuthLayout } from '../components/AuthLayout'

interface LoginPageProps {
  onNavigate: (page: string) => void
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    // Preview: navigate to profile on any non-empty submission
    onNavigate('profile')
  }

  return (
    <AuthLayout watermarkWord="Login" watermarkCount={5} onNavigate={onNavigate}>
      <p className="auth-subtitle">
        Login to your account to access your order history<br />and other personalized features.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="kk-input-wrap">
          <label htmlFor="login-email" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            E-mail
          </label>
          <input
            id="login-email"
            className="kk-input"
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="kk-input-wrap">
          <label htmlFor="login-password" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            Password
          </label>
          <input
            id="login-password"
            className="kk-input kk-input-with-link"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="kk-input-inline-link"
            onClick={() => {}}
          >
            Forgot Password?
          </button>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="kk-btn-primary">
          Login
        </button>
      </form>

      <button type="button" className="kk-btn-secondary" onClick={() => onNavigate('register')}>
        Create Account
      </button>
    </AuthLayout>
  )
}
