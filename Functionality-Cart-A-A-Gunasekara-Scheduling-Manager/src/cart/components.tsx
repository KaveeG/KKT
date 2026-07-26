import type { ReactNode } from 'react'
import { useCart } from './CartContext'

// ── Product image placeholder ────────────────────────────────────
export function ProductImagePlaceholder({ width, height, className = '' }: { width: number; height: number; className?: string }) {
  return (
    <div
      className={`kk-img-placeholder ${className}`}
      style={{ width, height }}
      aria-label="Product image placeholder"
    >
      <svg width={width * 0.4} height={height * 0.4} viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    </div>
  )
}

// ── Quantity selector ────────────────────────────────────────────
export function QuantitySelector({ itemId, quantity }: { itemId: number; quantity: number }) {
  const { updateQuantity } = useCart()
  return (
    <div className="kk-qty">
      <button
        className="kk-qty__btn"
        aria-label="Decrease quantity"
        onClick={() => updateQuantity(itemId, quantity - 1)}
        disabled={quantity <= 1}
      >
        −
      </button>
      <span className="kk-qty__val">{quantity}</span>
      <button
        className="kk-qty__btn"
        aria-label="Increase quantity"
        onClick={() => updateQuantity(itemId, quantity + 1)}
      >
        +
      </button>
    </div>
  )
}

// ── Remove button ────────────────────────────────────────────────
export function RemoveButton({ itemId, itemName }: { itemId: number; itemName: string }) {
  const { removeFromCart } = useCart()
  return (
    <button
      className="kk-remove-btn"
      aria-label={`Remove ${itemName} from cart`}
      onClick={() => removeFromCart(itemId)}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
        <path d="M10 11v6M14 11v6" />
      </svg>
    </button>
  )
}

// ── Format price ─────────────────────────────────────────────────
export function fmtPrice(amount: number, prefix = 'Rs'): string {
  return `${prefix} ${amount.toLocaleString('en-LK', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}
export function fmtPriceLKR(amount: number): string {
  return `LKR Rs ${amount.toLocaleString('en-LK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

// ── Empty cart state ─────────────────────────────────────────────
export function EmptyCartState({ onContinue }: { onContinue?: () => void }) {
  return (
    <div className="kk-empty-cart">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" style={{ margin: '0 auto 16px', display: 'block' }}>
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      <p>Your cart is empty.</p>
      {onContinue && (
        <button className="btn-outline" onClick={onContinue}>Continue Shopping</button>
      )}
    </div>
  )
}

// ── Card badge logos ─────────────────────────────────────────────
export function CardLogos({ logos }: { logos: string[] }) {
  return (
    <div className="kk-payment-logos">
      {logos.map(l => (
        <span key={l} className={`kk-card-logo ${l}`}>{
          l === 'visa' ? 'VISA' : l === 'mc' ? '●●' : l === 'amex' ? 'AMEX' : l
        }</span>
      ))}
    </div>
  )
}
