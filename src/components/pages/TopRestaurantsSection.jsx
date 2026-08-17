import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const restaurants = [
  {
    id: 'biryani-blues',
    name: 'Biryani Blues',
    tag: 'Biryani · Mughlai',
    time: '28 min',
    rating: '4.7',
    area: 'Connaught Place',
    offer: '50% OFF up to ₹100',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80',
  },
  {
    id: 'paradise-biryani',
    name: 'Paradise Biryani',
    tag: 'Hyderabadi · Biryani',
    time: '35 min',
    rating: '4.8',
    area: 'Secunderabad',
    offer: 'Items at ₹59',
    img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80',
  },
  {
    id: 'saravana-bhavan',
    name: 'Saravana Bhavan',
    tag: 'South Indian · Dosa',
    time: '22 min',
    rating: '4.6',
    area: 'Adyar',
    offer: 'Free delivery',
    img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80',
  },
  {
    id: 'punjab-grill',
    name: 'Punjab Grill',
    tag: 'North Indian · Punjabi',
    time: '30 min',
    rating: '4.5',
    area: 'Bandra',
    offer: '₹100 off above ₹399',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80',
  },
  {
    id: 'haldirams',
    name: "Haldiram's",
    tag: 'Sweets · Snacks · Chaat',
    time: '25 min',
    rating: '4.4',
    area: 'Chandni Chowk',
    offer: '20% OFF',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
  },
  {
    id: 'chaayos',
    name: 'Chaayos',
    tag: 'Chai · Snacks · Breakfast',
    time: '18 min',
    rating: '4.6',
    area: 'Koramangala',
    offer: 'Buy 2 Get 1 Free',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  },
  {
    id: 'barbeque-nation',
    name: 'Barbeque Nation',
    tag: 'BBQ · Grill · Buffet',
    time: '40 min',
    rating: '4.3',
    area: 'Juhu',
    offer: 'Items at ₹99',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
  },
  {
    id: 'moti-mahal',
    name: 'Moti Mahal',
    tag: 'Mughlai · Tandoor · Butter Chicken',
    time: '32 min',
    rating: '4.7',
    area: 'Daryaganj',
    offer: '30% OFF on first order',
    img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80',
  },
]

function TopRestaurantsSection() {
  const ref      = useRef(null)
  const navigate = useNavigate()

  const scroll = dir =>
    ref.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })

  return (
    <section style={t.section}>
      <style>{`
        .rest-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }
        .rest-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.14) !important;
        }
        .rest-img { transition: transform 0.35s ease; }
        .rest-card:hover .rest-img { transform: scale(1.05); }
        .t-arrow:hover {
          background: #FF3D00 !important;
          color: #fff !important;
          border-color: #FF3D00 !important;
        }
        .scroll-hide::-webkit-scrollbar { display: none; }
        .scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div style={t.inner}>
        {/* Header */}
        <div style={t.header}>
          <div>
            <h2 style={t.title}>Top restaurant chains in Mumbai</h2>
            <p style={t.sub}>Order from India's most-loved brands, delivered fast</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="t-arrow" onClick={() => scroll(-1)} style={t.arrow}>←</button>
            <button className="t-arrow" onClick={() => scroll(1)}  style={t.arrow}>→</button>
          </div>
        </div>

        {/* Scrollable carousel */}
        <div ref={ref} className="scroll-hide" style={t.carousel}>
          {restaurants.map(r => (
            <div
              key={r.id}
              className="rest-card"
              style={t.card}
              onClick={() => navigate(`/restaurant/${r.id}`)}
            >
              {/* Image */}
              <div style={t.imgWrap}>
                <img
                  className="rest-img"
                  src={r.img}
                  alt={r.name}
                  style={t.img}
                  onError={e => {
                    e.target.src = `https://via.placeholder.com/280x180/FF3D00/fff?text=${r.name}`
                  }}
                />
                {/* Offer badge at bottom of image */}
                <div style={t.offerBadge}>{r.offer}</div>
              </div>

              {/* Info */}
              <div style={t.info}>
                <h3 style={t.name}>{r.name}</h3>
                <div style={t.metaRow}>
                  <span style={t.rating}>⭐ {r.rating}</span>
                  <span style={t.dot}>·</span>
                  <span style={t.timeTxt}>🕐 {r.time}</span>
                </div>
                <p style={t.tag}>{r.tag}</p>
                <p style={t.area}>📍 {r.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const t = {
  section: {
    padding: '48px 0 32px',
    background: '#fff',
    borderTop: '1px solid #F3F4F6',
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 6vw',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '24px',
  },
  title: {
    fontSize: 'clamp(18px, 2.5vw, 26px)',
    fontWeight: 800,
    color: '#1C1C1C',
    margin: '0 0 4px 0',
  },
  sub: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: 0,
  },
  arrow: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#fff',
    border: '1px solid #E5E7EB',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    fontFamily: 'inherit',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  carousel: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    paddingBottom: '8px',
  },
  card: {
    minWidth: '240px',
    maxWidth: '240px',
    background: '#fff',
    borderRadius: '18px',
    border: '1px solid #F3F4F6',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
  },
  imgWrap: {
    position: 'relative',
    height: '160px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  offerBadge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.78) 0%, transparent 100%)',
    color: '#fff',
    fontSize: '13px',
    fontWeight: 800,
    padding: '20px 12px 10px',
    letterSpacing: '0.02em',
  },
  info: {
    padding: '14px',
  },
  name: {
    fontSize: '15px',
    fontWeight: 800,
    color: '#1C1C1C',
    margin: '0 0 6px 0',
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '4px',
  },
  rating: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#1C1C1C',
  },
  dot: { color: '#D1D5DB' },
  timeTxt: {
    fontSize: '13px',
    color: '#6B7280',
  },
  tag: {
    fontSize: '12px',
    color: '#9CA3AF',
    margin: '0 0 2px 0',
  },
  area: {
    fontSize: '12px',
    color: '#9CA3AF',
    margin: 0,
  },
}

export default TopRestaurantsSection