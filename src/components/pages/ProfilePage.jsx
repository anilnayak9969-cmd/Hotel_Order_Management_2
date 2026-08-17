import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contex/AuthContext'

export default function ProfilePage() {
  const { user, login } = useAuth()
  const [saved, setSaved] = useState(false)
  const { register, handleSubmit } = useForm({ defaultValues: { name: user?.name || '', email: user?.email || '', phone: user?.phone || '' } })

  const onSubmit = (data) => {
    login({ ...user, ...data })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', fontFamily: "'Sora',sans-serif" }}>
      <style>{`.p-input{width:100%;padding:12px 16px;border:2px solid #E5E7EB;border-radius:12px;font-size:14px;font-family:'Sora',sans-serif;outline:none;transition:border 0.2s;background:#fff;} .p-input:focus{border-color:#FF3D00;box-shadow:0 0 0 3px rgba(255,61,0,0.1);}`}</style>
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '32px 6vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <Link to="/dashboard" style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '8px 14px', textDecoration: 'none', color: '#374151', fontWeight: 600, fontSize: '14px' }}>← Back</Link>
          <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', margin: 0 }}>👤 My Profile</h1>
        </div>
        <div style={{ background: '#fff', borderRadius: '24px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#FF3D00', color: '#fff', fontSize: '32px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              {user?.name?.[0]?.toUpperCase() || '👤'}
            </div>
            <p style={{ fontSize: '13px', color: '#9CA3AF', margin: 0 }}>FoodRush Member</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[['Full Name', 'name', '👤', 'Rahul Sharma'], ['Email', 'email', '📧', 'rahul@example.com'], ['Phone', 'phone', '📱', '9876543210']].map(([label, field, icon, placeholder]) => (
              <div key={field}>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px' }}>{label}</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>{icon}</span>
                  <input className="p-input" placeholder={placeholder} style={{ paddingLeft: '44px' }} {...register(field)} />
                </div>
              </div>
            ))}
            <button type="submit" style={{ padding: '14px', background: saved ? '#10B981' : '#FF3D00', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 800, fontSize: '15px', cursor: 'pointer', fontFamily: "'Sora',sans-serif", transition: 'background 0.3s' }}>
              {saved ? '✅ Saved!' : 'Save Changes'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
