import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { personalInfo } from "../config/siteData";
import useRipple from "../hooks/useRipple";
import "./Contact.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_LINKS = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    Icon: FaEnvelope,
  },
  {
    label: "WhatsApp",
    value: "Chat with me",
    href: personalInfo.whatsapp,
    Icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: personalInfo.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "View my code",
    href: personalInfo.github,
    Icon: FaGithub,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const ripple = useRipple();

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(form.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!form.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setTimeout(() => {
      const text =
        `New project inquiry from portfolio website:\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Message: ${form.message}`;
      const whatsappUrl = `${personalInfo.whatsapp}?text=${encodeURIComponent(
        text
      )}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1100);
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact__dots" aria-hidden="true" />
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="num">05.</span>
          <h2>Get In Touch</h2>
          <span className="line" />
        </motion.div>

        <div className="contact__grid">
          <motion.form
            className="contact__form"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
          >
            <p className="contact__intro">
              Have a project in mind or just want to say hi? Fill in the form
              and I'll get back to you within a day.
            </p>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the project you'd like me to build..."
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <span className="field__error">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-glass contact__submit"
              disabled={status === "sending"}
              onClick={ripple}
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "sent" ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Message sent ✓
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <FaPaperPlane size={14} />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {status === "sent" && (
                <motion.p
                  className="contact__success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✅ Your message has been sent on WhatsApp successfully!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            className="contact__links"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="contact__intro">
              Prefer a different channel? I'm reachable here too — usually
              fastest on WhatsApp or email.
            </p>
            <ul>
              {CONTACT_LINKS.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <span className="contact__icon">
                      <Icon size={20} />
                    </span>
                    <span>
                      <strong>{label}</strong>
                      <small>{value}</small>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
