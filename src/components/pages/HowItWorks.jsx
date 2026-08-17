import React, { useEffect, useRef, useState } from 'react'

const steps = [
  { n: '01', icon: '📍', title: 'Drop your pin', desc: 'Tell us where you are. We instantly unlock hundreds of restaurants delivering to your exact location.', color: '#FF3D00', light: '#FFF0ED' },
  { n: '02', icon: '🍽️', title: 'Build your plate', desc: 'Scroll, drool, decide. Pick dishes, tweak portions, add extras — your order, your rules.', color: '#FFC300', light: '#FFFBEB' },
  { n: '03', icon: '💳', title: 'Pay in a tap', desc: 'UPI, card, wallet or cash. One tap checkout. Your payment is 100% safe and encrypted.', color: '#10B981', light: '#ECFDF5' },
  { n: '04', icon: '🛵', title: 'Watch it arrive', desc: 'Live GPS map. See your rider move in real time. Hot food at your door — guaranteed under 30 min.', color: '#8B5CF6', light: '#F5F3FF' },
]

function HowItWorks() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % steps.length), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={s.section}>
      <style>{`
        @keyframes moveDot {
          0%   { left: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes bounceIn {
          0%   { transform: scale(0.5); opacity: 0; }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideRight {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .step-card { transition: all 0.35s ease; }
        .step-card:hover { transform: translateY(-8px) scale(1.02); }
      `}</style>

      {/* Header */}
      <div style={s.header}>
        <p style={s.eyebrow}>⚡ Super Simple</p>
        <h2 style={s.title}>From craving to<br /><span style={s.titleAccent}>your doorstep</span></h2>
        <p style={s.sub}>Four tiny steps. One huge flavour payoff.</p>
      </div>

      {/* Timeline road */}
      <div style={s.roadWrap}>
        <div style={s.road}>
          <div style={s.roadLine} />
          <div style={s.travelDot} />
          {steps.map((step, i) => (
            <div key={i} style={s.roadStop}>
              <div
                className="step-card"
                onClick={() => setActive(i)}
                style={{
                  ...s.stopCircle,
                  background: active === i ? step.color : '#1F2937',
                  border: `3px solid ${step.color}`,
                  boxShadow: active === i ? `0 0 0 8px ${step.color}22` : 'none',
                  transform: active === i ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ fontSize: '24px' }}>{step.icon}</span>
              </div>
              <span style={{ ...s.stopNum, color: step.color }}>{step.n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Active step detail */}
      <div style={s.detailWrap}>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              ...s.detailCard,
              display: active === i ? 'flex' : 'none',
              borderLeft: `4px solid ${step.color}`,
              background: step.light,
              animation: 'bounceIn 0.4s ease forwards',
            }}
          >
            <div style={{ ...s.detailIcon, background: step.color }}>
              <span style={{ fontSize: '40px' }}>{step.icon}</span>
            </div>
            <div>
              <div style={s.detailMeta}>
                <span style={{ ...s.detailNum, color: step.color }}>Step {step.n}</span>
              </div>
              <h3 style={s.detailTitle}>{step.title}</h3>
              <p style={s.detailDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Step dots nav */}
      <div style={s.dots}>
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              ...s.dot,
              background: active === i ? step.color : '#E5E7EB',
              width: active === i ? '32px' : '10px',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div style={s.progressWrap}>
        {steps.map((step, i) => (
          <div key={i} style={s.progressSegment}>
            <div style={{
              ...s.progressFill,
              background: step.color,
              width: i <= active ? '100%' : '0%',
              transition: 'width 0.5s ease',
            }} />
          </div>
        ))}
      </div>
    </section>
  )
}

const s = {
  section: {
    padding: '80px 6vw', background: '#FAFAF8',
  },
  header: { textAlign: 'center', marginBottom: '60px' },
  eyebrow: {
    display: 'inline-block', background: '#FFF0ED', color: '#FF3D00',
    borderRadius: '999px', padding: '6px 18px', fontSize: '13px',
    fontWeight: 700, letterSpacing: '0.05em', marginBottom: '16px',
  },
  title: {
    fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800,
    color: '#111827', lineHeight: 1.1, margin: '0 0 12px 0',
  },
  titleAccent: { color: '#FF3D00', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' },
  sub: { fontSize: '16px', color: '#6B7280' },
  roadWrap: { display: 'flex', justifyContent: 'center', marginBottom: '48px' },
  road: {
    position: 'relative', display: 'flex',
    justifyContent: 'space-between', alignItems: 'center',
    width: '100%', maxWidth: '700px',
  },
  roadLine: {
    position: 'absolute', top: '50%', left: '40px', right: '40px',
    height: '3px', background: 'linear-gradient(90deg, #FF3D00, #FFC300, #10B981, #8B5CF6)',
    transform: 'translateY(-50%)', borderRadius: '999px',
  },
  travelDot: {
    position: 'absolute', top: '50%', left: '40px',
    width: '12px', height: '12px', background: '#fff',
    border: '2px solid #FF3D00', borderRadius: '50%',
    transform: 'translateY(-50%)',
    animation: 'moveDot 8s linear infinite',
    boxShadow: '0 0 8px #FF3D00',
  },
  roadStop: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: '10px', position: 'relative', zIndex: 1,
  },
  stopCircle: {
    width: '64px', height: '64px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  },
  stopNum: { fontSize: '12px', fontWeight: 800, letterSpacing: '0.05em' },
  detailWrap: { maxWidth: '700px', margin: '0 auto 32px', minHeight: '130px' },
  detailCard: {
    background: '#FFF0ED', borderRadius: '20px',
    padding: '28px', gap: '24px', alignItems: 'center',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
  },
  detailIcon: {
    width: '80px', height: '80px', borderRadius: '20px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  detailMeta: { marginBottom: '6px' },
  detailNum: { fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em' },
  detailTitle: { fontSize: '22px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0' },
  detailDesc: { fontSize: '15px', color: '#6B7280', lineHeight: 1.7, margin: 0 },
  dots: { display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' },
  dot: { height: '10px', borderRadius: '999px', border: 'none', cursor: 'pointer', padding: 0 },
  progressWrap: {
    display: 'flex', gap: '6px', maxWidth: '700px', margin: '0 auto',
  },
  progressSegment: {
    flex: 1, height: '4px', background: '#E5E7EB', borderRadius: '999px', overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: '999px' },
}

export default HowItWorks