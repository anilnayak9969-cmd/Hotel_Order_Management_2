import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contex/CartContext'

function CartSidebar() {
  const { cartItems, cartOpen, setCartOpen, updateQty, removeFromCart,
          itemTotal, deliveryFee, gst, grandTotal, totalItems } = useCart()
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        @keyframes cartSlide {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes itemFadeIn {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cart-item-row { animation: itemFadeIn 0.3s ease; }
        .qty-btn:hover { background: #FF3D00 !important; color: #fff !important; }
        .remove-btn:hover { color: #EF4444 !important; }
      `}</style>

      {/* Backdrop */}
      {cartOpen && (
        <div onClick={() => setCartOpen(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(3px)', zIndex: 1050,
        }} />
      )}

      {/* Cart panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '400px', maxWidth: '92vw',
        background: '#fff', zIndex: 1055,
        display: 'flex', flexDirection: 'column',
        boxShadow: '-4px 0 40px rgba(0,0,0,0.15)',
        transform: cartOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '20px', borderBottom: '1px solid #F3F4F6',
          background: '#fff', flexShrink: 0,
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#111827' }}>
              🛒 Your Cart
            </h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#9CA3AF' }}>
              {totalItems > 0 ? `${totalItems} item${totalItems > 1 ? 's' : ''}` : 'No items yet'}
            </p>
          </div>
          <button onClick={() => setCartOpen(false)} style={{
            background: '#F3F4F6', border: 'none', width: '36px', height: '36px',
            borderRadius: '50%', cursor: 'pointer', fontSize: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ fontSize: '80px', marginBottom: '16px' }}>🛒</div>
              <h4 style={{ color: '#111827', fontWeight: 800, marginBottom: '8px' }}>Your cart is empty</h4>
              <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>
                You can go to home page to view more restaurants
              </p>
              <Link to="/" onClick={() => setCartOpen(false)} style={{
                display: 'inline-block', background: '#FF3D00', color: '#fff',
                padding: '12px 24px', borderRadius: '12px', fontWeight: 700,
                textDecoration: 'none', fontSize: '14px',
              }}>SEE RESTAURANTS NEAR YOU</Link>
            </div>
          ) : (
            <>
              {/* Restaurant tag */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '12px', background: '#F9FAFB', borderRadius: '12px', marginBottom: '16px',
              }}>
                <span style={{ fontSize: '24px' }}>🏪</span>
                <div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#111827' }}>FoodRush Restaurant</p>
                  <p style={{ margin: 0, fontSize: '12px', color: '#9CA3AF' }}>Delivering to your location</p>
                </div>
              </div>

              {/* Items */}
              {cartItems.map(item => (
                <div key={item.id} className="cart-item-row" style={{
                  display: 'flex', gap: '12px', alignItems: 'center',
                  padding: '12px', background: '#fff',
                  borderRadius: '14px', marginBottom: '10px',
                  border: '1px solid #F3F4F6',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  <img src={item.img} alt={item.name} style={{
                    width: '56px', height: '56px', borderRadius: '10px',
                    objectFit: 'cover', flexShrink: 0,
                  }} onError={e => { e.target.src = `https://via.placeholder.com/56x56/FF3D00/fff?text=Food` }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: 700, color: '#111827',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</p>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: '#FF3D00' }}>
                      ₹{item.price * item.qty}
                    </p>
                  </div>
                  {/* Qty controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button className="qty-btn" onClick={() => updateQty(item.id, -1)} style={{
                      width: '28px', height: '28px', borderRadius: '8px',
                      border: '2px solid #E5E7EB', background: '#fff',
                      fontWeight: 800, cursor: 'pointer', fontSize: '16px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}>−</button>
                    <span style={{ fontSize: '15px', fontWeight: 800, color: '#111827', minWidth: '16px', textAlign: 'center' }}>
                      {item.qty}
                    </span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, 1)} style={{
                      width: '28px', height: '28px', borderRadius: '8px',
                      border: '2px solid #E5E7EB', background: '#fff',
                      fontWeight: 800, cursor: 'pointer', fontSize: '16px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)} style={{
                    background: 'none', border: 'none', color: '#D1D5DB',
                    cursor: 'pointer', fontSize: '16px', transition: 'color 0.2s',
                  }}>🗑</button>
                </div>
              ))}

              {/* Bill details */}
              <div style={{
                background: '#F9FAFB', borderRadius: '16px', padding: '16px', marginTop: '8px',
              }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#111827', margin: '0 0 12px 0' }}>
                  Bill Details
                </h4>
                {[
                  ['Item Total', `₹${itemTotal}`],
                  ['Delivery Fee', deliveryFee === 0 ? '🆓 FREE' : `₹${deliveryFee}`],
                  ['GST & Charges', `₹${gst}`],
                ].map(([label, val]) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between',
                    marginBottom: '8px', fontSize: '13px',
                  }}>
                    <span style={{ color: '#6B7280' }}>{label}</span>
                    <span style={{ fontWeight: 600, color: val.includes('FREE') ? '#10B981' : '#374151' }}>{val}</span>
                  </div>
                ))}
                <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '10px', marginTop: '4px',
                  display: 'flex', justifyContent: 'space-between', }}>
                  <span style={{ fontWeight: 800, color: '#111827', fontSize: '15px' }}>TO PAY</span>
                  <span style={{ fontWeight: 800, color: '#FF3D00', fontSize: '16px' }}>₹{grandTotal}</span>
                </div>
              </div>

              {deliveryFee > 0 && (
                <p style={{ fontSize: '12px', color: '#10B981', fontWeight: 600,
                  textAlign: 'center', margin: '10px 0 0', }}>
                  🎉 Add ₹{300 - itemTotal} more for FREE delivery!
                </p>
              )}
            </>
          )}
        </div>

        {/* Checkout button */}
        {cartItems.length > 0 && (
          <div style={{ padding: '16px', borderTop: '1px solid #F3F4F6', flexShrink: 0 }}>
            <button onClick={() => { setCartOpen(false); navigate('/cart') }} style={{
              width: '100%', padding: '16px', background: '#FF3D00',
              color: '#fff', border: 'none', borderRadius: '14px',
              fontWeight: 800, fontSize: '16px', cursor: 'pointer',
              fontFamily: "'Sora', sans-serif",
              boxShadow: '0 8px 24px rgba(255,61,0,0.35)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '8px', fontSize: '14px' }}>
                {totalItems} item{totalItems > 1 ? 's' : ''}
              </span>
              <span>Proceed to Checkout →</span>
              <span>₹{grandTotal}</span>
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartSidebar