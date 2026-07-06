# Harshvardhan Rawat Portfolio V2 (dotrwt)

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.3.1-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.184.0-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

The second iteration (V2) of the developer, designer, and storyteller portfolio for **Harshvardhan Rawat** (publicly branded as **.rwt** or **dotrwt**). This project is a highly responsive, modern, and aesthetically premium client-side Single Page Application (SPA). It serves as an interactive showcase of professional skills, software development experience, design projects, and visual photography galleries.

Live Website: **[dotrwt.in](https://dotrwt.in/)**

---

## ✨ Key Features

- **🎮 3D Interactive Lanyard (WebGL & Physics)**:
  An immersive 3D lanyard card simulation built using `@react-three/fiber` and `@react-three/rapier`. A kinematic rigid body follows pointer coordinates during drag events, influencing jointed dynamic bodies to simulate realistic rope-swing and card physics.
  
- **🐱 Interactive SVG PixelCat**:
  An interactive SVG companion (`PixelCat.jsx`) positioned in the interface, featuring reactive animations (sleeping, sitting, meowing) triggered by mouse-hover and click states.

- **🌀 Smooth Scrolling & Custom Transitions**:
  Powered by `ReactLenis` inertial scroll engine. Router navigation triggers instant scroll resets via `ScrollToTop` to ensure seamless page transitions.

- **🎭 Preloader Sequence**:
  On initial load, `Preloader.jsx` executes a signature animation of the `.rwt` branding path while pages, models, and assets load asynchronously in the background.

- **📈 Dynamic SEO & Brand Optimization**:
  Custom `useSEO` React hook dynamically rewrites `<title>`, `<meta>` descriptions, canonical links, and Open Graph cards during navigation.
  *The global `index.html` holds a JSON-LD structured schema to prevent search engines from autocorrecting "dotrwt" to generic spelling alternatives.*

- **📧 Serverless Email Delivery**:
  Integrates directly with the **EmailJS** API client-side to handle contact form submissions securely without needing a dedicated backend server.

- **🖼️ Cloudinary CDN Media Delivery**:
  Custom CDN optimization utility automatically parses asset URLs to inject dynamic sizing, quality constraints (`f_auto,q_auto`), and layout preservation configurations.

---

## 🛠️ Tech Stack

### Core Framework & Tooling
* **React 19** (`^19.2.6`)
* **Vite** (`^5.3.1`)
* **React Router DOM** (`^6.24.0`)
* **Vercel Analytics** (`@vercel/analytics`)

### 3D Engine & Physics
* **Three.js** (`^0.184.0`)
* **React Three Fiber (R3F)** (`^9.6.1`)
* **React Three Drei** (`^10.7.7`)
* **React Three Rapier** (`^2.2.0`)
* **MeshLine** (`^3.3.1`)

### Animations & UI
* **GSAP** (`^3.15.0`) & ScrollTrigger
* **Framer Motion** (`^11.0.0`)
* **Lenis** (`^1.3.23`)
* **Tailwind CSS v4** (`^4.0.0`)
* **Lucide React** & **React Icons**

---

## 📂 Directory Structure

The project maintains a strict architectural directory design. Components are co-located by usage:

```text
Portfolio-V2/
├── public/                 # Static public assets (favicons, site manifest, static banners)
├── src/
│   ├── assets/             # Internal graphic assets (images, vectors)
│   ├── components/         # Reusable global React components
│   │   ├── borderglow/     # Border-glow layout classes
│   │   ├── lanyard/        # 3D interactive lanyard & canvas physics
│   │   ├── loader/         # Branding-path page preloader
│   │   ├── magnet/         # Hover magnetic physics wrapper
│   │   ├── PixelCat/       # Interactive SVG cat component
│   │   └── ...             # Reusable UI cards, scroll tickers, text rotators
│   ├── hooks/              # Custom hooks (useSEO.jsx, useScrollAnimation.js)
│   ├── pages/              # Lazy-loaded page layouts & local sub-components
│   │   ├── about/          # Experience, stats, and tech stack sub-modules
│   │   ├── contact/        # Local contact forms & social handles
│   │   ├── event/          # Dynamic photography event views
│   │   ├── gallery/        # Visual photography masonry layouts
│   │   ├── home/           # Dashboard hero views & sections
│   │   ├── notFound/       # 404 Route UI details
│   │   └── projects/       # Projects gallery & filters
│   ├── sections/           # Global page elements (navbar, cta, footer)
│   ├── utils/              # Client-side utility functions (cloudinary, emailjs, tailwind cn)
│   ├── App.jsx             # Core application entry, route list, and global wrappers
│   ├── index.css           # Global layout styles, design tokens, and CSS resets
│   └── main.jsx            # DOM mounting entrypoint
├── index.html              # Base HTML template containing JSON-LD schema
├── vercel.json             # Vercel deployment redirection configurations
└── vite.config.js          # Vite plugins, R3F configurations, and alias helpers
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/dotrwt/Portfolio-V2.git
cd Portfolio-V2
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory and configure your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 3. Local Development

Run the Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

This generates a static build in the `dist` directory ready for serverless hosting on Vercel, Netlify, or similar platforms.

---

## 🎨 Design System & Guidelines

- **Vanilla CSS Priority**: While Tailwind CSS v4 is used for layout utilities and spacing, major components, custom transitions, WebGL canvas wrappers, and keyframes are written in dedicated `.css` stylesheets co-located with their components.
- **Design Tokens (in `src/index.css`)**:
  - Backgrounds: `--bg-primary` (`#000000`), `--bg-secondary` (`#0a0a0a`)
  - Typography: Sans-serif (Inter), Display (Outfit), Monospace (Courier New)
  - Borders: `--border` (`#1a1a1a`), `--border-bright` (`#333333`)
  - Accent: `--accent` (`#ffffff`)
- **Coding Conventions**:
  - **Component Co-location**: Reusable components go to `src/components` only if shared by 2+ pages. Page-specific components must reside directly in the respective sub-folder under `src/pages/`.
  - **Animation Cleanup**: Always clean up GSAP ScrollTriggers and event listeners inside React's `useEffect` cleanups to prevent resource leaks.
  - **CDN Usage**: All images loaded from Cloudinary must be processed through the `optimizeCloudinaryUrl` helper to minimize client bandwidth consumption.

---

## 📁 Showcase of Projects

The portfolio showcases several notable client-side and full-stack projects:
1. **Vasundhara** — A land registry & auditing portal simplifying record management and audit reports.
2. **Zest Trading** — A full-stack paper trading platform for managing virtual portfolios.
3. **UniMap** — An interactive campus navigation system to prevent getting lost in large universities.
4. **Oak & Stay** — A property listing marketplace built using EJS, Express, and MongoDB.
5. **Cinemyth** — A themed movie-discussion platform focusing on stories, themes, and film ideas.
6. **Atal Yuva Sansad** — Informational portal for a youth parliament event in Gwalior.
7. **Hexagon Travels** — A sleek travel agency website for booking seamless journeys.

---

## 🌐 Connect with Me

* **Website**: [dotrwt.in](https://dotrwt.in/)
* **LinkedIn**: [in/Harshvardhan-Rawat](https://linkedin.com/in/Harshvardhan-Rawat)
* **GitHub**: [@dotrwt](https://github.com/dotrwt)
* **Twitter**: [@dotrwt](https://twitter.com/dotrwt)
* **Instagram**: [@rawwithharsh](https://instagram.com/rawwithharsh)
* **Pinterest**: [dotrwtt](https://pinterest.com/dotrwtt)
