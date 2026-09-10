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
  X,
  Download,
  Key,
  Copy,
  Check,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Send,
  AlertCircle
} from 'lucide-react'
import { programsData } from '../data/programsData'
import { useToast } from '../context/ToastContext'
import { 
  getActiveAuth, 
  clearActiveAuth, 
  getApplications, 
  issueStudentCredentials, 
  updateApplicationStatus, 
  saveApplications 
} from '../utils/authStorage'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const toast = useToast()
  const [applications, setApplications] = useState([])
  const [filterStatus, setFilterStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('applications') // 'applications' | 'programs' | 'analytics'
  const [selectedApp, setSelectedApp] = useState(null)
  
  // Credential generation modal state
  const [credentialModalApp, setCredentialModalApp] = useState(null)
  const [genStudentId, setGenStudentId] = useState('')
  const [genEmail, setGenEmail] = useState('')
  const [genPassword, setGenPassword] = useState('')
  const [genScholarship, setGenScholarship] = useState('50% President Merit Scholarship')
  const [issuedSummary, setIssuedSummary] = useState(null)
  const [copied, setCopied] = useState(false)

  // 1. Role Protection check
  useEffect(() => {
    const auth = getActiveAuth()
    if (!auth || auth.role !== 'admin') {
      toast.error('Staff administrator login required')
      navigate('/login?role=admin')
      return
    }
    setApplications(getApplications())
  }, [navigate, toast])

  const refreshList = () => {
    setApplications(getApplications())
  }

  const handleOpenCredentialModal = (app) => {
    setCredentialModalApp(app)
    const randomSuffix = app.refId ? app.refId.replace(/\D/g, '').slice(-4) : Math.floor(1000 + Math.random() * 9000)
    const proposedId = app.studentId || `LUC2026${randomSuffix}`
    setGenStudentId(proposedId)
    setGenEmail(app.email || '')
    const proposedPass = app.password || `LUC#pass${Math.floor(1000 + Math.random() * 9000)}`
    setGenPassword(proposedPass)
    setGenScholarship(app.scholarship || '50% President Merit Scholarship')
    
    if (app.credentialsIssued) {
      setIssuedSummary({
        studentId: app.studentId,
        email: app.email,
        password: app.password,
        fullName: app.fullName,
        program: app.program
      })
    } else {
      setIssuedSummary(null)
    }
    setCopied(false)
  }

  const handleRegeneratePassword = () => {
    const newPass = `LUC#pass${Math.floor(1000 + Math.random() * 9000)}`
    setGenPassword(newPass)
  }

  const handleRegenerateStudentId = () => {
    const newId = `LUC2026${Math.floor(1000 + Math.random() * 9000)}`
    setGenStudentId(newId)
  }

  const handleIssueCredentials = (e) => {
    e.preventDefault()
    if (!genStudentId.trim() || !genPassword.trim() || !genEmail.trim()) {
      toast.error('Please provide Student ID, login email, and password.')
      return
    }

    const result = issueStudentCredentials(credentialModalApp.refId, {
      studentId: genStudentId,
      password: genPassword,
      email: genEmail,
      scholarship: genScholarship
    })

    if (result.success) {
      refreshList()
      setIssuedSummary({
        studentId: genStudentId,
        email: genEmail,
        password: genPassword,
        fullName: credentialModalApp.fullName,
        program: credentialModalApp.program
      })
      toast.success(`Student credentials issued! Student ID: ${genStudentId}`)
    } else {
      toast.error(result.error || 'Failed to issue credentials')
    }
  }

  const handleCopyCredentials = () => {
    if (!issuedSummary) return
    const text = `🎓 Lincoln University College - Official Student Portal Credentials
Candidate: ${issuedSummary.fullName}
Student ID: ${issuedSummary.studentId}
Login Email: ${issuedSummary.email}
Temporary Password: ${issuedSummary.password}
Program: ${issuedSummary.program || credentialModalApp?.program || ''}
Portal Login: ${window.location.origin}/login?role=student`

    navigator.clipboard.writeText(text)
    setCopied(true)
    toast.success('Credentials copied to clipboard!')
    setTimeout(() => setCopied(false), 2500)
  }

  const updateStatus = (refId, newStatus) => {
    const updated = updateApplicationStatus(refId, newStatus)
    if (updated) {
      refreshList()
      toast.info(`Application ${refId} status set to '${newStatus}'`)
    }
  }

  const deleteApp = (refId) => {
    if (confirm('Are you sure you want to delete this student application record?')) {
      const updated = applications.filter(app => app.refId !== refId)
      saveApplications(updated)
      setApplications(updated)
      if (selectedApp?.refId === refId) setSelectedApp(null)
      toast.warning(`Application record ${refId} deleted`)
    }
  }

  const handleLogout = () => {
    clearActiveAuth()
    toast.info('Signed out of Admin CMS')
    navigate('/login?role=admin')
  }

  const exportCSV = () => {
    if (applications.length === 0) {
      toast.warning('No applications available to export')
      return
    }
    const headers = "Reference ID,Student ID,Full Name,Email,Phone,Citizenship,Program,Intake,Status,Credentials Issued\n"
    const rows = applications.map(a => 
      `"${a.refId}","${a.studentId || 'N/A'}","${a.fullName}","${a.email}","${a.phone}","${a.citizenship}","${a.program}","${a.intake}","${a.status || 'Pending Review'}","${a.credentialsIssued ? 'Yes' : 'No'}"`
    ).join("\n")
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `Lincoln_Applications_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    toast.success('Applications exported to CSV successfully!')
  }

  const filtered = applications.filter(app => {
    const matchStatus = 
      filterStatus === 'All' ? true :
      filterStatus === 'Approved' ? (app.status === 'Approved' || app.credentialsIssued) :
      filterStatus === 'Pending' ? (app.status === 'Pending Review' || !app.credentialsIssued) :
      app.status === filterStatus

    const matchSearch =
      app.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.refId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.studentId && app.studentId.toLowerCase().includes(searchTerm.toLowerCase())) ||
      app.program?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase())

    return matchStatus && matchSearch
  })

  const stats = {
    total: applications.length,
    pending: applications.filter(a => !a.credentialsIssued).length,
    approved: applications.filter(a => a.credentialsIssued).length,
    intl: applications.filter(a => a.citizenship === 'International').length,
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      
      {/* 1. Dedicated Admin CMS Header */}
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

            {/* Admin Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-slate-300">Staff: <strong>admin@lincoln.edu.my</strong></span>
              </div>

              <Link
                to="/"
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 bg-slate-900 hover:bg-slate-850 px-3 py-2 rounded-xl transition-colors border border-slate-800"
                title="View Public University Website"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Public Website</span>
              </Link>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 bg-red-950/60 hover:bg-red-900 text-red-200 border border-red-800 text-xs font-bold px-3 py-2 rounded-xl transition-colors"
                title="Sign out of Admin CMS"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 2. Main Admin Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Top Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">{stats.total}</div>
              <div className="text-xs font-semibold text-slate-500">Total Applications</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-amber-600">{stats.pending}</div>
              <div className="text-xs font-semibold text-slate-500">Pending Credential Issuance</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-emerald-600">{stats.approved}</div>
              <div className="text-xs font-semibold text-slate-500">Approved & IDs Issued</div>
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
            { id: 'applications', label: 'Admissions & Credential Generation', icon: Users },
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
                  placeholder="Search applicant, Ref, Student ID, degree..."
                  className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-400 font-semibold">Filter:</span>
                  {[
                    { id: 'All', label: 'All' },
                    { id: 'Pending', label: 'Pending Issuance' },
                    { id: 'Approved', label: 'IDs Issued' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setFilterStatus(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        filterStatus === item.id ? 'bg-lincoln text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={exportCSV}
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition-colors"
                  title="Export all applications as CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Applications Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 text-slate-700 font-bold border-y border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4">Ref ID</th>
                    <th className="py-3.5 px-4">Student Name & Contact</th>
                    <th className="py-3.5 px-4">Applied Course</th>
                    <th className="py-3.5 px-4">Student ID & Login</th>
                    <th className="py-3.5 px-4">Admission Status</th>
                    <th className="py-3.5 px-4 text-right">Admin Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.length > 0 ? (
                    filtered.map((app) => (
                      <tr key={app.refId} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-slate-900">
                          <div>{app.refId}</div>
                          <span className="text-[10px] text-slate-400 font-sans block mt-0.5">
                            {new Date(app.submittedAt).toLocaleDateString('en-MY')}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-bold text-slate-900 text-sm">{app.fullName}</div>
                          <div className="text-[11px] text-slate-400">{app.email} • {app.phone}</div>
                          <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                            {app.citizenship} • {app.qualification}
                          </div>
                        </td>
                        <td className="py-4 px-4 max-w-xs">
                          <div className="line-clamp-1 font-medium text-slate-800">{app.program}</div>
                          <div className="text-[11px] text-lincoln font-semibold">{app.intake}</div>
                        </td>
                        <td className="py-4 px-4">
                          {app.credentialsIssued ? (
                            <div className="space-y-1">
                              <span className="font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold text-[11px] border border-emerald-200 inline-block">
                                {app.studentId}
                              </span>
                              <div className="text-[10px] text-slate-500 font-mono">
                                Pass: <span className="font-bold text-slate-700">{app.password}</span>
                              </div>
                            </div>
                          ) : (
                            <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-md text-[10px] font-bold inline-flex items-center gap-1">
                              <Clock className="w-3 h-3 text-amber-500" /> Pending Issuance
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-flex items-center gap-1 ${
                            app.credentialsIssued || app.status === 'Approved'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {app.credentialsIssued ? (
                              <>
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" /> ID Issued
                              </>
                            ) : (
                              'Under Review'
                            )}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right space-x-1.5 whitespace-nowrap">
                          {/* Generate or View Credentials Button */}
                          <button
                            type="button"
                            onClick={() => handleOpenCredentialModal(app)}
                            className={`font-bold px-3 py-1.5 rounded-lg transition-all text-xs inline-flex items-center gap-1.5 shadow-xs ${
                              app.credentialsIssued
                                ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200'
                                : 'bg-lincoln hover:bg-lincoln-dark text-white shadow-red-900/20'
                            }`}
                            title={app.credentialsIssued ? 'View / Edit Issued Credentials' : 'Generate Student ID and Password'}
                          >
                            <Key className="w-3.5 h-3.5" />
                            <span>{app.credentialsIssued ? 'View Credentials' : 'Generate ID & Pass'}</span>
                          </button>

                          {/* Details Button */}
                          <button
                            type="button"
                            onClick={() => setSelectedApp(app)}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-2.5 py-1.5 rounded-lg transition-colors text-xs inline-flex items-center gap-1"
                            title="View Full Application Details"
                          >
                            <Eye className="w-3.5 h-3.5" /> Details
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
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

        {/* Tab 2: Programs Catalog */}
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
                  <strong className="text-slate-900 font-bold">{applications.filter(a => a.citizenship === 'International').length} Students</strong>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span>Credentials Issued</span>
                  <strong className="text-emerald-600 font-bold">{stats.approved} Students</strong>
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

      {/* 3. CREDENTIAL GENERATOR MODAL (Core User Request) */}
      {credentialModalApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-200 relative my-8">
            <button
              onClick={() => {
                setCredentialModalApp(null)
                setIssuedSummary(null)
              }}
              className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lincoln/10 text-lincoln flex items-center justify-center font-bold">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {credentialModalApp.credentialsIssued ? 'Student Credentials & Portal Access' : 'Generate Student ID & Portal Credentials'}
                </h3>
                <p className="text-xs text-slate-500">
                  For Candidate: <strong className="text-slate-800">{credentialModalApp.fullName}</strong> ({credentialModalApp.refId})
                </p>
              </div>
            </div>

            {/* If credentials are already issued, show copyable credentials card */}
            {issuedSummary && (
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Official Credentials Active
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyCredentials}
                    className="inline-flex items-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-2.5 py-1 rounded-lg transition-colors shadow-xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Credentials'}</span>
                  </button>
                </div>

                <div className="bg-white p-3 rounded-xl border border-emerald-200 text-xs font-mono space-y-1 text-slate-800">
                  <div><strong>Student ID:</strong> <span className="text-lincoln font-bold">{issuedSummary.studentId}</span></div>
                  <div><strong>Login Email:</strong> {issuedSummary.email}</div>
                  <div><strong>Password:</strong> <span className="font-bold text-emerald-700">{issuedSummary.password}</span></div>
                  <div className="text-[10px] text-slate-400 font-sans pt-1 border-t border-slate-100">
                    Student can now sign in at: <code className="text-lincoln">/login?role=student</code>
                  </div>
                </div>
              </div>
            )}

            {/* Credential Issuance Form */}
            <form onSubmit={handleIssueCredentials} className="space-y-4">
              {/* Student ID */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-700">Official Student ID</label>
                  <button
                    type="button"
                    onClick={handleRegenerateStudentId}
                    className="text-[11px] text-lincoln hover:underline flex items-center gap-1 font-semibold"
                  >
                    <RefreshCw className="w-3 h-3" /> Auto-Generate New ID
                  </button>
                </div>
                <input
                  type="text"
                  required
                  value={genStudentId}
                  onChange={(e) => setGenStudentId(e.target.value)}
                  placeholder="e.g. LUC20268491"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                />
              </div>

              {/* Student Login Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Student Portal Login Email</label>
                <input
                  type="email"
                  required
                  value={genEmail}
                  onChange={(e) => setGenEmail(e.target.value)}
                  placeholder="e.g. student@gmail.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                />
              </div>

              {/* Student Temporary Password */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-700">Portal Password</label>
                  <button
                    type="button"
                    onClick={handleRegeneratePassword}
                    className="text-[11px] text-lincoln hover:underline flex items-center gap-1 font-semibold"
                  >
                    <RefreshCw className="w-3 h-3" /> Generate Random
                  </button>
                </div>
                <input
                  type="text"
                  required
                  value={genPassword}
                  onChange={(e) => setGenPassword(e.target.value)}
                  placeholder="e.g. LUC#pass8491"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-emerald-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                />
              </div>

              {/* Scholarship Tier */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Approved Scholarship Tier</label>
                <select
                  value={genScholarship}
                  onChange={(e) => setGenScholarship(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="50% President Merit Scholarship">50% President Merit Scholarship</option>
                  <option value="35% High Achiever Award">35% High Achiever Award</option>
                  <option value="25% Academic Excellence Award">25% Academic Excellence Award</option>
                  <option value="10% Early Bird Rebate">10% Early Bird Rebate</option>
                  <option value="Standard Full Tuition (No Scholarship)">Standard Full Tuition (No Scholarship)</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="pt-3 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{credentialModalApp.credentialsIssued ? 'Update & Save Credentials' : 'Approve & Issue Credentials'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCredentialModalApp(null)
                    setIssuedSummary(null)
                  }}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. APPLICATION DOSSIER MODAL */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-lincoln">{selectedApp.refId}</span>
                {selectedApp.studentId && (
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ID: {selectedApp.studentId}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedApp.fullName}</h3>
              <p className="text-xs text-slate-500">{selectedApp.email} • {selectedApp.phone}</p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Selected Program:</span>
                <span className="font-bold text-right max-w-xs">{selectedApp.program}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Scheduled Intake:</span>
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
                <span className="text-slate-400">Admission Stage:</span>
                <span className="font-bold text-emerald-600">
                  {selectedApp.admissionStage ? `Stage ${selectedApp.admissionStage} / 5` : 'Stage 1 (Submitted)'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Scholarship:</span>
                <span className="font-bold text-slate-800">{selectedApp.scholarship || '50% President Merit Scholarship'}</span>
              </div>
              {selectedApp.comments && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs mt-2">
                  <span className="font-bold text-slate-700 block mb-1">Applicant Comments:</span>
                  <p className="text-slate-600 italic">{selectedApp.comments}</p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <button
                onClick={() => {
                  handleOpenCredentialModal(selectedApp)
                  setSelectedApp(null)
                }}
                className="flex-1 bg-lincoln hover:bg-lincoln-dark text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Key className="w-3.5 h-3.5" />
                <span>{selectedApp.credentialsIssued ? 'View / Edit Credentials' : 'Issue Student ID & Pass'}</span>
              </button>
              <button
                onClick={() => setSelectedApp(null)}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors"
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
