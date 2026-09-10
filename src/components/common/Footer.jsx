import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, Globe, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070A11] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* Top glowing neon accent line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      {/* Cyber Grid & Ambient Glow Orbs */}
      <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: University Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-lincoln to-red-700 text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-red-950/50 glow-red-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-lg font-extrabold text-white tracking-tight leading-tight">LINCOLN</span>
                <span className="block text-xs font-semibold text-red-400 uppercase tracking-wider">University College</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lincoln University College (LUC) is a premier private higher education institution in Malaysia, dedicated to providing globally accredited degrees and industry-ready career pathways.
            </p>
            <div className="pt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-slate-900/90 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/30 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                MOHE & MQA Accredited
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 border-l-2 border-lincoln pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-all text-slate-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all text-slate-400">About the University</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white hover:translate-x-1 inline-block transition-all text-slate-400">Academic Programs</Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-white hover:translate-x-1 inline-block transition-all text-slate-400">Admission & How to Apply</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all text-slate-400">Contact Campus</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Faculties */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 border-l-2 border-lincoln pl-3">
              Key Faculties
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/programs?faculty=Computer+Science" className="hover:text-white hover:translate-x-1 inline-block transition-all">Computer Science & Multimedia</Link>
              </li>
              <li>
                <Link to="/programs?faculty=Business" className="hover:text-white hover:translate-x-1 inline-block transition-all">Business & Accountancy</Link>
              </li>
              <li>
                <Link to="/programs?faculty=Engineering" className="hover:text-white hover:translate-x-1 inline-block transition-all">Applied Science & Engineering</Link>
              </li>
              <li>
                <Link to="/programs?faculty=Medicine" className="hover:text-white hover:translate-x-1 inline-block transition-all">Medicine & Health Sciences</Link>
              </li>
              <li>
                <Link to="/programs?faculty=Hospitality" className="hover:text-white hover:translate-x-1 inline-block transition-all">Hospitality & Tourism</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Details */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 border-l-2 border-lincoln pl-3">
              Main Campus
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lincoln shrink-0 mt-0.5" />
                <span>Wisma Lincoln, No. 12-18, Jalan SS 6/12, 47301 Petaling Jaya, Selangor, Malaysia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-lincoln shrink-0" />
                <span>+60 3-7806 3478 / 1300 880 111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-lincoln shrink-0" />
                <span>info@lincoln.edu.my</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-lincoln shrink-0" />
                <span>www.lincoln.edu.my</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Live Telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lincoln University College. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>SYS_CORE_NODE // KUL_CAMPUS_ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
