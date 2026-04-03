import "./styles/global.css";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import ServicesSection from "./sections/ServicesSection";
import TutorsSection from "./sections/TutorsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ServicesSection />
      <TutorsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
