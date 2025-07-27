'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Upload, X, Plus } from 'lucide-react'
import Link from 'next/link'

export default function JobSeekerSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    resume: null as File | null,
    skills: [] as string[]
  })
  const [newSkill, setNewSkill] = useState('')

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }))
      setNewSkill('')
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }))
  }

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
    
    if (!formData.location.trim()) {
      alert('Please enter your location')
      return
    }
    
    if (formData.skills.length === 0) {
      alert('Please add at least one skill')
      return
    }
    
    // Handle form submission
    console.log('Form submitted:', formData)
    
    // Show success message and redirect
    alert('Profile created successfully! Redirecting to dashboard...')
    
    // In a real app, you would save to database here
    // For now, we'll redirect to dashboard
    window.location.href = '/dashboard'
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
          <h1 className="text-2xl font-bold text-gradient">Join as Job Seeker</h1>
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
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
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
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Location Field */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="City, State or Remote"
              required
            />
          </div>

          {/* Resume Upload */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume (PDF)
            </label>
            <div className="border-2 border-dashed border-primary-200 rounded-2xl p-6 text-center hover:border-primary-300 transition-colors">
              <Upload className="w-8 h-8 text-primary-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
              </p>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setFormData(prev => ({ ...prev, resume: file }))
                  }
                }}
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="glass-button text-sm px-4 py-2 cursor-pointer inline-block"
              >
                Choose File
              </label>
            </div>
          </div>

          {/* Skills */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-primary-400 to-accent-400 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.span>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                className="flex-1 px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                placeholder="Add a skill"
              />
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddSkill}
                className="w-10 h-10 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl flex items-center justify-center"
              >
                <Plus className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full glass-button text-lg py-4 mt-8"
          >
            Create Profile
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
} 