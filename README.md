# 🚀 Fynd - Job Search Made Simple

A Tinder-style job search platform that makes finding your dream job fun and easy. Built with React, Next.js, and TailwindCSS.

![Fynd App](https://img.shields.io/badge/Status-Production%20Ready-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.6-38B2AC)

## ✨ Features

### 🧑‍💼 For Job Seekers
- **Swipe Interface** - Tinder-style job browsing
- **Quick Apply** - Apply with one swipe
- **Job Details** - Flip cards to see full job information
- **Match Tracking** - View all your applications and matches
- **Premium Features** - Unlimited swipes, profile views, auto-apply

### 👥 For Recruiters
- **Job Posting** - Easy job creation and management
- **Application Tracking** - View and manage candidate applications
- **Analytics Dashboard** - Track hiring success metrics
- **Subscription Tiers** - Multiple pricing plans for different needs
- **Featured Listings** - Promote jobs for better visibility

### 🎨 Design & UX
- **Mobile-First** - Optimized for mobile devices
- **Glassmorphism** - Modern, glassy UI design
- **Smooth Animations** - Framer Motion powered interactions
- **PWA Ready** - Installable on mobile devices
- **Responsive** - Works on all screen sizes

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/fynd-job-search.git
cd fynd-job-search

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
# Build the app
npm run build

# Start production server
npm start
```

## 📱 PWA Features

This app is a Progressive Web App (PWA) with:
- ✅ **Installable** - Add to home screen
- ✅ **Offline Support** - Works without internet
- ✅ **Fast Loading** - Optimized performance
- ✅ **Native Feel** - App-like experience

## 💰 Business Model

### Freemium for Job Seekers
- **Free Tier**: 10 swipes per day
- **Pro Tier**: $4.99/month - Unlimited swipes, profile views, auto-apply

### Subscription for Recruiters
- **Free**: 1 job post/month
- **Starter**: $99/month - 5 job posts, full messaging
- **Growth**: $249/month - Unlimited posts, analytics, API access
- **Enterprise**: Custom pricing - ATS integration, white-label

### Add-ons
- **Featured Job**: $25 - Promoted in card stack
- **Urgent Tag**: $5 - Mark as urgent hire
- **AI Resume Builder**: $7.99 - For candidates

## 🏗️ Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: TailwindCSS, Framer Motion
- **Mobile**: PWA, Service Workers
- **Deployment**: Vercel (recommended)
- **Icons**: Lucide React
- **Gestures**: React Swipeable

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Job seeker swipe interface
│   ├── matches/          # Job applications tracking
│   ├── profile/          # User profile management
│   ├── recruiter/        # Recruiter dashboard & features
│   └── signup-*/         # User registration flows
├── components/            # Reusable UI components
│   ├── BottomNavigation.tsx
│   └── RecruiterBottomNavigation.tsx
└── globals.css           # Global styles & PWA styles
```

## 🎯 Key Components

### Job Seeker Flow
1. **Welcome Screen** - Choose user type
2. **Sign Up** - Create profile with skills
3. **Swipe Dashboard** - Browse and apply to jobs
4. **Match Confirmation** - Success feedback
5. **Matches Page** - Track applications

### Recruiter Flow
1. **Dashboard** - Overview of job postings
2. **Post Job** - Create new job listings
3. **Applications** - Review candidate applications
4. **Subscription** - Manage billing and plans

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify
```bash
# Build the app
npm run build

# Deploy the 'out' folder to Netlify
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment Variables
```env
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Design inspiration from Tinder's swipe interface
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [TailwindCSS](https://tailwindcss.com/)

## 📞 Support

- **Documentation**: [PUBLISHING_GUIDE.md](PUBLISHING_GUIDE.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/fynd-job-search/issues)
- **Email**: support@fynd.com

---

Made with ❤️ by the Fynd team 