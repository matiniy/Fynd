'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Users, FileText, Settings } from 'lucide-react'

interface RecruiterBottomNavigationProps {
  activeTab: 'dashboard' | 'applications' | 'jobs' | 'profile'
}

export default function RecruiterBottomNavigation({ activeTab }: RecruiterBottomNavigationProps) {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      href: '/recruiter/dashboard'
    },
    {
      id: 'applications',
      label: 'Applications',
      icon: Users,
      href: '/recruiter/applications'
    },
    {
      id: 'jobs',
      label: 'Jobs',
      icon: FileText,
      href: '/recruiter/jobs'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: Settings,
      href: '/recruiter/profile'
    }
  ]

  return (
    <nav className="bottom-nav">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <Link key={item.id} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon className={`w-6 h-6 mb-1 ${isActive ? 'text-secondary-600' : 'text-gray-600'}`} />
                <span className={`text-xs ${isActive ? 'text-secondary-600' : 'text-gray-600'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 w-1 h-1 bg-secondary-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
} 