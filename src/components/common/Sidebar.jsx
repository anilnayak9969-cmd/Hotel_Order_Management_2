import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contex/ThemeContext'

// ── Data ────────────────────────────────────────────────────────
const categories = [
  { icon: '🍕', label: 'Pizza',    count: '48 places' },
  { icon: '🍔', label: 'Burgers',  count: '35 places' },
  { icon: '🍜', label: 'Biryani',  count: '62 places' },
  { icon: '🌮', label: 'Wraps',    count: '24 places' },
  { icon: '🥗', label: 'Healthy',  count: '40 places' },
  { icon: '🍣', label: 'Sushi',    count: '18 places' },
  { icon: '🍦', label: 'Desserts', count: '29 places' },
  { icon: '🍗', label: 'Chicken',  count: '55 places' },
  { icon: '☕', label: 'Drinks',   count: '37 places' },
  { icon: '🥘', label: 'Thali',    count: '22 places' },
]

const quickLinks = [
  { icon: '🔥', label: 'Trending Now',         badge: 'HOT', badgeColor: '#FF3D00' },
  { icon: '⭐', label: 'Top Rated',             badge: null,  badgeColor: null },
  { icon: '⚡', label: 'Fast Delivery <20 min', badge: 'NEW', badgeColor: '#10B981' },
  { icon: '🎁', label: 'Offers & Deals',        badge: '12',  badgeColor: '#6B7280' },
  { icon: '🆓', label: 'Free Delivery',          badge: null,  badgeColor: null },
]

const accountLinks = [
  { icon: '📦', label: 'My Orders',        to: '#',         badge: null,      badgeColor: null },
  { icon: '❤️', label: 'Favourites',       to: '#',         badge: null,      badgeColor: null },
  { icon: '📍', label: 'Saved Addresses',  to: '#',         badge: null,      badgeColor: null },
  { icon: '💳', label: 'Payment Methods',  to: '#',         badge: null,      badgeColor: null },
  { icon: '⭐', label: 'FoodRush Pro',     to: '/services', badge: 'UPGRADE', badgeColor: '#FFC300' },
  { icon: '🎁', label: 'Rewards & Points', to: '#',         badge: null,      badgeColor: null },
]

const supportLinks = [
  { icon: '❓', label: 'Help & Support',  to: '/contact'  },
  { icon: '📣', label: 'Give Feedback',   to: '/contact'  },
  { icon: '🏪', label: 'Partner With Us', to: '/services' },
  { icon: '🛵', label: 'Become a Rider',  to: '/register' },
  { icon: 'ℹ️', label: 'About FoodRush',  to: '/about'    },
]

// ── Toggle (controlled) ─────────────────────────────────────────
function Toggle({ on, onToggle }) {
  return (
    <div
      onClick={e => { e.stopPropagation(); onToggle() }}
      style={{
        width: '36px', height: '20px', borderRadius: '999px',
        background: on ? '#FF3D00' : '#D1D5DB',
        position: 'relative', cursor: 'pointer',
        transition: 'background 0.25s', flexShrink: 0,
      }}
    >
      <div style={{
        position: 'absolute', top: '2px', left: '2px',
        width: '16px', height: '16px', borderRadius: '50%',
        background: '#fff',
        transform: on ? 'translateX(16px)' : 'translateX(0)',
        transition: 'transform 0.25s',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
      }} />
    </div>
  )
}

// ── Local toggle for non-global settings ────────────────────────
function LocalToggle({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn)
  return <Toggle on={on} onToggle={() => setOn(p => !p)} />
}

// ── Section heading ─────────────────────────────────────────────
function SectionTitle({ title, dark }) {
  return (
    <p style={{
      fontSize: '11px', fontWeight: 800,
      color: dark ? '#6B7280' : '#9CA3AF',
      letterSpacing: '0.1em',
      padding: '14px 20px 6px',
      margin: 0, textTransform: 'uppercase',
      fontFamily: "'Sora', sans-serif",
    }}>
      {title}
    </p>
  )
}

// ── Divider line ────────────────────────────────────────────────
function Divider({ dark }) {
  return (
    <div style={{
      height: '1px',
      background: dark ? '#374151' : '#F3F4F6',
      margin: '8px 0 0',
    }} />
  )
}

