import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fynd - Job Search Made Simple',
  description: 'Tinder-style job search platform for job seekers and recruiters',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Fynd" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="min-h-screen gradient-bg safe-area-top safe-area-bottom">
              <ThemeToggle />
              {children}
            </div>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  if ('serviceWorker' in navigator) {
                    window.addEventListener('load', function() {
                      navigator.serviceWorker.register('/sw.js')
                        .then(function(registration) {
                          console.log('SW registered: ', registration);
                        })
                        .catch(function(registrationError) {
                          console.log('SW registration failed: ', registrationError);
                        });
                    });
                  }
                `,
              }}
            />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 