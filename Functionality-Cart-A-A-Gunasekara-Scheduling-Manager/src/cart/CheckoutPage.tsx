import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'
import { ProductImagePlaceholder, CardLogos, fmtPrice, fmtPriceLKR } from './components'

const SHIPPING_COST = 299
const SHIPPING_FREE_THRESHOLD = 0 // always free in this promo

interface FormState {
  firstName: string; lastName: string; address: string; apt: string
  city: string; postal: string; phone: string; email: string
  newsletter: boolean; country: string; shipping: string
  payment: string; billing: string; discount: string
}

interface Errors {
  firstName?: string; lastName?: string; address?: string
  city?: string; phone?: string; email?: string
}

export default function CheckoutPage() {
  const { cartItems, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [discountApplied] = useState(true) // free shipping promo active

  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', address: '', apt: '',
    city: '', postal: '', phone: '', email: 'kav2002s@gmail.com',
    newsletter: false, country: 'LK',
    shipping: 'express', payment: 'payhere', billing: 'same', discount: '',
  })
  const [errors, setErrors] = useState<Errors>({})

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
      setForm(prev => ({ ...prev, [field]: val }))
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  function validate(): boolean {
    const errs: Errors = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!form.address.trim()) errs.address = 'Address is required'
    if (!form.city.trim()) errs.city = 'City is required'
    if (!form.phone.trim()) errs.phone = 'Phone is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    clearCart()
  }

  const total = subtotal // shipping is free

  if (success) {
    return (
      <div className="kk-order-success">
        <div className="kk-order-success__icon">✓</div>
        <h2 className="kk-order-success__title">Order placed successfully!</h2>
        <p className="kk-order-success__sub">Thank you for shopping with KK Tailors. Your order has been received.</p>
        <button className="btn-solid" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }

  return (
    <div className="kk-checkout-page">
      <div className="kk-checkout-layout">
        {/* ── Left: form ─── */}
        <form className="kk-checkout-left" onSubmit={handleSubmit} noValidate>

          {/* Contact row */}
          <div className="kk-checkout-contact">
            <div className="kk-checkout-contact__avatar">K</div>
            <span className="kk-checkout-contact__email">{form.email}</span>
            <button type="button" className="kk-checkout-contact__dots" aria-label="Account options">⋮</button>
          </div>

          <label className="kk-checkout-newsletter">
            <input type="checkbox" checked={form.newsletter} onChange={set('newsletter')} />
            Email me with news and offers
          </label>

          {/* Delivery */}
          <h2 className="kk-section-title">Delivery</h2>

          <div className="kk-form-group">
            <div className="kk-select-wrapper">
              <span className="kk-select-label">Country/Region</span>
              <select className="kk-select" value={form.country} onChange={set('country')}>
                <option value="LK">Sri Lanka</option>
                <option value="IN">India</option>
                <option value="GB">United Kingdom</option>
              </select>
              <span className="kk-select-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </div>
          </div>

          <div className="kk-form-row">
            <div>
              <input
                type="text" className={`kk-input${errors.firstName ? ' error' : ''}`}
                placeholder="First name (optional)"
                value={form.firstName} onChange={set('firstName')}
                aria-label="First name"
              />
              {errors.firstName && <p className="kk-form-error">{errors.firstName}</p>}
            </div>
            <div>
              <input
                type="text" className={`kk-input${errors.lastName ? ' error' : ''}`}
                placeholder="Last name"
                value={form.lastName} onChange={set('lastName')}
                aria-label="Last name"
              />
              {errors.lastName && <p className="kk-form-error">{errors.lastName}</p>}
            </div>
          </div>

          <div className="kk-form-group">
            <input
              type="text" className={`kk-input${errors.address ? ' error' : ''}`}
              placeholder="Address"
              value={form.address} onChange={set('address')}
              aria-label="Address"
            />
            {errors.address && <p className="kk-form-error">{errors.address}</p>}
          </div>

          <div className="kk-form-group">
            <input
              type="text" className="kk-input"
              placeholder="Apartment, suite, etc. (optional)"
              value={form.apt} onChange={set('apt')}
              aria-label="Apartment, suite, etc."
            />
          </div>

          <div className="kk-form-row">
            <div>
              <input
                type="text" className={`kk-input${errors.city ? ' error' : ''}`}
                placeholder="City"
                value={form.city} onChange={set('city')}
                aria-label="City"
              />
              {errors.city && <p className="kk-form-error">{errors.city}</p>}
            </div>
            <div>
              <input
                type="text" className="kk-input"
                placeholder="Postal code (optional)"
                value={form.postal} onChange={set('postal')}
                aria-label="Postal code"
              />
            </div>
          </div>

          <div className="kk-form-group" style={{ position: 'relative' }}>
            <input
              type="tel" className={`kk-input kk-input--phone${errors.phone ? ' error' : ''}`}
              placeholder="Phone"
              value={form.phone} onChange={set('phone')}
              aria-label="Phone"
            />
            <span className="kk-input-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
              </svg>
            </span>
            {errors.phone && <p className="kk-form-error">{errors.phone}</p>}
          </div>

          {/* Shipping method */}
          <div className="kk-section-gap">
            <h2 className="kk-section-title">Shipping method</h2>
            <div
              className={`kk-shipping-option${form.shipping === 'express' ? ' selected' : ''}`}
              onClick={() => setForm(p => ({ ...p, shipping: 'express' }))}
            >
              <div className="kk-shipping-option-inner">
                <span className="kk-shipping-option-name">3-5 Days Express Shipping</span>
                <div className="kk-shipping-option-price">
                  <span className="kk-shipping-strikethrough">Rs 299.00</span>
                  <span className="kk-shipping-free">FREE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="kk-section-gap">
            <h2 className="kk-section-title">Payment</h2>
            <p className="kk-payment-secure">All transactions are secure and encrypted.</p>

            {[
              { id: 'payhere', label: 'Bank Card / Bank Account - PayHere', logos: ['visa', 'mc', 'amex', 'more'], redirect: "You'll be redirected to Bank Card / Bank Account - PayHere to complete your purchase." },
              { id: 'payzy', label: 'Payzy split in up to 4', logos: ['visa', 'mc'] },
              { id: 'koko', label: 'Koko: Buy Now Pay Later', logos: ['visa', 'mc'] },
              { id: 'mintpay', label: 'Mintpay | Shop now. Pay later.', logos: ['visa', 'mc'] },
              { id: 'cod', label: 'Cash on Delivery (COD)', logos: [] },
            ].map(opt => (
              <div
                key={opt.id}
                className={`kk-payment-option${form.payment === opt.id ? ' selected' : ''}`}
                onClick={() => setForm(p => ({ ...p, payment: opt.id }))}
              >
                <div className="kk-payment-option-row">
                  <input
                    type="radio"
                    name="payment"
                    id={`pay-${opt.id}`}
                    value={opt.id}
                    checked={form.payment === opt.id}
                    onChange={() => setForm(p => ({ ...p, payment: opt.id }))}
                    aria-label={opt.label}
                  />
                  <label htmlFor={`pay-${opt.id}`} className="kk-payment-option-label" style={{ cursor: 'pointer' }}>
                    {opt.label}
                  </label>
                  {opt.logos.length > 0 && <CardLogos logos={opt.logos} />}
                </div>
                {form.payment === opt.id && opt.redirect && (
                  <p className="kk-payment-redirect">{opt.redirect}</p>
                )}
              </div>
            ))}
          </div>

          {/* Billing address */}
          <div className="kk-section-gap">
            <h2 className="kk-section-title">Billing address</h2>

            {[
              { id: 'same', label: 'Same as shipping address' },
              { id: 'different', label: 'Use a different billing address' },
            ].map(opt => (
              <div
                key={opt.id}
                className={`kk-billing-option${form.billing === opt.id ? ' selected' : ''}`}
                onClick={() => setForm(p => ({ ...p, billing: opt.id }))}
              >
                <div className="kk-billing-option-row">
                  <input
                    type="radio"
                    name="billing"
                    id={`bill-${opt.id}`}
                    value={opt.id}
                    checked={form.billing === opt.id}
                    onChange={() => setForm(p => ({ ...p, billing: opt.id }))}
                    aria-label={opt.label}
                  />
                  <label htmlFor={`bill-${opt.id}`} className="kk-billing-option-label" style={{ cursor: 'pointer' }}>
                    {opt.label}
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="kk-section-gap">
            <button type="submit" className="btn-blue">Pay now</button>
          </div>
        </form>

        {/* ── Right: order summary ─── */}
        <div className="kk-checkout-right">
          <div className="kk-order-items">
            {cartItems.map(item => (
              <div key={item.id} className="kk-order-item">
                <div className="kk-order-item__img-wrap">
                  <ProductImagePlaceholder width={56} height={68} className="kk-order-item__img" />
                  <span className="kk-order-item__badge">{item.quantity}</span>
                </div>
                <div className="kk-order-item__info">
                  <p className="kk-order-item__name">{item.name}</p>
                  <p className="kk-order-item__meta">{item.color} / {item.size}</p>
                </div>
                <span className="kk-order-item__price">{fmtPrice(item.price * item.quantity)}.00</span>
              </div>
            ))}
          </div>

          {/* Discount code */}
          <div className="kk-discount-row">
            <input
              type="text"
              className="kk-discount-input"
              placeholder="Discount code or gift card"
              value={form.discount}
              onChange={set('discount')}
              aria-label="Discount code"
            />
            <button type="button" className="kk-discount-apply">Apply</button>
          </div>

          {/* Summary lines */}
          <div className="kk-summary-line">
            <span className="kk-summary-line__label">Subtotal · {cartItems.reduce((s, i) => s + i.quantity, 0)} items</span>
            <span>{fmtPrice(subtotal)}.00</span>
          </div>
          <div>
            <div className="kk-summary-line">
              <span className="kk-summary-line__label">Shipping</span>
              <span>
                <span className="kk-summary-line__strike">Rs {SHIPPING_COST.toLocaleString()}.00</span>
                <span className="kk-summary-line__free">FREE</span>
              </span>
            </div>
            <p className="kk-summary-line__ship-note">🛡 LIMITED TIME FREE SHIPPI...</p>
          </div>

          <div className="kk-summary-total">
            <span className="kk-summary-total__label">Total</span>
            <span className="kk-summary-total__amount">{fmtPriceLKR(total)}</span>
          </div>
          <div className="kk-summary-savings">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            TOTAL SAVINGS Rs {SHIPPING_COST.toLocaleString()}.00
          </div>
        </div>
      </div>
    </div>
  )
}
