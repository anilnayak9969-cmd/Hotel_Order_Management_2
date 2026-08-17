import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const cats = [
  { label: 'Pizza',    count: '48 places', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&q=80' },
  { label: 'Burgers',  count: '35 places', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80' },
  { label: 'Biryani',  count: '62 places', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&q=80' },
  { label: 'Wraps',    count: '24 places', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&q=80' },
  { label: 'Healthy',  count: '40 places', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80' },
  { label: 'Sushi',    count: '18 places', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&q=80' },
  { label: 'Desserts', count: '29 places', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80' },
  { label: 'Chicken',  count: '55 places', img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200&q=80' },
  { label: 'Drinks',   count: '37 places', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&q=80' },
  { label: 'Thali',    count: '22 places', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200&q=80' },
]

const recentlyViewed = [
  { id: 'biryani-blues',   name: 'Biryani Blues',   tag: 'Biryani · Mughlai', rating: '4.7', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&q=80' },
  { id: 'saravana-bhavan', name: 'Saravana Bhavan', tag: 'South Indian',       rating: '4.6', img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&q=80' },
  { id: 'chaayos',         name: 'Chaayos',          tag: 'Chai · Snacks',      rating: '4.6', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80' },
]

function CategorySection() {
  const [active, setActive] = useState('Pizza')
  const [bursting, setBursting] = useState(null)
  const [recent, setRecent] = useState(recentlyViewed)
  const scrollRef = useRef(null)
  const navigate = useNavigate()

  const handleSelect = (cat) => {
    setActive(cat.label)
    setBursting(cat.label)
    setTimeout(() => {
      setBursting(null)
      navigate('/search')
    }, 450)
  }

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 240, behavior: 'smooth' })
  }

  return (
    <section style={s.section}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px);} to{opacity:1;transform:translateY(0);} }
        @keyframes selectPop {
          0%   { transform: scale(1); }
          35%  { transform: scale(0.9) rotate(-2deg); }
          70%  { transform: scale(1.06) rotate(1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes ringExpand {
          0%   { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes checkPop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .cat-card {
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: visible;
          flex-shrink: 0;
        }
        .cat-img { transition: transform 0.35s ease, filter 0.25s ease; }
        .cat-card:hover .cat-img { transform: scale(1.1); }
        .scroll-arrow { transition: all 0.2s ease; }
        .scroll-arrow:hover { background: #FF3D00 !important; color: #fff !important; transform: scale(1.1); }
        .recent-card { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
        .recent-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.1) !important; }
        .recent-card:hover img { transform: scale(1.08); }
        .recent-card img { transition: transform 0.35s ease; }
      `}</style>

      <div style={s.headerRow}>
        <h2 style={s.title}>🍽️ Explore by Category</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="scroll-arrow" onClick={() => scroll(-1)} style={s.arrow}>←</button>
          <button className="scroll-arrow" onClick={() => scroll(1)} style={s.arrow}>→</button>
        </div>
      </div>

      <div ref={scrollRef} className="scroll-hide" style={s.scrollRow}>
        {cats.map((c, i) => {
          const isActive = active === c.label
          const isBursting = bursting === c.label
          return (
            <div
              key={c.label}
              className="cat-card"
              onClick={() => handleSelect(c)}
              style={{
                ...s.card,
                animation: `fadeUp 0.4s ease ${i * 0.04}s both`,
                border: `2px solid ${isActive ? '#FF3D00' : '#F3F4F6'}`,
                boxShadow: isActive ? '0 12px 28px rgba(255,61,0,0.3)' : '0 2px 8px rgba(0,0,0,0.05)',
                transform: isActive ? 'scale(1.04)' : 'none',
              }}
            >
              {isBursting && (
                <span style={{
                  position: 'absolute', inset: 0, borderRadius: '20px',
                  border: '2px solid #FF3D00',
                  animation: 'ringExpand 0.5s ease forwards',
                  pointerEvents: 'none', zIndex: 2,
                }} />
              )}

              {isActive && (
                <span style={{
                  position: 'absolute', top: '-6px', right: '-6px', zIndex: 3,
                  background: '#10B981', color: '#fff',
                  width: '20px', height: '20px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: 800,
                  animation: 'checkPop 0.4s ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                }}>✓</span>
              )}

              <div style={{
                ...s.imgWrap,
                animation: isActive ? 'selectPop 0.5s ease' : 'none',
              }}>
                <img
                  className="cat-img"
                  src={c.img}
                  alt={c.label}
                  style={s.catImg}
                  onError={e => { e.target.src = `https://via.placeholder.com/200x110/FF3D00/fff?text=${c.label}` }}
                />
                {isActive && <div style={s.activeOverlay} />}
              </div>

              <p style={{ ...s.label, color: isActive ? '#FF3D00' : '#111827' }}>{c.label}</p>
              <p style={s.count}>{c.count}</p>
            </div>
          )
        })}
      </div>

      {/* Recently Viewed */}
      {recent.length > 0 && (
        <div style={s.recentWrap}>
          <div style={s.recentHeader}>
            <h3 style={s.recentTitle}>🕐 Recently Viewed</h3>
            <span onClick={() => setRecent([])} style={s.clearAll}>Clear all</span>
          </div>
          <div style={s.recentGrid}>
            {recent.map((r, i) => (
              <div
                key={r.id}
                className="recent-card"
                onClick={() => navigate(`/restaurant/${r.id}`)}
                style={{ ...s.recentCard, animation: `fadeUp 0.4s ease ${i * 0.08}s both` }}
              >
                <div style={s.recentImgWrap}>
                  <img
                    src={r.img}
                    alt={r.name}
                    style={s.recentImg}
                    onError={e => { e.target.src = `https://via.placeholder.com/300x140/FF3D00/fff?text=${r.name}` }}
                  />
                </div>
                <div style={s.recentInfo}>
                  <p style={s.recentName}>{r.name}</p>
                  <p style={s.recentTag}>{r.tag}</p>
                  <span style={s.recentRating}>⭐ {r.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

const s = {
  section: { padding: '64px 6vw 0', background: '#FAFAF8' },
  headerRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: '24px', maxWidth: '1280px', margin: '0 auto 24px',
  },
  title: { fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#111827', margin: 0 },
  arrow: {
    width: '36px', height: '36px', borderRadius: '50%',
    background: '#fff', border: '1px solid #E5E7EB',
    cursor: 'pointer', fontSize: '16px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  scrollRow: {
    display: 'flex', gap: '14px', overflowX: 'auto',
    paddingBottom: '8px', maxWidth: '1280px', margin: '0 auto',
  },
  card: {
    borderRadius: '20px', padding: '12px 12px 16px',
    textAlign: 'center', minWidth: '130px',
    background: '#fff',
  },
  imgWrap: {
    position: 'relative', width: '100%', height: '80px',
    borderRadius: '14px', overflow: 'hidden', marginBottom: '10px',
  },
  catImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  activeOverlay: {
    position: 'absolute', inset: 0,
    background: 'rgba(255,61,0,0.18)',
  },
  label: { fontSize: '13px', fontWeight: 700, margin: '0 0 3px 0' },
  count: { fontSize: '11px', color: '#9CA3AF', margin: 0 },
  recentWrap: { maxWidth: '1280px', margin: '40px auto 0' },
  recentHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' },
  recentTitle: { fontSize: '18px', fontWeight: 800, color: '#111827', margin: 0 },
  clearAll: { fontSize: '13px', color: '#9CA3AF', cursor: 'pointer' },
  recentGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' },
  recentCard: {
    background: '#fff', borderRadius: '16px', overflow: 'hidden',
    border: '1px solid #F3F4F6', boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  recentImgWrap: { height: '120px', overflow: 'hidden' },
  recentImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  recentInfo: { padding: '12px 14px' },
  recentName: { fontSize: '14px', fontWeight: 800, color: '#111827', margin: '0 0 2px 0' },
  recentTag: { fontSize: '12px', color: '#9CA3AF', margin: '0 0 6px 0' },
  recentRating: { fontSize: '12px', fontWeight: 700, color: '#10B981' },
}

export default CategorySection