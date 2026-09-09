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
  ShieldCheck
} from 'lucide-react'

export default function StudentPortalPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('application') // 'application' | 'courses' | 'fees' | 'support'
  const [studentApp, setStudentApp] = useState(null)
  const [studentAuth, setStudentAuth] = useState(null)

  useEffect(() => {
    // Check authentication
    const auth = JSON.parse(localStorage.getItem('luc_auth') || 'null')
    setStudentAuth(auth)

    // Load student's application from localStorage
    const apps = JSON.parse(localStorage.getItem('luc_applications') || '[]')
    if (apps.length > 0) {
      // Pick the latest application or the first one
      setStudentApp(apps[0])
    } else {
      // Default sample application for student demo
      const sample = {
        refId: 'LUC-849201',
        fullName: 'Farhan Rahman',
        email: 'farhan@lincoln.edu.my',
        phone: '+60 12-345 6789',
        citizenship: 'Malaysian',
        program: 'Bachelor of Computer Science (Software Engineering) (Hons)',
        qualification: 'STPM / A-Levels',
        intake: 'July 2026',
        status: 'Approved',
        submittedAt: new Date().toISOString()
      }
      setStudentApp(sample)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('luc_auth')
    navigate('/login')
  }

  const handleDownloadOffer = () => {
    alert(`Downloading Official Provisional Offer Letter for ${studentApp?.fullName || 'Student'} (Ref: ${studentApp?.refId || 'LUC-849201'})...`)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      
      {/* 1. Dedicated Student Portal Header (Separate from Public Site) */}
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
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2.5 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs">
                <div className="w-7 h-7 bg-lincoln/30 text-red-400 rounded-lg flex items-center justify-center font-bold">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white leading-none">{studentApp?.fullName || 'Farhan Rahman'}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">ID: {studentApp?.refId || 'LUC-849201'}</div>
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
              Welcome back, {studentApp?.fullName || 'Student'}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Track your admission offer letter, enrolled semester modules, tuition payment schedule, and direct academic advising.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={handleDownloadOffer}
              className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Offer Letter</span>
            </button>
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

        {/* Tab 1: Admission Status & Documents */}
        {activeTab === 'application' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fadeIn">
            
            {/* Main Application Card */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold text-lincoln uppercase tracking-wider">Application Details</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">{studentApp?.program}</h3>
                </div>
                <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                  studentApp?.status === 'Approved'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{studentApp?.status || 'Approved'}</span>
                </span>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs block">Admission Reference</span>
                  <span className="font-mono font-bold text-slate-900 text-base">{studentApp?.refId}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs block">Assigned Intake</span>
                  <span className="font-bold text-lincoln text-base">{studentApp?.intake}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs block">Student Email</span>
                  <span className="font-semibold text-slate-800">{studentApp?.email}</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-400 text-xs block">Citizenship Status</span>
                  <span className="font-semibold text-slate-800">{studentApp?.citizenship}</span>
                </div>
              </div>

              {/* Progress Milestones */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Admission Progress Checklist</h4>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Online Application Submitted & Verified</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Academic Transcript Review Completed</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold">Provisional Offer Letter Issued</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs bg-slate-50 text-slate-600 p-3 rounded-xl border border-slate-200">
                    <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>Orientation Day & Student ID Card Collection (Scheduled for July 12, 2026)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions & Official Documents */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3">
                  Official Documents
                </h3>
                <div className="space-y-2.5">
                  <button
                    onClick={handleDownloadOffer}
                    className="w-full p-3 rounded-2xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 text-left transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-lincoln" />
                      <div>
                        <div className="font-bold text-xs text-slate-900 group-hover:text-lincoln">Provisional Offer Letter</div>
                        <div className="text-[10px] text-slate-400">PDF • 142 KB</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-lincoln" />
                  </button>

                  <button
                    onClick={() => alert('Downloading Campus Orientation Handbook...')}
                    className="w-full p-3 rounded-2xl border border-slate-200 hover:border-red-300 hover:bg-red-50/50 text-left transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-lincoln" />
                      <div>
                        <div className="font-bold text-xs text-slate-900 group-hover:text-lincoln">Orientation Handbook</div>
                        <div className="text-[10px] text-slate-400">PDF • 1.2 MB</div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-lincoln" />
                  </button>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <strong className="text-slate-800 block">Orientation Day:</strong>
                  <div>Date: <strong>July 12, 2026 (Monday)</strong></div>
                  <div>Time: <strong>9:00 AM – 2:00 PM</strong></div>
                  <div>Venue: <strong>Main Auditorium, Wisma Lincoln</strong></div>
                </div>
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
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Tuition & Financial Statement</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Total Degree Tuition</span>
                <span className="text-2xl font-extrabold text-slate-900 mt-1 block">RM 36,000</span>
              </div>
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
                <span className="text-xs text-emerald-700 font-semibold block">Merit Scholarship Applied (50%)</span>
                <span className="text-2xl font-extrabold text-emerald-700 mt-1 block">- RM 18,000</span>
              </div>
              <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                <span className="text-xs text-lincoln font-semibold block">Net Payable Balance</span>
                <span className="text-2xl font-extrabold text-lincoln mt-1 block">RM 18,000</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <strong className="text-slate-900 block font-bold">Payment Schedule:</strong>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span>Semester 1 Registration & Deposit</span>
                <span className="font-bold text-emerald-600">PAID (RM 3,000)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span>Semester 1 Balance Installment (Due Aug 30, 2026)</span>
                <span className="font-bold text-slate-800">RM 3,000</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Subsequent Semesters (Flexible monthly PTPTN / installment)</span>
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
                  Faculty of Computer Science & Multimedia
                </p>
                <div className="text-xs text-slate-500">
                  Email: <strong>siti.mariam@lincoln.edu.my</strong><br />
                  Consultation Hours: <strong>Tue & Thu 10:00 AM - 1:00 PM</strong>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 space-y-3 bg-slate-50/50">
                <h4 className="font-bold text-sm text-slate-900">Campus Student Services</h4>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>IT Helpdesk: <strong>it.support@lincoln.edu.my</strong></div>
                  <div>Hostel & Accommodation: <strong>housing@lincoln.edu.my</strong></div>
                  <div>Student Visa & International: <strong>visa@lincoln.edu.my</strong></div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

    </div>
  )
}
