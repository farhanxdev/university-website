import React, { useState } from 'react'
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
  Building2,
  Play,
  X,
  Video,
  MapPin
} from 'lucide-react'
import { programsData } from '../data/programsData'
import AIRecommender from '../components/ai/AIRecommender'

export default function HomePage() {
  const outletContext = useOutletContext()
  const handleOpenSearch = outletContext?.onOpenSearch
  const [tourOpen, setTourOpen] = useState(false)

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
      
      {/* 1. HERO SECTION: Futuristic Cinematic University Banner with Aurora Glows & Cyber Grid */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-rose-50/40 to-slate-50 dark:from-[#070A11] dark:via-[#0c1220] dark:to-[#070A11] text-slate-900 dark:text-white min-h-[590px] lg:min-h-[680px] flex items-center transition-colors duration-300">
        {/* Ambient Futuristic Glowing Aurora Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/15 dark:bg-red-600/25 rounded-full blur-[110px] pointer-events-none animate-pulseGlow"></div>
        <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-rose-500/10 dark:bg-amber-500/15 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-cyber opacity-25 dark:opacity-35 pointer-events-none"></div>

        {/* Background Image with Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80" 
            alt="Lincoln University College Campus" 
            className="w-full h-full object-cover object-center opacity-10 dark:opacity-20 scale-105 transform hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-red-100/40 dark:from-[#070A11] dark:via-[#070A11]/90 dark:to-red-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-[#070A11] dark:via-transparent dark:to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Futuristic Cyber Live Badge */}
              <div className="inline-flex items-center gap-2.5 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 dark:text-red-200 border border-slate-200/80 dark:border-red-500/40 shadow-sm dark:shadow-lg dark:shadow-red-950/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-red-600 dark:text-amber-300 font-mono text-[10px] tracking-widest font-bold">SYS_ONLINE</span>
                <span className="text-slate-400 dark:text-slate-500">•</span>
                <span className="tracking-wide text-slate-700 dark:text-white">2026 Academic Intakes Open • MQA & MOHE Accredited</span>
              </div>

              {/* Catchy Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
                Empowering Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 dark:from-red-500 dark:via-rose-400 dark:to-amber-300">Next-Gen Excellence</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Experience world-class tertiary education in Malaysia. Join a community of over 12,000 ambitious learners with career-ready diplomas, undergraduate degrees, and executive MBAs.
              </p>

              {/* AI Natural Search Input Trigger */}
              <div className="pt-2 max-w-xl">
                <div 
                  onClick={handleOpenSearch}
                  className="flex items-center gap-3 p-2 sm:p-2.5 glass-panel text-slate-900 dark:text-white rounded-2xl shadow-xl hover:border-red-500/80 hover:shadow-[0_0_30px_rgba(200,16,46,0.2)] transition-all cursor-pointer group"
                >
                  <Search className="w-5 h-5 text-slate-400 group-hover:text-lincoln transition-colors ml-2 shrink-0" />
                  <div className="flex-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Search 35+ courses or ask AI: <span className="font-semibold text-slate-900 dark:text-slate-200">"cheap IT diploma"</span>...
                  </div>
                  <span className="bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> AI Search
                  </span>
                </div>

                <div className="mt-2.5 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">Popular Searches:</span>
                  <Link to="/programs?faculty=Computer+Science" className="hover:text-red-500 dark:hover:text-red-400 underline decoration-slate-400 dark:decoration-slate-600">Software Engineering</Link>
                  <span>•</span>
                  <Link to="/programs?faculty=Business" className="hover:text-red-500 dark:hover:text-red-400 underline decoration-slate-400 dark:decoration-slate-600">MBA</Link>
                  <span>•</span>
                  <Link to="/programs?faculty=Medicine" className="hover:text-red-500 dark:hover:text-red-400 underline decoration-slate-400 dark:decoration-slate-600">Nursing</Link>
                </div>
              </div>

              {/* Hero CTA Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  to="/programs"
                  className="relative inline-flex items-center gap-2 bg-gradient-to-r from-lincoln via-red-700 to-rose-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-red-950/20 hover:shadow-red-600/40 hover:scale-[1.03] active:scale-[0.98] transition-all text-sm overflow-hidden group"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Browse Programs</span>
                </Link>
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 glass-pill hover:bg-slate-200/70 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm shadow-sm"
                >
                  <span>Apply Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setTourOpen(true)}
                  className="inline-flex items-center gap-2.5 glass-pill hover:bg-slate-200/70 dark:hover:bg-slate-800/80 text-slate-800 dark:text-white font-semibold px-5 py-3.5 rounded-xl transition-all text-sm group shadow-sm hover:border-red-500/50"
                >
                  <span className="w-6 h-6 rounded-full bg-lincoln text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  </span>
                  <span>Watch Campus Tour</span>
                </button>
              </div>

            </div>

            {/* Right Hero Feature Card: Holographic Academic Command */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 opacity-30 dark:opacity-40 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="relative glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        HUD_ACADEMIC_METRICS
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">Why Study at Lincoln?</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-600/20 text-red-600 dark:text-red-400 flex items-center justify-center border border-red-200 dark:border-red-500/30 shadow-xs">
                      <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/50 backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>50% Merit Scholarships:</strong> Available for SPM, STPM, and Diploma high achievers.</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/50 backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>100% Accreditation:</strong> Fully certified by MQA, MOHE, and recognized by JPA.</span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/50 backdrop-blur-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Guaranteed Internships:</strong> Industry placements with top tech, hospital, and corporate networks.</span>
                    </div>
                  </div>

                  <div className="bg-white/70 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-700/80 space-y-2 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">INTAKE_STATUS:</span>
                      <span className="text-red-600 dark:text-red-400 font-bold">July 2026 Intake</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden p-0.5">
                      <div className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 h-full w-[78%] rounded-full animate-pulseSlow"></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>78% Capacity Filled</span>
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">Limited Seats Available</span>
                    </div>
                  </div>

                  <Link
                    to="/apply"
                    className="block text-center w-full bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-red-950/30 text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Start Online Admission Now
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK ACCESS CARDS: Floating Glassmorphic Pods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, i) => {
            const Icon = action.icon
            return (
              <Link
                key={i}
                to={action.link}
                className="p-5 rounded-3xl glass-card hover:shadow-2xl hover:shadow-red-500/15 hover:-translate-y-2 hover:border-red-400/60 dark:hover:border-red-500/50 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-red-50 dark:bg-red-950/60 text-lincoln border border-red-100 dark:border-red-900/50 shadow-xs group-hover:scale-110 group-hover:bg-lincoln group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-lincoln transition-colors">
                    {action.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{action.desc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 3. KEY STATS STRIP: Futuristic Telemetry Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 glass-panel shadow-xl">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70 dark:divide-slate-800">
            {stats.map((item, idx) => (
              <div key={idx} className="space-y-1.5 pt-4 sm:pt-0 group">
                <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                  SYS_METRIC_0{idx + 1}
                </span>
                <div className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lincoln via-red-600 to-rose-500 tracking-tight group-hover:scale-105 transition-transform duration-200">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{item.label}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC FACULTIES SHOWCASE: Modern Glass Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-lincoln uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-0.5 bg-lincoln rounded-full"></span>
              Fields of Study
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Explore Our Key Academic Faculties
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Comprehensive undergraduate and postgraduate programs designed with global industry partners.
            </p>
          </div>
          <Link
            to="/programs"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-lincoln hover:text-red-500 transition-colors"
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
                className="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/15 hover:border-red-400/60 dark:hover:border-red-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={fac.image} 
                    alt={fac.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold bg-lincoln/90 px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 shadow-sm">
                      <Icon className="w-3.5 h-3.5" /> {fac.short}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-lincoln transition-colors line-clamp-2">
                      {fac.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {fac.courses}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-lincoln">
                    <span>Explore Degrees</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 5. FEATURED ACCREDITED PROGRAMS: Futuristic Glassmorphic Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-lincoln uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-0.5 bg-lincoln rounded-full"></span>
              Academics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Featured Programs</h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">Hand-picked industry degrees with highest graduate employment rates.</p>
          </div>
          <Link
            to="/programs"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-lincoln hover:text-red-500 transition-colors"
          >
            <span>All Courses & Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programsData.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/15 hover:border-red-400/60 dark:hover:border-red-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md border border-white/10">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-lincoln text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {course.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-bold text-lincoln uppercase tracking-wider block">
                    {course.facultyShort || course.faculty}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-lincoln transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {course.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 block text-[10px]">Tuition Fee</span>
                      <strong className="text-slate-900 dark:text-white font-bold">{course.tuition}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 block text-[10px]">Intake</span>
                      <strong className="text-lincoln font-bold">{course.intakes.split(',')[0]}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-2.5">
                <Link
                  to={`/programs/${course.id}`}
                  className="flex-1 text-center py-2.5 px-4 bg-slate-100/90 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition-colors"
                >
                  View Details
                </Link>
                <Link
                  to={`/apply?program=${encodeURIComponent(course.title)}`}
                  className="flex-1 text-center py-2.5 px-4 bg-lincoln hover:bg-lincoln-dark text-white font-bold text-xs rounded-xl shadow-md shadow-red-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
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
      <section className="bg-slate-100/70 dark:bg-slate-900/40 py-16 border-y border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-lincoln dark:text-red-400 uppercase tracking-widest bg-red-100 dark:bg-red-950/50 px-3 py-1 rounded-full border border-red-200 dark:border-red-900/50">
              Campus Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
              World-Class Facilities for Real-World Learning
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
              From cyber security labs to clinical hospital simulators, Lincoln provides everything you need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusFacilities.map((fac, i) => (
              <div 
                key={i} 
                className="glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:border-red-400/60 dark:hover:border-red-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-4 space-y-1.5">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-lincoln dark:group-hover:text-red-400 transition-colors">
                    {fac.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
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
          <span className="text-xs font-mono font-bold text-lincoln dark:text-red-400 uppercase tracking-widest bg-red-100 dark:bg-red-950/50 px-3 py-1 rounded-full border border-red-200 dark:border-red-900/50">
            Student Stories
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">What Our Graduates Say</h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">Real graduates sharing how Lincoln accelerated their career trajectories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 sm:p-8 rounded-3xl hover:shadow-xl hover:border-red-400/60 dark:hover:border-red-500/40 transition-all flex flex-col justify-between space-y-6 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-red-500/40 shrink-0"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-[11px] text-lincoln dark:text-red-400 font-semibold">{t.course}</p>
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
            <span className="text-xs font-mono font-bold text-lincoln dark:text-red-400 uppercase tracking-widest bg-red-100 dark:bg-red-950/50 px-3 py-1 rounded-full border border-red-200 dark:border-red-900/50">
              Campus Life
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">Latest News & Events</h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">Stay connected with research symposiums, hackathons, and announcements.</p>
          </div>
          <Link
            to="/contact"
            className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-lincoln dark:text-red-400 hover:underline"
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
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl hover:border-red-400/60 dark:hover:border-red-500/40 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 block mb-1">{item.date}</span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug group-hover:text-lincoln dark:group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Link to="/contact" className="text-xs font-bold text-lincoln dark:text-red-400 hover:text-lincoln-dark inline-flex items-center gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CALL TO ACTION RIBBON - FUTURISTIC AURORA MESH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-lincoln via-red-900 to-[#070A11] rounded-3xl p-8 sm:p-14 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-red-500/40 shadow-[0_0_50px_rgba(200,16,46,0.25)]">
          {/* Cyber Grid & Glowing Orbs */}
          <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-red-500/30 rounded-full blur-[90px] pointer-events-none animate-pulseGlow"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="space-y-3 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 bg-slate-950/70 border border-amber-400/40 text-amber-300 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>SYS_ADMISSIONS // INTAKE 2026</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              Ready to begin your academic journey at Lincoln?
            </h2>
            <p className="text-red-100/90 text-xs sm:text-sm leading-relaxed">
              Our academic counselors are ready to guide you through course selection, scholarship options, and admission steps.
            </p>
          </div>

          <div className="flex flex-wrap gap-3.5 shrink-0 relative z-10">
            <Link
              to="/apply"
              className="bg-white text-lincoln hover:bg-slate-100 font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all text-sm hover:scale-105 active:scale-95 glow-red-sm"
            >
              Apply Online Today
            </Link>
            <Link
              to="/contact"
              className="bg-slate-950/80 hover:bg-slate-900 border border-white/20 hover:border-red-400/50 text-white font-bold px-7 py-4 rounded-xl transition-all text-sm backdrop-blur-md"
            >
              Enquire on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* 11. VIRTUAL CAMPUS TOUR MODAL */}
      {tourOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setTourOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center border border-red-500/30">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">Lincoln Virtual Campus Tour</h3>
                    <span className="px-2 py-0.5 rounded-full bg-red-600/30 border border-red-500/40 text-[11px] font-bold text-red-400">
                      360° Experience
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>Main Campus: Wisma Lincoln, Petaling Jaya, Selangor, Malaysia</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setTourOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close Tour Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Area */}
            <div className="relative aspect-video w-full bg-black overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=0&rel=0&modestbranding=1"
                title="Lincoln University College Virtual Tour Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Facility Highlights & Footer Action */}
            <div className="p-6 overflow-y-auto space-y-5 bg-slate-900/95">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Featured On-Campus Facilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Academic Towers</div>
                      <div className="text-[11px] text-slate-400">Modern lecture halls & smart auditoriums</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Clinical Skills Labs</div>
                      <div className="text-[11px] text-slate-400">Hospital simulation & nursing wards</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <Laptop className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">AI & Computing Suites</div>
                      <div className="text-[11px] text-slate-400">High-spec labs & cybersecurity hub</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">Digital Library</div>
                      <div className="text-[11px] text-slate-400">24/7 online journals & study pods</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-400 text-center sm:text-left">
                  Want to see the campus in person? Walk-ins and guided tours are welcome every weekday 9am - 5pm.
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    to="/contact"
                    onClick={() => setTourOpen(false)}
                    className="flex-1 sm:flex-initial text-center px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors"
                  >
                    Book Campus Visit
                  </Link>
                  <Link
                    to="/apply"
                    onClick={() => setTourOpen(false)}
                    className="flex-1 sm:flex-initial text-center px-5 py-2.5 rounded-xl bg-lincoln hover:bg-lincoln-dark text-white text-xs font-bold transition-all shadow-md"
                  >
                    Apply Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
