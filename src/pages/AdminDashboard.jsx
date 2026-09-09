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
  ArrowLeft,
  XCircle,
  Eye,
  SlidersHorizontal,
  BookOpen,
  PieChart,
  Shield,
  CheckCircle2,
  X
} from 'lucide-react'
import { programsData } from '../data/programsData'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [applications, setApplications] = useState([])
  const [filterStatus, setFilterStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('applications') // 'applications' | 'programs' | 'analytics'
  const [selectedApp, setSelectedApp] = useState(null)

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
    if (confirm('Are you sure you want to delete this student application record?')) {
      const updated = applications.filter(app => app.refId !== refId)
      setApplications(updated)
      localStorage.setItem('luc_applications', JSON.stringify(updated))
      if (selectedApp?.refId === refId) setSelectedApp(null)
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
    <div className="min-h-screen bg-slate-100 flex flex-col">
      
      {/* 1. Dedicated Admin CMS Header (Separate from Public Site) */}
      <header className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Admin Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-lincoln to-red-800 text-white rounded-xl flex items-center justify-center font-bold shadow-md">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base tracking-tight text-white">LINCOLN</span>
                  <span className="text-[10px] bg-red-900 text-red-200 font-bold px-2 py-0.5 rounded uppercase border border-red-700">
                    Admin CMS
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 block -mt-0.5">Admissions & Student Management</span>
              </div>
            </div>

            {/* Staff Identity & Quick Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300 font-medium">Admissions Officer</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 font-mono text-[11px]">admin@lincoln.edu.my</span>
              </div>

              <Link
                to="/"
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 px-3.5 py-2 rounded-xl transition-colors border border-slate-800"
                title="View Public University Website"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Public Site</span>
              </Link>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800 text-xs font-bold px-3.5 py-2 rounded-xl transition-colors"
                title="Sign out of Admin CMS"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 2. Main Admin Dashboard Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">{stats.total}</div>
              <div className="text-xs font-semibold text-slate-500">Total Applicants</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-amber-600">{stats.pending}</div>
              <div className="text-xs font-semibold text-slate-500">Pending Verification</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-emerald-700">{stats.approved}</div>
              <div className="text-xs font-semibold text-slate-500">Offers Issued</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 text-lincoln rounded-2xl flex items-center justify-center font-bold">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-lincoln">{stats.intl}</div>
              <div className="text-xs font-semibold text-slate-500">International Enquiries</div>
            </div>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex border-b border-slate-200 gap-2 bg-white p-2 rounded-2xl shadow-xs">
          {[
            { id: 'applications', label: 'Admissions Applications', icon: Users },
            { id: 'programs', label: 'Active Programs Catalog', icon: BookOpen },
            { id: 'analytics', label: 'Enrollment Analytics', icon: PieChart },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-lincoln text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab 1: Applications Management */}
        {activeTab === 'applications' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4 animate-fadeIn">
            
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search applicant name, reference ID, degree..."
                  className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold">Status:</span>
                {['All', 'Pending', 'Approved'].map(status => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      filterStatus === status ? 'bg-lincoln text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Applications Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 text-slate-700 font-bold border-y border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4">Ref ID</th>
                    <th className="py-3.5 px-4">Student Name</th>
                    <th className="py-3.5 px-4">Applied Course</th>
                    <th className="py-3.5 px-4">Qualification</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.length > 0 ? (
                    filtered.map((app) => (
                      <tr key={app.refId} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-slate-900">
                          {app.refId}
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-bold text-slate-900 text-sm">{app.fullName}</div>
                          <div className="text-[11px] text-slate-400">{app.email} • {app.phone}</div>
                        </td>
                        <td className="py-4 px-4 max-w-xs">
                          <div className="line-clamp-1 font-medium text-slate-800">{app.program}</div>
                          <div className="text-[11px] text-lincoln font-semibold">{app.intake}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-[11px] font-medium">
                            {app.qualification}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            app.status === 'Approved'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {app.status || 'Pending'}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right space-x-2">
                          <button
                            onClick={() => setSelectedApp(app)}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-2.5 py-1.5 rounded-lg transition-colors text-xs inline-flex items-center gap-1"
                            title="View application details"
                          >
                            <Eye className="w-3.5 h-3.5" /> Details
                          </button>
                          {app.status !== 'Approved' ? (
                            <button
                              onClick={() => updateStatus(app.refId, 'Approved')}
                              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-2.5 py-1.5 rounded-lg transition-colors text-xs"
                            >
                              Approve
                            </button>
                          ) : (
                            <button
                              onClick={() => updateStatus(app.refId, 'Pending')}
                              className="bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold px-2.5 py-1.5 rounded-lg transition-colors text-xs"
                            >
                              Reopen
                            </button>
                          )}
                          <button
                            onClick={() => deleteApp(app.refId)}
                            className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                            title="Delete record"
                          >
                            <Trash2 className="w-4 h-4 inline" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-slate-400">
                        No student application records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* Tab 2: Programs Catalog (CMS view) */}
        {activeTab === 'programs' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-slate-900">Active Academic Programs</h3>
                <p className="text-xs text-slate-500">Configured course listings available for student applications.</p>
              </div>
              <span className="text-xs font-bold text-slate-500">{programsData.length} Programs Registered</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {programsData.map(p => (
                <div key={p.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-lincoln">{p.faculty}</span>
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">{p.level}</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{p.title}</h4>
                  <div className="flex justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
                    <span>{p.duration}</span>
                    <strong className="text-slate-900">{p.tuition}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Enrollment Analytics */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900">Applicant Demographics</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span>Malaysian Citizens</span>
                  <strong className="text-slate-900 font-bold">{applications.filter(a => a.citizenship === 'Malaysian').length} Students</strong>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span>International Students</span>
                  <strong className="text-lincoln font-bold">{applications.filter(a => a.citizenship === 'International').length} Students</strong>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900">Intake Distribution</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span>July 2026 Intake</span>
                  <strong className="text-slate-900 font-bold">{applications.filter(a => a.intake?.includes('July')).length} Students</strong>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span>March 2026 Intake</span>
                  <strong className="text-slate-900 font-bold">{applications.filter(a => a.intake?.includes('March')).length} Students</strong>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="font-mono text-xs font-bold text-lincoln">{selectedApp.refId}</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedApp.fullName}</h3>
              <p className="text-xs text-slate-500">{selectedApp.email} • {selectedApp.phone}</p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Selected Program:</span>
                <span className="font-bold text-right max-w-xs">{selectedApp.program}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Intake:</span>
                <span className="font-bold">{selectedApp.intake}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Qualification:</span>
                <span className="font-bold">{selectedApp.qualification}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Citizenship:</span>
                <span className="font-bold">{selectedApp.citizenship}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Current Status:</span>
                <span className="font-bold text-emerald-600">{selectedApp.status || 'Pending'}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              {selectedApp.status !== 'Approved' ? (
                <button
                  onClick={() => {
                    updateStatus(selectedApp.refId, 'Approved')
                    setSelectedApp({ ...selectedApp, status: 'Approved' })
                  }}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Approve Application
                </button>
              ) : (
                <button
                  onClick={() => {
                    updateStatus(selectedApp.refId, 'Pending')
                    setSelectedApp({ ...selectedApp, status: 'Pending' })
                  }}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                >
                  Revert to Pending
                </button>
              )}
              <button
                onClick={() => setSelectedApp(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
