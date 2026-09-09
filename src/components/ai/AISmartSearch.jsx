import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Sparkles, X, ArrowRight, Tag, Clock, CornerDownLeft } from 'lucide-react'
import { programsData } from '../../data/programsData'

export default function AISmartSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        onClose(prev => !prev)
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // AI Matching Logic
  const results = useMemo(() => {
    if (!query.trim()) return []

    const q = query.toLowerCase()
    const isCheap = q.includes('cheap') || q.includes('budget') || q.includes('affordable') || q.includes('low')
    const isDiploma = q.includes('diploma') || q.includes('short') || q.includes('fast')
    const isMaster = q.includes('master') || q.includes('mba') || q.includes('postgraduate')
    const isBachelor = q.includes('bachelor') || q.includes('degree') || q.includes('undergraduate')
    const isTech = q.includes('it') || q.includes('tech') || q.includes('computer') || q.includes('code') || q.includes('software') || q.includes('cyber')
    const isBiz = q.includes('business') || q.includes('management') || q.includes('marketing') || q.includes('finance')
    const isHealth = q.includes('health') || q.includes('nurse') || q.includes('medical') || q.includes('bio')

    return programsData
      .map(p => {
        let score = 0
        let matchTags = []

        // Text title matching
        if (p.title.toLowerCase().includes(q)) {
          score += 10
        }
        if (p.summary.toLowerCase().includes(q)) {
          score += 5
        }
        if (p.overview.toLowerCase().includes(q)) {
          score += 3
        }

        // Semantic concepts
        if (isCheap && (p.level === 'Diploma' || p.tuition.includes('22,000') || p.tuition.includes('28,000'))) {
          score += 8
          matchTags.push('Affordable Tuition')
        }
        if (isDiploma && p.level === 'Diploma') {
          score += 8
          matchTags.push('Diploma Level')
        }
        if (isBachelor && p.level === 'Bachelor Degree') {
          score += 8
          matchTags.push('Undergraduate Degree')
        }
        if (isMaster && p.level === 'Master Degree') {
          score += 8
          matchTags.push('Master Degree')
        }
        if (isTech && p.faculty === 'Computer Science') {
          score += 7
          matchTags.push('Technology')
        }
        if (isBiz && p.faculty === 'Business') {
          score += 7
          matchTags.push('Business')
        }
        if (isHealth && (p.faculty === 'Medicine' || p.faculty === 'Engineering')) {
          score += 7
          matchTags.push('Healthcare / Engineering')
        }

        return { ...p, score, matchTags }
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
  }, [query])

  if (!isOpen) return null

  const handleSelect = (id) => {
    navigate(`/programs/${id}`)
    onClose(false)
    setQuery('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
          <div className="w-8 h-8 rounded-lg bg-red-100 text-lincoln flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask AI: e.g. 'cheap IT diploma', 'software course', 'MBA degree'..."
              className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 outline-none"
            />
          </div>
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 text-xs px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => onClose(false)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-10 h-10 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-slate-700">AI Natural Language Smart Search</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['cheap program', 'IT course', 'cyber security', 'MBA degree', 'biomedical'].map((pill) => (
                  <button
                    key={pill}
                    onClick={() => setQuery(pill)}
                    className="text-xs bg-slate-100 hover:bg-red-50 hover:text-lincoln text-slate-600 px-3 py-1.5 rounded-full transition-colors"
                  >
                    "{pill}"
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50/40 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-lincoln">{item.level}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500">{item.faculty}</span>
                    {item.matchTags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-red-100 text-lincoln px-2 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-lincoln transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {item.duration}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Tag className="w-3.5 h-3.5 text-lincoln" /> {item.tuition}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-lincoln group-hover:text-white text-slate-400 flex items-center justify-center shrink-0 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-slate-500 text-sm">
              No courses matched your query "{query}". Try queries like "IT", "Business", or "Nursing".
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 px-4">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded shadow-xs text-[10px]">ESC</kbd> to close
          </span>
          <span className="flex items-center gap-1">
            Powered by Lincoln AI Keyword & Semantic Matcher
          </span>
        </div>

      </div>
    </div>
  )
}
