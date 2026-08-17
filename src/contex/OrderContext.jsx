import React, { createContext, useContext, useState } from 'react'

const OrderContext = createContext(null)

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([
    {
      id: 'FR123456', restaurant: 'Biryani Blues', date: '2024-04-01',
      items: [{ name: 'Chicken Biryani', qty: 2, price: 249 }],
      total: 548, status: 'Delivered',
      img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=120&q=80',
    },
    {
      id: 'FR789012', restaurant: 'Saravana Bhavan', date: '2024-04-03',
      items: [{ name: 'Masala Dosa', qty: 1, price: 129 }],
      total: 169, status: 'Delivered',
      img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=120&q=80',
    },
  ])

  const addOrder = (order) => {
    setOrders(prev => [{ ...order, id: `FR${Math.floor(100000 + Math.random() * 900000)}`, date: new Date().toISOString().split('T')[0] }, ...prev])
  }

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrders() {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error('useOrders must be inside OrderProvider')
  return ctx
}