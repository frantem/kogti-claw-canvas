import Hero from "@/components/Hero";
import InspirationSection from "@/components/InspirationSection";
import ServicesSection from "@/components/ServicesSection";
import Team from "@/components/Team";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <InspirationSection />
      <ServicesSection />
      <Team />
      <LocationSection />
      <ContactSection />
    </div>
  );
};

export default Index;
