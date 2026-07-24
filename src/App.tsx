import { useState } from 'react'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ProfilePage } from './pages/ProfilePage'

type Page = 'login' | 'register' | 'profile'

export default function App() {
  const [page, setPage] = useState<Page>('login')

  function navigate(target: string) {
    if (target === 'login' || target === 'register' || target === 'profile') {
      setPage(target)
    }
  }

  if (page === 'register') return <RegisterPage onNavigate={navigate} />
  if (page === 'profile') return <ProfilePage onNavigate={navigate} />
  return <LoginPage onNavigate={navigate} />
}
