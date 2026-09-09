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
import AdminDashboard from './pages/AdminDashboard'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="programs/:id" element={<ProgramDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
