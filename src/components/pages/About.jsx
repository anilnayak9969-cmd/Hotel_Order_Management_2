import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { val: '500+', label: 'Restaurant Partners', icon: '🏪' },
  { val: '50K+', label: 'Daily Orders', icon: '📦' },
  { val: '200+', label: 'Delivery Riders', icon: '🛵' },
  { val: '4.8★', label: 'Average Rating', icon: '⭐' },
]

const team = [
  { name: 'Anil Nayak', role: 'CEO & Co-Founder', emoji: '👨‍💼', bio: '10+ years in food-tech. Ex-Zomato product lead.' },
  { name: 'Priyanka .V', role: 'CTO & Co-Founder', emoji: '👩‍💻', bio: 'Full-stack architect. Built platforms for 1M+ users.' },
  { name: 'Rohit Sharma', role: 'Head of Operations', emoji: '👨‍🔧', bio: 'Logistics expert. Manages our 200+ rider network.' },
  { name: 'Sneha Kapoor', role: 'Head of Design', emoji: '👩‍🎨', bio: 'UX designer obsessed with delightful food experiences.' },
]

const milestones = [
  { year: '2021', title: 'Founded in Mumbai', desc: 'Started with 10 restaurants and a dream to fix food delivery.' },
  { year: '2022', title: '10K orders milestone', desc: 'Expanded to Bangalore and Delhi. Crossed 10,000 monthly orders.' },
  { year: '2023', title: 'Series A — ₹50Cr', desc: 'Raised Series A funding. Launched our rider app and live tracking.' },
  { year: '2024', title: '50+ cities live', desc: 'Now operating across 50+ Indian cities with 500+ restaurant partners.' },
  { year: '2025', title: 'FoodRush Pro launch', desc: 'Launched subscription plan with unlimited free delivery and rewards.' },
]

