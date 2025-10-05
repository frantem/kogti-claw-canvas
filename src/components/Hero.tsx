import { useState, useEffect, memo } from 'react';
import BookingCard from "@/components/BookingCard";
import { supabase } from '@/integrations/supabase/client';
import LazyImage from "@/components/LazyImage";

const Hero = () => {
  const [heroData, setHeroData] = useState({
    title: 'KOGTI',
    subtitle: 'МАНИКЮР ПЕДИКЮР ВИТЕБСК',
    backgroundImage: '/lovable-uploads/3488dd88-10f5-4a10-80a0-f01ed8e005b5.png',
    h1Title: 'Маникюр',
    h1Subtitle: 'pedicure'
  });

  console.log('Hero component mounting');
  
  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const { data } = await supabase
        .from('site_settings')
        .select('setting_key, setting_value')
        .in('setting_key', ['hero_title', 'hero_subtitle', 'hero_background', 'hero_h1_title', 'hero_h1_subtitle']);

      if (data) {
        const settingsMap = data.reduce((acc, item) => {
          acc[item.setting_key] = item.setting_value || '';
          return acc;
        }, {} as Record<string, string>);

        setHeroData({
          title: settingsMap.hero_title || 'KOGTI',
          subtitle: settingsMap.hero_subtitle || 'МАНИКЮР ПЕДИКЮР ВИТЕБСК',
          backgroundImage: settingsMap.hero_background || '/lovable-uploads/3488dd88-10f5-4a10-80a0-f01ed8e005b5.png',
          h1Title: settingsMap.hero_h1_title || 'Маникюр',
          h1Subtitle: settingsMap.hero_h1_subtitle || 'pedicure'
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
      
      {/* Header on background with SEO H1 */}
      <div className="absolute top-[15%] left-0 right-0 z-10 text-center">
        <div className="text-white">
          <h2 className="text-4xl font-bold tracking-tight">
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