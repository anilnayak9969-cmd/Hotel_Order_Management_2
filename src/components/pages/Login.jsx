// import React from 'react'

// function Login() {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login


import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contex/AuthContext'

function Login() {
  const [showPass, setShowPass] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { login } = useAuth()

  const onSubmit = (data) => {
    setLoginError(''); setLoading(true)
    setTimeout(() => {
      setLoading(false)
      login({ name: data.identifier.split('@')[0] || data.identifier, email: data.identifier, phone: '' })
      navigate('/dashboard')
    }, 1500)
  }

  return (
    <div style={s.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Playfair+Display:ital@1&display=swap');
        * { box-sizing: border-box; }
        @keyframes slideUp { from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);} }
        @keyframes spin { to{transform:rotate(360deg);} }
        .login-input { width:100%; padding:14px 16px 14px 46px; background:#F9FAFB; border:2px solid #E5E7EB; border-radius:14px; font-size:15px; font-family:'Sora',sans-serif; color:#111827; outline:none; transition:border 0.2s,box-shadow 0.2s; }
        .login-input:focus { border-color:#FF3D00; box-shadow:0 0 0 4px rgba(255,61,0,0.1); background:#fff; }
        .login-input.error { border-color:#EF4444; }
        .login-btn { width:100%; padding:16px; background:#FF3D00; color:#fff; border:none; border-radius:14px; font-size:16px; font-weight:700; font-family:'Sora',sans-serif; cursor:pointer; transition:all 0.2s ease; box-shadow:0 8px 24px rgba(255,61,0,0.35); display:flex; align-items:center; justify-content:center; gap:10px; }
        .login-btn:hover:not(:disabled) { background:#e53500; transform:translateY(-2px); }
        .login-btn:disabled { opacity:0.7; cursor:not-allowed; }
        .spinner { width:18px; height:18px; border:2px solid rgba(255,255,255,0.4); border-top-color:#fff; border-radius:50%; animation:spin 0.7s linear infinite; }
        .social-btn { flex:1; padding:13px; background:#fff; border:2px solid #E5E7EB; border-radius:12px; font-family:'Sora',sans-serif; font-size:14px; font-weight:600; cursor:pointer; transition:border-color 0.2s,transform 0.2s; }
        .social-btn:hover { border-color:#FF3D00; transform:translateY(-2px); }
      `}</style>
      <div style={s.leftPanel}>
        <div style={s.formWrap}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={s.brand}>
              <div style={s.brandIcon}>🍴</div>
              <span style={s.brandName}>FoodRush</span>
            </div>
          </Link>
          <div style={s.formHeader}>
            <h1 style={s.title}>Welcome back 👋</h1>
            <p style={s.sub}>New here? <Link to="/register" style={s.link}>Create a free account →</Link></p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div style={s.fieldWrap}>
              <label style={s.label}>Email or username</label>
              <div style={s.inputWrap}>
                <span style={s.icon}>📧</span>
                <input type="text" placeholder="rahul@example.com" className={`login-input ${errors.identifier ? 'error' : ''}`}
                  {...register('identifier', { required: 'Email or username is required', validate: val => /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(val) || /^[a-z0-9_]{3,20}$/.test(val) || 'Enter a valid email or username' })} />
              </div>
              {errors.identifier && <p style={s.err}>⚠️ {errors.identifier.message}</p>}
            </div>
            <div style={s.fieldWrap}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={s.label}>Password</label>
                <a href="#" style={{ ...s.link, fontSize: '12px' }}>Forgot password?</a>
              </div>
              <div style={s.inputWrap}>
                <span style={s.icon}>🔒</span>
                <input type={showPass ? 'text' : 'password'} placeholder="Your password" className={`login-input ${errors.password ? 'error' : ''}`}
                  {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })} />
                <button type="button" onClick={() => setShowPass(p => !p)} style={s.eyeBtn}>{showPass ? '🙈' : '👁️'}</button>
              </div>
              {errors.password && <p style={s.err}>⚠️ {errors.password.message}</p>}
            </div>
            <div style={s.rememberRow}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" {...register('remember')} style={{ accentColor: '#FF3D00', width: '16px', height: '16px' }} />
                <span style={{ fontSize: '13px', color: '#6B7280', fontFamily: "'Sora',sans-serif" }}>Keep me signed in</span>
              </label>
            </div>
            {loginError && <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: '#EF4444', fontWeight: 600, marginBottom: '16px' }}>⚠️ {loginError}</div>}
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? <><div className="spinner" /> Signing in...</> : 'Sign In 🍽️'}
            </button>
          </form>
          <div style={{ textAlign: 'center', margin: '24px 0', borderTop: '1px solid #E5E7EB', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#FAFAF8', padding: '0 12px', fontSize: '12px', color: '#9CA3AF' }}>or continue with</span>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="social-btn">🌐 Google</button>
            <button className="social-btn">📘 Facebook</button>
          </div>
        </div>
      </div>
      <div style={s.rightPanel}>
        <div style={s.rBlob1} /><div style={s.rBlob2} />
        <div style={s.rightContent}>
          <h2 style={s.rightTitle}>Your next<br /><span style={s.rightAccent}>great meal</span><br />is one tap away</h2>
          <p style={s.rightSub}>Order from 500+ restaurants.<br />Track in real time. Eat happy.</p>
          <div style={{ position: 'relative', height: '160px', marginBottom: '36px' }}>
            {[{ emoji: '🍔', name: 'Smash & Stack', status: '🕐 Preparing...', color: '#FF3D00' }, { emoji: '🍕', name: 'Slice Theory', status: '🛵 On the way!', color: '#10B981' }, { emoji: '🍜', name: 'Biryani Blues', status: '✅ Delivered', color: '#FFC300' }].map((card, i) => (
              <div key={card.name} style={{ position: 'absolute', top: 0, left: 0, right: 0, background: '#1F2937', border: '1px solid #374151', borderRadius: '16px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', transform: `rotate(${[-3,0,3][i]}deg) translateY(${[-4,0,4][i]}px)`, zIndex: [1,3,2][i] }}>
                <span style={{ fontSize: '28px' }}>{card.emoji}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 2px', fontSize: '14px', fontWeight: 700, color: '#F9FAFB' }}>{card.name}</p>
                  <p style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: card.color }}>{card.status}</p>
                </div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: card.color }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[['🏪','500+','Restaurants'],['⚡','20 min','Avg delivery'],['⭐','4.8','Rating']].map(([icon,val,lbl]) => (
              <div key={lbl} style={{ display: 'flex', gap: '10px', alignItems: 'center', background: '#1F2937', border: '1px solid #374151', borderRadius: '12px', padding: '10px 16px', flex: '1 1 100px' }}>
                <span style={{ fontSize: '18px' }}>{icon}</span>
                <div>
                  <p style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#F9FAFB' }}>{val}</p>
                  <p style={{ margin: 0, fontSize: '11px', color: '#6B7280' }}>{lbl}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const s = {
  page: { display: 'flex', minHeight: '100vh', fontFamily: "'Sora',sans-serif" },
  leftPanel: { flex: '1', background: '#FAFAF8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 5vw' },
  formWrap: { width: '100%', maxWidth: '440px', animation: 'slideUp 0.5s ease forwards' },
  brand: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' },
  brandIcon: { fontSize: '24px', background: '#FF3D00', width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(255,61,0,0.35)' },
  brandName: { fontSize: '20px', fontWeight: 800, color: '#111827' },
  formHeader: { marginBottom: '32px' },
  title: { fontSize: '30px', fontWeight: 800, color: '#111827', margin: '0 0 6px 0' },
  sub: { fontSize: '14px', color: '#6B7280', margin: 0 },
  link: { color: '#FF3D00', fontWeight: 700, textDecoration: 'none' },
  fieldWrap: { marginBottom: '20px' },
  label: { fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' },
  inputWrap: { position: 'relative' },
  icon: { position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '17px', pointerEvents: 'none' },
  eyeBtn: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' },
  rememberRow: { marginBottom: '24px' },
  err: { fontSize: '12px', color: '#EF4444', marginTop: '5px', fontWeight: 600 },
  rightPanel: { flex: '0 0 45%', background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 5vw', position: 'relative', overflow: 'hidden' },
  rBlob1: { position: 'absolute', top: '-100px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,0,0.2) 0%, transparent 70%)', pointerEvents: 'none' },
  rBlob2: { position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,195,0,0.12) 0%, transparent 70%)', pointerEvents: 'none' },
  rightContent: { position: 'relative', zIndex: 1, width: '100%', maxWidth: '380px' },
  rightTitle: { fontSize: 'clamp(32px,3vw,48px)', fontWeight: 800, color: '#F9FAFB', lineHeight: 1.1, margin: '0 0 16px 0' },
  rightAccent: { color: '#FF3D00', fontFamily: "'Playfair Display',serif", fontStyle: 'italic' },
  rightSub: { fontSize: '15px', color: '#6B7280', lineHeight: 1.7, marginBottom: '40px' },
}
export default Login

