// Role-Based Access and Admissions Storage Management
// Manages authentication sessions, student applications, and credential generation

export const ADMIN_CREDENTIALS = {
  email: 'admin@lincoln.edu.my',
  password: 'admin123',
  name: 'Lincoln Admissions Registrar',
  role: 'admin'
}

const STORAGE_KEYS = {
  AUTH: 'luc_auth',
  APPLICATIONS: 'luc_applications'
}

// Initial default seed applications if localStorage is empty
const SEED_APPLICATIONS = [
  {
    refId: 'LUC-APP-849201',
    studentId: 'LUC20268491',
    password: 'LUC#pass2026',
    credentialsIssued: true,
    fullName: 'Ahmad Faiz bin Rosli',
    email: 'faiz.rosli@gmail.com',
    phone: '+60 17-293 8472',
    citizenship: 'Malaysian',
    program: 'Bachelor of Computer Science (Software Engineering) (Hons)',
    faculty: 'Faculty of Computer Science & Multimedia',
    qualification: 'STPM / A-Levels',
    intake: 'July 2026',
    status: 'Approved',
    admissionStage: 3, // 1: Submitted, 2: Under Review, 3: Credentials & Offer Issued, 4: Deposit Paid, 5: Enrolled
    depositPaid: false,
    scholarship: '50% President Merit Scholarship',
    submittedAt: '2026-09-08T10:30:00.000Z',
    approvedAt: '2026-09-09T09:15:00.000Z',
    comments: 'Achieved 3.85 CGPA in STPM. Fast-track admission recommended.'
  },
  {
    refId: 'LUC-APP-419024',
    studentId: null,
    password: null,
    credentialsIssued: false,
    fullName: 'Zhang Wei',
    email: 'zhangwei.sg@outlook.com',
    phone: '+65 9123 4567',
    citizenship: 'International',
    program: 'Bachelor of Business Administration (Hons)',
    faculty: 'Faculty of Business & Accounting',
    qualification: 'Recognized Diploma',
    intake: 'March 2026',
    status: 'Pending Review',
    admissionStage: 1,
    depositPaid: false,
    scholarship: '35% High Achiever Award',
    submittedAt: '2026-09-09T08:15:00.000Z',
    comments: 'International transfer student with Diploma in Business Management.'
  },
  {
    refId: 'LUC-APP-938102',
    studentId: null,
    password: null,
    credentialsIssued: false,
    fullName: 'Nurul Huda binti Zamri',
    email: 'huda.zamri@yahoo.com',
    phone: '+60 19-338 1290',
    citizenship: 'Malaysian',
    program: 'Diploma in Information Technology',
    faculty: 'Faculty of Computer Science & Multimedia',
    qualification: 'SPM / O-Levels',
    intake: 'July 2026',
    status: 'Pending Review',
    admissionStage: 1,
    depositPaid: false,
    scholarship: '25% Academic Excellence',
    submittedAt: '2026-09-09T11:45:00.000Z',
    comments: 'SPM 7As. Applying for IT Diploma with hostel accommodation.'
  }
]

// 1. Authentication helpers
export function getActiveAuth() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.AUTH)
    return raw ? JSON.parse(raw) : null
  } catch (err) {
    console.error('Error reading auth:', err)
    return null
  }
}

export function setActiveAuth(authData) {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(authData))
  } catch (err) {
    console.error('Error saving auth:', err)
  }
}

export function clearActiveAuth() {
  localStorage.removeItem(STORAGE_KEYS.AUTH)
}

// 2. Applications helpers
export function getApplications() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.APPLICATIONS)
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(SEED_APPLICATIONS))
      return SEED_APPLICATIONS
    }
    return JSON.parse(raw)
  } catch (err) {
    console.error('Error reading applications:', err)
    return SEED_APPLICATIONS
  }
}

export function saveApplications(apps) {
  try {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(apps))
  } catch (err) {
    console.error('Error saving applications:', err)
  }
}

export function findApplicationByRef(refId) {
  const apps = getApplications()
  return apps.find(a => a.refId === refId) || null
}

export function findApplicationByStudentId(studentId) {
  const apps = getApplications()
  return apps.find(a => a.studentId === studentId) || null
}

export function findApplicationByEmail(email) {
  const apps = getApplications()
  return apps.find(a => a.email.toLowerCase() === email.trim().toLowerCase()) || null
}

