import { Card } from "@/components/ui/card";
import { memo } from "react";
import LazyImage from "@/components/LazyImage";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { DikidiButton } from "@/components/booking/DikidiButton";

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
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) {
    return (
      <section id="team" className="relative min-h-screen py-20">
        <LazyImage 
          src="/lovable-uploads/ff28dcc9-cddd-4feb-8f66-ce26adedc889.png"
          alt="Команда мастеров студии KOGTI"
          wrapperClassName="absolute inset-0"
          imgClassName="w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">Загрузка...</div>
        </div>
      </section>
    );
  }
  return <section id="team" className="relative min-h-screen py-20">
      <LazyImage 
        src="/lovable-uploads/ff28dcc9-cddd-4feb-8f66-ce26adedc889.png"
        alt="Команда мастеров студии KOGTI"
        wrapperClassName="absolute inset-0"
        imgClassName="w-full h-full object-cover"
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4"> Мастера ногтевого сервиса</h2>
          <p className="text-white/90 text-lg">
            Команда профессионалов студии красоты KOGTI
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mx-auto">
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
  const getWidgetId = () => {
    if (!master.booking_link) return '';
    const match = master.booking_link.match(/widget[=\/](\d+)/);
    return match ? match[1] : '';
  };

  return <Card className="relative overflow-hidden h-[245px] md:h-[385px] animate-fade-in border-4 md:border-8 border-white/20 backdrop-blur-sm" style={{
    borderRadius: '1.5rem',
    animationDelay: `${index * 150}ms`,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
  }}>
      {/* Single Background Image with lazy loading */}
      <div className="absolute inset-0">
        <LazyImage
          src={master.avatar_url || master.images[0]}
          alt={`${master.name} — мастер маникюра и педикюра в Витебске, студия KOGTI`}
          wrapperClassName="w-full h-full"
          imgClassName="w-full h-full object-cover"
          placeholder={true}
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
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
        {/* Master Name */}
        <p className="text-lg md:text-2xl font-bold mb-0">
          {master.name}
        </p>
        
        {/* Description */}
        <h3 className="text-[10.5px] md:text-[11.5px] font-medium text-gray-200 mb-1 md:mb-2 leading-relaxed line-clamp-3 md:line-clamp-none">
          {master.description.split('\n').map((line: string, lineIndex: number) => <span key={lineIndex}>
              {line}
              {lineIndex < master.description.split('\n').length - 1 && <br />}
            </span>)}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-3 mb-1 md:mb-2">
          <span className="inline-flex w-fit bg-white/20 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-lg">
            {master.title}
          </span>
          <span className="inline-flex w-fit bg-white/20 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-lg">
            {master.experience}
          </span>
        </div>

        {/* Button */}
        {master.booking_link && getWidgetId() && (
          <DikidiButton 
            widgetId={getWidgetId()}
            className="flex items-center justify-center w-full mx-auto bg-white text-black hover:bg-white/90 font-semibold h-[34px] md:h-12 py-0 md:py-0.5 rounded-full text-xs md:text-base transition-all duration-300"
          />
        )}
      </div>
    </Card>;
};
export default memo(Team);