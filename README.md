# Portfolio — React + Bootstrap 5 + Framer Motion

A premium, single-page developer portfolio. Dark navy theme with a teal
accent, smooth scroll, scroll-triggered animations, and a fully responsive
mobile menu.

## Tech stack
- React 19 + Vite
- React Router DOM (single `/` route + a 404 fallback)
- Bootstrap 5 (grid + utility classes only — all visual styling is custom)
- Framer Motion (scroll reveals, hover states, mobile menu transitions)
- React Icons (tech logos + UI icons)

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Personalize everything from one file
Open **`src/config/siteData.js`** and edit:
- `personalInfo` — name, role, tagline, email, WhatsApp, LinkedIn, GitHub, resume path, photo
- `stats` — the 3 numbers in the About section
- `skills` — name + percentage for each skill bar / icon tile
- `projects` — title, description, image, tags, demo & code links
- `navLinks` — the nav items, in order

### Swap the photo
Replace the `photo` URL in `siteData.js` with your own image. Easiest way:
drop your photo in `public/images/me.jpg` and set
`photo: "/images/me.jpg"`.

### Swap the résumé
Replace `public/resume.pdf` with your real CV (same filename), or change
`resumeUrl` in `siteData.js` if you rename the file.

### Project screenshots
The 3 project cards currently use Unsplash placeholder images. Replace the
`image` field for each project in `siteData.js` with real screenshots
(ideally ~900×600px, landscape).

## Wiring up the contact form
The form currently validates input and simulates a submit (see
`src/components/Contact.jsx`, `handleSubmit`). To make it actually send
messages, swap the `setTimeout` block for a real request — e.g.
[Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or
your own API endpoint.

## Deploying
This is a static Vite build — drag the `dist/` folder (after `npm run
build`) onto Netlify/Vercel, or run `npm run build && npm run preview` to
sanity-check it first. If you deploy to a static host without history-mode
routing support, add the platform's SPA redirect rule (e.g. Netlify
`_redirects` with `/* /index.html 200`) so the 404 route doesn't break
deep links.
