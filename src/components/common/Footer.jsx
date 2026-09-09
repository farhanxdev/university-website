import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, MapPin, Phone, Mail, Globe, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: University Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-lincoln text-white rounded-lg flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-lg font-bold text-white leading-tight">LINCOLN</span>
                <span className="block text-xs font-medium text-red-400 uppercase">University College</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lincoln University College (LUC) is a premier private higher education institution in Malaysia, dedicated to providing globally accredited degrees and industry-ready career pathways.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">
                MOHE & MQA Accredited
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 border-l-2 border-lincoln pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About the University</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">Academic Programs</Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-white transition-colors">Admission & How to Apply</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Campus</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Faculties */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 border-l-2 border-lincoln pl-3">
              Key Faculties
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-white transition-colors">
                <Link to="/programs?faculty=Computer+Science">Computer Science & Multimedia</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/programs?faculty=Business">Business & Accountancy</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/programs?faculty=Engineering">Applied Science & Engineering</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/programs?faculty=Medicine">Medicine & Health Sciences</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link to="/programs?faculty=Hospitality">Hospitality & Tourism</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Details */}
          <div>
            <h4 className="text-white text-base font-semibold mb-4 border-l-2 border-lincoln pl-3">
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lincoln University College. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with React, Tailwind CSS & AI for Internship Project</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
