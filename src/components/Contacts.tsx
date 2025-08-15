import { Button } from "@/components/ui/button";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-nail-cream/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-nail-dark mb-4">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы находимся в самом центре Витебска
          </p>
          <div className="text-2xl mt-4 cat-paw">📍</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-nail-dark mb-6">
                Информация
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-nail-pink flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-nail-dark mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      г. Витебск, ул. Ленина, 26, офис 314
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-nail-rose flex items-center justify-center text-white">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-nail-dark mb-1">Телефон</h4>
                    <p className="text-muted-foreground">
                      +375 (33) 658-26-39
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-nail-gold flex items-center justify-center text-white">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-semibold text-nail-dark mb-1">Часы работы</h4>
                    <p className="text-muted-foreground">
                      Ежедневно с 09:00 до 22:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button 
                  size="lg" 
                  className="btn-hero text-white text-lg px-8 py-4 rounded-xl font-medium border-0 w-full"
                >
                  Позвонить сейчас
                  <span className="ml-2">📞</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae7b4b1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-3xl"
              title="Ногтевая студия KOGTI на карте"
            ></iframe>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-nail-dark mb-4">
              Готовы к преображению?
            </h3>
            <p className="text-muted-foreground mb-6">
              Запишитесь на процедуру прямо сейчас и получите скидку 10% на первое посещение
            </p>
            <Button 
              size="lg" 
              className="btn-hero text-white text-xl px-12 py-6 rounded-2xl font-medium border-0"
            >
              Записаться со скидкой
              <span className="ml-2 cat-paw">🐾</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;