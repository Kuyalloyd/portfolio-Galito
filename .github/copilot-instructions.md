# Portfolio Project Instructions

## Project Overview
This is a modern, animated React portfolio website built with:
- **React** - UI Framework
- **Vite** - Build tool for fast development
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **React Icons** - Icon components

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.jsx    # Navigation bar
│   ├── Hero.jsx      # Hero/intro section
│   ├── About.jsx     # About me section
│   ├── Projects.jsx  # Portfolio projects
│   ├── Skills.jsx    # Technical skills
│   ├── Contact.jsx   # Contact form
│   └── Footer.jsx    # Footer section
├── App.jsx           # Main app component
├── index.css         # Global styles & Tailwind
└── main.jsx          # React entry point
```

## Customization Guide

### Update Personal Information
1. **Hero Section** (`src/components/Hero.jsx`)
   - Change "Your Name" to your name
   - Update subtitle and description
   - Add your social media links

2. **About Section** (`src/components/About.jsx`)
   - Update biography
   - Edit experience timeline
   - Replace placeholder image

3. **Projects Section** (`src/components/Projects.jsx`)
   - Add your own projects
   - Update project descriptions
   - Replace with real project links

4. **Skills Section** (`src/components/Skills.jsx`)
   - Update skill categories
   - Add/remove skills
   - Adjust proficiency levels

5. **Contact Section** (`src/components/Contact.jsx`)
   - Update contact information (email, phone, location)
   - Implement form submission logic

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#6366f1",      // Main accent color
  secondary: "#ec4899",    // Secondary accent
  dark: "#0f172a",         // Background
  darker: "#020617",       // Darker background
}
```

### Modify Animations
Framer Motion animations are configured in each component using:
- `initial` - Starting state
- `animate` - Target state
- `whileHover` - On hover effects
- `whileTap` - On click effects
- `transition` - Animation timing

## Available NPM Packages

- `react` - React library
- `react-dom` - React DOM rendering
- `framer-motion` - Animation library
- `react-icons` - Icon library
- `tailwindcss` - CSS framework
- `postcss` - CSS processing
- `autoprefixer` - Vendor prefixes
- `vite` - Build tool

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify

### GitHub Pages
Configure vite.config.js with repository name, then:
```bash
npm run build
```

## Key Features

✨ **Smooth Animations** - All sections have entrance animations and hover effects
📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
🎨 **Modern Styling** - Gradient backgrounds, shadows, and glassmorphism effects
🚀 **Performance** - Optimized bundle size and fast load times
♿ **Accessibility** - Proper semantic HTML and navigation

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Troubleshooting

**Dev server won't start**
- Clear node_modules: `rm -r node_modules && npm install`
- Check Node version: `node --version` (recommend 18+)

**Styles not loading**
- Ensure Tailwind CSS is in index.css
- Rebuild: `npm run build`

**Icons not showing**
- Verify react-icons is installed: `npm install react-icons`

## Additional Resources
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev)
