'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Building, Briefcase, Check } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type UserType = 'jobseeker' | 'recruiter'

export default function SignupPage() {
  const [userType, setUserType] = useState<UserType>('jobseeker')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    if (!agreedToTerms) {
      setError('Please agree to the terms and conditions')
      return
    }

    setLoading(true)

    try {
      const result = await register({
        email,
        password,
        name,
        userType
      })
      
      if (result.success) {
        router.push('/dashboard')
      } else {
        setError(result.error || 'Registration failed')
      }
    } catch (error) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center mobile-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 sm:w-20 sm:h-20 primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
          >
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'rgb(var(--text-primary))' }}>
            Create Account
          </h1>
          <p className="mobile-text-base" style={{ color: 'rgb(var(--text-secondary))' }}>
            Join Fynd and find your dream job
          </p>
        </div>

        {/* User Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <label className="block text-sm font-medium mb-3" style={{ color: 'rgb(var(--text-primary))' }}>
            I am a...
          </label>
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              type="button"
              onClick={() => setUserType('jobseeker')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center space-y-2 ${
                userType === 'jobseeker' 
                  ? 'primary-gradient border-blue-500 text-white' 
                  : 'glass-card border-transparent'
              }`}
            >
              <Briefcase className="w-6 h-6" />
              <span className="font-medium mobile-text-sm">Job Seeker</span>
            </motion.button>
            
            <motion.button
              type="button"
              onClick={() => setUserType('recruiter')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center space-y-2 ${
                userType === 'recruiter' 
                  ? 'primary-gradient border-blue-500 text-white' 
                  : 'glass-card border-transparent'
              }`}
            >
              <Building className="w-6 h-6" />
              <span className="font-medium mobile-text-sm">Recruiter</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--text-primary))' }}>
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5" style={{ color: 'rgb(var(--text-muted))' }} />
              </div>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 mobile-text-base glass-card border-0 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                placeholder="Enter your full name"
                style={{ 
                  background: 'rgb(var(--card-bg) / 0.9)',
                  color: 'rgb(var(--text-primary))',
                  borderColor: 'rgb(var(--card-border) / 0.5)'
                }}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--text-primary))' }}>
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5" style={{ color: 'rgb(var(--text-muted))' }} />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 mobile-text-base glass-card border-0 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                placeholder="Enter your email"
                style={{ 
                  background: 'rgb(var(--card-bg) / 0.9)',
                  color: 'rgb(var(--text-primary))',
                  borderColor: 'rgb(var(--card-border) / 0.5)'
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--text-primary))' }}>
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5" style={{ color: 'rgb(var(--text-muted))' }} />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-12 py-3 mobile-text-base glass-card border-0 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                placeholder="Create a password"
                style={{ 
                  background: 'rgb(var(--card-bg) / 0.9)',
                  color: 'rgb(var(--text-primary))',
                  borderColor: 'rgb(var(--card-border) / 0.5)'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--text-primary))' }}>
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5" style={{ color: 'rgb(var(--text-muted))' }} />
              </div>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full pl-10 pr-12 py-3 mobile-text-base glass-card border-0 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                placeholder="Confirm your password"
                style={{ 
                  background: 'rgb(var(--card-bg) / 0.9)',
                  color: 'rgb(var(--text-primary))',
                  borderColor: 'rgb(var(--card-border) / 0.5)'
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3">
            <button
              type="button"
              onClick={() => setAgreedToTerms(!agreedToTerms)}
              className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                agreedToTerms 
                  ? 'primary-gradient border-blue-500' 
                  : 'border-gray-300'
              }`}
            >
              {agreedToTerms && <Check className="w-3 h-3 text-white" />}
            </button>
            <div className="flex-1">
              <p className="mobile-text-sm" style={{ color: 'rgb(var(--text-secondary))' }}>
                I agree to the{' '}
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm bg-red-50/50 glass-card p-3 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full mobile-button-lg primary-gradient text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-200 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" style={{ borderColor: 'rgb(var(--border-primary) / 0.3)' }} />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 glass-card" style={{ color: 'rgb(var(--text-muted))' }}>
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Signup Buttons */}
        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mobile-button glass-card flex items-center justify-center space-x-3"
          >
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span style={{ color: 'rgb(var(--text-primary))' }}>Continue with Google</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mobile-button glass-card flex items-center justify-center space-x-3"
          >
            <div className="w-5 h-5 bg-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            <span style={{ color: 'rgb(var(--text-primary))' }}>Continue with Facebook</span>
          </motion.button>
        </div>

        {/* Sign In Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6"
        >
          <p className="mobile-text-sm" style={{ color: 'rgb(var(--text-secondary))' }}>
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