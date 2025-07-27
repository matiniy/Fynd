'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, Mail, MapPin, FileText, Settings, LogOut } from 'lucide-react'
import BottomNavigation from '@/components/BottomNavigation'

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    location: 'San Francisco, CA',
    skills: ['React', 'TypeScript', 'UI/UX Design', 'Product Management'],
    appliedJobs: 12,
    matches: 3
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pb-20">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gradient text-center">Profile</h1>
      </div>

      {/* Profile Card */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6"
        >
          {/* Avatar */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">Job Seeker</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">{user.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">{user.location}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{user.appliedJobs}</div>
              <div className="text-sm text-gray-600">Jobs Applied</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600">{user.matches}</div>
              <div className="text-sm text-gray-600">Matches</div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 cursor-pointer hover:bg-white/30 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">Resume</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 cursor-pointer hover:bg-white/30 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <Settings className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">Settings</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-4 cursor-pointer hover:bg-white/30 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <LogOut className="w-5 h-5 text-red-500" />
            <span className="text-red-500">Sign Out</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="profile" />
    </div>
  )
} 