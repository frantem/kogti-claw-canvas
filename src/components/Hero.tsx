import { Button } from "@/components/ui/button";
import heroHands from "@/assets/hero-hands.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroHands} 
          alt="Elegant French manicure" 
          className="w-full h-full object-cover animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/80"></div>
        <div className="absolute inset-0" style={{background: 'var(--gradient-overlay)'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-bold text-nail-dark mb-4 animate-fade-in">
            KOGTI
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light animate-fade-in delay-200">
            nail studio
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 mb-12 animate-scale-in delay-400">
          <p className="text-lg md:text-xl text-foreground mb-2">
            Профессиональный уход за ногтями
          </p>
          <p className="text-muted-foreground">
            Создаем идеальный маникюр с вниманием к каждой детали
          </p>
        </div>

        <Button 
          size="lg" 
          className="btn-hero text-white text-xl px-12 py-6 rounded-2xl font-medium border-0 animate-scale-in delay-600"
        >
          Записаться на маникюр
          <span className="ml-2 cat-paw">✨</span>
        </Button>

        {/* Floating cat elements */}
        <div className="absolute top-20 left-10 text-4xl opacity-30 animate-float delay-1000">
          🐱
        </div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-20 animate-float delay-1500">
          🐾
        </div>
      </div>
    </section>
  );
};

export default Hero;