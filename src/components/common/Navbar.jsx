import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  GraduationCap, 
  Menu, 
  X, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  User, 
  ShieldCheck,
  BookOpen,
  Award,
  ChevronDown
} from 'lucide-react'

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academic Programs', path: '/programs' },
    { name: 'Contact & FAQ', path: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' 
        : 'bg-white border-b border-slate-200'
    }`}>
      {/* Top micro-announcement bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-emerald-400 font-semibold">2026 Admissions Open:</span> Up to 50% Merit Scholarships
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3 h-3 text-lincoln" /> Hotline: +60 3-7806 3478 (Toll-Free: 1300 880 111)
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <Link to="/programs" className="hover:text-white transition-colors">Course Finder</Link>
            <span className="text-slate-700">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Campus Tour</Link>
            <span className="text-slate-700">|</span>
            <Link to="/login?role=admin" className="hover:text-red-300 transition-colors flex items-center gap-1 font-semibold text-red-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Staff CMS
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/login?role=student" className="hover:text-white transition-colors flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> Student Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo with Lincoln Crest & Typography */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-lincoln to-red-800 text-white rounded-2xl flex items-center justify-center shadow-md shadow-red-900/20 group-hover:scale-105 transition-all duration-200">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center shadow-xs">
                <Award className="w-2.5 h-2.5 text-slate-900" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 leading-none group-hover:text-lincoln transition-colors">
                  LINCOLN
                </span>
                <span className="text-[10px] bg-red-100 text-lincoln font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                  LUC
                </span>
              </div>
              <span className="block text-[11px] font-bold tracking-widest text-lincoln uppercase mt-0.5">
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
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'text-lincoln bg-red-50/80 shadow-xs'
                      : 'text-slate-700 hover:text-lincoln hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-lincoln rounded-full"></span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* AI Smart Search Button */}
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-2 bg-slate-100/80 hover:bg-red-50 hover:text-lincoln text-slate-700 text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-xs transition-all group"
              title="Search degrees with AI (Ctrl + K)"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span>AI Search</span>
              <kbd className="hidden lg:inline-block bg-white text-slate-400 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 font-mono shadow-xs">
                Ctrl K
              </kbd>
            </button>

            {/* Apply Now Primary CTA (Only for students, hidden in admin panel) */}
            {isAdmin ? (
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Admin Session</span>
                </span>
                <Link
                  to="/"
                  className="text-xs font-bold text-slate-700 hover:text-lincoln bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors"
                >
                  Exit to Site
                </Link>
              </div>
            ) : (
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-red-900/20 hover:shadow-lg hover:shadow-red-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl text-slate-700 hover:bg-red-50 hover:text-lincoln transition-colors"
              aria-label="AI Search"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                  isActive(link.path)
                    ? 'text-lincoln bg-red-50 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            {!isAdmin ? (
              <Link
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center bg-lincoln hover:bg-lincoln-dark text-white font-bold py-3.5 rounded-xl shadow-md text-sm"
              >
                Start Admission Application
              </Link>
            ) : (
              <div className="bg-slate-900 text-white p-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Admin CMS Session Active</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                to="/login?role=student"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Student Portal
              </Link>
              <Link
                to="/login?role=admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 text-xs font-bold text-lincoln bg-red-50 hover:bg-red-100 rounded-xl"
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
