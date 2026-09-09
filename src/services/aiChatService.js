import { programsData } from '../data/programsData'

// Knowledge base for Lincoln AI Assistant
export function getAIResponse(userMessage) {
  const query = userMessage.toLowerCase().trim()

  // 1. Fee inquiries
  if (query.includes('fee') || query.includes('cost') || query.includes('price') || query.includes('cheap') || query.includes('affordable') || query.includes('tuition')) {
    return {
      text: "Tuition fees at Lincoln University College are highly competitive and MQA-approved! Here are sample fee ranges:",
      courses: programsData.slice(0, 3).map(p => ({ title: p.title, fee: p.tuition, id: p.id })),
      suggestion: "We also offer up to 50% merit scholarships and flexible installment plans. Would you like to know how to apply for scholarships?"
    }
  }

  // 2. IT & Computer Science inquiries
  if (query.includes('it') || query.includes('computer') || query.includes('software') || query.includes('coding') || query.includes('cyber') || query.includes('tech')) {
    const itCourses = programsData.filter(p => p.faculty === 'Computer Science')
    return {
      text: "Our Faculty of Computer Science & Multimedia offers modern, industry-aligned programs:",
      courses: itCourses.map(p => ({ title: p.title, fee: p.tuition, id: p.id })),
      suggestion: "Graduates have a 94% employability rate with tech firms across Malaysia and Singapore."
    }
  }

  // 3. Business & Management inquiries
  if (query.includes('business') || query.includes('mba') || query.includes('management') || query.includes('marketing') || query.includes('admin')) {
    const bizCourses = programsData.filter(p => p.faculty === 'Business')
    return {
      text: "Here are the programs offered by our Faculty of Business & Accountancy:",
      courses: bizCourses.map(p => ({ title: p.title, fee: p.tuition, id: p.id })),
      suggestion: "Our MBA program offers weekend and evening classes suited for working executives."
    }
  }

  // 4. Healthcare & Engineering inquiries
  if (query.includes('health') || query.includes('medical') || query.includes('nurs') || query.includes('bio') || query.includes('engineer')) {
    const healthEng = programsData.filter(p => p.faculty === 'Engineering' || p.faculty === 'Medicine')
    return {
      text: "Here are our accredited healthcare and engineering programs:",
      courses: healthEng.map(p => ({ title: p.title, fee: p.tuition, id: p.id })),
      suggestion: "Nursing students complete over 1,500 clinical hours in partner hospitals."
    }
  }

  // 5. Application and Admission steps
  if (query.includes('apply') || query.includes('admission') || query.includes('enroll') || query.includes('requirement') || query.includes('entry') || query.includes('register')) {
    return {
      text: "Applying to Lincoln is fast and easy online! Here is how to apply:",
      steps: [
        "1. Browse our course catalog and choose your program.",
        "2. Click 'Apply Now' and fill in your personal and academic details.",
        "3. Submit your application (takes under 3 minutes).",
        "4. An admissions counselor will verify your documents within 48 hours."
      ],
      link: "/apply",
      linkText: "Go to Online Application Form"
    }
  }

  // 6. Scholarship & Financial Aid
  if (query.includes('scholarship') || query.includes('discount') || query.includes('ptptn') || query.includes('financial') || query.includes('loan')) {
    return {
      text: "Lincoln University College offers several financial aid packages:",
      steps: [
        "• Merit Scholarships: Up to 50% tuition reduction for top SPM/STPM/A-Level achievers.",
        "• PTPTN Government Loans: Available for all eligible Malaysian students.",
        "• Early Bird Rebates: RM 1,000 fee waiver for early semester registrations.",
        "• Sibling Discounts: 10% waiver for enrolled family members."
      ],
      suggestion: "Speak to an admissions counselor on the Contact page to check your scholarship eligibility!"
    }
  }

  // 7. Intakes & Semesters
  if (query.includes('intake') || query.includes('start') || query.includes('date') || query.includes('when')) {
    return {
      text: "Our main intakes for the 2026 academic year are in March, July, and October. Some diploma courses also offer January and May intakes.",
      suggestion: "Would you like to start your application for the upcoming intake?"
    }
  }

  // 8. Contact & Location
  if (query.includes('contact') || query.includes('where') || query.includes('location') || query.includes('address') || query.includes('phone') || query.includes('call')) {
    return {
      text: "Our Main Campus is located at Wisma Lincoln, Petaling Jaya, Selangor, Malaysia.",
      steps: [
        "📍 Address: No. 12-18, Jalan SS 6/12, 47301 Petaling Jaya",
        "📞 Toll-Free: 1300 880 111 | Hotline: +60 3-7806 3478",
        "✉️ Email: info@lincoln.edu.my"
      ],
      link: "/contact",
      linkText: "View Campus Map & Contact Form"
    }
  }

  // Default fallback
  return {
    text: "I am here to help you with information about Lincoln University College courses, admission requirements, tuition fees, scholarships, and campus facilities.",
    suggestion: "Try asking questions like: 'What IT courses do you have?', 'How much are the tuition fees?', or 'How can I apply?'"
  }
}
