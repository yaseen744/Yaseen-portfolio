import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiGit,
  SiGithub,
  SiMongodb,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { skills } from "../config/siteData";
import "./Skills.css";

const ICONS = {
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss, color: "#1572B6" },
  js: { Icon: SiJavascript, color: "#F7DF1E" },
  bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  react: { Icon: SiReact, color: "#61DAFB" },
  git: { Icon: SiGit, color: "#F05032" },
  api: { Icon: TbApi, color: "#64FFDA" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
};

function TiltCard({ skill }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const { Icon, color } = ICONS[skill.icon] || { Icon: SiGithub, color: "#64FFDA" };

  function handleMove(e) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -14;
    const rotateY = ((x - rect.width / 2) / rect.width) * 14;
    setStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`,
    });
  }

  function handleLeave() {
    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)",
    });
  }

  return (
    <motion.div
      ref={ref}
      className="tilt-card"
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Icon size={38} color={color} />
      <span>{skill.name}</span>
    </motion.div>
  );
}

function SkillBar({ skill, index }) {
  return (
    <motion.div
      className="skill-bar"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className="skill-bar__label">
        <span>{skill.name}</span>
        <span className="accent">{skill.percent}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percent}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.15 + index * 0.06, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="num">02.</span>
          <h2>Skills &amp; Tools</h2>
          <span className="line" />
        </motion.div>

        <div className="tilt-grid">
          {skills.map((skill) => (
            <TiltCard key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="skill-bars">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
