import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Team />
      <ContactSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
