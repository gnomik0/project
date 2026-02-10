# Modern Portfolio Website

A beautiful, modern portfolio website built with Vue 3, TypeScript, and Tailwind CSS 4. Features a responsive design, dark/light theme toggle, smooth animations, and glassmorphism effects.

## 🚀 Features

- **Vue 3 + Composition API** - Modern Vue.js with `<script setup>` syntax
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Latest version with `@tailwindcss/vite` plugin
- **Dark/Light Theme** - Persistent theme toggle with localStorage
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Scroll-triggered animations using Intersection Observer
- **Glassmorphism Effects** - Modern glass-like UI components
- **Gradient Accents** - Beautiful purple → pink → blue gradients
- **Lucide Icons** - Modern, customizable icon set

## 📦 Project Structure

```
portfolio-vue3/
├── src/
│   ├── components/
│   │   ├── Navbar.vue          # Fixed navigation with mobile menu
│   │   ├── Hero.vue            # Hero section with animated text
│   │   ├── About.vue           # About me section
│   │   ├── Skills.vue          # Skills with progress bars
│   │   ├── Projects.vue        # Project cards with hover effects
│   │   ├── Contact.vue         # Contact form
│   │   └── Footer.vue          # Footer with social links
│   ├── composables/
│   │   ├── useTheme.ts         # Theme management composable
│   │   └── useScrollAnimation.ts # Scroll animation composable
│   ├── App.vue                 # Root component
│   ├── main.ts                 # Application entry point
│   ├── style.css               # Global styles + Tailwind imports
│   └── vite-env.d.ts           # TypeScript declarations
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies

```

## 🛠️ Tech Stack

- **Vue.js 3.4** - Progressive JavaScript framework
- **TypeScript 5.4** - JavaScript with syntax for types
- **Vite 5.1** - Next generation frontend tooling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Lucide Vue Next** - Beautiful & consistent icon toolkit
- **Inter Font** - Modern, clean typography from Google Fonts

## 📋 Sections

1. **Navbar** - Fixed navigation bar with smooth scroll links and theme toggle
2. **Hero** - Eye-catching hero section with:
   - Animated typing effect
   - Call-to-action buttons
   - Social media links
   - Floating gradient backgrounds
3. **About** - Personal introduction with:
   - Feature cards
   - Profile image placeholder
   - Description text
4. **Skills** - Technical skills organized by category:
   - Frontend (Vue.js, React, TypeScript, Tailwind)
   - Backend (Node.js, Python, PostgreSQL, MongoDB)
   - Tools (Git, Docker, AWS, Figma)
   - Animated progress bars
5. **Projects** - Portfolio projects with:
   - Project cards with hover effects
   - Tags for technologies used
   - Demo and GitHub links
6. **Contact** - Contact form and information:
   - Name, email, subject, message fields
   - Contact information cards
   - Form validation
7. **Footer** - Site footer with:
   - Social media links
   - Quick navigation links
   - Contact information
   - Back to top button

## 🎨 Design Features

### Color Palette
- **Primary Gradient**: Purple (#667eea) → Pink (#764ba2)
- **Secondary Gradient**: Pink (#f093fb) → Red (#f5576c)
- **Accent Gradient**: Blue (#4facfe) → Cyan (#00f2fe)

### Animations
- Fade in/out transitions
- Slide animations from all directions
- Scale and float effects
- Gradient background animations
- Hover lift effects on cards
- Scroll-triggered reveal animations

### Glassmorphism
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders
- Modern, elegant appearance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-vue3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Customization

### Personalizing Content

1. **Hero Section** (`src/components/Hero.vue`):
   - Update the greeting text and animated roles
   - Change social media links
   - Modify call-to-action buttons

2. **About Section** (`src/components/About.vue`):
   - Replace the profile emoji with your photo
   - Update the description text
   - Customize feature cards

3. **Skills Section** (`src/components/Skills.vue`):
   - Add/remove skills
   - Adjust skill levels (0-100)
   - Change skill categories

4. **Projects Section** (`src/components/Projects.vue`):
   - Add your own projects
   - Update project descriptions, tags, and links
   - Replace emoji placeholders with project screenshots

5. **Contact Section** (`src/components/Contact.vue`):
   - Update contact information
   - Configure form submission endpoint
   - Modify email/phone/location

6. **Footer** (`src/components/Footer.vue`):
   - Update social media links
   - Change copyright information

### Theme Colors

Edit `src/style.css` to change the gradient colors:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and optimized for all screen sizes.

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's `dark:` variant and is:
- Automatically detected from system preferences
- Manually toggleable via the theme switcher
- Persisted in localStorage
- Smooth transitions between themes

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Update this section with your information:
- Website: [Your Website]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Lucide icons for the beautiful icon set
- Google Fonts for the Inter typeface

---

Made with ❤️ and Vue.js
