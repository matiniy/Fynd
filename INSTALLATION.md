# Installation Guide

## Prerequisites

Before you can run this project, you need to install Node.js and npm.

### Installing Node.js

1. **Download Node.js**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS version (recommended for most users)
   - Choose the version for your operating system (Windows, macOS, or Linux)

2. **Install Node.js**
   - **Windows**: Run the downloaded `.msi` file and follow the installation wizard
   - **macOS**: Run the downloaded `.pkg` file and follow the installation wizard
   - **Linux**: Use your package manager or download the binary

3. **Verify Installation**
   Open a terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```
   Both commands should return version numbers.

## Project Setup

### 1. Clone or Download the Project
```bash
# If using git
git clone <repository-url>
cd fynd-job-search

# Or download and extract the ZIP file
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Open Your Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Alternative: Using Yarn

If you prefer using Yarn instead of npm:

1. **Install Yarn** (if not already installed):
   ```bash
   npm install -g yarn
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   yarn dev
   ```

## Troubleshooting

### Common Issues

1. **"node is not recognized"**
   - Node.js is not installed or not in your PATH
   - Reinstall Node.js and restart your terminal

2. **"npm is not recognized"**
   - npm is not installed or not in your PATH
   - Reinstall Node.js (npm comes with Node.js)

3. **Port 3000 is already in use**
   - The development server will automatically try the next available port
   - Or kill the process using port 3000

4. **Permission errors (Linux/macOS)**
   - Use `sudo npm install` (not recommended)
   - Or fix npm permissions: `npm config set prefix ~/.npm-global`

### Getting Help

If you encounter any issues:

1. Check that Node.js version is 18 or higher
2. Clear npm cache: `npm cache clean --force`
3. Delete `node_modules` and `package-lock.json`, then run `npm install` again
4. Check the [Next.js documentation](https://nextjs.org/docs)
5. Create an issue in this repository

## Production Build

To create a production build:

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory for any environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Development Tools

Recommended VS Code extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features 