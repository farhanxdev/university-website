# 🎓 University Website Design & Management System
## 📌 Internship Project Plan & Specification

---

### 1. Project Overview
* **Project Name:** Lincoln University College Website & Student Portal
* **Type:** University Website & Management System (Internship Project)
* **Target Audience:** Prospective students, current students, faculty, and administrators.
* **Core Objectives:**
  - Provide an intuitive, visually modern, and responsive website (mobile, tablet, desktop).
  - Enable prospective students to discover courses, check requirements, and apply easily.
  - Implement realistic, beginner-friendly AI features (Smart Search, Chatbot, Course Recommender, FAQ Assistant).
  - Deploy a live, production-ready website with clean, maintainable code.

---

### 2. Tech Stack & Tools

| Category | Technology | Description / Role |
| :--- | :--- | :--- |
| **Frontend Framework** | **React.js + Vite** | Fast, lightweight build tool and modern component-driven UI library. |
| **Styling** | **Tailwind CSS** | Utility-first CSS framework for responsive layout, spacing, and styling. |
| **Icons** | **Lucide React** | Clean, lightweight SVG icon set (`Search`, `BookOpen`, `MessageSquare`, etc.). |
| **Routing** | **React Router DOM (v6)** | Multi-page client-side routing (`/`, `/about`, `/programs`, `/contact`, etc.). |
| **State Management** | **React Hooks (`useState`, `useEffect`, `useContext`)** | Local state and lightweight global context (no unnecessary complex libraries). |
| **Theme & Colors** | **Lincoln Red UI** | Primary Red (`#C8102E` / `red-700`), White / Neutral Gray (`#F9FAFB`), Slate typography. |
| **AI Integration** | **Local Keyword Logic / OpenAI API** | Realistic query matching, rule-based/API conversational helper. |
| **Deployment** | **Vercel / Netlify** | Continuous deployment connected directly to GitHub repository. |

---

### 3. Project Directory Structure (`src/`)

```text
university_website_design/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── project_plan.md
├── public/
│   ├── favicon.ico
│   └── images/                       # Campus photos, badges, hero imagery
└── src/
    ├── assets/                       # Static assets and brand logos
    ├── components/                   # Modular, reusable UI components
    │   ├── common/                   # Shared across multiple pages
    │   │   ├── Navbar.jsx            # Sticky navigation with mobile menu drawer
    │   │   ├── Footer.jsx            # Multi-column footer with social & portal links
    │   │   ├── Button.jsx            # Consistent primary/secondary button styles
    │   │   ├── Badge.jsx             # Course level tags (Diploma, Degree, Masters)
    │   │   └── SkeletonCard.jsx      # Placeholder loader state for cards
    │   ├── home/                     # Components exclusive to Homepage
    │   │   ├── HeroSection.jsx       # Large hero with call-to-actions (CTAs)
    │   │   ├── QuickStats.jsx        # Key university statistics (rankings, students)
    │   │   ├── FeaturedPrograms.jsx  # Grid of popular courses
    │   │   ├── AboutPreview.jsx      # Short university introduction snippet
    │   │   ├── NewsEvents.jsx        # Upcoming campus events and news carousel
    │   │   └── Testimonials.jsx      # Student and alumni quotes
    │   ├── programs/                 # Components for course catalog & details
    │   │   ├── ProgramCard.jsx       # Course card with title, duration, fee, details CTA
    │   │   ├── ProgramFilter.jsx     # Filter by Faculty, Study Level, and Fee range
    │   │   └── ProgramSearch.jsx     # Live search bar with instant autocomplete
    │   └── ai/                       # AI-powered features
    │       ├── AIChatbot.jsx         # Floating chat assistant widget
    │       ├── AISmartSearch.jsx     # Natural language course finder modal
    │       └── AIRecommender.jsx     # 3-step course recommendation quiz
    ├── layouts/
    │   └── MainLayout.jsx            # Layout wrapper (Navbar + Main Content + Chatbot + Footer)
    ├── pages/                        # Page-level route views
    │   ├── HomePage.jsx              # Landing page
    │   ├── AboutPage.jsx             # Overview, Mission & Vision, Faculty leadership
    │   ├── ProgramsPage.jsx          # Filterable program directory
    │   ├── ProgramDetailPage.jsx     # Detailed program syllabus, requirements & Apply
    │   ├── ContactPage.jsx           # Contact form, campus location, FAQ section
    │   ├── ApplyPage.jsx             # Student program admission application form
    │   ├── LoginPage.jsx             # Student & staff portal login
    │   ├── AdminDashboard.jsx        # Simple CMS panel to review submitted applications
    │   └── NotFoundPage.jsx          # Custom 404 error page
    ├── data/                         # Centralized mock datasets
    │   ├── programsData.js           # Full list of university degrees & diplomas
    │   ├── faqData.js                # Common FAQs for the contact page and chatbot
    │   ├── newsData.js               # Campus announcements & events
    │   └── facultyData.js            # Key faculty members & leadership profiles
    ├── services/                     # Business logic and AI helpers
    │   ├── aiChatbotService.js       # Answers queries based on dataset keywords / API
    │   └── aiSearchService.js        # Natural language query parser (e.g. "budget IT course")
    ├── hooks/
    │   └── useDebounce.js            # Performance optimization for search typing
    ├── utils/
    │   └── helpers.js                # Currency (RM/USD) and date formatting helpers
    ├── App.jsx                       # Routing setup (Routes & Route definitions)
    ├── main.jsx                      # Application entry point
    └── index.css                     # Tailwind CSS directives & global font styles
```

