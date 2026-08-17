import React, { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems]   = useState([])
  const [cartOpen, setCartOpen]     = useState(false)
  const [flyItem, setFlyItem]       = useState(null)

  const addToCart = useCallback((item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...item, qty: 1 }]
    })
    setFlyItem(item.id)
    setTimeout(() => setFlyItem(null), 800)
  }, [])

  const removeFromCart = useCallback((id) => {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const updateQty = useCallback((id, delta) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i)
          .filter(i => i.qty > 0)
    )
  }, [])

  const clearCart = useCallback(() => setCartItems([]), [])

  const totalItems  = cartItems.reduce((s, i) => s + i.qty, 0)
  const itemTotal   = cartItems.reduce((s, i) => s + i.price * i.qty, 0)
  const deliveryFee = itemTotal > 0 ? (itemTotal > 299 ? 0 : 40) : 0
  const gst         = Math.round(itemTotal * 0.05)
  const grandTotal  = itemTotal + deliveryFee + gst

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQty, clearCart,
      totalItems, itemTotal, deliveryFee, gst, grandTotal,
      cartOpen, setCartOpen, flyItem,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}