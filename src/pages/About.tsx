import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import MobileMenu from "@/components/MobileMenu";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>О студии красоты KOGTI в Витебске — маникюр и педикюр</title>
        <meta
          name="description"
          content="KOGTI Beauty Studio — ведущая студия красоты в центре Витебска. Профессиональные мастера маникюра, педикюра и наращивания ногтей. ул. Ленина 26."
        />
        <meta name="keywords" content="студия красоты Витебск, салон маникюра Витебск, KOGTI Витебск, ногтевая студия центр Витебска" />
        <link rel="canonical" href="https://kogtistudio.by/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="О студии красоты KOGTI в Витебске" />
        <meta property="og:description" content="Ведущая студия маникюра и педикюра в центре Витебска. Опытные мастера, качественные материалы." />
        <meta property="og:url" content="https://kogtistudio.by/about" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://kogtistudio.by/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": "https://kogtistudio.by/about",
            "name": "О студии красоты KOGTI в Витебске",
            "description": "О ногтевой студии KOGTI в центре Витебска.",
            "inLanguage": "ru-BY",
            "mainEntity": {
              "@type": "BeautySalon",
              "name": "KOGTI Beauty Studio",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Ленина, 26, БЦ СИТИ, 3 этаж, офис 314",
                "addressLocality": "Витебск",
                "addressCountry": "BY"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://kogtistudio.by/" },
              { "@type": "ListItem", "position": 2, "name": "О студии", "item": "https://kogtistudio.by/about" }
            ]
          })}
        </script>
      </Helmet>

      <MobileMenu />

      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Назад на главную
            </Link>

            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                О студии красоты KOGTI в Витебске
              </h1>
              <p className="text-lg text-muted-foreground">
                Профессиональный маникюр, педикюр и наращивание ногтей в самом центре города
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Почему выбирают нас в Витебске?
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>KOGTI Beauty Studio</strong> — ведущая студия красоты в Витебске,
                  специализирующаяся на профессиональном маникюре и педикюре. Мы находимся в
                  самом центре города по адресу ул. Ленина, 26 (БЦ СИТИ, 3 этаж, офис 314).
                </p>
                <p>
                  Наши мастера имеют многолетний опыт и регулярно повышают квалификацию, изучая
                  новейшие техники и работы с современными материалами. Мы используем только
                  качественные материалы и профессиональное оборудование.
                </p>
                <p>
                  В нашей студии красоты в Витебске вы можете сделать классический и аппаратный
                  маникюр, педикюр, наращивание ногтей, покрытие гель-лаком, дизайн ногтей и френч.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Опытные мастера</h3>
                  <p className="text-sm text-muted-foreground">
                    Команда профессионалов с опытом от 2 до 6 лет
                  </p>
                </Card>
                <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Центр Витебска</h3>
                  <p className="text-sm text-muted-foreground">
                    Удобное расположение в БЦ СИТИ на ул. Ленина
                  </p>
                </Card>
                <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Качественные материалы</h3>
                  <p className="text-sm text-muted-foreground">
                    Используем только проверенные бренды и материалы
                  </p>
                </Card>
                <Card className="p-4 bg-card/50 backdrop-blur-sm border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">Индивидуальный подход</h3>
                  <p className="text-sm text-muted-foreground">
                    Учитываем пожелания каждого клиента
                  </p>
                </Card>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  to="/faq"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Частые вопросы о маникюре в Витебске →
                </Link>
                <Link
                  to="/careers"
                  className="text-primary hover:text-primary/80 underline underline-offset-4"
                >
                  Работа мастером маникюра в Витебске →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
