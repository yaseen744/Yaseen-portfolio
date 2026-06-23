import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { personalInfo } from "../config/siteData";
import useTypewriter from "../hooks/useTypewriter";
import useRipple from "../hooks/useRipple";
import "./Hero.css";

const FLOATERS = [
  { char: "{", top: "18%", left: "8%", size: 90, duration: 9, delay: 0 },
  { char: "}", top: "70%", left: "12%", size: 60, duration: 11, delay: 1.2 },
  { char: "</>", top: "22%", left: "85%", size: 56, duration: 10, delay: 0.6 },
  { char: "{ }", top: "65%", left: "88%", size: 44, duration: 8, delay: 2 },
  { char: "<>", top: "85%", left: "55%", size: 38, duration: 12, delay: 0.4 },
  { char: "/>", top: "10%", left: "45%", size: 34, duration: 9.5, delay: 1.6 },
];

export default function Hero() {
  const { output } = useTypewriter(`Hi, I'm ${personalInfo.name}`, {
    speed: 65,
    startDelay: 400,
  });
  const ripple = useRipple();

  return (
    <section id="home" className="hero">
      <div className="hero__floaters" aria-hidden="true">
        {FLOATERS.map((f, i) => (
          <motion.span
            key={i}
            className="hero__float-char"
            style={{ top: f.top, left: f.left, fontSize: f.size }}
            animate={{ y: [0, -22, 0], opacity: [0.12, 0.28, 0.12] }}
            transition={{
              duration: f.duration,
              delay: f.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {f.char}
          </motion.span>
        ))}
      </div>

      <div className="hero__inner">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, welcome to my portfolio
        </motion.p>

        <h1 className="hero__title">
          {output}
          <span className="hero__cursor">|</span>
        </h1>

        <motion.h2
          className="hero__role"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {personalInfo.role}{" "}
          <span className="accent">| JavaScript | React | APIs | MongoDB</span>
        </motion.h2>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="btn btn-glass"
            onClick={ripple}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn btn-glass-solid"
            onClick={ripple}
          >
            Hire Me
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-cue"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
