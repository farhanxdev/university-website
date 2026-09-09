import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ProgramDetailPage from './pages/ProgramDetailPage'
import ContactPage from './pages/ContactPage'
import ApplyPage from './pages/ApplyPage'
import LoginPage from './pages/LoginPage'
import StudentPortalPage from './pages/StudentPortalPage'
import AdminDashboard from './pages/AdminDashboard'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      {/* 1. Public University Website (Uses MainLayout with Public Header, Footer, and AI Chatbot) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="programs/:id" element={<ProgramDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* 2. Isolated Student Portal (Standalone student workspace) */}
      <Route path="/student" element={<StudentPortalPage />} />

      {/* 3. Isolated Admin CMS Portal (Standalone staff administration workspace) */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}
