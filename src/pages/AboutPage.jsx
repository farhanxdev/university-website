import React from 'react'
import { Award, Compass, Eye, ShieldCheck, Users, Target } from 'lucide-react'

export default function AboutPage() {
  const leadership = [
    {
      name: 'Prof. Dr. Amiya Bhaumik',
      role: 'Founder & President',
      bio: 'Visionary educator committed to expanding accessible, high-standard tertiary education across Southeast Asia.',
    },
    {
      name: 'Prof. Dr. Abdul Ghafar',
      role: 'Vice-Chancellor',
      bio: 'Distinguished academic leader focusing on international research initiatives and curriculum innovation.',
    },
    {
      name: 'Assoc. Prof. Dr. Siti Mariam',
      role: 'Dean of Faculty of Computer Science & IT',
      bio: 'Leading computer science researcher spearheading AI, software engineering, and industry-partnered curricula.',
    },
  ]

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 md:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
            About Lincoln University College
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Pioneering Global Education in Malaysia
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Established in 2002, Lincoln University College brings together passionate educators, modern facilities, and a global student body committed to innovation and career success.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-red-100 text-lincoln rounded-xl flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To render quality education to students through career-oriented courses and instill professional values, practical competence, and lifelong learning capabilities for positive global societal impact.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-red-100 text-lincoln rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be a premier global institution of higher learning that fosters intellectual development, scientific inquiry, and ethical leadership in diverse fields of knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-lincoln uppercase tracking-wider">Executive Leadership</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Our University Leaders</h2>
          <p className="text-slate-600 text-sm mt-2">
            Guided by experienced educators and researchers with decades of global academic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((person, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-16 h-16 bg-slate-100 text-lincoln font-bold text-xl rounded-full flex items-center justify-center border-2 border-red-100">
                {person.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                <p className="text-xs font-semibold text-lincoln">{person.role}</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Core Pillars</h2>
            <p className="text-slate-600 text-sm mt-1">Guiding principles that define our educational environment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 mx-auto bg-red-50 text-lincoln rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Excellence</h3>
              <p className="text-xs text-slate-500">Uncompromising academic standards and practical rigor.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 mx-auto bg-red-50 text-lincoln rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Integrity</h3>
              <p className="text-xs text-slate-500">Honesty, accountability, and ethical scientific inquiry.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 mx-auto bg-red-50 text-lincoln rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Diversity</h3>
              <p className="text-xs text-slate-500">Welcoming students from every background and culture.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 mx-auto bg-red-50 text-lincoln rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Innovation</h3>
              <p className="text-xs text-slate-500">Adopting modern AI and tech tools in learning.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
