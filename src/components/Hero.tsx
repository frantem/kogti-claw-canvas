import { Button } from "@/components/ui/button";

const Hero = () => {
  // Создаем заглушки для nail images - будут заменены на настоящие фото
  const nailImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFD700'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23000'%3ENails 1%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFD700'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23000'%3ENails 2%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFD700'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23000'%3ENails 3%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFD700'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23000'%3ENails 4%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFD700'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23000'%3ENails 5%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFD700'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%23000'%3ENails 6%3C/text%3E%3C/svg%3E"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated nail photo circles in background */}
      <div className="absolute inset-0">
        {nailImages.map((image, index) => (
          <div
            key={index}
            className={`nail-circle animate-move-up w-32 h-32 md:w-40 md:h-40`}
            style={{
              left: `${10 + (index * 15)}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${15 + (index * 3)}s`
            }}
          >
            <img 
              src={image} 
              alt={`Nail art ${index + 1}`}
              className="rounded-full"
            />
          </div>
        ))}
        {/* Additional circles for fuller background */}
        {nailImages.map((image, index) => (
          <div
            key={`second-${index}`}
            className={`nail-circle animate-move-up w-24 h-24 md:w-32 md:h-32`}
            style={{
              right: `${5 + (index * 12)}%`,
              animationDelay: `${(index * 2.5) + 8}s`,
              animationDuration: `${18 + (index * 2)}s`
            }}
          >
            <img 
              src={image} 
              alt={`Nail art duplicate ${index + 1}`}
              className="rounded-full"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-bold text-nail-black mb-4 animate-fade-in">
            KOGTI
          </h2>
          <p className="text-2xl md:text-3xl text-nail-gray font-light animate-fade-in delay-200">
            nail studio
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 mb-12 animate-scale-in delay-400">
          <p className="text-lg md:text-xl text-nail-black mb-2 font-medium">
            Профессиональный уход за ногтями
          </p>
          <p className="text-nail-gray">
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

        {/* Floating cat elements */}
        <div className="absolute top-20 left-10 text-4xl text-nail-yellow opacity-60 animate-float delay-1000">
          🐱
        </div>
        <div className="absolute bottom-20 right-10 text-3xl text-nail-yellow opacity-40 animate-float delay-1500">
          🐾
        </div>
      </div>
    </section>
  );
};

export default Hero;