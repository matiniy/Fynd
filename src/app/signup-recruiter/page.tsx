'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Building } from 'lucide-react'
import Link from 'next/link'

export default function RecruiterSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim()) {
      alert('Please enter your full name')
      return
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email address')
      return
    }
    
    if (!formData.company.trim()) {
      alert('Please enter your company name')
      return
    }
    
    if (!formData.position.trim()) {
      alert('Please enter your position')
      return
    }
    
    // Handle form submission
    console.log('Form submitted:', formData)
    
    // Show success message and redirect
    alert('Recruiter account created successfully! Redirecting to job posting...')
    
    // In a real app, you would save to database here
    // For now, we'll redirect to job posting
    window.location.href = '/recruiter/post-job'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-4"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </motion.button>
          </Link>
          <h1 className="text-2xl font-bold text-gradient">Join as Recruiter</h1>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Field */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Company Field */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
                placeholder="Enter company name"
                required
              />
            </div>
          </div>

          {/* Position Field */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Position
            </label>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="e.g., HR Manager, Recruiter"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full glass-button text-lg py-4 mt-8 bg-gradient-to-r from-secondary-400 to-secondary-600"
          >
            Create Recruiter Account
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
} 