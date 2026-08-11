import { useMemo, memo } from 'react';
import { Link } from "react-router-dom";
import BookingCard from "@/components/BookingCard";
import LazyImage from "@/components/LazyImage";
import { useSettings } from "@/hooks/useSettings";

const Hero = () => {
  const { data: settings } = useSettings(['hero_title', 'hero_subtitle', 'hero_background', 'hero_h1_title', 'hero_h1_subtitle']);

  const heroData = useMemo(() => ({
    title: settings?.hero_title || 'kogti',
    subtitle: settings?.hero_subtitle || 'МАНИКЮР ПЕДИКЮР ВИТЕБСК',
    backgroundImage: settings?.hero_background || '/lovable-uploads/3488dd88-10f5-4a10-80a0-f01ed8e005b5.png',
    h1Title: settings?.hero_h1_title || 'Маникюр',
    h1Subtitle: settings?.hero_h1_subtitle || 'pedicure'
  }), [settings]);
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content positioned slightly above middle of screen */}
      <div className="absolute top-[40%] left-0 right-0 z-10">
        <div className="px-6 w-full max-w-sm mx-auto">
          <BookingCard />
        </div>
      </div>
      {/* Nail art background with optimized loading */}
      <div className="absolute inset-0">
         <LazyImage 
           src={heroData.backgroundImage}
           alt="Ногтевая студия KOGTI - профессиональный маникюр"
           wrapperClassName="absolute inset-0"
           imgClassName="w-full h-full object-cover"
           eager={true}
           fetchPriority="high"
         />
        {/* Simplified overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Vacancies pill button */}
      <div className="absolute top-5 left-0 right-0 z-20 flex justify-center px-20">
        <Link
          to="/careers"
          className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:text-tropical-gold hover:border-tropical-gold/50 hover:shadow-xl active:translate-y-0"
        >
          Вакансии
        </Link>
      </div>

      {/* Header on background with SEO H1 */}
      <div className="absolute top-[15%] left-0 right-0 z-10 text-center">
        <div className="text-white">
          <h2 className="font-brasika text-4xl font-normal tracking-[0.1em]">
            {heroData.title}
          </h2>
          <h1 className="text-sm font-medium uppercase tracking-wider">
            {heroData.subtitle}
          </h1>
        </div>
      </div>

      
    </section>
  );
};

export default memo(Hero);