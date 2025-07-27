'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Crown, Zap, Building, Users, Eye, MessageCircle, Star, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

// Mock recruiter subscription data
const mockRecruiter = {
  name: 'Sarah Johnson',
  company: 'TechCorp',
  currentPlan: 'free',
  jobsPosted: 1,
  jobsLimit: 1,
  applicationsViewed: 5,
  applicationsLimit: 10
}

const subscriptionPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      '1 job post per month',
      'Basic applicant view',
      'Limited messaging',
      'Standard support'
    ],
    limitations: [
      'No direct messaging',
      'Limited analytics',
      'No candidate bookmarking'
    ],
    popular: false,
    buttonText: 'Current Plan',
    buttonStyle: 'bg-gray-500'
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$99',
    period: 'per month',
    features: [
      '5 job posts per month',
      'View & message all applicants',
      'Basic analytics dashboard',
      'Priority support',
      'Candidate bookmarking',
      'Resume downloads'
    ],
    limitations: [],
    popular: false,
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-gradient-to-r from-primary-400 to-primary-600'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$249',
    period: 'per month',
    features: [
      'Unlimited job posts',
      'Advanced analytics & insights',
      'Swipe analytics',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Priority candidate matching',
      'Bulk messaging'
    ],
    limitations: [],
    popular: true,
    buttonText: 'Most Popular',
    buttonStyle: 'bg-gradient-to-r from-yellow-400 to-orange-500'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    features: [
      'Everything in Growth',
      'ATS integration',
      'Hiring API access',
      'Custom company profile',
      'White-label solution',
      'Dedicated support team',
      'Custom reporting',
      'Advanced security features'
    ],
    limitations: [],
    popular: false,
    buttonText: 'Contact Sales',
    buttonStyle: 'bg-gradient-to-r from-purple-400 to-purple-600'
  }
]

const addOns = [
  {
    id: 'featured-job',
    name: 'Featured Job Posting',
    price: '$25',
    description: 'Promote your job to the top of the card stack for 7 days',
    icon: Star
  },
  {
    id: 'urgent-tag',
    name: 'Urgent Hire Tag',
    price: '$5',
    description: 'Mark your job as urgent to attract more candidates',
    icon: Zap
  },
  {
    id: 'boost-campaign',
    name: 'Targeted Campaign',
    price: '$50',
    description: 'Reach specific candidate demographics with targeted ads',
    icon: TrendingUp
  },
  {
    id: 'resume-builder',
    name: 'AI Resume Builder',
    price: '$7.99',
    description: 'AI-powered resume builder for your candidates',
    icon: Building
  }
]

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState(mockRecruiter.currentPlan)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  const currentPlan = subscriptionPlans.find(plan => plan.id === mockRecruiter.currentPlan)
  const selectedPlanData = subscriptionPlans.find(plan => plan.id === selectedPlan)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pb-20">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/recruiter/dashboard">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-4"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </motion.button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gradient">Subscription & Billing</h1>
            <p className="text-gray-600">Choose the perfect plan for your hiring needs</p>
          </div>
        </div>

        {/* Current Plan Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Plan: {currentPlan?.name}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4" />
                  <span>Jobs Posted: {mockRecruiter.jobsPosted}/{mockRecruiter.jobsLimit}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Applications Viewed: {mockRecruiter.applicationsViewed}/{mockRecruiter.applicationsLimit}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">{currentPlan?.price}</div>
              <div className="text-sm text-gray-500">{currentPlan?.period}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subscription Plans */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 relative ${plan.popular ? 'ring-2 ring-yellow-400' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary-600">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <div key={limitationIndex} className="flex items-center space-x-2">
                    <div className="w-4 h-4 text-red-500 flex-shrink-0">✕</div>
                    <span className="text-sm text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (plan.id !== mockRecruiter.currentPlan) {
                    setSelectedPlan(plan.id)
                    setShowUpgradeModal(true)
                  }
                }}
                className={`w-full py-3 rounded-xl text-white font-semibold transition-all ${plan.buttonStyle}`}
                disabled={plan.id === mockRecruiter.currentPlan}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Add-ons & Extras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addOns.map((addon, index) => {
            const Icon = addon.icon
            return (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{addon.name}</h3>
                      <span className="text-lg font-bold text-primary-600">{addon.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{addon.description}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 py-2 bg-gradient-to-r from-primary-400 to-accent-500 text-white rounded-xl font-medium"
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Usage Analytics */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Usage Analytics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary-600">{mockRecruiter.jobsPosted}</div>
            <div className="text-sm text-gray-600">Jobs Posted</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-secondary-600">24</div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-accent-600">8</div>
            <div className="text-sm text-gray-600">Matches Made</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-4 text-center"
          >
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Hires</div>
          </motion.div>
        </div>
      </div>

      {/* Upgrade Modal */}
      <AnimatePresence>
        {showUpgradeModal && selectedPlanData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="glass-card p-8 text-center max-w-md mx-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-accent-100/20" />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-24 h-24 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
              >
                <Crown className="w-12 h-12 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Upgrade to {selectedPlanData.name}</h3>
              <p className="text-gray-600 mb-6">
                Get access to {selectedPlanData.features.length} premium features for {selectedPlanData.price}/{selectedPlanData.period}
              </p>
              
              <div className="space-y-4 mb-6 text-left">
                {selectedPlanData.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowUpgradeModal(false)}
                  className="w-full glass-button bg-gradient-to-r from-primary-400 to-accent-500 text-white font-semibold"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowUpgradeModal(false)}
                  className="w-full glass-button bg-gray-500 text-white font-semibold"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 