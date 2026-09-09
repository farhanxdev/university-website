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
      
      {/* Cinematic Header Banner */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80" 
            alt="Lincoln Campus Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs font-bold text-red-400 uppercase tracking-widest bg-red-900/40 border border-red-500/30 px-3.5 py-1 rounded-full">
            Our Heritage & Story
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Pioneering Higher Education in Malaysia
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Since 2002, Lincoln University College has dedicated itself to practical knowledge, global academic accreditations, and transforming ambitious students into industry leaders.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 relative overflow-hidden group hover:border-red-300 transition-colors">
            <div className="w-14 h-14 bg-red-50 text-lincoln rounded-2xl flex items-center justify-center font-bold">
              <Compass className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To deliver accessible, career-oriented education through innovative teaching methods and instill professional values, ethical leadership, and practical technical competence for positive global societal impact.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 relative overflow-hidden group hover:border-red-300 transition-colors">
            <div className="w-14 h-14 bg-red-50 text-lincoln rounded-2xl flex items-center justify-center font-bold">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To be an internationally recognized premier institution of higher learning that fosters intellectual inquiry, technological innovation, and sustainable development across multidisciplinary spheres.
            </p>
          </div>
        </div>
      </section>

      {/* Historic Milestone Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-lincoln uppercase tracking-widest">Our Journey</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Milestones of Excellence
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Over two decades of steady academic expansion, research development, and international recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative">
              <span className="text-3xl font-extrabold text-lincoln">{m.year}</span>
              <h3 className="text-base font-bold text-slate-900">{m.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-lincoln uppercase tracking-widest">Academic Governance</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Our University Leadership</h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Guided by experienced educators and researchers dedicated to student achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((person, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between">
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-xs font-bold text-lincoln uppercase">{person.role}</span>
                  <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                  <p className="text-[11px] text-slate-400 font-semibold">{person.qualifications}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {person.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Accreditations Strip */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold">Government & International Accreditations</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Ensuring your degree holds full academic and legal standing worldwide.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {accreditations.map((item, i) => (
              <div key={i} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 text-center space-y-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-sm text-white">{item.name}</h4>
                <span className="text-xs text-red-400 font-semibold">{item.code}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
