# Portfolio Website - Feature Overview

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#667eea) to Pink (#764ba2)
- **Secondary**: Pink (#f093fb) to Red (#f5576c)
- **Accent**: Blue (#4facfe) to Cyan (#00f2fe)
- **Background**: Light gray (#f9fafb) / Dark gray (#111827)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900
- **Headings**: Bold with gradient text effects
- **Body**: Regular weight, optimized for readability

### Effects
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Gradients**: Animated gradient backgrounds
- **Shadows**: Elevation-based shadow system
- **Animations**: Smooth transitions and scroll-triggered animations

## 🧩 Components

### 1. Navbar (`Navbar.vue`)
- Fixed position navigation
- Responsive mobile menu
- Dark/light theme toggle
- Smooth scroll links
- Glass effect on scroll

**Features:**
- Sticky header that becomes translucent on scroll
- Hamburger menu for mobile devices
- Theme switcher with Sun/Moon icons
- Smooth navigation to sections

### 2. Hero (`Hero.vue`)
- Full-screen hero section
- Animated typing effect
- CTA buttons
- Social media links
- Floating gradient orbs

**Features:**
- Typewriter animation cycling through roles
- Gradient text effects
- Pulsing cursor animation
- Animated floating backgrounds
- Scroll down indicator

### 3. About (`About.vue`)
- Personal introduction
- Feature cards
- Profile section
- Call-to-action

**Features:**
- Rotating card effect for profile image
- 4 feature cards highlighting skills
- Animated entrance effects
- Responsive grid layout

### 4. Skills (`Skills.vue`)
- Categorized skills
- Animated progress bars
- Icon-based skill display
- Technology tags

**Features:**
- 3 skill categories (Frontend, Backend, Tools)
- Animated progress bars on scroll
- Emoji icons for visual appeal
- Percentage indicators
- Technology tag cloud

### 5. Projects (`Projects.vue`)
- Project showcase cards
- Hover effects
- Demo and GitHub links
- Technology tags

**Features:**
- 6 example projects
- Emoji-based project previews
- Hover lift effect
- Technology tag badges
- External link buttons
- GitHub link buttons

### 6. Contact (`Contact.vue`)
- Contact form
- Contact information cards
- Form validation
- Success/error messages

**Features:**
- Full contact form (name, email, subject, message)
- Contact info cards (email, phone, location)
- Form validation
- Simulated form submission
- Success notification

### 7. Footer (`Footer.vue`)
- Social media links
- Quick navigation
- Contact details
- Copyright information

**Features:**
- 3-column responsive layout
- Social media icon buttons
- Quick navigation links
- Back to top button
- Copyright with heart animation

## 🎭 Animations

### Entrance Animations
- `fadeInUp`: Elements fade in from bottom
- `fadeInDown`: Elements fade in from top
- `fadeIn`: Simple fade in
- `scaleIn`: Elements scale up while fading in
- `slideInLeft`: Elements slide in from left
- `slideInRight`: Elements slide in from right

### Continuous Animations
- `float`: Floating up and down motion
- `gradient`: Animated gradient backgrounds
- `pulse`: Pulsing effect for accent elements

### Scroll Animations
- Intersection Observer-based
- Reveal animations on scroll
- Staggered delays for grouped elements

## 🌓 Theme System

### Light Mode
- White backgrounds
- Gray text (#374151)
- Light shadows
- High contrast

### Dark Mode
- Dark gray background (#111827)
- Light gray text (#f3f4f6)
- Darker shadows
- Reduced contrast for comfort

### Implementation
- CSS class-based (`dark` class on `<html>`)
- Persistent via localStorage
- System preference detection
- Smooth transitions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Hamburger menu navigation
- Stacked layouts
- Touch-friendly buttons
- Optimized font sizes
- Reduced animations on mobile

### Tablet Optimizations
- 2-column grid layouts
- Adjusted spacing
- Hybrid navigation

### Desktop Optimizations
- Multi-column layouts
- Larger typography
- Enhanced hover effects
- Parallax-like effects

## 🔧 Technical Features

### Composables

#### `useTheme.ts`
- Dark/light theme management
- LocalStorage persistence
- System preference detection
- DOM class manipulation

#### `useScrollAnimation.ts`
- Intersection Observer setup
- Scroll-based animations
- Reveal effects
- Performance optimized

### Performance
- Vite for fast builds
- CSS-based animations (GPU accelerated)
- Lazy loading ready
- Optimized bundle size
- Tree-shaking enabled

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader friendly
- Color contrast compliance

### SEO Ready
- Semantic HTML structure
- Meta tags ready
- Open Graph ready
- Fast loading
- Mobile-friendly

## 🚀 Customization Guide

### Changing Colors
Edit `src/style.css`:
```css
:root {
  --gradient-primary: linear-gradient(135deg, #YOUR_COLOR1, #YOUR_COLOR2);
}
```

### Adding Sections
1. Create new component in `src/components/`
2. Import in `src/App.vue`
3. Add to navbar links in `src/components/Navbar.vue`

### Modifying Content
- **Hero**: Edit `src/components/Hero.vue` - change name, roles, social links
- **About**: Edit `src/components/About.vue` - update bio and features
- **Skills**: Edit `src/components/Skills.vue` - modify skill lists and levels
- **Projects**: Edit `src/components/Projects.vue` - add your actual projects
- **Contact**: Edit `src/components/Contact.vue` - update contact information

### Changing Fonts
1. Update Google Fonts link in `index.html`
2. Update font-family in `src/style.css`

## 📦 Production Build

The production build includes:
- Minified JavaScript (101 KB)
- Optimized CSS (37.77 KB)
- Gzipped assets
- Hash-based cache busting
- Tree-shaken dependencies

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers
- Progressive enhancement for older browsers

## 📊 Performance Metrics (Estimated)

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 90+
- **Bundle Size**: ~140 KB (gzipped)
