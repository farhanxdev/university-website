import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Users, 
  CheckCircle, 
  Clock, 
  Trash2, 
  Search, 
  LogOut, 
  FileText, 
  GraduationCap, 
  ArrowLeft 
} from 'lucide-react'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [applications, setApplications] = useState([])
  const [filterStatus, setFilterStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Load existing applications or populate sample data
    const saved = JSON.parse(localStorage.getItem('luc_applications') || '[]')
    if (saved.length === 0) {
      const sampleApps = [
        {
          refId: 'LUC-849201',
          fullName: 'Ahmad Faiz bin Rosli',
          email: 'faiz.rosli@gmail.com',
          phone: '+60 17-293 8472',
          citizenship: 'Malaysian',
          program: 'Bachelor of Computer Science (Software Engineering) (Hons)',
          qualification: 'STPM / A-Levels',
          intake: 'July 2026',
          status: 'Approved',
          submittedAt: '2026-09-08T10:30:00.000Z'
        },
        {
          refId: 'LUC-419024',
          fullName: 'Zhang Wei',
          email: 'zhangwei.sg@outlook.com',
          phone: '+65 9123 4567',
          citizenship: 'International',
          program: 'Bachelor of Business Administration (Hons)',
          qualification: 'Recognized Diploma',
          intake: 'March 2026',
          status: 'Pending',
          submittedAt: '2026-09-09T08:15:00.000Z'
        },
        {
          refId: 'LUC-938102',
          fullName: 'Nurul Huda binti Zamri',
          email: 'huda.zamri@yahoo.com',
          phone: '+60 19-338 1290',
          citizenship: 'Malaysian',
          program: 'Diploma in Information Technology',
          qualification: 'SPM / O-Levels',
          intake: 'July 2026',
          status: 'Pending',
          submittedAt: '2026-09-09T11:45:00.000Z'
        }
      ]
      localStorage.setItem('luc_applications', JSON.stringify(sampleApps))
      setApplications(sampleApps)
    } else {
      setApplications(saved)
    }
  }, [])

  const updateStatus = (refId, newStatus) => {
    const updated = applications.map(app => 
      app.refId === refId ? { ...app, status: newStatus } : app
    )
    setApplications(updated)
    localStorage.setItem('luc_applications', JSON.stringify(updated))
  }

  const deleteApp = (refId) => {
    if (confirm('Are you sure you want to delete this application record?')) {
      const updated = applications.filter(app => app.refId !== refId)
      setApplications(updated)
      localStorage.setItem('luc_applications', JSON.stringify(updated))
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('luc_auth')
    navigate('/login')
  }

  const filtered = applications.filter(app => {
    const matchStatus = filterStatus === 'All' || app.status === filterStatus
    const matchSearch =
      app.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.refId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.program?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchStatus && matchSearch
  })

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'Pending' || !a.status).length,
    approved: applications.filter(a => a.status === 'Approved').length,
    intl: applications.filter(a => a.citizenship === 'International').length,
  }

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-lincoln text-white rounded-xl flex items-center justify-center font-bold">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Lincoln CMS Admin Panel</h1>
            <p className="text-xs text-slate-500">Student Admissions & Program Enrollment Management</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-xs font-semibold text-slate-600 hover:text-lincoln flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Site
          </Link>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-red-50 hover:text-lincoln text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </button>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{stats.total}</div>
            <div className="text-xs font-medium text-slate-500">Total Applicants</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{stats.pending}</div>
            <div className="text-xs font-medium text-slate-500">Pending Review</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{stats.approved}</div>
            <div className="text-xs font-medium text-slate-500">Admitted Students</div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-red-50 text-lincoln rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{stats.intl}</div>
            <div className="text-xs font-medium text-slate-500">International Enquiries</div>
          </div>
        </div>
      </div>

      {/* Applications Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-6">
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search applicant name, course..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold">Filter:</span>
            {['All', 'Pending', 'Approved'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  filterStatus === status ? 'bg-lincoln text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-bold border-y border-slate-200">
              <tr>
                <th className="py-3 px-4">Ref ID</th>
                <th className="py-3 px-4">Applicant</th>
                <th className="py-3 px-4">Selected Program</th>
                <th className="py-3 px-4">Qualification</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length > 0 ? (
                filtered.map((app) => (
                  <tr key={app.refId} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                      {app.refId}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-slate-900">{app.fullName}</div>
                      <div className="text-[11px] text-slate-400">{app.email} • {app.phone}</div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="line-clamp-1 font-medium text-slate-800">{app.program}</div>
                      <div className="text-[11px] text-lincoln font-semibold">{app.intake}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                        {app.qualification}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        app.status === 'Approved'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {app.status || 'Pending'}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-2">
                      {app.status !== 'Approved' && (
                        <button
                          onClick={() => updateStatus(app.refId, 'Approved')}
                          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 rounded transition-colors text-[11px]"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => deleteApp(app.refId)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors"
                        title="Delete application"
                      >
                        <Trash2 className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-slate-400">
                    No applications match the current filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
