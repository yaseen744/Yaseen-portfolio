import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { personalInfo, stats } from "../config/siteData";
import useCountUp from "../hooks/useCountUp";
import useRipple from "../hooks/useRipple";
import "./About.css";

function StatBox({ stat, started }) {
  const value = useCountUp(stat.value, started);
  return (
    <div className="stat-box">
      <h3>
        {value}
        {stat.suffix}
      </h3>
      <p>{stat.label}</p>
    </div>
  );
}

export default function About() {
  const [statsInView, setStatsInView] = useState(false);
  const ripple = useRipple();

  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="num">01.</span>
          <h2>About Me</h2>
          <span className="line" />
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__photo-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hex-frame">
              <div className="hex-glow" />
              <div className="hex-clip">
                <img src={personalInfo.photo} alt={personalInfo.name} />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__text-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onViewportEnter={() => setStatsInView(true)}
          >
            {personalInfo.about.map((para, i) => (
              <p key={i} className="about__para">
                {para}
              </p>
            ))}

            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-outline about__cv-btn"
              onClick={ripple}
            >
              <FiDownload /> Download CV
            </a>

            <div className="stat-row">
              {stats.map((stat) => (
                <StatBox key={stat.label} stat={stat} started={statsInView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
