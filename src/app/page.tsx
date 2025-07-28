'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, Users, Sparkles } from 'lucide-react'

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mobile-padding relative overflow-hidden">
      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-blue-50/50 to-indigo-50/50" />
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-blue-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-indigo-200/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gray-200/20 rounded-full blur-xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center w-full max-w-sm sm:max-w-md"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-14 h-14 sm:w-20 sm:h-20 primary-gradient rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
            <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-3 sm:mb-4"
        >
          Fynd
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-xs sm:max-w-md mx-auto leading-relaxed"
        >
          Job search made simple. Swipe your way to your dream career.
        </motion.p>

        {/* User Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mobile-space-y max-w-sm mx-auto"
        >
          <Link href="/signup-jobseeker">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="glass-card mobile-card cursor-pointer group"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 primary-gradient rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Job Seeker</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Find your perfect job match</p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/recruiter/dashboard">
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="glass-card mobile-card cursor-pointer group"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 secondary-gradient rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Recruiter</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Find the perfect candidate</p>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 sm:mt-8"
        >
          <Link href="/signup-jobseeker">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mobile-button-lg glass-button primary-gradient text-white font-semibold shadow-sm w-full sm:w-auto"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
} 