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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* App-style background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${appBackground})` }}
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 w-full max-w-md mx-auto">
        <div className="modern-card p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-8 text-tropical-cream">
            Услуги
          </h2>

          {/* Toggle Switch */}
          <div className="relative mb-8 bg-tropical-green/30 rounded-2xl p-1.5 backdrop-blur-sm border border-tropical-gold/20">
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
                    ? 'text-tropical-dark' 
                    : 'text-tropical-cream hover:text-tropical-gold'
                }`}
              >
                Маникюр
              </button>
              <button
                onClick={() => setActiveTab('pedicure')}
                className={`flex-1 py-3 px-4 text-center font-medium rounded-xl transition-all duration-300 ${
                  activeTab === 'pedicure' 
                    ? 'text-tropical-dark' 
                    : 'text-tropical-cream hover:text-tropical-gold'
                }`}
              >
                Педикюр
              </button>
            </div>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            {currentServices.map((service, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="animate-fade-in service-item p-4 text-tropical-cream hover:text-tropical-gold transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-tropical-gold group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm font-medium leading-relaxed">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;