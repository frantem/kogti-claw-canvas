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
    <section id="services" className="py-20 bg-secondary text-foreground overflow-hidden">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Наши услуги
        </h2>
        <p className="text-xl text-primary max-w-2xl mx-auto">
          Полный спектр услуг для красоты ваших ногтей
        </p>
        <div className="text-2xl mt-4">🌿</div>
      </div>

      {/* Service categories */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary/20 transition-colors">
              🌿
            </div>
            <h3 className="text-xl font-semibold mb-4">Маникюр</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Классический и комбинированный маникюр с покрытием и без
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary/20 transition-colors">
              ✨
            </div>
            <h3 className="text-xl font-semibold mb-4">Наращивание</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Наращивание и коррекция ногтей любой сложности
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary/20 transition-colors">
              🍃
            </div>
            <h3 className="text-xl font-semibold mb-4">Педикюр</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Умный педикюр и покрытие пальцев ног
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;