> ⚠️ **AGENTS: READ THIS FIRST — NON-NEGOTIABLE**
>
> This file is the authoritative design contract for this project.
> Before writing, editing, or refactoring ANY code in this repository, you MUST:
>
> 1. Read this entire file before taking any action.
> 2. Follow ALL conventions in Section 5 without exception.
> 3. Match the directory structure in Section 4 — do not create new folders or 
>    files outside the defined structure without explicit human approval.
> 4. Never introduce a new dependency, library, or external service not listed 
>    in Section 3 unless explicitly told to do so.
> 5. Never change a data model (Section 6) or API contract (Section 7) without 
>    flagging it as a breaking change and asking for confirmation.
> 6. When adding a feature, follow the exact pattern described in Section 9.
> 7. If something is listed under "anti-patterns" in Section 9, never do it — 
>    regardless of how the user phrases their request.
> 8. If you are uncertain whether an action violates this design document, 
>    STOP and ask. Do not proceed with assumptions.
>
> Deviating from this document without explicit human approval is considered 
> a design violation.

---

# Design Document (DESIGN.md) — Harshvardhan Rawat Portfolio V2

## 1. Project Overview
This project is the secondary iteration (V2) of the developer and designer portfolio for **Harshvardhan Rawat** (publicly known under the brand **.rwt** or **dotrwt**). The application serves as an interactive showcase of professional skills, software development experience, design projects, and visual gallery items. It is built as a highly responsive, modern, and aesthetically premium front-end application.

### Core Problem Solved
The portfolio establishes a solid, search-engine-optimized branding presence for "dotrwt" to prevent search engine confusion (e.g., Google autocorrecting "dotrwt" to "soret"). In addition to search visibility, it delivers an immersive, interactive client-side experience using 3D physics simulation (an interactive lanyard card) and micro-animations to demonstrate high-end engineering capabilities directly to prospective clients and recruiters.

### Target Audience
- **Tech Recruiters & Engineering Managers** seeking frontend, full-stack, and creative development skills.
- **Freelance Clients** looking for bespoke, high-performance web applications and UI designs.
- **The Design Community** interested in interactive WebGL experiments and modern CSS techniques.

---

## 2. Architecture Overview
The portfolio is designed as a client-side Single Page Application (SPA) built on React and Vite. It is statically generated and hosted (optimized for platforms like Vercel). 

### System Design Structure

```
                         +-------------------+
                         |      App.jsx      |  <-- Preloader, SmoothScroll (Lenis),
                         +---------+---------+      PixelCat, Vercel Analytics
                                   |
                     +-------------+-------------+
                     |    React Router (Routes)  |  <-- Lazy Loaded Page Components
                     +-------------+-------------+
                                   |
         +-------------------------+-------------------------+
         |                         |                         |
+--------v--------+       +--------v--------+       +--------v--------+
|    Home.jsx     |       | AboutPage.jsx   |       | ProjectsPage.jsx| ... (other pages)
+--------+--------+       +--------+--------+       +--------+--------+
         |                         |                         |
         +-------------------------+-------------------------+
                                   |
                    +--------------v--------------+
                    |      Common Layout / Assets |  <-- GridBackground, Navbar, CTA, Footer
                    +-----------------------------+
```

### Component and Data Flow
1. **Preloader Stage**: On initial load, `Preloader.jsx` executes a signature animation of the `.rwt` branding path. During this time, standard pages and asset bundles (such as 3D models) load asynchronously in the background.
2. **Smooth Scrolling**: The whole application tree is wrapped in `SmoothScroll.jsx`, which hooks up the `ReactLenis` inertial scroll engine. Upon routing changes, `ScrollToTop` resets Lenis's scroll position instantly.
3. **Lazy Page Components**: Pages (`Home`, `AboutPage`, `GalleryPage`, `ContactPage`, `ProjectsPage`, `EventPage`) are lazy-loaded with code-splitting to minimize the initial JS bundle. They utilize a custom `useSEO` hook to dynamically rewrite `<title>`, `<meta>` descriptors, canonical URLs, and Open Graph attributes based on navigation.
4. **WebGL Canvas Interactions**: Interactive elements, such as `Lanyard.jsx`, load Three.js, R3F, and Rapier physics inside a localized canvas wrapper. A kinematic rigid body follows pointer coordinates during a drag event, influencing jointed dynamic bodies to simulate realistic string and card movement.

