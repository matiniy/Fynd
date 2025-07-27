# Setup script for Fynd Job Search App
Write-Host "Setting up Node.js environment..." -ForegroundColor Green

# Add Node.js to PATH
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# Verify installation
Write-Host "Node.js version:" -ForegroundColor Yellow
node --version

Write-Host "npm version:" -ForegroundColor Yellow
npm --version

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Green
npm install

# Build the project
Write-Host "Building the project..." -ForegroundColor Green
npm run build

Write-Host "Setup complete! Run 'npm run dev' to start the development server." -ForegroundColor Green 