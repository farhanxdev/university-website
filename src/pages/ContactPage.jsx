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

export default function ContactPage() {
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
    if (!formData.name || !formData.email) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', program: '', message: '' })
    }, 4000)
  }

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2">
            Contact Lincoln University College
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Have questions about programs, campus tours, or enrollment? Our team is always ready to guide you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Send an Enquiry</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the form below and an academic advisor will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-900">Enquiry Submitted Successfully!</h3>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out. A Lincoln University admissions counselor will email you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Farhan Rahman"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. farhan@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Contact / WhatsApp Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 12-345 6789"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Program of Interest</label>
                    <input
                      type="text"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      placeholder="e.g. Software Engineering, MBA, Nursing"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Message / Questions</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you would like to know (e.g., 'What scholarships do you offer?' or 'How to apply?')..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                  ></textarea>
                </div>

                {/* AI FAQ Auto-Suggestor Box (Required by PDF Page 4) */}
                {suggestedFaq && (
                  <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl space-y-2 animate-fadeIn">
                    <div className="flex items-center gap-2 text-lincoln font-bold text-xs">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>AI Answer Suggestion:</span>
                      <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-red-200 text-slate-600 font-normal">
                        Matched: {suggestedFaq.category}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-900">
                      Q: {suggestedFaq.question}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-red-100">
                      {suggestedFaq.answer}
                    </p>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <span>Got your answer? You can still submit this form to talk directly with an admissions advisor!</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white font-semibold py-3 px-6 rounded-xl shadow transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Campus Details & Maps Container */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Campus Information
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-lincoln shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Main Campus:</strong>
                    <span>Wisma Lincoln, No. 12-18, Jalan SS 6/12, 47301 Petaling Jaya, Selangor, Malaysia</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-lincoln shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Toll-Free & Phone:</strong>
                    <span>1300 880 111 / +60 3-7806 3478</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-lincoln shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">General Email:</strong>
                    <span>info@lincoln.edu.my</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-lincoln shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Office Hours:</strong>
                    <span>Mon – Fri: 8:30 AM – 5:30 PM<br />Sat: 9:00 AM – 1:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="pt-2">
                <div className="w-full h-48 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative flex items-center justify-center text-center p-4">
                  <div className="space-y-2">
                    <MapPin className="w-8 h-8 text-lincoln mx-auto animate-bounce" />
                    <p className="text-xs font-semibold text-slate-700">
                      Lincoln University College Main Campus
                    </p>
                    <a
                      href="https://maps.google.com/?q=Lincoln+University+College+Petaling+Jaya"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-lincoln hover:underline"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section with Category Filters */}
        <div className="mt-16 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-lincoln" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-xs sm:text-sm text-slate-500">Quick answers to common questions about studying at Lincoln.</p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-lincoln text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center bg-slate-50/50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-900 pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-lincoln shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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
