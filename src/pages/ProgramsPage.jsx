import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, Filter, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react'
import { programsData } from '../data/programsData'

export default function ProgramsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialFaculty = searchParams.get('faculty') || 'All'

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFaculty, setSelectedFaculty] = useState(initialFaculty)
  const [selectedLevel, setSelectedLevel] = useState('All')

  const faculties = ['All', 'Computer Science', 'Business', 'Engineering', 'Medicine']
  const levels = ['All', 'Diploma', 'Bachelor Degree', 'Master Degree']

  const filteredPrograms = useMemo(() => {
    return programsData.filter((prog) => {
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
  }, [searchQuery, selectedFaculty, selectedLevel])

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
    setSearchParams({})
  }

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
            Academic Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2">
            Explore All Academic Programs
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Find the right diploma, bachelor's degree, or master's degree aligned with your personal ambitions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords, e.g. 'Software', 'Cyber Security', 'MBA', 'Hospital'..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center pt-2 border-t border-slate-100">
            {/* Faculty filter */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Faculty:
              </span>
              <div className="flex flex-wrap gap-2">
                {faculties.map((fac) => (
                  <button
                    key={fac}
                    onClick={() => handleFacultyChange(fac)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedFaculty === fac
                        ? 'bg-lincoln text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {fac}
                  </button>
                ))}
              </div>
            </div>

            {/* Level filter */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Study Level:
              </span>
              <div className="flex flex-wrap gap-2">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedLevel === lvl
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between mt-8 mb-4">
          <p className="text-sm text-slate-600">
            Showing <strong className="text-slate-900">{filteredPrograms.length}</strong> programs available
          </p>
          {(selectedFaculty !== 'All' || selectedLevel !== 'All' || searchQuery !== '') && (
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-lincoln hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-red-300 transition-all p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded">
                      {prog.level}
                    </span>
                    <span className="text-xs font-semibold text-lincoln">
                      {prog.faculty}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-lincoln transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prog.summary}
                  </p>

                  <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {prog.duration}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-slate-700">
                      <Tag className="w-3.5 h-3.5 text-lincoln" />
                      {prog.tuition}
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/programs/${prog.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-lincoln hover:text-lincoln-dark"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={`/apply?program=${encodeURIComponent(prog.title)}`}
                    className="bg-red-50 hover:bg-red-100 text-lincoln text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No matching programs found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any courses matching your current search criteria. Try removing filters or searching for another term.
            </p>
            <button
              onClick={resetFilters}
              className="inline-block bg-lincoln text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-lincoln-dark transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
