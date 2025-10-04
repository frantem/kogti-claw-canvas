import { Card } from "@/components/ui/card";
import { memo, useState } from "react";
import LazyImage from "@/components/LazyImage";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Team = () => {
  const { data: masters = [], isLoading } = useQuery({
    queryKey: ['masters'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('masters')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      
      if (error) throw error;
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) {
    return (
      <section id="team" className="relative min-h-screen py-20" style={{
        backgroundImage: 'url(/lovable-uploads/ff28dcc9-cddd-4feb-8f66-ce26adedc889.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container mx-auto px-6">
          <div className="text-center text-white">Загрузка...</div>
        </div>
      </section>
    );
  }
  return <section id="team" className="relative min-h-screen py-20" style={{
    backgroundImage: 'url(/lovable-uploads/ff28dcc9-cddd-4feb-8f66-ce26adedc889.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4"> Мастера ногтевого сервиса</h2>
          <p className="text-white/90 text-lg">
            Команда профессионалов студии красоты KOGTI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {masters.map((master, index) => <MasterCard key={index} master={master} index={index} />)}
        </div>
      </div>
    </section>;
};
const MasterCard = ({
  master,
  index
}: {
  master: any;
  index: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async () => {
    setIsLoading(true);
    
    // Normalize URL to dikidi.net
    const normalizedUrl = master.booking_link.replace('dikidi.ru', 'dikidi.net');
    const widgetId = normalizedUrl.match(/#widget=(\d+)/)?.[1];
    
    // Wait for script to load if needed
    if (widgetId) {
      let attempts = 0;
      while (!(window as any).DIKIDI && attempts < 20) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }
      
      if ((window as any).DIKIDI) {
        try {
          (window as any).DIKIDI.openWidget({ widget_id: widgetId });
        } catch (error) {
          console.error('Error opening Dikidi widget:', error);
          window.open(normalizedUrl, '_blank');
        }
      } else {
        window.open(normalizedUrl, '_blank');
      }
    } else {
      window.open(normalizedUrl, '_blank');
    }
    
    setIsLoading(false);
  };

  return <Card className="relative overflow-hidden h-[450px] md:h-[600px] animate-fade-in border-8 border-white/20 backdrop-blur-sm" style={{
    borderRadius: '3rem',
    animationDelay: `${index * 150}ms`,
    boxShadow: '0 0 8px rgba(255, 204, 102, 0.6), 0 0 16px rgba(255, 204, 102, 0.4), 0 0 24px rgba(255, 204, 102, 0.2), 0 4px 12px rgba(0, 0, 0, 0.2)'
  }}>
      {/* Single Background Image with lazy loading */}
      <div className="absolute inset-0">
        <LazyImage
          src={master.images[0] || master.avatar_url}
          alt={`${master.name} - мастер маникюра`}
          className="w-full h-full object-cover"
          placeholder="true"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
      background: `linear-gradient(to bottom, 
            transparent 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.1) 60%,
            rgba(0, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0.6) 80%,
            rgba(0, 0, 0, 0.8) 90%,
            rgba(0, 0, 0, 0.9) 100%)`
    }} />

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Master Name */}
        <p className="text-2xl font-bold mb-3">
          {master.name}
        </p>
        
        {/* Description */}
        <h3 className="text-sm text-gray-200 mb-4 leading-relaxed">
          {master.description.split('\n').map((line: string, lineIndex: number) => <span key={lineIndex}>
              {line}
              {lineIndex < master.description.split('\n').length - 1 && <br />}
            </span>)}
        </h3>

        {/* Tags */}
        <div className="flex gap-3 mb-4">
          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-lg">
            {master.title}
          </span>
          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-lg">
            {master.experience}
          </span>
        </div>

        {/* Button */}
        {master.booking_link && (
          <button 
            onClick={handleBooking}
            disabled={isLoading}
            className="block w-full bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 rounded-full text-base transition-all duration-300 text-center"
          >
            {isLoading ? 'Загрузка...' : 'Записаться'}
          </button>
        )}
      </div>
    </Card>;
};
export default memo(Team);