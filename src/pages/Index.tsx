import Hero from "@/components/Hero";
import InspirationSection from "@/components/InspirationSection";
import ServicesSection from "@/components/ServicesSection";
import Team from "@/components/Team";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <InspirationSection />
      <ServicesSection />
      <Team />
    </div>
  );
};

export default Index;
