import React from 'react'
import { Award, Compass, Eye, ShieldCheck, Users, Target, CheckCircle2, History, Building, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const leadership = [
    {
      name: 'Prof. Dr. Amiya Bhaumik',
      role: 'Founder & President',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      bio: 'Visionary educationist committed to expanding accessible, high-standard tertiary education across Southeast Asia and globally.',
      qualifications: 'PhD in Education, Fellow of International Academic Councils'
    },
    {
      name: 'Prof. Dr. Abdul Ghafar',
      role: 'Vice-Chancellor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Distinguished scholar focusing on international research initiatives, student outcomes, and multi-institutional academic partnerships.',
      qualifications: 'PhD in Strategic Management, Former Dean'
    },
    {
      name: 'Assoc. Prof. Dr. Siti Mariam',
      role: 'Dean, Faculty of Computer Science & IT',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      bio: 'Leading computer science researcher spearheading AI curricula, cyber security research labs, and industry tech partnerships.',
      qualifications: 'PhD in Artificial Intelligence, IEEE Senior Member'
    },
  ]

  const milestones = [
    {
      year: '2002',
      title: 'Foundation of Lincoln',
      desc: 'Established as Lincoln College in Petaling Jaya, Malaysia, offering high-demand computing and business courses.'
    },
    {
      year: '2011',
      title: 'University College Status',
      desc: 'Upgraded to Lincoln University College (LUC) by the Ministry of Higher Education Malaysia in recognition of quality.'
    },
    {
      year: '2019',
      title: 'Global Campus Expansion',
      desc: 'Expanded student body to over 40 nationalities and established international exchange agreements with universities in UK and Australia.'
    },
    {
      year: '2026',
      title: 'AI & Digital Innovation Era',
      desc: 'Integrated modern AI smart search, machine learning curricula, and hybrid learning facilities across all faculties.'
    }
  ]

  const accreditations = [
    { name: 'Malaysian Qualifications Agency (MQA)', code: 'All Programs Certified' },
    { name: 'Ministry of Higher Education (MOHE)', code: 'Approved Institution' },
    { name: 'Public Service Department (JPA)', code: 'Civil Service Recognition' },
    { name: 'Nursing Board of Malaysia', code: 'Clinical Healthcare License' },
  ]

  return (
    <div className="space-y-16 lg:space-y-24 pb-24">
      
      {/* Futuristic Cinematic Header Banner */}
      <section className="relative overflow-hidden bg-[#070A11] text-white py-16 md:py-24 border-b border-slate-800">
        {/* Ambient Futuristic Glowing Aurora Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/25 rounded-full blur-[110px] pointer-events-none animate-pulseGlow"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-cyber opacity-35 pointer-events-none"></div>

        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80" 
            alt="Lincoln Campus Architecture" 
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
            <span className="text-amber-300 font-mono text-[10px] tracking-widest font-bold">SYS_HERITAGE</span>
            <span className="text-slate-500">•</span>
            <span className="text-white">Est. 2002 • Petaling Jaya, Malaysia</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">Higher Education</span> in Malaysia
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Since 2002, Lincoln University College has dedicated itself to practical knowledge, global academic accreditations, and transforming ambitious students into industry leaders.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 relative overflow-hidden group hover:border-red-400 dark:hover:border-red-500/50 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-red-50 dark:bg-red-950/50 text-lincoln dark:text-red-400 rounded-2xl flex items-center justify-center font-bold">
              <Compass className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              To deliver accessible, career-oriented education through innovative teaching methods and instill professional values, ethical leadership, and practical technical competence for positive global societal impact.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 relative overflow-hidden group hover:border-red-400 dark:hover:border-red-500/50 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-red-50 dark:bg-red-950/50 text-lincoln dark:text-red-400 rounded-2xl flex items-center justify-center font-bold">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              To be an internationally recognized premier institution of higher learning that fosters intellectual inquiry, technological innovation, and sustainable development across multidisciplinary spheres.
            </p>
          </div>
        </div>
      </section>

      {/* Historic Milestone Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-lincoln dark:text-red-400 uppercase tracking-widest bg-red-100 dark:bg-red-950/50 px-3 py-1 rounded-full border border-red-200 dark:border-red-900/50">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
            Milestones of Excellence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
            Over two decades of steady academic expansion, research development, and international recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-slate-900/90 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 space-y-3 relative group"
            >
              <span className="text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 block">
                {m.year}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-lincoln dark:group-hover:text-red-400 transition-colors">
                {m.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-lincoln dark:text-red-400 uppercase tracking-widest bg-red-100 dark:bg-red-950/50 px-3 py-1 rounded-full border border-red-200 dark:border-red-900/50">
            Academic Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
            Our University Leadership
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
            Guided by experienced educators and researchers dedicated to student achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((person, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl hover:border-red-300 dark:hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-xs font-mono font-bold text-lincoln dark:text-red-400 uppercase tracking-wider block">
                    {person.role}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-lincoln dark:group-hover:text-red-400 transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold">{person.qualifications}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                    {person.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Accreditations Strip */}
      <section className="bg-[#070A11] text-white py-16 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold">Government & International Accreditations</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Ensuring your degree holds full academic and legal standing worldwide.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accreditations.map((item, i) => (
              <div 
                key={i} 
                className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:shadow-lg transition-all text-center space-y-1 backdrop-blur-sm group"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-sm text-white">{item.name}</h4>
                <span className="text-xs text-red-400 font-semibold font-mono">{item.code}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
