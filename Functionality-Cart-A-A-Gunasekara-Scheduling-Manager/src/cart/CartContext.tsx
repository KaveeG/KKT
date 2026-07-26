import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  category: string
  color: string
  size: string
  price: number
  quantity: number
  image: string | null
}

interface CartContextValue {
  cartItems: CartItem[]
  cartCount: number
  subtotal: number
  updateQuantity: (id: number, qty: number) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const initialItems: CartItem[] = [
  { id: 101, name: 'Thermo Flux Terry Short', category: 'Shorts', color: 'Navy Blue', size: 'S', price: 3950, quantity: 1, image: null },
  { id: 102, name: 'Piped Up Block Core Pant', category: 'Pants', color: 'Black', size: 'S', price: 4990, quantity: 2, image: null },
  { id: 103, name: 'Stargazer Piped Pant', category: 'Pants', color: 'Black', size: 'S', price: 5450, quantity: 1, image: null },
]

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function updateQuantity(id: number, qty: number) {
    if (qty < 1) return
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item))
  }

  function removeFromCart(id: number) {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{
      cartItems, cartCount, subtotal,
      updateQuantity, removeFromCart, clearCart,
      isCartOpen, openCart: () => setIsCartOpen(true), closeCart: () => setIsCartOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
