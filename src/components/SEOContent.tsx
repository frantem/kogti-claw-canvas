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
          
        </div>
      </div>
    </section>;
};
export default SEOContent;