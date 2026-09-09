import React from 'react'
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
  BookOpen
} from 'lucide-react'
import { programsData } from '../data/programsData'

export default function ProgramDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const program = programsData.find((p) => p.id === id)

  if (!program) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Program Not Found</h2>
        <p className="text-slate-600 text-sm">The program you are looking for does not exist or has been moved.</p>
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 bg-lincoln text-white px-5 py-2.5 rounded-lg text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Programs
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-12 pb-20">
      {/* Header Breadcrumb & Hero */}
      <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Directory
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {program.level}
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700">
              {program.faculty}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {program.title}
          </h1>

          <p className="text-slate-300 text-base max-w-3xl leading-relaxed">
            {program.summary}
          </p>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block">Duration</span>
              <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-lincoln" /> {program.duration}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Study Mode</span>
              <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                <GraduationCap className="w-4 h-4 text-lincoln" /> {program.mode}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Estimated Tuition</span>
              <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                <DollarSign className="w-4 h-4 text-lincoln" /> {program.tuition}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Upcoming Intakes</span>
              <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-4 h-4 text-lincoln" /> {program.intakes}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left 2 Columns: Overview, Requirements, Careers */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-lincoln" />
                Program Overview
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {program.overview}
              </p>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-lincoln" />
                Entry Requirements
              </h2>
              <ul className="space-y-3">
                {program.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-lincoln shrink-0 mt-2"></span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-lincoln" />
                Career Opportunities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.careers.map((career, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Admission CTA Box */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-6 sticky top-28">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-lincoln uppercase tracking-wider">Fast Application</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">Apply for this Intake</h3>
                <p className="text-xs text-slate-500 mt-1">Applications take less than 5 minutes to submit online.</p>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Degree:</span>
                  <span className="font-semibold text-slate-800">{program.level}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Tuition:</span>
                  <span className="font-semibold text-slate-800">{program.tuition}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Intakes:</span>
                  <span className="font-semibold text-slate-800">{program.intakes}</span>
                </div>
              </div>

              <Link
                to={`/apply?program=${encodeURIComponent(program.title)}`}
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white font-semibold py-3 px-4 rounded-xl shadow transition-colors text-sm"
              >
                <span>Apply for this Course</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="w-full text-center block text-xs font-semibold text-slate-600 hover:text-lincoln py-2 border border-slate-200 rounded-xl"
              >
                Enquire with an Academic Counselor
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
