import { Button } from "@/components/ui/button";
import nailWork1 from "@/assets/nail-work-1.jpg";
import nailWork2 from "@/assets/nail-work-2.jpg";
import nailWork3 from "@/assets/nail-work-3.jpg";
import nailWork4 from "@/assets/nail-work-4.jpg";
import nailWork5 from "@/assets/nail-work-5.jpg";
import nailWork6 from "@/assets/nail-work-6.jpg";

const Hero = () => {
  // Реальные фотографии маникюра для анимированных кружков
  const nailImages = [
    nailWork1,
    nailWork2,
    nailWork3,
    nailWork4,
    nailWork5,
    nailWork6
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tropical background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/lovable-uploads/70c7a95a-b7aa-413f-b691-6b738c05bfd6.png)`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-bold text-tropical-cream mb-4 animate-fade-in drop-shadow-2xl">
            KOGTI
          </h2>
          <p className="text-2xl md:text-3xl text-tropical-gold font-light animate-fade-in delay-200">
            nail studio
          </p>
        </div>

        <div className="bg-tropical-green/90 backdrop-blur-sm border-4 border-tropical-gold rounded-2xl p-4 md:p-6 mb-12 mx-4 md:mx-0 animate-scale-in delay-400 shadow-[0_0_30px_rgba(255,220,0,0.5)]">
          <p className="text-lg md:text-xl text-tropical-cream mb-2 font-medium">
            Профессиональный уход за ногтями
          </p>
          <p className="text-tropical-gold/80">
            Создаем идеальный маникюр с вниманием к каждой детали
          </p>
        </div>

        <Button 
          size="lg" 
          className="btn-hero text-xl px-12 py-6 rounded-2xl font-bold animate-scale-in delay-600"
        >
          Записаться на маникюр
          <span className="ml-2 cat-paw">✨</span>
        </Button>

        {/* Floating tropical elements */}
        <div className="absolute top-20 left-10 text-4xl text-tropical-gold opacity-60 animate-float delay-1000">
          🌿
        </div>
        <div className="absolute bottom-20 right-10 text-3xl text-tropical-gold opacity-40 animate-float delay-1500">
          🍃
        </div>
      </div>
    </section>
  );
};

export default Hero;