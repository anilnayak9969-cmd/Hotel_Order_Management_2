import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cuisines = [
  {
    name: 'North Indian',
    desc: 'Curries, kebabs, biryanis',
    color: '#FF6B35', bg: '#FFF0ED',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
    slug: 'biryani-blues',
    dishes: ['Butter Chicken', 'Dal Makhani', 'Naan'],
  },
  {
    name: 'South Indian',
    desc: 'Dosa, idli, sambar',
    color: '#10B981', bg: '#ECFDF5',
    img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80',
    slug: 'saravana-bhavan',
    dishes: ['Masala Dosa', 'Idli', 'Vada'],
  },
  {
    name: 'Italian',
    desc: 'Pizza, pasta, risotto',
    color: '#3B82F6', bg: '#EFF6FF',
    img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80',
    slug: 'punjab-grill',
    dishes: ['Margherita', 'Pasta Alfredo', 'Tiramisu'],
  },
  {
    name: 'American',
    desc: 'Burgers, sandwiches, fries',
    color: '#F59E0B', bg: '#FFFBEB',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
    slug: 'chaayos',
    dishes: ['Cheeseburger', 'BBQ Wings', 'Fries'],
  },
  {
    name: 'Chinese',
    desc: 'Noodles, dim sum, fried rice',
    color: '#EF4444', bg: '#FEF2F2',
    img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80',
    slug: 'biryani-blues',
    dishes: ['Hakka Noodles', 'Dim Sum', 'Manchurian'],
  },
  {
    name: 'Japanese',
    desc: 'Sushi, ramen, tempura',
    color: '#06B6D4', bg: '#ECFEFF',
    img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80',
    slug: 'saravana-bhavan',
    dishes: ['Sushi Roll', 'Ramen', 'Tempura'],
  },
  {
    name: 'Middle Eastern',
    desc: 'Shawarma, falafel, hummus',
    color: '#F97316', bg: '#FFF7ED',
    img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80',
    slug: 'punjab-grill',
    dishes: ['Shawarma', 'Falafel', 'Hummus'],
  },
  {
    name: 'Mexican',
    desc: 'Tacos, burritos, nachos',
    color: '#22C55E', bg: '#F0FDF4',
    img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&q=80',
    slug: 'chaayos',
    dishes: ['Tacos', 'Burrito', 'Nachos'],
  },
]

function CuisineExplorer() {
  const [hovered, setHovered] = useState(null)
  const [clicked, setClicked] = useState(null)
  const navigate = useNavigate()

  const handleClick = (cuisine) => {
    setClicked(cuisine.name)
    setTimeout(() => navigate(`/restaurant/${cuisine.slug}`), 420)
  }

  return (
    <section style={s.section}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes clickBurst {
          0%   { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes dishSlideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmerSweep {
          0%   { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        .cuisine-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
          animation: fadeUp 0.5s ease both;
        }
        .cuisine-img {
          transition: transform 0.4s ease, filter 0.3s ease;
        }
        .cuisine-card:hover .cuisine-img {
          transform: scale(1.12);
        }
        .shine-sweep {
          position: absolute; top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
          pointer-events: none;
        }
        .cuisine-card:hover .shine-sweep {
          animation: shimmerSweep 0.9s ease;
        }
      `}</style>

      <div style={s.header}>
        <h2 style={s.title}>🌍 Explore by Cuisine</h2>
        <p style={s.sub}>From street food to fine dining — find your favourite style</p>
      </div>

      <div style={s.grid}>
        {cuisines.map((c, i) => {
          const isHover = hovered === c.name
          const isClicked = clicked === c.name
          return (
            <div
              key={c.name}
              className="cuisine-card"
              style={{
                ...s.card,
                animationDelay: `${i * 0.06}s`,
                borderColor: isHover ? c.color : c.bg,
                transform: isClicked ? 'scale(0.92)' : isHover ? 'translateY(-6px) scale(1.03)' : 'none',
                boxShadow: isHover ? `0 16px 32px ${c.color}40` : '0 2px 10px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick(c)}
            >
              {isClicked && (
                <span style={{
                  position: 'absolute', inset: 0, borderRadius: '18px',
                  background: c.color,
                  animation: 'clickBurst 0.45s ease forwards',
                  zIndex: 2,
                }} />
              )}

              {/* Image */}
              <div style={s.imgWrap}>
                <img
                  className="cuisine-img"
                  src={c.img}
                  alt={c.name}
                  style={s.img}
                  onError={e => { e.target.src = `https://via.placeholder.com/400x180/${c.color.slice(1)}/fff?text=${c.name}` }}
                />
                <div className="shine-sweep" />
                <div style={{
                  ...s.imgOverlay,
                  background: `linear-gradient(0deg, ${c.color}EE 0%, transparent 70%)`,
                }} />
              </div>

              <div style={{ padding: '14px 16px 18px' }}>
                <h4 style={s.cardTitle}>{c.name}</h4>
                <p style={s.cardDesc}>{c.desc}</p>

                {/* Dish chips reveal on hover */}
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '5px',
                  maxHeight: isHover ? '40px' : '0px',
                  opacity: isHover ? 1 : 0,
                  marginTop: isHover ? '10px' : '0px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}>
                  {c.dishes.map((d, di) => (
                    <span key={d} style={{
                      fontSize: '10px', fontWeight: 700,
                      color: c.color, background: c.bg,
                      border: `1px solid ${c.color}33`,
                      padding: '3px 8px', borderRadius: '999px',
                      animation: isHover ? `dishSlideIn 0.3s ease ${di * 0.06}s both` : 'none',
                    }}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <span style={{
                position: 'absolute', bottom: '16px', right: '14px',
                fontSize: '15px', color: c.color, fontWeight: 800,
                opacity: isHover ? 1 : 0,
                transform: isHover ? 'translateX(0)' : 'translateX(-6px)',
                transition: 'all 0.25s ease',
              }}>→</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const s = {
  section: { padding: '48px 6vw 32px', background: '#FAFAF8' },
  header: { maxWidth: '1280px', margin: '0 auto 28px' },
  title: { fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: '#1C1C1C', margin: '0 0 4px 0' },
  sub: { fontSize: '14px', color: '#9CA3AF', margin: 0 },
  grid: {
    maxWidth: '1280px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '18px',
  },
  card: {
    border: '2px solid', borderRadius: '18px',
    background: '#fff',
  },
  imgWrap: {
    position: 'relative', height: '120px',
    overflow: 'hidden', borderRadius: '16px 16px 0 0',
  },
  img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  imgOverlay: { position: 'absolute', inset: 0, pointerEvents: 'none' },
  cardTitle: { fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 4px 0' },
  cardDesc: { fontSize: '12px', color: '#9CA3AF', margin: 0 },
}

export default CuisineExplorer