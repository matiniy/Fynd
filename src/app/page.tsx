'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Building, ArrowRight } from 'lucide-react'
import { useAuth } from './contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      // Redirect authenticated users to their appropriate dashboard
      if (user.userType === 'recruiter') {
        router.push('/recruiter/dashboard')
      } else {
        router.push('/dashboard')
      }
    }
  }, [user, loading, router])

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Loading...
          </h2>
          <p className="mobile-text-sm text-gray-600">
            Please wait while we check your account
          </p>
        </motion.div>
      </div>
    )
  }

  // If user is authenticated, don't render the welcome page
  if (user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center mobile-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-center"
      >
        {/* Logo and Title */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 sm:w-24 sm:h-24 primary-gradient rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <span className="text-3xl sm:text-4xl">🎯</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient"
        >
          Welcome to Fynd
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl mb-8 mobile-text-base text-gray-600"
        >
          The Tinder-style job search platform that makes finding your dream job as easy as swiping right.
        </motion.p>

        {/* User Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
            I am a...
          </h2>
          
          <div className="space-y-4">
            <Link href="/signup?type=jobseeker">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mobile-card glass-card p-6 sm:p-8 border-2 border-transparent hover:border-blue-500/50 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 primary-gradient rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">
                        Job Seeker
                      </h3>
                      <p className="mobile-text-sm text-gray-600">
                        Find your dream job with smart matching
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                </div>
              </motion.div>
            </Link>
            
            <Link href="/signup?type=recruiter">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mobile-card glass-card p-6 sm:p-8 border-2 border-transparent hover:border-blue-500/50 transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 primary-gradient rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">
                        Recruiter
                      </h3>
                      <p className="mobile-text-sm text-gray-600">
                        Post jobs and find top talent
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Sign In Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="mobile-text-base text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Sign in here
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
} 