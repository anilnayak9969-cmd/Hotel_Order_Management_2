import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const STEPS = [
  { icon: '✅', label: 'Order Placed',       sub: 'We received your order',         time: '0 min' },
  { icon: '👨‍🍳', label: 'Preparing Food',    sub: 'Restaurant is cooking',          time: '8 min' },
  { icon: '🛵', label: 'Rider Assigned',     sub: 'Rider heading to pickup',        time: '15 min' },
  { icon: '📦', label: 'Out for Delivery',   sub: 'Rider on the way to you',        time: '22 min' },
  { icon: '🎉', label: 'Delivered!',         sub: 'Enjoy your meal!',               time: '30 min' },
]

function MapView({ step }) {
  const riderLat = 19.05 + step * 0.004
  const riderLng = 72.84 + step * 0.003
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${riderLng - 0.02},${riderLat - 0.02},${riderLng + 0.02},${riderLat + 0.02}&layer=mapnik&marker=${riderLat},${riderLng}`

  return (
    <div style={{ borderRadius: '20px', overflow: 'hidden', height: '280px', position: 'relative', border: '1px solid #F3F4F6' }}>
      <iframe
        src={mapUrl}
        width="100%" height="100%"
        style={{ border: 'none', display: 'block' }}
        title="Live Order Tracking Map"
      />
      <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#fff', borderRadius: '10px', padding: '8px 14px', boxShadow: '0 4px 12px rgba(0,0,0,0.12)', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', animation: 'pulse 1.4s ease-in-out infinite' }} />
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>🛵 Rider Live</span>
      </div>
      <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#FF3D00', color: '#fff', borderRadius: '10px', padding: '6px 12px', fontSize: '12px', fontWeight: 800 }}>
        ETA: {Math.max(0, 30 - step * 6)} min
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  )
}

export default function TrackOrderPage() {
  const { orderId } = useParams()
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStep(p => p < STEPS.length - 1 ? p + 1 : p), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', fontFamily: "'Sora',sans-serif" }}>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}} @keyframes stepPop{0%{transform:scale(0);}70%{transform:scale(1.2);}100%{transform:scale(1);}}`}</style>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '32px 20px' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <Link to="/orders" style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '8px 14px', textDecoration: 'none', color: '#374151', fontWeight: 600, fontSize: '14px' }}>← Back</Link>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 800, color: '#111827', margin: 0 }}>Track Order</h1>
            <p style={{ fontSize: '13px', color: '#9CA3AF', margin: 0 }}>Order #{orderId || 'FR123456'}</p>
          </div>
        </div>

        {/* Live Map */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '16px', animation: 'fadeUp 0.5s ease' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 16px 0' }}>🗺️ Live Map Tracking</h3>
          <MapView step={step} />
        </div>

        {/* Step tracker */}
        <div style={{ background: '#fff', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '16px', animation: 'fadeUp 0.5s ease 0.1s both' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 20px 0' }}>📋 Order Status</h3>
          {STEPS.map((s, i) => {
            const isDone = i < step, isActive = i === step, isPending = i > step
            return (
              <div key={i} style={{ display: 'flex', gap: '14px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: isDone ? '#10B981' : isActive ? '#FF3D00' : '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0, boxShadow: isActive ? '0 0 0 6px rgba(255,61,0,0.15)' : 'none', transition: 'all 0.4s ease' }}>
                    {isPending ? <span style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 800 }}>{i+1}</span> : s.icon}
                  </div>
                  {i < STEPS.length - 1 && <div style={{ width: '2px', flex: 1, minHeight: '28px', background: isDone ? '#10B981' : '#E5E7EB', margin: '4px 0', transition: 'background 0.4s ease' }} />}
                </div>
                <div style={{ paddingBottom: i < STEPS.length - 1 ? '20px' : '0', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: isActive ? 800 : 600, color: isPending ? '#9CA3AF' : '#111827' }}>{s.label}</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#9CA3AF' }}>{s.sub}</p>
                    </div>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', flexShrink: 0 }}>{s.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Rider card */}
        <div style={{ background: '#fff', borderRadius: '20px', padding: '18px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', display: 'flex', gap: '14px', alignItems: 'center', animation: 'fadeUp 0.5s ease 0.2s both' }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#FFF0ED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>🛵</div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: '0 0 2px', fontWeight: 800, fontSize: '15px', color: '#111827' }}>Rahul Kumar · Your Rider</p>
            <p style={{ margin: 0, fontSize: '13px', color: '#9CA3AF' }}>⭐ 4.9 · 1,234 deliveries · MH Motorcycle</p>
          </div>
          <button style={{ background: '#FF3D00', color: '#fff', border: 'none', borderRadius: '10px', padding: '10px 16px', fontWeight: 700, fontSize: '13px', cursor: 'pointer', fontFamily: "'Sora',sans-serif" }}>📞 Call</button>
        </div>
      </div>
    </div>
  )
}
