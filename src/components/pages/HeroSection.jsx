import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const foodCards = [
  {
    label: 'Biryani',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=400&fit=crop&q=90',
    color: '#FFF3E0',
  },
  {
    label: 'Dosa',
    img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=400&fit=crop&q=90',
    color: '#E8F5E9',
  },
  {
    label: 'Butter Chicken',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=400&fit=crop&q=90',
    color: '#FDE8E8',
  },
  {
    label: 'Thali',
    img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop&q=90',
    color: '#EDE7F6',
  },
]

const quickTags = [
  { emoji: '🍛', label: 'Biryani' },
  { emoji: '🥞', label: 'Dosa' },
  { emoji: '🍕', label: 'Pizza' },
  { emoji: '🍔', label: 'Burger' },
  { emoji: '🍜', label: 'Noodles' },
  { emoji: '🧁', label: 'Cakes' },
]

export default function HeroSection() {
  const [address, setAddress]   = useState('')
  const [focused, setFocused]   = useState(false)
  const [active, setActive]     = useState(0)
  const [loaded, setLoaded]     = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setLoaded(true)
    const t = setInterval(() => setActive(p => (p + 1) % foodCards.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={s.hero}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes fadeRight {
          from { opacity:0; transform:translateX(40px); }
          to   { opacity:1; transform:translateX(0);    }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0px)   rotate(0deg);   }
          33%      { transform: translateY(-10px) rotate(-1.5deg);}
          66%      { transform: translateY(-5px)  rotate(1deg);  }
        }
        @keyframes floatY2 {
          0%,100% { transform: translateY(0px)  rotate(0deg);  }
          33%      { transform: translateY(-8px) rotate(1.5deg);}
          66%      { transform: translateY(-14px) rotate(-1deg);}
        }
        @keyframes badgePop {
          0%   { transform: scale(0) rotate(-6deg); opacity:0; }
          60%  { transform: scale(1.12) rotate(2deg); opacity:1; }
          100% { transform: scale(1) rotate(0deg); opacity:1; }
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,61,0,0.35); }
          50%      { box-shadow: 0 0 0 10px rgba(255,61,0,0);  }
        }
        @keyframes rotateBorder {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.85); opacity:0; }
          to   { transform: scale(1);    opacity:1; }
        }

        .food-card-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .food-card-item:hover {
          transform: translateY(-8px) scale(1.03) !important;
          box-shadow: 0 24px 48px rgba(0,0,0,0.18) !important;
          z-index: 10;
        }
        .food-card-item:hover img { transform: scale(1.08); }
        .food-card-item img { transition: transform 0.4s ease; }

        .quick-tag:hover {
          background: #FF3D00 !important;
          color: #fff !important;
          border-color: #FF3D00 !important;
          transform: translateY(-2px);
        }
        .quick-tag { transition: all 0.2s ease; cursor: pointer; }

        .find-btn:hover {
          background: #e53500 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255,61,0,0.45) !important;
        }
        .find-btn { transition: all 0.2s ease; }
      `}</style>

      {/* ── Background gradient mesh ── */}
      <div style={s.bgMesh} />
      {/* MORE VISIBLE background circles */}
      <div style={s.bgCircle1} />
      <div style={s.bgCircle2} />
      <div style={s.bgCircle3} />

      <div style={s.inner}>

        {/* ════════════ LEFT ════════════ */}
        <div style={s.left}>

          <div style={{
            ...s.pill,
            opacity: loaded ? 1 : 0,
            animation: loaded ? 'fadeUp 0.6s ease 0.1s both' : 'none',
          }}>
            <span style={s.pillDot} />
            🇮🇳 India's #1 Food Delivery App
          </div>

          <h1 style={{
            ...s.h1,
            animation: loaded ? 'fadeUp 0.6s ease 0.2s both' : 'none',
          }}>
            Order food &<br />
            <span style={s.gradientText}>groceries</span>{' '}
            with<br />
            <span style={s.brandText}>FoodRush</span>
          </h1>

          <p style={{
            ...s.sub,
            animation: loaded ? 'fadeUp 0.6s ease 0.3s both' : 'none',
          }}>
            Discover restaurants, track orders in real‑time and get
            food delivered faster than ever — across 50+ Indian cities.
          </p>

          <div style={{
            ...s.searchWrap,
            animation: loaded ? 'fadeUp 0.6s ease 0.4s both' : 'none',
          }}>
            <div style={{
              ...s.searchBox,
              borderColor: focused ? '#FF3D00' : '#E5E7EB',
              boxShadow: focused ? '0 0 0 4px rgba(255,61,0,0.1)' : '0 4px 20px rgba(0,0,0,0.08)',
            }}>
              <span style={s.locIcon}>📍</span>
              <input
                value={address}
                onChange={e => setAddress(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Find your favorite food..."
                style={s.input}
              />
            </div>
            <button
              className="find-btn"
              onClick={() => navigate('/search')}
              style={s.findBtn}
            >
              Find Food 🍽️
            </button>
          </div>

          <div style={{
            ...s.tagRow,
            animation: loaded ? 'fadeUp 0.6s ease 0.5s both' : 'none',
          }}>
            {quickTags.map(t => (
              <span
                key={t.label}
                className="quick-tag"
                onClick={() => navigate('/search')}
                style={s.tag}
              >
                {t.emoji} {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* ════════════ RIGHT ════════════ */}
        {/* Extra horizontal padding so badges don't clip */}
        <div style={{
          ...s.right,
          animation: loaded ? 'fadeRight 0.7s ease 0.3s both' : 'none',
        }}>

          <div style={s.ringWrap}>
            <div style={s.ring} />
          </div>

          {/* 2×2 food grid */}
          <div style={s.foodGrid}>
            {foodCards.map((card, i) => {
              const isActive  = active === i
              const animName  = i % 2 === 0 ? 'floatY' : 'floatY2'
              const delay     = `${i * 0.18}s`
              const duration  = `${3.2 + i * 0.4}s`

              return (
                <div
                  key={card.label}
                  className="food-card-item"
                  onClick={() => navigate('/search')}
                  style={{
                    background: card.color,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: isActive
                      ? '0 16px 40px rgba(255,61,0,0.22)'
                      : '0 8px 24px rgba(0,0,0,0.10)',
                    border: isActive
                      ? '2.5px solid #FF3D00'
                      : '2.5px solid transparent',
                    animation: `${animName} ${duration} ease-in-out ${delay} infinite`,
                    transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                  }}
                >
                  {isActive && (
                    <div style={{
                      position: 'absolute', inset: 0, borderRadius: '18px',
                      border: '2px solid rgba(255,61,0,0.4)',
                      animation: 'pulse 1.6s ease-in-out infinite',
                      pointerEvents: 'none', zIndex: 3,
                    }} />
                  )}

                  <img
                    src={card.img}
                    alt={card.label}
                    style={{ width: '100%', height: '130px', objectFit: 'cover', display: 'block' }}
                    onError={e => {
                      e.target.src = `https://via.placeholder.com/200x130/${card.color.slice(1)}/FF3D00?text=${card.label}`
                    }}
                  />

                  <div style={{
                    padding: '10px 12px',
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700, fontSize: '13px', color: '#1C1C1C',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <span>{card.label}</span>
                    {isActive && (
                      <span style={{
                        background: '#FF3D00', color: '#fff',
                        fontSize: '10px', fontWeight: 800,
                        padding: '2px 8px', borderRadius: '999px',
                        animation: 'scaleIn 0.3s ease',
                      }}>
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Badge 1: top-right — moved further out ── */}
          <div style={{
            ...s.badge1,
            animation: loaded ? 'badgePop 0.6s ease 0.8s both' : 'none',
          }}>
            <span style={{ fontSize: '18px' }}>⚡</span>
            <div>
              <p style={{ margin: 0, fontWeight: 800, fontSize: '13px', color: '#111827' }}>
                20 min avg delivery
              </p>
              <p style={{ margin: 0, fontSize: '11px', color: '#9CA3AF' }}>
                Across 50+ cities
              </p>
            </div>
          </div>

          {/* ── Badge 2: bottom-left — moved further out ── */}
          <div style={{
            ...s.badge2,
            animation: loaded ? 'badgePop 0.6s ease 1.0s both' : 'none',
          }}>
            <span style={{ fontSize: '18px' }}>🆓</span>
            <div>
              <p style={{ margin: 0, fontWeight: 800, fontSize: '13px', color: '#fff' }}>
                Free delivery today
              </p>
              <p style={{ margin: 0, fontSize: '11px', color: 'rgba(255,255,255,0.75)' }}>
                On orders above ₹199
              </p>
            </div>
          </div>

          {/* ── Badge 3: bottom-right ── */}
          <div style={{
            ...s.badge3,
            animation: loaded ? 'badgePop 0.6s ease 1.2s both' : 'none',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#10B981', display: 'inline-block',
              animation: 'pulse 1.4s ease-in-out infinite',
            }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#111827'}}>
              2,341 orders live now
            </span>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div style={{
        ...s.statsBar,
        animation: loaded ? 'fadeUp 0.6s ease 0.6s both' : 'none',
      }}>
        {[
          ['🏪', '500+',  'Restaurants'],
          ['📦', '50K+',  'Daily Orders'],
          ['🛵', '20 min','Avg Delivery'],
          ['⭐', '4.8',   'App Rating'],
          ['🌆', '50+',   'Cities'],
        ].map(([icon, val, lbl]) => (
          <div key={lbl} style={s.statItem}>
            <span style={s.statIcon}>{icon}</span>
            <span style={s.statVal}>{val}</span>
            <span style={s.statLbl}>{lbl}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

const s = {
  hero: {
    background: '#FAFAF5',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '72px',
    fontFamily: "'Sora', sans-serif",
  },

  /* ── More visible background circles ── */
  bgMesh: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg,#FFE8DC 0%,#FAFAF5 45%,#DCF5E8 100%)',
    zIndex: 0,
  },
  bgCircle1: {
    position: 'absolute', top: '-80px', right: '8%',
    width: '520px', height: '520px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,61,0,0.18) 0%, rgba(255,140,0,0.08) 50%, transparent 70%)',
    pointerEvents: 'none', zIndex: 0,
  },
  bgCircle2: {
    position: 'absolute', bottom: '20px', left: '-80px',
    width: '380px', height: '380px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0.06) 50%, transparent 70%)',
    pointerEvents: 'none', zIndex: 0,
  },
  bgCircle3: {
    position: 'absolute', top: '30%', left: '30%',
    width: '260px', height: '260px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,200,0,0.10) 0%, transparent 70%)',
    pointerEvents: 'none', zIndex: 0,
  },

  inner: {
    maxWidth: '1280px', margin: '0 auto',
    padding: '56px 6vw 48px',
    display: 'flex', alignItems: 'center',
    gap: '48px', flexWrap: 'wrap',
    position: 'relative', zIndex: 1,
  },
  left: { flex: '1 1 440px', maxWidth: '560px' },

  /* Extra px on all sides so absolute badges don't get clipped */
  right: {
    flex: '1 1 380px',
    position: 'relative',
    minHeight: '360px',
    /* push outward so badges have room */
    paddingTop: '60px',
    paddingBottom: '60px',
    paddingLeft: '60px',
    paddingRight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pill: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    background: '#FFF0ED', color: '#FF3D00',
    border: '1px solid rgba(255,61,0,0.2)',
    borderRadius: '999px', padding: '6px 16px',
    fontSize: '13px', fontWeight: 700, marginBottom: '20px',
  },
  pillDot: {
    width: '6px', height: '6px', borderRadius: '50%',
    background: '#FF3D00', display: 'inline-block',
  },

  h1: {
    fontSize: 'clamp(36px,5vw,62px)', fontWeight: 800,
    color: '#1C1C1C', lineHeight: 1.1,
    margin: '0 0 20px 0', letterSpacing: '-0.03em',
  },
  gradientText: {
    background: 'linear-gradient(90deg,#FF3D00,#FF8C00)',
    backgroundClip: 'text', WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent', fontStyle: 'italic',
  },
  brandText: { color: '#1C1C1C' },

  sub: {
    fontSize: '16px', color: '#6B7280',
    lineHeight: 1.75, marginBottom: '32px', maxWidth: '460px',
  },

  searchWrap: {
    display: 'flex', gap: '10px',
    marginBottom: '20px', flexWrap: 'wrap',
  },
  searchBox: {
    flex: '1 1 240px', display: 'flex', alignItems: 'center',
    background: '#fff', border: '2px solid #E5E7EB',
    borderRadius: '14px', transition: 'border-color 0.2s, box-shadow 0.2s',
    overflow: 'hidden',
  },
  locIcon: { padding: '0 14px', fontSize: '18px', flexShrink: 0 },
  input: {
    flex: 1, padding: '15px 12px 15px 0',
    background: 'transparent', border: 'none', outline: 'none',
    fontSize: '15px', color: '#111827',
    fontFamily: "'Sora', sans-serif",
  },
  findBtn: {
    padding: '15px 24px', background: '#FF3D00', color: '#fff',
    border: 'none', borderRadius: '14px', fontWeight: 700,
    fontSize: '15px', cursor: 'pointer',
    fontFamily: "'Sora', sans-serif", whiteSpace: 'nowrap',
    boxShadow: '0 8px 20px rgba(255,61,0,0.35)',
  },

  tagRow: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  tag: {
    background: '#fff', border: '1.5px solid #E5E7EB',
    borderRadius: '999px', padding: '7px 14px',
    fontSize: '13px', fontWeight: 600, color: '#374151',
    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
  },

  ringWrap: {
    position: 'absolute', inset: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    pointerEvents: 'none', zIndex: 0,
  },
  ring: {
    width: '340px', height: '340px', borderRadius: '50%',
    border: '2px dashed rgba(255,61,0,0.15)',
    animation: 'rotateBorder 20s linear infinite',
  },
  foodGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    width: '100%',
    maxWidth: '340px',
    position: 'relative', zIndex: 1,
  },

  /* ── Badges repositioned well outside the grid ── */
  badge1: {
    position: 'absolute',
    top: '0px',          /* above the grid */
    right: '0px',
    background: '#fff', borderRadius: '14px',
    padding: '10px 16px', display: 'flex', gap: '10px',
    alignItems: 'center', zIndex: 5,
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    border: '1px solid #F3F4F6',
    whiteSpace: 'nowrap',
  },
  badge2: {
    position: 'absolute',
    bottom: '0px',       /* below the grid */
    left: '0px',
    background: '#FF3D00', borderRadius: '14px',
    padding: '10px 16px', display: 'flex', gap: '10px',
    alignItems: 'center', zIndex: 5,
    boxShadow: '0 8px 24px rgba(255,61,0,0.4)',
    whiteSpace: 'nowrap',
  },
  badge3: {
    position: 'absolute',
    bottom: '72px',
    right: '0px',
    background: '#fff', borderRadius: '999px',
    padding: '8px 14px', display: 'flex', gap: '7px',
    alignItems: 'center', zIndex: 5,
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    border: '1px solid #F3F4F6',
    whiteSpace: 'nowrap',
  },

  statsBar: {
    background: '#111827',
    display: 'flex', justifyContent: 'space-around',
    flexWrap: 'wrap', padding: '20px 6vw',
    gap: '16px', position: 'relative', zIndex: 1,
  },
  statItem: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', gap: '2px',
  },
  statIcon: { fontSize: '20px' },
  statVal: { fontSize: '18px', fontWeight: 800, color: '#fff' },
  statLbl: { fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.05em' },
}