// 3. New Application Submission (from ApplyPage)
export function submitNewApplication(formData) {
  const apps = getApplications()
  const randomNum = Math.floor(100000 + Math.random() * 900000)
  const refId = `LUC-APP-${randomNum}`

  const newApp = {
    refId,
    studentId: null,
    password: null,
    credentialsIssued: false,
    fullName: formData.fullName.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim(),
    citizenship: formData.citizenship || 'Malaysian',
    program: formData.program,
    faculty: formData.faculty || 'Faculty of Computer Science & Multimedia',
    qualification: formData.qualification || 'SPM / O-Levels',
    intake: formData.intake || 'July 2026',
    status: 'Pending Review',
    admissionStage: 1, // 1: Submitted, 2: Verified, 3: Credentials Issued, 4: Deposit Paid, 5: Enrolled
    depositPaid: false,
    scholarship: '50% President Merit Scholarship',
    submittedAt: new Date().toISOString(),
    comments: formData.comments || ''
  }

  apps.unshift(newApp)
  saveApplications(apps)
  return newApp
}

// 4. Admin Generates Student ID and Credentials
export function issueStudentCredentials(refId, { studentId, password, email, scholarship }) {
  const apps = getApplications()
  const index = apps.findIndex(a => a.refId === refId)

  if (index === -1) {
    return { success: false, error: 'Application not found' }
  }

  const updatedApp = {
    ...apps[index],
    studentId: studentId.trim().toUpperCase(),
    password: password.trim(),
    email: email ? email.trim().toLowerCase() : apps[index].email,
    scholarship: scholarship || apps[index].scholarship,
    credentialsIssued: true,
    status: 'Approved',
    admissionStage: 3, // Credentials & Offer Issued
    approvedAt: new Date().toISOString()
  }

  apps[index] = updatedApp
  saveApplications(apps)

  return { success: true, application: updatedApp }
}

// 5. Update Application Status (Approve, Pending, Reject)
export function updateApplicationStatus(refId, newStatus) {
  const apps = getApplications()
  const index = apps.findIndex(a => a.refId === refId)
  if (index === -1) return false

  apps[index].status = newStatus
  if (newStatus === 'Approved' && apps[index].admissionStage < 2) {
    apps[index].admissionStage = 2
  } else if (newStatus === 'Rejected') {
    apps[index].admissionStage = 0
  }

  saveApplications(apps)
  return apps[index]
}

// 6. Student Payment of Deposit (Step 4)
export function recordDepositPayment(refId) {
  const apps = getApplications()
  const index = apps.findIndex(a => a.refId === refId)
  if (index === -1) return false

  apps[index].depositPaid = true
  apps[index].admissionStage = 4 // Deposit Paid & Seat Confirmed
  apps[index].paidAt = new Date().toISOString()
  apps[index].paymentReceiptNo = `LUC-REC-${Math.floor(100000 + Math.random() * 900000)}`

  saveApplications(apps)
  return apps[index]
}

// 7. Verify Login (Role-based authentication)
export function authenticateUser(role, inputEmail, inputPassword) {
  const cleanEmail = inputEmail.trim().toLowerCase()
  const cleanPass = inputPassword.trim()

  // Admin login check
  if (role === 'admin') {
    if (cleanEmail === ADMIN_CREDENTIALS.email.toLowerCase() && cleanPass === ADMIN_CREDENTIALS.password) {
      const auth = {
        role: 'admin',
        email: ADMIN_CREDENTIALS.email,
        name: ADMIN_CREDENTIALS.name,
        loggedInAt: new Date().toISOString()
      }
      setActiveAuth(auth)
      return { success: true, auth }
    }
    return { success: false, error: 'Invalid admin email or password.' }
  }

  // Student login check
  if (role === 'student') {
    const apps = getApplications()
    
    // Check if email or studentId matches
    const student = apps.find(a => 
      (a.email.toLowerCase() === cleanEmail || (a.studentId && a.studentId.toLowerCase() === cleanEmail))
    )

    if (!student) {
      return { 
        success: false, 
        error: 'No admission record found for this email/Student ID. Have you applied online yet?' 
      }
    }

    if (!student.credentialsIssued) {
      return {
        success: false,
        error: `Your application (${student.refId}) is currently '${student.status}'. Your Student ID and password will be generated by the Admissions Office once approved.`
      }
    }

    if (student.password !== cleanPass) {
      return { 
        success: false, 
        error: 'Incorrect password. Please use the password issued by the Admissions Office.' 
      }
    }

    // Success student login
    const auth = {
      role: 'student',
      email: student.email,
      studentId: student.studentId,
      fullName: student.fullName,
      refId: student.refId,
      program: student.program,
      loggedInAt: new Date().toISOString()
    }
    setActiveAuth(auth)
    return { success: true, auth }
  }

  return { success: false, error: 'Invalid login role specified.' }
}
