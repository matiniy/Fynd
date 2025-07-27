'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Eye, CheckCircle, XCircle, Download, MessageCircle, Filter, Search, Building, MapPin, DollarSign, Users } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Mock job data
const mockJob = {
  id: 1,
  title: 'Senior Product Designer',
  company: 'TechCorp',
  location: 'San Francisco, CA',
  salary: '$120k - $150k',
  description: 'We are looking for a talented Product Designer to join our team and help create amazing user experiences.',
  tags: ['UI/UX', 'Figma', 'Product Design', 'User Research'],
  postedDate: '2024-01-15',
  applications: 24,
  matches: 8,
  logo: '🏢'
}

// Mock applications for this specific job
const mockJobApplications = [
  {
    id: 1,
    candidateName: 'Alex Chen',
    candidateEmail: 'alex.chen@email.com',
    candidateLocation: 'San Francisco, CA',
    candidateSkills: ['UI/UX', 'Figma', 'Product Design', 'Prototyping'],
    appliedDate: '2024-01-15',
    status: 'reviewing',
    matchScore: 95,
    avatar: '👨‍💻',
    resume: 'Alex_Chen_Resume.pdf',
    experience: '5 years',
    portfolio: 'alexchen.design'
  },
  {
    id: 2,
    candidateName: 'Sarah Williams',
    candidateEmail: 'sarah.williams@email.com',
    candidateLocation: 'New York, NY',
    candidateSkills: ['UI/UX', 'Sketch', 'User Research', 'Design Systems'],
    appliedDate: '2024-01-14',
    status: 'accepted',
    matchScore: 88,
    avatar: '👩‍🎨',
    resume: 'Sarah_Williams_Resume.pdf',
    experience: '4 years',
    portfolio: 'sarahwilliams.com'
  },
  {
    id: 3,
    candidateName: 'Mike Johnson',
    candidateEmail: 'mike.johnson@email.com',
    candidateLocation: 'Austin, TX',
    candidateSkills: ['UI/UX', 'Adobe XD', 'Prototyping', 'User Testing'],
    appliedDate: '2024-01-13',
    status: 'rejected',
    matchScore: 72,
    avatar: '👨‍💼',
    resume: 'Mike_Johnson_Resume.pdf',
    experience: '3 years',
    portfolio: 'mikejohnson.design'
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

export default function JobApplicationsPage() {
  const params = useParams()
  const jobId = params.jobId
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredApplications = mockJobApplications.filter(app => {
    const matchesSearch = app.candidateName.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-2xl font-bold text-gradient">Job Applications</h1>
            <p className="text-gray-600">Review candidates for this position</p>
          </div>
        </div>

        {/* Job Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
              {mockJob.logo}
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{mockJob.title}</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="text-sm">{mockJob.company}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{mockJob.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  <span className="text-sm">{mockJob.salary}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <span className="text-primary-500">📝</span>
                  <span className="text-gray-600">{mockJob.applications} applications</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-accent-500">❤️</span>
                  <span className="text-gray-600">{mockJob.matches} matches</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
                    <span className="font-medium">Location:</span> {application.candidateLocation}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Experience:</span> {application.experience}
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

                {/* Portfolio Link */}
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Portfolio:</span> 
                  <a href={`https://${application.portfolio}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 ml-1">
                    {application.portfolio}
                  </a>
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

      {/* Empty State */}
      {filteredApplications.length === 0 && (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-4"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Applications Found</h3>
            <p className="text-gray-600">No candidates match your current filters</p>
          </div>
        </div>
      )}
    </div>
  )
} 