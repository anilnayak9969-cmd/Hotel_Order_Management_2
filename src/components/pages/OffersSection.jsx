import React, { useRef } from 'react'

const offers = [
  {
    label: '50% OFF', sub: 'Up to ₹100', detail: 'Use code FIRST50',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80',
    color: '#FF3D00',
  },
  {
    label: 'FREE Delivery', sub: 'On orders above ₹199', detail: 'All day today',
    img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80',
    color: '#10B981',
  },
  {
    label: '₹60 OFF', sub: 'Use code FEAST', detail: 'Min. order ₹299',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80',
    color: '#F59E0B',
  },
  {
    label: '2X Points', sub: 'Every weekend', detail: 'FoodRush Pro members',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
    color: '#8B5CF6',
  },
  {
    label: 'NEW USER', sub: 'Flat ₹125 off', detail: 'First order only',
    img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80',
    color: '#EC4899',
  },
]

function OffersSection() {
  const ref = useRef(null)
  const scroll = dir => ref.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })

  return (
    <section style={o.section}>
      <style>{`
        .offer-card:hover { transform: translateY(-4px) scale(1.02); }
        .offer-card { transition: transform 0.25s ease; cursor: pointer; }
        .o-arrow:hover { background: #FF3D00 !important; color: #fff !important; }
      `}</style>

      <div style={o.inner}>
        <div style={o.header}>
          <h2 style={o.title}>🔥 Best Offers For You</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="o-arrow" onClick={() => scroll(-1)} style={o.arrow}>←</button>
            <button className="o-arrow" onClick={() => scroll(1)}  style={o.arrow}>→</button>
          </div>
        </div>

        <div ref={ref} style={o.carousel} className="scroll-hide">
          {offers.map(offer => (
            <div key={offer.label} className="offer-card" style={o.card}>
              <div style={o.imgWrap}>
                <img src={offer.img} alt={offer.label} style={o.img}
                  onError={e => { e.target.src = `https://via.placeholder.com/280x160/${offer.color.slice(1)}/fff?text=Offer` }} />
                <div style={{ ...o.offerOverlay, background: `linear-gradient(135deg, ${offer.color}EE, ${offer.color}99)` }}>
                  <p style={o.offerLabel}>{offer.label}</p>
                  <p style={o.offerSub}>{offer.sub}</p>
                </div>
              </div>
              <div style={o.cardFooter}>
                <span style={o.offerDetail}>{offer.detail}</span>
                <span style={{ ...o.tag, background: offer.color + '18', color: offer.color }}>Grab Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const o = {
  section: { padding: '32px 0', background: '#FAFAF8', borderTop: '1px solid #F3F4F6' },
  inner: { maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' },
  header: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: '20px',
  },
  title: { fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 800, color: '#1C1C1C', margin: 0 },
  arrow: {
    width: '34px', height: '34px', borderRadius: '50%',
    background: '#F3F4F6', border: 'none', cursor: 'pointer',
    fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.2s',
  },
  carousel: { display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '4px' },
  card: {
    minWidth: '240px', borderRadius: '16px', overflow: 'hidden',
    background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
    border: '1px solid #F3F4F6',
  },
  imgWrap: { position: 'relative', height: '150px', overflow: 'hidden' },
  img: { width: '100%', height: '100%', objectFit: 'cover' },
  offerOverlay: {
    position: 'absolute', inset: 0,
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '20px',
  },
  offerLabel: { fontSize: '22px', fontWeight: 900, color: '#fff', margin: '0 0 4px 0', letterSpacing: '-0.01em' },
  offerSub: { fontSize: '13px', color: 'rgba(255,255,255,0.9)', margin: 0, fontWeight: 600 },
  cardFooter: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '12px 14px',
  },
  offerDetail: { fontSize: '12px', color: '#6B7280', fontWeight: 600 },
  tag: { borderRadius: '6px', padding: '3px 10px', fontSize: '11px', fontWeight: 800 },
}

export default OffersSection