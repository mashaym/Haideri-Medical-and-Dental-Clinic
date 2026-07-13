# 🏥 Haideri Medical and Dental Clinic

<div align="center">

**Professional Dental & Medical Services Website**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)

[🌐 Website](#) • [📞 Contact](#contact-information) • [🚀 Get Started](#quick-start) • [📖 Docs](./SETUP_GUIDE.md)

</div>

---

## 🏥 About

A comprehensive, professional website for **Haideri Medical and Dental Center** in Abbottabad, Pakistan. Built with cutting-edge web technologies to deliver an exceptional patient experience with easy access to services, appointment booking, and medical information.

**Led by:** Dr. Syed Saif Kazmi

---

## ✨ Key Features

- 🎯 **Responsive Design** - Seamless experience across all devices
- 🦷 **Service Showcase** - Detailed information about all dental and medical services
- ⭐ **Patient Reviews** - Real testimonials and satisfaction ratings
- 📋 **Contact Form** - Quick appointment booking and inquiry system
- 💬 **WhatsApp Integration** - Direct patient communication
- 🎨 **Modern UI/UX** - Professional design with smooth animations
- 📱 **Mobile-First** - Optimized for smartphone and tablet users
- ♿ **Accessible** - WCAG compliance for inclusive design

---

## 🦷 Services Offered

| Service | Description |
|---------|-------------|
| 🪥 **General Dentistry** | Routine check-ups, cleanings, cavity treatment |
| ✨ **Cosmetic Dentistry** | Teeth whitening, veneers, smile makeovers |
| 🔧 **Root Canal** | Advanced endodontic treatment |
| 🌳 **Dental Implants** | Permanent tooth replacement solutions |
| 👶 **Pediatric Care** | Child-friendly dental services |
| 🚨 **Emergency Care** | 24/7 emergency dental services |
| 🏃 **Physiotherapy** | Physical rehabilitation services |
| 🩺 **General Consultation** | Medical consultations by qualified professionals |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mashaym/Haideri-Medical-and-Dental-Clinic.git
   cd Haideri-Medical-and-Dental-Clinic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Local: [http://localhost:3000](http://localhost:3000)
   - Network: Check terminal for network URL

---

## 📁 Project Structure

```
Haideri-Medical-and-Dental-Clinic/
├── src/
│   ├── app/
│   │   ├── page.tsx              # 🏠 Home page
│   │   ├── about/page.tsx        # ℹ️ About page
│   │   ├── contact/page.tsx      # 📞 Contact & booking
│   │   ├── services/page.tsx     # 🦷 Services listing
│   │   ├── reviews/page.tsx      # ⭐ Patient reviews
│   │   ├── api/contact/route.ts  # 📧 API endpoint
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/               # 🧩 React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ... (other components)
│   └── lib/
│       └── data.ts               # 📊 Clinic data & constants
├── public/                       # 🖼️ Static assets
├── package.json                  # 📦 Dependencies
├── next.config.ts                # ⚙️ Next.js config
├── tailwind.config.ts            # 🎨 Tailwind config
├── tsconfig.json                 # TypeScript config
└── README.md                     # 📖 This file
```

---

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint code quality checks |

---

## 📞 Contact Information

| Service | Details |
|---------|---------|
| 📱 **Phone** | 0333 9482234 |
| 💬 **WhatsApp** | +923339482234 |
| 📍 **Location** | Kehal, Abbottabad, KPK, Pakistan |
| 👨‍⚕️ **Doctor** | Dr. Syed Saif Kazmi |
| 🕒 **Hours** | Mon-Sat: 10 AM - 8 PM, Fri: 12 PM - 9 PM |

---

## 💻 Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js | 16.2.10 |
| **UI Library** | React | 19.2.4 |
| **Language** | TypeScript | 5+ |
| **Styling** | Tailwind CSS | 4 |
| **Icons** | Lucide React | 1.24.0 |
| **CSS Processing** | PostCSS | Latest |

---

## 🏗️ Build & Deploy

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
Create a `.env.local` file (see `.env.example` for reference):
```bash
cp .env.example .env.local
```

---

## 🔧 Development

### Code Quality
- ESLint configured for code standards
- TypeScript for type safety
- Tailwind CSS for consistent styling

### Folder Structure Best Practices
- Components are organized by feature
- Utilities and constants in `lib/`
- API routes in `app/api/`
- Styles scoped with Tailwind utility classes

---

## 🐛 Troubleshooting

### Common Issues

#### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

#### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Clean build cache
rm -rf .next
npm run build
```

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide React Icons](https://lucide.dev)

---

## 📋 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

---

## ✉️ Support

For issues, questions, or feedback:
- 📧 Email: [contact info]
- 💬 WhatsApp: +923339482234
- 📞 Phone: 0333 9482234

---

<div align="center">

**Made with ❤️ for better healthcare**

[⬆ Back to top](#haideri-medical-and-dental-clinic)

</div>
