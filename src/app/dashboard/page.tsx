'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { Heart, X, MapPin, DollarSign, Building, Star, Crown, Zap, Lock, Eye } from 'lucide-react'
import BottomNavigation from '@/components/BottomNavigation'

// Mock user data with subscription status
const mockUser = {
  name: 'Alex Chen',
  isPremium: false,
  swipesRemaining: 8,
  swipesLimit: 10,
  matches: 3,
  profileViews: 12
}

const mockJobs = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    description: 'We are looking for a talented Product Designer to join our team and help create amazing user experiences.',
    tags: ['UI/UX', 'Figma', 'Product Design', 'Prototyping'],
    logo: '🏢',
    isFeatured: true,
    urgent: false
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    salary: '$90k - $120k',
    description: 'Join our fast-growing startup and help build the next generation of web applications.',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
    logo: '🚀',
    isFeatured: false,
    urgent: true
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'DataLab',
    location: 'Austin, TX',
    salary: '$110k - $140k',
    description: 'Analyze complex datasets to drive business decisions. Proficiency in Python, SQL, and machine learning algorithms.',
    tags: ['Python', 'SQL', 'Machine Learning'],
    logo: '📊',
    isFeatured: false,
    urgent: false
  },
  {
    id: 4,
    title: 'Marketing Manager',
    company: 'GrowthCo',
    location: 'New York, NY',
    salary: '$80k - $100k',
    description: 'Lead our marketing initiatives and drive customer acquisition through innovative campaigns.',
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Analytics'],
    logo: '📈',
    isFeatured: true,
    urgent: false
  },
  {
    id: 5,
    title: 'UX Researcher',
    company: 'DesignStudio',
    location: 'Los Angeles, CA',
    salary: '$95k - $125k',
    description: 'Conduct user research and usability testing to improve product experiences.',
    tags: ['User Research', 'Usability Testing', 'Analytics', 'Prototyping'],
    logo: '🔍',
    isFeatured: false,
    urgent: false
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Seattle, WA',
    salary: '$130k - $160k',
    description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    logo: '☁️',
    isFeatured: false,
    urgent: true
  },
  {
    id: 7,
    title: 'Content Strategist',
    company: 'MediaCorp',
    location: 'Chicago, IL',
    salary: '$70k - $90k',
    description: 'Create compelling content strategies and manage brand voice across all channels.',
    tags: ['Content Strategy', 'Copywriting', 'SEO', 'Social Media'],
    logo: '✍️',
    isFeatured: false,
    urgent: false
  },
  {
    id: 8,
    title: 'Product Manager',
    company: 'InnovateInc',
    location: 'Boston, MA',
    salary: '$140k - $180k',
    description: 'Lead product strategy and development for our flagship SaaS platform.',
    tags: ['Product Strategy', 'Agile', 'User Stories', 'Analytics'],
    logo: '🎯',
    isFeatured: true,
    urgent: false
  }
]

