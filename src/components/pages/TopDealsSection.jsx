import React, { useState, useEffect } from 'react'
import { useCart } from '../../contex/CartContext'

const deals = [
  { id: 'deal1', name: 'Chicken Biryani', restaurant: 'Biryani Blues', original: 249, deal: 149, img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&q=80', emoji: '🍛', endsIn: 3600 },
  { id: 'deal2', name: 'Masala Dosa',     restaurant: 'Saravana Bhavan', original: 129, deal: 79, img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=200&q=80', emoji: '🥞', endsIn: 7200 },
  { id: 'deal3', name: 'Butter Chicken',  restaurant: 'Moti Mahal', original: 299, deal: 199, img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&q=80', emoji: '🍗', endsIn: 1800 },
  { id: 'deal4', name: 'Paneer Tikka',    restaurant: 'Punjab Grill', original: 249, deal: 179, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&q=80', emoji: '🧀', endsIn: 5400 },
]

function CountdownTimer({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds)
  useEffect(() => {
    const t = setInterval(() => setTimeLeft(p => Math.max(0, p - 1)), 1000)
    return () => clearInterval(t)
  }, [])
  const h = Math.floor(timeLeft / 3600)
  const m = Math.floor((timeLeft % 3600) / 60)
  const s = timeLeft % 60
  const fmt = n => String(n).padStart(2, '0')
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      {[h, m, s].map((v, i) => (
        <React.Fragment key={i}>
          <span style={{ background: '#111827', color: '#FF3D00', fontWeight: 800, fontSize: '13px', padding: '3px 6px', borderRadius: '6px', fontFamily: 'monospace' }}>{fmt(v)}</span>
          {i < 2 && <span style={{ color: '#FF3D00', fontWeight: 800 }}>:</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

function TopDealsSection() {
  const { addToCart, setCartOpen } = useCart()
  return (
    <section style={{ padding: '48px 6vw 32px', background: '#fff', maxWidth: '1280px', margin: '0 auto' }}>
      <style>{`
        .deal-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .deal-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(0,0,0,0.12) !important; }
        .deal-add-btn:hover { background: #111827 !important; }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#1C1C1C', margin: '0 0 4px 0' }}>⚡ Today's Flash Deals</h2>
          <p style={{ fontSize: '14px', color: '#9CA3AF', margin: 0 }}>Limited time offers — grab them before they're gone!</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: 600 }}>🔥 Deals refreshing soon</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {deals.map(deal => {
          const discount = Math.round(((deal.original - deal.deal) / deal.original) * 100)
          return (
            <div key={deal.id} className="deal-card" style={{ background: '#fff', borderRadius: '16px', border: '1px solid #F3F4F6', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <div style={{ position: 'relative', height: '140px', overflow: 'hidden' }}>
                <img src={deal.img} alt={deal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.src = `https://via.placeholder.com/260x140/FF3D00/fff?text=${deal.name}` }} />
                <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#FF3D00', color: '#fff', fontWeight: 900, fontSize: '13px', padding: '4px 10px', borderRadius: '999px' }}>{discount}% OFF</span>
              </div>
              <div style={{ padding: '14px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#111827', margin: '0 0 2px 0' }}>{deal.emoji} {deal.name}</h4>
                <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '0 0 8px 0' }}>{deal.restaurant}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#FF3D00' }}>₹{deal.deal}</span>
                  <span style={{ fontSize: '13px', color: '#9CA3AF', textDecoration: 'line-through' }}>₹{deal.original}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>⏱️ Ends in</span>
                    <CountdownTimer seconds={deal.endsIn} />
                  </div>
                </div>
                <button className="deal-add-btn"
                  onClick={() => { addToCart({ id: deal.id, name: deal.name, price: deal.deal, img: deal.img }); setCartOpen(true) }}
                  style={{ width: '100%', padding: '10px', background: '#FF3D00', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '13px', cursor: 'pointer', fontFamily: "'Sora',sans-serif", transition: 'background 0.2s' }}>
                  Add to Cart — ₹{deal.deal}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default TopDealsSection