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
  Star,
  FileText,
  Calculator,
  Compass,
  MessageCircle,
  ExternalLink,
  Laptop,
  Briefcase,
  Stethoscope,
  Building2
} from 'lucide-react'
import { programsData } from '../data/programsData'
import AIRecommender from '../components/ai/AIRecommender'

export default function HomePage() {
  const outletContext = useOutletContext()
  const handleOpenSearch = outletContext?.onOpenSearch

  const stats = [
    { label: 'Accredited Programs', value: '35+', desc: 'MQA & MOHE Approved' },
    { label: 'Global Students', value: '12,000+', desc: 'From 40+ Nationalities' },
    { label: 'Graduate Employability', value: '94%', desc: 'Within 6 Months' },
    { label: 'Partner Universities', value: '25+', desc: 'UK, US & Australia' },
  ]

  const quickActions = [
    {
      title: 'Find a Program',
      desc: 'Browse 35+ accredited diplomas & degrees',
      icon: BookOpen,
      link: '/programs',
      color: 'bg-red-50 text-lincoln border-red-100 hover:border-red-300'
    },
    {
      title: 'Apply Online',
      desc: 'Complete application in under 5 minutes',
      icon: FileText,
      link: '/apply',
      color: 'bg-amber-50 text-amber-700 border-amber-100 hover:border-amber-300'
    },
    {
      title: 'Scholarships & Aid',
      desc: 'Up to 50% merit-based tuition waivers',
      icon: Award,
      link: '/contact',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:border-emerald-300'
    },
    {
      title: 'Talk to Admissions',
      desc: 'Direct consultation via hotline or WhatsApp',
      icon: MessageCircle,
      link: '/contact',
      color: 'bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-300'
    },
  ]

  const faculties = [
    {
      name: 'Faculty of Computer Science & Multimedia',
      short: 'Computer Science & IT',
      courses: 'Software Eng, Cyber Security, IT Diploma',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
      facultyParam: 'Computer Science'
    },
    {
      name: 'Faculty of Business & Accountancy',
      short: 'Business & Management',
      courses: 'BBA (Hons), MBA, Finance & Marketing',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      facultyParam: 'Business'
    },
    {
      name: 'Faculty of Medicine & Health Sciences',
      short: 'Medicine & Nursing',
      courses: 'Bachelor in Nursing, Pharmacy, Health',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      facultyParam: 'Medicine'
    },
    {
      name: 'Faculty of Applied Science & Engineering',
      short: 'Engineering & Technology',
      courses: 'Biomedical Engineering, Technology',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80',
      facultyParam: 'Engineering'
    }
  ]

  const campusFacilities = [
    {
      title: 'Cyber Security & AI Research Lab',
      desc: 'Equipped with dedicated server clusters and SOC monitoring terminals.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'High-Tech Digital Library',
      desc: 'Over 100,000 digital journals, quiet study pods, and collaborative rooms.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Clinical Healthcare Simulation Ward',
      desc: 'Hospital-grade simulation training for nursing and biomedical students.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Student Commons & Global Lounge',
      desc: 'Vibrant social hub for student clubs, hackathons, and cultural festivals.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
    }
  ]

  const testimonials = [
    {
      quote: "The hands-on Software Engineering curriculum gave me the confidence to secure a software engineer role at a leading tech startup in Kuala Lumpur before graduating. The faculty's mentorship made all the difference.",
      name: "Farhan Rahman",
      course: "BSc Software Engineering, Class of 2025",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      company: "Software Engineer at TechGlobal"
    },
    {
      quote: "Lincoln University College offered me a 50% merit scholarship and exposure to multinational students from over 30 countries. The MBA case-study discussions directly enhanced my management perspective.",
      name: "Sarah Amanda Lim",
      course: "Master of Business Administration, Class of 2024",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      company: "Operations Lead at Maybank Group"
    },
    {
      quote: "The hospital clinical rotations in Nursing were comprehensive. Over 1,500 clinical hours helped me pass the Nursing Board exams on my first attempt. Now I'm working in a premier private hospital.",
      name: "Danial Hakimi",
      course: "BSc (Hons) Nursing, Class of 2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      company: "Registered Nurse at Sunway Medical"
    }
  ]

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO SECTION: Cinematic University Banner with Real Photography */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] lg:min-h-[660px] flex items-center">
        {/* Background Image with Deep Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80" 
            alt="Lincoln University College Campus" 
            className="w-full h-full object-cover object-center opacity-25 scale-105 transform hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-red-950/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Lincoln Badge */}
              <div className="inline-flex items-center gap-2 bg-red-900/60 border border-red-500/40 text-red-200 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>2026 Academic Intakes Now Open • MQA & MOHE Accredited</span>
              </div>

              {/* Catchy Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                Empowering Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">Global Excellence</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Experience world-class tertiary education in Malaysia. Join a community of over 12,000 ambitious learners with career-ready diplomas, undergraduate degrees, and executive MBAs.
              </p>

              {/* AI Natural Search Input Trigger */}
              <div className="pt-2 max-w-xl">
                <div 
                  onClick={handleOpenSearch}
                  className="flex items-center gap-3 p-2 sm:p-2.5 bg-white/95 text-slate-900 rounded-2xl shadow-2xl border border-white/20 cursor-pointer hover:border-red-400 hover:shadow-red-900/20 transition-all group"
                >
                  <Search className="w-5 h-5 text-slate-400 group-hover:text-lincoln transition-colors ml-2 shrink-0" />
                  <div className="flex-1 text-xs sm:text-sm text-slate-500">
                    Search 35+ courses or ask AI: <span className="font-semibold text-slate-800">"cheap IT diploma"</span>...
                  </div>
                  <span className="bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> AI Search
                  </span>
                </div>

                <div className="mt-2.5 text-xs text-slate-400 flex items-center gap-2">
                  <span className="text-slate-300 font-semibold">Popular Searches:</span>
                  <Link to="/programs?faculty=Computer+Science" className="hover:text-red-400 underline decoration-slate-600">Software Engineering</Link>
                  <span>•</span>
                  <Link to="/programs?faculty=Business" className="hover:text-red-400 underline decoration-slate-600">MBA</Link>
                  <span>•</span>
                  <Link to="/programs?faculty=Medicine" className="hover:text-red-400 underline decoration-slate-600">Nursing</Link>
                </div>
              </div>

              {/* Hero CTA Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 bg-lincoln hover:bg-lincoln-dark text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-red-950/40 hover:shadow-red-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Browse Programs</span>
                </Link>
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl border border-white/20 backdrop-blur-md transition-all text-sm"
                >
                  <span>Apply Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 to-amber-600 opacity-30 blur-2xl"></div>

                <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400">Lincoln Advantage</span>
                      <h3 className="text-xl font-bold text-white mt-0.5">Why Study at Lincoln?</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center border border-red-500/30">
                      <Award className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>50% Merit Scholarships:</strong> Available for SPM, STPM, and Diploma high achievers.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>100% Accreditation:</strong> Fully certified by MQA, MOHE, and recognized by JPA.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Guaranteed Internships:</strong> Industry placements with top tech, hospital, and business networks.</span>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                      <span>Next Intake Starting In:</span>
                      <span className="text-red-400 font-bold">July 2026 Intake</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-red-600 to-amber-500 h-full w-[72%] rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>Admissions in progress</span>
                      <span>Limited Seats</span>
                    </div>
                  </div>

                  <Link
                    to="/apply"
                    className="block text-center w-full bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3.5 rounded-xl shadow-md text-sm transition-all"
                  >
                    Start Online Admission Now
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK ACCESS CARDS (Inspired by UTM & UM Portals) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, i) => {
            const Icon = action.icon
            return (
              <Link
                key={i}
                to={action.link}
                className={`p-5 rounded-2xl border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 bg-white flex items-center gap-4 group ${action.color}`}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white shadow-xs group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-lincoln transition-colors">
                    {action.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{action.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 3. KEY STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {stats.map((item, idx) => (
              <div key={idx} className="space-y-1.5 pt-4 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-lincoln tracking-tight">{item.value}</div>
                <div className="text-sm font-bold text-slate-900">{item.label}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC FACULTIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-lincoln uppercase tracking-widest">Fields of Study</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Explore Our Key Academic Faculties
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Comprehensive undergraduate and postgraduate programs designed with industry partners.
            </p>
          </div>
          <Link
            to="/programs"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-lincoln hover:underline"
          >
            <span>View All Programs Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculties.map((fac, i) => {
            const Icon = fac.icon
            return (
              <Link
                key={i}
                to={`/programs?faculty=${encodeURIComponent(fac.facultyParam)}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={fac.image} 
                    alt={fac.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold bg-lincoln/90 px-2.5 py-1 rounded-lg backdrop-blur-xs flex items-center gap-1">
                      <Icon className="w-3.5 h-3.5" /> {fac.short}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-lincoln transition-colors line-clamp-2">
                      {fac.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {fac.courses}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-lincoln">
                    <span>Explore Degrees</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 5. FEATURED ACCREDITED PROGRAMS (With Real Images & Details) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-lincoln uppercase tracking-widest">Academics</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Featured Programs</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">Hand-picked industry degrees with highest graduate employment rates.</p>
          </div>
          <Link
            to="/programs"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-lincoln hover:underline"
          >
            <span>All Courses & Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programsData.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {course.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-bold text-lincoln uppercase tracking-wider block">
                    {course.facultyShort || course.faculty}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-lincoln transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Tuition Fee</span>
                      <strong className="text-slate-900 font-bold">{course.tuition}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Intake</span>
                      <strong className="text-lincoln font-bold">{course.intakes.split(',')[0]}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-2">
                <Link
                  to={`/programs/${course.id}`}
                  className="flex-1 text-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors"
                >
                  View Details
                </Link>
                <Link
                  to={`/apply?program=${encodeURIComponent(course.title)}`}
                  className="flex-1 text-center py-2.5 px-4 bg-lincoln hover:bg-lincoln-dark text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AI RECOMMENDER SECTION (Interactive Component) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIRecommender />
      </section>

      {/* 7. MODERN CAMPUS LIFE & FACILITIES GALLERY */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-lincoln uppercase tracking-widest">Campus Experience</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              World-Class Facilities for Real-World Learning
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              From cyber security labs to clinical hospital simulators, Lincoln provides everything you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusFacilities.map((fac, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-lincoln transition-colors">
                    {fac.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STUDENT TESTIMONIALS WITH REAL PORTRAITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-lincoln uppercase tracking-widest">Student Stories</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">What Our Graduates Say</h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">Real graduates sharing how Lincoln accelerated their career trajectories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-red-100 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-lincoln font-semibold">{t.course}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CAMPUS NEWS & EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-lincoln uppercase tracking-widest">Campus Life</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Latest News & Events</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">Stay connected with research symposiums, hackathons, and announcements.</p>
          </div>
          <Link
            to="/contact"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-lincoln hover:underline"
          >
            <span>Campus Visit Schedule</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tag: 'Open Day',
              date: 'April 18, 2026',
              title: 'Lincoln University Annual Open Day & Instant Scholarship Assessment',
              desc: 'Tour high-speed computing labs, meet deans, and get on-the-spot scholarship approvals.',
              image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80'
            },
            {
              tag: 'Innovation',
              date: 'May 05, 2026',
              title: 'National Cyber Security & AI Hackathon 2026 Hosted by Lincoln',
              desc: 'Over RM 20,000 in prizes for university teams building modern AI security solutions.',
              image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80'
            },
            {
              tag: 'Global Degree',
              date: 'May 22, 2026',
              title: 'Dual-Degree MoU Signed with Leading UK & Australian Universities',
              desc: 'Credit transfer opportunities allowing students to complete their final year overseas.',
              image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">{item.date}</span>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-lincoln transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link to="/contact" className="text-xs font-bold text-lincoln hover:text-lincoln-dark inline-flex items-center gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CALL TO ACTION RIBBON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-lincoln via-red-800 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-red-500/20 relative overflow-hidden">
          <div className="space-y-2 max-w-xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Take the First Step</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Ready to begin your academic journey at Lincoln?
            </h2>
            <p className="text-red-100 text-xs sm:text-sm">
              Our academic counselors are ready to guide you through course selection, scholarship options, and admission steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3.5 shrink-0 relative z-10">
            <Link
              to="/apply"
              className="bg-white text-lincoln hover:bg-slate-100 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm hover:scale-105"
            >
              Apply Online Today
            </Link>
            <Link
              to="/contact"
              className="bg-red-950/70 hover:bg-red-900 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm"
            >
              Enquire on WhatsApp
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
