'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, Users, Sparkles } from 'lucide-react'

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-secondary-100/30 to-accent-100/30 animate-pulse" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-200/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-200/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-secondary-200/20 rounded-full blur-xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gradient mb-4"
        >
          Fynd
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl text-gray-600 mb-12 max-w-md mx-auto"
        >
          Job search made simple. Swipe your way to your dream career.
        </motion.p>

        {/* User Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-4 max-w-sm mx-auto"
        >
          <Link href="/signup-jobseeker">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800">Job Seeker</h3>
                  <p className="text-sm text-gray-600">Find your perfect job match</p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/recruiter/dashboard">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 cursor-pointer group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-800">Recruiter</h3>
                  <p className="text-sm text-gray-600">Find the perfect candidate</p>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-8"
        >
          <Link href="/signup-jobseeker">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-button text-lg px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-lg"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
} 