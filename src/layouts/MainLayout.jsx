import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import AIChatbot from '../components/ai/AIChatbot'
import AISmartSearch from '../components/ai/AISmartSearch'

export default function MainLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      
      <main className="flex-grow">
        <Outlet context={{ onOpenSearch: () => setIsSearchOpen(true) }} />
      </main>

      <Footer />

      {/* Floating AI Chat Assistant */}
      <AIChatbot />

      {/* Global AI Smart Search Modal (Triggered by button or Ctrl+K) */}
      <AISmartSearch
        isOpen={isSearchOpen}
        onClose={setIsSearchOpen}
      />
    </div>
  )
}
