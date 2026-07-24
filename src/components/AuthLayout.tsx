interface AuthLayoutProps {
  watermarkWord: string
  watermarkCount?: number
  children: React.ReactNode
  onNavigate: (page: string) => void
}

export function AuthLayout({ watermarkWord, watermarkCount = 5, children, onNavigate }: AuthLayoutProps) {
  return (
    <div className="auth-page">
      <header className="auth-header">
        <button
          className="auth-brand"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-brand)' }}
          onClick={() => onNavigate('login')}
        >
          KK Tailors
        </button>
      </header>

      <main className="auth-body">
        <div className="auth-watermark" aria-hidden="true">
          {Array.from({ length: watermarkCount }).map((_, i) => (
            <span key={i} className="auth-watermark-word">
              {watermarkWord}
            </span>
          ))}
        </div>

        <div className="auth-form-col">
          {children}
        </div>
      </main>
    </div>
  )
}
