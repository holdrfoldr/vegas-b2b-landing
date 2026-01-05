# Vegas-Tier Client Protection Landing Page

A modern, interactive landing page for a B2B cybersecurity and lead recovery service targeting high-volume med spas.

## Features

### 🎨 Design
- **Cyber-Luxury Theme**: Clean, minimal design with neon accents
- **Dual Theme Support**: Seamless light/dark mode toggle
- **Glassmorphism**: Modern frosted glass effects throughout
- **Responsive**: Mobile-first design that works on all devices

### ✨ Interactive Elements
- **Antigravity Particle System**: Physics-based particle background that responds to mouse movement
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive Cards**: Hover effects and animations on all major components
- **Scroll Indicator**: Animated scroll prompt on hero section

### 🛠 Tech Stack
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon set

### 📦 Components
- `ParticleBackground`: Canvas-based particle system with antigravity physics
- `ThemeProvider`: Context-based theme management
- `ThemeToggle`: Floating theme switcher button

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## Theme System

The site supports both light and dark modes with smooth transitions:

- **Dark Mode**: Neon teal accent (#00f0ff) on dark background
- **Light Mode**: Blue accent (#3b82f6) on white background
- Theme preference is saved to localStorage

## Sections

1. **Hero**: Eye-catching headline with particle background
2. **Risk Visualizer**: Interactive threat level display
3. **Solution Grid**: Three-tier service offering (Watchdog, Concierge, Vault)
4. **Trust Footer**: Compliance badges (NIST, HIPAA, Nevada Gaming)

## What to Evolve Next

Consider these enhancements:

### 1. **Form Integration**
- Add functional contact/demo request form
- Integrate with email service (SendGrid, Resend)
- Form validation and success states

### 2. **Analytics & Tracking**
- Google Analytics or Plausible
- Conversion tracking
- Heatmap tools (Hotjar)

### 3. **Content Enhancements**
- Client testimonials slider
- Case study cards
- Trust badges with real certifications
- FAQ accordion section

### 4. **Performance**
- Image optimization with next/image
- Lazy loading for below-fold content
- Service worker for offline support

### 5. **Advanced Interactions**
- Smooth scroll to sections
- Intersection observer animations
- Cursor trail effects
- 3D card tilt on hover

### 6. **CMS Integration**
- Headless CMS (Sanity, Contentful)
- Dynamic content management
- Blog/resources section

### 7. **A/B Testing**
- Multiple CTA variants
- Headline testing
- Layout experiments

## License

All rights reserved © 2025 Vegas-Tier Protection
