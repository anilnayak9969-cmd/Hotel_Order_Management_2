import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contex/AuthContext'
import { useOrders } from '../../contex/OrderContext'
import { useCart } from '../../contex/CartContext'

export default function UserDashboard() {
  const { user } = useAuth()
  const { orders } = useOrders()
  const { totalItems } = useCart()

  const tiles = [
    { icon: '📦', label: 'My Orders', count: `${orders.length} orders`, to: '/orders', color: '#FFF0ED', border: '#FDDCB5', accent: '#FF3D00' },
    { icon: '❤️', label: 'Favourites', count: 'Saved places', to: '/favourites', color: '#FDF4FF', border: '#E9D5FF', accent: '#8B5CF6' },
    { icon: '🛒', label: 'Cart', count: `${totalItems} items`, to: '/cart', color: '#ECFDF5', border: '#A7F3D0', accent: '#10B981' },
    { icon: '👤', label: 'Profile', count: 'Edit account', to: '/profile', color: '#EFF6FF', border: '#BFDBFE', accent: '#3B82F6' },
    { icon: '📍', label: 'Addresses', count: 'Saved locations', to: '#', color: '#FFFBEB', border: '#FDE68A', accent: '#F59E0B' },
    { icon: '💳', label: 'Payments', count: 'UPI & Cards', to: '#', color: '#F0FDF4', border: '#BBF7D0', accent: '#10B981' },
  ]

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', fontFamily: "'Sora',sans-serif" }}>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}`}</style>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 6vw' }}>

        {/* Header */}
        <div style={{ background: '#111827', borderRadius: '24px', padding: '32px', marginBottom: '24px', position: 'relative', overflow: 'hidden', animation: 'fadeUp 0.5s ease' }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,0,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#FF3D00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
              {user?.name?.[0]?.toUpperCase() || '👤'}
            </div>
            <div>
              <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#F9FAFB', margin: '0 0 4px 0' }}>Welcome back, {user?.name || 'Foodie'} 👋</h1>
              <p style={{ fontSize: '14px', color: '#9CA3AF', margin: 0 }}>{user?.email || 'foodie@example.com'} · FoodRush Member</p>
            </div>
            <Link to="/profile" style={{ marginLeft: 'auto', background: '#FF3D00', color: '#fff', padding: '10px 20px', borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '13px' }}>Edit Profile</Link>
          </div>
          <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[['📦', orders.length, 'Total Orders'], ['⭐', '4.8', 'Avg Rating'], ['🎁', '240', 'Reward Points']].map(([icon, val, lbl]) => (
              <div key={lbl} style={{ display: 'flex', flex: '1', flexDirection: 'column', background: 'rgba(255,255,255,0.07)', borderRadius: '12px', padding: '12px 16px', minWidth: '100px' }}>
                <span style={{ fontSize: '20px', marginBottom: '4px' }}>{icon}</span>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#F9FAFB' }}>{val}</span>
                <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px', marginBottom: '24px' }}>
          {tiles.map((tile, i) => (
            <Link key={tile.label} to={tile.to} style={{ textDecoration: 'none', animation: `fadeUp 0.5s ease ${i * 0.05}s both` }}>
              <div style={{ background: tile.color, border: `2px solid ${tile.border}`, borderRadius: '18px', padding: '20px', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>{tile.icon}</span>
                <p style={{ fontSize: '15px', fontWeight: 800, color: '#111827', margin: '0 0 4px 0' }}>{tile.label}</p>
                <p style={{ fontSize: '12px', color: tile.accent, fontWeight: 600, margin: 0 }}>{tile.count}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent order */}
        {orders.length > 0 && (
          <div style={{ background: '#fff', borderRadius: '20px', padding: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', animation: 'fadeUp 0.5s ease 0.3s both' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: 0 }}>🕐 Recent Order</h3>
              <Link to="/orders" style={{ color: '#FF3D00', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>View all →</Link>
            </div>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <img src={orders[0].img} alt={orders[0].restaurant} style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
                onError={e => { e.target.src = 'https://via.placeholder.com/56x56/FF3D00/fff?text=Food' }} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0 0 2px', fontWeight: 800, fontSize: '15px', color: '#111827' }}>{orders[0].restaurant}</p>
                <p style={{ margin: '0 0 6px', fontSize: '13px', color: '#9CA3AF' }}>{orders[0].items[0].name} · ₹{orders[0].total} · {orders[0].date}</p>
                <span style={{ background: '#ECFDF5', color: '#10B981', fontSize: '12px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>✅ {orders[0].status}</span>
              </div>
              <Link to={`/track/${orders[0].id}`} style={{ background: '#FF3D00', color: '#fff', padding: '10px 16px', borderRadius: '10px', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>Track</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}