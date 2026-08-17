import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFavourites } from '../../contex/FavouritesContext'

export default function FavouritesPage() {
  const { favourites, removeFavourite } = useFavourites()
  const navigate = useNavigate()

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', fontFamily: "'Sora',sans-serif" }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 6vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <Link to="/dashboard" style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '8px 14px', textDecoration: 'none', color: '#374151', fontWeight: 600, fontSize: '14px' }}>← Back</Link>
          <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: 0 }}>❤️ Favourites</h1>
        </div>
        {favourites.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: '#fff', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <div style={{ fontSize: '72px', marginBottom: '16px' }}>❤️</div>
            <h3 style={{ fontWeight: 800, color: '#111827', marginBottom: '8px' }}>No favourites yet</h3>
            <p style={{ color: '#9CA3AF', marginBottom: '24px' }}>Tap the ❤️ on any restaurant to save it here</p>
            <Link to="/" style={{ display: 'inline-block', background: '#FF3D00', color: '#fff', padding: '12px 28px', borderRadius: '12px', fontWeight: 700, textDecoration: 'none' }}>Explore Restaurants</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: '16px' }}>
            {favourites.map(r => (
              <div key={r.id} style={{ background: '#fff', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #F3F4F6' }}>
                <div style={{ position: 'relative', height: '160px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate(`/restaurant/${r.id}`)}>
                  <img src={r.img} alt={r.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={e => { e.target.src = `https://via.placeholder.com/260x160/FF3D00/fff?text=${r.name}` }} />
                  <button onClick={e => { e.stopPropagation(); removeFavourite(r.id) }}
                    style={{ position: 'absolute', top: '10px', right: '10px', background: '#fff', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                    ❤️
                  </button>
                </div>
                <div style={{ padding: '14px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#111827', margin: '0 0 4px 0' }}>{r.name}</h4>
                  <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '0 0 10px 0' }}>{r.tag}</p>
                  <button onClick={() => navigate(`/restaurant/${r.id}`)}
                    style={{ width: '100%', padding: '10px', background: '#FFF0ED', border: '2px solid #FF3D00', borderRadius: '10px', color: '#FF3D00', fontWeight: 800, fontSize: '13px', cursor: 'pointer', fontFamily: "'Sora',sans-serif" }}>
                    Order Again →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
