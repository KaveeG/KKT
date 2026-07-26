import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './cart/CartContext'
import Header from './cart/Header'
import SlideOutCart from './cart/SlideOutCart'
import CartPage from './cart/CartPage'
import CheckoutPage from './cart/CheckoutPage'
import './cart/cart.css'

function HomePage() {
  return (
    <div style={{ padding: '80px 40px', textAlign: 'center', fontFamily: 'Helvetica Neue, sans-serif' }}>
      <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '0.04em', marginBottom: 16 }}>KK TAILORS</h1>
      <p style={{ fontSize: 16, color: '#737373', marginBottom: 40 }}>Premium fashion, crafted for you.</p>
      <a href="/cart" style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: 48, padding: '0 32px', background: '#111', color: '#fff',
        fontSize: 14, fontWeight: 600, borderRadius: 4, textDecoration: 'none',
      }}>View Cart</a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <SlideOutCart />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
