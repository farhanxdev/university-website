import React, { useState, useEffect } from 'react'
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
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { programsData } from '../data/programsData'
import AIRecommender from '../components/ai/AIRecommender'

export default function HomePage() {
  const outletContext = useOutletContext()
  const handleOpenSearch = outletContext?.onOpenSearch
  const [tourOpen, setTourOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroBanners = [
    {
      title: 'QS World University Rankings 2026',
      badge: '#638 World • #196 Asia',
      desc: '#47 in South-Eastern Asia | Ministry of Higher Education Malaysia 5-Star SETARA',
      image: '/images/lincoln/qs-banner.jpg',
      tag: 'Global Ranking'
    },
    {
      title: 'Times Higher Education Impact Rankings 2025',
      badge: 'Ranked 401–600 Globally',
      desc: 'Recognized worldwide for research impact and UN Sustainable Development Goals',
      image: '/images/lincoln/the-banner.jpg',
      tag: 'Global Impact'
    },
    {
      title: 'Bachelor’s Degree Programs',
      badge: 'Ignite Potential • Create Your Future',
      desc: 'Industry-integrated undergraduate degrees in IT, Medicine, Pharmacy, Business & Engineering',
      image: '/images/lincoln/banner-bachelors.jpg',
      tag: 'Undergraduate'
    },
    {
      title: 'Master’s Degree Opportunities',
      badge: 'Advance Knowledge • Empower Leadership',
      desc: 'Top-tier MBA, MSc, and specialized postgraduate programs with flexible modes',
      image: '/images/lincoln/banner-masters.jpg',
      tag: 'Postgraduate'
    },
    {
      title: 'Embark on Your PhD Research Journey',
      badge: 'Pursue Excellence • Achieve Global Impact',
      desc: 'Doctorate programs supervised by internationally acclaimed professors and researchers',
      image: '/images/lincoln/banner-phd.jpg',
      tag: 'Doctorate'
    },
    {
      title: 'Professional Diploma Pathways',
      badge: 'Gain Skills • Build Your Career',
      desc: 'Hands-on practical diplomas with industry certifications and fast-track degree entry',
      image: '/images/lincoln/banner-diploma.jpg',
      tag: 'Diploma'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroBanners.length])

  const stats = [
    { label: 'QS World Ranking', value: '#638', desc: 'World University Rankings 2026' },
    { label: 'QS Asia Ranking', value: '#196', desc: '#47 in South-Eastern Asia' },
    { label: 'THE Impact Rankings', value: '401-600', desc: 'Times Higher Education 2025' },
    { label: 'SETARA Rating', value: '5-Star', desc: 'Ministry of Higher Education' },
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
      desc: 'Lincoln Online Admission Application',
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
      desc: 'Direct consultation: +603-7806 3478',
      icon: MessageCircle,
      link: '/contact',
      color: 'bg-blue-50 text-blue-700 border-blue-100 hover:border-blue-300'
    },
  ]

  const faculties = [
    {
      name: 'School of AI Computing & Multimedia',
      short: 'AI Computing & IT',
      courses: 'Software Engineering, AI, Cyber Security, Data Science',
      icon: Laptop,
      image: '/images/lincoln/faculty-ai.webp',
      facultyParam: 'Computer Science'
    },
    {
      name: 'School of Medicine',
      short: 'Medicine & Healthcare',
      courses: 'Doctor of Medicine (MD), Medical Sciences, Pre-Med',
      icon: Stethoscope,
      image: '/images/lincoln/faculty-medicine.webp',
      facultyParam: 'Medicine'
    },
    {
      name: 'School of Dentistry',
      short: 'Dentistry & Surgery',
      courses: 'Doctor of Dental Surgery (DDS), Dental Surgery Assistant',
      icon: Award,
      image: '/images/lincoln/faculty-dentistry.webp',
      facultyParam: 'Medicine'
    },
    {
      name: 'School of Pharmacy',
      short: 'Pharmacy',
      courses: 'Bachelor of Pharmacy (Hons), Pharmaceutical Technology',
      icon: Stethoscope,
      image: '/images/lincoln/faculty-pharmacy.webp',
      facultyParam: 'Medicine'
    },
    {
      name: 'School of Health & Applied Science',
      short: 'Nursing & Allied Health',
      courses: 'BSc (Hons) Nursing, Physiotherapy, Medical Imaging',
      icon: Stethoscope,
      image: '/images/lincoln/faculty-nursing.jpg',
      facultyParam: 'Medicine'
    },
    {
      name: 'School of Business & Management',
      short: 'Business & Management',
      courses: 'BBA (Hons), MBA, International Business, HR',
      icon: Briefcase,
      image: '/images/lincoln/faculty-business.webp',
      facultyParam: 'Business'
    },
    {
      name: 'School of Accounting & Finance',
      short: 'Accounting & Finance',
      courses: 'Bachelor of Accounting, Banking & Finance, ACCA',
      icon: Briefcase,
      image: '/images/lincoln/faculty-accounting.webp',
      facultyParam: 'Business'
    },
    {
      name: 'School of Engineering & Built Environment',
      short: 'Engineering & Built Env.',
      courses: 'Mechanical, Civil, Electrical & Biomedical Engineering',
      icon: Building2,
      image: '/images/lincoln/faculty-engineering.jpg',
      facultyParam: 'Engineering'
    },
    {
      name: 'School of Hospitality & Tourism',
      short: 'Hospitality & Tourism',
      courses: 'Hotel Management, Culinary Arts, Tourism Operations',
      icon: Globe2,
      image: '/images/lincoln/faculty-hospitality.webp',
      facultyParam: 'Business'
    },
    {
      name: 'School of Education',
      short: 'Education & Pedagogy',
      courses: 'Early Childhood Education, TESL, Education Leadership',
      icon: BookOpen,
      image: '/images/lincoln/faculty-education.jpg',
      facultyParam: 'Business'
    },
    {
      name: 'School of Social Sciences, Arts & Humanities',
      short: 'Social Sciences & Arts',
      courses: 'Psychology, Mass Communication, English Literature',
      icon: Users,
      image: '/images/lincoln/faculty-socialscience.webp',
      facultyParam: 'Business'
    },
    {
      name: 'School of Performing Arts and Design (SPAD)',
      short: 'Arts & Design (SPAD)',
      courses: 'Fashion Design, Graphic Design, Digital Media Arts',
      icon: Sparkles,
      image: '/images/lincoln/faculty-spad.jpg',
      facultyParam: 'Computer Science'
    },
    {
      name: 'Centre of Foundation Studies',
      short: 'Foundation Studies',
      courses: 'Foundation in Science, Foundation in Arts',
      icon: BookOpen,
      image: '/images/lincoln/faculty-foundation.jpg',
      facultyParam: 'Computer Science'
    },
    {
      name: 'Centre of Open & Distance Learning (ODL)',
      short: 'Online & Distance Learning',
      courses: 'Flexible online undergraduate & postgraduate degrees',
      icon: Globe2,
      image: '/images/lincoln/faculty-odl.webp',
      facultyParam: 'Computer Science'
    }
  ]

  const recognitionBadges = [
    { name: 'SETARA 5-Star', img: '/images/lincoln/setara.webp', desc: 'MoHE Malaysia Top Rating' },
    { name: 'ISO 9001:2015', img: '/images/lincoln/iso.webp', desc: 'Certified Academic Quality' },
    { name: 'QS World Ranking', img: '/images/lincoln/qs-rank.png', desc: '#638 in World 2026' },
    { name: 'THE Impact Rankings', img: '/images/lincoln/the-rank.jpg', desc: 'Ranked 401-600 Globally' },
    { name: 'Student Mobility', img: '/images/lincoln/student-mobility.webp', desc: 'Global Student Exchange' },
  ]

  const campusFacilities = [
    {
      title: 'Poliklinik Lincoln Healthcare Centre',
      desc: 'On-campus outpatient clinic providing medical services to students, staff, and the local Petaling Jaya community.',
      image: '/images/lincoln/campus-life-2.webp'
    },
    {
      title: 'Pusat Pergigian Lincoln (Dental Clinic)',
      desc: 'Specialized dental clinic outfitted with advanced diagnostic and clinical treatment operatories.',
      image: '/images/lincoln/faculty-dentistry.webp'
    },
    {
      title: 'Lincoln AI & High-Tech Computing Lab',
      desc: 'Equipped with dedicated cloud clusters, GPU nodes, and specialized cyber security test environments.',
      image: '/images/lincoln/campus-life-3.webp'
    },
    {
      title: 'Student Commons & Global Mobility Hub',
      desc: 'Multicultural hub supporting students from 40+ countries with collaborative study pods and academic advisory.',
      image: '/images/lincoln/campus-life-1.webp'
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

            {/* Right Hero Feature Column: Official Lincoln Campaign Banner & Metrics */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 opacity-30 dark:opacity-40 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>

                <div className="relative glass-panel rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4">
                  
                  {/* Official Lincoln Banner Carousel Slide */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800 bg-slate-950 aspect-[16/11]">
                    <img 
                      src={heroBanners[currentSlide].image} 
                      alt={heroBanners[currentSlide].title}
                      className="w-full h-full object-cover object-center transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                    
                    {/* Top slide category tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-red-600/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider backdrop-blur-sm shadow-sm">
                        {heroBanners[currentSlide].tag}
                      </span>
                    </div>

                    {/* Slide Navigation Arrows */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <button 
                        type="button"
                        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length)}
                        className="w-7 h-7 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                        aria-label="Previous Banner"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        type="button"
                        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroBanners.length)}
                        className="w-7 h-7 rounded-full bg-black/70 hover:bg-red-600 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                        aria-label="Next Banner"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom caption overlay */}
                    <div className="absolute bottom-3 inset-x-3 text-white space-y-0.5">
                      <span className="text-[11px] font-bold text-amber-300 tracking-wide block">
                        {heroBanners[currentSlide].badge}
                      </span>
                      <h4 className="font-extrabold text-sm sm:text-base leading-snug line-clamp-1">
                        {heroBanners[currentSlide].title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1">
                        {heroBanners[currentSlide].desc}
                      </p>
                    </div>
                  </div>

                  {/* Banner Indicator Dots */}
                  <div className="flex justify-center items-center gap-1.5">
                    {heroBanners.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentSlide === idx ? 'w-6 bg-red-600' : 'w-2 bg-slate-300 dark:bg-slate-700'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/50 backdrop-blur-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span><strong>50% Merit Scholarships:</strong> For SPM, STPM & Diplomas.</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/50 backdrop-blur-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span><strong>100% Accredited:</strong> Ministry of Higher Education & MQA.</span>
                    </div>
                  </div>

                  <Link
                    to="/apply"
                    className="block text-center w-full bg-gradient-to-r from-lincoln to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 rounded-xl shadow-lg shadow-red-950/30 text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
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

      {/* 3.5 OFFICIAL ACCREDITATIONS & GLOBAL RECOGNITIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-lincoln uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-0.5 bg-lincoln rounded-full"></span>
                Official Accreditations & Recognitions
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Globally Acclaimed Academic Excellence
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Lincoln University College holds premier institutional accreditations and membership in international academic bodies across the UK, Europe, and Asia.
            </p>
          </div>

          {/* Primary Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {recognitionBadges.map((badge, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 flex flex-col items-center text-center justify-between gap-2.5 shadow-sm hover:scale-105 transition-transform duration-200"
              >
                <div className="h-16 flex items-center justify-center">
                  <img 
                    src={badge.img} 
                    alt={badge.name} 
                    className="max-h-14 max-w-[120px] object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">{badge.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Recognitions Row */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3 text-center sm:text-left">
              International Partner Universities & Professional Bodies
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 opacity-80 hover:opacity-100 transition-opacity">
              {['r1.jpg', 'r2.jpg', 'r4.jpg', 'r6.jpg', 'r7.jpg', 'r8.jpg', 'r9.jpg', 'r14.jpg', 'r15.jpg', 'r17.jpg'].map((img, i) => (
                <div key={i} className="bg-white p-2 rounded-xl shadow-xs border border-slate-100 dark:border-slate-800">
                  <img 
                    src={`/images/lincoln/${img}`} 
                    alt={`Partner ${i + 1}`} 
                    className="h-9 w-auto max-w-[85px] object-contain"
                  />
                </div>
              ))}
            </div>
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
              tag: 'QS Rankings',
              date: 'Latest Ranking Release',
              title: 'Lincoln Achieves #638 in QS World Rankings & #196 in Asia',
              desc: 'Official recognition highlighting rapid advancement in academic peer reputation and international faculty ratio.',
              image: '/images/lincoln/qs-badge.jpg'
            },
            {
              tag: 'Global Mobility',
              date: 'Academic Year 2026',
              title: 'Student Mobility Program: Expand Horizons Across 40+ Partner Institutions',
              desc: 'Global exchange initiatives offering semester abroad credit transfers to UK, Australia, and European institutions.',
              image: '/images/lincoln/student-mobility.webp'
            },
            {
              tag: 'THE Impact',
              date: 'THE Rankings 2025',
              title: 'LUC Ranked 401–600 in Times Higher Education Global Impact Rankings',
              desc: 'Recognizing research output aligning directly with UN Sustainable Development Goals (SDGs).',
              image: '/images/lincoln/the-rank.jpg'
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
