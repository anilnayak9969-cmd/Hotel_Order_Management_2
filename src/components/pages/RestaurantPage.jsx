import React, { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCart } from '../../contex/CartContext'

const restaurantData = {
  'biryani-blues': {
    name: 'Biryani Blues', area: 'Connaught Place, Delhi',
    rating: 4.7, reviews: '5.3k', time: '28-35 min', costForTwo: '₹400',
    tags: ['Biryani', 'Mughlai', 'North Indian'],
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80',
    offers: [
      { icon: '💥', label: '50% OFF up to ₹100', sub: 'USE CODE TRYNEW' },
      { icon: '🎁', label: 'Extra ₹50 off', sub: 'ABOVE ₹299 | NO CODE REQUIRED' },
      { icon: '🆓', label: 'Free delivery', sub: 'ON ORDERS ABOVE ₹199' },
    ],
    menu: [
      {
        category: 'Recommended',
        items: [
          { id: 'bb1', name: 'Chicken Dum Biryani', price: 249, desc: 'Slow-cooked dum biryani with tender chicken pieces', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&q=80', veg: false, bestseller: true, rating: 4.8, ratingCount: 312 },
          { id: 'bb2', name: 'Mutton Biryani', price: 329, desc: 'Rich aromatic mutton biryani with saffron', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200&q=80', veg: false, bestseller: false, rating: 4.7, ratingCount: 189 },
          { id: 'bb3', name: 'Veg Biryani', price: 179, desc: 'Fragrant vegetable biryani with mixed vegetables', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=200&q=80', veg: true, bestseller: false, rating: 4.5, ratingCount: 97 },
        ],
      },
      {
        category: 'Starters',
        items: [
          { id: 'bb4', name: 'Chicken Tikka', price: 299, desc: 'Juicy marinated chicken pieces from tandoor', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&q=80', veg: false, bestseller: true, rating: 4.9, ratingCount: 421 },
          { id: 'bb5', name: 'Seekh Kebab', price: 249, desc: 'Minced meat kebab with aromatic spices', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&q=80', veg: false, bestseller: false, rating: 4.6, ratingCount: 203 },
        ],
      },
      {
        category: 'Breads & Sides',
        items: [
          { id: 'bb6', name: 'Butter Naan', price: 49, desc: 'Soft leavened bread brushed with butter', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=80', veg: true, bestseller: false, rating: 4.4, ratingCount: 156 },
          { id: 'bb7', name: 'Dal Makhani', price: 199, desc: 'Slow-cooked black lentils with butter and cream', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=200&q=80', veg: true, bestseller: true, rating: 4.7, ratingCount: 278 },
        ],
      },
    ],
  },
}

// default restaurant for unknown ids
const defaultRestaurant = {
  name: 'FoodRush Kitchen', area: 'Mumbai, Maharashtra',
  rating: 4.6, reviews: '2.1k', time: '25-35 min', costForTwo: '₹350',
  tags: ['Multi-cuisine', 'Indian', 'Fast Food'],
  img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80',
  offers: [
    { icon: '💥', label: '40% OFF up to ₹80', sub: 'USE CODE WELCOME' },
    { icon: '🆓', label: 'Free delivery', sub: 'ON ORDERS ABOVE ₹199' },
  ],
  menu: [
    {
      category: 'Recommended',
      items: [
        { id: 'dr1', name: 'Masala Dosa', price: 129, desc: 'Crispy rice crepe with spiced potato filling', img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=200&q=80', veg: true, bestseller: true, rating: 4.8, ratingCount: 892 },
        { id: 'dr2', name: 'Butter Chicken', price: 299, desc: 'Creamy tomato-butter gravy with tender chicken', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&q=80', veg: false, bestseller: true, rating: 4.9, ratingCount: 1204 },
        { id: 'dr3', name: 'Paneer Tikka', price: 249, desc: 'Grilled cottage cheese with capsicum and onion', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&q=80', veg: true, bestseller: false, rating: 4.6, ratingCount: 567 },
        { id: 'dr4', name: 'Chicken Biryani', price: 249, desc: 'Aromatic dum biryani with tender chicken', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&q=80', veg: false, bestseller: false, rating: 4.7, ratingCount: 743 },
      ],
    },
    {
      category: 'South Indian',
      items: [
        { id: 'dr5', name: 'Idli (4pc) + Sambar', price: 89, desc: 'Steamed rice cakes with sambar and 2 chutneys', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200&q=80', veg: true, bestseller: true, rating: 4.7, ratingCount: 334 },
        { id: 'dr6', name: 'Medu Vada', price: 79, desc: 'Crispy donut-shaped lentil fritters', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=80', veg: true, bestseller: false, rating: 4.5, ratingCount: 211 },
      ],
    },
    
  ],
}

function MenuItem({ item }) {
  const { addToCart, cartItems, updateQty, flyItem } = useCart()
  const cartItem = cartItems.find(i => i.id === item.id)
  const qty      = cartItem?.qty || 0
  const isFlying = flyItem === item.id

  return (
    <div style={{
      display: 'flex', gap: '16px', padding: '20px 0',
      borderBottom: '1px solid #F9FAFB', alignItems: 'flex-start',
    }}>
      <style>{`
        @keyframes flyToCart {
          0%   { transform: scale(1); opacity: 1; }
          50%  { transform: scale(1.3) translateY(-10px); opacity: 0.8; }
          100% { transform: scale(0) translateY(-40px); opacity: 0; }
        }
        .fly-anim { animation: flyToCart 0.7s ease forwards; }
        @keyframes addedPulse {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.08); box-shadow: 0 0 0 6px rgba(255,61,0,0.15); }
        }
        .added-pulse { animation: addedPulse 0.4s ease; }
        .add-btn-wrap:hover .add-btn { border-color: #FF3D00 !important; color: #FF3D00 !important; }
      `}</style>

      {/* Info */}
      <div style={{ flex: 1 }}>
        {/* Veg/Non-veg indicator */}
        <div style={{
          width: '16px', height: '16px', border: `2px solid ${item.veg ? '#10B981' : '#EF4444'}`,
          borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '6px',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: item.veg ? '#10B981' : '#EF4444',
          }} />
        </div>

        {item.bestseller && (
          <span style={{
            background: '#FFF3CD', color: '#D97706', fontSize: '11px',
            fontWeight: 700, padding: '2px 8px', borderRadius: '4px',
            letterSpacing: '0.04em', marginBottom: '4px', display: 'inline-block',
          }}>⭐ Bestseller</span>
        )}

        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '4px 0 4px 0' }}>
          {item.name}
        </h4>
        <p style={{ fontSize: '15px', fontWeight: 800, color: '#111827', margin: '0 0 6px 0' }}>
          ₹{item.price}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 700 }}>⭐ {item.rating}</span>
          <span style={{ fontSize: '12px', color: '#9CA3AF' }}>({item.ratingCount})</span>
        </div>
        <p style={{ fontSize: '13px', color: '#9CA3AF', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
      </div>

      {/* Image + Add button */}
      <div style={{ flexShrink: 0, textAlign: 'center', position: 'relative' }}>
        <img src={item.img} alt={item.name}
          className={isFlying ? 'fly-anim' : ''}
          style={{
            width: '120px', height: '90px', objectFit: 'cover',
            borderRadius: '12px', display: 'block',
          }}
     onError={(e) => {
  e.target.style.display = 'none';
}}
/>

        {qty === 0 ? (
          <button
            className="add-btn-wrap"
            onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, img: item.img })}
            style={{
              position: 'absolute', bottom: '-14px', left: '50%', transform: 'translateX(-50%)',
              background: '#fff', border: '2px solid #E5E7EB', borderRadius: '10px',
              padding: '6px 24px', fontWeight: 800, fontSize: '14px', color: '#374151',
              cursor: 'pointer', whiteSpace: 'nowrap',
              fontFamily: "'Sora', sans-serif",
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.2s',
            }}
          >
            <span className="add-btn" style={{ transition: 'all 0.2s' }}>ADD</span>
          </button>
        ) : (
          <div
            className={qty > 0 ? 'added-pulse' : ''}
            style={{
              position: 'absolute', bottom: '-14px', left: '50%', transform: 'translateX(-50%)',
              display: 'flex', alignItems: 'center', gap: '8px',
              background: '#FF3D00', borderRadius: '10px',
              padding: '6px 12px',
              boxShadow: '0 4px 12px rgba(255,61,0,0.35)',
            }}
          >
            <button onClick={() => updateQty(item.id, -1)} style={{
              background: 'none', border: 'none', color: '#fff',
              fontWeight: 900, fontSize: '18px', cursor: 'pointer', lineHeight: 1,
            }}>−</button>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px', minWidth: '16px', textAlign: 'center' }}>
              {qty}
            </span>
            <button onClick={() => updateQty(item.id, 1)} style={{
              background: 'none', border: 'none', color: '#fff',
              fontWeight: 900, fontSize: '18px', cursor: 'pointer', lineHeight: 1,
            }}>+</button>
          </div>
        )}
      </div>
    </div>
  )
}

function RestaurantPage() {
  const { id } = useParams()
  const [vegOnly, setVegOnly]       = useState(false)
  const [search, setSearch]         = useState('')
  const [activeSection, setActiveSection] = useState(0)
  const { totalItems, grandTotal, setCartOpen } = useCart()

  const restaurant = restaurantData[id] || defaultRestaurant
  const sectionRefs = useRef([])

  const filteredMenu = restaurant.menu.map(section => ({
    ...section,
    items: section.items.filter(item =>
      (!vegOnly || item.veg) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(s => s.items.length > 0)

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @keyframes slideUp { from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);} }
        .offer-chip:hover { background: #FFF0ED !important; border-color: #FDDCB5 !important; }
        .section-tab { transition: all 0.2s ease; }
        .section-tab:hover { color: #FF3D00 !important; }
      `}</style>

      {/* Restaurant hero */}
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img src={restaurant.img} alt={restaurant.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.target.src = `https://via.placeholder.com/1280x220/FF3D00/fff?text=${restaurant.name}` }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%)',
        }} />
        <Link to="/" style={{
          position: 'absolute', top: '16px', left: '16px',
          background: 'rgba(255,255,255,0.9)', borderRadius: '10px',
          padding: '8px 16px', textDecoration: 'none', color: '#111827',
          fontWeight: 700, fontSize: '14px',
        }}>← Back</Link>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>

        {/* Info card */}
        <div style={{
          background: '#fff', borderRadius: '16px', padding: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)', margin: '-40px 0 0', position: 'relative', zIndex: 1,
          animation: 'slideUp 0.5s ease',
        }}>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0' }}>
            {restaurant.name}
          </h1>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            {restaurant.tags.map(t => (
              <span key={t} style={{
                background: '#FFF0ED', color: '#FF3D00', fontSize: '12px',
                fontWeight: 600, padding: '2px 10px', borderRadius: '999px',
                border: '1px solid #FDDCB5',
              }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px' }}>
              <span style={{
                background: '#10B981', color: '#fff', borderRadius: '6px',
                padding: '2px 8px', fontWeight: 800, fontSize: '13px',
              }}>⭐ {restaurant.rating}</span>
              <span style={{ color: '#6B7280' }}>({restaurant.reviews} ratings)</span>
            </span>
            <span style={{ color: '#6B7280', fontSize: '14px' }}>· {restaurant.costForTwo} for two</span>
            <span style={{ color: '#6B7280', fontSize: '14px' }}>· 🕐 {restaurant.time}</span>
            <span style={{ color: '#6B7280', fontSize: '14px' }}>· 📍 {restaurant.area}</span>
          </div>
        </div>

        {/* Offers carousel */}
        <div style={{ margin: '24px 0', overflowX: 'auto', display: 'flex', gap: '12px', paddingBottom: '4px' }}>
          {restaurant.offers.map((o, i) => (
            <div key={i} className="offer-chip" style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px',
              padding: '12px 16px', minWidth: '220px', cursor: 'pointer',
              transition: 'all 0.2s', flexShrink: 0,
            }}>
              <span style={{ fontSize: '24px' }}>{o.icon}</span>
              <div>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#111827' }}>{o.label}</p>
                <p style={{ margin: 0, fontSize: '11px', color: '#9CA3AF' }}>{o.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MENU header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px', margin: '8px 0 20px',
          borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', padding: '8px 0',
        }}>
          <div style={{ flex: 1, textAlign: 'center', color: '#9CA3AF', fontSize: '13px', letterSpacing: '0.15em' }}>
            ─── MENU ───
          </div>
        </div>

        {/* Search + filter */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div style={{
            flex: 1, display: 'flex', alignItems: 'center', gap: '8px',
            background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px',
            padding: '10px 16px',
          }}>
            <span>🔍</span>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search for dishes..."
              style={{
                border: 'none', background: 'transparent', outline: 'none',
                fontSize: '14px', color: '#111827', flex: 1,
                fontFamily: "'Sora', sans-serif",
              }} />
          </div>
          <button onClick={() => setVegOnly(p => !p)} style={{
            padding: '10px 16px', borderRadius: '12px', cursor: 'pointer',
            border: `2px solid ${vegOnly ? '#10B981' : '#E5E7EB'}`,
            background: vegOnly ? '#ECFDF5' : '#fff',
            color: vegOnly ? '#10B981' : '#6B7280',
            fontWeight: 700, fontSize: '13px',
            fontFamily: "'Sora', sans-serif",
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <span style={{
              width: '12px', height: '12px', borderRadius: '2px',
              border: `2px solid ${vegOnly ? '#10B981' : '#9CA3AF'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {vegOnly && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'block' }} />}
            </span>
            Pure Veg
          </button>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '0', overflowX: 'auto', marginBottom: '8px',
          borderBottom: '1px solid #F3F4F6' }}>
          {filteredMenu.map((section, i) => (
            <button key={i} className="section-tab"
              onClick={() => {
                setActiveSection(i)
                sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '10px 20px', fontWeight: activeSection === i ? 800 : 600,
                fontSize: '14px', whiteSpace: 'nowrap',
                color: activeSection === i ? '#FF3D00' : '#6B7280',
                borderBottom: activeSection === i ? '2px solid #FF3D00' : '2px solid transparent',
                fontFamily: "'Sora', sans-serif",
              }}>{section.category} ({section.items.length})</button>
          ))}
        </div>

        {/* Menu items */}
        {filteredMenu.map((section, si) => (
          <div key={si} ref={el => sectionRefs.current[si] = el} style={{ marginBottom: '8px' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '16px 0 8px', cursor: 'pointer',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', margin: 0 }}>
                {section.category} ({section.items.length})
              </h3>
              <span style={{ color: '#9CA3AF' }}>▲</span>
            </div>
            {section.items.map(item => <MenuItem key={item.id} item={item} />)}
          </div>
        ))}

        <div style={{ height: '100px' }} />
      </div>

      {/* Sticky view cart bar */}
      {totalItems > 0 && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
          padding: '16px 20px', background: 'transparent',
          display: 'flex', justifyContent: 'center',
        }}>
          <button onClick={() => setCartOpen(true)} style={{
            width: '100%', maxWidth: '860px', padding: '16px 24px',
            background: '#FF3D00', color: '#fff', border: 'none', borderRadius: '14px',
            fontWeight: 800, fontSize: '15px', cursor: 'pointer',
            fontFamily: "'Sora', sans-serif",
            boxShadow: '0 8px 32px rgba(255,61,0,0.45)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            animation: 'slideUp 0.3s ease',
          }}>
            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '8px' }}>
              {totalItems} item{totalItems > 1 ? 's' : ''}
            </span>
            <span>VIEW CART 🛒</span>
            <span>₹{grandTotal}</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default RestaurantPage