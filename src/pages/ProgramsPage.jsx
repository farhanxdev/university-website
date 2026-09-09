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
      {/* Cinematic Header Banner */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 md:py-20 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80" 
            alt="Students Studying" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-600/30 text-red-300 border border-red-500/30 px-3.5 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Lincoln Academic Course Finder</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Explore All Degree & Diploma Programs
          </h1>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Discover accredited pathways designed with leading industry partners to guarantee your career employability.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Control Bar */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-6">
          
          {/* Top Search Input & Sorting */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by degree title, career, or keywords (e.g. 'Software', 'MBA', 'Hospital')..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 px-2 py-0.5 rounded-md"
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
                className="py-3 px-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="default">Sort by: Default</option>
                <option value="fee-asc">Tuition: Low to High</option>
                <option value="fee-desc">Tuition: High to Low</option>
              </select>
            </div>
          </div>

          {/* Filter Pills Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            
            {/* Faculty selection */}
            <div className="space-y-2 w-full lg:w-auto">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Filter by Faculty:
              </span>
              <div className="flex flex-wrap gap-2">
                {faculties.map((fac) => (
                  <button
                    key={fac.name}
                    onClick={() => handleFacultyChange(fac.name)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedFaculty === fac.name
                        ? 'bg-lincoln text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {fac.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Study Level selection */}
            <div className="space-y-2 w-full lg:w-auto">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Study Level:
              </span>
              <div className="flex flex-wrap gap-2">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedLevel === lvl
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
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
              className="text-xs font-bold text-lincoln hover:underline self-start sm:self-auto"
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
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={prog.image} 
                      alt={prog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
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
                      <span className="font-bold text-lincoln uppercase tracking-wider text-[11px]">
                        {prog.facultyShort || prog.faculty}
                      </span>
                      <span className="text-slate-400 font-medium text-[11px]">
                        {prog.mode}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-lincoln transition-colors leading-snug line-clamp-2">
                      {prog.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {prog.summary}
                    </p>

                    <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Estimated Tuition</span>
                        <strong className="text-slate-900 font-bold">{prog.tuition}</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 block text-[10px]">Upcoming Intakes</span>
                        <strong className="text-lincoln font-bold">{prog.intakes.split(',')[0]}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-2">
                  <Link
                    to={`/programs/${prog.id}`}
                    className="flex-1 text-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors"
                  >
                    Curriculum & Fees
                  </Link>
                  <Link
                    to={`/apply?program=${encodeURIComponent(prog.title)}`}
                    className="flex-1 text-center py-2.5 px-4 bg-lincoln hover:bg-lincoln-dark text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-red-50 text-lincoln flex items-center justify-center mx-auto">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No matching programs found</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
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
