import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  ArrowRight,
  BookOpen,
  Award,
  Layers,
  MessageCircle,
  Share2,
  Download
} from 'lucide-react'
import { programsData } from '../data/programsData'

export default function ProgramDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('syllabus') // 'syllabus' | 'requirements' | 'careers'

  const program = programsData.find((p) => p.id === id)

  if (!program) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Program Not Found</h2>
        <p className="text-slate-600 text-sm">The program you are looking for does not exist or has been moved.</p>
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 bg-lincoln text-white px-6 py-3 rounded-xl text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Programs Directory
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-12 pb-24">
      
      {/* Hero Header with Background Image & Breadcrumbs */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-14 lg:py-20 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/programs" className="hover:text-white transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-red-400 font-semibold truncate max-w-xs">{program.title}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-gradient-to-r from-lincoln to-red-700 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-xs">
              {program.level}
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs font-medium px-3.5 py-1 rounded-full border border-slate-700">
              {program.faculty}
            </span>
            <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> MQA & MOHE Approved
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            {program.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {program.summary}
          </p>

          {/* Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
            <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Duration</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-lincoln" /> {program.duration}
              </span>
            </div>
            <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Study Mode</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                <GraduationCap className="w-4 h-4 text-lincoln" /> {program.mode}
              </span>
            </div>
            <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Estimated Tuition</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                <DollarSign className="w-4 h-4 text-emerald-400" /> {program.tuition}
              </span>
            </div>
            <div className="bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800">
              <span className="text-[11px] text-slate-400 block">Upcoming Intakes</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-4 h-4 text-amber-400" /> {program.intakes}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Left Detailed Tabs + Right Sticky Application Box */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left 8 Cols: Overview, Syllabus, Requirements, Careers */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <BookOpen className="w-5 h-5 text-lincoln" />
                Course Overview & Objectives
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {program.overview}
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-200 gap-2">
              <button
                onClick={() => setActiveTab('syllabus')}
                className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 ${
                  activeTab === 'syllabus'
                    ? 'border-lincoln text-lincoln'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Syllabus & Modules
              </button>
              <button
                onClick={() => setActiveTab('requirements')}
                className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 ${
                  activeTab === 'requirements'
                    ? 'border-lincoln text-lincoln'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Entry Requirements
              </button>
              <button
                onClick={() => setActiveTab('careers')}
                className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 ${
                  activeTab === 'careers'
                    ? 'border-lincoln text-lincoln'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Career Pathways
              </button>
            </div>

            {/* Tab 1: Syllabus */}
            {activeTab === 'syllabus' && (
              <div className="space-y-4 animate-fadeIn">
                {program.modules && program.modules.map((mod, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-lincoln font-bold text-xs flex items-center justify-center">
                        {i + 1}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{mod.year}</h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      {mod.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Requirements */}
            {activeTab === 'requirements' && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-bold text-slate-900 text-base">Academic Criteria</h3>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Domestic & International
                  </span>
                </div>
                <ul className="space-y-3">
                  {program.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-lincoln shrink-0 mt-2"></span>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 3: Careers */}
            {activeTab === 'careers' && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Graduate Career Opportunities</h3>
                  <p className="text-xs text-slate-500 mt-1">Direct employment positions suited for graduates of this program.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.careers.map((career, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-red-100 text-lincoln flex items-center justify-center shrink-0 font-bold text-xs">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right 4 Cols: Fast Admission Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6 sticky top-28">
              
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-lincoln uppercase tracking-wider">Fast-Track Intake</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">Apply for Admission</h3>
                <p className="text-xs text-slate-500 mt-1">Submit your preliminary documents in under 5 minutes.</p>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Degree Level:</span>
                  <span className="font-bold text-slate-900">{program.level}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Full Course Tuition:</span>
                  <span className="font-bold text-lincoln">{program.tuition}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Scheduled Intakes:</span>
                  <span className="font-bold text-slate-900">{program.intakes}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Scholarship Available:</span>
                  <span className="font-bold text-emerald-600">Up to 50%</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <Link
                  to={`/apply?program=${encodeURIComponent(program.title)}`}
                  className="w-full text-center inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-sm"
                >
                  <span>Apply for this Program</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full text-center inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 hover:text-lincoln bg-slate-100 hover:bg-slate-200 py-3 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire with an Advisor</span>
                </Link>
              </div>

              <div className="bg-red-50/70 p-3.5 rounded-2xl border border-red-100 text-[11px] text-slate-600">
                <strong className="text-slate-900 block">📞 Have questions?</strong>
                Call our direct admissions office at <strong>+60 3-7806 3478</strong>.
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
