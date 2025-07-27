'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Building, Users, Eye, Edit, Trash2, Filter, Search, Crown } from 'lucide-react'
import Link from 'next/link'
import BottomNavigation from '@/components/RecruiterBottomNavigation'

// Mock recruiter data
const mockRecruiter = {
  name: 'Sarah Johnson',
  company: 'TechCorp',
  position: 'Senior HR Manager',
  avatar: '👩‍💼'
}

// Mock job postings
const mockJobPostings = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    status: 'active',
    postedDate: '2024-01-15',
    applications: 24,
    matches: 8,
    logo: '🏢'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'TechCorp',
    location: 'Remote',
    salary: '$90k - $120k',
    status: 'active',
    postedDate: '2024-01-10',
    applications: 18,
    matches: 5,
    logo: '🚀'
  },
  {
    id: 3,
    title: 'Marketing Manager',
    company: 'TechCorp',
    location: 'New York, NY',
    salary: '$80k - $100k',
    status: 'paused',
    postedDate: '2024-01-05',
    applications: 12,
    matches: 3,
    logo: '📈'
  }
]

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'applications' | 'analytics'>('jobs')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = mockJobPostings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700'
      case 'paused':
        return 'bg-yellow-100 text-yellow-700'
      case 'closed':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pb-20">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gradient">Recruiter Dashboard</h1>
            <p className="text-gray-600">Manage your job postings and candidates</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center text-2xl">
              {mockRecruiter.avatar}
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-800">{mockRecruiter.name}</div>
              <div className="text-sm text-gray-600">{mockRecruiter.position}</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary-600">{mockJobPostings.length}</div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-secondary-600">54</div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-accent-600">16</div>
            <div className="text-sm text-gray-600">Matches</div>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center"
          >
            <Filter className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 mb-6">
        <div className="flex space-x-1 bg-white/20 backdrop-blur-md rounded-2xl p-1">
          {[
            { id: 'jobs', label: 'Job Postings', icon: Building },
            { id: 'applications', label: 'Applications', icon: Users },
            { id: 'analytics', label: 'Analytics', icon: Eye }
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-400 to-accent-400 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="px-6">
        {activeTab === 'jobs' && (
          <div className="space-y-4">
                    {/* Add Job Button */}
        <Link href="/recruiter/post-job">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card p-6 cursor-pointer border-2 border-dashed border-primary-200 hover:border-primary-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Post New Job</h3>
                  <p className="text-sm text-gray-600">Create a new job listing</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">1/1 used</div>
                <div className="text-xs text-gray-400">Free plan limit</div>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Upgrade Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 border-2 border-yellow-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Upgrade Your Plan</h3>
                <p className="text-sm text-gray-600">Post more jobs & access premium features</p>
              </div>
            </div>
            <Link href="/recruiter/subscription">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl text-sm font-medium"
              >
                View Plans
              </motion.button>
            </Link>
          </div>
        </motion.div>

            {/* Job Listings */}
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start space-x-4">
                  {/* Job Logo */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    {job.logo}
                  </div>

                  {/* Job Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                    </div>
                    
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-gray-600">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="text-sm">{job.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="text-sm">📍 {job.location}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">💰 {job.salary}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-primary-500" />
                        <span className="text-gray-600">{job.applications} applications</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-accent-500">❤️</span>
                        <span className="text-gray-600">{job.matches} matches</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-2">
                    <Link href={`/recruiter/jobs/${job.id}/applications`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </motion.button>
                    </Link>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center"
                    >
                      <Edit className="w-5 h-5 text-white" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded-xl flex items-center justify-center"
                    >
                      <Trash2 className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Applications</h3>
            <p className="text-gray-600">View and manage job applications</p>
            <Link href="/recruiter/applications">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button mt-4"
              >
                View All Applications
              </motion.button>
            </Link>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics</h3>
            <p className="text-gray-600">Track your recruitment performance</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button mt-4"
            >
              View Analytics
            </motion.button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="dashboard" />
    </div>
  )
} 