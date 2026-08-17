import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SAMPLE = [
  { id: 'biryani-blues', name: 'Biryani Blues', tag: 'Biryani · Mughlai', rating: '4.7', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&q=80' },
  { id: 'saravana-bhavan', name: 'Saravana Bhavan', tag: 'South Indian', rating: '4.6', img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=200&q=80' },
  { id: 'chaayos', name: 'Chaayos', tag: 'Chai · Snacks', rating: '4.6', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&q=80' },
]

function RecentlyViewedSection() {
  const [recent, setRecent] = useState(SAMPLE)
  const navigate = useNavigate()
  if (!recent.length) return null

  return (
    <section style={{ padding: '32px 6vw', background: '#fff', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 800, color: '#1C1C1C', margin: 0 }}>🕐 Recently Viewed</h2>
        <button onClick={() => setRecent([])} style={{ background: 'none', border: 'none', color: '#9CA3AF', fontSize: '13px', cursor: 'pointer', fontFamily: "'Sora',sans-serif" }}>Clear all</button>
      </div>
      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
        {recent.map(r => (
          <div key={r.id} onClick={() => navigate(`/restaurant/${r.id}`)}
            style={{ minWidth: '180px', background: '#F9FAFB', borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #F3F4F6', transition: 'all 0.2s ease' }}>
            <img src={r.img} alt={r.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }}
              onError={e => { e.target.src = `https://via.placeholder.com/180x100/FF3D00/fff?text=${r.name}` }} />
            <div style={{ padding: '10px 12px' }}>
              <p style={{ fontSize: '13px', fontWeight: 800, color: '#111827', margin: '0 0 2px 0' }}>{r.name}</p>
              <p style={{ fontSize: '11px', color: '#9CA3AF', margin: '0 0 4px 0' }}>{r.tag}</p>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#10B981' }}>⭐ {r.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default RecentlyViewedSection