import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator, Award, Sparkles, ArrowRight, CheckCircle2, DollarSign, Percent } from 'lucide-react'
import { programsData } from '../../data/programsData'

export default function ScholarshipCalculator() {
  const [selectedCourseId, setSelectedCourseId] = useState(programsData[0].id)
  const [gradeTier, setGradeTier] = useState('tier-1') // 'tier-1' (50%), 'tier-2' (35%), 'tier-3' (25%), 'tier-4' (Rebate)

  const selectedProgram = programsData.find(p => p.id === selectedCourseId) || programsData[0]
  const baseTuition = selectedProgram.tuitionNum || 36000

  const tiers = {
    'tier-1': {
      label: '8A – 9A SPM / 3As STPM or A-Levels',
      scholarshipPercent: 50,
      badge: 'Premier President Merit Award',
      desc: 'Top-tier academic excellence award covering half of your entire degree tuition.'
    },
    'tier-2': {
      label: '6A – 7A SPM / 2As STPM or A-Levels',
      scholarshipPercent: 35,
      badge: 'Dean Academic Excellence Grant',
      desc: 'Significant tuition reduction for strong high school and foundation achievers.'
    },
    'tier-3': {
      label: '4A – 5A SPM / 1A STPM or A-Levels',
      scholarshipPercent: 25,
      badge: 'Academic Talent Bursary',
      desc: 'Merit bursary encouraging consistent high school and diploma performers.'
    },
    'tier-4': {
      label: '3 Credits SPM / Standard Entry Qualification',
      scholarshipPercent: 5,
      rebateAmount: 1000,
      badge: 'Early Bird Registration Rebate',
      desc: 'RM 1,000 instant semester rebate + 100% PTPTN loan eligibility.'
    }
  }

  const currentTier = tiers[gradeTier]
  const discountAmount = Math.round((baseTuition * currentTier.scholarshipPercent) / 100)
  const netPayable = baseTuition - discountAmount
  const monthlyInstallment = Math.round(netPayable / (parseInt(selectedProgram.duration) * 12))

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lincoln to-red-800 text-white flex items-center justify-center font-bold shadow-md">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-lincoln uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Interactive Fee Estimator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
              Scholarship & Tuition Fee Calculator
            </h3>
          </div>
        </div>

        <span className="text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 font-bold px-3.5 py-1.5 rounded-full self-start sm:self-auto">
          Up to 50% Tuition Waiver
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 7 Cols: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Choose Program */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              1. Select Your Degree / Diploma Program:
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full p-3.5 glass-input rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 shadow-xs"
            >
              {programsData.map(p => (
                <option key={p.id} value={p.id}>
                  {p.title} — ({p.level}, {p.tuition})
                </option>
              ))}
            </select>
          </div>

          {/* 2. Choose Grades Tier */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
              2. Select Your High School / Exam Academic Results:
            </label>
            <div className="space-y-2.5">
              {Object.entries(tiers).map(([key, tier]) => (
                <div
                  key={key}
                  onClick={() => setGradeTier(key)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    gradeTier === key
                      ? 'border-lincoln bg-red-50/70 dark:bg-red-950/40 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {tier.label}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {tier.badge}
                    </div>
                  </div>

                  <span className={`text-xs font-extrabold px-3 py-1.5 rounded-xl shrink-0 ${
                    gradeTier === key
                      ? 'bg-lincoln text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                  }`}>
                    {tier.scholarshipPercent}% Waiver
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 5 Cols: Dynamic Calculation Summary Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Estimated Fee Statement</span>
            <h4 className="text-lg font-bold text-white mt-0.5 leading-snug">{selectedProgram.title}</h4>
            <p className="text-xs text-slate-400 mt-1">{selectedProgram.duration} • {selectedProgram.mode}</p>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>Standard Program Tuition:</span>
              <span className="font-mono text-sm line-through text-slate-500">RM {baseTuition.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center bg-emerald-950/60 border border-emerald-500/30 p-3 rounded-2xl text-emerald-300">
              <span className="font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Scholarship Award ({currentTier.scholarshipPercent}%):
              </span>
              <strong className="font-mono text-sm font-bold text-emerald-400">- RM {discountAmount.toLocaleString()}</strong>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
              <span className="font-bold text-sm text-slate-200">Net Tuition Payable:</span>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                RM {netPayable.toLocaleString()}
              </span>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700 text-[11px] text-slate-400 flex justify-between items-center">
              <span>Estimated Monthly Plan:</span>
              <strong className="text-white font-mono font-bold">~RM {monthlyInstallment.toLocaleString()} / month</strong>
            </div>
          </div>

          <Link
            to={`/apply?program=${encodeURIComponent(selectedProgram.title)}`}
            className="w-full block text-center bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm"
          >
            Apply With This Scholarship Award
          </Link>

          <p className="text-[10px] text-slate-500 text-center leading-relaxed">
            *Subject to transcript verification by the Lincoln University College Scholarship Committee.
          </p>
        </div>

      </div>
    </div>
  )
}
