import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Team from "@/components/Team";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <Team />
      <ContactSection />
      <LocationSection />
    </div>
  );
};

export default Index;
