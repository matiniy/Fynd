'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/app/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="dark-mode-toggle"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-gray-600" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  )
} 