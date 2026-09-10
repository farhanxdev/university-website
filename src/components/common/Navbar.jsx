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
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
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
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/85 dark:bg-[#070A11]/90 backdrop-blur-xl shadow-xl shadow-slate-900/5 dark:shadow-black/50 border-b border-slate-200/80 dark:border-slate-800/80' 
        : 'bg-white/95 dark:bg-[#070A11]/95 backdrop-blur-lg border-b border-slate-200/70 dark:border-slate-800/60'
    }`}>
      {/* Top Futuristic Glowing Neon Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-lincoln to-transparent opacity-90"></div>

      {/* Top micro-announcement bar */}
      <div className="bg-slate-950/95 dark:bg-black/95 text-slate-300 text-xs py-2 px-4 hidden md:block border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="flex items-center gap-2 text-slate-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-bold tracking-wider">ADMISSIONS 2026 ACTIVE:</span>
              <span>50% Merit Scholarships Available</span>
            </span>
            <span className="text-slate-700">|</span>
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
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none group-hover:text-lincoln transition-colors">
                  LINCOLN
                </span>
                <span className="text-[10px] bg-red-100 dark:bg-red-950 text-lincoln dark:text-red-400 font-bold px-1.5 py-0.5 rounded tracking-wider uppercase border border-red-200/50 dark:border-red-800/50">
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
                      ? 'text-lincoln bg-red-50/80 dark:bg-red-950/40 shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-lincoln dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
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
              className="inline-flex items-center gap-2 bg-slate-100/80 dark:bg-slate-900/80 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-lincoln dark:hover:text-red-400 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(200,16,46,0.25)] transition-all group"
              title="Search degrees with AI (Ctrl + K)"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:rotate-12 transition-transform" />
              <span>AI Search</span>
              <kbd className="hidden lg:inline-block bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-400 px-1.5 py-0.5 rounded text-[10px] border border-slate-200 dark:border-slate-700 font-mono shadow-xs">
                Ctrl K
              </kbd>
            </button>

            {/* Theme Toggle Button (Dark / Light Mode) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-amber-400 transition-colors shadow-xs hover:border-amber-400/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-600" />}
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
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-lincoln via-red-700 to-rose-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-red-900/30 hover:shadow-red-600/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 overflow-hidden group"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-red-50 hover:text-lincoln transition-colors"
              aria-label="AI Search"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800 dark:text-white" />}
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
