# Indra Singh Jeena — Full-Stack Developer Portfolio

A world-class, premium, modern, and recruiter-focused portfolio website for **Indra Singh Jeena**, showcasing full-stack MERN development expertise, Java & Data Structures & Algorithms problem solving, and cloud computing fundamentals (AWS Educate).

![Portfolio Banner](public/favicon.svg)

---

## 🌐 Live Website & Links

- **Live Deployed Portfolio**: [https://indrasingh29.github.io/indra-portfolio/](https://indrasingh29.github.io/indra-portfolio/)
- **GitHub Repository**: [https://github.com/indrasingh29/indra-portfolio](https://github.com/indrasingh29/indra-portfolio)
- **LinkedIn Profile**: [linkedin.com/in/indra-singh-jeena-1a9542216](https://www.linkedin.com/in/indra-singh-jeena-1a9542216)
- **Direct Email**: [indrasinghjeena@gmail.com](mailto:indrasinghjeena@gmail.com)

---

## ⚡ Tech Stack & Architecture

- **Frontend Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom dark luxury glassmorphism
- **Animations & Motion**: [Framer Motion](https://motion.dev/) (interactive cards, scroll triggers, exit transitions)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand components
- **Effects**: HTML5 Canvas particle constellation, desktop custom cursor with spring lag, 3D perspective tilt cards, celebratory confetti (`canvas-confetti`)
- **API Integration**: Dynamic GitHub REST API integration (`/users/indrasingh29` & `/repos`) with local caching and offline fallback
- **CI/CD**: GitHub Actions automated pipeline deploying to GitHub Pages + Vercel-ready config

---

## 📁 Project Structure

```
indra-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD pipeline
├── public/
│   ├── assets/
│   │   └── Indra_Singh_Jeena_Resume.pdf  # Downloadable ATS resume
│   └── favicon.svg             # Glowing geometric monogram favicon
├── src/
│   ├── App.jsx                 # App root orchestrator
│   ├── main.jsx
│   ├── index.css               # Tailwind directives, custom scrollbars, glass utilities
│   ├── data/
│   │   └── portfolioData.js    # Single Source of Truth (All profile info, projects, skills)
│   ├── hooks/
│   │   ├── useGitHubData.js    # Live GitHub repos & profile fetcher with caching
│   │   ├── useMousePosition.js # Ambient glow cursor follower
│   │   └── useReducedMotion.js # Accessibility detection
│   └── components/
│       ├── layout/
│       │   ├── Navbar.jsx      # Glassmorphic header with active status & resume CTA
│       │   ├── Footer.jsx      # Dynamic year, quick links, back-to-top
│       │   └── Background.jsx  # Interactive canvas particles & ambient mesh glow
│       ├── ui/
│       │   ├── Preloader.jsx   # Initial monogram entrance sequence
│       │   ├── CustomCursor.jsx# Spring follower on desktop
│       │   ├── CardTilt.jsx    # 3D gyro/mouse perspective tilt wrapper
│       │   ├── SectionHeading.jsx
│       │   └── SocialIcons.jsx # Self-contained GitHub and LinkedIn SVGs
│       └── sections/
│           ├── Hero.jsx        # Headline, dynamic role rotator, interactive code terminal
│           ├── About.jsx       # Authentic B.Tech CSE narrative & core engineering pillars
│           ├── Skills.jsx      # Categorized skill pills with interactive filtering
│           ├── Projects.jsx    # Featured MERN projects with tilt mockups
│           ├── ProjectModal.jsx# Recruiter deep-dive architecture modal
│           ├── Certifications.jsx # AWS Educate Cloud 101 & Java DSA tracks
│           ├── Timeline.jsx    # Chronological milestones & learning progression
│           ├── GitHubSection.jsx # Live repository cards with stars & languages
│           └── Contact.jsx     # Recruiter contact card & validated email form
├── index.html                  # SEO, OpenGraph tags, Google Fonts
├── tailwind.config.js          # Theme palette, glows, animations
├── vite.config.js              # Base path configuration
├── vercel.json                 # Vercel deployment & rewrite rules
└── package.json
```

---

## 🛠️ How to Customize Your Portfolio

All your personal details, links, project descriptions, skills, and certifications are centralized in **one single file**:

👉 `src/data/portfolioData.js`

### 1. Update Profile or Contact Info
Open `src/data/portfolioData.js` and modify the `personalInfo` object:
```javascript
export const personalInfo = {
  name: "Indra Singh Jeena",
  contact: {
    email: "indrasinghjeena@gmail.com",
    github: "https://github.com/indrasingh29",
    linkedin: "https://www.linkedin.com/in/indra-singh-jeena-1a9542216",
    resumeUrl: "./assets/Indra_Singh_Jeena_Resume.pdf",
  },
  // ...
};
```

### 2. Replace the Resume PDF
Replace `public/assets/Indra_Singh_Jeena_Resume.pdf` with your updated resume file. Keep the filename the same, or update the path in `portfolioData.js`.

### 3. Add or Edit Projects
Add entries into `projectsData` in `src/data/portfolioData.js`. The cards and deep-dive modals will automatically render your new project!

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/indrasingh29/indra-portfolio.git

# Navigate into project directory
cd indra-portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production
```bash
npm run build
```
This produces an optimized build in the `dist/` directory.

---

## 🚀 Deployment Instructions

### Option 1: GitHub Pages (Automatic via GitHub Actions)
This repository already includes `.github/workflows/deploy.yml`.
1. Go to your repository on GitHub: `https://github.com/indrasingh29/indra-portfolio`.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and publish your website to:
   `https://indrasingh29.github.io/indra-portfolio/`

### Option 2: Vercel (1-Click Deployment)
1. Go to [vercel.com](https://vercel.com/) and log in with your GitHub account.
2. Click **Add New Project** and select `indrasingh29/indra-portfolio`.
3. Vercel will automatically detect Vite. Click **Deploy**.
4. Your site will be live instantly on a free `.vercel.app` URL with automatic continuous deployments on every git push!

---

## 🔒 Security & Best Practices
- **No API Keys or Secrets Committed**: Built-in strict `.gitignore`.
- **Honest Metrics**: No fake star counts, fake percentage bars, or fabricated work experiences.
- **Accessibility**: Automatic respect for `prefers-reduced-motion` and keyboard accessibility.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
