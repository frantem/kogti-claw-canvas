import { useState } from "react";
import appBackground from "@/assets/app-background.jpg";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'manicure' | 'pedicure'>('manicure');

  const manicureServices = [
    { name: "Коррекция/покрытие ногтей гелем", widget: "192348", image: "/lovable-uploads/4fe67fb0-8003-4e98-8f68-7ecc827d5bba.png" },
    { name: "Наращивание ногтей", widget: "192349", image: "/lovable-uploads/5a5fefe4-d334-417b-8e67-e9fd1563b7ae.png" },
    { name: "Коррекция ногтей гелем с восстановлением архитектуры", widget: "192350", image: "/lovable-uploads/ac52d59c-f173-4e8c-bda0-e07b3687552e.png" },
    { name: "Комбинированный маникюр без покрытия", widget: "192351", image: "/lovable-uploads/b0c50a98-cb3f-4518-81bb-8897d4388396.png" },
    { name: "Комбинированный маникюр + покрытие лаком", widget: "192352", image: "/lovable-uploads/e81a2e04-654b-4138-9198-7283d67c442d.png" },
    { name: "Снятие покрытия + комбинированный маникюр", widget: "192471", image: "/lovable-uploads/d7e74cb2-6e4b-46ca-88e0-27733084fb89.png" },
    { name: "Маникюр мужской", widget: "192472", image: "/lovable-uploads/f11a9b3d-0b52-4c87-b221-d4b74c8eb4c1.png" },
    { name: "Наращивание ногтей ЭКСТРА-длина", widget: "192473", image: "/lovable-uploads/94931675-31c1-47b7-8be5-3f3ea6ea18ec.png" }
  ];

  const pedicureServices = [
    { name: "педикюр пальчики + покрытие гель-лаком", widget: "192474", image: "/lovable-uploads/20348d5e-0d42-4891-8a1b-fc777688060e.png" },
    { name: "смарт педикюр + пальчики+гель-лак", widget: "192475", image: "/lovable-uploads/5f76a2d7-9098-48a7-9551-6d80c029d356.png" },
    { name: "смарт педикюр + пальчики без покрытия", widget: "192476", image: "/lovable-uploads/2ec81cab-cda0-461a-a37e-305b414a0c9d.png" },
    { name: "только пальчики без покрытия", widget: "192477", image: "/lovable-uploads/2863e9a1-5c91-4251-b35e-bff60835aebc.png" }
  ];

  const currentServices = activeTab === 'manicure' ? manicureServices : pedicureServices;


  const handleServiceClick = (widget: string) => {
    window.open(`https://dikidi.ru/#widget=${widget}`, '_blank');
  };

  console.log('ServicesSection rendering');
  
  return (
    <section className="relative min-h-screen bg-gray-100 py-20">
      {/* Content */}
      <div className="relative z-10 px-6 w-full max-w-6xl mx-auto">
        {/* SEO optimized title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Услуги маникюра и педикюра в Витебске
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессиональные услуги nail-сервиса в студии красоты KOGTI: маникюр, педикюр, наращивание ногтей и дизайн в Витебске
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="relative mb-12 bg-white rounded-2xl p-1.5 border border-gray-200 max-w-md mx-auto">
          <div 
            className={`absolute top-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] bg-tropical-gold rounded-xl transition-all duration-300 ease-out ${
              activeTab === 'manicure' ? 'left-1.5' : 'left-[calc(50%+1.5px)]'
            }`}
          />
          <div className="relative flex">
            <button
              onClick={() => setActiveTab('manicure')}
              className={`flex-1 py-3 px-4 text-center font-medium rounded-xl transition-all duration-300 ${
                activeTab === 'manicure' 
                  ? 'text-black' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Маникюр
            </button>
            <button
              onClick={() => setActiveTab('pedicure')}
              className={`flex-1 py-3 px-4 text-center font-medium rounded-xl transition-all duration-300 ${
                activeTab === 'pedicure' 
                  ? 'text-black' 
                  : 'text-black hover:text-gray-600'
              }`}
            >
              Педикюр
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentServices.map((service, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="animate-fade-in overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-4 border-white/20 rounded-3xl"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: '0 0 4px rgba(255, 204, 102, 0.6), 0 0 8px rgba(255, 204, 102, 0.4), 0 0 12px rgba(255, 204, 102, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
              onClick={() => handleServiceClick(service.widget)}
            >
              <div 
                className="aspect-square relative bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-medium text-white leading-tight group-hover:text-tropical-gold transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;