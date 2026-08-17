import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🛵', title: 'Express Delivery',
    tag: 'Core Service', color: '#FF3D00', bg: '#FFF0ED',
    desc: 'Hot food delivered in under 30 minutes. Our 200+ riders cover every corner of 50+ cities.',
    features: ['Live GPS tracking', 'Real-time ETA', 'Contactless delivery', 'Safe packaging guarantee'],
  },
  {
    icon: '🏪', title: 'Restaurant Partners',
    tag: 'For Businesses', color: '#111827', bg: '#F9FAFB',
    desc: 'Join 500+ restaurants on FoodRush. Get access to 50,000+ daily customers with zero setup fees.',
    features: ['Zero onboarding cost', 'Real-time order dashboard', 'Analytics & insights', 'Marketing support'],
  },
  {
    icon: '⭐', title: 'FoodRush Pro',
    tag: 'Subscription', color: '#FFC300', bg: '#FFFBEB',
    desc: 'Unlimited free delivery, exclusive member deals and priority support for just ₹99/month.',
    features: ['Unlimited free delivery', 'Early access to offers', '2x reward points', '24/7 priority support'],
  },
  {
    icon: '🎁', title: 'Catering & Bulk Orders',
    tag: 'Enterprise', color: '#10B981', bg: '#ECFDF5',
    desc: 'Office lunches, events and parties made easy. Schedule bulk orders up to 7 days in advance.',
    features: ['Custom menu planning', 'Dedicated account manager', 'Scheduled delivery', 'Invoice & GST billing'],
  },
  {
    icon: '☁️', title: 'Cloud Kitchen Hub',
    tag: 'For Chefs', color: '#8B5CF6', bg: '#F5F3FF',
    desc: 'Launch your cloud kitchen with zero real estate cost. Use our kitchen infrastructure and customer base.',
    features: ['Shared kitchen spaces', 'FoodRush brand support', 'Built-in customer base', 'Revenue split model'],
  },
  {
    icon: '💳', title: 'FoodRush Pay',
    tag: 'Payments', color: '#EC4899', bg: '#FDF2F8',
    desc: 'One tap checkout with UPI, cards, wallets or cash. Split bills with friends in seconds.',
    features: ['UPI & card support', 'Bill splitting', 'Cashback rewards', '100% secure checkout'],
  },
]

const plans = [
  {
    name: 'Free', price: '₹0', period: '/month', color: '#6B7280', highlight: false,
    perks: ['5 free deliveries/month', 'Standard support', 'Basic rewards', 'Access to all restaurants'],
  },
  {
    name: 'Pro', price: '₹99', period: '/month', color: '#FF3D00', highlight: true,
    perks: ['Unlimited free delivery', 'Priority 24/7 support', '2x reward points', 'Exclusive member deals', 'Early access to offers'],
  },
  {
    name: 'Business', price: '₹499', period: '/month', color: '#111827', highlight: false,
    perks: ['Everything in Pro', 'Bulk order scheduling', 'GST billing', 'Dedicated account manager', 'Team accounts (5 users)'],
  },
]

