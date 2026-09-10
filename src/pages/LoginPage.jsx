import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { GraduationCap, Lock, Mail, ShieldAlert, ArrowRight, ShieldCheck, ArrowLeft, Info, HelpCircle } from 'lucide-react'
import { useToast } from '../context/ToastContext'
import { authenticateUser } from '../utils/authStorage'

export default function LoginPage() {
  const toast = useToast()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const initialRole = searchParams.get('role') === 'admin' ? 'admin' : 'student'

  const [role, setRole] = useState(initialRole) // 'student' | 'admin'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const r = searchParams.get('role')
    if (r === 'admin') {
      setRole('admin')
      setEmail('')
      setPassword('')
    } else if (r === 'student') {
      setRole('student')
      setEmail('')
      setPassword('')
    }
  }, [searchParams])

  const handleRoleChange = (newRole) => {
    setRole(newRole)
    setError('')
    setEmail('')
    setPassword('')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Please provide both email/Student ID and password.')
      return
    }

    setLoading(true)
    const result = authenticateUser(role, email, password)
    setLoading(false)

    if (!result.success) {
      setError(result.error)
      toast.error(result.error)
      return
    }

    if (role === 'admin') {
      toast.success('Signed in as Administrator')
      navigate('/admin')
    } else {
      toast.success(`Welcome back, ${result.auth.fullName || 'Student'}!`)
      navigate('/student')
    }
  }

  return (
    <div className="min-h-[82vh] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Ambient Futuristic Glowing Aurora Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-[110px] pointer-events-none animate-pulseGlow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none"></div>

      <div className="w-full max-w-md bg-white/95 dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-xl p-8 space-y-6 relative z-10">
        
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
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {role === 'admin' ? 'Staff CMS Login' : 'Student Portal Login'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {role === 'admin' 
              ? 'Admissions management, student credential issuance & record administration' 
              : 'Sign in to access your admission progress, offer letter & enrolled modules'}
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="grid grid-cols-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl">
          <button
            type="button"
            onClick={() => handleRoleChange('student')}
            className={`py-2.5 text-xs font-bold rounded-xl transition-all ${
              role === 'student' 
                ? 'bg-white dark:bg-slate-900 text-lincoln shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Student Portal
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange('admin')}
            className={`py-2.5 text-xs font-bold rounded-xl transition-all ${
              role === 'admin' 
                ? 'bg-white dark:bg-slate-900 text-lincoln shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Staff / Admin CMS
          </button>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs p-3.5 rounded-2xl flex items-start gap-2.5 leading-relaxed">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {role === 'admin' ? 'Staff Email Address' : 'Registered Student Email or Student ID'}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'admin' ? 'admin@lincoln.edu.my' : 'e.g. your-email@gmail.com or LUC20268491'}
                className="w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : `Sign In to ${role === 'admin' ? 'Admin CMS Portal' : 'Student Portal'}`}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Real Institutional Access Information (Replaces old dummy test buttons) */}
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-4 rounded-2xl text-xs space-y-2">
          {role === 'student' ? (
            <div className="space-y-1.5 text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-white">
                <Info className="w-4 h-4 text-lincoln" />
                <span>How to Get Your Student Login:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Your Student ID and password are generated by the Admissions Office once your online application is reviewed and approved.
              </p>
              <div className="pt-1.5 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[11px]">
                <span className="text-slate-500">Haven't applied yet?</span>
                <Link to="/apply" className="font-bold text-lincoln hover:underline">
                  Submit Online Application &rarr;
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Admissions Staff Credentials:</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Authorized staff sign-in with university email. (Registrar Admin: <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-lincoln font-mono font-bold">admin@lincoln.edu.my</code> / password: <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-lincoln font-mono font-bold">admin123</code>)
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
