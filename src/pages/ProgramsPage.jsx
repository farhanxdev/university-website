import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, ArrowRight, BookOpen, Clock, Tag, Filter, Sparkles, SlidersHorizontal, CheckCircle2, Scale } from 'lucide-react'
import { programsData } from '../data/programsData'
import ScholarshipCalculator from '../components/common/ScholarshipCalculator'
import ProgramCompareModal from '../components/programs/ProgramCompareModal'

export default function ProgramsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialFaculty = searchParams.get('faculty') || 'All'

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFaculty, setSelectedFaculty] = useState(initialFaculty)
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [sortBy, setSortBy] = useState('default') // 'default' | 'fee-asc' | 'fee-desc'
  const [compareOpen, setCompareOpen] = useState(false)

  const faculties = [
    { name: 'All', label: 'All Faculties' },
    { name: 'Computer Science', label: 'Computing & IT' },
    { name: 'Business', label: 'Business & Finance' },
    { name: 'Engineering', label: 'Engineering' },
    { name: 'Medicine', label: 'Medicine & Health' }
  ]

  const levels = ['All', 'Diploma', 'Bachelor Degree', 'Master Degree']

  const filteredPrograms = useMemo(() => {
    let result = programsData.filter((prog) => {
      const matchFaculty = selectedFaculty === 'All' || prog.faculty === selectedFaculty
      const matchLevel = selectedLevel === 'All' || prog.level === selectedLevel
      const matchSearch =
        searchQuery.trim() === '' ||
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.careers.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchFaculty && matchLevel && matchSearch
    })

    if (sortBy === 'fee-asc') {
      result = [...result].sort((a, b) => a.tuitionNum - b.tuitionNum)
    } else if (sortBy === 'fee-desc') {
      result = [...result].sort((a, b) => b.tuitionNum - a.tuitionNum)
    }

    return result
  }, [searchQuery, selectedFaculty, selectedLevel, sortBy])

  const handleFacultyChange = (f) => {
    setSelectedFaculty(f)
    if (f === 'All') {
      searchParams.delete('faculty')
      setSearchParams(searchParams)
    } else {
      setSearchParams({ faculty: f })
    }
  }

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedFaculty('All')
    setSelectedLevel('All')
    setSortBy('default')
    setSearchParams({})
  }

  return (
    <div className="space-y-12 pb-24">
      {/* Futuristic Cinematic Header Banner */}
      <section className="relative overflow-hidden bg-[#070A11] text-white py-16 md:py-24 border-b border-slate-800">
        {/* Ambient Futuristic Glowing Aurora Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/25 rounded-full blur-[110px] pointer-events-none animate-pulseGlow"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-cyber opacity-35 pointer-events-none"></div>

        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80" 
            alt="Students Studying" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-[#070A11]/85 to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-red-500/40 text-red-200 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl shadow-lg shadow-red-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-amber-300 font-mono text-[10px] tracking-widest font-bold">SYS_ACADEMIC_MATRIX</span>
            <span className="text-slate-500">•</span>
            <span className="text-white">35+ Accredited Degree & Diploma Pathways</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">Degree & Diploma</span> Programs
          </h1>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discover career-accelerating pathways accredited by MQA and recognized by international professional boards worldwide.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Control Bar - Futuristic Glassmorphism */}
        <div className="bg-white/95 dark:bg-slate-900/90 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl space-y-6">
          
          {/* Top Search Input & Sorting */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by degree title, career, or keywords (e.g. 'Software', 'MBA', 'Hospital')..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white dark:focus:bg-slate-800 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Fee Sorter */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-3 px-3.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="default">Sort by: Default</option>
                <option value="fee-asc">Tuition: Low to High</option>
                <option value="fee-desc">Tuition: High to Low</option>
              </select>
            </div>
          </div>

          {/* Filter Pills Row */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            
            {/* Faculty selection */}
            <div className="space-y-2 w-full lg:w-auto">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block font-mono">
                Filter by Faculty:
              </span>
              <div className="flex flex-wrap gap-2">
                {faculties.map((fac) => (
                  <button
                    key={fac.name}
                    onClick={() => handleFacultyChange(fac.name)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedFaculty === fac.name
                        ? 'bg-lincoln text-white shadow-md glow-red-sm'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {fac.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Study Level selection */}
            <div className="space-y-2 w-full lg:w-auto">
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block font-mono">
                Study Level:
              </span>
              <div className="flex flex-wrap gap-2">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedLevel === lvl
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Counter & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-8 mb-6">
          <div className="flex items-center gap-3">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Showing <strong className="text-slate-900 dark:text-white font-bold">{filteredPrograms.length}</strong> available programs
            </p>
            <button
              onClick={() => setCompareOpen(true)}
              className="inline-flex items-center gap-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/60 dark:hover:bg-red-900/60 text-lincoln dark:text-red-400 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-red-200 dark:border-red-800 transition-colors shadow-xs"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare Programs</span>
            </button>
          </div>

          {(selectedFaculty !== 'All' || selectedLevel !== 'All' || searchQuery !== '' || sortBy !== 'default') && (
            <button
              onClick={resetFilters}
              className="text-xs font-bold text-lincoln dark:text-red-400 hover:underline self-start sm:self-auto"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-red-300 dark:hover:border-red-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border border-white/10">
                        {prog.level}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        {prog.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-lincoln dark:text-red-400 uppercase tracking-wider text-[11px]">
                        {prog.facultyShort || prog.faculty}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500 font-medium text-[11px]">
                        {prog.mode}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-lincoln dark:group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {prog.summary}
                    </p>

                    <div className="pt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                      <div>
                        <span className="text-slate-400 dark:text-slate-500 block text-[10px]">Estimated Tuition</span>
                        <strong className="text-slate-900 dark:text-white font-bold">{prog.tuition}</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 dark:text-slate-500 block text-[10px]">Upcoming Intakes</span>
                        <strong className="text-lincoln dark:text-red-400 font-bold">{prog.intakes.split(',')[0]}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-2.5">
                  <Link
                    to={`/programs/${prog.id}`}
                    className="flex-1 text-center py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition-colors"
                  >
                    Curriculum & Fees
                  </Link>
                  <Link
                    to={`/apply?program=${encodeURIComponent(prog.title)}`}
                    className="flex-1 text-center py-2.5 px-4 bg-lincoln hover:bg-lincoln-dark text-white font-bold text-xs rounded-xl shadow-md shadow-red-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/40 text-lincoln dark:text-red-400 flex items-center justify-center mx-auto">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No matching programs found</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              We couldn't find any courses matching your current filter or search criteria.
            </p>
            <button
              onClick={resetFilters}
              className="inline-block bg-lincoln text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-lincoln-dark transition-colors shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Interactive Scholarship Calculator */}
        <div className="mt-16">
          <ScholarshipCalculator />
        </div>

        {/* Side-by-Side Course Comparison Modal */}
        <ProgramCompareModal
          isOpen={compareOpen}
          onClose={() => setCompareOpen(false)}
        />

      </div>
    </div>
  )
}
