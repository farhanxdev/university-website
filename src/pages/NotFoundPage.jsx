import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md text-center space-y-6">
        <div className="text-7xl font-extrabold text-lincoln">404</div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            Sorry, the campus page or course you are looking for does not exist or has been relocated.
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow transition-colors"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Browse Courses
          </Link>
        </div>
      </div>
    </div>
  )
}
