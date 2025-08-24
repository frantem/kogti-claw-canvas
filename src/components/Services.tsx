const Services = () => {
  const services = [
    "комбинированный маникюр + покрытие лаком",
    "комбинированный маникюр без покрытия лаком", 
    "гелевая коррекция ногтей с восстановлением архитектуры",
    "гелевое покрытие/коррекция",
    "мужской маникюр",
    "наращивание ногтей",
    "удлиненное наращивание ногтей",
    "снятие лака + комбинированный маникюр",
    "френч/втирка/стемпинг для всех ногтей",
    "пальцы ног + гель-лак",
    "умный педикюр + пальцы ног без лака",
    "умный педикюр + пальцы ног + гель-лак",
    "только пальцы ног без лака"
  ];

  const doubledServices = [...services, ...services];

  return (
    <section id="services" className="py-20 bg-tropical-green text-tropical-cream overflow-hidden">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Наши услуги
        </h2>
        <p className="text-xl text-tropical-gold max-w-2xl mx-auto">
          Полный спектр услуг для красоты ваших ногтей
        </p>
        <div className="text-2xl mt-4 cat-paw">🌿</div>
      </div>

      <div className="relative">
        {/* Scrolling text */}
        <div className="whitespace-nowrap">
          <div className="scroll-text inline-block">
            {doubledServices.map((service, index) => (
              <span 
                key={index}
                className="inline-block text-2xl md:text-3xl font-light mx-12 hover:text-tropical-gold transition-colors duration-300"
              >
                {service} •
              </span>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays to create fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-tropical-green to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-tropical-green to-transparent z-10"></div>
      </div>

      {/* Service categories */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="service-item text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-tropical-gold/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-tropical-gold/20 transition-colors">
              🌿
            </div>
            <h2 className="text-xl font-semibold mb-4 text-tropical-cream">Маникюр</h2>
            <p className="text-tropical-cream/70 text-sm leading-relaxed">
              Классический и комбинированный маникюр с покрытием и без
            </p>
          </div>
          
          <div className="service-item text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-tropical-gold/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-tropical-gold/20 transition-colors">
              ✨
            </div>
            <h2 className="text-xl font-semibold mb-4 text-tropical-cream">Наращивание</h2>
            <p className="text-tropical-cream/70 text-sm leading-relaxed">
              Наращивание и коррекция ногтей любой сложности
            </p>
          </div>
          
          <div className="service-item text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-tropical-gold/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-tropical-gold/20 transition-colors">
              🍃
            </div>
            <h2 className="text-xl font-semibold mb-4 text-tropical-cream">Педикюр</h2>
            <p className="text-tropical-cream/70 text-sm leading-relaxed">
              Умный педикюр и покрытие пальцев ног
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;