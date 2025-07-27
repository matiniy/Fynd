# Fynd - Job Search Made Simple

A mobile-first job search platform with Tinder-style swipe mechanics, built with React, Next.js, and TailwindCSS.

## 🎯 Features

### For Job Seekers
- **Tinder-style Swipe Interface**: Swipe right to apply, left to skip
- **Mobile-First Design**: Optimized for mobile devices with touch gestures
- **Fast Apply**: Quick application process with resume upload
- **Match Tracking**: View all your applications and their status
- **Skills Management**: Add and manage your skills with tags

### For Recruiters
- **Job Posting**: Easy job creation with rich descriptions
- **Candidate Inbox**: View and manage job applications
- **Match Management**: Accept or reject candidates
- **Company Dashboard**: Track your job postings and matches

## 🎨 Design Features

- **Soft Pastel Gradients**: Beautiful blue-pink-purple color scheme
- **Glassmorphism**: Modern glass-like card effects with blur
- **Mobile-First**: Responsive design optimized for mobile
- **Smooth Animations**: Framer Motion powered interactions
- **Modern Typography**: Clean, readable Inter font

## 🚀 Tech Stack

- **Frontend**: React 18 + Next.js 14
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Mobile**: React Swipeable for touch gestures

## 📱 Pages

### Job Seeker Flow
1. **Welcome Screen** (`/`) - Choose user type
2. **Sign Up** (`/signup-jobseeker`) - Create job seeker profile
3. **Dashboard** (`/dashboard`) - Swipe through jobs
4. **Matches** (`/matches`) - View applications and status

### Recruiter Flow
1. **Sign Up** (`/signup-recruiter`) - Create recruiter account
2. **Post Job** (`/recruiter/post-job`) - Create job listings
3. **Candidate Inbox** - Manage applications (coming soon)
4. **Matches** - View accepted candidates (coming soon)

## 🎨 Design System

### Colors
- **Primary**: Pink gradient (`#ec4899` to `#db2777`)
- **Secondary**: Blue gradient (`#3b82f6` to `#2563eb`)
- **Accent**: Purple gradient (`#a855f7` to `#9333ea`)

### Components
- **Glass Cards**: `bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl`
- **Gradient Buttons**: Pill-shaped with gradient backgrounds
- **Swipe Cards**: Interactive job cards with swipe animations
- **Bottom Navigation**: Glassmorphism nav bar

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive text scaling

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fynd-job-search
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Mobile-First Features

### Touch Gestures
- **Swipe Right**: Apply to job
- **Swipe Left**: Skip job
- **Tap**: Select navigation items
- **Long Press**: Additional options (coming soon)

### Responsive Design
- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Adaptive layout (768px+)
- **Desktop**: Enhanced experience (1024px+)

## 🎯 Key Components

### SwipeCard
Interactive job cards with:
- Touch/swipe gestures
- Smooth animations
- Visual feedback
- Match confirmation

### BottomNavigation
Mobile navigation with:
- Glassmorphism styling
- Active state indicators
- Smooth transitions
- Touch-friendly targets

### GlassCard
Reusable glassmorphism component:
- Backdrop blur effects
- Subtle borders
- Rounded corners
- Gradient backgrounds

## 🔮 Future Features

### Planned Enhancements
- **Real-time Chat**: Direct messaging between seekers and recruiters
- **Video Interviews**: Built-in video calling
- **AI Matching**: Smart job-candidate matching
- **Push Notifications**: Real-time updates
- **Analytics Dashboard**: Job performance metrics
- **Multi-language Support**: Internationalization

### Technical Improvements
- **Authentication**: Firebase Auth integration
- **Database**: Supabase or Firebase Firestore
- **File Upload**: Cloud storage for resumes
- **Search & Filters**: Advanced job filtering
- **Offline Support**: PWA capabilities

## 🎨 Customization

### Theme Colors
Modify `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    50: '#fdf2f8',
    // ... customize pink gradient
  },
  secondary: {
    50: '#eff6ff',
    // ... customize blue gradient
  },
  accent: {
    50: '#faf5ff',
    // ... customize purple gradient
  }
}
```

### Animations
Customize animations in `tailwind.config.js`:

```javascript
animation: {
  'swipe-left': 'swipeLeft 0.3s ease-out',
  'swipe-right': 'swipeRight 0.3s ease-out',
  // ... add custom animations
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@fynd.com or create an issue in this repository.

---

Built with ❤️ using Next.js, React, and TailwindCSS 