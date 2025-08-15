import BookingCard from "@/components/BookingCard";
import appBackground from "@/assets/app-background.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
      {/* App-style background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${appBackground})`
        }}
      ></div>
      
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-transparent to-amber-100/10"></div>

      {/* Content */}
      <div className="relative z-10 px-6 w-full max-w-sm mx-auto">
        <BookingCard />
      </div>
    </section>
  );
};

export default Hero;