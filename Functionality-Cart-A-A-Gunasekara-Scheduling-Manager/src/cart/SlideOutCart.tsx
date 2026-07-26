import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'
import { ProductImagePlaceholder, QuantitySelector, RemoveButton, fmtPrice } from './components'

export default function SlideOutCart() {
  const { cartItems, cartCount, subtotal, isCartOpen, closeCart } = useCart()
  const navigate = useNavigate()

  // Prevent background scroll
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isCartOpen])

  // Close on Escape
  useEffect(() => {
    if (!isCartOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeCart() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isCartOpen, closeCart])

  if (!isCartOpen) return null

  function goCart() { closeCart(); navigate('/cart') }
  function goCheckout() { closeCart(); navigate('/checkout') }

  return (
    <>
      {/* Overlay */}
      <div className="kk-overlay" onClick={closeCart} aria-hidden="true" />

      {/* Drawer */}
      <div className="kk-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="kk-drawer__header">
          <h2 className="kk-drawer__title">Cart ({cartCount})</h2>
          <button className="kk-drawer__close" onClick={closeCart} aria-label="Close cart">✕</button>
        </div>

        <div className="kk-drawer__body">
          {cartItems.map(item => (
            <div key={item.id} className="kk-drawer__item">
              <ProductImagePlaceholder width={74} height={90} className="kk-drawer__item-img" />
              <div className="kk-drawer__item-info">
                <p className="kk-drawer__item-name">{item.name}</p>
                <p className="kk-drawer__item-meta">{item.color}, {item.size}</p>
                <div className="kk-drawer__item-controls">
                  <QuantitySelector itemId={item.id} quantity={item.quantity} />
                  <RemoveButton itemId={item.id} itemName={item.name} />
                </div>
              </div>
              <div className="kk-drawer__item-price">{fmtPrice(item.price * item.quantity)}</div>
            </div>
          ))}

          <button className="kk-drawer__note-link">Add order note</button>
        </div>

        <div className="kk-drawer__footer">
          <div className="kk-drawer__total-row">
            <span className="kk-drawer__total-label">Total</span>
            <span className="kk-drawer__total-amount">{fmtPrice(subtotal)}</span>
          </div>
          <div className="kk-drawer__actions">
            <button className="btn-outline" onClick={goCart}>View cart</button>
            <button className="btn-solid" onClick={goCheckout}>Check out</button>
          </div>
          <p className="kk-drawer__tax-note">
            Taxes and <a href="/shipping">shipping</a> calculated at checkout
          </p>
        </div>
      </div>
    </>
  )
}
