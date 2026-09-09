import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GraduationCap, Lock, Mail, ShieldAlert, ArrowRight, UserCheck } from 'lucide-react'

export default function LoginPage() {
  const [role, setRole] = useState('admin') // 'student' | 'admin'
  const [email, setEmail] = useState('admin@lincoln.edu.my')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please provide both email and password.')
      return
    }

    if (role === 'admin') {
      // Simulate admin authentication
      localStorage.setItem('luc_auth', JSON.stringify({ role: 'admin', email }))
      navigate('/admin')
    } else {
      // Simulate student authentication
      localStorage.setItem('luc_auth', JSON.stringify({ role: 'student', email }))
      navigate('/apply')
    }
  }

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-xl p-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-lincoln text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Lincoln University Portal</h2>
          <p className="text-xs text-slate-500">Sign in to access your student services or admin CMS panel</p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => {
              setRole('admin')
              setEmail('admin@lincoln.edu.my')
            }}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              role === 'admin' ? 'bg-white text-lincoln shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Staff / Admin CMS
          </button>
          <button
            type="button"
            onClick={() => {
              setRole('student')
              setEmail('student@lincoln.edu.my')
            }}
            className={`py-2 text-xs font-bold rounded-lg transition-all ${
              role === 'student' ? 'bg-white text-lincoln shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Student Portal
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-lincoln text-xs p-3 rounded-xl flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">University Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@lincoln.edu.my"
                className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white font-semibold py-3 rounded-xl shadow transition-colors text-sm"
          >
            <span>Sign In to {role === 'admin' ? 'Admin Dashboard' : 'Student Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo Credentials Tip */}
        <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-[11px] text-slate-600 space-y-1">
          <strong className="text-slate-800 block">💡 Quick Testing Credentials:</strong>
          <div>Role: <strong>{role === 'admin' ? 'Staff / Admin' : 'Student'}</strong></div>
          <div>Default Password: <strong>admin123</strong> (Click 'Sign In' directly to test)</div>
        </div>

      </div>
    </div>
  )
}
