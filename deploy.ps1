# Fynd PWA Deployment Script
Write-Host "🚀 Deploying Fynd to Vercel..." -ForegroundColor Green

# Check if Vercel CLI is installed
try {
    vercel --version
    Write-Host "✅ Vercel CLI found" -ForegroundColor Green
} catch {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

# Deploy to Vercel
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Yellow
vercel --prod

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "📱 Your PWA is now live and can be installed on mobile devices!" -ForegroundColor Cyan
Write-Host "🔗 Share the URL with users to test the app" -ForegroundColor Cyan 