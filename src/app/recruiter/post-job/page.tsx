'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Plus, X } from 'lucide-react'
import Link from 'next/link'

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    tags: [] as string[]
  })
  const [newTag, setNewTag] = useState('')

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.title.trim()) {
      alert('Please enter a job title')
      return
    }
    
    if (!formData.company.trim()) {
      alert('Please enter a company name')
      return
    }
    
    if (!formData.location.trim()) {
      alert('Please enter a location')
      return
    }
    
    if (!formData.salary.trim()) {
      alert('Please enter a salary range')
      return
    }
    
    if (!formData.description.trim()) {
      alert('Please enter a job description')
      return
    }
    
    if (formData.tags.length === 0) {
      alert('Please add at least one skill or tag')
      return
    }
    
    // Handle form submission
    console.log('Job posted:', formData)
    
    // Show success message
    alert('Job posted successfully! Your job is now live for job seekers to discover.')
    
    // In a real app, you would save to database here
    // For now, we'll redirect back to the form
    window.location.reload()
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
          <Link href="/recruiter">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-4"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </motion.button>
          </Link>
          <h1 className="text-2xl font-bold text-gradient">Post a Job</h1>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Job Title */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="e.g., Senior Product Designer"
              required
            />
          </div>

          {/* Company */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="Enter company name"
              required
            />
          </div>

          {/* Location */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="e.g., San Francisco, CA or Remote"
              required
            />
          </div>

          {/* Salary */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salary Range
            </label>
            <input
              type="text"
              value={formData.salary}
              onChange={(e) => setFormData(prev => ({ ...prev, salary: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
              placeholder="e.g., $80k - $120k"
              required
            />
          </div>

          {/* Description */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent resize-none"
              rows={4}
              placeholder="Describe the role, responsibilities, and requirements..."
              required
            />
          </div>

          {/* Tags */}
          <div className="glass-card p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills & Tags
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-secondary-400 to-secondary-600 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                >
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
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
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                className="flex-1 px-4 py-2 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:border-transparent"
                placeholder="Add a skill or tag"
              />
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddTag}
                className="w-10 h-10 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center"
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
            className="w-full glass-button text-lg py-4 mt-8 bg-gradient-to-r from-secondary-400 to-secondary-600"
          >
            Post Job
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
} 