function About() {
  return (
    <div style={{ background: '#FAFAF8', fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .team-card { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
        .team-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(0,0,0,0.12) !important; }
        .milestone-dot { transition: transform 0.2s ease; }
        .milestone-row:hover .milestone-dot { transform: scale(1.4); }
      `}</style>

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroBlob1} />
        <div style={s.heroBlob2} />
        <div style={s.heroInner}>
          <span style={s.eyebrow}>🍴 Our Story</span>
          <h1 style={s.heroTitle}>
            We're on a mission to<br />
            <span style={s.accent}>feed every Indian</span><br />
            faster & better
          </h1>
          <p style={s.heroSub}>
            FoodRush started with a simple belief — great food should reach anyone, anywhere, in under 30 minutes. Today we're India's fastest-growing food delivery platform.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/services" style={s.heroCta}>Explore Services →</Link>
            <Link to="/contact" style={s.heroCtaOut}>Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={s.statsSection}>
        <div style={s.statsGrid}>
          {stats.map(stat => (
            <div key={stat.label} style={s.statCard} className="fade-up">
              <span style={{ fontSize: '36px', marginBottom: '12px', display: 'block' }}>{stat.icon}</span>
              <p style={s.statVal}>{stat.val}</p>
              <p style={s.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={s.mvSection}>
        <div style={s.mvGrid}>
          <div style={{ ...s.mvCard, background: '#111827' }}>
            <span style={s.mvIcon}>🎯</span>
            <h3 style={{ ...s.mvTitle, color: '#F9FAFB' }}>Our Mission</h3>
            <p style={{ ...s.mvDesc, color: '#9CA3AF' }}>
              To make restaurant-quality food accessible to every Indian home — delivered fresh, fast and at fair prices, powered by technology that puts people first.
            </p>
          </div>
          <div style={{ ...s.mvCard, background: '#FF3D00' }}>
            <span style={s.mvIcon}>🚀</span>
            <h3 style={{ ...s.mvTitle, color: '#fff' }}>Our Vision</h3>
            <p style={{ ...s.mvDesc, color: 'rgba(255,255,255,0.8)' }}>
              To become South Asia's most-loved food platform — where every meal ordered is a joyful, reliable and sustainable experience for customers, restaurants and riders alike.
            </p>
          </div>
          <div style={{ ...s.mvCard, background: '#FFF7ED', border: '2px solid #FDDCB5' }}>
            <span style={s.mvIcon}>💛</span>
            <h3 style={{ ...s.mvTitle, color: '#111827' }}>Our Values</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Speed without compromise', 'Respect for every partner', 'Radical transparency', 'Community first'].map(v => (
                <div key={v} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: '#FF3D00', fontWeight: 800 }}>→</span>
                  <span style={{ fontSize: '14px', color: '#374151', fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={s.timelineSection}>
        <div style={s.tlHeader}>
          <span style={s.eyebrowDark}>📅 Our Journey</span>
          <h2 style={s.sectionTitle}>From idea to India's fastest<br /><span style={s.accent}>delivery platform</span></h2>
        </div>
        <div style={s.timeline}>
          {milestones.map((m, i) => (
            <div key={m.year} className="milestone-row" style={s.milestoneRow}>
              <div style={s.mlLeft}>
                <span style={s.mlYear}>{m.year}</span>
              </div>
              <div style={s.mlCenter}>
                <div className="milestone-dot" style={{
                  ...s.mlDot,
                  background: i === milestones.length - 1 ? '#FF3D00' : '#111827',
                  boxShadow: i === milestones.length - 1 ? '0 0 0 6px rgba(255,61,0,0.2)' : 'none',
                }} />
                {i < milestones.length - 1 && <div style={s.mlLine} />}
              </div>
              <div style={s.mlRight}>
                <h4 style={s.mlTitle}>{m.title}</h4>
                <p style={s.mlDesc}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={s.teamSection}>
        <div style={s.tlHeader}>
          <span style={s.eyebrowDark}>👥 The Team</span>
          <h2 style={s.sectionTitle}>Built by people who<br /><span style={s.accent}>love food</span></h2>
        </div>
        <div style={s.teamGrid}>
          {team.map(member => (
            <div key={member.name} className="team-card" style={s.teamCard}>
              <div style={s.avatar}>{member.emoji}</div>
              <h3 style={s.memberName}>{member.name}</h3>
              <p style={s.memberRole}>{member.role}</p>
              <p style={s.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={s.ctaBanner}>
        <div style={s.ctaBlob} />
        <h2 style={s.ctaTitle}>Ready to order?</h2>
        <p style={s.ctaSub}>Join 50,000+ happy customers ordering with FoodRush every day.</p>
        <Link to="/" style={s.ctaBtn}>Order Now 🍽️</Link>
      </section>
    </div>
  )
}

const s = {
  hero: {
    background: '#111827', minHeight: '85vh', position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', padding: '120px 6vw 80px',
  },
  heroBlob1: {
    position: 'absolute', top: '-120px', right: '-80px', width: '600px', height: '600px',
    borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,0,0.2) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  heroBlob2: {
    position: 'absolute', bottom: '-60px', left: '-60px', width: '400px', height: '400px',
    borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,195,0,0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  heroInner: { position: 'relative', zIndex: 1, maxWidth: '700px' },
  eyebrow: {
    display: 'inline-block', background: 'rgba(255,61,0,0.15)', color: '#FF6B35',
    border: '1px solid rgba(255,61,0,0.3)', borderRadius: '999px',
    padding: '7px 18px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '24px',
  },
  eyebrowDark: {
    display: 'inline-block', background: '#FFF0ED', color: '#FF3D00',
    borderRadius: '999px', padding: '7px 18px', fontSize: '13px', fontWeight: 700,
    letterSpacing: '0.04em', marginBottom: '16px',
  },
  heroTitle: {
    fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, color: '#F9FAFB',
    lineHeight: 1.08, margin: '0 0 24px 0', letterSpacing: '-0.03em',
  },
  accent: { color: '#FF3D00', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' },
  heroSub: { fontSize: '17px', color: '#9CA3AF', lineHeight: 1.75, marginBottom: '36px', maxWidth: '540px' },
  heroCta: {
    display: 'inline-block', background: '#FF3D00', color: '#fff',
    padding: '14px 28px', borderRadius: '12px', fontWeight: 700, fontSize: '15px',
    textDecoration: 'none', boxShadow: '0 8px 24px rgba(255,61,0,0.35)',
  },
  heroCtaOut: {
    display: 'inline-block', background: 'transparent', color: '#D1D5DB',
    padding: '14px 28px', borderRadius: '12px', fontWeight: 700, fontSize: '15px',
    textDecoration: 'none', border: '2px solid #374151',
  },
  statsSection: { background: '#fff', padding: '64px 6vw', borderBottom: '1px solid #F3F4F6' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', maxWidth: '1280px', margin: '0 auto' },
  statCard: {
    background: '#FAFAF8', borderRadius: '20px', padding: '32px 24px',
    textAlign: 'center', border: '1px solid #F3F4F6',
    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  },
  statVal: { fontSize: '36px', fontWeight: 800, color: '#111827', margin: '0 0 6px 0' },
  statLabel: { fontSize: '14px', color: '#6B7280', margin: 0, fontWeight: 600 },
  mvSection: { padding: '80px 6vw', background: '#FAFAF8' },
  mvGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', maxWidth: '1280px', margin: '0 auto' },
  mvCard: { borderRadius: '24px', padding: '36px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' },
  mvIcon: { fontSize: '36px', display: 'block', marginBottom: '16px' },
  mvTitle: { fontSize: '22px', fontWeight: 800, margin: '0 0 14px 0' },
  mvDesc: { fontSize: '15px', lineHeight: 1.75, margin: 0 },
  timelineSection: { padding: '80px 6vw', background: '#fff' },
  tlHeader: { textAlign: 'center', marginBottom: '56px' },
  sectionTitle: {
    fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#111827',
    lineHeight: 1.1, margin: '0 0 0 0',
  },
  timeline: { maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column' },
  milestoneRow: { display: 'flex', gap: '0', alignItems: 'flex-start' },
  mlLeft: { width: '80px', flexShrink: 0, paddingTop: '6px', textAlign: 'right', paddingRight: '20px' },
  mlYear: { fontSize: '13px', fontWeight: 800, color: '#FF3D00', letterSpacing: '0.05em' },
  mlCenter: { display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 },
  mlDot: { width: '16px', height: '16px', borderRadius: '50%', flexShrink: 0 },
  mlLine: { width: '2px', flex: 1, background: '#E5E7EB', minHeight: '48px' },
  mlRight: { paddingLeft: '20px', paddingBottom: '40px' },
  mlTitle: { fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' },
  mlDesc: { fontSize: '14px', color: '#6B7280', lineHeight: 1.65, margin: 0 },
  teamSection: { padding: '80px 6vw', background: '#FAFAF8' },
  teamGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', maxWidth: '1280px', margin: '0 auto' },
  teamCard: {
    background: '#fff', borderRadius: '20px', padding: '32px 24px',
    textAlign: 'center', border: '1px solid #F3F4F6',
    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  },
  avatar: {
    fontSize: '48px', width: '80px', height: '80px',
    background: '#FFF0ED', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 16px',
  },
  memberName: { fontSize: '17px', fontWeight: 800, color: '#111827', margin: '0 0 4px 0' },
  memberRole: { fontSize: '13px', color: '#FF3D00', fontWeight: 700, margin: '0 0 12px 0' },
  memberBio: { fontSize: '13px', color: '#6B7280', lineHeight: 1.65, margin: 0 },
  ctaBanner: {
    background: '#FF3D00', padding: '80px 6vw', textAlign: 'center',
    position: 'relative', overflow: 'hidden',
  },
  ctaBlob: {
    position: 'absolute', top: '-80px', right: '-60px', width: '400px', height: '400px',
    borderRadius: '50%', background: 'rgba(255,255,255,0.1)', pointerEvents: 'none',
  },
  ctaTitle: { fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: '#fff', margin: '0 0 14px 0', position: 'relative', zIndex: 1 },
  ctaSub: { fontSize: '17px', color: 'rgba(255,255,255,0.85)', marginBottom: '36px', position: 'relative', zIndex: 1 },
  ctaBtn: {
    display: 'inline-block', background: '#111827', color: '#fff',
    padding: '16px 40px', borderRadius: '14px', fontWeight: 700, fontSize: '16px',
    textDecoration: 'none', position: 'relative', zIndex: 1,
    boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
  },
}

export default About