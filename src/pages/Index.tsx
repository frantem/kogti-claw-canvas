import ErrorBoundary from "@/components/ErrorBoundary";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('Index page rendering');
  return (
    <div className="min-h-screen">
      <ErrorBoundary><Hero /></ErrorBoundary>
      <ErrorBoundary><Services /></ErrorBoundary>
      <ErrorBoundary><Team /></ErrorBoundary>
      <ErrorBoundary><ContactSection /></ErrorBoundary>
      <ErrorBoundary><LocationSection /></ErrorBoundary>
      <ErrorBoundary><Footer /></ErrorBoundary>
    </div>
  );
};

export default Index;