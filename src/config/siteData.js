/**
 * ============================================
 *  SITE DATA — edit this one file to personalize
 *  the entire portfolio (name, links, projects,
 *  skills, stats, resume, photo, etc.)
 * ============================================
 */

export const personalInfo = {
  name: "Muhammad Yaseen",
  firstName: "Yaseen",
  role: "Web Developer",
  tagline: "I build fast, beautiful websites for businesses.",
  location: "Sukkur, Pakistan",
  email: "yaseenpirzada3@gmail.com",
  whatsapp: "https://wa.me/923113404105",
  linkedin: "https://www.linkedin.com/in/yaseen-pirzada-aa6941385/",
  github: "https://github.com/yaseen744",
  youtube: "http://www.youtube.com/@TechWithYaseenPK",
  resumeUrl: "/resume.pdf", // place your real CV at public/resume.pdf
  photo: "/images/me.jpg",
  about: [
    "I'm a web developer who enjoys turning ideas into clean, fast, and responsive interfaces. I work mainly with React, JavaScript and Bootstrap, and I care a lot about the small details — spacing, motion, and load times — that make a website feel premium.",
    "Over the past year I've partnered with small businesses and startups to ship landing pages, dashboards and web apps that actually move the needle, not just look good in a screenshot.",
  ],
};

export const stats = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "LinkedIn Network", value: 700, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
];

// icon keys map to react-icons in Skills.jsx
export const skills = [
  { name: "HTML5", percent: 95, icon: "html" },
  { name: "CSS3", percent: 90, icon: "css" },
  { name: "JavaScript", percent: 85, icon: "js" },
  { name: "Bootstrap", percent: 90, icon: "bootstrap" },
  { name: "React", percent: 80, icon: "react" },
  { name: "Git / GitHub", percent: 85, icon: "git" },
  { name: "REST APIs", percent: 75, icon: "api" },
  { name: "MongoDB", percent: 40, icon: "mongodb" },
  { name: "Netlify", percent: 70, icon: "netlify" },
  { name: "Vercel", percent: 75, icon: "vercel" },
];

export const projects = [
  {
    id: 1,
    title: "Velvet Table — Restaurant Landing Page",
    description:
      "A modern restaurant landing page built with React.js using a reusable component-based architecture, with a fully responsive layout and a clean, smooth experience across all devices.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://yaseen-luxtable.netlify.app/",
    code: "https://github.com/yaseen744/Velvet-project.git",
  },
  {
    id: 2,
    title: "E-Commerce Web Application",
    description:
      "A fully responsive e-commerce app built with React.js — product listing, shopping cart, category filtering and smooth navigation, with a focus on clean UI and optimized performance.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://yaseen-e-commerce.netlify.app/",
    code: "https://github.com/yaseen744/E-commerce.git",
  },
  {
    id: 3,
    title: "Real Estate Agency Website",
    description:
      "A modern real estate agency website built with React, featuring property listings, responsive layouts, smooth navigation, and a professional user experience.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://estate-agency1.vercel.app/",
    code: "https://github.com/yaseen744/Estate-agency.git",
  },
  {
    id: 4,
    title: "Muskan Salon Website",
    description:
      "A stylish and fully responsive salon website showcasing beauty services, pricing, appointments, and an elegant modern design.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://muskan-salon.vercel.app",
    code: "https://github.com/yaseen744/Salon.git",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather forecast app built with React, fetching real-time data from a weather API to show current conditions and temperature for any city, with a clean, responsive interface.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "REST API", "JavaScript"],
    demo: "https://weather-app2-rose.vercel.app/",
    code: "https://github.com/yaseen744/Weather-App",
  },
  {
    id: 6,
    title: "Travel Website",
    description:
      "A travel-themed website showcasing destinations and trip packages, built with React and a fully responsive, visually engaging layout.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://travelpk-website.netlify.app/",
    code: "https://github.com/yaseen744/Travel-website.git",
  },
];

export const services = [
  {
    icon: "globe",
    title: "Business Websites",
    description:
      "Clean, professional websites for any type of business — built to load fast, look credible, and work perfectly on every device.",
  },
  {
    icon: "cart",
    title: "E-Commerce Websites",
    description:
      "Full online stores with product listings, shopping cart and category filtering — I've already shipped a live e-commerce app with this exact setup.",
  },
  {
    icon: "layout",
    title: "Landing Pages",
    description:
      "Focused, conversion-ready landing pages for products, services or campaigns — clean layout, clear call-to-action, fast load times.",
  },
];

export const testimonials = [
{name:"Ahmed Raza",role:"Business Owner",quote:"Professional work, great communication, and delivered exactly what we needed on time."},
{name:"Muhammad Hamza",role:"Startup Founder",quote:"Excellent React developer. The website was fast, responsive, and looked fantastic."},
{name:"Abdul Rehman",role:"Client",quote:"Very satisfied with the final result. Smooth process and high-quality work throughout."},
];

export const navLinks = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];
