const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Студия красоты KOGTI в Витебске — как нас найти
          </h2>
          <p className="text-gray-600">
            Удобное расположение в центре Витебска для посещения маникюра и педикюра
          </p>
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

          {/* Address Information with local SEO */}
          <div className="text-center">
            <div className="text-lg text-gray-800 leading-relaxed space-y-3">
              <h3 className="font-semibold text-xl mb-4">Адрес салона красоты KOGTI в Витебске:</h3>
              <p className="font-semibold">г. Витебск, ул. Ленина, 26</p>
              <p>БЦ СИТИ (вход в Сбербанк)</p>
              <p>3 этаж, направо, офис 314</p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Как добраться:</strong> Наша студия красоты находится в самом центре Витебска, 
                  рядом с основными транспортными развязками. Удобно добираться на общественном транспорте 
                  и на личном автомобиле.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;