import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../contex/CartContext'

const restaurants = [
  {
    id: 'biryani-blues',
    name: 'Biryani Blues',
    tag: 'Biryani · Mughlai',
    time: '28 min',
    rating: '4.7',
    reviews: '5.3k',
    promo: '50% OFF',
    promoColor: '#FF3D00',
    badge: 'Trending',
    area: 'Connaught Place, Delhi',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80',
    // quick-add item for "Order Now"
    quickItem: {
      id: 'feat-bb1',
      name: 'Chicken Biryani',
      price: 249,
      img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=120&q=80',
    },
  },
  {
    id: 'saravana-bhavan',
    name: 'Saravana Bhavan',
    tag: 'South Indian · Dosa',
    time: '22 min',
    rating: '4.6',
    reviews: '8.1k',
    promo: 'Free Delivery',
    promoColor: '#10B981',
    badge: 'Top Rated',
    area: 'T. Nagar, Chennai',
    img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80',
    quickItem: {
      id: 'feat-sb1',
      name: 'Masala Dosa',
      price: 129,
      img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=120&q=80',
    },
  },
  {
    id: 'moti-mahal',
    name: 'Moti Mahal',
    tag: 'Mughlai · Butter Chicken',
    time: '32 min',
    rating: '4.8',
    reviews: '3.2k',
    promo: '₹60 OFF',
    promoColor: '#F59E0B',
    badge: 'Legendary',
    area: 'Daryaganj, Delhi',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80',
    quickItem: {
      id: 'feat-mm1',
      name: 'Butter Chicken',
      price: 299,
      img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=120&q=80',
    },
  },
  {
    id: 'chaayos',
    name: 'Chaayos',
    tag: 'Chai · Snacks · Breakfast',
    time: '18 min',
    rating: '4.6',
    reviews: '12k',
    promo: 'Buy 2 Get 1',
    promoColor: '#8B5CF6',
    badge: 'Popular',
    area: 'Koramangala, Bangalore',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
    quickItem: {
      id: 'feat-ch1',
      name: 'Masala Chai',
      price: 49,
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&q=80',
    },
  },
  {
    id: 'punjab-grill',
    name: 'Punjab Grill',
    tag: 'Punjabi · Tandoor',
    time: '30 min',
    rating: '4.5',
    reviews: '2.8k',
    promo: '20% OFF',
    promoColor: '#EC4899',
    badge: 'Premium',
    area: 'Bandra, Mumbai',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
    quickItem: {
      id: 'feat-pg1',
      name: 'Paneer Tikka',
      price: 249,
      img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=120&q=80',
    },
  },
  {
    id: 'haldirams',
    name: "Haldiram's",
    tag: 'Sweets · Snacks · Chaat',
    time: '25 min',
    rating: '4.4',
    reviews: '20k',
    promo: 'Items at ₹29',
    promoColor: '#FF3D00',
    badge: 'Iconic',
    area: 'Chandni Chowk, Delhi',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
    quickItem: {
      id: 'feat-hd1',
      name: 'Samosa (2pc)',
      price: 49,
      img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=120&q=80',
    },
  },
]

const badgeColors = {
  'Trending':   '#FF3D00',
  'Top Rated':  '#F59E0B',
  'Legendary':  '#8B5CF6',
  'Popular':    '#10B981',
  'Premium':    '#EC4899',
  'Iconic':     '#FF3D00',
}

