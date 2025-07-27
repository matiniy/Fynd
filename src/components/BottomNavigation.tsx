'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Heart, User } from 'lucide-react'

interface BottomNavigationProps {
  activeTab: 'home' | 'matches' | 'profile'
}

export default function BottomNavigation({ activeTab }: BottomNavigationProps) {
  const navItems = [
    {
      id: 'home',
      label: 'Swipe',
      icon: Home,
      href: '/dashboard'
    },
    {
      id: 'matches',
      label: 'Matches',
      icon: Heart,
      href: '/matches'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      href: '/profile'
    }
  ]

  return (
    <nav className="bottom-nav">
      <div className="flex justify-around items-center h-16 px-2 sm:px-4">
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
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mb-1 ${isActive ? 'text-primary-600' : 'text-gray-600'}`} />
                <span className={`text-xs sm:text-sm ${isActive ? 'text-primary-600' : 'text-gray-600'}`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 w-1 h-1 bg-primary-600 rounded-full"
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