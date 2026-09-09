import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  GraduationCap, 
  Menu, 
  X, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  User, 
  ShieldCheck 
} from 'lucide-react'

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top micro-bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-lincoln" /> Hotline: +60 3-7806 3478
            </span>
            <span className="text-slate-400">Intakes: March / July / October 2026</span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <Link to="/contact" className="hover:text-white transition-colors">Campus Location</Link>
            <span className="text-slate-600">|</span>
            <Link to="/admin" className="hover:text-white transition-colors flex items-center gap-1 text-red-300">
              <ShieldCheck className="w-3.5 h-3.5" /> Staff CMS Panel
            </Link>
            <span className="text-slate-600">|</span>
            <Link to="/login" className="hover:text-white transition-colors flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> Portal Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-lincoln text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-slate-900 leading-tight">
                LINCOLN
              </span>
              <span className="block text-xs font-semibold tracking-wider text-lincoln uppercase">
                University College
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-lincoln bg-red-50 font-semibold'
                      : 'text-slate-600 hover:text-lincoln hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* AI Smart Search Button */}
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-red-50 hover:text-lincoln text-slate-700 text-xs font-medium px-3.5 py-2 rounded-lg border border-slate-200 transition-colors group"
              title="Open AI Smart Search (Ctrl + K)"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
              <span>AI Search</span>
              <kbd className="hidden lg:inline-block bg-white text-slate-400 px-1.5 py-0.5 rounded text-[10px] border border-slate-200">
                Ctrl K
              </kbd>
            </button>

            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="AI Search"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive(link.path)
                  ? 'text-lincoln bg-red-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-lincoln hover:bg-lincoln-dark text-white font-medium px-4 py-3 rounded-lg shadow-sm"
            >
              Apply for Admission
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
              >
                Portal Login
              </Link>
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 text-xs font-semibold text-lincoln bg-red-50 rounded-lg"
              >
                Staff CMS Panel
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
