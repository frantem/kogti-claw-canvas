import { Button } from "@/components/ui/button";
import modernBackground from "@/assets/modern-background.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${modernBackground})`
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-tropical-dark/70 via-tropical-green/50 to-tropical-dark/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="hero-content animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-tropical-cream mb-4 tracking-wide">
              N99°
            </h1>
            <p className="text-xl md:text-2xl text-tropical-gold font-medium uppercase tracking-widest">
              BEAUTY STUDIO
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg md:text-xl text-tropical-cream/90 mb-4 font-light leading-relaxed">
              Профессиональный уход за ногтями
            </p>
            <p className="text-tropical-gold/80 text-base md:text-lg">
              Создаем идеальный маникюр с вниманием к каждой детали
            </p>
          </div>

          <Button 
            variant="modern"
            size="lg" 
            className="text-lg px-16 py-4 font-semibold animate-scale-in delay-300"
          >
            Записаться на маникюр
            <span className="ml-2 cat-paw">✨</span>
          </Button>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 text-3xl text-tropical-gold/60 animate-float delay-1000">
          🌿
        </div>
        <div className="absolute bottom-10 right-10 text-2xl text-tropical-gold/40 animate-float delay-1500">
          🍃
        </div>
        <div className="absolute top-1/2 left-20 text-2xl text-tropical-gold/30 animate-float delay-2000">
          ✨
        </div>
      </div>
    </section>
  );
};

export default Hero;