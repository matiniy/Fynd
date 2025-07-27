'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Eye, CheckCircle, XCircle, Download, MessageCircle, Filter, Search } from 'lucide-react'
import Link from 'next/link'
import BottomNavigation from '@/components/RecruiterBottomNavigation'

// Mock applications data
const mockApplications = [
  {
    id: 1,
    jobTitle: 'Senior Product Designer',
    candidateName: 'Alex Chen',
    candidateEmail: 'alex.chen@email.com',
    candidateLocation: 'San Francisco, CA',
    candidateSkills: ['UI/UX', 'Figma', 'Product Design', 'Prototyping'],
    appliedDate: '2024-01-15',
    status: 'reviewing',
    matchScore: 95,
    avatar: '👨‍💻',
    resume: 'Alex_Chen_Resume.pdf'
  },
  {
    id: 2,
    jobTitle: 'Senior Product Designer',
    candidateName: 'Sarah Williams',
    candidateEmail: 'sarah.williams@email.com',
    candidateLocation: 'New York, NY',
    candidateSkills: ['UI/UX', 'Sketch', 'User Research', 'Design Systems'],
    appliedDate: '2024-01-14',
    status: 'accepted',
    matchScore: 88,
    avatar: '👩‍🎨',
    resume: 'Sarah_Williams_Resume.pdf'
  },
  {
    id: 3,
    jobTitle: 'Full Stack Developer',
    candidateName: 'Mike Johnson',
    candidateEmail: 'mike.johnson@email.com',
    candidateLocation: 'Austin, TX',
    candidateSkills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    appliedDate: '2024-01-13',
    status: 'rejected',
    matchScore: 72,
    avatar: '👨‍💼',
    resume: 'Mike_Johnson_Resume.pdf'
  },
  {
    id: 4,
    jobTitle: 'Full Stack Developer',
    candidateName: 'Emily Davis',
    candidateEmail: 'emily.davis@email.com',
    candidateLocation: 'Remote',
    candidateSkills: ['React', 'Python', 'Django', 'PostgreSQL'],
    appliedDate: '2024-01-12',
    status: 'reviewing',
    matchScore: 91,
    avatar: '👩‍💻',
    resume: 'Emily_Davis_Resume.pdf'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'reviewing':
      return 'bg-blue-100 text-blue-700'
    case 'accepted':
      return 'bg-green-100 text-green-700'
    case 'rejected':
      return 'bg-red-100 text-red-700'
    case 'interviewing':
      return 'bg-purple-100 text-purple-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'reviewing':
      return <Eye className="w-4 h-4" />
    case 'accepted':
      return <CheckCircle className="w-4 h-4" />
    case 'rejected':
      return <XCircle className="w-4 h-4" />
    case 'interviewing':
      return <MessageCircle className="w-4 h-4" />
    default:
      return <Eye className="w-4 h-4" />
  }
}

export default function ApplicationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = app.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = (applicationId: number, newStatus: string) => {
    // In a real app, this would update the database
    console.log(`Application ${applicationId} status changed to ${newStatus}`)
  }

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
            <h1 className="text-2xl font-bold text-gradient">Applications</h1>
            <p className="text-gray-600">Review and manage candidate applications</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary-600">{mockApplications.length}</div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-secondary-600">
              {mockApplications.filter(app => app.status === 'reviewing').length}
            </div>
            <div className="text-sm text-gray-600">Pending Review</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-accent-600">
              {mockApplications.filter(app => app.status === 'accepted').length}
            </div>
            <div className="text-sm text-gray-600">Accepted</div>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search candidates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="reviewing">Reviewing</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            <option value="interviewing">Interviewing</option>
          </select>
        </div>
      </div>

      {/* Applications List */}
      <div className="px-6 space-y-4">
        {filteredApplications.map((application, index) => (
          <motion.div
            key={application.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-start space-x-4">
              {/* Candidate Avatar */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                {application.avatar}
              </div>

              {/* Application Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{application.candidateName}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(application.status)}`}>
                      {getStatusIcon(application.status)}
                      <span>{application.status}</span>
                    </span>
                    <div className="text-sm text-gray-500">
                      {application.matchScore}% match
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Job:</span> {application.jobTitle}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Location:</span> {application.candidateLocation}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Applied:</span> {new Date(application.appliedDate).toLocaleDateString()}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {application.candidateSkills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col space-y-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl flex items-center justify-center"
                  title="View Profile"
                >
                  <Eye className="w-5 h-5 text-white" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center"
                  title="Download Resume"
                >
                  <Download className="w-5 h-5 text-white" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-r from-accent-400 to-accent-600 rounded-xl flex items-center justify-center"
                  title="Send Message"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end space-x-3 mt-4 pt-4 border-t border-gray-200">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStatusChange(application.id, 'rejected')}
                className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-medium"
              >
                Reject
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStatusChange(application.id, 'interviewing')}
                className="px-4 py-2 bg-purple-500 text-white rounded-xl text-sm font-medium"
              >
                Interview
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStatusChange(application.id, 'accepted')}
                className="px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-medium"
              >
                Accept
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="applications" />
    </div>
  )
} 