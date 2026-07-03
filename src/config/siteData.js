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
  tagline: "I build modern, responsive websites that help businesses grow online.",
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
    id: 2,
    title: "Scholars Edge Academy — Tuition Website",
    description:
      "A modern tuition academy website built with React, showcasing courses, faculty and admissions with a clean, responsive, student-friendly design.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://scholars-edge-academy1.vercel.app/",
    code: "https://github.com/yaseen744/Scholars-edge-academy.git",
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
    title: "Parlour Website",
    description:
      "A stylish and fully responsive ladies' parlour website showcasing beauty services, pricing, appointments, and an elegant modern design.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://muskan-salon.vercel.app",
    code: "https://github.com/yaseen744/Salon.git",
  },
  {
    id: 5,
    title: "Travel Website",
    description:
      "A travel-themed website showcasing destinations and trip packages, built with React and a fully responsive, visually engaging layout.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://travelpk-website.netlify.app/",
    code: "https://github.com/yaseen744/Travel-website.git",
  },
  {
    id: 6,
    title: "Velvet Table — Restaurant Landing Page",
    description:
      "A modern restaurant landing page built with React.js using a reusable component-based architecture, with a fully responsive layout and a clean, smooth experience across all devices.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Responsive Design"],
    demo: "https://yaseen-luxtable.netlify.app/",
    code: "https://github.com/yaseen744/Velvet-project.git",
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
    title: "E-Commerce Website",
    description:
      "Full online stores with product listings, shopping cart and category filtering, built for a smooth shopping experience.",
  },
  {
    icon: "academic",
    title: "Academic Website",
    description:
      "Modern websites for schools, academies and tuition centers to showcase courses, faculty and admissions.",
  },
  {
    icon: "estate",
    title: "Estate Agency Website",
    description:
      "Professional real estate websites with property listings and a smooth browsing experience for buyers and renters.",
  },
  {
    icon: "layout",
    title: "Landing Pages",
    description:
      "Focused, conversion-ready landing pages for products, services or campaigns with a clear call-to-action.",
  },
  {
    icon: "portfolio",
    title: "Portfolio Websites",
    description:
      "Personal portfolio websites that showcase your work and skills in a clean, professional way.",
  },
  {
    icon: "redesign",
    title: "Website Redesign",
    description:
      "Giving old, outdated websites a fresh, modern look with better speed and usability.",
  },
  {
    icon: "responsive",
    title: "Responsive Design",
    description:
      "Websites that look and work great on every screen size — mobile, tablet and desktop.",
  },
  {
    icon: "maintenance",
    title: "Website Maintenance",
    description:
      "Ongoing updates, fixes and improvements to keep your website running smoothly at all times.",
  },
];

export const whyHireMe = [
  { icon: "fast", text: "Fast Delivery" },
  { icon: "mobile", text: "Mobile Responsive" },
  { icon: "design", text: "Clean Modern Design" },
  { icon: "seo", text: "SEO Friendly" },
  { icon: "support", text: "Ongoing Support" },
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
