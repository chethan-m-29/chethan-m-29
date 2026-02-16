# 🎨 Professional Portfolio — InBio Style

A premium, dark-themed portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Features a clean neumorphic design, smooth scroll animations, and an infinite tech stack marquee.

---

## 🚀 Live Demo

**[View Live Site →](https://your-portfolio-url.vercel.app)**

---

## ✨ Features

- **Dark Neumorphic Theme** — Soft shadows and gradients for a polished, modern look
- **Infinite Logo Carousel** — Continuously sliding tech stack logos
- **Scroll Animations** — Smooth fade-in and slide-up effects powered by Framer Motion
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Fast & Lightweight** — Built with Vite for blazing-fast performance

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Scroll & interaction animations |
| **Lucide React** | Icon library |

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── InBioHero.jsx        # Hero section
│   │   ├── Features.jsx         # Services/features
│   │   ├── PortfolioGrid.jsx    # Projects showcase
│   │   ├── Skills.jsx           # Tech stack marquee
│   │   └── Resume.jsx           # Experience & education
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles & theme
│   └── main.jsx                 # Entry point
├── public/
│   ├── portrait.jpg             # Profile image
│   └── favicon.svg              # Site icon
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Design Philosophy

The portfolio follows the **InBio Professional** design system:

- **Dark Background:** `#212428` for a sophisticated, modern vibe
- **Accent Color:** Deep pink (`#ff014f`) for CTAs and highlights
- **Neumorphic Cards:** Soft shadows for depth and elegance
- **Typography:** Inter for body, Montserrat for headings

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/chethan-m-29/chethan-m-29.git
   cd chethan-m-29/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🎨 Customization Guide

### Update Personal Info

**`src/components/InBioHero.jsx`**
- Change name, title, and bio
- Update social media links

**`src/components/Resume.jsx`**
- Add your experience and education

**`src/components/PortfolioGrid.jsx`**
- Replace project cards with your own work

### Update Portrait

Replace `public/portrait.jpg` with your own image (recommended: 800x1000px)

### Change Theme Colors

**`src/index.css`**
```css
@theme {
  --color-accent: #ff014f;        /* Change accent color */
  --color-background: #212428;    /* Change background */
  --color-foreground: #c4cfde;    /* Change text color */
}
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite configuration
5. Deploy! 🚀

### Deploy to Netlify

```bash
npm run build
```

Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

---

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it and use it as a template for your own!

---

## 📄 License

MIT License — feel free to use this portfolio as inspiration for your own projects.

---

## 🔗 Connect

- **GitHub:** [@chethan-m-29](https://github.com/chethan-m-29)
- **LinkedIn:** [Connect with me](https://linkedin.com)
- **Portfolio:** [chethan.vercel.app](https://your-portfolio-url.vercel.app)

---

**Made with ❤️ and lots of ☕ by Chethan M**
