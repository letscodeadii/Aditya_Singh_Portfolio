# Aditya Singh — Developer Portfolio

A premium, animation-rich personal portfolio built with **React + Vite + Tailwind CSS**,
using **Framer Motion**, **GSAP-ready** structure, **Lenis** smooth scrolling, and a
full **light/dark theme system**. Content is generated from `src/data/resumeData.js`,
extracted from the provided resume.

## Design concept

The site's visual identity is a **"developer's editor"** motif: a code-comment
eyebrow (`// About`), a terminal-tab navbar, a live-typed `developer.json` panel in
the hero, and progress bars styled like build-tool loading bars. Dark theme is a
"terminal at midnight" (near-black + violet/cyan glow); light theme is a distinct
"paper & ledger" palette (warm paper background + deep indigo/teal), not a simple
color inversion.

## Tech stack

- **React 18** + **Vite 5** — fast dev/build tooling
- **Tailwind CSS 3** — utility-first styling, custom design tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, layout animations, magnetic buttons, page transitions
- **Lenis** — buttery smooth scrolling (respects `prefers-reduced-motion`)
- **React Icons** — icon set (Feather icons)
- **EmailJS** — contact form email delivery (optional, see below)
- **React Router** — installed and ready if you add multi-page routes (e.g. project case studies)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires Node.js 18+.

## Folder structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── Aditya_Singh_Resume.pdf   ← add your real resume PDF here
├── src/
│   ├── components/
│   │   ├── background/           # Aurora, Particles, MouseGlow (ambient FX)
│   │   ├── layout/                # Navbar, Footer, Loader, ScrollToTop, PageTransition
│   │   └── ui/                    # GlassCard, MagneticButton, SectionHeading, ThemeToggle
│   ├── context/
│   │   └── ThemeContext.jsx      # light/dark theme provider (persisted to localStorage)
│   ├── data/
│   │   └── resumeData.js         # ← ALL portfolio content lives here
│   ├── hooks/
│   │   ├── useLenis.js
│   │   └── useMousePosition.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Credentials.jsx       # Education + Certifications + Achievements (tabbed)
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Customizing content

Everything text-based — name, summary, skills, projects, education, certifications,
achievements, contact links — lives in **`src/data/resumeData.js`**. Edit that file
and the whole site updates; no need to touch component JSX for content changes.

To add a new project, append to the `projects` array with a `title`, `subtitle`,
`description`, `stack`, `points`, and an `accent` of `"violet"` or `"cyan"`.

## Setting up the contact form (EmailJS)

The contact form works out of the box via a `mailto:` fallback. To send messages
directly without opening the visitor's email client:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service and an Email Template.
3. In `src/sections/Contact.jsx`, replace the three placeholder constants:

```js
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";
```

Your EmailJS template should include `{{name}}`, `{{email}}`, `{{subject}}`, and
`{{message}}` fields to match the form's input `name` attributes.

## Theme system

Toggle is in the navbar (`ThemeToggle.jsx`). Theme preference is detected from the
OS on first visit, then persisted to `localStorage`. All colors are defined as
Tailwind tokens in `tailwind.config.js` — dark and light variants are handled with
Tailwind's `dark:`/`html.light` selector pattern in `index.css` and per-component
conditionals via the `useTheme()` hook.

## Performance notes

- Route-level code splitting is pre-configured in `vite.config.js` (vendor/motion chunks).
- Images should be added as `.webp` where possible and lazy-loaded with `loading="lazy"`.
- Lenis and the mouse-glow effect automatically disable under `prefers-reduced-motion`.
- Run `npm run build && npm run preview` and audit with Lighthouse before deploying.

## Accessibility

- Visible focus rings on all interactive elements (`:focus-visible` in `index.css`).
- Reduced-motion media query disables/shortens all animations.
- Semantic landmarks (`header`, `main`, `footer`, `section` with `id`s) support skip-navigation and screen readers.

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages):

```bash
npm run build
# deploy the generated dist/ folder
```

## Adding your resume PDF

Drop your PDF at `public/Aditya_Singh_Resume.pdf` (or update `profile.resumeFile`
in `src/data/resumeData.js` to point to a different path/filename).
