import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STEPS = [
  { icon: '✅', label: 'Order Placed',      sub: 'We received your order',          time: '0s' },
  { icon: '👨‍🍳', label: 'Preparing Your Food', sub: 'The restaurant is cooking',        time: '2 min' },
  { icon: '🛵', label: 'Rider Assigned',    sub: 'Your rider is heading to pickup',  time: '8 min' },
  { icon: '📦', label: 'Out for Delivery',  sub: 'Rider is on the way to you',       time: '15 min' },
  { icon: '🎉', label: 'Delivered!',        sub: 'Enjoy your meal!',                 time: '28 min' },
]

export default function OrderSuccessPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const orderId = `FR${Math.floor(100000 + Math.random() * 900000)}`

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentStep(p => p < STEPS.length - 1 ? p + 1 : p)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @keyframes bounce {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-12px);}
        }
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
        @keyframes stepPop{0%{transform:scale(0);}70%{transform:scale(1.2);}100%{transform:scale(1);}}
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .step-active { animation: stepPop 0.4s ease; }
        .rider-bounce { animation: bounce 1.5s ease-in-out infinite; }
      `}</style>

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Success card */}
        <div style={{
          background: '#fff', borderRadius: '24px', padding: '40px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)', textAlign: 'center',
          marginBottom: '20px', animation: 'fadeUp 0.5s ease',
        }}>
          <div className="rider-bounce" style={{ fontSize: '72px', marginBottom: '16px' }}>🎉</div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0' }}>
            Order Placed Successfully!
          </h1>
          <p style={{ color: '#6B7280', fontSize: '15px', margin: '0 0 20px 0' }}>
            Your delicious food is on its way 🍽️
          </p>
          <div style={{
            display: 'inline-flex', gap: '24px', background: '#F9FAFB',
            borderRadius: '14px', padding: '16px 24px',
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 2px', fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.08em' }}>ORDER ID</p>
              <p style={{ margin: 0, fontWeight: 800, fontSize: '16px', color: '#FF3D00' }}>{orderId}</p>
            </div>
            <div style={{ width: '1px', background: '#E5E7EB' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 2px', fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.08em' }}>ETA</p>
              <p style={{ margin: 0, fontWeight: 800, fontSize: '16px', color: '#111827' }}>28 minutes</p>
            </div>
            <div style={{ width: '1px', background: '#E5E7EB' }} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 2px', fontSize: '11px', color: '#9CA3AF', letterSpacing: '0.08em' }}>STATUS</p>
              <p style={{ margin: 0, fontWeight: 800, fontSize: '14px', color: '#10B981' }}>🟢 Live</p>
            </div>
          </div>
        </div>

        {/* Live tracker */}
        <div style={{
          background: '#fff', borderRadius: '24px', padding: '32px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)', marginBottom: '20px',
          animation: 'fadeUp 0.5s ease 0.1s both',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', margin: '0 0 28px 0' }}>
            🗺️ Live Order Tracking
          </h3>

          {STEPS.map((step, i) => {
            const isDone    = i < currentStep
            const isActive  = i === currentStep
            const isPending = i > currentStep

            return (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < STEPS.length - 1 ? '0' : '0' }}>
                {/* Left — icon + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    className={isActive ? 'step-active' : ''}
                    style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      background: isDone ? '#10B981' : isActive ? '#FF3D00' : '#F3F4F6',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px', flexShrink: 0,
                      boxShadow: isActive ? '0 0 0 6px rgba(255,61,0,0.15)' : 'none',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {isPending ? <span style={{ fontSize: '14px', color: '#9CA3AF', fontWeight: 800 }}>{i + 1}</span> : step.icon}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: '2px', flex: 1, minHeight: '32px', background: '#E5E7EB', margin: '4px 0', position: 'relative', overflow: 'hidden' }}>
                      {isDone && <div style={{ position: 'absolute', inset: 0, background: '#10B981' }} />}
                      {isActive && <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0,
                        background: '#FF3D00', animation: 'progressFill 3s linear forwards',
                      }} />}
                    </div>
                  )}
                </div>

                {/* Right — text */}
                <div style={{ paddingBottom: i < STEPS.length - 1 ? '24px' : '0', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{
                        margin: '0 0 2px',
                        fontSize: '15px', fontWeight: isActive ? 800 : 600,
                        color: isPending ? '#9CA3AF' : '#111827',
                      }}>{step.label}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#9CA3AF' }}>{step.sub}</p>
                    </div>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', flexShrink: 0 }}>{step.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Rider info */}
        <div style={{
          background: '#fff', borderRadius: '20px', padding: '20px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)', marginBottom: '20px',
          display: 'flex', gap: '16px', alignItems: 'center',
          animation: 'fadeUp 0.5s ease 0.2s both',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: '#FFF0ED', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px', flexShrink: 0,
          }}>🛵</div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: '0 0 2px', fontWeight: 800, fontSize: '15px', color: '#111827' }}>
              Rahul Kumar · Your Rider
            </p>
            <p style={{ margin: 0, fontSize: '13px', color: '#9CA3AF' }}>
              ⭐ 4.9 rating · 1,234 deliveries
            </p>
          </div>
          <button style={{
            background: '#FF3D00', color: '#fff', border: 'none',
            borderRadius: '10px', padding: '10px 18px',
            fontWeight: 700, fontSize: '13px', cursor: 'pointer',
            fontFamily: "'Sora', sans-serif",
          }}>📞 Call</button>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', animation: 'fadeUp 0.5s ease 0.3s both' }}>
          <Link to="/" style={{
            flex: 1, textAlign: 'center', padding: '14px',
            background: '#111827', color: '#fff', borderRadius: '14px',
            fontWeight: 700, fontSize: '14px', textDecoration: 'none',
          }}>🏠 Back to Home</Link>
          <Link to="/search" style={{
            flex: 1, textAlign: 'center', padding: '14px',
            background: '#FFF0ED', color: '#FF3D00', borderRadius: '14px',
            fontWeight: 700, fontSize: '14px', textDecoration: 'none',
            border: '2px solid #FDDCB5',
          }}>🍽️ Order Again</Link>
        </div>
      </div>
    </div>
  )
}