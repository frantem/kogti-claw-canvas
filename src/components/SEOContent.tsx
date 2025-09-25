const SEOContent = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Local SEO content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Маникюр в Витебске
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Профессиональный маникюр в Витебске в студии KOGTI. Мы предлагаем классический и аппаратный маникюр, гелевое укрепление ногтей, покрытие гель-лаком, дизайн ногтей. Удобное расположение в центре города на ул. Ленина, 26.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Педикюр в Витебске
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Качественный педикюр в Витебске от опытных мастеров. Классический и аппаратный 
                педикюр, СПА-процедуры для ног, покрытие гель-лаком. Стерильные инструменты 
                и безопасные материалы.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Наращивание ногтей Витебск
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Наращивание ногтей в Витебске гелем и акрилом. Создаем ногти любой длины и формы, 
                укрепляем натуральные ногти. Современные техники и качественные материалы для 
                долговечного результата.
              </p>
            </div>
          </div>

          {/* Additional local keywords content */}
          <div className="bg-muted/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Студия красоты KOGTI — ваш выбор в Витебске
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-foreground">
                  Почему клиенты выбирают нашу ногтевую студию в Витебске:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Лучшие мастера маникюра и педикюра в Витебске</li>
                  <li>✓ Удобное расположение в центре города (ул. Ленина, 26)</li>
                  <li>✓ Современное оборудование и качественные материалы</li>
                  <li>✓ Широкий спектр услуг nail-сервиса</li>
                  <li>✓ Индивидуальный подход к каждому клиенту</li>
                  <li>✓ Доступные цены на все виды маникюра и педикюра</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-foreground">
                  Популярные услуги в нашем салоне красоты:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Маникюр с гель-лаком в Витебске</li>
                  <li>• Френч маникюр классический и цветной</li>
                  <li>• Nail-арт и дизайн ногтей любой сложности</li>
                  <li>• Аппаратный маникюр и педикюр</li>
                  <li>• СПА-процедуры для рук и ног</li>
                  <li>• Коррекция и снятие наращенных ногтей</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Адрес студии красоты KOGTI в Витебске:</strong> ул. Ленина, 26, БЦ СИТИ, 3 этаж, офис 314. 
                Записывайтесь на маникюр и педикюр к лучшим мастерам Витебска!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SEOContent;