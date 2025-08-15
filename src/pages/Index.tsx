import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Contacts from "@/components/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Team />
      <Services />
      <Contacts />
    </div>
  );
};

export default Index;
