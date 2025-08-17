import { useState } from "react";
import appBackground from "@/assets/app-background.jpg";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'manicure' | 'pedicure'>('manicure');

  const manicureServices = [
    "комбинированный маникюр + покрытие лаком",
    "комбинированный маникюр без покрытия",
    "коррекция ногтей гелем с восстановлением архитектуры",
    "коррекция/покрытие ногтей гелем",
    "маникюр мужской",
    "наращивание ногтей",
    "наращивание ногтей ЭКСТРА-длина",
    "снятие покрытия + комбинированный маникюр",
    "френч/втирка/стемпинг/ на все ногти"
  ];

  const pedicureServices = [
    "педикюр пальчики + покрытие гель-лаком",
    "смарт педикюр + пальчики без покрытия",
    "смарт педикюр + пальчики+гель-лак",
    "только пальчики без покрытия"
  ];

  const currentServices = activeTab === 'manicure' ? manicureServices : pedicureServices;

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
              className="animate-fade-in bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-tropical-gold/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-tropical-gold rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-black leading-tight">
                  {service}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;