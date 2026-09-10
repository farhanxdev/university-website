import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CheckCircle2, GraduationCap, ArrowRight, ShieldCheck, Copy } from 'lucide-react'
import { programsData } from '../data/programsData'
import { useToast } from '../context/ToastContext'
import { submitNewApplication } from '../utils/authStorage'

export default function ApplyPage() {
  const toast = useToast()
  const [searchParams] = useSearchParams()
  const initialProgram = searchParams.get('program') || programsData[0]?.title || ''

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    citizenship: 'Malaysian',
    program: initialProgram,
    qualification: 'SPM / O-Levels',
    intake: 'July 2026',
    comments: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [refId, setRefId] = useState('')

  useEffect(() => {
    const p = searchParams.get('program')
    if (p) {
      setFormData(prev => ({ ...prev, program: p }))
    }
  }, [searchParams])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email) {
      toast.error('Please fill in your name and email address')
      return
    }

    const newApp = submitNewApplication(formData)
    setRefId(newApp.refId)
    setSubmitted(true)
    toast.success(`Application submitted successfully! Reference ID: ${newApp.refId}`)
  }

  const handleCopyRef = () => {
    navigator.clipboard.writeText(refId)
    toast.success('Reference ID copied to clipboard!')
  }

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
            Admissions 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2">
            Online Student Application Form
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Take the first step toward your academic future at Lincoln University College.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          {submitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Application Received & Pending Review
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Application Submitted Successfully!
                </h2>
                
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Application Ref:</span>
                  <strong className="text-lincoln text-base font-mono font-bold tracking-wider">{refId}</strong>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                    title="Copy Reference ID"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Your application for <strong>{formData.program}</strong> has been transmitted to the Admissions Office.
                </p>
              </div>

              {/* Admission Process Info */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left space-y-3 max-w-lg mx-auto">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-lincoln" />
                  <span>Next Steps for Student Portal Access:</span>
                </div>
                <ol className="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-decimal list-inside leading-relaxed">
                  <li>The Admissions Office verifies your academic credentials and qualifications.</li>
                  <li>Once approved, the administrator generates your official <strong>Student ID</strong> and <strong>Portal Password</strong>.</li>
                  <li>You will log into the <strong>Student Portal</strong> using your email and password to view your official Provisional Offer Letter and complete enrollment.</li>
                </ol>
              </div>

              <div className="pt-3 flex flex-wrap justify-center gap-3">
                <Link
                  to="/login?role=student"
                  className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                  <span>Go to Student Portal Login</span>
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all"
                >
                  <span>Browse More Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Personal & Academic Details</h2>
                <p className="text-xs text-slate-500 mt-1">Please provide accurate information as stated on your ID/Passport.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Full Name (as per IC / Passport) *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Farhan Rahman"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. farhan@email.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 12-345 6789"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Citizenship</label>
                    <select
                      value={formData.citizenship}
                      onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    >
                      <option value="Malaysian">Malaysian Citizen</option>
                      <option value="International">International Student</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Highest Academic Qualification</label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    >
                      <option value="SPM / O-Levels">SPM / IGCSE / O-Levels</option>
                      <option value="STPM / A-Levels">STPM / A-Levels</option>
                      <option value="Foundation / Matriculation">Foundation / Matriculation</option>
                      <option value="Diploma">Recognized Diploma</option>
                      <option value="Bachelor Degree">Bachelor's Degree</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Selected Program *</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                  >
                    {programsData.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.title} ({prog.level})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Preferred Intake Month</label>
                  <select
                    value={formData.intake}
                    onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                  >
                    <option value="March 2026">March 2026 Intake</option>
                    <option value="July 2026">July 2026 Intake</option>
                    <option value="October 2026">October 2026 Intake</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Additional Notes or Questions</label>
                  <textarea
                    rows={3}
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="Scholarship inquiries, credit transfer questions, accommodation requests..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Your information is protected under PDPA (Personal Data Protection Act).</span>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white font-semibold py-3.5 px-6 rounded-xl shadow transition-colors text-sm"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Submit Admission Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
