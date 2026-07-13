# 🤝 Contributing to Haideri Dental Clinic

Thank you for your interest in contributing to the Haideri Medical and Dental Clinic website! This guide will help you get started.

## 📋 Code of Conduct

Please be respectful, professional, and maintain high standards when contributing.

## 🚀 Getting Started

### 1. Fork the Repository

```bash
# Go to https://github.com/mashaym/Haideri-Medical-and-Dental-Clinic
# Click "Fork" button in top-right corner
```

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/Haideri-Medical-and-Dental-Clinic.git
cd Haideri-Medical-and-Dental-Clinic
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
# git checkout -b bugfix/bug-description
```

---

## 💻 Development Workflow

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly

### Run Linter

```bash
npm run lint
```

---

## 📝 Commit Guidelines

Write clear, descriptive commit messages:

```bash
# Good commit messages
git commit -m "Add appointment booking feature"
git commit -m "Fix mobile menu alignment issue"
git commit -m "Update clinic hours data"

# Avoid vague messages
# ❌ git commit -m "fix bugs"
# ❌ git commit -m "changes"
# ✅ git commit -m "fix navigation menu closing on mobile"
```

---

## 🎯 Types of Contributions

### 🐛 Bug Reports

Found a bug? Please report it by:

1. Checking if the bug already exists in Issues
2. Creating a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (browser, OS)

### ✨ Feature Requests

Have an idea? Submit a feature request with:

1. Clear description of the feature
2. Why it would be useful
3. How you imagine it working
4. Any relevant references or examples

### 📖 Documentation

Help improve documentation by:

1. Fixing typos in README or guides
2. Adding examples and clarifications
3. Improving setup instructions
4. Translating documentation

### 💅 Code Quality

Improve the codebase by:

1. Refactoring complex code
2. Improving performance
3. Adding type safety
4. Reducing code duplication

---

## 🔄 Pull Request Process

### 1. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 2. Create Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template with:
   - Clear title
   - Description of changes
   - Type: Bug fix / Feature / Documentation / Refactor
   - Testing done
   - Screenshots (if UI changes)

### 3. PR Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Refactor

## Testing Done
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] All pages load correctly
- [ ] No console errors

## Screenshots
[Add screenshots for UI changes]

## Related Issues
Closes #[issue number]
```

### 4. Code Review

- Address feedback promptly
- Keep discussions professional
- Push updates to the same branch
- Don't force-push to PR branches

---

## 🎨 Code Style Guidelines

### React Components

```typescript
// Use functional components with TypeScript
interface MyComponentProps {
  title: string;
  onClick: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ 
  title, 
  onClick 
}) => {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  );
};
```

### File Naming

- Components: `PascalCase` (e.g., `Header.tsx`)
- Utilities: `camelCase` (e.g., `formatPhone.ts`)
- Pages: `lowercase/index.tsx` (e.g., `services/page.tsx`)

### CSS/Tailwind

- Use Tailwind utility classes
- Avoid custom CSS unless necessary
- Use semantic class names
- Maintain responsive design

```tsx
// ✅ Good
<div className="flex items-center gap-4 md:gap-6 lg:gap-8">

// ❌ Avoid
<div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
```

### TypeScript

- Use strict type checking
- Avoid `any` types
- Define interfaces for props
- Use meaningful variable names

```typescript
// ✅ Good
interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

// ❌ Avoid
let service: any = { name: 'X' };
```

---

## 📋 Checklist Before Submitting

- [ ] Code follows style guidelines
- [ ] All tests pass locally
- [ ] No console errors or warnings
- [ ] Changes are well-documented
- [ ] Commit messages are clear
- [ ] No unnecessary files added
- [ ] Responsive design verified
- [ ] TypeScript compiles without errors
- [ ] Linter passes: `npm run lint`

---

## 🚀 Release Process

Maintainers will:

1. Review and approve PR
2. Merge to main branch
3. Test merged changes
4. Deploy to production (if applicable)
5. Create release notes

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org)
- [Git Guide](https://git-scm.com/doc)

---

## ❓ Questions?

- 💬 Check existing issues first
- 📧 Ask in PR discussions
- 📞 Contact maintainers

---

## 🎉 Thank You!

Your contributions make this project better for everyone!

<div align="center">

**Happy contributing! 🚀**

</div>
