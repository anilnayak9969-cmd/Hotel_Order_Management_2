import React from 'react'

const reviews = [
  { name: 'Priya S.', city: 'Mumbai', stars: 5, text: 'Ordered biryani at midnight and it arrived hot in 22 minutes. Absolutely unreal service!', avatar: '👩' },
  { name: 'Rohan M.', city: 'Bangalore', stars: 5, text: 'The app is super smooth and the restaurant selection is incredible. My go-to every single day.', avatar: '👨‍💻' },
  { name: 'Ananya K.', city: 'Delhi', stars: 5, text: 'Live tracking is a game changer. I knew exactly when my food would arrive. Loved it!', avatar: '👩‍🎨' },
]

function TestimonialsSection() {
  return (
    <section style={s.section}>
      <div style={s.top}>
        <h2 style={s.title}>What our customers say</h2>
        <p style={s.sub}>50,000+ happy customers across India</p>
      </div>
      <div style={s.grid}>
        {reviews.map(r => (
          <div className="card-hover" key={r.name} style={s.card}>
            <p style={s.stars}>{'⭐'.repeat(r.stars)}</p>
            <p style={s.text}>"{r.text}"</p>
            <div style={s.person}>
              <span style={s.avatar}>{r.avatar}</span>
              <div>
                <p style={s.pname}>{r.name}</p>
                <p style={s.city}>{r.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const s = {
  section: { padding: '80px 6vw', background: '#FAFAF8' },
  top: { textAlign: 'center', marginBottom: '48px' },
  title: { fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#111827', margin: '0 0 10px 0' },
  sub: { fontSize: '15px', color: '#6B7280' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' },
  card: {
    background: '#fff', borderRadius: '20px', padding: '32px',
    border: '1px solid #F3F4F6', boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  },
  stars: { fontSize: '20px', margin: '0 0 16px 0' },
  text: { fontSize: '15px', color: '#374151', lineHeight: 1.75, margin: '0 0 24px 0', fontStyle: 'italic' },
  person: { display: 'flex', alignItems: 'center', gap: '14px' },
  avatar: {
    fontSize: '36px', width: '52px', height: '52px',
    background: '#FFF7ED', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  pname: { fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 2px 0' },
  city: { fontSize: '13px', color: '#9CA3AF', margin: 0 },
}

export default TestimonialsSection