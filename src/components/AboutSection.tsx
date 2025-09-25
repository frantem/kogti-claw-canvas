import { Card } from "@/components/ui/card";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with local keywords */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              О студии красоты KOGTI в Витебске
            </h2>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content with SEO keywords */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Почему выбирают нас в Витебске?
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>KOGTI Beauty Studio</strong> — ведущая студия красоты в Витебске, специализирующаяся на 
                  профессиональном маникюре и педикюре. Мы находимся в самом центре города по адресу 
                  ул. Ленина, 26 (БЦ СИТИ, 3 этаж, офис 314).
                </p>
                
                <p>
                  Наши мастера имеют многолетний опыт и регулярно повышают квалификацию, изучая новейшие 
                  техники и работы с современными материалами. Мы используем только качественные 
                  материалы и профессиональное оборудование.
                </p>
                
                <p>
                  В нашей студии красоты в Витебске вы можете сделать классический и аппаратный маникюр, 
                  педикюр, наращивание ногтей, покрытие гель-лаком, дизайн ногтей и френч.
                </p>
              </div>

              {/* Key advantages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Опытные мастера</h4>
                  <p className="text-sm text-muted-foreground">
                    Команда профессионалов с опытом от 2 до 6 лет
                  </p>
                </Card>
                
                <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Центр Витебска</h4>
                  <p className="text-sm text-muted-foreground">
                    Удобное расположение в БЦ СИТИ на ул. Ленина
                  </p>
                </Card>
                
                <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Качественные материалы</h4>
                  <p className="text-sm text-muted-foreground">
                    Используем только проверенные бренды и материалы
                  </p>
                </Card>
                
                <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">Индивидуальный подход</h4>
                  <p className="text-sm text-muted-foreground">
                    Учитываем пожелания каждого клиента
                  </p>
                </Card>
              </div>
            </div>

            {/* Services list with local keywords */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;