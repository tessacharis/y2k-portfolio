# 👾 Tessa Newbacher — Y2K Retro Portfolio & Blog

Welcome to the official repository for **Tessa Newbacher's** personal portfolio and blog. 

Tessa is a **Senior UI/UX Designer & Front-End Developer** with 10+ years of experience crafting interactive digital products. This portfolio features a high-fidelity **Y2K / retro computing aesthetic** styled with custom windows, nostalgic loading indicators, custom GSAP-driven cursor trails, and a dynamic Sanity-powered blog.

---

## 🚀 Tech Stack & Core Features

- **Frontend**: React (v19) & React Router (v7)
- **Styling**: Sass (SCSS) with custom variables & retro components
- **Animations**: GSAP (GreenSock) for high-performance physics and custom glitch typography animations
- **Interactions**: `@dnd-kit/core` for draggable desktop window components
- **Custom Cursor**: `@cursorify/react` configured to show only on desktop (automatically disabled on mobile/iPad/tablet or small viewports `< 1024px` for optimal touch experiences)
- **CMS**: Sanity (v3) for dynamic blog content administration

---

## 🎨 Interactive Art Gallery

The portfolio includes an immersive, interactive **Y2K retro-themed Art Gallery** (`/gallery` route) that showcases digital artwork inside simulated OS browser window frames. Key features:
- **WebGL Transition Shader**: Displays a custom pixel-reveal loading shader transition for all artwork, utilizing custom brand colors (neon pink, neon green, electric indigo, and cyan).
- **ScrollTrigger Animation**: Powered by GSAP and ScrollTrigger, mapping DOM scroll positions and container bounding client rectangles directly to Three.js plane meshes.
- **Dynamic Window Frames**: Custom beveled retro windows with glowing neon shadows and dynamic aspect ratios matched to each artwork's metadata.
- **Vibrant Color Grading**: Leverages Three.js color management and sRGB output encoding manually inside custom fragment shaders.

### 💡 Inspiration & Technical References
The WebGL-revealed scroll gallery was built using:
- **Inspiration Codebase**: [gsap-threejs-codrops](https://github.com/J0SUKE/gsap-threejs-codrops)
- **Tutorial & Technical Breakdown**: [Building a Scroll-Revealed WebGL Gallery with GSAP, Three.js, Astro and Barba.js](https://tympanus.net/codrops/2026/02/02/building-a-scroll-revealed-webgl-gallery-with-gsap-three-js-astro-and-barba-js/)

---

## 🛠️ Local Development & Scripts

This repository is split into two main parts:
1. **Frontend Application**: Located in the root directory.
2. **Sanity Studio CMS**: Located inside the `studio/` directory.

### 1. Frontend Setup (Root)

Run the following commands in the root directory to set up the frontend:

```bash
# Install dependencies
npm install

# Run application in development mode (http://localhost:3000)
npm start

# Run unit tests
npm test

# Build the optimized production bundle
npm run build

# Eject configuration (Not recommended)
npm run eject
```

### 2. Sanity Studio Setup (`/studio`)

Run the following commands inside the `studio/` directory to run the CMS:

```bash
# Navigate to the studio directory
cd studio

# Install studio dependencies
npm install

# Run Sanity Studio locally (http://localhost:3333)
npm run dev

# Alternative start command
npm start

# Build the studio for static hosting
npm run build

# Deploy the studio to Sanity's cloud hosting
npm run deploy

# Deploy GraphQL schema (if needed)
npm run deploy-graphql
```

---

## ✍️ Managing the Blog (Sanity CMS)

The blog runs on **Sanity.io** using the Project ID `hdprq3kf` and the `production` dataset.

### Blog Post Schema Types

The `post` document schema contains the following fields for managing articles:
- **Headline**: The article's main heading.
- **Slug**: Generated automatically from the headline for clean URLs.
- **Publish Date**: The post date shown to readers.
- **Featured Image**: High-res image with hotspot cropping enabled.
- **Summary**: A rich-text excerpt (Portable Text) shown on the blog list page.
- **Main Content**: The body text of the article with support for inline images.
- **Sidebar Content** *(Optional)*: Additional rich-text displayed in a sidebar widget.
- **Embedded HTML** *(Optional)*: Raw HTML for dynamic forms, scripts, or embeds.

### How to Log In & Author Content

For authors and content administrators:

1. **Locally (Development)**:
   - Run `npm run dev` in the `studio/` directory.
   - Open `http://localhost:3333` in your browser.
   - Log in using your registered Sanity account (Google, GitHub, or email/password).

2. **Cloud Deployed Studio**:
   - Access the deployed Studio URL (e.g. `https://tessanewbacher-blog.sanity.studio/` or your custom domain, configured after running `npm run deploy`).
   - Log in with your credentials.

3. **Managing Team Access**:
   - Go to the [Sanity Management Console](https://www.sanity.io/manage).
   - Sign in and select Project ID **`hdprq3kf`**.
   - Navigate to the **Members** tab to invite new authors or editors to collaborate.
