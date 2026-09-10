import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  GraduationCap, 
  LogOut, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Download, 
  Calendar, 
  CreditCard, 
  BookOpen, 
  User, 
  Bell, 
  HelpCircle,
  Award,
  ExternalLink,
  ShieldCheck,
  Printer,
  X,
  Copy,
  Receipt,
  AlertCircle,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Check
} from 'lucide-react'
import { useToast } from '../context/ToastContext'
import { 
  getActiveAuth, 
  clearActiveAuth, 
  getApplications, 
  recordDepositPayment 
} from '../utils/authStorage'

export default function StudentPortalPage() {
  const navigate = useNavigate()
  const toast = useToast()
  const [activeTab, setActiveTab] = useState('application') // 'application' | 'courses' | 'fees' | 'support'
  const [studentApp, setStudentApp] = useState(null)
  const [showOfferModal, setShowOfferModal] = useState(false)
  const [copiedId, setCopiedId] = useState(false)

  // 1. Role-Based Route Protection & Student Profile Loading
  useEffect(() => {
    const auth = getActiveAuth()
    if (!auth || auth.role !== 'student') {
      toast.error('Student login required. Please sign in with your issued student credentials.')
      navigate('/login?role=student')
      return
    }

    const apps = getApplications()
    // Match by studentId, email, or refId
    const matched = apps.find(a => 
      (auth.studentId && a.studentId === auth.studentId) ||
      (auth.email && a.email.toLowerCase() === auth.email.toLowerCase()) ||
      (auth.refId && a.refId === auth.refId)
    )

    if (matched) {
      setStudentApp(matched)
    } else {
      toast.error('Student record not found. Please contact Admissions.')
      navigate('/login?role=student')
    }
  }, [navigate, toast])

  const handleLogout = () => {
    clearActiveAuth()
    toast.info('Signed out of Student Portal')
    navigate('/login?role=student')
  }

  const handleDownloadOffer = () => {
    toast.info('Opening Official Provisional Offer Letter...')
    setShowOfferModal(true)
  }

  const handleCopyId = () => {
    if (!studentApp) return
    navigator.clipboard.writeText(studentApp.studentId || studentApp.refId)
    setCopiedId(true)
    toast.success('Student ID copied to clipboard!')
    setTimeout(() => setCopiedId(false), 2000)
  }

  const handlePayDeposit = () => {
    if (!studentApp) return
    const updated = recordDepositPayment(studentApp.refId)
    if (updated) {
      setStudentApp({ ...updated })
      toast.success('Tuition deposit of RM 3,000 processed! Receipt #LUC-REC-8491 generated.')
    }
  }

  if (!studentApp) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-md text-center space-y-3">
          <div className="w-10 h-10 border-4 border-lincoln border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs text-slate-500 font-semibold">Loading your student records...</p>
        </div>
      </div>
    )
  }

  // Progress Steps calculation
  const isDepositPaid = studentApp.depositPaid || studentApp.admissionStage >= 4

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      
      {/* 1. Dedicated Student Portal Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Student Portal Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-lincoln text-white rounded-xl flex items-center justify-center font-bold shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base tracking-tight text-white">LINCOLN</span>
                  <span className="text-[10px] bg-red-900/80 text-red-300 font-bold px-2 py-0.5 rounded uppercase border border-red-500/30">
                    Student Portal
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 block -mt-0.5">Student Academic Services</span>
              </div>
            </div>

            {/* Student Identity & Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden sm:flex items-center gap-2.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs">
                <div className="w-7 h-7 bg-lincoln/30 text-red-400 rounded-lg flex items-center justify-center font-bold">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white leading-none">{studentApp.fullName}</div>
                  <button 
                    type="button"
                    onClick={handleCopyId}
                    className="text-[10px] text-slate-400 font-mono mt-0.5 hover:text-white flex items-center gap-1 transition-colors group"
                    title="Click to copy Student ID"
                  >
                    <span>ID: <strong className="text-red-400">{studentApp.studentId || studentApp.refId}</strong></span>
                    {copiedId ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />}
                  </button>
                </div>
              </div>

              <Link
                to="/"
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-xl transition-colors"
                title="View Public University Website"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Public Website</span>
              </Link>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 bg-red-950/60 hover:bg-red-900 text-red-200 border border-red-800 text-xs font-bold px-3 py-2 rounded-xl transition-colors"
                title="Sign out of student portal"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 2. Main Portal Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Welcome Greeting Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-red-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-950/50 border border-amber-500/30 px-3 py-1 rounded-full">
              <Award className="w-3.5 h-3.5" />
              <span>Academic Year 2026 | Enrolled Student Workspace</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Welcome back, {studentApp.fullName}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Program: <strong className="text-white">{studentApp.program}</strong> • Student ID: <strong className="text-amber-400 font-mono">{studentApp.studentId || studentApp.refId}</strong>
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={handleDownloadOffer}
              className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Offer Letter</span>
            </button>
          </div>
        </div>

        {/* 3. ADMISSION PROGRESS TRACKER (Core User Request) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lincoln">Enrollment Pipeline</span>
              <h2 className="text-xl font-bold text-slate-900">Your Admission Progress</h2>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Status: <strong className="text-emerald-700 font-extrabold">{isDepositPaid ? 'Seat Confirmed' : 'Offer Issued & Awaiting Deposit'}</strong>
            </span>
          </div>

          {/* Stepper Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs font-bold text-slate-900">Application Submitted</div>
              <div className="text-[11px] text-slate-500 font-mono">Ref: {studentApp.refId}</div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs font-bold text-slate-900">Academic Review</div>
              <div className="text-[11px] text-emerald-700 font-semibold">Verified by Admissions</div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs font-bold text-slate-900">ID & Offer Issued</div>
              <div className="text-[11px] text-slate-700 font-mono font-bold">{studentApp.studentId || 'ID Issued'}</div>
            </div>

            {/* Step 4 */}
            <div className={`p-4 rounded-2xl border space-y-1.5 transition-all ${
              isDepositPaid 
                ? 'bg-emerald-50 border-emerald-200' 
                : 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-400/30'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${
                  isDepositPaid ? 'bg-emerald-600' : 'bg-amber-500'
                }`}>4</span>
                {isDepositPaid ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <span className="text-[10px] bg-amber-200 text-amber-900 font-bold px-1.5 py-0.5 rounded">Action Needed</span>
                )}
              </div>
              <div className="text-xs font-bold text-slate-900">Tuition Deposit</div>
              <div className="text-[11px] font-semibold text-slate-600">
                {isDepositPaid ? 'RM 3,000 Paid (Confirmed)' : 'RM 3,000 Due'}
              </div>
            </div>

            {/* Step 5 */}
            <div className={`p-4 rounded-2xl border space-y-1.5 ${
              isDepositPaid 
                ? 'bg-slate-50 border-slate-200' 
                : 'bg-slate-50/60 border-slate-200 opacity-60'
            }`}>
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center">5</span>
                <Calendar className="w-4 h-4 text-slate-400" />
              </div>
              <div className="text-xs font-bold text-slate-900">Induction & Classes</div>
              <div className="text-[11px] text-slate-500">July 12, 2026 Orientation</div>
            </div>
          </div>
        </div>

        {/* 4. DYNAMIC "WHAT TO DO NEXT" GUIDANCE CARD (Core User Request) */}
        <div className={`rounded-3xl p-6 sm:p-8 border shadow-sm space-y-4 ${
          !isDepositPaid
            ? 'bg-gradient-to-br from-amber-50/90 via-white to-red-50/30 border-amber-300'
            : 'bg-gradient-to-br from-emerald-50/90 via-white to-slate-50 border-emerald-200'
        }`}>
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-bold shadow-sm ${
              !isDepositPaid ? 'bg-amber-500 text-white' : 'bg-emerald-600 text-white'
            }`}>
              {!isDepositPaid ? <AlertCircle className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-extrabold text-slate-900">
                  {!isDepositPaid 
                    ? 'What To Do Next: Download Offer Letter & Confirm Your Seat' 
                    : 'What To Do Next: Prepare for Campus Orientation & Matriculation'}
                </h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 w-fit ${
                  !isDepositPaid ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {!isDepositPaid ? 'Step 4 of 5' : 'Step 5 of 5 • Enrolled'}
                </span>
              </div>

              {!isDepositPaid ? (
                <div className="space-y-3 pt-1">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Congratulations! Your application has been approved and your official Student ID (<strong className="font-mono text-slate-900">{studentApp.studentId || studentApp.refId}</strong>) has been generated. Complete the following to secure your placement:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-[10px] flex items-center justify-center font-bold">A</span>
                        <span>Download Offer Letter</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Download your official provisional letter bearing the Registrar stamp and university seal.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-[10px] flex items-center justify-center font-bold">B</span>
                        <span>Pay Semester Deposit</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Pay your Semester 1 deposit (RM 3,000) online to lock in your 50% scholarship waiver.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 text-[10px] flex items-center justify-center font-bold">C</span>
                        <span>Registration Day Documents</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Prepare original MyKad/Passport & SPM/STPM transcripts for document verification.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleDownloadOffer}
                      className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Provisional Offer Letter</span>
                    </button>

                    <button
                      type="button"
                      onClick={handlePayDeposit}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all"
                    >
                      <CreditCard className="w-4 h-4 text-emerald-400" />
                      <span>Pay Deposit Online (RM 3,000)</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 pt-1">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Your semester tuition deposit has been verified! Your student enrollment is complete. Follow the schedule below for your first week on campus:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span>Orientation Day</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        <strong>July 12, 2026 @ 9:00 AM</strong><br />
                        Auditorium 1, Main Campus Wisma Lincoln.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-emerald-600" />
                        <span>Collect Smartcard ID</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Registrar Office Block B, Level 1.<br />
                        Present your Offer Letter & receipt.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-1">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-emerald-600" />
                        <span>Check Timetable</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        4 modules enrolled for Semester 1.<br />
                        Lectures start on July 15, 2026.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab('courses')}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all"
                    >
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>View Semester Modules</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleDownloadOffer}
                      className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>View Official Offer Letter</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex border-b border-slate-200 gap-2 overflow-x-auto bg-white p-2 rounded-2xl shadow-xs">
          {[
            { id: 'application', label: 'Admission Status & Documents', icon: FileText },
            { id: 'courses', label: 'Semester Schedule & Modules', icon: BookOpen },
            { id: 'fees', label: 'Tuition & Scholarship Statement', icon: CreditCard },
            { id: 'support', label: 'Academic Advisor & Helpdesk', icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
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

        {/* Tab 1: Application Status & Documents */}
        {activeTab === 'application' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Admission Status Details */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[11px] font-bold text-lincoln uppercase tracking-wider">Admission Record</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">Program & Applicant Information</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Approved
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-xs text-slate-400 font-semibold block">Official Student ID</span>
                  <span className="font-mono text-sm font-bold text-lincoln">{studentApp.studentId || studentApp.refId}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-xs text-slate-400 font-semibold block">Application Reference</span>
                  <span className="font-mono text-sm font-bold text-slate-900">{studentApp.refId}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-xs text-slate-400 font-semibold block">Scheduled Intake</span>
                  <span className="text-sm font-bold text-slate-900">{studentApp.intake}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-xs text-slate-400 font-semibold block">Citizenship</span>
                  <span className="text-sm font-bold text-slate-900">{studentApp.citizenship}</span>
                </div>
              </div>

              {/* Program Details */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Enrolled Academic Degree</div>
                <h4 className="text-lg font-extrabold text-slate-900">{studentApp.program}</h4>
                <div className="text-xs text-slate-600 flex flex-wrap gap-4">
                  <span>Awarding Faculty: <strong>{studentApp.faculty || 'Faculty of Computer Science & Multimedia'}</strong></span>
                  <span>Accreditation: <strong>100% MQA & MOHE Approved</strong></span>
                  <span>Entry Qualification: <strong>{studentApp.qualification}</strong></span>
                </div>
              </div>

              {/* Offer Letter Action Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-lincoln" />
                    <h4 className="font-bold text-slate-900 text-sm">Official Provisional Offer Letter Available</h4>
                  </div>
                  <p className="text-xs text-slate-600 max-w-xl">
                    Your offer letter has been authorized by the Registrar with Reference <strong>{studentApp.refId}</strong> and MQA approval.
                  </p>
                </div>
                <button
                  onClick={handleDownloadOffer}
                  className="bg-lincoln hover:bg-lincoln-dark text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition-all flex items-center gap-2 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>View Official Offer Letter</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Semester Schedule & Modules */}
        {activeTab === 'courses' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div>
              <span className="text-[11px] font-bold text-lincoln uppercase tracking-wider">Curriculum Preview</span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Year 1 Semester 1 Registered Modules</h3>
              <p className="text-xs text-slate-500 mt-1">These classes will commence upon orientation completion.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { code: 'CS101', name: 'Programming Fundamentals in C++ & Java', credits: '4 Credits', time: 'Mon & Wed: 10:00 AM - 12:00 PM', room: 'Computer Lab 3' },
                { code: 'CS102', name: 'Data Structures & Algorithmic Thinking', credits: '3 Credits', time: 'Tue & Thu: 2:00 PM - 3:30 PM', room: 'Lecture Hall B' },
                { code: 'IT103', name: 'Database Systems & SQL Modeling', credits: '3 Credits', time: 'Wednesday: 2:00 PM - 5:00 PM', room: 'Computing Lab 1' },
                { code: 'MAT104', name: 'Discrete Mathematics for Computing', credits: '3 Credits', time: 'Friday: 9:00 AM - 12:00 PM', room: 'Seminar Room 4' },
              ].map((mod, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-200 hover:border-red-300 hover:bg-red-50/20 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-lincoln bg-red-50 px-2 py-0.5 rounded">
                      {mod.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">{mod.credits}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{mod.name}</h4>
                  <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex justify-between">
                    <span>{mod.time}</span>
                    <strong className="text-slate-700">{mod.room}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Tuition & Financial Statement */}
        {activeTab === 'fees' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div>
              <span className="text-[11px] font-bold text-lincoln uppercase tracking-wider">Fee Account</span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Tuition & Scholarship Statement</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Total Degree Tuition</span>
                <span className="text-2xl font-extrabold text-slate-900 mt-1 block">RM 36,000</span>
              </div>
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
                <span className="text-xs text-emerald-700 font-semibold block">{studentApp.scholarship || '50% Merit Scholarship Applied'}</span>
                <span className="text-2xl font-extrabold text-emerald-700 mt-1 block">- RM 18,000</span>
              </div>
              <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                <span className="text-xs text-lincoln font-semibold block">Net Payable Balance</span>
                <span className="text-2xl font-extrabold text-lincoln mt-1 block">RM 18,000</span>
              </div>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-3">
              <strong className="text-slate-900 block font-bold text-sm">Payment Breakdown & Schedule:</strong>
              
              <div className="flex justify-between py-2.5 border-b border-slate-200 items-center">
                <div>
                  <span className="font-bold text-slate-800 block">Semester 1 Registration & Tuition Deposit</span>
                  <span className="text-[10px] text-slate-400">Required to confirm placement & receive student card</span>
                </div>
                {isDepositPaid ? (
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> PAID (RM 3,000)
                  </span>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">RM 3,000</span>
                    <button
                      type="button"
                      onClick={handlePayDeposit}
                      className="bg-lincoln hover:bg-lincoln-dark text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow-xs transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Pay Now</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-between py-2.5 border-b border-slate-200 items-center">
                <div>
                  <span className="font-bold text-slate-800 block">Semester 1 Balance Installment</span>
                  <span className="text-[10px] text-slate-400">Due Aug 30, 2026</span>
                </div>
                <span className="font-bold text-slate-800">RM 3,000</span>
              </div>

              <div className="flex justify-between py-2.5 items-center">
                <div>
                  <span className="font-bold text-slate-800 block">Subsequent Semesters (Years 2 & 3)</span>
                  <span className="text-[10px] text-slate-400">Flexible monthly PTPTN / installment plans</span>
                </div>
                <span className="font-bold text-slate-800">Remaining RM 12,000</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Student Support & Academic Advisor */}
        {activeTab === 'support' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div>
              <span className="text-[11px] font-bold text-lincoln uppercase tracking-wider">Help & Guidance</span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Assigned Academic Advisor & Support</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-slate-200 space-y-3 bg-slate-50/50">
                <h4 className="font-bold text-sm text-slate-900">Your Academic Counselor</h4>
                <p className="text-xs text-slate-600">
                  Assoc. Prof. Dr. Siti Mariam<br />
                  {studentApp.faculty || 'Faculty of Computer Science & Multimedia'}
                </p>
                <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-200">
                  <div>Email: <strong>counseling@lincoln.edu.my</strong></div>
                  <div>Consultation Hours: Mon - Thu, 2:00 PM - 4:00 PM</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 space-y-3 bg-slate-50/50">
                <h4 className="font-bold text-sm text-slate-900">Admissions & Student Affairs</h4>
                <p className="text-xs text-slate-600">
                  Student Central Office, Block A, Level 2<br />
                  Hotline: +60 3-7806 3478
                </p>
                <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-200">
                  <div>WhatsApp Helpdesk: +60 12-345 6789</div>
                  <div>Office Hours: Mon - Fri, 9:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* 5. OFFICIAL PRINTABLE PROVISIONAL OFFER LETTER MODAL */}
      {showOfferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn">
          <div className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl border border-slate-200 relative my-8 print:p-0 print:border-none print:shadow-none">
            
            {/* Modal Controls (Hidden when printing) */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 print:hidden">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-lincoln uppercase tracking-wider">Official University Document</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Accredited Letter</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    toast.success('Opening print dialog...')
                    window.print()
                  }}
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                </button>
                <button
                  onClick={() => setShowOfferModal(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Content (Printable Letterhead) */}
            <div className="pt-6 space-y-6 text-slate-800 font-serif text-xs sm:text-sm">
              
              {/* Header Letterhead */}
              <div className="flex justify-between items-start border-b-2 border-red-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-lincoln text-white flex items-center justify-center font-sans font-bold text-lg">
                    LUC
                  </div>
                  <div>
                    <h2 className="font-sans font-extrabold text-base tracking-tight text-slate-900 uppercase">
                      Lincoln University College
                    </h2>
                    <span className="text-[10px] text-slate-500 font-sans block">
                      Registration No: DKU016(B) • Approved by Ministry of Higher Education (MOHE) & MQA
                    </span>
                    <span className="text-[9px] text-slate-400 font-sans block">
                      Wisma Lincoln, No. 12-18, Jalan SS 6/12, 47301 Petaling Jaya, Selangor, Malaysia
                    </span>
                  </div>
                </div>

                <div className="text-right font-sans">
                  <div className="text-[11px] font-mono font-bold text-lincoln">STUDENT ID: {studentApp.studentId || studentApp.refId}</div>
                  <div className="text-[10px] font-mono text-slate-700">REF: {studentApp.refId}</div>
                  <div className="text-[10px] text-slate-500">DATE: {new Date().toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
              </div>

              {/* Recipient Details */}
              <div className="space-y-1 font-sans text-xs">
                <div>To: <strong className="text-slate-900">{studentApp.fullName}</strong></div>
                <div>Student ID: <strong className="font-mono text-lincoln">{studentApp.studentId || studentApp.refId}</strong></div>
                <div>Email: {studentApp.email} | Contact: {studentApp.phone}</div>
                <div>Nationality: {studentApp.citizenship}</div>
              </div>

              {/* Subject */}
              <div className="font-sans font-bold text-sm text-slate-900 border-l-4 border-lincoln pl-3 py-1 bg-red-50/50">
                OFFICIAL PROVISIONAL OFFER OF ADMISSION — {studentApp.intake?.toUpperCase() || 'JULY 2026'} INTAKE
              </div>

              {/* Letter Body */}
              <div className="space-y-3 leading-relaxed font-sans text-xs text-slate-700">
                <p>
                  Dear <strong>{studentApp.fullName}</strong>,
                </p>
                <p>
                  We are pleased to inform you that following the assessment of your academic qualifications by the Lincoln University College Admissions Committee, you have been provisionally accepted into the following program:
                </p>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1 my-2">
                  <div><strong>Degree Program:</strong> {studentApp.program}</div>
                  <div><strong>Awarding Faculty:</strong> {studentApp.faculty || 'Faculty of Computer Science & Multimedia'}</div>
                  <div><strong>Scheduled Intake:</strong> {studentApp.intake} (Orientation on July 12, 2026)</div>
                  <div><strong>Scholarship Status:</strong> {studentApp.scholarship || '50% President Merit Scholarship Approved'}</div>
                  <div><strong>Enrollment Status:</strong> {isDepositPaid ? 'Tuition Deposit Verified (Fully Confirmed)' : 'Pending Semester 1 Deposit'}</div>
                </div>

                <p>
                  This offer is subject to the Malaysian Qualifications Agency (MQA) regulations and submission of original academic transcripts during your official registration day at our main campus in Petaling Jaya.
                </p>
                <p>
                  Please present this offer letter along with your national identification card (MyKad or Passport) to the Student Admissions Office on your scheduled registration date.
                </p>
              </div>

              {/* Signatures and Stamp */}
              <div className="pt-6 border-t border-slate-200 flex justify-between items-end font-sans">
                <div className="space-y-2">
                  <div className="text-xs font-serif italic text-slate-600 font-bold">Prof. Dr. Amiya Bhaumik</div>
                  <div className="w-36 h-0.5 bg-slate-300"></div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Registrar & Vice-President</div>
                  <div className="text-[9px] text-slate-400">Lincoln University College Malaysia</div>
                </div>

                <div className="text-center p-2 rounded-xl border-2 border-dashed border-red-200 bg-red-50/40">
                  <div className="text-[9px] font-bold text-red-700 uppercase">OFFICIAL REGISTRAR STAMP</div>
                  <div className="text-[8px] text-slate-500 font-mono">SEAL-VERIFIED-LUC-2026</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}
