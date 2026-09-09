import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, ArrowRight, Scale, CheckCircle2, DollarSign, Clock, BookOpen, Briefcase } from 'lucide-react'
import { programsData } from '../../data/programsData'

export default function ProgramCompareModal({ isOpen, onClose }) {
  const [progAId, setProgAId] = useState(programsData[0].id)
  const [progBId, setProgBId] = useState(programsData[1].id)

  if (!isOpen) return null

  const progA = programsData.find(p => p.id === progAId) || programsData[0]
  const progB = programsData.find(p => p.id === progBId) || programsData[1]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 relative my-8 max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 text-lincoln flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                Compare Degree Programs Side-by-Side
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Evaluate curriculum, duration, and tuition fee differences.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Horizontal Scroll if needed */}
        <div className="flex-1 overflow-y-auto pt-4 space-y-6">
          
          {/* Program Selectors */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-lincoln uppercase tracking-wider block">Program A:</label>
              <select
                value={progAId}
                onChange={(e) => setProgAId(e.target.value)}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
              >
                {programsData.map(p => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-lincoln uppercase tracking-wider block">Program B:</label>
              <select
                value={progBId}
                onChange={(e) => setProgBId(e.target.value)}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
              >
                {programsData.map(p => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm divide-x divide-slate-100 dark:divide-slate-800">
            
            {/* Column Program A */}
            <div className="pr-4 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] bg-red-100 dark:bg-red-950 text-lincoln font-bold px-2 py-0.5 rounded uppercase">
                  {progA.level}
                </span>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mt-1 leading-snug">
                  {progA.title}
                </h4>
                <p className="text-xs text-slate-500">{progA.faculty}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Duration:</span>
                  <strong className="text-slate-900 dark:text-white">{progA.duration}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Study Mode:</span>
                  <strong className="text-slate-900 dark:text-white">{progA.mode}</strong>
                </div>
                <div className="flex justify-between border-t border-slate-200 dark:border-slate-700 pt-1.5">
                  <span className="text-slate-400">Tuition Fee:</span>
                  <strong className="text-lincoln font-mono font-bold text-sm">{progA.tuition}</strong>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Top Careers:
                </span>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {progA.careers.slice(0, 3).map((c, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/apply?program=${encodeURIComponent(progA.title)}`}
                onClick={onClose}
                className="w-full block text-center bg-lincoln hover:bg-lincoln-dark text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                Apply for Course A
              </Link>
            </div>

            {/* Column Program B */}
            <div className="pl-4 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] bg-red-100 dark:bg-red-950 text-lincoln font-bold px-2 py-0.5 rounded uppercase">
                  {progB.level}
                </span>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mt-1 leading-snug">
                  {progB.title}
                </h4>
                <p className="text-xs text-slate-500">{progB.faculty}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Duration:</span>
                  <strong className="text-slate-900 dark:text-white">{progB.duration}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Study Mode:</span>
                  <strong className="text-slate-900 dark:text-white">{progB.mode}</strong>
                </div>
                <div className="flex justify-between border-t border-slate-200 dark:border-slate-700 pt-1.5">
                  <span className="text-slate-400">Tuition Fee:</span>
                  <strong className="text-lincoln font-mono font-bold text-sm">{progB.tuition}</strong>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Top Careers:
                </span>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {progB.careers.slice(0, 3).map((c, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/apply?program=${encodeURIComponent(progB.title)}`}
                onClick={onClose}
                className="w-full block text-center bg-lincoln hover:bg-lincoln-dark text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
              >
                Apply for Course B
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