---

### 4. Page Specifications & Requirements

#### 1. Home Page (`/`)
* **Hero Banner:** Compelling headline, background campus media, search trigger, and "Explore Programs" / "Apply Now" CTAs.
* **Quick Stats:** Rankings, student count, faculties, and international accreditations.
* **Featured Programs:** 3–6 top degree offerings with direct links.
* **About Snippet:** Brief summary of Lincoln University College with "Read More" button.
* **News & Events:** Latest campus news updates and upcoming open days.
* **Student Testimonials:** Carousel or grid of student reviews and achievements.
* **Footer:** Quick navigation, faculty links, social icons, accreditation badges, and copyright.

#### 2. About Us Page (`/about`)
* **Overview:** History, heritage, and values of the university.
* **Mission & Vision:** Clear statements outlining academic excellence and innovation.
* **Leadership & Faculty:** Profile cards for Vice-Chancellor, Deans, and professors.
* **Campus Gallery:** Responsive photo grid showing labs, library, campus facilities, and student life.

#### 3. Programs List Page (`/programs`)
* **Filter System:**
  - By Faculty (Faculty of Computer Science & IT, Business, Engineering, Medicine, etc.)
  - By Study Level (Diploma, Bachelor's Degree, Master's, PhD)
* **Search & Sorting:** Keyword search input + Sort by tuition fee or duration.
* **Program Cards:** Displays name, faculty badge, duration, estimated tuition, and "View Details" link.
* **Empty State:** Friendly fallback when search/filter returns zero results.

#### 4. Program Details Page (`/programs/:id`)
* **Header:** Program title, degree award, study mode (Full-time/Part-time), and duration.
* **Overview:** Comprehensive syllabus breakdown and course objectives.
* **Entry Requirements:** Academic qualifications needed for domestic and international students.
* **Career Opportunities:** Potential career paths upon graduation.
* **Fees & Intake Dates:** Clear fee schedule and upcoming semester start dates.
* **Direct Call to Action:** "Apply for this Program" button leading directly to the application form with pre-filled program name.

#### 5. Contact Us Page (`/contact`)
* **Contact Form:** Name, email, phone, program of interest, and message inquiry.
* **Campus Location:** Address, contact numbers, email, and Google Maps embed.
* **Interactive FAQ Accordion:** Expandable/collapsible common admission questions with category tabs.

#### 6. Student Portal & Management (Bonus / Extension)
* **Student Login (`/login`):** Clean authentication modal/page for students.
* **Application Form (`/apply`):** Multi-step or clean single-page admission form saving submissions to browser storage (`localStorage`).
* **Admin Application Viewer (`/admin`):** Simple CMS view to inspect and approve/review incoming applications.

---

### 5. AI Features Specification (Realistic & Beginner-Friendly)

1. **AI Smart Search (`AISmartSearch.jsx`):**
   - Natural language query understanding (e.g., typing *"affordable IT diploma"* or *"computer programming"* matches Bachelor of Information Technology).
   - Instant live search with highlighted keywords and relevance badges.

2. **AI Interactive Chatbot (`AIChatbot.jsx`):**
   - Floating widget at bottom-right corner of every page.
   - Handles common student questions:
     - *"What courses are available in IT?"*
     - *"How much are the tuition fees?"*
     - *"How do I apply for international admission?"*
   - Includes quick-reply chips for one-click prompts.

3. **Program Recommender System (`AIRecommender.jsx`):**
   - Interactive 3-question guidance tool:
     1. What subject excites you most? (Technology, Business, Health, Creative)
     2. What is your current qualification level? (High School / SPM / Diploma / Degree)
     3. What is your preferred study duration?
   - Outputs top 3 personalized course matches with direct links.

