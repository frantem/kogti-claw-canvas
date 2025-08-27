import { useState } from "react";
import appBackground from "@/assets/app-background.jpg";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'manicure' | 'pedicure'>('manicure');

  const nailImages = [
    "/lovable-uploads/4fe67fb0-8003-4e98-8f68-7ecc827d5bba.png",
    "/lovable-uploads/5a5fefe4-d334-417b-8e67-e9fd1563b7ae.png",
    "/lovable-uploads/97fe75cf-3ac1-4579-911e-f5dd89f29120.png",
    "/lovable-uploads/561482c5-bd57-423e-908b-8c13c394a90b.png",
    "/lovable-uploads/0b67f8e0-2e73-4296-8207-9a016f836474.png",
    "/lovable-uploads/fd58fd9d-58a6-47b6-a743-1681b29593d0.png",
    "/lovable-uploads/0d28f136-94b4-47d1-bc06-86c56a540227.png"
  ];

  const manicureServices = [
    { name: "Коррекция/покрытие ногтей гелем", widget: "192348" },
    { name: "Наращивание ногтей", widget: "192349" },
    { name: "Коррекция ногтей гелем с восстановлением архитектуры", widget: "192350" },
    { name: "Комбинированный маникюр без покрытия", widget: "192351" },
    { name: "Комбинированный маникюр + покрытие лаком", widget: "192352" },
    { name: "Снятие покрытия + комбинированный маникюр", widget: "192471" },
    { name: "Маникюр мужской", widget: "192472" },
    { name: "Наращивание ногтей ЭКСТРА-длина", widget: "192473" }
  ];

  const pedicureServices = [
    { name: "педикюр пальчики + покрытие гель-лаком", widget: "192474" },
    { name: "смарт педикюр + пальчики+гель-лак", widget: "192475" },
    { name: "смарт педикюр + пальчики без покрытия", widget: "192476" },
    { name: "только пальчики без покрытия", widget: "192477" }
  ];

  const currentServices = activeTab === 'manicure' ? manicureServices : pedicureServices;

  const getRandomImage = (index: number) => {
    return nailImages[index % nailImages.length];
  };

  const handleServiceClick = (widget: string) => {
    window.open(`https://dikidi.ru/#widget=${widget}`, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gray-100 py-20">
      {/* Content */}
      <div className="relative z-10 px-6 w-full max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Услуги
        </h2>

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
              className="animate-fade-in overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group border-4 border-white/20 rounded-3xl"
              style={{ 
                animationDelay: `${index * 100}ms`
              }}
              onClick={() => handleServiceClick(service.widget)}
            >
              <div 
                className="aspect-square relative bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${getRandomImage(index)})` }}
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