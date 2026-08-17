// import React from 'react'

// function Register() {
//   return (
//     <div>Register</div>
//   )
// }

// export default Register


import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'

// ─── Role configs ───────────────────────────────────────────────
const ROLES = [
  { value: 'customer',    label: '🧑 Customer',    color: '#FF3D00' },
  { value: 'restaurant',  label: '🍽️ Restaurant',  color: '#10B981' },
  { value: 'rider',       label: '🛵 Rider',        color: '#8B5CF6' },
]

// ─── Shared regex ───────────────────────────────────────────────
const EMAIL_RE  = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
const PASS_RE   = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,}\S$/
const PHONE_RE  = /^[6-9]\d{9}$/
const NAME_RE   = /^[A-Za-z\s]{2,}$/
const USER_RE   = /^[a-z0-9_]{3,20}$/
const PLATE_RE  = /^[A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{4}$/
const GST_RE    = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
const FSSAI_RE  = /^[0-9]{14}$/
const DL_RE     = /^[A-Z]{2}[0-9]{2}[0-9]{11}$/

function Register() {
  const [role, setRole]           = useState('customer')
  const [showPass, setShowPass]   = useState(false)
  const [showConf, setShowConf]   = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()
  const navigate  = useNavigate()
  const password  = watch('password')

  const onRoleChange = (r) => { setRole(r); reset() }

  const onSubmit = (data) => {
    console.log(`[${role.toUpperCase()}] Register:`, data)
    setSubmitted(true)
    setTimeout(() => navigate('/login'), 2000)
  }

  const activeRole = ROLES.find(r => r.value === role)

  return (
    <div style={s.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Playfair+Display:ital@1&display=swap');
        * { box-sizing: border-box; }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from{opacity:0}to{opacity:1} }
        @keyframes shake {
          0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)}
        }
        .f-input {
          width:100%; padding:13px 16px 13px 44px;
          background:#F9FAFB; border:2px solid #E5E7EB;
          border-radius:12px; font-size:15px;
          font-family:'Sora',sans-serif; color:#111827;
          outline:none; transition:border .2s, box-shadow .2s;
        }
        .f-input:focus { border-color:var(--rc); background:#fff; box-shadow:0 0 0 4px color-mix(in srgb,var(--rc) 15%,transparent); }
        .f-input.err  { border-color:#EF4444; animation:shake .35s ease; }
        .sub-btn {
          width:100%; padding:15px;
          border:none; border-radius:12px;
          font-size:15px; font-weight:700;
          font-family:'Sora',sans-serif; cursor:pointer;
          transition:all .2s ease;
        }
        .sub-btn:hover { transform:translateY(-2px); filter:brightness(1.08); }
        .role-pill {
          flex:1; padding:11px 8px; border-radius:12px;
          border:2px solid #E5E7EB; background:#F9FAFB;
          font-family:'Sora',sans-serif; font-weight:700;
          font-size:13px; cursor:pointer;
          transition:all .2s ease; text-align:center;
        }
      `}</style>

      {/* ── Left decorative panel ── */}
      <div style={{ ...s.leftPanel, background: role === 'customer' ? '#111827' : role === 'restaurant' ? '#064E3B' : '#2E1065' }}>
        <div style={{ ...s.blob1, background: `radial-gradient(circle,${activeRole.color}33 0%,transparent 70%)` }} />
        <div style={s.leftContent}>

          {/* Brand */}
          <div style={s.brandMark}>🍴</div>
          <h2 style={s.leftTitle}>
            {role === 'customer'   && <><span style={{ color: activeRole.color }}>Order</span><br />anything,<br />anytime.</>}
            {role === 'restaurant' && <><span style={{ color: activeRole.color }}>Grow</span><br />your<br />restaurant.</>}
            {role === 'rider'      && <><span style={{ color: activeRole.color }}>Ride,</span><br />earn &<br />thrive.</>}
          </h2>
          <p style={s.leftSub}>
            {role === 'customer'   && 'Join 50K+ customers. ₹100 off your first order.'}
            {role === 'restaurant' && 'Zero onboarding fee. 50K+ daily customers waiting.'}
            {role === 'rider'      && 'Flexible hours. Weekly payouts. Earn ₹25,000+/month.'}
          </p>

          {/* Role-specific perks */}
          <div style={s.perksWrap}>
            {role === 'customer' && [
              ['🎁', '₹100 welcome offer'],
              ['🛵', '30-min delivery'],
              ['⭐', 'Rewards on every order'],
              ['💳', 'UPI, cards & more'],
            ].map(([icon, text]) => <Perk key={text} icon={icon} text={text} />)}

            {role === 'restaurant' && [
              ['📊', 'Live order dashboard'],
              ['📣', 'Free marketing support'],
              ['💰', 'Weekly settlements'],
              ['🧾', 'GST-ready billing'],
            ].map(([icon, text]) => <Perk key={text} icon={icon} text={text} />)}

            {role === 'rider' && [
              ['💸', 'Earn ₹25K–₹40K/month'],
              ['🕐', 'Flexible working hours'],
              ['🏍️', 'Petrol allowance included'],
              ['🛡️', 'Rider insurance covered'],
            ].map(([icon, text]) => <Perk key={text} icon={icon} text={text} />)}
          </div>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div style={s.rightPanel}>
        <div style={{ ...s.formCard, '--rc': activeRole.color }}>

          {submitted ? (
            <div style={s.successBox}>
              <span style={{ fontSize: '64px' }}>🎉</span>
              <h3 style={s.successTitle}>You're in!</h3>
              <p style={s.successSub}>
                {role === 'customer'   && 'Welcome to FoodRush. Redirecting to login...'}
                {role === 'restaurant' && 'Our team will verify your restaurant within 24 hrs.'}
                {role === 'rider'      && 'Our onboarding team will call you within 24 hrs.'}
              </p>
            </div>
          ) : (
            <>
              <div style={s.formHeader}>
                <h1 style={s.formTitle}>Create account</h1>
                <p style={s.formSub}>
                  Already a member? <Link to="/login" style={{ color: activeRole.color, fontWeight: 700, textDecoration: 'none' }}>Sign in →</Link>
                </p>
              </div>

              {/* Role selector */}
              <div style={s.fieldGroup}>
                <label style={s.label}>I am a</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {ROLES.map(r => (
                    <button
                      key={r.value} type="button"
                      className="role-pill"
                      onClick={() => onRoleChange(r.value)}
                      style={{
                        borderColor: role === r.value ? r.color : '#E5E7EB',
                        background:  role === r.value ? r.color + '12' : '#F9FAFB',
                        color:       role === r.value ? r.color : '#6B7280',
                      }}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate key={role}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'slideUp .35s ease' }}>

                {/* ═══ CUSTOMER fields ═══ */}
                {role === 'customer' && <>
                  <NameRow register={register} errors={errors} />
                 
                  <Field label="Phone number" icon="📱" placeholder="9876543210"
                    error={errors.phone}
                    reg={register('phone', {
                      required: 'Phone is required',
                      pattern: { value: PHONE_RE, message: 'Enter valid 10-digit Indian number' },
                    })} />
                  <Field label="Email address" icon="📧" placeholder="rahul@example.com"
                    error={errors.email}
                    reg={register('email', { required: 'Email is required', pattern: { value: EMAIL_RE, message: 'Invalid email' } })} />
                  <PassFields register={register} errors={errors} password={password} showPass={showPass} setShowPass={setShowPass} showConf={showConf} setShowConf={setShowConf} />
                  <TermsCheck register={register} errors={errors} color={activeRole.color} />
                </>}

                {/* ═══ RESTAURANT fields ═══ */}
                {role === 'restaurant' && <>
                  <Field label="Restaurant name" icon="🍽️" placeholder="e.g. Spice Garden, Biryani Hub"
                    error={errors.restaurantName}
                    reg={register('restaurantName', {
                      required: 'Restaurant name is required',
                      minLength: { value: 3, message: 'Min 3 characters' },
                    })} />
                  <Field label="Owner / Manager full name" icon="👤" placeholder="Amit Patel"
                    error={errors.ownerName}
                    reg={register('ownerName', {
                      required: 'Owner name is required',
                      pattern: { value: NAME_RE, message: 'Letters only' },
                    })} />
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <Field label="FSSAI License No." icon="🏛️" placeholder="14-digit FSSAI number"
                      error={errors.fssai}
                      reg={register('fssai', {
                        required: 'FSSAI is required',
                        pattern: { value: FSSAI_RE, message: 'Must be 14 digits' },
                      })} />
                    <Field label="GST Number" icon="🧾" placeholder="22AAAAA0000A1Z5"
                      error={errors.gst}
                      reg={register('gst', {
                        required: 'GST number is required',
                        pattern: { value: GST_RE, message: 'Invalid GST format' },
                      })} />
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <Field label="City" icon="📍" placeholder="Mumbai, Delhi, Bangalore..."
                      error={errors.city}
                      reg={register('city', { required: 'City is required', minLength: { value: 2, message: 'Min 2 chars' } })} />
                    <Field label="Cuisine type" icon="🍜" placeholder="North Indian, Chinese, Cafe..."
                      error={errors.cuisine}
                      reg={register('cuisine', { required: 'Cuisine type is required' })} />
                  </div>
                  <Field label="Business email" icon="📧" placeholder="orders@spicegarden.com"
                    error={errors.email}
                    reg={register('email', { required: 'Email is required', pattern: { value: EMAIL_RE, message: 'Invalid email' } })} />
                  <Field label="Restaurant phone" icon="📞" placeholder="9876543210"
                    error={errors.phone}
                    reg={register('phone', { required: 'Phone required', pattern: { value: PHONE_RE, message: 'Invalid phone' } })} />
                  <PassFields register={register} errors={errors} password={password} showPass={showPass} setShowPass={setShowPass} showConf={showConf} setShowConf={setShowConf} />
                  <TermsCheck register={register} errors={errors} color={activeRole.color} />
                </>}

                {/* ═══ RIDER fields ═══ */}
                {role === 'rider' && <>
                  <NameRow register={register} errors={errors} />
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <Field label="Rider ID / Handle" icon="🛵" placeholder="rider_rahul99"
                      error={errors.riderHandle}
                      reg={register('riderHandle', {
                        required: 'Rider handle is required',
                        pattern: { value: USER_RE, message: 'Lowercase, numbers & underscore (3–20 chars)' },
                      })} />
                    <div style={{ flex: 1 }}>
                      <label style={s.label}>Vehicle type</label>
                      <div style={{ position: 'relative' }}>
                        <span style={s.icon}>🏍️</span>
                        <select
                          className={`f-input ${errors.vehicleType ? 'err' : ''}`}
                          style={{ paddingLeft: '44px', appearance: 'none' }}
                          {...register('vehicleType', { required: 'Select vehicle type' })}
                        >
                          <option value="">Select...</option>
                          {['Motorcycle', 'Scooter', 'E-Scooter', 'Bicycle', 'E-Bike'].map(v => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </div>
                      {errors.vehicleType && <Err msg={errors.vehicleType.message} />}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <Field label="Vehicle number plate" icon="🔢" placeholder="MH01AB1234"
                      error={errors.vehicleNo}
                      reg={register('vehicleNo', {
                        required: 'Vehicle number required',
                        pattern: { value: PLATE_RE, message: 'Format: MH01AB1234' },
                        setValueAs: v => v.toUpperCase(),
                      })} />
                    <Field label="Driving license no." icon="📋" placeholder="MH0120110012345"
                      error={errors.dlNo}
                      reg={register('dlNo', {
                        required: 'DL number required',
                        pattern: { value: DL_RE, message: 'Format: MH0120110012345' },
                        setValueAs: v => v.toUpperCase(),
                      })} />
                  </div>
                  <div style={{ display: 'flex', gap: '14px' }}>
                    <Field label="City / Zone" icon="📍" placeholder="Mumbai South, Andheri..."
                      error={errors.city}
                      reg={register('city', { required: 'City is required' })} />
                    <Field label="Phone number" icon="📱" placeholder="9876543210"
                      error={errors.phone}
                      reg={register('phone', { required: 'Phone required', pattern: { value: PHONE_RE, message: 'Invalid phone' } })} />
                  </div>
                  <Field label="Email address" icon="📧" placeholder="rider@example.com"
                    error={errors.email}
                    reg={register('email', { required: 'Email required', pattern: { value: EMAIL_RE, message: 'Invalid email' } })} />
                  <PassFields register={register} errors={errors} password={password} showPass={showPass} setShowPass={setShowPass} showConf={showConf} setShowConf={setShowConf} />
                  <TermsCheck register={register} errors={errors} color={activeRole.color} />
                </>}

                <button type="submit" className="sub-btn"
                  style={{ background: activeRole.color, color: '#fff', boxShadow: `0 8px 24px ${activeRole.color}55` }}>
                  {role === 'customer'   && 'Create My Account 🍽️'}
                  {role === 'restaurant' && 'Register My Restaurant 🏪'}
                  {role === 'rider'      && 'Start Riding & Earning 🛵'}
                </button>
              </form>

              <Divider />
              <SocialRow />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Shared sub-components ───────────────────────────────────────

function NameRow({ register, errors }) {
  return (
    <div style={{ display: 'flex', gap: '14px' }}>
      <Field label="First name" icon="👤" placeholder="Rahul"
        error={errors.firstName}
        reg={register('firstName', {
          required: 'Required', minLength: { value: 2, message: 'Min 2 chars' },
          pattern: { value: /^[A-Za-z]+$/, message: 'Letters only' },
        })} />
      <Field label="Last name" icon="👤" placeholder="Sharma"
        error={errors.lastName}
        reg={register('lastName', {
          required: 'Required', minLength: { value: 2, message: 'Min 2 chars' },
          pattern: { value: /^[A-Za-z]+$/, message: 'Letters only' },
        })} />
    </div>
  )
}

function PassFields({ register, errors, password, showPass, setShowPass, showConf, setShowConf }) {
  return (
    <>
      <div style={{ flex: 1 }}>
        <label style={s.label}>Password</label>
        <div style={{ position: 'relative' }}>
          <span style={s.icon}>🔒</span>
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Min 6 chars, 1 upper, 1 number"
            className={`f-input ${errors.password ? 'err' : ''}`}
            style={{ paddingRight: '44px' }}
            {...register('password', {
              required: 'Password is required',
              pattern: { value: PASS_RE, message: 'Min 6 chars, 1 uppercase, 1 lowercase, 1 number' },
            })}
          />
          <button type="button" onClick={() => setShowPass(p => !p)} style={s.eyeBtn}>
            {showPass ? '🙈' : '👁️'}
          </button>
        </div>
        {errors.password && <Err msg={errors.password.message} />}
      </div>
      <div style={{ flex: 1 }}>
        <label style={s.label}>Confirm password</label>
        <div style={{ position: 'relative' }}>
          <span style={s.icon}>🔒</span>
          <input
            type={showConf ? 'text' : 'password'}
            placeholder="Repeat your password"
            className={`f-input ${errors.confirmPassword ? 'err' : ''}`}
            style={{ paddingRight: '44px' }}
            {...register('confirmPassword', {
              required: 'Please confirm password',
              validate: val => val === password || 'Passwords do not match',
            })}
          />
          <button type="button" onClick={() => setShowConf(p => !p)} style={s.eyeBtn}>
            {showConf ? '🙈' : '👁️'}
          </button>
        </div>
        {errors.confirmPassword && <Err msg={errors.confirmPassword.message} />}
      </div>
    </>
  )
}

function TermsCheck({ register, errors, color }) {
  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <input type="checkbox" id="terms"
          {...register('terms', { required: 'You must accept the terms' })}
          style={{ accentColor: color, width: '16px', height: '16px', marginTop: '2px', flexShrink: 0 }}
        />
        <label htmlFor="terms" style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.5, fontFamily: "'Sora',sans-serif" }}>
          I agree to the{' '}
          <span style={{ color, fontWeight: 700, cursor: 'pointer' }}>Terms of Service</span>{' '}
          and{' '}
          <span style={{ color, fontWeight: 700, cursor: 'pointer' }}>Privacy Policy</span>
        </label>
      </div>
      {errors.terms && <Err msg={errors.terms.message} />}
    </div>
  )
}

function Field({ label, icon, placeholder, error, reg, type = 'text' }) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <label style={s.label}>{label}</label>
      <div style={{ position: 'relative' }}>
        <span style={s.icon}>{icon}</span>
        <input type={type} placeholder={placeholder}
          className={`f-input ${error ? 'err' : ''}`}
          {...reg} />
      </div>
      {error && <Err msg={error.message} />}
    </div>
  )
}

function Perk({ icon, text }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: 'rgba(255,255,255,0.07)', borderRadius: '12px', padding: '12px 16px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <span style={{ fontSize: '20px' }}>{icon}</span>
      <span style={{ fontSize: '14px', fontWeight: 600, color: '#F9FAFB' }}>{text}</span>
    </div>
  )
}

function Divider() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0', borderTop: '1px solid #E5E7EB', position: 'relative' }}>
      <span style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#FAFAF8', padding: '0 12px', fontSize: '12px', color: '#9CA3AF' }}>
        or sign up with
      </span>
    </div>
  )
}

function SocialRow() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      {['🌐 Google', '📘 Facebook'].map(p => (
        <button key={p} style={{ flex: 1, padding: '12px', background: '#fff', border: '2px solid #E5E7EB', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Sora',sans-serif" }}>
          {p}
        </button>
      ))}
    </div>
  )
}

function Err({ msg }) {
  return <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', fontWeight: 600, fontFamily: "'Sora',sans-serif" }}>⚠️ {msg}</p>
}

// ─── Styles ─────────────────────────────────────────────────────
const s = {
  page: { display: 'flex', minHeight: '100vh', fontFamily: "'Sora',sans-serif" },
  leftPanel: {
    flex: '0 0 40%', position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '60px 40px', transition: 'background 0.4s ease',
  },
  blob1: {
    position: 'absolute', top: '-100px', right: '-80px',
    width: '450px', height: '450px', borderRadius: '50%', pointerEvents: 'none',
  },
  leftContent: { position: 'relative', zIndex: 1, width: '100%' },
  brandMark: {
    fontSize: '28px', background: '#FF3D00', width: '52px', height: '52px',
    borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '28px', boxShadow: '0 8px 24px rgba(255,61,0,0.4)',
  },
  leftTitle: {
    fontFamily: "'Sora',sans-serif", fontSize: 'clamp(28px,3vw,44px)',
    fontWeight: 800, color: '#F9FAFB', lineHeight: 1.1,
    margin: '0 0 16px 0',
  },
  leftSub: { fontSize: '14px', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '28px' },
  perksWrap: { display: 'flex', flexDirection: 'column', gap: '10px' },
  rightPanel: {
    flex: 1, background: '#FAFAF8',
    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
    padding: '40px 5vw', overflowY: 'auto',
  },
  formCard: { width: '100%', maxWidth: '520px', paddingTop: '12px', animation: 'slideUp .5s ease' },
  formHeader: { marginBottom: '28px' },
  formTitle: { fontSize: '28px', fontWeight: 800, color: '#111827', margin: '0 0 6px 0' },
  formSub: { fontSize: '14px', color: '#6B7280', margin: 0 },
  fieldGroup: { marginBottom: '20px' },
  label: { fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px', fontFamily: "'Sora',sans-serif" },
  icon: { position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px', pointerEvents: 'none' },
  eyeBtn: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' },
  successBox: { textAlign: 'center', padding: '60px 20px', animation: 'fadeIn .5s ease' },
  successTitle: { fontSize: '26px', fontWeight: 800, color: '#111827', margin: '12px 0 8px 0' },
  successSub: { fontSize: '15px', color: '#6B7280', margin: 0 },
}

export default Register