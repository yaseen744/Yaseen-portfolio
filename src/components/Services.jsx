import { motion } from "framer-motion";
import {
  FiGlobe,
  FiShoppingCart,
  FiLayout,
  FiBookOpen,
  FiHome,
  FiUser,
  FiRefreshCw,
  FiSmartphone,
  FiTool,
} from "react-icons/fi";
import { services } from "../config/siteData";
import "./Services.css";

const ICONS = {
  globe: FiGlobe,
  cart: FiShoppingCart,
  layout: FiLayout,
  academic: FiBookOpen,
  estate: FiHome,
  portfolio: FiUser,
  redesign: FiRefreshCw,
  responsive: FiSmartphone,
  maintenance: FiTool,
};

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="num">03.</span>
          <h2>What I Can Build For You</h2>
          <span className="line" />
        </motion.div>

        <div className="service-grid">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="service-card__icon">
                  <Icon size={26} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
