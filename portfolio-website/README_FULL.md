# 🚀 Raj Kumar's Portfolio Website

A stunning, fully-functional portfolio website featuring 3D animations, smooth scrolling, and a beautiful dark theme. Built with React, GSAP, and Bootstrap.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd portfolio-website

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

The website will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` folder.

## Features

### 🏠 Home Page
- Eye-catching hero section with gradient background
- 3D rotating cube showing your tech stack
- Call-to-action buttons with smooth animations
- Scroll indicator with animation

### 👤 About Page
- Personal introduction with profile image
- Timeline of your journey in tech
- Animated milestone markers

### 💼 Projects Page
- Grid layout of 6 featured projects
- Project cards with tech stack badges
- Hover effects and smooth animations
- Pre-loaded with your projects:
  - Women Safety App
  - Portfolio Website
  - Food Reel
  - Weather App (Flutter)
  - E-Commerce Platform
  - Task Management Tool

### 🛠️ Skills Page
- Technical skills organized by category:
  - Frontend (React, JavaScript, HTML/CSS, Bootstrap)
  - Backend (Node.js, Express, MongoDB, Firebase)
  - Other Languages (C, Python, Flutter, SQL)
  - Tools (Git, Figma, Postman, GSAP)
- Animated progress bars
- Proficiency levels displayed

### 📝 Blog Page
- Blog article grid
- Category-based color coding
- Newsletter subscription form
- Read time estimates

### 📧 Contact Page
- Contact information cards
- Contact form (email, subject, message)
- Social media links
- Success message on form submission

### 🧭 Navigation
- Sticky navbar
- Smooth navigation between pages
- Mobile responsive hamburger menu
- Active link indicators

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navigation bar component
│   │   ├── Navigation.css
│   │   ├── Footer.jsx          # Footer component
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── About.jsx           # About page
│   │   ├── Projects.jsx        # Projects page
│   │   ├── Skills.jsx          # Skills page
│   │   ├── Blog.jsx            # Blog page
│   │   └── Contact.jsx         # Contact page
│   ├── styles/
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Blog.css
│   │   └── Contact.css
│   ├── App.jsx                 # Main app component with router
│   ├── App.css                 # App-level styles
│   ├── global.css              # Global CSS fixes
│   ├── index.css               # Global styles and variables
│   ├── main.jsx                # App entry point
│   └── assets/                 # Images and assets
├── public/                     # Static files
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Technologies

### Frontend Framework
- **React 19** - UI library
- **React Router DOM** - Client-side routing

### Build Tool
- **Vite** - Next generation frontend tooling

### Animation
- **GSAP** - Robust animation library
- **ScrollTrigger** - Scroll-based animations

### Styling
- **Bootstrap 5** - Responsive CSS framework
- **CSS3** - Custom styling and animations

### Development
- **ESLint** - Code quality
- **Vite Preview** - Production preview

## Customization

### Update Personal Information

1. **Home Page** (`src/pages/Home.jsx`)
   - Change "Raj Kumar" to your name
   - Update subtitle
   - Modify cube faces with your skills

2. **About Page** (`src/pages/About.jsx`)
   - Update bio and description
   - Add your profile image
   - Customize timeline milestones

3. **Contact Page** (`src/pages/Contact.jsx`)
   - Update email address
   - Add phone number
   - Update LinkedIn profile URL
   - Modify location

4. **Footer** (`src/components/Footer.jsx`)
   - Update contact information
   - Add social media links

### Customize Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;      /* Main blue */
  --secondary-color: #764ba2;    /* Purple */
  --dark-bg: #0f0f23;            /* Dark background */
  --light-text: #ffffff;         /* Light text */
  --accent-color: #f093fb;       /* Pink accent */
  --card-bg: #1a1a3e;            /* Card background */
  --border-color: #2d2d5f;       /* Border color */
}
```

### Add Your Projects

Edit `src/pages/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#667eea'
  },
  // Add more projects...
]
```

### Update Skills

Edit `src/pages/Skills.jsx` to modify skill categories and proficiency levels.

### Add Blog Posts

Edit `src/pages/Blog.jsx` to add new blog articles.

## Troubleshooting

### Issue: Blank white screen

**Solution:**
1. Check browser console for errors (F12)
2. Ensure Bootstrap CSS is imported in `App.jsx`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Restart dev server: `npm run dev`

### Issue: Navigation not showing

**Solution:**
1. Verify `Navigation.css` is imported in `Navigation.jsx`
2. Check if Bootstrap classes are properly applied
3. Ensure z-index is high enough (z-index: 1050)

### Issue: Animations not working

**Solution:**
1. Verify GSAP is installed: `npm install gsap`
2. Check if ScrollTrigger is registered: `gsap.registerPlugin(ScrollTrigger)`
3. Ensure DOM elements exist before animation trigger

### Issue: Images not loading

**Solution:**
1. Place images in `src/assets/` folder
2. Import and reference correctly: `import img from '../assets/image.jpg'`
3. Or use absolute URLs in `<img>` tags

### Issue: Responsive design broken on mobile

**Solution:**
1. Check viewport meta tag in `index.html`
2. Verify media queries in CSS files
3. Test in browser DevTools (F12 → Toggle device toolbar)

### Issue: CSS not updating

**Solution:**
1. Clear `.next` or `dist` folder
2. Hard refresh browser (Ctrl+Shift+R)
3. Restart development server

## Performance Optimization

- Images are lazy-loaded with GSAP ScrollTrigger
- CSS is minified in production build
- React is optimized with React 19
- Code splitting is handled by Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

This project is open source and available for personal and commercial use.

## Contact

**Raj Kumar**
- Email: rajkumar@example.com
- Phone: +91 (98765) 43210
- LinkedIn: linkedin.com/in/rajkumar

---

**Happy Coding! 🎉**

For more information, visit the live portfolio or contact the developer.
