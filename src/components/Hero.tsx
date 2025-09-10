import { useState, useEffect } from 'react';
import BookingCard from "@/components/BookingCard";
import { supabase } from '@/integrations/supabase/client';

const Hero = () => {
  const [heroData, setHeroData] = useState({
    title: 'KOGTI',
    subtitle: 'BEAUTY STUDIO',
    backgroundImage: '/lovable-uploads/3488dd88-10f5-4a10-80a0-f01ed8e005b5.png'
  });

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const { data } = await supabase
        .from('site_settings')
        .select('setting_key, setting_value')
        .in('setting_key', ['hero_title', 'hero_subtitle', 'hero_background']);

      if (data) {
        const settingsMap = data.reduce((acc, item) => {
          acc[item.setting_key] = item.setting_value || '';
          return acc;
        }, {} as Record<string, string>);

        setHeroData({
          title: settingsMap.hero_title || 'KOGTI',
          subtitle: settingsMap.hero_subtitle || 'BEAUTY STUDIO',
          backgroundImage: settingsMap.hero_background || '/lovable-uploads/3488dd88-10f5-4a10-80a0-f01ed8e005b5.png'
        });
      }
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content positioned slightly above middle of screen */}
      <div className="absolute top-[40%] left-0 right-0 z-10">
        <div className="px-6 w-full max-w-sm mx-auto">
          <BookingCard />
        </div>
      </div>
      {/* Nail art background with edge blur */}
      <div className="absolute inset-0">
         <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
             backgroundImage: `url(${heroData.backgroundImage})`
           }}
         ></div>
        {/* Edge blur overlay */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)`
        }}></div>
        {/* Additional blur for edges */}
        <div className="absolute inset-0 backdrop-blur-[2px] mask-radial-blur"></div>
      </div>
      
      {/* Header on background */}
      <div className="absolute top-16 left-0 right-0 z-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-lg">
          {heroData.title}
        </h1>
        <p className="text-sm text-white/90 font-medium uppercase tracking-wider drop-shadow-md">
          {heroData.subtitle}
        </p>
      </div>
      
    </section>
  );
};

export default Hero;