function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div style={{ background: '#FAFAF8', fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);} }
        .svc-card { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
        .svc-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(0,0,0,0.1) !important; }
        .plan-card { transition: transform 0.25s ease; cursor: pointer; }
        .plan-card:hover { transform: translateY(-6px); }
        .feature-check { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
      `}</style>

      {/* Hero */}
      <section style={sv.hero}>
        <div style={sv.blob1} />
        <div style={sv.blob2} />
        <div style={sv.heroInner}>
          <span style={sv.eyebrow}>⚡ What We Offer</span>
          <h1 style={sv.heroTitle}>
            Everything you need<br />
            <span style={sv.accent}>in one platform</span>
          </h1>
          <p style={sv.heroSub}>
            From lightning-fast delivery to cloud kitchens — FoodRush is the complete food ecosystem for customers, restaurants and riders.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/register" style={sv.heroCta}>Get Started Free →</Link>
            <Link to="/contact" style={sv.heroCtaOut}>Talk to Sales</Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={sv.section}>
        <div style={sv.sHeader}>
          <span style={sv.eyebrowDark}>🧩 Our Services</span>
          <h2 style={sv.sTitle}>Six ways FoodRush<br /><span style={sv.accent}>works for you</span></h2>
        </div>
        <div style={sv.grid}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="svc-card"
              onClick={() => setActiveService(i)}
              style={{
                ...sv.card,
                background: activeService === i ? svc.color : '#fff',
                border: `2px solid ${activeService === i ? svc.color : '#F3F4F6'}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ ...sv.iconBox, background: activeService === i ? 'rgba(255,255,255,0.2)' : svc.bg }}>
                  <span style={{ fontSize: '28px' }}>{svc.icon}</span>
                </div>
                <span style={{
                  ...sv.tag,
                  background: activeService === i ? 'rgba(255,255,255,0.2)' : svc.bg,
                  color: activeService === i ? '#fff' : svc.color,
                }}>{svc.tag}</span>
              </div>
              <h3 style={{ ...sv.cardTitle, color: activeService === i ? '#fff' : '#111827' }}>{svc.title}</h3>
              <p style={{ ...sv.cardDesc, color: activeService === i ? 'rgba(255,255,255,0.8)' : '#6B7280' }}>{svc.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                {svc.features.map(f => (
                  <div key={f} className="feature-check">
                    <span style={{
                      width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                      background: activeService === i ? 'rgba(255,255,255,0.25)' : svc.bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px',
                    }}>✓</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: activeService === i ? 'rgba(255,255,255,0.9)' : '#374151' }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing plans */}
      <section style={{ ...sv.section, background: '#111827' }}>
        <div style={sv.sHeader}>
          <span style={{ ...sv.eyebrowDark, background: 'rgba(255,61,0,0.2)', color: '#FF6B35' }}>💳 Pricing</span>
          <h2 style={{ ...sv.sTitle, color: '#F9FAFB' }}>Simple, transparent<br /><span style={sv.accent}>pricing for all</span></h2>
        </div>
        <div style={sv.plansGrid}>
          {plans.map(plan => (
            <div
              key={plan.name}
              className="plan-card"
              style={{
                ...sv.planCard,
                background: plan.highlight ? '#FF3D00' : '#1F2937',
                border: plan.highlight ? '2px solid #FF3D00' : '2px solid #374151',
                transform: plan.highlight ? 'scale(1.04)' : 'none',
                boxShadow: plan.highlight ? '0 24px 60px rgba(255,61,0,0.35)' : '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              {plan.highlight && (
                <div style={sv.popularBadge}>🔥 Most Popular</div>
              )}
              <h3 style={{ ...sv.planName, color: '#fff' }}>{plan.name}</h3>
              <div style={sv.priceRow}>
                <span style={{ ...sv.price, color: plan.highlight ? '#fff' : '#F9FAFB' }}>{plan.price}</span>
                <span style={{ fontSize: '14px', color: plan.highlight ? 'rgba(255,255,255,0.7)' : '#6B7280' }}>{plan.period}</span>
              </div>
              <div style={{ margin: '24px 0' }}>
                {plan.perks.map(p => (
                  <div key={p} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{
                      width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                      background: plan.highlight ? 'rgba(255,255,255,0.25)' : '#374151',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', color: '#fff',
                    }}>✓</span>
                    <span style={{ fontSize: '14px', color: plan.highlight ? 'rgba(255,255,255,0.9)' : '#9CA3AF', fontWeight: 600 }}>
                      {p}
                    </span>
                  </div>
                ))}
              </div>
              <Link to="/register" style={{
                display: 'block', textAlign: 'center', textDecoration: 'none',
                padding: '14px', borderRadius: '12px', fontWeight: 700, fontSize: '15px',
                background: plan.highlight ? '#fff' : '#FF3D00',
                color: plan.highlight ? '#FF3D00' : '#fff',
                boxShadow: plan.highlight ? '0 4px 16px rgba(0,0,0,0.15)' : '0 4px 16px rgba(255,61,0,0.3)',
              }}>
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={sv.ctaSection}>
        <div style={sv.ctaBlob} />
        <h2 style={sv.ctaTitle}>Questions about our services?</h2>
        <p style={sv.ctaSub}>Our team is here to help you choose the right plan for your needs.</p>
        <Link to="/contact" style={sv.ctaBtn}>Contact Us →</Link>
      </section>
    </div>
  )
}

const sv = {
  hero: {
    background: '#111827', minHeight: '80vh', position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', padding: '120px 6vw 80px',
  },
  blob1: {
    position: 'absolute', top: '-100px', right: '-80px', width: '500px', height: '500px',
    borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,0,0.2) 0%, transparent 70%)', pointerEvents: 'none',
  },
  blob2: {
    position: 'absolute', bottom: '-60px', left: '30%', width: '350px', height: '350px',
    borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,195,0,0.1) 0%, transparent 70%)', pointerEvents: 'none',
  },
  heroInner: { position: 'relative', zIndex: 1, maxWidth: '660px' },
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
    fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 800, color: '#F9FAFB',
    lineHeight: 1.08, margin: '0 0 24px 0', letterSpacing: '-0.03em',
  },
  accent: { color: '#FF3D00', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' },
  heroSub: { fontSize: '17px', color: '#9CA3AF', lineHeight: 1.75, marginBottom: '36px', maxWidth: '520px' },
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
  section: { padding: '80px 6vw', background: '#FAFAF8' },
  sHeader: { textAlign: 'center', marginBottom: '48px' },
  sTitle: { fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#111827', lineHeight: 1.1, margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', maxWidth: '1280px', margin: '0 auto' },
  card: { borderRadius: '22px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' },
  iconBox: { width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  tag: { borderRadius: '8px', padding: '4px 12px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.05em' },
  cardTitle: { fontSize: '20px', fontWeight: 800, margin: '0 0 10px 0' },
  cardDesc: { fontSize: '14px', lineHeight: 1.7, margin: 0 },
  plansGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' },
  planCard: { borderRadius: '24px', padding: '36px', position: 'relative' },
  popularBadge: {
    position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
    background: '#111827', color: '#fff', borderRadius: '999px',
    padding: '5px 18px', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap',
  },
  planName: { fontSize: '20px', fontWeight: 800, margin: '0 0 12px 0' },
  priceRow: { display: 'flex', alignItems: 'baseline', gap: '6px' },
  price: { fontSize: '44px', fontWeight: 800, letterSpacing: '-0.03em' },
  ctaSection: {
    background: '#FF3D00', padding: '80px 6vw', textAlign: 'center', position: 'relative', overflow: 'hidden',
  },
  ctaBlob: {
    position: 'absolute', top: '-80px', left: '-60px', width: '400px', height: '400px',
    borderRadius: '50%', background: 'rgba(255,255,255,0.1)', pointerEvents: 'none',
  },
  ctaTitle: { fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', margin: '0 0 14px 0', position: 'relative', zIndex: 1 },
  ctaSub: { fontSize: '17px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', position: 'relative', zIndex: 1 },
  ctaBtn: {
    display: 'inline-block', background: '#111827', color: '#fff',
    padding: '14px 36px', borderRadius: '12px', fontWeight: 700, fontSize: '15px',
    textDecoration: 'none', position: 'relative', zIndex: 1,
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
}

export default Services