import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { 
  ArrowRight, 
  Search, 
  Sparkles, 
  BookOpen, 
  Users, 
  Award, 
  Globe2, 
  CheckCircle2, 
  Calendar,
  MessageSquareQuote,
  Star,
  Newspaper
} from 'lucide-react'
import AIRecommender from '../components/ai/AIRecommender'

export default function HomePage() {
  const outletContext = useOutletContext()
  const handleOpenSearch = outletContext?.onOpenSearch

  const stats = [
    { label: 'Accredited Programs', value: '35+' },
    { label: 'Global Students', value: '12,000+' },
    { label: 'Graduate Employability', value: '94%' },
    { label: 'Partner Universities', value: '25+' },
  ]

  const featuredCourses = [
    {
      id: 'bcs-se',
      title: 'Bachelor of Computer Science (Software Engineering)',
      faculty: 'Faculty of Computer Science & Multimedia',
      duration: '3 Years (Full-time)',
      level: 'Undergraduate Degree',
      badge: 'Popular & High Demand',
      description: 'Master full-stack engineering, cloud architecture, and modern AI application development.'
    },
    {
      id: 'bba-hons',
      title: 'Bachelor of Business Administration (Hons)',
      faculty: 'Faculty of Business & Accountancy',
      duration: '3 Years (Full-time)',
      level: 'Undergraduate Degree',
      badge: 'Globally Accredited',
      description: 'Develop strategic leadership, financial modeling, and global market entrepreneurship skills.'
    },
    {
      id: 'dip-it',
      title: 'Diploma in Information Technology',
      faculty: 'Faculty of Computer Science & Multimedia',
      duration: '2 Years (Full-time)',
      level: 'Diploma',
      badge: 'Fast-Track Career',
      description: 'Hands-on practical training in computer networks, web programming, and database administration.'
    }
  ]

  const newsEvents = [
    {
      tag: 'Campus Open Day',
      date: 'April 18, 2026',
      title: 'Lincoln University Annual Open Day & Scholarship Assessment',
      description: 'Meet faculty deans, tour state-of-the-art computer labs, and receive on-the-spot scholarship offers.'
    },
    {
      tag: 'Tech Innovation',
      date: 'May 05, 2026',
      title: 'AI & Cyber Security Hackathon 2026 Hosted by Lincoln CS Faculty',
      description: 'Over RM 20,000 in prizes for students building modern AI web and mobile solutions.'
    },
    {
      tag: 'Global Partnership',
      date: 'May 22, 2026',
      title: 'Dual Degree MoU Signed with Leading UK & Australian Universities',
      description: 'Expand your academic horizons with international credit transfer and exchange semesters.'
    }
  ]

  const testimonials = [
    {
      quote: "The hands-on curriculum in Software Engineering gave me the confidence to secure a software developer role before graduation. The lecturers are deeply supportive.",
      name: "Farhan Rahman",
      course: "BSc Software Engineering, Class of 2025",
      rating: 5
    },
    {
      quote: "Studying at Lincoln exposed me to students from over 30 countries. The Business Administration program sharpened my negotiation and presentation skills immensely.",
      name: "Sarah Lim",
      course: "Bachelor of Business Administration, Class of 2024",
      rating: 5
    }
  ]

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-red-50 via-white to-slate-50 pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-100 text-lincoln px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>2026 Admissions Open | Lincoln University College</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Shape Your Future with <span className="text-lincoln">Global Excellence</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Discover world-class academic degrees, industry-recognized faculty, and cutting-edge research facilities designed to launch your global career in Malaysia and beyond.
              </p>

              {/* Quick AI Search Trigger Bar */}
              <div className="pt-2 max-w-xl">
                <div 
                  onClick={handleOpenSearch}
                  className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-md border border-slate-200 cursor-pointer hover:border-red-400 transition-all group"
                >
                  <Search className="w-5 h-5 text-slate-400 group-hover:text-lincoln transition-colors ml-1" />
                  <div className="flex-1 text-xs sm:text-sm text-slate-400">
                    Search degrees or ask AI (e.g. <span className="text-slate-600">"cheap IT course"</span>, <span className="text-slate-600">"cyber security"</span>)...
                  </div>
                  <span className="bg-lincoln text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 group-hover:bg-lincoln-dark transition-colors">
                    <Sparkles className="w-3.5 h-3.5" /> AI Search
                  </span>
                </div>

                <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                  <span className="font-medium text-slate-700">Quick Filters:</span>
                  <Link to="/programs?faculty=Computer+Science" className="hover:text-lincoln underline">Computer Science</Link>
                  <span>•</span>
                  <Link to="/programs?faculty=Business" className="hover:text-lincoln underline">Business</Link>
                  <span>•</span>
                  <Link to="/programs?faculty=Medicine" className="hover:text-lincoln underline">Medicine</Link>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-lg shadow transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Explore All Programs
                </Link>
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
                >
                  Apply for Admission
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hero Visual Fast-Track Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500 to-rose-600 opacity-20 blur-xl"></div>
                
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs font-semibold uppercase text-lincoln tracking-wider">Fast-Track Intake</span>
                      <h3 className="text-xl font-bold text-slate-900">Next Upcoming Intake</h3>
                    </div>
                    <Calendar className="w-8 h-8 text-lincoln" />
                  </div>

                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Early Bird Scholarships Available (Up to 50%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Full MQA and MOHE Accreditation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Direct Industry Internship Guarantees</span>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      "Lincoln University College prepared me with direct industry mentorship and the practical tools to land my first software developer role right after graduation."
                    </p>
                    <div className="mt-2 text-xs font-semibold text-slate-900">
                      — Lincoln Alumni, Class of 2025
                    </div>
                  </div>

                  <Link
                    to="/apply"
                    className="block text-center w-full bg-lincoln hover:bg-lincoln-dark text-white font-medium py-3 rounded-lg shadow transition-colors"
                  >
                    Start Online Application
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center space-y-1 hover:border-red-300 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-lincoln">{item.value}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-lincoln uppercase tracking-wider">Academics</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Featured Programs</h2>
            <p className="text-slate-600 text-sm mt-2">Explore accredited undergraduate and diploma programs for your career.</p>
          </div>
          <Link
            to="/programs"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-lincoln hover:underline"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded">
                    {course.level}
                  </span>
                  <span className="inline-block bg-red-50 text-lincoln text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100">
                    {course.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-lincoln transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium">
                  {course.faculty}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">{course.duration}</span>
                <Link
                  to={`/programs/${course.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-lincoln hover:text-lincoln-dark"
                >
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive AI Course Recommender Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIRecommender />
      </section>

      {/* About Preview (Short) - Required by Page 2 of PDF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-lincoln uppercase tracking-wider">About Lincoln</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              A Trusted Higher Education Institution in Malaysia
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Lincoln University College (LUC) is recognized both locally and internationally for producing highly skilled graduates who thrive across global industries. With modern campus facilities, dedicated faculty members, and research excellence, Lincoln empowers you to achieve your potential.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-lincoln hover:text-lincoln-dark"
              >
                Learn More About Our University Heritage <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-200">
              <div className="text-2xl font-extrabold text-lincoln">20+</div>
              <div className="text-xs text-slate-600 mt-1">Years of Academic Excellence</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-200">
              <div className="text-2xl font-extrabold text-lincoln">40+</div>
              <div className="text-xs text-slate-600 mt-1">Student Nationalities</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-200">
              <div className="text-2xl font-extrabold text-lincoln">100%</div>
              <div className="text-xs text-slate-600 mt-1">MQA & MOHE Approved</div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl text-center border border-slate-200">
              <div className="text-2xl font-extrabold text-lincoln">5-Star</div>
              <div className="text-xs text-slate-600 mt-1">MyQuest Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section - Required by Page 2 of PDF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-lincoln uppercase tracking-wider">Updates</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">News & Campus Events</h2>
            <p className="text-slate-600 text-sm mt-1">Stay updated with academic symposiums, hackathons, and announcements.</p>
          </div>
          <Link
            to="/contact"
            className="mt-4 md:mt-0 text-sm font-semibold text-lincoln hover:underline"
          >
            Visit Our Campus
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsEvents.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-red-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-red-50 text-lincoln font-semibold px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <span className="text-slate-400">{item.date}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-lincoln flex items-center gap-1 cursor-pointer">
                  Read Announcement <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section - Required by Page 3 of PDF */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-lincoln uppercase tracking-wider">Student Voices</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">What Our Students Say</h2>
            <p className="text-slate-600 text-sm mt-2">Hear directly from graduates who launched their careers from Lincoln.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-sm text-slate-900">{t.name}</div>
                  <div className="text-xs text-lincoln">{t.course}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-lincoln to-red-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Ready to begin your academic journey at Lincoln?
            </h2>
            <p className="text-red-100 text-sm">
              Our academic advisors are here to assist you with program selection, scholarships, and admission paperwork.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/apply"
              className="bg-white text-lincoln hover:bg-slate-100 font-semibold px-6 py-3 rounded-lg shadow transition-colors text-sm"
            >
              Apply Online Today
            </Link>
            <Link
              to="/contact"
              className="bg-red-950/40 hover:bg-red-950/60 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
