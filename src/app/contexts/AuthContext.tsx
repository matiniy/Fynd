'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export interface User {
  id: string
  email: string
  name: string
  userType: 'jobseeker' | 'recruiter'
  isPremium: boolean
  profileComplete: boolean
  avatar?: string
  createdAt: Date
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (userData: RegisterData) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateUser: (updates: Partial<User>) => void
}

interface RegisterData {
  email: string
  password: string
  name: string
  userType: 'jobseeker' | 'recruiter'
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setLoading(true)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock authentication logic
      if (email === 'demo@example.com' && password === 'password') {
        const mockUser: User = {
          id: '1',
          email: 'demo@example.com',
          name: 'Demo User',
          userType: 'jobseeker',
          isPremium: false,
          profileComplete: false,
          createdAt: new Date()
        }
        
        setUser(mockUser)
        localStorage.setItem('user', JSON.stringify(mockUser))
        return { success: true }
      } else {
        return { success: false, error: 'Invalid email or password' }
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' }
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData: RegisterData): Promise<{ success: boolean; error?: string }> => {
    try {
      setLoading(true)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock registration logic
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        userType: userData.userType,
        isPremium: false,
        profileComplete: false,
        createdAt: new Date()
      }
      
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Registration failed. Please try again.' }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 