import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import AIChatbot from '../components/ai/AIChatbot'
import AISmartSearch from '../components/ai/AISmartSearch'

export default function MainLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#070A11] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      
      <main className="flex-grow">
        <Outlet context={{ onOpenSearch: () => setIsSearchOpen(true) }} />
      </main>

      <Footer />

      {/* Floating AI Chat Assistant (Only shown for prospective students, hidden in Admin panel) */}
      {!location.pathname.startsWith('/admin') && <AIChatbot />}

      {/* Global AI Smart Search Modal (Triggered by button or Ctrl+K) */}
      <AISmartSearch
        isOpen={isSearchOpen}
        onClose={setIsSearchOpen}
      />
    </div>
  )
}
