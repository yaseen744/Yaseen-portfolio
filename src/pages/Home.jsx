import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import WhyHireMe from "../components/WhyHireMe";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <WhyHireMe />
      <Testimonials />
      <Contact />
    </>
  );
}
