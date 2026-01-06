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

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your Resend API key and contact email

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## Email Setup (Contact Form)

The contact form uses [Resend](https://resend.com) for email delivery (free tier: 3,000 emails/month).

### Setup Steps:

1. **Create Resend Account**:
   - Go to [resend.com](https://resend.com) and sign up
   - Verify your email address

2. **Get API Key**:
   - Go to [API Keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Copy the key (starts with `re_`)

3. **Configure Environment Variables**:
   ```bash
   # Create .env.local file
   cp .env.example .env.local
   ```

   Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_actual_key_here
   CONTACT_EMAIL=your-email@example.com
   ```

4. **Deploy to Vercel**:
   - Push code to GitHub
   - In Vercel project settings → Environment Variables
   - Add `RESEND_API_KEY` and `CONTACT_EMAIL`
   - Redeploy

5. **(Optional) Use Custom Domain**:
   - In Resend dashboard → Domains → Add Domain
   - Follow DNS setup instructions
   - Update `from` field in `app/api/contact/route.ts` to use your domain

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

### 1. **Analytics & Tracking**
- Google Analytics or Plausible
- Conversion tracking
- Heatmap tools (Hotjar)

### 2. **Content Enhancements**
- Client testimonials slider
- Case study cards
- Trust badges with real certifications
- FAQ accordion section

### 3. **Performance**
- Image optimization with next/image
- Lazy loading for below-fold content
- Service worker for offline support

### 4. **Advanced Interactions**
- Smooth scroll to sections
- Intersection observer animations
- Cursor trail effects
- 3D card tilt on hover

### 5. **CMS Integration**
- Headless CMS (Sanity, Contentful)
- Dynamic content management
- Blog/resources section

### 6. **A/B Testing**
- Multiple CTA variants
- Headline testing
- Layout experiments

## License

All rights reserved © 2025 Vegas-Tier Protection
