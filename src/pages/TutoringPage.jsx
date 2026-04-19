// TutoringPage.jsx
import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import TutorsSection from "../sections/TutorsSection";
import PricingSection from "../sections/PricingSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";

// Removed { onNavigate } prop
export default function TutoringPage() {
  return (
    <>
      {/* Hero no longer needs the prop passed down */}
      <Hero /> 
      <ServicesSection />
      <TutorsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}