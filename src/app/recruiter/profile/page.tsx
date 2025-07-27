'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Crown, Settings, CreditCard, Bell, Shield, HelpCircle, LogOut, Building, Users, Eye } from 'lucide-react'
import Link from 'next/link'

// Mock recruiter data
const mockRecruiter = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@techcorp.com',
  company: 'TechCorp',
  position: 'Senior HR Manager',
  avatar: '👩‍💼',
  currentPlan: 'free',
  joinDate: '2024-01-15',
  jobsPosted: 1,
  totalApplications: 24,
  matches: 8,
  hires: 3
}

const menuItems = [
  {
    id: 'subscription',
    label: 'Subscription & Billing',
    icon: Crown,
    href: '/recruiter/subscription',
    description: 'Manage your plan and billing'
  },
  {
    id: 'settings',
    label: 'Account Settings',
    icon: Settings,
    href: '/recruiter/settings',
    description: 'Update your profile and preferences'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    href: '/recruiter/notifications',
    description: 'Manage your notification preferences'
  },
  {
    id: 'security',
    label: 'Security & Privacy',
    icon: Shield,
    href: '/recruiter/security',
    description: 'Manage your account security'
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: HelpCircle,
    href: '/recruiter/help',
    description: 'Get help and contact support'
  }
]

export default function RecruiterProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pb-20">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/recruiter/dashboard">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-4"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </motion.button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gradient">Profile</h1>
            <p className="text-gray-600">Manage your account and settings</p>
          </div>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl flex items-center justify-center text-3xl">
              {mockRecruiter.avatar}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{mockRecruiter.name}</h2>
              <p className="text-gray-600 mb-2">{mockRecruiter.position} at {mockRecruiter.company}</p>
              <p className="text-sm text-gray-500">{mockRecruiter.email}</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-3 py-1">
                  <Crown className="w-3 h-3 text-white" />
                  <span className="text-xs font-medium text-white uppercase">{mockRecruiter.currentPlan}</span>
                </div>
                <span className="text-xs text-gray-500">Member since {new Date(mockRecruiter.joinDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary-600">{mockRecruiter.jobsPosted}</div>
            <div className="text-sm text-gray-600">Jobs Posted</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-secondary-600">{mockRecruiter.totalApplications}</div>
            <div className="text-sm text-gray-600">Applications</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-accent-600">{mockRecruiter.hires}</div>
            <div className="text-sm text-gray-600">Hires</div>
          </motion.div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <Link key={item.id} href={item.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 cursor-pointer hover:bg-white/30 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.label}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          )
        })}
      </div>

      {/* Logout Button */}
      <div className="px-6 mt-8">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full glass-card p-6 cursor-pointer hover:bg-red-50/50 transition-colors border border-red-200"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-xl flex items-center justify-center">
              <LogOut className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-red-600">Sign Out</h3>
              <p className="text-sm text-gray-600">Log out of your account</p>
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  )
} 