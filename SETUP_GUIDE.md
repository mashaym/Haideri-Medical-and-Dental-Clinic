# 🚀 Complete Setup Guide

A step-by-step guide to set up the Haideri Medical and Dental Clinic website locally.

## 📋 Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** version 18.0 or higher ([Download](https://nodejs.org))
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** version control ([Download](https://git-scm.com))
- **VS Code** code editor ([Download](https://code.visualstudio.com))

### Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

---

## 🎯 Step 1: Clone the Repository

### Option A: Using Git (Recommended)

```bash
# Clone the repository
git clone https://github.com/mashaym/Haideri-Medical-and-Dental-Clinic.git

# Navigate to project directory
cd Haideri-Medical-and-Dental-Clinic

# Open in VS Code
code .
```

### Option B: Download as ZIP

1. Visit [GitHub Repository](https://github.com/mashaym/Haideri-Medical-and-Dental-Clinic)
2. Click "Code" → "Download ZIP"
3. Extract the ZIP file
4. Open folder in VS Code

---

## 📦 Step 2: Install Dependencies

### Using npm (Default)

```bash
# Navigate to project folder (if not already there)
cd Haideri-Medical-and-Dental-Clinic

# Install all dependencies
npm install

# This will create node_modules folder and install all packages from package.json
```

### Using yarn (Alternative)

```bash
npm install -g yarn  # Install yarn globally (if not already installed)

# Then install dependencies
yarn install
```

**What gets installed:**
- Next.js - React framework
- React & React-DOM - UI library
- TypeScript - Type checking
- Tailwind CSS - Styling
- Lucide React - Icon library
- And other dependencies

---

## ⚙️ Step 3: Environment Configuration (Optional)

If you need custom environment variables, create a `.env.local` file:

```bash
# Copy the example file
cp .env.example .env.local

# Edit the file with your values (most defaults work fine)
```

### Default Configuration

No environment variables are required for basic development. The application works out-of-the-box.

---

## 🖥️ Step 4: Start Development Server

### Method 1: Using npm (Recommended)

```bash
# Start development server with hot reload
npm run dev

# Output should show:
# ▲ Next.js 16.2.10
# - Local:         http://localhost:3000
# - Network:       http://192.168.x.x:3000
# ✓ Ready in XXXms
```

### Method 2: Using yarn

```bash
yarn dev
```

### Method 3: Using Windows Batch Script

We've provided convenient startup scripts:

```bash
# From project root on Windows
start.bat
```

---

## 🌐 Step 5: Access the Application

Once the server is running, open your browser and navigate to:

- **Local:** http://localhost:3000
- **Network:** http://[your-ip]:3000 (for other devices on your network)

### What You Should See

✓ Homepage with clinic information
✓ Navigation menu (About, Services, Reviews, Contact)
✓ Hero section with call-to-action buttons
✓ Services showcase
✓ Patient reviews section
✓ Contact form

---

## 🔨 Step 6: VS Code Setup (Recommended)

### Install Recommended Extensions

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for and install:
   - **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)
   - **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
   - **Thunder Client** or **REST Client** (for testing APIs)
   - **GitLens** (for Git integration)
   - **Prettier** (for code formatting)

### Configure VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## 📝 Available Commands

### Development

```bash
# Start development server
npm run dev

# Run linter to check code quality
npm run lint
```

### Production

```bash
# Build for production
npm run build

# Start production server (after build)
npm start
```

### Code Quality

```bash
# Fix linting issues automatically
npm run lint -- --fix
```

---

## 🗂️ Project Structure Overview

```
Haideri-Medical-and-Dental-Clinic/
│
├── 📁 src/
│   ├── 📁 app/                  # Next.js app router
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Root layout
│   │   ├── globals.css          # Global styles
│   │   ├── 📁 about/            # About page
│   │   ├── 📁 contact/          # Contact page
│   │   ├── 📁 services/         # Services page
│   │   ├── 📁 reviews/          # Reviews page
│   │   └── 📁 api/              # API routes
│   │
│   ├── 📁 components/           # Reusable React components
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer
│   │   ├── ContactForm.tsx      # Booking form
│   │   ├── ServiceCard.tsx      # Service card component
│   │   └── ... other components
│   │
│   └── 📁 lib/
│       └── data.ts              # Clinic data, services, hours
│
├── 📁 public/                   # Static assets (images, etc)
├── 📄 package.json              # Project dependencies
├── 📄 next.config.ts            # Next.js configuration
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 tailwind.config.ts        # Tailwind CSS configuration
└── 📄 README.md                 # Main documentation
```

---

## 🧪 Testing the Application

### Test Homepage
```
1. Open http://localhost:3000
2. Verify all sections load properly
3. Test responsive design by resizing window
```

### Test Navigation
```
1. Click on navigation menu items
2. Verify all pages load correctly
3. Check mobile menu on smaller screens
```

### Test Buttons
```
1. Click "Call Now" button - should initiate phone call
2. Click "Chat on WhatsApp" - should open WhatsApp
3. Fill and submit contact form - should validate inputs
```

---

## 🐛 Troubleshooting

### Issue: "Port 3000 already in use"

**Solution 1: Change port**
```bash
npm run dev -- -p 3001
```

**Solution 2: Kill existing process**

Windows:
```bash
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

macOS/Linux:
```bash
lsof -ti:3000 | xargs kill -9
```

---

### Issue: "npm ERR! code ENOENT"

**Solution:**
```bash
# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

### Issue: "Module not found" errors

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

---

### Issue: TypeScript errors in editor

**Solution:**
```bash
# Restart VS Code
# Or run: npm run lint
```

---

## 🚀 Building for Production

### Create Production Build

```bash
# Build optimized production bundle
npm run build

# Test production build locally
npm start

# Visit http://localhost:3000
```

### Build Output

The build creates an optimized `.next` folder with:
- Static HTML pages
- Compiled JavaScript
- CSS optimization
- Image optimization

---

## 📚 Useful Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Tutorials
- [Next.js Tutorial](https://nextjs.org/learn)
- [React Tutorial](https://react.dev/learn)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)

### Tools
- [VS Code](https://code.visualstudio.com)
- [Git Documentation](https://git-scm.com/doc)
- [npm Documentation](https://docs.npmjs.com)

---

## ✅ Verify Setup is Complete

Run this checklist to confirm everything is working:

- [ ] Node.js and npm installed
- [ ] Repository cloned
- [ ] Dependencies installed (`node_modules` folder exists)
- [ ] Development server starts without errors
- [ ] Website loads at http://localhost:3000
- [ ] All pages accessible from navigation
- [ ] Responsive design works on different screen sizes
- [ ] Console shows no errors (F12 developer tools)

---

## 🆘 Still Having Issues?

1. **Check the console for errors:** Press F12 in browser
2. **Check terminal output:** Look for error messages
3. **Try clearing cache:**
   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   npm run dev
   ```
4. **Reinstall Node.js** if installation keeps failing
5. **Check internet connection** - some packages require network access

---

## 📞 Need Help?

- 📱 **Phone:** 0333 9482234
- 💬 **WhatsApp:** +923339482234
- 📧 **Email:** [contact info]

---

<div align="center">

**Happy coding! 🚀**

[⬆ Back to top](#-complete-setup-guide)

</div>
