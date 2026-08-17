import React from 'react'

function AppBannerSection() {
  return (
    <section style={s.section}>
      <div style={s.blob} />
      <div style={s.content}>
        <span style={s.eyebrow}>📱 Mobile App</span>
        <h2 style={s.title}>Order faster on the app</h2>
        <p style={s.sub}>
          Exclusive app-only deals, faster checkout, live order tracking and so much more.
          Download now and get ₹100 off your first order.
        </p>
        <div style={s.btns}>
          <button className="btn-hover" style={s.appBtn}>
            🍎 App Store
          </button>
          <button className="btn-hover" style={{ ...s.appBtn, background: '#fff', color: '#111827' }}>
            🤖 Google Play
          </button>
        </div>
        <p style={s.note}>⭐ 4.8 · 200K+ reviews · Free download</p>
      </div>
      <div style={s.visual}>
        <div style={s.phone}>
          <div style={s.phoneScreen}>
            <p style={s.phoneEmoji}>🛵</p>
            <p style={s.phoneText}>Your order is on the way!</p>
            <div style={s.progressBar}><div style={s.progress} /></div>
            <p style={s.phoneEta}>Arriving in 8 min</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const s = {
  section: {
    margin: '0 6vw 80px',
    background: '#FF3D00',
    borderRadius: '28px',
    padding: '64px 6%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(255,61,0,0.3)',
  },
  blob: {
    position: 'absolute', top: '-80px', right: '200px',
    width: '300px', height: '300px', borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)', pointerEvents: 'none',
  },
  content: { flex: '1 1 360px', position: 'relative', zIndex: 1 },
  eyebrow: {
    display: 'inline-block', background: 'rgba(255,255,255,0.2)',
    color: '#fff', borderRadius: '999px', padding: '6px 16px',
    fontSize: '13px', fontWeight: 700, marginBottom: '20px',
  },
  title: { fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', margin: '0 0 16px 0' },
  sub: { fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '440px' },
  btns: { display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '20px' },
  appBtn: {
    background: '#111827', color: '#fff',
    border: 'none', borderRadius: '14px', padding: '14px 28px',
    fontSize: '15px', fontWeight: 700, fontFamily: "'Sora', sans-serif",
  },
  note: { color: 'rgba(255,255,255,0.7)', fontSize: '13px', margin: 0 },
  visual: { flex: '0 0 auto', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 },
  phone: {
    width: '200px', height: '360px',
    background: '#111827', borderRadius: '32px',
    border: '4px solid rgba(255,255,255,0.2)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
    animation: 'float 3s ease-in-out infinite',
  },
  phoneScreen: { textAlign: 'center', padding: '20px' },
  phoneEmoji: { fontSize: '56px', margin: '0 0 12px 0', animation: 'float 2s ease-in-out infinite' },
  phoneText: { fontSize: '14px', fontWeight: 700, color: '#F9FAFB', margin: '0 0 16px 0' },
  progressBar: { background: '#374151', borderRadius: '999px', height: '6px', overflow: 'hidden', marginBottom: '8px' },
  progress: { width: '70%', height: '100%', background: '#FF3D00', borderRadius: '999px' },
  phoneEta: { fontSize: '13px', color: '#10B981', fontWeight: 700, margin: 0 },
}

export default AppBannerSection