function FeaturedSection() {
  const navigate = useNavigate()
  const { addToCart, setCartOpen } = useCart()

  // "Order Now" → add signature item to cart + open cart sidebar
  const handleOrderNow = (e, restaurant) => {
    e.stopPropagation() // don't also trigger card click
    addToCart(restaurant.quickItem)
    setCartOpen(true)
  }

  return (
    <section style={f.section}>
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .f-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          animation: fadeUp 0.5s ease both;
        }
        .f-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        .f-img { transition: transform 0.35s ease; }
        .f-card:hover .f-img { transform: scale(1.06); }
        .order-btn:hover {
          background: #FF3D00 !important;
          color: #fff !important;
          border-color: #FF3D00 !important;
        }
      `}</style>

      <div style={f.inner}>
        {/* Header */}
        <div style={f.header}>
          <div>
            <h2 style={f.title}>Restaurants near you</h2>
            <p style={f.sub}>Handpicked favourites delivering to your area</p>
          </div>
          <span
            onClick={() => navigate('/search')}
            style={f.seeAll}
          >
            See all →
          </span>
        </div>

        {/* Grid */}
        <div style={f.grid}>
          {restaurants.map((r, i) => (
            <div
              key={r.id}
              className="f-card"
              style={{ ...f.card, animationDelay: `${i * 0.08}s` }}
              onClick={() => navigate(`/restaurant/${r.id}`)}
            >
              {/* Image */}
              <div style={f.imgWrap}>
                <img
                  className="f-img"
                  src={r.img}
                  alt={r.name}
                  style={f.img}
                  onError={e => {
                    e.target.src = `https://via.placeholder.com/320x190/FF3D00/fff?text=${r.name}`
                  }}
                />
                {/* Badge top-left */}
                <span style={{ ...f.badge, background: badgeColors[r.badge] }}>
                  {r.badge}
                </span>
                {/* Promo bottom-left */}
                <span style={{ ...f.promo, background: r.promoColor }}>
                  {r.promo}
                </span>
              </div>

              {/* Body */}
              <div style={f.body}>
                <div style={f.row1}>
                  <h3 style={f.name}>{r.name}</h3>
                  <span style={f.ratingBadge}>⭐ {r.rating}</span>
                </div>
                <p style={f.tag}>{r.tag}</p>
                <div style={f.row2}>
                  <span style={f.meta}>🕐 {r.time}</span>
                  <span style={f.dotSep}>·</span>
                  <span style={f.meta}>{r.reviews} reviews</span>
                  <span style={f.dotSep}>·</span>
                  <span style={f.meta}>📍 {r.area}</span>
                </div>

                {/* Order Now button */}
                <button
                  className="order-btn"
                  style={f.orderBtn}
                  onClick={e => handleOrderNow(e, r)}
                >
                  Order Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const f = {
  section: {
    padding: '48px 0',
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
    flexWrap: 'wrap',
    gap: '12px',
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
  seeAll: {
    color: '#FF3D00',
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#fff',
    borderRadius: '18px',
    border: '1px solid #F3F4F6',
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  },
  imgWrap: {
    position: 'relative',
    height: '180px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  badge: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 800,
    padding: '3px 10px',
    borderRadius: '6px',
    letterSpacing: '0.04em',
  },
  promo: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 800,
    padding: '4px 10px',
    borderRadius: '6px',
  },
  body: {
    padding: '16px',
  },
  row1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4px',
  },
  name: {
    fontSize: '16px',
    fontWeight: 800,
    color: '#1C1C1C',
    margin: 0,
  },
  ratingBadge: {
    background: '#FFF7ED',
    color: '#D97706',
    borderRadius: '6px',
    padding: '3px 8px',
    fontSize: '12px',
    fontWeight: 800,
  },
  tag: {
    fontSize: '13px',
    color: '#9CA3AF',
    margin: '0 0 8px 0',
  },
  row2: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexWrap: 'wrap',
    marginBottom: '14px',
  },
  meta: {
    fontSize: '12px',
    color: '#6B7280',
  },
  dotSep: {
    color: '#D1D5DB',
    fontSize: '10px',
  },
  orderBtn: {
    width: '100%',
    padding: '11px',
    background: '#FFF0ED',
    border: '2px solid #FF3D00',
    borderRadius: '10px',
    color: '#FF3D00',
    fontWeight: 800,
    fontSize: '13px',
    fontFamily: "'Sora', sans-serif",
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
}

export default FeaturedSection