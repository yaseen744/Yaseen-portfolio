import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../config/siteData";
import "./Projects.css";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div className="project-card__media">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__overlay">
          <p>{project.description}</p>
        </div>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>

        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass-solid"
          >
            <FiGithub /> GitHub Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="num">04.</span>
          <h2>Featured Projects</h2>
          <span className="line" />
        </motion.div>

        <div className="project-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