4. **AI FAQ Auto-Suggestor (`faqData.js` + `ContactPage.jsx`):**
   - Dynamically suggests relevant answers as the user types an inquiry into the contact form.

---

### 6. UI/UX Design System Guidelines

* **Color Palette:**
  - **Primary Brand:** Deep Red (`#C8102E` / Lincoln Red)
  - **Primary Hover:** Dark Red (`#A00D24`)
  - **Backgrounds:** Pure White (`#FFFFFF`) and Neutral Cool Slate (`#F8FAFC` / `#F1F5F9`)
  - **Text:** Dark Slate (`#0F172A` for headers, `#334155` for body text)
  - **Accents:** Gold/Amber (`#D97706`) for badges and ranking highlights.
* **Typography:** Modern clean sans-serif (`Inter` or `Poppins`).
* **Components:** Soft rounded corners (`rounded-xl`), subtle shadows (`shadow-sm`, `shadow-md`), and smooth hover micro-interactions (`transition-all duration-200`).
* **Responsiveness:** Mobile-first approach with full support for 375px (mobile), 768px (tablet), and 1280px+ (desktop).

---

### 7. 4-Week Implementation Gantt Chart

```
Timeline:
Week 1: [████████░░░░░░░░░░░░░░░░░░░░] Foundation & Layout Setup
Week 2: [██████████████░░░░░░░░░░░░░░] Core Pages & Routing
Week 3: [████████████████████░░░░░░░░] Programs Catalog & Interactive Features
Week 4: [████████████████████████████] AI Integration, Testing & Deployment
```

#### 🟢 Week 1: Project Setup & Foundation
* [x] Review project requirements & create specification (`project_plan.md`).
* [ ] Initialize project with React.js (Vite) + Tailwind CSS.
* [ ] Configure custom color theme (Lincoln Red) and typography in `tailwind.config.js`.
* [ ] Build global layout components: `Navbar` (with responsive mobile menu) and `Footer`.
* [ ] Set up React Router navigation skeleton.

#### 🟡 Week 2: Core Static & Information Pages
* [ ] Develop **Home Page** (Hero section, statistics, featured courses, events preview, testimonials).
* [ ] Develop **About Us Page** (Overview, leadership, mission & vision, campus photo gallery).
* [ ] Develop **Contact Us Page** (Inquiry form with validation, contact details, Google Maps embed).
* [ ] Create custom **404 Not Found Page**.

#### 🟠 Week 3: Programs Catalog & Data Integration
* [ ] Create mock data in `programsData.js` with comprehensive degree and diploma listings.
* [ ] Develop **Programs List Page** with live category filters and search.
* [ ] Develop dynamic **Program Details Page** (`/programs/:id`) with curriculum and fee schedule.
* [ ] Implement student **Application Form** with feedback confirmation modal.
* [ ] Polish UI with smooth transitions, card shadow hover effects, and skeleton loaders.

#### 🔴 Week 4: AI Features, Optimization & Final Deployment
* [ ] Implement **AI Smart Search** with keyword matching.
* [ ] Implement floating **AI Chatbot** with quick prompts and intelligent rule matching.
* [ ] Implement **AI Program Recommender** widget.
* [ ] Mobile responsiveness audit and cross-browser testing.
* [ ] Deploy project to **Vercel / Netlify**.
* [ ] Finalize `README.md` documentation and prepare presentation demo.

---

### 8. Grading Rubric Alignment (100 Marks)

| Category | Max Marks | Target Deliverables in this Plan |
| :--- | :---: | :--- |
| **🎨 UI/UX Design** | **30** | Consistent Lincoln Red theme, clean typography, cards with shadows, 100% mobile/tablet responsiveness. |
| **🧩 Functionality** | **20** | All 5+ required pages implemented, working routing, functional contact & application forms. |
| **💻 Code Quality** | **20** | Modular `src/` folder structure, reusable components, clear variable naming, fast Vite performance. |
| **🤖 AI Features** | **20** | AI Smart Search (8 marks), AI Chatbot (6 marks), Recommendation System (6 marks). |
| **🚀 Deployment & Delivery** | **10** | Live deployed URL (5 marks), comprehensive README & setup guide (3 marks), presentation demo clarity (2 marks). |
| **Total** | **100** | **Goal: 85+ (Excellent Distinction)** |

---

### 9. Deliverables Checklist
- [ ] **GitHub Repository:** Clean commit history with descriptive commit messages.
- [ ] **Live Deployment:** Production URL on Vercel or Netlify.
- [ ] **Project Documentation (`README.md`):** Features list, tech stack, and step-by-step local setup instructions.
- [ ] **Presentation Slide Deck:** Covering project goals, architecture, live demo, challenges, and future enhancements.
