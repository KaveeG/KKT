import { Link } from 'react-router-dom'
import { useCart } from './CartContext'

export default function Header() {
  const { cartCount, openCart } = useCart()

  return (
    <header className="kk-header">
      <div className="kk-header__inner">
        <Link to="/" className="kk-header__logo">KK TAILORS</Link>

        <nav className="kk-header__nav" aria-label="Main navigation">
          <Link to="/products">Shop</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="kk-header__actions">
          <button className="kk-header__cart-btn" onClick={openCart} aria-label={`Shopping cart, ${cartCount} items`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="kk-header__cart-count">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
