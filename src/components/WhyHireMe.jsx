import { motion } from "framer-motion";
import {
  FiZap,
  FiSmartphone,
  FiLayers,
  FiTrendingUp,
  FiLifeBuoy,
} from "react-icons/fi";
import { whyHireMe } from "../config/siteData";
import "./WhyHireMe.css";

const ICONS = {
  fast: FiZap,
  mobile: FiSmartphone,
  design: FiLayers,
  seo: FiTrendingUp,
  support: FiLifeBuoy,
};

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section why-hire-me">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Hire Me</h2>
          <span className="line" />
        </motion.div>

        <div className="why-hire-me__grid">
          {whyHireMe.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.text}
                className="why-hire-me__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="why-hire-me__icon">
                  <Icon size={22} />
                </div>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
