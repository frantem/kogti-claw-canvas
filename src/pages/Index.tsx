import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Team from "@/components/Team";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { user, isAdmin } = useAuth();

  return (
    <div className="min-h-screen">
      {user && isAdmin && (
        <div className="bg-primary text-primary-foreground p-2 text-center">
          <Link to="/admin">
            <Button variant="secondary" size="sm">
              Админ панель
            </Button>
          </Link>
        </div>
      )}
      
      <Hero />
      <ServicesSection />
      <Team />
      <ContactSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
