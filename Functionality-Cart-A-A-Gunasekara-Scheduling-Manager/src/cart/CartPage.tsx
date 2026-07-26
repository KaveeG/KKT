import { useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'
import { ProductImagePlaceholder, QuantitySelector, RemoveButton, EmptyCartState, fmtPrice } from './components'

export default function CartPage() {
  const { cartItems, cartCount, subtotal } = useCart()
  const navigate = useNavigate()

  return (
    <div className="kk-cart-page">
      <h1 className="kk-cart-page__heading">Your Cart ({cartCount})</h1>

      <div className="kk-cart-page__content">
        {/* Product table */}
        <div className="kk-cart-table">
          {cartItems.length === 0 ? (
            <EmptyCartState onContinue={() => navigate('/products')} />
          ) : (
            <>
              <div className="kk-cart-table__header">
                <span>Product</span>
                <span className="col-qty">Quantity</span>
                <span className="col-total" style={{ textAlign: 'right', paddingRight: 8 }}>Total</span>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className="kk-cart-table__row">
                  {/* Product */}
                  <div className="kk-cart-table__product">
                    <ProductImagePlaceholder width={80} height={100} className="kk-cart-table__product-img" />
                    <div>
                      <p className="kk-cart-table__product-name">{item.name}</p>
                      <p className="kk-cart-table__product-meta">{item.color}, {item.size}</p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="kk-cart-table__qty">
                    <QuantitySelector itemId={item.id} quantity={item.quantity} />
                    <RemoveButton itemId={item.id} itemName={item.name} />
                  </div>

                  {/* Total */}
                  <div className="kk-cart-table__total">
                    {fmtPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Summary panel */}
        {cartItems.length > 0 && (
          <div className="kk-summary-panel">
            <div className="kk-summary-panel__total-row">
              <span className="kk-summary-panel__total-label">Total</span>
              <span className="kk-summary-panel__total-amount">{fmtPrice(subtotal)}</span>
            </div>

            <button className="btn-red" onClick={() => navigate('/checkout')}>Check out</button>

            <button className="kk-summary-panel__continue" onClick={() => navigate('/products')}>
              Continue shopping
            </button>

            <p className="kk-summary-panel__tax-note">
              Taxes and <a href="/shipping">shipping</a> calculated at checkout
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