---

## 3. Tech Stack
The project enforces strict versioning constraints for dependencies to prevent runtime errors and compilation failures.

### Core Stack
- **Language**: JavaScript (ESM, ES6+)
- **Runtime Environment**: Node.js (Tooling & bundling environment)
- **Framework**: React `^19.2.6` (leveraging Concurrent Mode features and React Server/Client compatibility)
- **Bundler / Build Tool**: Vite `^5.3.1`

### Libraries & Frameworks
- **Routing**: `react-router-dom` `^6.24.0` (Client-side browser routing)
- **Styling**:
  - Tailwind CSS `^4.0.0` (via `@tailwindcss/vite` configuration)
  - CSS Variables and Vanilla CSS files for layouts, grids, page transitions, and animations.
- **3D Engine & Physics**:
  - `three` `^0.184.0` (Core WebGL renderer)
  - `@react-three/fiber` `^9.6.1` (React wrapper for Three.js rendering loops)
  - `@react-three/drei` `^10.7.7` (Helper hooks, asset loaders, and lighting models)
  - `@react-three/rapier` `^2.2.0` (Real-time rigid body physics engine)
  - `meshline` `^3.3.1` (Ribbon geometry representing the lanyard band string)
- **Animation Frameworks**:
  - `framer-motion` `^11.0.0` (SVG paths, entry transitions, and lightweight micro-interactions)
  - `gsap` `^3.15.0` (ScrollTrigger sequences and high-performance DOM animations)
  - `lenis` `^1.3.23` (Inertial scroll physics normalization)
- **Icons**:
  - `lucide-react` `^0.400.0`
  - `react-icons` `^5.6.0`

### External Services & Deployments
- **Email Delivery**: `@emailjs/browser` `^4.4.1` (Direct SMTP transaction wrapper for the contact form)
- **Asset Delivery**: Cloudinary CDN (for dynamic optimization and caching of static graphic assets)
- **Analytics**: Vercel Analytics (`@vercel/analytics` `^2.0.1`)
- **Hosting**: Vercel Serverless Hosting

---

## 4. Directory Structure
All codebase files must adhere to the structural constraints below. Do not create directories at the top level or mix page-specific code inside global folders.

```
Portfolio-V2/
├── public/                 # Static public assets (favicons, site manifest, static banners)
├── src/
│   ├── assets/             # Internal graphic assets (images, vectors)
│   ├── components/         # Reusable global React components
│   │   ├── borderglow/     # Component for glowing element borders (borderglow.jsx, borderglow.css)
│   │   ├── lanyard/        # 3D interactive lanyard (Lanyard.jsx, card.glb, lanyard.css)
│   │   ├── loader/         # Page preloader component (Preloader.jsx, preloader.css)
│   │   ├── magnet/         # Hover magnetic physics wrapper (magnet.jsx)
│   │   ├── PixelCat/       # Interactive SVG cat component (PixelCat.jsx, pixelCat.css)
│   │   ├── GalleryCard.jsx
│   │   ├── GridBackground.jsx
│   │   ├── HomeProjectCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── RotatingText.jsx
│   │   ├── ScrollTicker.jsx
│   │   ├── SectionLabel.jsx
│   │   └── SmoothScroll.jsx
│   ├── hooks/              # Custom reusable hooks (useSEO.jsx, useScrollAnimation.js)
│   ├── pages/              # View pages containing localized section components
│   │   ├── about/          # About page + local modules (experience.jsx, stack.jsx, stats.jsx, etc.)
│   │   ├── contact/        # Contact page + localized contact form details
│   │   ├── event/          # Dynamic photography event page (eventPage.jsx, hero.jsx, preview.jsx, fullAlbum.jsx, event.css)
│   │   ├── gallery/        # Visual photography grid view details
│   │   ├── home/           # Dashboard home components (Hero.jsx, project.jsx, home.css)
│   │   ├── notFound/       # 404 Route UI details (notfoundPage.jsx, oops.css)
│   │   └── projects/       # Projects list layout details
│   ├── sections/           # Global page elements (cta.jsx, footer.jsx, navbar.jsx)
│   ├── utils/              # Client-side utility functions (cloudinary.js, cn.js, emailjs.js)
│   ├── App.jsx             # Application core component, routes list, and global wrappers
│   ├── index.css           # Global layout styles, design tokens, and CSS resets
│   └── main.jsx            # DOM mounting entrypoint
├── index.html              # Entry HTML Document (holds JSON-LD search schema)
├── package.json            # Script commands and dependency versions
├── vercel.json             # Vercel deployment redirection configs
└── vite.config.js          # Vite plugins, R3F asset inclusions, and build configurations
```

