import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { personalInfo } from "../config/siteData";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="footer__wave-path footer__wave-path--back"
            d="M0,40 C300,90 900,0 1200,50 L1200,120 L0,120 Z"
          />
          <path
            className="footer__wave-path footer__wave-path--front"
            d="M0,60 C300,10 900,100 1200,40 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="footer__content">
        <a href="#home" className="footer__logo">
          {personalInfo.firstName.toLowerCase()}
          <span className="accent">.dev</span>
        </a>

        <ul className="footer__socials">
          <li>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FaEnvelope size={18} />
            </a>
          </li>
          <li>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
          </li>
          <li>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </li>
          <li>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </li>
        </ul>

        <a href="#home" className="footer__top" aria-label="Back to top">
          <FiArrowUp size={18} />
        </a>
      </div>

      <p className="footer__copy">
        &copy; {year} {personalInfo.name}. Built with React &amp; Bootstrap.
      </p>
    </footer>
  );
}
