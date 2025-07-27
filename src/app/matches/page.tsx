'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, DollarSign, Building, CheckCircle, Clock, XCircle, Heart } from 'lucide-react'
import BottomNavigation from '@/components/BottomNavigation'

// Mock matches data
const mockMatches = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    appliedDate: '2024-01-15',
    status: 'applied',
    logo: '🏢'
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    salary: '$90k - $120k',
    appliedDate: '2024-01-14',
    status: 'reviewing',
    logo: '🚀'
  },
  {
    id: 3,
    title: 'Marketing Manager',
    company: 'GrowthCo',
    location: 'New York, NY',
    salary: '$80k - $100k',
    appliedDate: '2024-01-13',
    status: 'accepted',
    logo: '📈'
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'DataLab',
    location: 'Austin, TX',
    salary: '$110k - $140k',
    appliedDate: '2024-01-12',
    status: 'rejected',
    logo: '📊'
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'applied':
      return <Clock className="w-5 h-5 text-yellow-500" />
    case 'reviewing':
      return <Clock className="w-5 h-5 text-blue-500" />
    case 'accepted':
      return <CheckCircle className="w-5 h-5 text-green-500" />
    case 'rejected':
      return <XCircle className="w-5 h-5 text-red-500" />
    default:
      return <Clock className="w-5 h-5 text-gray-500" />
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'applied':
      return 'Applied'
    case 'reviewing':
      return 'Under Review'
    case 'accepted':
      return 'Accepted'
    case 'rejected':
      return 'Not Selected'
    default:
      return 'Unknown'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'applied':
      return 'bg-yellow-100 text-yellow-700'
    case 'reviewing':
      return 'bg-blue-100 text-blue-700'
    case 'accepted':
      return 'bg-green-100 text-green-700'
    case 'rejected':
      return 'bg-red-100 text-red-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

export default function MatchesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pb-20">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gradient text-center">Your Matches</h1>
        <p className="text-gray-600 text-center mt-2">Track your job applications</p>
      </div>

      {/* Matches List */}
      <div className="px-6 space-y-4">
        {mockMatches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-start space-x-4">
              {/* Company Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
                {match.logo}
              </div>

              {/* Job Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{match.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building className="w-4 h-4 mr-1" />
                  <span className="text-sm">{match.company}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{match.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span className="text-sm">{match.salary}</span>
                </div>
                
                {/* Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(match.status)}
                    <span className={`text-sm px-2 py-1 rounded-full ${getStatusColor(match.status)}`}>
                      {getStatusText(match.status)}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    Applied {new Date(match.appliedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {mockMatches.length === 0 && (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-4"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Matches Yet</h3>
            <p className="text-gray-600">Start swiping to find your dream job!</p>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="matches" />
    </div>
  )
} 