---

## 5. Design Principles & Conventions

### Naming Conventions
1. **React Components (Global/Reusable)**: Must use **PascalCase** for both filenames and component functions (e.g., `ProjectCard.jsx`, `Lanyard.jsx`).
2. **Page Entrypoints**: Must use **PascalCase** (e.g., `AboutPage.jsx`, `ProjectsPage.jsx`, `ContactPage.jsx`), with the exception of the main home page which is titled `Home.jsx`.
3. **Page-Specific Sub-components**: Must be written in **lowercase** (e.g., `src/pages/about/experience.jsx`, `src/pages/about/stack.jsx`, `src/pages/contact/social.jsx`).
4. **Stylesheets**: Must be written in **lowercase** or camelCase representing their respective component directory names (e.g., `about.css`, `lanyard.css`, `pixelCat.css`).
5. **Custom Hooks**: Must use **camelCase** prefixed with `use` (e.g., `useSEO.jsx`, `useScrollAnimation.js`).
6. **Utility Modules**: Must use **camelCase** (e.g., `cloudinary.js`, `cn.js`, `emailjs.js`).
7. **CSS Class Selectors**: Must use **kebab-case** (e.g., `.pixel-cat-container`, `.hero-title-line`).
8. **Environment Variables**: Must use **UPPER_SNAKE_CASE** prefixed with `VITE_` (e.g., `VITE_EMAILJS_SERVICE_ID`).

### Styling Standards
- **Vanilla CSS Priority**: Keep major page layouts, custom transformations, keyframes, scrollbar properties, and complex alignments in dedicated CSS stylesheets rather than injecting excessively long Tailwind classes into JSX.
- **Design Tokens**: Standardize colors, transitions, and typography elements using custom CSS properties defined in `src/index.css`:
  - Backgrounds: `--bg-primary` (`#000000`), `--bg-secondary` (`#0a0a0a`)
  - Typography: Sans-serif: `var(--font-sans)` (Inter), Display: `var(--font-display)` (Outfit), Monospace: `var(--font-mono)` (Courier New)
  - Borders: `--border` (`#1a1a1a`), `--border-bright` (`#333333`)
  - Accent: `--accent` (`#ffffff`)

### Coding Conventions
- **Component Co-location**: Do not put component code in the global `src/components` directory unless it is used across at least two distinct pages. If a component is specific to a page (e.g., the stack display on the About page), it must remain inside that page's subdirectory (`src/pages/about/stack.jsx`).
- **Clean Animations**:
  - Always clean up event listeners, scroll triggers, and active intervals when unmounting components using the React standard `useEffect` cleanup return.
  - Limit the frequency of physics updates and Three.js canvas calculations on mobile devices by adjusting time steps or skipping heavy features like high-contrast clearcoat meshes dynamically.

