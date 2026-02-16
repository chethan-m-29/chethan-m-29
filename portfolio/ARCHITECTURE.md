# 🏗️ Portfolio Architecture

## System Overview

This portfolio is a **single-page application (SPA)** built with modern web technologies, emphasizing performance, accessibility, and visual polish.

---

## 🎨 Design System

### Theme Configuration

The design follows a **dark neumorphic** aesthetic with carefully crafted shadow systems:

```css
/* Core Theme Tokens */
--color-background: #212428   /* Main dark background */
--color-foreground: #c4cfde   /* Body text */
--color-accent: #ff014f       /* CTAs and highlights */
--color-card-bg: #212428      /* Card backgrounds */
```

### Shadow System

**Neumorphic Shadows** create depth through dual-tone shadows:

```css
.inbio-shadow {
  box-shadow: 
    10px 10px 19px #1c1e22,    /* Dark shadow */
    -10px -10px 19px #262a2e;  /* Light shadow */
}
```

This creates a **"soft embossed"** effect that makes cards appear to float slightly above the background.

---

## 🧩 Component Architecture

### Component Hierarchy

```
App.jsx
├── Navbar.jsx              (Fixed navigation)
├── InBioHero.jsx           (Hero section with portrait)
├── Features.jsx            (Services/skills cards)
├── PortfolioGrid.jsx       (Project showcase)
├── Skills.jsx              (Infinite logo marquee)
├── Resume.jsx              (Experience timeline)
└── Footer                  (Contact & social links)
```

### Key Components

#### 1. **InBioHero.jsx**
- Two-column responsive layout
- Left: Text content with social links and skill badges
- Right: Portrait with background shadow layer
- Uses `flexbox` for responsive stacking on mobile

#### 2. **Skills.jsx** (Infinite Marquee)
- Uses **Framer Motion** `animate` with infinite loop
- Duplicates skill array for seamless scrolling
- Linear animation with 25s duration

```jsx
<motion.div
  animate={{ x: [0, -1200] }}
  transition={{
    repeat: Infinity,
    duration: 25,
    ease: "linear"
  }}
>
  {duplicatedSkills.map(...)}
</motion.div>
```

#### 3. **Features.jsx** (Staggered Cards)
- Uses **Framer Motion** variants for staggered animations
- `whileInView` triggers animation on scroll
- 0.15s stagger delay between cards

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
```

---

## 🎭 Animation Strategy

### Scroll Animations

All major sections use **Framer Motion** with `whileInView`:

- **Viewport trigger:** Element animates when 100px from viewport
- **Once:** Animations only play on first view (no re-triggers)
- **Stagger:** Children animate sequentially for visual flow

### Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}
```

Enables smooth scrolling for anchor links (Resume, Contact).

---

## 📦 Build Configuration

### Vite Setup

```js
// vite.config.js
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [
    react(),           // React with SWC for faster builds
    tailwindcss()      // Tailwind CSS v4 integration
  ]
}
```

### Tailwind CSS v4

Uses **`@import "tailwindcss"`** in `index.css` with custom theme tokens via `@theme` directive.

---

## 🚀 Performance Optimizations

1. **Vite SWC Plugin** — Faster transpilation than Babel
2. **Lazy Loading** — Images use native `loading="lazy"` (if added)
3. **CSS Minification** — Tailwind purges unused styles in production
4. **Framer Motion** — Hardware-accelerated animations with `transform` and `opacity`

---

## 🎯 Accessibility Considerations

- **Semantic HTML** — Proper use of `<section>`, `<nav>`, `<footer>`
- **ARIA Labels** — Links have descriptive text
- **Keyboard Navigation** — All interactive elements are keyboard-accessible
- **Color Contrast** — Text meets WCAG AA standards (foreground: `#c4cfde` on background: `#212428`)

---

## 📱 Responsive Design

### Breakpoints

| Screen Size | Breakpoint | Layout Changes |
|-------------|-----------|----------------|
| Mobile | `< 768px` | Single column, centered text |
| Tablet | `768px - 1024px` | 2-column grid for projects |
| Desktop | `> 1024px` | Full 3-column grid, side-by-side hero |

### Responsive Implementation

```jsx
className="text-4xl md:text-5xl lg:text-7xl"  // Progressive scaling
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  // Adaptive grid
```

---

## 🔄 State Management

Currently **stateless** — no client-side state management needed. All content is static and defined in components.

**Future Enhancement:** Add CMS integration (Sanity, Contentful) for dynamic content management.

---

## 🗂️ File Organization Strategy

```
src/
├── components/          # All UI components
├── App.jsx             # Root component
├── index.css           # Global styles + theme
└── main.jsx            # React entry point
```

**Rationale:**
- **Flat structure** for simplicity (no nested folders)
- **Component co-location** — All components in one directory
- **Global styles centralized** — Single CSS file for theme

---

## 🧪 Testing Strategy (Future)

**Recommended additions:**
- **Vitest** — Unit tests for components
- **Playwright** — E2E tests for user flows
- **Lighthouse CI** — Performance regression testing

---

## 🔐 Security Considerations

- **No API keys** — All content is static
- **External Links** — Use `rel="noopener noreferrer"` for safety
- **Dependency Scanning** — Run `npm audit` regularly

---

## 📈 Future Enhancements

1. **Blog Section** — Add MDX support for technical writing
2. **Dark/Light Toggle** — User preference for theme
3. **Analytics** — Plausible or Google Analytics integration
4. **Contact Form** — Email integration with Formspree or EmailJS
5. **CMS Integration** — Sanity or Strapi for content management

---

**Last Updated:** February 2026  
**Maintainer:** Chethan M
