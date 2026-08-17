import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useCart } from '../../context/CartContext'
import {useCart} from '../../contex/CartContext'

const dishes = [
  {
    id: 1, name: 'Biryani', emoji: '🍛',
    img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&q=80',
    desc: 'Fragrant basmati rice slow-cooked with tender meat, saffron and aromatic spices.',
    price: '₹180 – ₹420', time: '30–40 min', rating: 4.7, tag: 'Bestseller',
    slug: 'biryani-blues',
    restaurants: ['Biryani Blues', 'Paradise', 'Dum Pukht', 'Bawarchi'],
    items: [
      { id: 'w-bb1', name: 'Chicken Biryani', price: 249, img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=120&q=80' },
      { id: 'w-bb2', name: 'Mutton Biryani',  price: 329, img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=120&q=80' },
      { id: 'w-bb3', name: 'Veg Biryani',     price: 179, img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=120&q=80' },
    ],
  },
  {
    id: 2, name: 'Dosa', emoji: '🥞',
    img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=200&q=80',
    desc: 'Crispy fermented rice crepe served with sambar and 3 types of chutney.',
    price: '₹80 – ₹200', time: '20–30 min', rating: 4.6, tag: 'Popular',
    slug: 'saravana-bhavan',
    restaurants: ['Saravana Bhavan', 'Dosa Plaza', 'MTR', 'Udupi Palace'],
    items: [
      { id: 'w-d1', name: 'Masala Dosa', price: 129, img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=120&q=80' },
      { id: 'w-d2', name: 'Rava Dosa',   price: 99,  img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120&q=80' },
      { id: 'w-d3', name: 'Ghee Roast',  price: 149, img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=120&q=80' },
    ],
  },
  {
    id: 3, name: 'Butter Chicken', emoji: '🍗',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=200&q=80',
    desc: 'Tender chicken in a rich, creamy tomato-butter gravy. The dish that defines Indian cuisine.',
    price: '₹220 – ₹380', time: '25–35 min', rating: 4.8, tag: 'Trending',
    slug: 'punjab-grill',
    restaurants: ['Moti Mahal', 'Punjab Grill', 'Dhaba', 'Bukhara'],
    items: [
      { id: 'w-bc1', name: 'Butter Chicken', price: 299, img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=120&q=80' },
      { id: 'w-bc2', name: 'Chicken Tikka',  price: 349, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=120&q=80' },
      { id: 'w-bc3', name: 'Dal Makhani',    price: 199, img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=120&q=80' },
    ],
  },
  {
    id: 4, name: 'Chole Bhature', emoji: '🫓',
    img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200&q=80',
    desc: "Spicy chickpea curry served with fluffy deep-fried bread. North India's ultimate comfort food.",
    price: '₹120 – ₹250', time: '20–30 min', rating: 4.5, tag: 'Classic',
    slug: 'biryani-blues',
    restaurants: ["Sita Ram", "Haldiram's", 'Bikanervala', 'Evergreen'],
    items: [
      { id: 'w-cb1', name: 'Chole Bhature (2)', price: 149, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120&q=80' },
      { id: 'w-cb2', name: 'Pindi Chole',       price: 179, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=120&q=80' },
      { id: 'w-cb3', name: 'Bhature (4pc)',      price: 99,  img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=120&q=80' },
    ],
  },
  {
    id: 5, name: 'Paneer Tikka', emoji: '🧀',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&q=80',
    desc: 'Marinated cottage cheese cubes grilled in a tandoor. The ultimate vegetarian starter.',
    price: '₹180 – ₹320', time: '25–30 min', rating: 4.7, tag: 'Loved',
    slug: 'punjab-grill',
    restaurants: ['Barbeque Nation', 'Sigree', 'Punjabi Dhaba', 'Zaffran'],
    items: [
      { id: 'w-pt1', name: 'Paneer Tikka',         price: 249, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=120&q=80' },
      { id: 'w-pt2', name: 'Paneer Butter Masala', price: 229, img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=120&q=80' },
      { id: 'w-pt3', name: 'Shahi Paneer',         price: 259, img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=120&q=80' },
    ],
  },
  {
    id: 6, name: 'Vada Pav', emoji: '🍔',
    img: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=200&q=80',
    desc: "Mumbai's beloved street food — spiced potato fritter in a soft bun with chutneys.",
    price: '₹30 – ₹80', time: '15–20 min', rating: 4.4, tag: 'Street Food',
    slug: 'biryani-blues',
    restaurants: ['Ashok Vada Pav', 'Jumbo Vada Pav', 'Café Mumbai', 'Anand'],
    items: [
      { id: 'w-vp1', name: 'Vada Pav',       price: 45,  img: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=120&q=80' },
      { id: 'w-vp2', name: 'Cheese Vada Pav',price: 69,  img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=120&q=80' },
      { id: 'w-vp3', name: 'Vada Pav (6pc)', price: 199, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120&q=80' },
    ],
  },
  {
    id: 7, name: 'Pav Bhaji', emoji: '🍲',
    img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=200&q=80',
    desc: 'Spiced mashed vegetable curry served with buttered soft bread rolls. Mumbai street royalty.',
    price: '₹100 – ₹200', time: '20–25 min', rating: 4.6, tag: 'Street Food',
    slug: 'biryani-blues',
    restaurants: ['Sardar Pav Bhaji', 'Cannon Pav Bhaji', 'Café Gulshan', 'Shiv Sagar'],
    items: [
      { id: 'w-pb1', name: 'Pav Bhaji',        price: 149, img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=120&q=80' },
      { id: 'w-pb2', name: 'Cheese Pav Bhaji', price: 179, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=120&q=80' },
      { id: 'w-pb3', name: 'Jain Pav Bhaji',   price: 139, img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=120&q=80' },
    ],
  },
  {
    id: 8, name: 'Idli Sambar', emoji: '🍚',
    img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200&q=80',
    desc: "Steamed rice cakes with lentil vegetable soup. South India's wholesome morning staple.",
    price: '₹60 – ₹150', time: '20–30 min', rating: 4.5, tag: 'Healthy',
    slug: 'saravana-bhavan',
    restaurants: ['Saravana Bhavan', 'Sarvana Stores', 'MTR', 'A2B'],
    items: [
      { id: 'w-is1', name: 'Idli (4pc) + Sambar', price: 89,  img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=120&q=80' },
      { id: 'w-is2', name: 'Medu Vada (2pc)',      price: 79,  img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120&q=80' },
      { id: 'w-is3', name: 'Combo Plate',           price: 139, img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=120&q=80' },
    ],
  },
 
 {
  id: 9,
  name: 'Desserts',
  emoji: '🍰',
  img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80',
  desc: "Delicious sweet treats including cakes, brownies, waffles, and ice cream desserts.",
  price: '₹80 – ₹250',
  time: '15–25 min',
  rating: 4.7,
  tag: 'Sweet',

  slug: 'dessert-house',

  restaurants: ['Theobroma', 'Belgian Waffle', 'Frozen Bottle', 'Baskin Robbins'],

  items: [
    {
      id: 'd-1',
      name: 'Chocolate Brownie',
      price: 119,
      img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=120&q=80'
    },

    {
      id: 'd-2',
      name: 'Red Velvet Cake',
      price: 149,
      img: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=120&q=80'
    },

    {
      id: 'd-3',
      name: 'Ice Cream Sundae',
      price: 129,
      img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=120&q=80'
    },
  ],
},
  

  {
    id: 10, name: 'Paratha', emoji: '🫓',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=80',
    desc: 'Whole wheat flatbread stuffed with spiced fillings, served with butter, curd and pickle.',
    price: '₹80 – ₹180', time: '20–30 min', rating: 4.6, tag: 'Breakfast',
    slug: 'biryani-blues',
    restaurants: ['Moolchand Paratha', 'Sita Ram Diwan Chand', 'Kake Da Hotel', 'Paranthe Wali Gali'],
    items: [
      { id: 'w-pa1', name: 'Aloo Paratha',   price: 99,  img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=120&q=80' },
      { id: 'w-pa2', name: 'Paneer Paratha', price: 129, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=120&q=80' },
      { id: 'w-pa3', name: 'Mixed Paratha',  price: 149, img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=120&q=80' },
    ],
  },
  {
    id: 11, name: 'Chai', emoji: '☕',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&q=80',
    desc: "India's beloved spiced milk tea with ginger, cardamom and tulsi. Served piping hot.",
    price: '₹20 – ₹80', time: '10–15 min', rating: 4.9, tag: 'Drinks',
    slug: 'chaayos',
    restaurants: ['Chaayos', 'Chai Point', 'MBA Chai Wala', 'Tea Trails'],
    items: [
      { id: 'w-ch1', name: 'Masala Chai',  price: 49, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&q=80' },
      { id: 'w-ch2', name: 'Adrak Chai',   price: 39, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=120&q=80' },
      { id: 'w-ch3', name: 'Cutting Chai', price: 29, img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=120&q=80' },
    ],
  },
  {
    id: 12, name: 'Samosa', emoji: '🔺',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=80',
    desc: 'Crispy pastry filled with spiced potatoes and peas. The quintessential Indian snack.',
    price: '₹15 – ₹60', time: '15–20 min', rating: 4.5, tag: 'Snacks',
    slug: 'biryani-blues',
    restaurants: ["Haldiram's", 'Bikanervala', 'Evergreen', 'Bengali Sweet House'],
    items: [
      { id: 'w-sm1', name: 'Samosa (2pc)',  price: 49,  img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=120&q=80' },
      { id: 'w-sm2', name: 'Samosa Chaat', price: 89,  img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120&q=80' },
      { id: 'w-sm3', name: 'Samosa (6pc)', price: 129, img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=120&q=80' },
    ],
  },
]

// ── Tag colours ───────────────────────────────────────────────
const tagColors = {
  'Bestseller': '#FF3D00', 'Popular': '#8B5CF6', 'Trending': '#EC4899',
  'Classic': '#F59E0B',    'Loved': '#10B981',   'Street Food': '#F97316',
  'Healthy': '#10B981',    'Dessert': '#EC4899',  'Breakfast': '#F59E0B',
  'Drinks': '#3B82F6',     'Snacks': '#6B7280',
}

// ── Cart-connected item row inside modal ──────────────────────
function ModalItem({ item }) {
  const { addToCart, cartItems, updateQty } = useCart()
  const cartItem = cartItems.find(i => i.id === item.id)
  const qty = cartItem?.qty || 0

  return (
    <div style={m.itemCard}>
      <img
        src={item.img}
        alt={item.name}
        style={m.itemImg}
        onError={e => { e.target.src = 'https://via.placeholder.com/80x80/F3F4F6/374151?text=Food' }}
      />
      <div style={m.itemInfo}>
        <p style={m.itemName}>{item.name}</p>
        <p style={m.itemPrice}>₹{item.price}</p>
      </div>

      {/* ── ADD / QTY controls ── */}
      {qty === 0 ? (
        <button
          onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, img: item.img })}
          style={m.addBtn}
        >
          + Add
        </button>
      ) : (
        <div style={m.qtyRow}>
          <button onClick={() => updateQty(item.id, -1)} style={m.qtyBtn}>−</button>
          <span style={m.qtyNum}>{qty}</span>
          <button onClick={() => updateQty(item.id, 1)} style={m.qtyBtn}>+</button>
        </div>
      )}
    </div>
  )
}

// ── Dish Detail Modal ─────────────────────────────────────────
function DishModal({ dish, onClose }) {
  const navigate = useNavigate()   // ← NEW: for "View All" button navigation
  if (!dish) return null

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={m.backdrop} />

      {/* Modal panel */}
      <div style={m.modal}>
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(40px) scale(0.96); }
            to   { opacity: 1; transform: translateY(0)   scale(1);    }
          }
          .add-btn-modal:hover { background: #FF3D00 !important; color: #fff !important; }
        `}</style>

        {/* Hero image */}
        <div style={m.imgWrap}>
          <img
            src={dish.img}
            alt={dish.name}
            style={m.img}
            onError={e => { e.target.src = `https://via.placeholder.com/600x260/FF3D00/fff?text=${dish.name}` }}
          />
          <div style={m.imgOverlay}>
            <span style={{ ...m.tag, background: tagColors[dish.tag] || '#FF3D00' }}>
              {dish.tag}
            </span>
          </div>
          <button onClick={onClose} style={m.closeBtn}>✕</button>
        </div>

        {/* Body */}
        <div style={m.body}>
          {/* Title + meta */}
          <div style={m.topRow}>
            <div>
              <h2 style={m.title}>{dish.emoji} {dish.name}</h2>
              <p style={m.desc}>{dish.desc}</p>
            </div>
            <div style={m.metaBox}>
              <div style={m.metaItem}>
                <span style={m.metaVal}>⭐ {dish.rating}</span>
                <span style={m.metaLbl}>Rating</span>
              </div>
              <div style={m.metaDivider} />
              <div style={m.metaItem}>
                <span style={m.metaVal}>🕐 {dish.time}</span>
                <span style={m.metaLbl}>Delivery</span>
              </div>
              <div style={m.metaDivider} />
              <div style={m.metaItem}>
                <span style={m.metaVal}>{dish.price}</span>
                <span style={m.metaLbl}>Price range</span>
              </div>
            </div>
          </div>

          {/* Menu items — now connected to cart */}
          <h3 style={m.secTitle}>🍽️ Popular items</h3>
          <div style={m.itemsGrid}>
            {dish.items.map(item => (
              <ModalItem key={item.id} item={item} />
            ))}
          </div>

          {/* Available at */}
          <h3 style={m.secTitle}>🏪 Available at</h3>
          <div style={m.restRow}>
            {dish.restaurants.map(r => (
              <span key={r} style={m.restChip}>{r}</span>
            ))}
          </div>

          {/* ── UPDATED: navigates to restaurant page ── */}
          <button
            onClick={() => {
              onClose()                                   // close modal first
              navigate(`/restaurant/${dish.slug}`)        // then navigate
            }}
            style={m.orderBtn}
          >
            View All {dish.name} Restaurants →
          </button>
        </div>
      </div>
    </>
  )
}

// ── Modal styles ──────────────────────────────────────────────
const m = {
  backdrop: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(4px)',
    zIndex: 2000,
  },
  modal: {
    position: 'fixed', top: '50%', left: '50%',
    transform: 'translate(-50%,-50%)',
    background: '#fff', borderRadius: '24px',
    width: '90%', maxWidth: '620px', maxHeight: '88vh',
    overflowY: 'auto', zIndex: 2001,
    boxShadow: '0 32px 80px rgba(0,0,0,0.3)',
    animation: 'modalIn 0.35s ease',
  },
  imgWrap: { position: 'relative', height: '220px' },
  img: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px 24px 0 0' },
  imgOverlay: { position: 'absolute', bottom: '12px', left: '16px' },
  tag: {
    color: '#fff', fontSize: '12px', fontWeight: 800,
    padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.04em',
  },
  closeBtn: {
    position: 'absolute', top: '12px', right: '12px',
    background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff',
    width: '32px', height: '32px', borderRadius: '50%',
    fontSize: '14px', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  body: { padding: '24px' },
  topRow: {
    display: 'flex', justifyContent: 'space-between',
    gap: '16px', flexWrap: 'wrap', marginBottom: '20px',
  },
  title: { fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0' },
  desc: { fontSize: '14px', color: '#6B7280', lineHeight: 1.65, margin: 0, maxWidth: '320px' },
  metaBox: {
    display: 'flex', alignItems: 'center',
    background: '#F9FAFB', borderRadius: '14px', padding: '12px 16px',
    border: '1px solid #F3F4F6', flexShrink: 0, alignSelf: 'flex-start',
  },
  metaItem: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 12px' },
  metaVal: { fontSize: '14px', fontWeight: 800, color: '#111827' },
  metaLbl: { fontSize: '11px', color: '#9CA3AF', marginTop: '2px' },
  metaDivider: { width: '1px', height: '32px', background: '#E5E7EB' },
  secTitle: { fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 14px 0' },
  itemsGrid: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
  itemCard: {
    display: 'flex', alignItems: 'center', gap: '12px',
    padding: '12px', background: '#F9FAFB',
    borderRadius: '14px', border: '1px solid #F3F4F6',
  },
  itemImg: { width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: '14px', fontWeight: 700, color: '#111827', margin: '0 0 4px 0' },
  itemPrice: { fontSize: '14px', fontWeight: 800, color: '#FF3D00', margin: 0 },
  // ADD button (when qty = 0)
  addBtn: {
    background: '#fff', border: '2px solid #FF3D00', color: '#FF3D00',
    borderRadius: '10px', padding: '8px 16px', fontWeight: 800,
    fontSize: '13px', cursor: 'pointer', flexShrink: 0,
    fontFamily: "'Sora', sans-serif",
    transition: 'all 0.2s',
  },
  // QTY row (when qty > 0)
  qtyRow: {
    display: 'flex', alignItems: 'center', gap: '10px',
    background: '#FF3D00', borderRadius: '10px', padding: '6px 12px',
    flexShrink: 0,
  },
  qtyBtn: {
    background: 'none', border: 'none', color: '#fff',
    fontWeight: 900, fontSize: '18px', cursor: 'pointer',
    lineHeight: 1, padding: '0',
  },
  qtyNum: { color: '#fff', fontWeight: 800, fontSize: '15px', minWidth: '16px', textAlign: 'center' },
  restRow: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' },
  restChip: {
    background: '#FFF0ED', color: '#FF3D00', border: '1px solid #FDDCB5',
    borderRadius: '8px', padding: '5px 12px', fontSize: '13px', fontWeight: 600,
  },
  orderBtn: {
    width: '100%', padding: '14px', background: '#FF3D00', color: '#fff',
    border: 'none', borderRadius: '14px', fontWeight: 800, fontSize: '15px',
    cursor: 'pointer', fontFamily: "'Sora', sans-serif",
    boxShadow: '0 8px 24px rgba(255,61,0,0.3)',
  },
}

// ── Main Section ──────────────────────────────────────────────
function WhatOnMindSection() {
  const [selectedDish, setSelectedDish] = useState(null)
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section style={ws.section}>
      <style>{`
        .dish-card-wrap:hover .dish-img { transform: scale(1.08); }
        .dish-card-wrap:hover { transform: translateY(-4px); }
        .dish-card-wrap { transition: transform 0.25s ease; cursor: pointer; }
        .dish-img { transition: transform 0.3s ease; }
        .scroll-hide::-webkit-scrollbar { display: none; }
        .scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .nav-arrow:hover { background: #FF3D00 !important; color: #fff !important; }
      `}</style>

      <div style={ws.header}>
        <div>
          <h2 style={ws.title}>What's on your mind?</h2>
          <p style={ws.sub}>Tap any dish to explore restaurants, prices & more</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="nav-arrow" onClick={() => scroll(-1)} style={ws.arrow}>←</button>
          <button className="nav-arrow" onClick={() => scroll(1)}  style={ws.arrow}>→</button>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div ref={scrollRef} className="scroll-hide" style={ws.carousel}>
        {dishes.map(dish => (
          <div
            key={dish.id}
            className="dish-card-wrap"
            style={ws.dishWrap}
            onClick={() => setSelectedDish(dish)}
          >
            <div style={ws.imgCircleWrap}>
              <img
                className="dish-img"
                src={dish.img}
                alt={dish.name}
                style={ws.imgCircle}
                onError={e => { e.target.src = `https://via.placeholder.com/140x140/FF3D00/fff?text=${dish.name}` }}
              />
            </div>
            <p style={ws.dishName}>{dish.name}</p>
            <p style={ws.dishPrice}>{dish.price.split('–')[0]}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </section>
  )
}

// ── Section styles ────────────────────────────────────────────
const ws = {
  section: { padding: '48px 6vw 32px', background: '#fff', maxWidth: '1280px', margin: '0 auto' },
  header: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-end', marginBottom: '28px',
  },
  title: { fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#1C1C1C', margin: '0 0 4px 0' },
  sub:   { fontSize: '14px', color: '#9CA3AF', margin: 0 },
  arrow: {
    width: '36px', height: '36px', borderRadius: '50%',
    background: '#F3F4F6', border: '1px solid #E5E7EB',
    cursor: 'pointer', fontSize: '16px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 0.2s', fontFamily: 'inherit',
  },
  carousel: { display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '12px' },
  dishWrap: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    minWidth: '110px', textAlign: 'center',
  },
  imgCircleWrap: {
    width: '110px', height: '110px', borderRadius: '50%',
    overflow: 'hidden', border: '3px solid #F3F4F6',
    marginBottom: '10px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
  },
  imgCircle: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  dishName:  { fontSize: '13px', fontWeight: 700, color: '#1C1C1C', margin: '0 0 2px 0' },
  dishPrice: { fontSize: '12px', color: '#FF3D00', fontWeight: 600, margin: 0 },
}

export default WhatOnMindSection