### SEO & Search Identity
- Every single page component must execute the `useSEO` hook immediately within its body to maintain document titles, Open Graph (OG) descriptions, canonical links, and social metadata dynamically during routing transitions.
- The global index HTML structure (`index.html`) must preserve the JSON-LD `@graph` structured schema. This prevents Google and other engines from autocorrecting "dotrwt" to generic spelling alternatives.

---

## 6. Data Models
This project does not connect directly to a database. All application data is declared as static front-end configurations.

### Client-Side Structures & Content Lists
- **Focus Areas**: Array of creative developer specializations (`digital stories`, `software interfaces`, `interactive experiences`, `cinematic interfaces`) rotating in the Hero section.
- **Experience Timeline**: Collection of career events mapped in `experience.jsx`.
- **Project Lists**: Array collections containing metadata (titles, tags, descriptions, project links, Cloudinary media URLs).
- **Validation Constraints**: 
  - The contact form (`contactForm.jsx`) requires non-empty strings for `user_name`, `user_email`, and `message` before invoking the submission helper.
  - Cloudinary assets are filtered via the `optimizeCloudinaryUrl` helper, which parses URLs and injects responsive sizing configurations to reduce layout shift and network load.

---

## 7. API / Interface Design

### EmailJS Client Integration
- Integrates with the EmailJS API using `@emailjs/browser` to send email notifications directly.
- **Configuration variables**:
  - `VITE_EMAILJS_SERVICE_ID`: The targeted service endpoint.
  - `VITE_EMAILJS_TEMPLATE_ID`: The design layout template identifier.
  - `VITE_EMAILJS_PUBLIC_KEY`: Authentication key for client transactions.
- **Method Signature**:
  ```javascript
  export const sendEmail = async (templateParams) => {
    // Returns: { success: boolean, message: string, response?: object, error?: object }
  }
  ```

### Cloudinary CDN Utility
- Modifies static resource URLs to utilize Cloudinary's real-time image optimization.
- **Method Signature**:
  ```javascript
  export const optimizeCloudinaryUrl = (url, width = 800) => {
    // Injects '/f_auto,q_auto,w_{width},c_limit/' parameters to optimize image delivery.
  }
  ```

---

## 8. State Management
The project prefers localized state variables over complex global stores (like Redux or Zustand) to maintain high performance and low bundle sizes.

### Local Component State
- **Mobile Menu Visibility**: Handled locally in `Navbar.jsx` with an `isOpen` boolean, which controls layout state and temporarily locks body overflow scrolling.
- **Interactive UI Hover States**: Tracked using React reference states (`hovered`, `dragged`, `clickCount`) in interaction hubs like `Lanyard.jsx` and `magnet.jsx`.
- **PixelCat States**: Managed with states (`sleeping`, `sitting`, `meowing`) triggering corresponding SVG frames and speech bubble animations.

### Routing & Navigation State
- Handled by `react-router-dom` using declarative paths.
- Smooth inertial scroll acceleration is updated continuously by `ReactLenis` and reset globally on path transition via `ScrollToTop`.

---

## 9. Scaling & Extension Guidelines

### Feature Implementation Flow
Follow this exact sequence when introducing new pages or interactive segments:

```
Step 1: Create local directory under src/pages/ or src/components/
  │
  ├──► Step 2: Define specific page components (lowercase) and main page (PascalCase)
  │
  ├──► Step 3: Write page stylesheet (.css) in same folder; import inside components
  │
  ├──► Step 4: Inject hook useSEO(...) immediately in page root with description
  │
  └──► Step 5: Open src/App.jsx; import page via lazy() and insert Route element
```

### Dependency Restrictions
- **No Direct DOM Mutations**: Do not manipulate the DOM outside of React lifecycle hooks unless working within WebGL canvas cycles (`useFrame` loops in `@react-three/fiber`).
- **No Redundant Packages**: Do not add extra styling or utility libraries (e.g. lodash, classnames) when simple JavaScript functions (like `cn.js`) and vanilla CSS can accomplish the same task.

