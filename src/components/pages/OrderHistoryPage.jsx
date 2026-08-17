import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useOrders } from '../../contex/OrderContext'
import { useCart } from '../../contex/CartContext'

export default function OrderHistoryPage() {
  const { orders } = useOrders()
  const { addToCart, setCartOpen } = useCart()
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Delivered', 'In Transit', 'Placed']
  const filtered = orders.filter(o => filter === 'All' || o.status === filter)

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', fontFamily: "'Sora',sans-serif" }}>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}`}</style>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '32px 6vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <Link to="/dashboard" style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '8px 14px', textDecoration: 'none', color: '#374151', fontWeight: 600, fontSize: '14px' }}>← Back</Link>
          <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: 0 }}>📦 Order History</h1>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 18px', borderRadius: '999px', border: `2px solid ${filter === f ? '#FF3D00' : '#E5E7EB'}`, background: filter === f ? '#FFF0ED' : '#fff', color: filter === f ? '#FF3D00' : '#6B7280', fontWeight: filter === f ? 700 : 500, fontSize: '13px', cursor: 'pointer', fontFamily: "'Sora',sans-serif" }}>{f}</button>
          ))}
        </div>

        {/* Orders */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '20px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📦</div>
            <h3 style={{ fontWeight: 800, color: '#111827' }}>No orders found</h3>
            <p style={{ color: '#9CA3AF' }}>Start ordering delicious food!</p>
            <Link to="/" style={{ display: 'inline-block', background: '#FF3D00', color: '#fff', padding: '12px 24px', borderRadius: '12px', fontWeight: 700, textDecoration: 'none', marginTop: '16px' }}>Order Now</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filtered.map((order, i) => (
              <div key={order.id} style={{ background: '#fff', borderRadius: '20px', padding: '20px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', animation: `fadeUp 0.4s ease ${i * 0.05}s both` }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <img src={order.img} alt={order.restaurant} style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
                    onError={e => { e.target.src = 'https://via.placeholder.com/60x60/FF3D00/fff?text=Food' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#111827', margin: 0 }}>{order.restaurant}</h4>
                      <span style={{ fontSize: '12px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', background: order.status === 'Delivered' ? '#ECFDF5' : '#FFF0ED', color: order.status === 'Delivered' ? '#10B981' : '#FF3D00' }}>
                        {order.status === 'Delivered' ? '✅' : '🕐'} {order.status}
                      </span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#9CA3AF', margin: '0 0 6px 0' }}>{order.items.map(i => `${i.name} ×${i.qty}`).join(', ')} · ₹{order.total}</p>
                    <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '0 0 12px 0' }}>Order #{order.id} · {order.date}</p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {order.status === 'Delivered' ? (
                        <button onClick={() => { order.items.forEach(it => addToCart({ id: `reorder-${it.name}`, name: it.name, price: it.price, img: order.img })); setCartOpen(true) }}
                          style={{ padding: '8px 18px', background: '#FF3D00', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '13px', cursor: 'pointer', fontFamily: "'Sora',sans-serif" }}>
                          🔄 Reorder
                        </button>
                      ) : (
                        <Link to={`/track/${order.id}`} style={{ padding: '8px 18px', background: '#FFF0ED', color: '#FF3D00', border: '2px solid #FDDCB5', borderRadius: '10px', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                          📍 Track Order
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}