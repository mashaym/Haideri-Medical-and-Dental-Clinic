# 📚 Quick Reference Guide

Quick reference for common tasks and commands.

## 🚀 Quick Start Commands

```bash
# Clone the repo
git clone https://github.com/mashaym/Haideri-Medical-and-Dental-Clinic.git

# Install dependencies
npm install

# Start development server
npm run dev

# Visit in browser
# http://localhost:3000
```

## 📝 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint code quality checks |

## 🪟 Windows Quick Start

```batch
# Run setup (one-time)
setup.bat

# Start development server
start.bat
```

## 🗂️ Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage |
| `src/lib/data.ts` | Clinic data and services |
| `src/components/` | Reusable React components |
| `next.config.ts` | Next.js configuration |
| `tailwind.config.ts` | Tailwind CSS configuration |

## 📱 Pages

- **Home** - `src/app/page.tsx`
- **About** - `src/app/about/page.tsx`
- **Services** - `src/app/services/page.tsx`
- **Reviews** - `src/app/reviews/page.tsx`
- **Contact** - `src/app/contact/page.tsx`

## 🧩 Components

Located in `src/components/`:

- `Header.tsx` - Navigation
- `Footer.tsx` - Footer
- `ContactForm.tsx` - Booking form
- `ServiceCard.tsx` - Service display
- `ReviewCard.tsx` - Review display
- `Button.tsx` - Reusable button
- `Container.tsx` - Layout container

## 🎨 Styling

- Uses **Tailwind CSS** utility classes
- Global styles in `src/app/globals.css`
- Component-level scoping with Tailwind classes
- Dark mode support available

Example:
```tsx
<div className="flex items-center gap-4 md:gap-6 lg:gap-8">
  {/* Content */}
</div>
```

## 📞 Contact Info

- **Phone:** 0333 9482234
- **WhatsApp:** +923339482234
- **Location:** Kehal, Abbottabad, KPK
- **Doctor:** Dr. Syed Saif Kazmi

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port
npm run dev -- -p 3001

# Or kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

### Dependencies Issue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Cache Error
```bash
rm -rf .next
npm run build
```

## 📚 Documentation

- [Full Setup Guide](./SETUP_GUIDE.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [README](./README.md)

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)

## 💡 Tips

1. **Hot Reload:** Changes save automatically while dev server runs
2. **TypeScript:** Errors show in editor and terminal
3. **Linter:** Run `npm run lint` before commits
4. **Mobile Test:** Use Chrome DevTools (F12) to test responsive design
5. **Network Access:** Use the network URL to test on your phone

## 🎯 Git Workflow

```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes
# ... edit files ...

# Commit
git add .
git commit -m "Add my feature"

# Push
git push origin feature/my-feature

# Create Pull Request on GitHub
```

## 🚀 Deployment

The project is ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages** (static export)
- Any Node.js hosting

See [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

**Need more help?** See the full [SETUP_GUIDE.md](./SETUP_GUIDE.md)