### Explicit Anti-Patterns Banned
- 🚫 **Do Not Import Styles Globally**: Never import sub-component or page stylesheets (`about.css`, `home.css`) directly in `main.jsx` or `App.jsx`. They must be imported only by their corresponding page entry files.
- 🚫 **No Inline Styling for Grids or Layouts**: Do not apply complex inline style elements (e.g., `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>`). Layout definitions must remain in Tailwind classes or dedicated `.css` stylesheet classes.
- 🚫 **No Missing useSEO hooks**: Never add a page component in the routing file without declaring a detailed title and description inside `useSEO` within that page.
- 🚫 **No Raw Cloudinary URLs**: Never load images from Cloudinary directly without parsing them through `optimizeCloudinaryUrl` to prevent bandwidth waste.

---

## 10. Testing Strategy
Currently, there is no automated testing suite (Vitest, Jest, Playwright, or Cypress) configured in this repository.

### Manual Verification Checklist
1. **Local Server Verification**: Execute `npm run dev` to verify features locally.
2. **Page Transitions**: Check that routing updates the URL, shifts the screen content, calls `ScrollToTop` instantly, and triggers `useSEO` metadata changes in the document header.
3. **Interactive Components**: Verify the 3D physics rendering of `Lanyard.jsx` (click behaviors, grabbing, dragging) and the states of `PixelCat.jsx` (hover to sit, click to meow).
4. **Form Integration**: Submit test transactions in the contact form, ensuring parameters are validated before dispatching requests to the EmailJS service.
5. **Responsive Validation**: Test responsive styling on viewport sizes down to 320px, ensuring mobile layouts stack properly.
6. **Production Build Validation**: Run `npm run build` locally before deploying to production to verify there are no compilation errors or bundle issues.

---

## 11. Known Limitations & Technical Debt
- **Missing Automated Test Coverage**: The project relies entirely on manual verification. As new interactive components are added, regression testing must be performed manually.
- **ThreeJS / Canvas Bundle Size**: Loading heavy WebGL renderers inside client bundles is a known performance cost. While lazy loading mitigates initial payload sizes, pages containing the lanyard component will experience a minor delay on slow network connections.
- **Capitalization Inconsistencies**: There are legacy inconsistencies in filenames (e.g., `notfoundPage.jsx` uses a lowercase 'f', and `magnet.jsx` is a lowercase component). These must be kept as-is to preserve existing import linkages across components.

---

## 12. Decision Log

### Tailwind CSS v4 and Custom CSS Hybrid
- **Context**: Choosing a styling pattern for high-fidelity custom visual animations.
- **Decision**: Combine Tailwind v4 classes for minor helper properties and utility spacing, while utilizing traditional scoped CSS sheets for layout grids, position controls, and custom keyframes.
- **Rationale**: While pure Tailwind is convenient, it can lead to cluttered JSX markup. Dedicated CSS stylesheets keep code readable and make it easier to declare custom timing functions and keyframe chains.

### Client-Side Email Delivery (EmailJS)
- **Context**: Selecting a form submission processing approach.
- **Decision**: Used `emailjs-com` directly on the client side.
- **Rationale**: Replaces the need to host and maintain a separate Node.js server or cloud function for form delivery, keeping the project serverless and easy to deploy on static hosting.

### Rapier Physics for 3D Lanyard
- **Context**: Creating a dynamic lanyard simulation.
- **Decision**: Implemented `@react-three/rapier` to simulate physical rigid bodies, joint constraints, and string ropes.
- **Rationale**: Other options (such as pre-rendered video, standard Canvas, or CSS 3D transforms) lack realistic swinging and inertia when the cursor interacts with the card. Using Rapier provides a high-fidelity experience that showcases advanced frontend engineering.
