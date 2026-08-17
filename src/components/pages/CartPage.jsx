import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useCart } from '../../contex/CartContext'

export default function CartPage() {
  const { cartItems, updateQty, removeFromCart,
          itemTotal, deliveryFee, gst, grandTotal,
          totalItems, clearCart } = useCart()
  const [step, setStep]         = useState(1) // 1=account, 2=address, 3=payment
  const [noContact, setNoContact] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onPlaceOrder = () => {
    clearCart()
    navigate('/order-success')
  }

  const stepIcon = (n) => {
    if (step > n) return <span style={{ color: '#10B981', fontSize: '18px' }}>✅</span>
    return (
      <span style={{
        width: '32px', height: '32px', borderRadius: '50%',
        background: step === n ? '#111827' : '#E5E7EB',
        color: step === n ? '#fff' : '#9CA3AF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 800, fontSize: '14px', flexShrink: 0,
      }}>{n}</span>
    )
  }

  return (
    <div style={{ background: '#F3F4F6', minHeight: '100vh', fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
        .cart-input { width:100%; padding:12px 16px; border:2px solid #E5E7EB; border-radius:12px;
          font-size:14px; font-family:'Sora',sans-serif; outline:none; transition:border 0.2s; background:#fff; }
        .cart-input:focus { border-color: #FF3D00; box-shadow: 0 0 0 3px rgba(255,61,0,0.1); }
      `}</style>

      {/* Secure checkout header */}
      <div style={{
        background: '#fff', borderBottom: '1px solid #E5E7EB',
        padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            background: '#FF3D00', color: '#fff', width: '36px', height: '36px',
            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px',
          }}>🍴</div>
          <span style={{ fontWeight: 800, fontSize: '16px', color: '#111827', letterSpacing: '0.05em' }}>
            SECURE CHECKOUT
          </span>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: '#6B7280', fontSize: '14px', cursor: 'pointer' }}>❓ Help</span>
          <Link to="/login" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }}>👤 Sign In</Link>
        </div>
      </div>

      {cartItems.length === 0 ? (
        /* Empty cart */
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>🍳</div>
          <h2 style={{ fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Your cart is empty</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '28px' }}>You can go to home page to view more restaurants</p>
          <Link to="/" style={{
            display: 'inline-block', background: '#FF3D00', color: '#fff',
            padding: '14px 32px', borderRadius: '12px', fontWeight: 800,
            textDecoration: 'none', fontSize: '14px', letterSpacing: '0.05em',
          }}>SEE RESTAURANTS NEAR YOU</Link>
        </div>
      ) : (
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 6vw',
          display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

          {/* Left — Steps */}
          <div style={{ flex: '1 1 560px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Step 1 — Account */}
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', animation: 'fadeUp 0.4s ease' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '20px 24px',
                borderBottom: step === 1 ? '1px solid #F3F4F6' : 'none', cursor: step !== 1 ? 'pointer' : 'default' }}
                onClick={() => step > 1 && setStep(1)}>
                {stepIcon(1)}
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#111827' }}>Account</h3>
                  {step > 1 && <p style={{ margin: 0, fontSize: '13px', color: '#9CA3AF' }}>Logged in as Guest</p>}
                </div>
              </div>
              {step === 1 && (
                <div style={{ padding: '24px' }}>
                  <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '20px' }}>
                    To place your order now, log in or sign up.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link to="/login" style={{
                      flex: 1, textAlign: 'center', padding: '12px',
                      border: '2px solid #10B981', borderRadius: '12px',
                      color: '#10B981', fontWeight: 700, fontSize: '14px', textDecoration: 'none',
                    }}>Have an account? LOG IN</Link>
                    <Link to="/register" style={{
                      flex: 1, textAlign: 'center', padding: '12px',
                      background: '#10B981', borderRadius: '12px',
                      color: '#fff', fontWeight: 700, fontSize: '14px', textDecoration: 'none',
                    }}>New here? SIGN UP</Link>
                  </div>
                  <button onClick={() => setStep(2)} style={{
                    width: '100%', marginTop: '12px', padding: '12px',
                    background: 'none', border: '1px solid #E5E7EB', borderRadius: '12px',
                    color: '#6B7280', fontSize: '14px', cursor: 'pointer',
                    fontFamily: "'Sora', sans-serif",
                  }}>Continue as Guest →</button>
                </div>
              )}
            </div>

            {/* Step 2 — Delivery Address */}
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', opacity: step >= 2 ? 1 : 0.5 }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '20px 24px',
                borderBottom: step === 2 ? '1px solid #F3F4F6' : 'none',
                cursor: step > 2 ? 'pointer' : 'default' }}
                onClick={() => step > 2 && setStep(2)}>
                {stepIcon(2)}
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: step >= 2 ? '#111827' : '#9CA3AF' }}>
                    Delivery Address
                  </h3>
                  {step > 2 && <p style={{ margin: 0, fontSize: '13px', color: '#9CA3AF' }}>Address saved ✓</p>}
                </div>
              </div>
              {step === 2 && (
                <form onSubmit={handleSubmit(() => setStep(3))} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>Full Name</label>
                      <input className="cart-input" placeholder="Rahul Sharma"
                        {...register('name', { required: true })} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>Phone</label>
                      <input className="cart-input" placeholder="9876543210"
                        {...register('phone', { required: true })} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>Flat / House No. / Building</label>
                    <input className="cart-input" placeholder="Flat 4B, Sunrise Apartments"
                      {...register('flat', { required: true })} />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>Street / Area</label>
                    <input className="cart-input" placeholder="Bandra West, near Linking Road"
                      {...register('area', { required: true })} />
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>City</label>
                      <input className="cart-input" placeholder="Mumbai" {...register('city', { required: true })} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>Pincode</label>
                      <input className="cart-input" placeholder="400050" {...register('pin', { required: true })} />
                    </div>
                  </div>
                  {/* No contact delivery */}
                  <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer',
                    background: '#F9FAFB', borderRadius: '12px', padding: '14px',
                    border: noContact ? '2px solid #10B981' : '1px solid #E5E7EB' }}>
                    <input type="checkbox" checked={noContact} onChange={e => setNoContact(e.target.checked)}
                      style={{ accentColor: '#10B981', width: '16px', height: '16px', marginTop: '2px' }} />
                    <div>
                      <p style={{ margin: '0 0 2px', fontWeight: 700, fontSize: '14px', color: '#111827' }}>
                        Opt in for No-contact Delivery
                      </p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#9CA3AF', lineHeight: 1.5 }}>
                        Rider will safely place your order outside the door.
                      </p>
                    </div>
                  </label>
                  <button type="submit" style={{
                    padding: '14px', background: '#FF3D00', color: '#fff',
                    border: 'none', borderRadius: '12px', fontWeight: 800, fontSize: '15px',
                    cursor: 'pointer', fontFamily: "'Sora', sans-serif",
                  }}>Save Address & Continue →</button>
                </form>
              )}
            </div>

            {/* Step 3 — Payment */}
            <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', opacity: step >= 3 ? 1 : 0.5 }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '20px 24px',
                borderBottom: step === 3 ? '1px solid #F3F4F6' : 'none' }}>
                {stepIcon(3)}
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: step >= 3 ? '#111827' : '#9CA3AF' }}>
                  Payment
                </h3>
              </div>
              {step === 3 && (
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    {[
                      { icon: '📱', label: 'UPI / Google Pay / PhonePe', sub: 'Instant payment' },
                      { icon: '💳', label: 'Credit / Debit Card', sub: 'Visa, Mastercard, RuPay' },
                      { icon: '🏦', label: 'Net Banking', sub: 'All major banks' },
                      { icon: '💵', label: 'Cash on Delivery', sub: 'Pay when order arrives' },
                    ].map((method, i) => (
                      <label key={i} style={{
                        display: 'flex', gap: '12px', alignItems: 'center',
                        padding: '14px', borderRadius: '12px', cursor: 'pointer',
                        border: '2px solid #E5E7EB', transition: 'border-color 0.2s',
                      }}>
                        <input type="radio" name="payment" defaultChecked={i === 0}
                          style={{ accentColor: '#FF3D00' }} />
                        <span style={{ fontSize: '22px' }}>{method.icon}</span>
                        <div>
                          <p style={{ margin: 0, fontWeight: 700, fontSize: '14px', color: '#111827' }}>{method.label}</p>
                          <p style={{ margin: 0, fontSize: '12px', color: '#9CA3AF' }}>{method.sub}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <button onClick={onPlaceOrder} style={{
                    width: '100%', padding: '16px', background: '#FF3D00', color: '#fff',
                    border: 'none', borderRadius: '14px', fontWeight: 800, fontSize: '16px',
                    cursor: 'pointer', fontFamily: "'Sora', sans-serif",
                    boxShadow: '0 8px 24px rgba(255,61,0,0.35)',
                  }}>Place Order · ₹{grandTotal} 🎉</button>
                  <p style={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'center', marginTop: '10px' }}>
                    By placing your order, you agree to our Terms and Privacy Policy
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right — Order summary */}
          <div style={{ flex: '0 0 320px', position: 'sticky', top: '20px' }}>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '20px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 16px 0' }}>
                🏪 Order Summary
              </h3>
              {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px',
                      background: '#F9FAFB', borderRadius: '8px', padding: '4px 8px' }}>
                      <button onClick={() => updateQty(item.id, -1)} style={{
                        background: 'none', border: 'none', color: '#FF3D00', fontWeight: 800,
                        cursor: 'pointer', fontSize: '14px',
                      }}>−</button>
                      <span style={{ fontWeight: 800, fontSize: '13px', color: '#111827' }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} style={{
                        background: 'none', border: 'none', color: '#FF3D00', fontWeight: 800,
                        cursor: 'pointer', fontSize: '14px',
                      }}>+</button>
                    </div>
                    <span style={{ fontSize: '13px', color: '#374151', fontWeight: 600,
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#111827', flexShrink: 0 }}>
                    ₹{item.price * item.qty}
                  </span>
                </div>
              ))}
              <div style={{ marginTop: '4px' }}>
                <textarea placeholder="Any suggestions? We will pass it on to the restaurant..."
                  style={{
                    width: '100%', padding: '10px', border: '1px solid #E5E7EB',
                    borderRadius: '10px', fontSize: '12px', color: '#6B7280',
                    fontFamily: "'Sora', sans-serif", resize: 'none', outline: 'none',
                    minHeight: '60px',
                  }} />
              </div>
            </div>

            {/* Bill details */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '20px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#111827', margin: '0 0 14px 0' }}>
                Bill Details
              </h4>
              {[['Item Total', `₹${itemTotal}`],
                ['Delivery Fee', deliveryFee === 0 ? 'FREE 🆓' : `₹${deliveryFee}`],
                ['GST & Other Charges', `₹${gst}`]].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '13px', color: '#6B7280' }}>{l}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: v.includes('FREE') ? '#10B981' : '#374151' }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop: '2px solid #111827', paddingTop: '10px', marginTop: '4px',
                display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 800, fontSize: '15px' }}>TO PAY</span>
                <span style={{ fontWeight: 800, fontSize: '16px', color: '#FF3D00' }}>₹{grandTotal}</span>
              </div>
            </div>

            <div style={{ background: '#FFF9E6', borderRadius: '14px', padding: '16px',
              border: '1px solid #FDE68A' }}>
              <p style={{ fontWeight: 700, fontSize: '13px', color: '#92400E', margin: '0 0 6px 0' }}>
                Review your order and address details to avoid cancellations
              </p>
              <p style={{ fontSize: '12px', color: '#B45309', margin: '0 0 8px 0', lineHeight: 1.5 }}>
                Note: This order, if cancelled, is non-refundable.
              </p>
              <span style={{ color: '#FF3D00', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>
                Read policy →
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}