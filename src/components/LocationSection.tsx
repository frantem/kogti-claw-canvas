const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Как пройти
          </h2>
        </div>

        <div className="flex flex-col items-center">
          {/* Yandex Map */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://yandex.by/map-widget/v1/?z=12&ol=biz&oid=82897023219" 
              width="560" 
              height="400" 
              frameBorder="0"
              className="w-full max-w-[560px] h-[400px]"
              title="Yandex Map - Nail Studio Location"
            />
          </div>

          {/* Address Information */}
          <div className="text-center">
            <div className="text-lg text-gray-800 leading-relaxed">
              <p className="font-semibold mb-2">Адрес: г. Витебск Ленина, 26</p>
              <p>БЦ СИТИ(вход в сбербанк)</p>
              <p>3 этаж, направо, 314 офис</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;