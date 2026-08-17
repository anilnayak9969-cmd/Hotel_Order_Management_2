import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1     from './Navbar1'
import Sidebar     from './Sidebar'
import CartSidebar from './CartSidebar'
import Footer2     from './Footer2'
import { ToastProvider } from './Toast'

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <ToastProvider>
      <div style={{ fontFamily: "'Sora', sans-serif" }}>
        <Sidebar     isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <CartSidebar />
        <Navbar1     onOpenSidebar={() => setSidebarOpen(true)} />
        <main><Outlet /></main>
        <Footer2 />
      </div>
    </ToastProvider>
  )
}
export default Layout