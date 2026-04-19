// TutoringPage.jsx
// This is the original website, preserved faithfully.
// It simply renders the original Hero + all original sections in order.

import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import TutorsSection from "../sections/TutorsSection";
import PricingSection from "../sections/PricingSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";

export default function TutoringPage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ServicesSection />
      <TutorsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
