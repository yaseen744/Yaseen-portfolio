import { motion } from "framer-motion";
import { FiTrendingUp } from "react-icons/fi";
import { testimonials } from "../config/siteData";
import "./Testimonials.css";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section className="section testimonials">
      <div className="section-inner">
        <motion.div
          className="testimonials__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <FiTrendingUp className="accent" size={22} />
          <h2>What People Say</h2>
        </motion.div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <span className="testimonial-card__quote-mark">“</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testimonial-card__avatar">
                  {initials(t.name)}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
