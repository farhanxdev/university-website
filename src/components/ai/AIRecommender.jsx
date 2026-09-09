import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, Target, Award } from 'lucide-react'
import { programsData } from '../../data/programsData'

export default function AIRecommender() {
  const [step, setStep] = useState(1)
  const [interest, setInterest] = useState('')
  const [education, setEducation] = useState('')
  const [goal, setGoal] = useState('')
  const [recommended, setRecommended] = useState([])

  const handleRecommend = (finalGoal) => {
    setGoal(finalGoal)

    let results = []
    if (interest === 'Technology & Coding') {
      results = programsData.filter(p => p.faculty === 'Computer Science')
    } else if (interest === 'Business & Management') {
      results = programsData.filter(p => p.faculty === 'Business')
    } else if (interest === 'Healthcare & Medicine') {
      results = programsData.filter(p => p.faculty === 'Medicine')
    } else if (interest === 'Engineering') {
      results = programsData.filter(p => p.faculty === 'Engineering')
    } else {
      results = programsData.slice(0, 3)
    }

    // Filter by level preference if chosen
    if (finalGoal === 'Fast-Track Diploma (2 Years)') {
      const dips = results.filter(p => p.level === 'Diploma')
      results = dips.length > 0 ? dips : results
    } else if (finalGoal === 'Master Degree / MBA') {
      const masters = results.filter(p => p.level === 'Master Degree')
      results = masters.length > 0 ? masters : results
    }

    setRecommended(results)
    setStep(4) // Result step
  }

  const resetQuiz = () => {
    setStep(1)
    setInterest('')
    setEducation('')
    setGoal('')
    setRecommended([])
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-700 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 bg-red-600/30 text-red-300 border border-red-500/30 px-3.5 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Course Recommendation System</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Find Your Ideal Degree in 3 Quick Steps
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            Our AI matches your career interests and qualifications with Lincoln's top accredited programs.
          </p>
        </div>

        {/* Step 1: Interest */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center">
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Step 1 of 3</span>
              <h4 className="text-lg font-bold text-white mt-1">What field excites you the most?</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Technology & Coding', desc: 'Software, Cyber Security, Web Dev' },
                { name: 'Business & Management', desc: 'Marketing, Finance, Administration' },
                { name: 'Engineering', desc: 'Biomedical & Applied Engineering' },
                { name: 'Healthcare & Medicine', desc: 'Nursing & Clinical Sciences' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setInterest(item.name)
                    setStep(2)
                  }}
                  className="p-4 rounded-xl text-left bg-slate-800/80 hover:bg-lincoln border border-slate-700 hover:border-red-500 transition-all group"
                >
                  <div className="font-bold text-sm text-white group-hover:text-white">{item.name}</div>
                  <div className="text-xs text-slate-400 group-hover:text-red-100 mt-1">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Education Level */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center">
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Step 2 of 3</span>
              <h4 className="text-lg font-bold text-white mt-1">What is your current highest qualification?</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'SPM / IGCSE / O-Levels',
                'STPM / A-Levels / Foundation',
                'Recognized Diploma',
                'Bachelor’s Degree'
              ].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => {
                    setEducation(lvl)
                    setStep(3)
                  }}
                  className="p-4 rounded-xl text-left bg-slate-800/80 hover:bg-lincoln border border-slate-700 hover:border-red-500 transition-all font-semibold text-sm text-white"
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white underline"
              >
                ← Back to Step 1
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Goal / Duration */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center">
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Step 3 of 3</span>
              <h4 className="text-lg font-bold text-white mt-1">What is your study goal?</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: 'Fast-Track Diploma (2 Years)', desc: 'Quick entry into the workforce' },
                { name: 'Bachelor Degree (3-4 Years)', desc: 'Full professional degree award' },
                { name: 'Master Degree / MBA', desc: 'Senior executive advancement' }
              ].map((g) => (
                <button
                  key={g.name}
                  onClick={() => handleRecommend(g.name)}
                  className="p-4 rounded-xl text-left bg-slate-800/80 hover:bg-lincoln border border-slate-700 hover:border-red-500 transition-all group"
                >
                  <div className="font-bold text-sm text-white">{g.name}</div>
                  <div className="text-xs text-slate-400 group-hover:text-red-100 mt-1">{g.desc}</div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-slate-400 hover:text-white underline"
              >
                ← Back to Step 2
              </button>
            </div>
          </div>
        )}

        {/* Step 4: AI Recommendations Display */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-red-950/60 border border-red-600/30 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-amber-400" />
                <div className="text-xs">
                  <span className="text-slate-300">Target Interest: </span>
                  <strong className="text-white">{interest}</strong>
                  <span className="text-slate-400"> | Background: </span>
                  <strong className="text-white">{education}</strong>
                </div>
              </div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-1 text-xs text-red-300 hover:text-white"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommended.map((prog, index) => (
                <div
                  key={prog.id}
                  className="bg-white text-slate-900 rounded-2xl p-5 shadow-lg space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {96 - index * 4}% Match
                      </span>
                      <span className="text-xs text-slate-500 font-medium">{prog.level}</span>
                    </div>

                    <h5 className="font-bold text-sm text-slate-900 leading-snug">{prog.title}</h5>
                    <p className="text-xs text-slate-600 line-clamp-2">{prog.summary}</p>
                    <div className="text-xs font-semibold text-lincoln">{prog.tuition} • {prog.duration}</div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/programs/${prog.id}`}
                      className="text-xs font-bold text-lincoln hover:text-lincoln-dark flex items-center gap-1"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to={`/apply?program=${encodeURIComponent(prog.title)}`}
                      className="bg-lincoln hover:bg-lincoln-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
