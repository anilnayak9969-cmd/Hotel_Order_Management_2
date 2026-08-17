import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const allItems = [
  { id: 1, name: 'Biryani Blues', type: 'restaurant', tag: 'Biryani · Mughlai', time: '28 min', rating: 4.7, img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&q=80', slug: 'biryani-blues' },
  { id: 2, name: 'Saravana Bhavan', type: 'restaurant', tag: 'South Indian · Dosa', time: '22 min', rating: 4.6, img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&q=80', slug: 'saravana-bhavan' },
  { id: 3, name: 'Punjab Grill', type: 'restaurant', tag: 'Punjabi · Tandoor', time: '30 min', rating: 4.5, img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&q=80', slug: 'punjab-grill' },
  { id: 4, name: 'Chaayos', type: 'restaurant', tag: 'Chai · Snacks', time: '18 min', rating: 4.6, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80', slug: 'chaayos' },
  { id: 5, name: 'Chicken Biryani', type: 'dish', tag: 'Rice · Mughlai', price: '₹249', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&q=80', slug: 'biryani-blues' },
  { id: 6, name: 'Masala Dosa', type: 'dish', tag: 'South Indian', price: '₹129', img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&q=80', slug: 'saravana-bhavan' },
  { id: 7, name: 'Butter Chicken', type: 'dish', tag: 'Mughlai · Curry', price: '₹299', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=300&q=80', slug: 'punjab-grill' },
  { id: 8, name: 'Paneer Tikka', type: 'dish', tag: 'Veg · Starter', price: '₹249', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80', slug: 'punjab-grill' },
  { id: 10, name: 'Masala Chai', type: 'dish', tag: 'Drinks · Hot', price: '₹49', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80', slug: 'chaayos' },
]

const filters = ['All', 'Restaurants', 'Dishes', 'Veg Only', 'Under ₹200', 'Fast Delivery']
const sortOptions = ['Relevance', 'Rating', 'Delivery Time', 'Cost: Low to High']

export default function SearchPage() {
  const [query, setQuery]   = useState('')
  const [active, setActive] = useState('All')
  const [sort, setSort]     = useState('Relevance')
  const navigate = useNavigate()

  const filtered = allItems.filter(item => {
    const matchQ = item.name.toLowerCase().includes(query.toLowerCase()) || item.tag.toLowerCase().includes(query.toLowerCase())
    if (!matchQ) return false
    if (active === 'Restaurants') return item.type === 'restaurant'
    if (active === 'Dishes')      return item.type === 'dish'
    return true
  })

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);} }
        .result-card { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer; }
        .result-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.1) !important; }
        .filter-chip { transition: all 0.2s ease; cursor: pointer; }
        .filter-chip:hover { border-color: #FF3D00 !important; color: #FF3D00 !important; }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 6vw' }}>

        {/* Search bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          background: '#F9FAFB', border: '2px solid #E5E7EB',
          borderRadius: '16px', padding: '14px 20px', marginBottom: '28px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}>
          <span style={{ fontSize: '20px' }}>🔍</span>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for restaurants, dishes, cuisines..."
            autoFocus
            style={{
              flex: 1, border: 'none', background: 'transparent',
              outline: 'none', fontSize: '16px', color: '#111827',
              fontFamily: "'Sora', sans-serif",
            }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{
              background: '#E5E7EB', border: 'none', borderRadius: '50%',
              width: '28px', height: '28px', cursor: 'pointer', fontSize: '14px',
            }}>✕</button>
          )}
        </div>

        {/* Filters row */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {filters.map(f => (
            <button key={f} className="filter-chip"
              onClick={() => setActive(f)}
              style={{
                padding: '8px 18px', borderRadius: '999px',
                border: `2px solid ${active === f ? '#FF3D00' : '#E5E7EB'}`,
                background: active === f ? '#FFF0ED' : '#fff',
                color: active === f ? '#FF3D00' : '#6B7280',
                fontWeight: active === f ? 700 : 500,
                fontSize: '13px', fontFamily: "'Sora', sans-serif",
              }}>{f}</button>
          ))}
          <select value={sort} onChange={e => setSort(e.target.value)}
            style={{
              padding: '8px 16px', borderRadius: '999px',
              border: '2px solid #E5E7EB', background: '#fff',
              color: '#374151', fontWeight: 600, fontSize: '13px',
              outline: 'none', cursor: 'pointer',
              fontFamily: "'Sora', sans-serif",
            }}>
            {sortOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Results count */}
        {query && (
          <p style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '20px' }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "<strong style={{ color: '#111827' }}>{query}</strong>"
          </p>
        )}

        {/* Trending (no search) */}
        {!query && (
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', marginBottom: '16px' }}>
              🔥 Trending Searches
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Biryani', 'Dosa', 'Pizza', 'Burger', 'Chai', 'Paneer Tikka',  'Vada Pav'].map(t => (
                <button key={t} onClick={() => setQuery(t)} style={{
                  padding: '8px 18px', borderRadius: '999px',
                  border: '1px solid #E5E7EB', background: '#F9FAFB',
                  color: '#374151', fontSize: '13px', cursor: 'pointer',
                  fontFamily: "'Sora', sans-serif",
                  transition: 'all 0.2s',
                }}>🔍 {t}</button>
              ))}
            </div>
          </div>
        )}

        {/* Results grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {filtered.map((item, i) => (
            <div key={item.id} className="result-card"
              onClick={() => navigate(`/restaurant/${item.slug}`)}
              style={{
                background: '#fff', borderRadius: '18px',
                border: '1px solid #F3F4F6', overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                animation: `fadeUp 0.4s ease ${i * 0.05}s both`,
              }}
            >
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img src={item.img} alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.src = `https://via.placeholder.com/260x160/F3F4F6/374151?text=Food` }} />
                <span style={{
                  position: 'absolute', top: '10px', left: '10px',
                  background: item.type === 'restaurant' ? '#111827' : '#FF3D00',
                  color: '#fff', fontSize: '10px', fontWeight: 800,
                  padding: '3px 10px', borderRadius: '6px', letterSpacing: '0.05em',
                }}>
                  {item.type === 'restaurant' ? '🏪 Restaurant' : '🍽️ Dish'}
                </span>
              </div>
              <div style={{ padding: '14px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#111827', margin: '0 0 4px 0' }}>
                  {item.name}
                </h4>
                <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '0 0 8px 0' }}>{item.tag}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.type === 'restaurant' ? (
                    <>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#10B981' }}>⭐ {item.rating}</span>
                      <span style={{ fontSize: '13px', color: '#6B7280' }}>🕐 {item.time}</span>
                    </>
                  ) : (
                    <span style={{ fontSize: '15px', fontWeight: 800, color: '#FF3D00' }}>{item.price}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && query && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ color: '#111827', fontWeight: 800 }}>No results found</h3>
            <p style={{ color: '#9CA3AF' }}>Try searching for something else</p>
          </div>
        )}
      </div>
    </div>
  )
}