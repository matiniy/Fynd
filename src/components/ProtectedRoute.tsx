'use client'

import React, { useEffect } from 'react'
import { useAuth } from '@/app/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

interface ProtectedRouteProps {
  children: React.ReactNode
  userType?: 'jobseeker' | 'recruiter'
}

export default function ProtectedRoute({ children, userType }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
    
    if (!loading && user && userType && user.userType !== userType) {
      // Redirect to appropriate dashboard based on user type
      if (user.userType === 'recruiter') {
        router.push('/recruiter/dashboard')
      } else {
        router.push('/dashboard')
      }
    }
  }, [user, loading, userType, router])

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Loader2 className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-spin" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'rgb(var(--text-primary))' }}>
            Loading...
          </h2>
          <p className="mobile-text-sm" style={{ color: 'rgb(var(--text-secondary))' }}>
            Please wait while we verify your account
          </p>
        </motion.div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to login
  }

  if (userType && user.userType !== userType) {
    return null // Will redirect to appropriate dashboard
  }

  return <>{children}</>
} 