// ── Single row ──────────────────────────────────────────────────
function SideRow({ icon, label, badge, badgeColor, to, onClick, rightEl, highlight, dark }) {
  const inner = (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '11px 20px', cursor: 'pointer',
        background: highlight ? '#FFF0ED' : 'transparent',
        transition: 'background 0.15s',
      }}
    >
      <span style={{ fontSize: '18px', width: '24px', textAlign: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      <span style={{
        flex: 1, fontSize: '14px', fontWeight: 600,
        color: highlight ? '#FF3D00' : dark ? '#E5E7EB' : '#111827',
        fontFamily: "'Sora', sans-serif",
      }}>
        {label}
      </span>
      {badge ? (
        <span style={{
          background: badgeColor, color: '#fff',
          fontSize: '10px', fontWeight: 800,
          padding: '2px 8px', borderRadius: '999px',
          letterSpacing: '0.04em',
        }}>
          {badge}
        </span>
      ) : !rightEl ? (
        <span style={{ fontSize: '18px', color: '#6B7280' }}>›</span>
      ) : null}
      {rightEl}
    </div>
  )

  return (to && to !== '#')
    ? <Link to={to} style={{ textDecoration: 'none' }}>{inner}</Link>
    : inner
}

// ── Main Sidebar component ───────────────────────────────────────
function Sidebar({ isOpen, onClose }) {
  const [showAllCats, setShowAllCats] = useState(false)

  // ✅ Safe hook call — ThemeProvider must wrap the app in main.jsx
  const { darkMode, toggleDark } = useTheme()
  const d = darkMode

  const visibleCats = showAllCats ? categories : categories.slice(0, 6)

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(3px)',
          zIndex: 1040,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Panel */}
      <div style={{
        position: 'fixed', top: 0, left: 0, bottom: 0,
        width: '320px', maxWidth: '85vw',
        background: d ? '#1F2937' : '#fff',
        boxShadow: '4px 0 40px rgba(0,0,0,0.22)',
        zIndex: 1045,
        display: 'flex', flexDirection: 'column',
        fontFamily: "'Sora', sans-serif",
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
        overflowY: 'hidden',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 20px', background: '#111827', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{
              fontSize: '18px', background: '#FF3D00',
              width: '40px', height: '40px', borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>🍴</div>
            <div>
              <p style={{ fontSize: '15px', fontWeight: 700, color: '#F9FAFB', margin: 0 }}>
                Hello, sign in 👋
              </p>
              <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '2px 0 0 0' }}>
                New here?{' '}
                <Link to="/register" onClick={onClose}
                  style={{ color: '#FF3D00', fontWeight: 700, textDecoration: 'none' }}>
                  Join free →
                </Link>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
              width: '32px', height: '32px', borderRadius: '8px',
              fontSize: '16px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>

        {/* Auth buttons */}
        <div style={{
          display: 'flex', gap: '10px', padding: '14px 20px',
          borderBottom: `1px solid ${d ? '#374151' : '#F3F4F6'}`,
          flexShrink: 0,
          background: d ? '#111827' : '#FAFAF8',
        }}>
          <Link to="/login" onClick={onClose} style={{
            flex: 1, textAlign: 'center', padding: '10px',
            border: '2px solid #FF3D00', borderRadius: '10px',
            color: '#FF3D00', fontWeight: 700, fontSize: '14px',
            textDecoration: 'none', fontFamily: "'Sora', sans-serif",
          }}>Sign In</Link>
          <Link to="/register" onClick={onClose} style={{
            flex: 1, textAlign: 'center', padding: '10px',
            background: '#FF3D00', borderRadius: '10px',
            color: '#fff', fontWeight: 700, fontSize: '14px',
            textDecoration: 'none', fontFamily: "'Sora', sans-serif",
          }}>Register</Link>
        </div>

        {/* Scrollable body */}
        <div style={{ flex: 1, overflowY: 'auto' }}>

          {/* Quick Filters */}
          <SectionTitle title="⚡ Quick Filters" dark={d} />
          {quickLinks.map(q => (
            <SideRow key={q.label} icon={q.icon} label={q.label}
              badge={q.badge} badgeColor={q.badgeColor}
              onClick={onClose} dark={d} />
          ))}
          <Divider dark={d} />

          {/* Categories */}
          <SectionTitle title="🍽️ Order by Category" dark={d} />
          {visibleCats.map(cat => (
            <div key={cat.label} onClick={onClose} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '11px 20px', cursor: 'pointer',
            }}>
              <span style={{ fontSize: '20px', width: '28px', textAlign: 'center' }}>{cat.icon}</span>
              <span style={{ flex: 1, fontSize: '14px', fontWeight: 600, color: d ? '#E5E7EB' : '#111827', fontFamily: "'Sora', sans-serif" }}>
                {cat.label}
              </span>
              <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{cat.count}</span>
              <span style={{ fontSize: '18px', color: '#6B7280' }}>›</span>
            </div>
          ))}
          <button onClick={() => setShowAllCats(p => !p)} style={{
            width: '100%', padding: '10px 20px', background: 'none', border: 'none',
            color: '#FF3D00', fontSize: '13px', fontWeight: 700,
            textAlign: 'left', cursor: 'pointer', fontFamily: "'Sora', sans-serif",
          }}>
            {showAllCats ? '▲ Show less' : `▾ See all ${categories.length} categories`}
          </button>
          <Divider dark={d} />

          {/* My Account */}
          <SectionTitle title="👤 My Account" dark={d} />
          {accountLinks.map(l => (
            <SideRow key={l.label} icon={l.icon} label={l.label}
              badge={l.badge} badgeColor={l.badgeColor}
              to={l.to} onClick={onClose}
              highlight={l.badge === 'UPGRADE'} dark={d} />
          ))}
          <Divider dark={d} />

          {/* Pro Banner */}
          <div style={{ margin: '12px 16px 4px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '16px',
              background: d ? '#0D1117' : '#111827',
              borderRadius: '16px',
            }}>
              <span style={{ fontSize: '28px' }}>⭐</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 800, color: '#F9FAFB', margin: '0 0 2px 0', fontFamily: "'Sora', sans-serif" }}>
                  FoodRush Pro
                </p>
                <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0, fontFamily: "'Sora', sans-serif" }}>
                  Unlimited free delivery · ₹99/month
                </p>
              </div>
              <Link to="/services" onClick={onClose} style={{
                background: '#FF3D00', color: '#fff', padding: '8px 16px',
                borderRadius: '10px', fontWeight: 700, fontSize: '13px',
                textDecoration: 'none', flexShrink: 0,
                fontFamily: "'Sora', sans-serif",
              }}>Try Free</Link>
            </div>
          </div>
          <Divider dark={d} />

          {/* Help & More */}
          <SectionTitle title="🛎️ Help & More" dark={d} />
          {supportLinks.map(l => (
            <SideRow key={l.label} icon={l.icon} label={l.label}
              to={l.to} onClick={onClose} dark={d} />
          ))}
          <Divider dark={d} />

          {/* Settings */}
          <SectionTitle title="⚙️ Settings" dark={d} />

          {/* 🌙 Dark mode — FIXED: uses global ThemeContext */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 20px' }}>
            <span style={{ fontSize: '18px', width: '24px', textAlign: 'center' }}>
              {d ? '🌙' : '☀️'}
            </span>
            <span style={{ flex: 1, fontSize: '14px', fontWeight: 600, color: d ? '#E5E7EB' : '#111827', fontFamily: "'Sora', sans-serif" }}>
              {d ? 'Dark mode' : 'Light mode'}
            </span>
            <Toggle on={darkMode} onToggle={toggleDark} />
          </div>

          {/* 🔔 Notifications */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 20px' }}>
            <span style={{ fontSize: '18px', width: '24px', textAlign: 'center' }}>🔔</span>
            <span style={{ flex: 1, fontSize: '14px', fontWeight: 600, color: d ? '#E5E7EB' : '#111827', fontFamily: "'Sora', sans-serif" }}>
              Notifications
            </span>
            <LocalToggle defaultOn />
          </div>

          {/* 📍 Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 20px' }}>
            <span style={{ fontSize: '18px', width: '24px', textAlign: 'center' }}>📍</span>
            <span style={{ flex: 1, fontSize: '14px', fontWeight: 600, color: d ? '#E5E7EB' : '#111827', fontFamily: "'Sora', sans-serif" }}>
              Location
            </span>
            <span style={{
              fontSize: '12px', color: '#FF3D00', fontWeight: 700,
              background: d ? '#374151' : '#FFF0ED',
              padding: '3px 10px', borderRadius: '999px',
            }}>Mumbai</span>
          </div>

          <Divider dark={d} />

          <p style={{
            textAlign: 'center', fontSize: '11px', color: '#6B7280',
            padding: '14px 0 24px', margin: 0,
          }}>
            © 2026 FoodRush · v2.1.0
          </p>
        </div>
      </div>
    </>
  )
}

export default Sidebar