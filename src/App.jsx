import "./styles/global.css";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import ServicesSection from "./sections/ServicesSection";
import TutorsSection from "./sections/TutorsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";
import PricingSection from "./sections/PricingSection";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ServicesSection />
      <TutorsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
