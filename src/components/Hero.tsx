import BookingCard from "@/components/BookingCard";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
      {/* Nail art background with edge blur */}
      <div className="absolute inset-0">
         <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: `url(/lovable-uploads/3488dd88-10f5-4a10-80a0-f01ed8e005b5.png)`
           }}
         ></div>
        {/* Edge blur overlay */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)`
        }}></div>
        {/* Additional blur for edges */}
        <div className="absolute inset-0 backdrop-blur-[2px] mask-radial-blur"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-6 w-full max-w-sm mx-auto">
        <BookingCard />
      </div>
    </section>
  );
};

export default Hero;