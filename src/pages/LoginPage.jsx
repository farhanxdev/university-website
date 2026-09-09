import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { GraduationCap, Lock, Mail, ShieldAlert, ArrowRight, ShieldCheck, UserCheck, ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  const [searchParams] = useSearchParams()
  const initialRole = searchParams.get('role') === 'admin' ? 'admin' : 'student'

  const [role, setRole] = useState(initialRole) // 'student' | 'admin'
  const [email, setEmail] = useState(initialRole === 'admin' ? 'admin@lincoln.edu.my' : 'student@lincoln.edu.my')
  const [password, setPassword] = useState('demo123')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const r = searchParams.get('role')
    if (r === 'admin') {
      setRole('admin')
      setEmail('admin@lincoln.edu.my')
    } else if (r === 'student') {
      setRole('student')
      setEmail('student@lincoln.edu.my')
    }
  }, [searchParams])

  const handleRoleChange = (newRole) => {
    setRole(newRole)
    if (newRole === 'admin') {
      setEmail('admin@lincoln.edu.my')
    } else {
      setEmail('student@lincoln.edu.my')
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please provide your login credentials.')
      return
    }

    if (role === 'admin') {
      localStorage.setItem('luc_auth', JSON.stringify({ role: 'admin', email }))
      navigate('/admin') // Redirect to isolated Admin CMS
    } else {
      localStorage.setItem('luc_auth', JSON.stringify({ role: 'student', email }))
      navigate('/student') // Redirect to isolated Student Portal
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 space-y-6 relative">
        
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-lincoln transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Website
        </Link>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-gradient-to-br from-lincoln to-red-800 text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
            {role === 'admin' ? <ShieldCheck className="w-8 h-8" /> : <GraduationCap className="w-8 h-8" />}
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            {role === 'admin' ? 'Staff CMS Login' : 'Student Portal Login'}
          </h2>
          <p className="text-xs text-slate-500">
            {role === 'admin' 
              ? 'Access admission management and student enrollment records' 
              : 'Access your course status, offer letters, and academic schedules'}
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-2xl">
          <button
            type="button"
            onClick={() => handleRoleChange('student')}
            className={`py-2.5 text-xs font-bold rounded-xl transition-all ${
              role === 'student' ? 'bg-white text-lincoln shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Student Portal
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange('admin')}
            className={`py-2.5 text-xs font-bold rounded-xl transition-all ${
              role === 'admin' ? 'bg-white text-lincoln shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Staff / Admin CMS
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-lincoln text-xs p-3.5 rounded-2xl flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
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
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm"
          >
            <span>Sign In to {role === 'admin' ? 'Admin CMS Portal' : 'Student Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Fast Demo Testing Box */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-xs text-slate-600 space-y-2">
          <div className="flex items-center justify-between font-bold text-slate-800">
            <span>💡 1-Click Demo Testing:</span>
            <span className="text-[10px] bg-red-100 text-lincoln px-2 py-0.5 rounded-full font-semibold">
              Ready to Sign In
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            {role === 'student' ? (
              <span>Logging in as <strong>student@lincoln.edu.my</strong> directs you straight to the dedicated <strong>Student Portal</strong> (view application, offer letter, and semester modules).</span>
            ) : (
              <span>Logging in as <strong>admin@lincoln.edu.my</strong> directs you straight to the dedicated <strong>Admin CMS Portal</strong> (manage student applications, approve/reject admissions).</span>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
