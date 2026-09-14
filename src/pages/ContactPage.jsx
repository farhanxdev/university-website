import React, { useState, useMemo } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Sparkles,
  Lightbulb,
  ExternalLink
} from 'lucide-react'
import { faqData } from '../data/faqData'
import { useToast } from '../context/ToastContext'

export default function ContactPage() {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  // AI Auto-Suggest Answer matching based on user typing
  const suggestedFaq = useMemo(() => {
    const text = (formData.message + ' ' + formData.program).toLowerCase().trim()
    if (text.length < 3) return null

    return faqData.find(item => {
      return item.keywords.some(keyword => text.includes(keyword)) ||
             item.question.toLowerCase().split(' ').some(word => word.length > 3 && text.includes(word))
    })
  }, [formData.message, formData.program])

  const categories = ['All', 'Admissions', 'Fees & Aid', 'Accreditation', 'International', 'Campus & Facilities']

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'All') return faqData
    return faqData.filter(f => f.category === selectedCategory)
  }, [selectedCategory])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      toast.error('Please enter your name and email')
      return
    }
    setSubmitted(true)
    toast.success('Inquiry sent successfully! Our academic counselor will contact you within 24 hours.')
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', program: '', message: '' })
    }, 4000)
  }

  return (
    <div className="space-y-16 pb-20">
      {/* Futuristic Cinematic Header Banner */}
      <section className="relative overflow-hidden bg-[#070A11] text-white py-16 md:py-24 border-b border-slate-800">
        {/* Ambient Futuristic Glowing Aurora Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/25 rounded-full blur-[110px] pointer-events-none animate-pulseGlow"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-cyber opacity-35 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-red-500/40 text-red-200 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl shadow-lg shadow-red-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-amber-300 font-mono text-[10px] tracking-widest font-bold">SYS_ADVISORY_DESK</span>
            <span className="text-slate-500">•</span>
            <span className="text-white">Admissions & Campus Inquiries 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">Lincoln University</span> College
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Have questions regarding academic degrees, scholarship eligibility, or campus tours? Our dedicated counselors are available to assist you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send an Enquiry</h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form below and an academic advisor will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-300">Enquiry Submitted Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400 max-w-md mx-auto">
                  Thank you for reaching out. A Lincoln University admissions counselor will email you shortly with the requested information.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Farhan Rahman"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. farhan@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Contact / WhatsApp Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 12-345 6789"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Program of Interest</label>
                    <input
                      type="text"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      placeholder="e.g. Software Engineering, MBA, Nursing"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Message / Questions</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you would like to know (e.g., 'What scholarships do you offer?' or 'How to apply?')..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                  ></textarea>
                </div>

                {/* AI FAQ Auto-Suggestor Box (Required by PDF Page 4) */}
                {suggestedFaq && (
                  <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/40 dark:to-slate-900/90 border border-red-200 dark:border-red-900/60 rounded-2xl space-y-2 animate-fadeIn">
                    <div className="flex items-center gap-2 text-lincoln dark:text-red-400 font-bold text-xs">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>AI Answer Suggestion:</span>
                      <span className="text-[10px] bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-900/50 text-slate-600 dark:text-slate-300 font-normal">
                        Matched: {suggestedFaq.category}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">
                      Q: {suggestedFaq.question}
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-white/80 dark:bg-slate-800/80 p-3 rounded-xl border border-red-100 dark:border-slate-700">
                      {suggestedFaq.answer}
                    </p>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <span>Got your answer? You can still submit this form to talk directly with an admissions advisor!</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-red-950/30 transition-all hover:scale-[1.01] active:scale-[0.99] text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Campus Details & Maps Container */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Campus Information
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-lincoln dark:text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Main Campus:</strong>
                    <span>Wisma Lincoln, No. 12-18, Jalan SS 6/12, 47301 Petaling Jaya, Selangor, Malaysia</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-lincoln dark:text-red-400 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Toll-Free & Phone:</strong>
                    <span>1300 880 111 / +60 3-7806 3478</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-lincoln dark:text-red-400 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">General Email:</strong>
                    <span>info@lincoln.edu.my</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-lincoln dark:text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Office Hours:</strong>
                    <span>Mon – Fri: 8:30 AM – 5:30 PM<br />Sat: 9:00 AM – 1:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="pt-2">
                <div className="w-full h-48 bg-slate-100 dark:bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 relative flex items-center justify-center text-center p-4">
                  <div className="space-y-2">
                    <MapPin className="w-8 h-8 text-lincoln dark:text-red-400 mx-auto animate-bounce" />
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      Lincoln University College Main Campus
                    </p>
                    <a
                      href="https://maps.google.com/?q=Lincoln+University+College+Petaling+Jaya"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-lincoln dark:text-red-400 hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Campus Healthcare & Service Centres */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <span className="text-xs font-bold text-slate-900 dark:text-white block uppercase tracking-wider">
                  Healthcare & Service Centres
                </span>
                <div className="p-3 bg-red-50/70 dark:bg-red-950/40 rounded-xl border border-red-100 dark:border-red-900/50 text-xs space-y-1">
                  <div className="font-bold text-lincoln dark:text-red-400">Poliklinik Lincoln</div>
                  <p className="text-slate-600 dark:text-slate-300">On-campus clinic providing medical consultations, physical exams, and health assessments.</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">Pusat Pergigian Lincoln (Dental Clinic)</div>
                  <p className="text-slate-600 dark:text-slate-300">Equipped with dental surgery operatories for student care and community dental health.</p>
                </div>
                <div className="pt-1">
                  <a 
                    href="https://www.actsugi.com/LincolnUniversityMY/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-lincoln dark:text-red-400 hover:underline"
                  >
                    <span>Launch 360° Virtual Campus Experience</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section with Category Filters */}
        <div className="mt-16 bg-white dark:bg-slate-900/90 p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-lincoln dark:text-red-400" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Quick answers to common questions about studying at Lincoln.</p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-lincoln text-white shadow-xs glow-red-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={faq.id}
                  className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-lincoln dark:text-red-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white dark:bg-slate-900/70 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