export default function Dashboard() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)
  const [showMatch, setShowMatch] = useState(false)
  const [isCardFlipped, setIsCardFlipped] = useState(false)
  const [showSwipeLimit, setShowSwipeLimit] = useState(false)
  const [showPremiumUpsell, setShowPremiumUpsell] = useState(false)

  const currentJob = mockJobs[currentJobIndex]

  const handleSwipe = (direction: 'left' | 'right') => {
    // Don't allow swipe if card is flipped
    if (isCardFlipped) return
    
    // Check swipe limit for free users
    if (!mockUser.isPremium && mockUser.swipesRemaining <= 0) {
      setShowSwipeLimit(true)
      return
    }
    
    setSwipeDirection(direction)
    
    // Add haptic feedback (if supported)
    if (navigator.vibrate) {
      navigator.vibrate(100)
    }
    
    setTimeout(() => {
      if (direction === 'right') {
        setShowMatch(true)
        setTimeout(() => {
          setShowMatch(false)
          setCurrentJobIndex(prev => prev + 1)
          setSwipeDirection(null)
          setIsCardFlipped(false)
        }, 2000)
      } else {
        setCurrentJobIndex(prev => prev + 1)
        setSwipeDirection(null)
        setIsCardFlipped(false)
      }
    }, 400)
  }

  const handleCardClick = () => {
    setIsCardFlipped(!isCardFlipped)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: true
  })

  if (currentJobIndex >= mockJobs.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pb-20 safe-area-bottom">
        <div className="mobile-padding">
          <h1 className="text-xl sm:text-2xl font-bold text-gradient mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600 mb-6 mobile-text-base">Swipe through job opportunities</p>
        </div>
        
        <div className="flex items-center justify-center h-48 sm:h-64">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4"
            >
              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">No More Jobs</h3>
            <p className="text-gray-600 mb-4 mobile-text-base">You've seen all available jobs for today</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentJobIndex(0)}
              className="mobile-button glass-button bg-gradient-to-r from-primary-500 to-accent-500 text-white"
            >
              Refresh Jobs
            </motion.button>
          </div>
        </div>
        <BottomNavigation activeTab="home" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pb-20 safe-area-bottom">
      {/* Header with Swipe Counter */}
      <div className="mobile-padding">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gradient">Find Your Dream Job</h1>
            <p className="text-gray-600 mobile-text-sm">Swipe through job opportunities</p>
          </div>
          <div className="text-right flex-shrink-0 ml-3">
            <div className="flex items-center space-x-2">
              {!mockUser.isPremium && (
                <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-full px-2 sm:px-3 py-1">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {mockUser.swipesRemaining}/{mockUser.swipesLimit}
                  </span>
                </div>
              )}
              {mockUser.isPremium && (
                <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full px-2 sm:px-3 py-1">
                  <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  <span className="text-xs sm:text-sm font-medium text-white">PRO</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Premium Upsell Banner */}
        {!mockUser.isPremium && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card mobile-card mb-4 border-2 border-yellow-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 mobile-text-base">Upgrade to Pro</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Unlimited swipes & premium features</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPremiumUpsell(true)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium flex-shrink-0"
              >
                $4.99/mo
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Job Card */}
      <div className="mobile-container flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentJob.id}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: 0,
              rotate: swipeDirection === 'left' ? -25 : swipeDirection === 'right' ? 25 : 0,
              x: swipeDirection === 'left' ? -1200 : swipeDirection === 'right' ? 1200 : 0
            }}
            exit={{ scale: 0.8, opacity: 0, y: -20 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            className="w-full max-w-xs sm:max-w-sm perspective-1000"
            {...handlers}
          >
            <div 
              className="swipe-card relative cursor-pointer overflow-hidden"
              onClick={handleCardClick}
            >
              {/* Featured/Urgent Badge */}
              {(currentJob.isFeatured || currentJob.urgent) && (
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                  {currentJob.isFeatured && (
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                  {currentJob.urgent && (
                    <div className="bg-gradient-to-r from-red-400 to-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium mt-1 sm:mt-2">
                      Urgent Hire
                    </div>
                  )}
                </div>
              )}

              {/* Swipe Overlay */}
              {swipeDirection && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl font-bold z-20 ${
                    swipeDirection === 'left' 
                      ? 'bg-red-500/20 text-red-600' 
                      : 'bg-green-500/20 text-green-600'
                  }`}
                >
                  {swipeDirection === 'left' ? '❌' : '✅'}
                </motion.div>
              )}

              {/* Card Container with Flip Animation */}
              <motion.div
                animate={{ rotateY: isCardFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="p-4 sm:p-6 h-full flex flex-col relative">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 rounded-2xl sm:rounded-3xl" />
                    
                    {/* Company Logo */}
                    <div className="text-right mb-3 sm:mb-4 relative z-10">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl sm:rounded-3xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                        {currentJob.logo}
                      </div>
                    </div>

                    {/* Job Info */}
                    <div className="flex-1 relative z-10">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight">{currentJob.title}</h2>
                      
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        <div className="flex items-center text-gray-600">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                            <Building className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                          </div>
                          <span className="font-medium mobile-text-sm truncate">{currentJob.company}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          </div>
                          <span className="font-medium mobile-text-sm truncate">{currentJob.location}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                            <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                          </div>
                          <span className="font-medium mobile-text-sm truncate">{currentJob.salary}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed mobile-text-sm">{currentJob.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {currentJob.tags.map((tag, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-r from-primary-400 to-accent-400 text-white px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Tap to Flip Hint */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 opacity-60">
                      <div className="text-center">
                        <div className="text-base sm:text-lg">👆</div>
                        <div className="text-xs text-gray-500">Tap to see details</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
                  <div className="p-4 sm:p-6 h-full flex flex-col relative">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl sm:rounded-3xl" />
                    
                    {/* Back Header */}
                    <div className="text-center mb-4 sm:mb-6 relative z-10">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">Job Details</h3>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto">
                        {currentJob.logo}
                      </div>
                    </div>

                    {/* Detailed Job Info */}
                    <div className="flex-1 relative z-10 space-y-3 sm:space-y-4">
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Requirements</h4>
                        <ul className="text-gray-700 space-y-1.5 sm:space-y-2 mobile-text-sm">
                          <li>• 3+ years of experience in the field</li>
                          <li>• Strong communication skills</li>
                          <li>• Ability to work in a team environment</li>
                          <li>• Remote work capability</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Benefits</h4>
                        <ul className="text-gray-700 space-y-1.5 sm:space-y-2 mobile-text-sm">
                          <li>• Competitive salary and equity</li>
                          <li>• Health, dental, and vision insurance</li>
                          <li>• Flexible work hours</li>
                          <li>• Professional development budget</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Company Culture</h4>
                        <p className="text-gray-700 mobile-text-sm leading-relaxed">
                          {currentJob.company} is a fast-growing company with a collaborative culture. 
                          We value innovation, diversity, and work-life balance.
                        </p>
                      </div>
                    </div>

                    {/* Tap to Flip Back Hint */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 opacity-60">
                      <div className="text-center">
                        <div className="text-base sm:text-lg">👆</div>
                        <div className="text-xs text-gray-500">Tap to go back</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-6 sm:space-x-8 mobile-padding">
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('left')}
          disabled={isCardFlipped}
          className={`w-16 h-16 sm:w-20 sm:h-20 backdrop-blur-md border rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow ${
            isCardFlipped 
              ? 'bg-gray-400 border-gray-300 cursor-not-allowed' 
              : 'bg-gradient-to-br from-red-400 to-red-600 border-red-300'
          }`}
        >
          <X className={`w-8 h-8 sm:w-10 sm:h-10 ${isCardFlipped ? 'text-gray-500' : 'text-white'}`} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('right')}
          disabled={isCardFlipped}
          className={`w-16 h-16 sm:w-20 sm:h-20 backdrop-blur-md border rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow ${
            isCardFlipped 
              ? 'bg-gray-400 border-gray-300 cursor-not-allowed' 
              : 'bg-gradient-to-br from-green-400 to-green-600 border-green-300'
          }`}
        >
          <Heart className={`w-8 h-8 sm:w-10 sm:h-10 ${isCardFlipped ? 'text-gray-500' : 'text-white'}`} />
        </motion.button>
      </div>

      {/* Flip Hint */}
      {!isCardFlipped && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mobile-text-sm mb-4"
        >
          💡 Tap the card to see more details
        </motion.div>
      )}

      {/* Match Confirmation */}
      <AnimatePresence>
        {showMatch && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="glass-card mobile-card text-center max-w-sm mx-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-blue-100/20" />
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl"
              >
                <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3"
              >
                You Applied!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600 mb-4 sm:mb-6 mobile-text-base"
              >
                Your application has been sent to <span className="font-semibold text-primary-600">{currentJob.company}</span>
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMatch(false)}
                className="mobile-button glass-button bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold"
              >
                Continue
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swipe Limit Modal */}
      <AnimatePresence>
        {showSwipeLimit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="glass-card mobile-card text-center max-w-sm mx-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-orange-100/20" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl"
              >
                <Lock className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Swipe Limit Reached</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 mobile-text-base">
                You've used all {mockUser.swipesLimit} free swipes for today. Upgrade to Pro for unlimited swipes!
              </p>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPremiumUpsell(true)}
                  className="w-full mobile-button glass-button bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold"
                >
                  Upgrade to Pro - $4.99/mo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSwipeLimit(false)}
                  className="w-full mobile-button glass-button bg-gray-500 text-white font-semibold"
                >
                  Maybe Later
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Upsell Modal */}
      <AnimatePresence>
        {showPremiumUpsell && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="glass-card mobile-card text-center max-w-sm mx-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-purple-100/20" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl"
              >
                <Crown className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Upgrade to Pro</h3>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 mobile-text-sm">Unlimited swipes per day</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 mobile-text-sm">See who viewed your profile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 mobile-text-sm">Highlighted profile for recruiters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700 mobile-text-sm">Auto-apply with saved resume</span>
                </div>
              </div>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPremiumUpsell(false)}
                  className="w-full mobile-button glass-button bg-gradient-to-r from-yellow-400 to-purple-500 text-white font-semibold"
                >
                  Start Free Trial - $4.99/mo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPremiumUpsell(false)}
                  className="w-full mobile-button glass-button bg-gray-500 text-white font-semibold"
                >
                  Maybe Later
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNavigation activeTab="home" />
    </div>
  )
} 