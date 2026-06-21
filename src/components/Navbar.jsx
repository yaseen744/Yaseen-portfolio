import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, personalInfo } from "../config/siteData";
import useActiveSection from "../hooks/useActiveSection";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.to));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          {personalInfo.firstName.toLowerCase()}
          <span className="accent">.dev</span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  className={active === link.to ? "is-active" : ""}
                >
                  <span className="navbar__num">
                    0{i + 1}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn btn-outline navbar__resume"
          >
            Resume
          </a>
        </nav>

        <button
          className="navbar__hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="navbar__mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            >
              <ul>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <a href={`#${link.to}`} onClick={handleNavClick}>
                      <span className="navbar__num">0{i + 1}.</span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.07 }}
                >
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="btn btn-outline"
                    onClick={handleNavClick}
                  >
                    Resume
                  </a>
                </motion.li>
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
