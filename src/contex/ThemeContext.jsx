import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem('foodrush-theme') === 'dark' }
    catch { return false }
  })

  useEffect(() => {
    try { localStorage.setItem('foodrush-theme', darkMode ? 'dark' : 'light') } catch {}
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.body.style.background = '#0f0e0e'
      document.body.style.color = '#F9FAFB'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.background = '#FAFAF8'
      document.body.style.color = '#111827'
    }
  }, [darkMode])

  const toggleDark = () => setDarkMode(prev => !prev)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider')
  return ctx
}