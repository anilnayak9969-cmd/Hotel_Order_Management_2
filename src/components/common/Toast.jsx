import React, { useState, useEffect, createContext, useContext, useCallback } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((msg, type = 'success') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, msg, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000)
  }, [])

  const colors = { success: '#10B981', error: '#EF4444', info: '#3B82F6', cart: '#FF3D00' }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div style={{
        position: 'fixed', bottom: '24px', left: '50%',
        transform: 'translateX(-50%)', zIndex: 9999,
        display: 'flex', flexDirection: 'column', gap: '10px',
        alignItems: 'center', pointerEvents: 'none',
      }}>
        {toasts.map(t => (
          <div key={t.id} style={{
            background: colors[t.type] || '#10B981', color: '#fff',
            padding: '12px 24px', borderRadius: '999px',
            fontWeight: 700, fontSize: '14px', fontFamily: "'Sora', sans-serif",
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            animation: 'toastIn 0.3s ease',
            whiteSpace: 'nowrap',
          }}>
            <style>{`@keyframes toastIn { from{opacity:0;transform:translateY(16px);} to{opacity:1;transform:translateY(0);} }`}</style>
            {t.msg}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be inside ToastProvider')
  return ctx
}