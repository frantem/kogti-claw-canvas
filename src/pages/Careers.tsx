import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Check } from "lucide-react";
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import LazyImage from "@/components/LazyImage";
import team1 from "@/assets/careers/team-1.webp";
import team2 from "@/assets/careers/team-2.webp";
import team3 from "@/assets/careers/team-3.webp";

const PHONE = "+375336582639";
const PHONE_DISPLAY = "+375 (33) 658-26-39";

const perks = [
  "Растущий процент до 45%",
  "Выход под запись",
  "Не нужно отсиживать время, если нет работы",
  "Все чаевые остаются мастеру",
  "Удобства: кондиционер, чай, кофе, сладости, телевизор, WiFi",
  "Коллектив хороших и дружных девочек, которые поддержат, помогут и обучают друг друга",
];

const Careers = () => {
  const handleInstagram = () =>
    window.open("https://www.instagram.com/kogti.studio_?igsh=MTBhd3lxZzB5ZHpqcw==", "_blank");
  const handleTelegram = () => window.open("https://t.me/kotovichOlga", "_blank");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Работа мастером маникюра в Витебске — вакансии в студии KOGTI</title>
        <meta
          name="description"
          content="Вакансия мастера маникюра в Витебске. Студия красоты KOGTI приглашает в команду: процент до 45%, обучение, центр города (ул. Ленина 26)."
        />
        <meta
          name="keywords"
          content="работа мастером маникюра Витебск, вакансия мастера маникюра Витебск, требуется мастер маникюра Витебск, работа в салоне красоты Витебск, ищу мастера маникюра Витебск, работа nail-мастером Витебск"
        />
        <link rel="canonical" href="https://kogtistudio.by/careers" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Работа мастером маникюра в Витебске — KOGTI" />
        <meta
          property="og:description"
          content="Вакансия мастера маникюра в студии KOGTI в центре Витебска. Процент до 45%, дружный коллектив, обучение."
        />
        <meta property="og:url" content="https://kogtistudio.by/careers" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://kogtistudio.by/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "Мастер маникюра",
            "description":
              "<p>Студия красоты KOGTI в центре Витебска приглашает в команду мастера маникюра. Растущий процент до 45%, выход под запись, дружный коллектив, обучение для начинающих.</p><ul><li>Процент до 45%</li><li>Выход под запись</li><li>Чаевые — мастеру</li><li>Кондиционер, чай/кофе, WiFi</li></ul>",
            "datePosted": "2026-06-17",
            "validThrough": "2027-06-17",
            "employmentType": ["FULL_TIME", "PART_TIME"],
            "hiringOrganization": {
              "@type": "Organization",
              "name": "KOGTI Beauty Studio",
              "sameAs": "https://kogtistudio.by/",
              "logo": "https://kogtistudio.by/favicon-192x192.png",
            },
            "jobLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Ленина, 26, БЦ СИТИ, 3 этаж, офис 314",
                "addressLocality": "Витебск",
                "addressRegion": "Витебская область",
                "postalCode": "210026",
                "addressCountry": "BY",
              },
            },
            "applicantLocationRequirements": {
              "@type": "Country",
              "name": "Belarus",
            },
            "baseSalary": {
              "@type": "MonetaryAmount",
              "currency": "BYN",
              "value": {
                "@type": "QuantitativeValue",
                "unitText": "COMMISSION",
                "value": 45,
                "minValue": 35,
                "maxValue": 45,
              },
            },
            "qualifications":
              "Опыт работы мастером маникюра желательно от 1 года. Для начинающих с потенциалом — бесплатное обучение.",
            "industry": "Beauty & Wellness",
            "occupationalCategory": "39-5092 Manicurists and Pedicurists",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://kogtistudio.by/" },
              { "@type": "ListItem", "position": 2, "name": "Вакансии", "item": "https://kogtistudio.by/careers" },
            ],
          })}
        </script>
      </Helmet>

      <MobileMenu />

      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Назад на главную
            </Link>

            {/* HERO */}
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-primary mb-4 font-semibold">
                Вакансия · студия KOGTI · ул. Ленина 26
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Работа мастером маникюра в&nbsp;Витебске
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Студия красоты KOGTI приглашает мастеров маникюра в&nbsp;команду в центре Витебска
              </h2>
            </div>

            {/* Hero photo */}
            <div className="relative rounded-3xl overflow-hidden mb-16 aspect-[16/9] md:aspect-[21/9] shadow-2xl">
              <LazyImage
                src={team3}
                alt="Команда мастеров маникюра студии KOGTI за работой в Витебске"
                wrapperClassName="absolute inset-0"
                imgClassName="w-full h-full object-cover"
                eager
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
                <p className="text-white/90 text-sm md:text-base max-w-md backdrop-blur-sm bg-black/20 rounded-xl p-3 md:p-4">
                  Уютная студия в центре города. Светло, чисто, дружно.
                </p>
              </div>
            </div>

            {/* Main letter from Olya */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-10 mb-16">
              <div className="prose prose-lg max-w-none text-foreground space-y-5 leading-relaxed">
                <p className="text-lg">
                  Меня зовут <strong>Оля</strong> — основательница студии <strong>KOGTI</strong>.
                </p>
                <p className="text-lg">Предлагаю Вам вступить в нашу команду!</p>
                <p>
                  Мы студия красоты в центре города — <strong>ул. Ленина 26</strong>. В KOGTI работают
                  комфортные, ответственные и общительные люди.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">Что мы предлагаем</h3>
                    <ul className="space-y-3">
                      {perks.map((p, i) => (
                        <li key={i} className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">Кого мы ищем</h3>
                    <p>
                      <strong>Мастера маникюра</strong> с опытом желательно от 1 года, но если ты
                      считаешь, что твои навыки ещё слабоваты, но ты хорошо обучаешься и готова
                      работать, то <strong>я смогу тебя обучить бесплатно</strong>!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                <LazyImage
                  src={team1}
                  alt="Коллектив студии маникюра KOGTI в Витебске"
                  wrapperClassName="absolute inset-0"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
                <LazyImage
                  src={team2}
                  alt="Мастера маникюра студии KOGTI на рабочем месте — Витебск, ул. Ленина 26"
                  wrapperClassName="absolute inset-0"
                  imgClassName="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Why us cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Центр Витебска</h3>
                <p className="text-sm text-muted-foreground">
                  БЦ СИТИ на ул. Ленина 26 — удобная локация, поток клиентов
                </p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Гибкий график</h3>
                <p className="text-sm text-muted-foreground">
                  Выход под запись — не нужно отсиживать смену впустую
                </p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Бесплатное обучение</h3>
                <p className="text-sm text-muted-foreground">
                  Готовы вкладываться в рост начинающих мастеров с потенциалом
                </p>
              </Card>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-card/60 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Откликнуться на вакансию
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Позвони или напиши в Telegram / Instagram — обсудим всё лично
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Позвонить {PHONE_DISPLAY}
                  </a>
                </Button>
                <Button
                  onClick={handleTelegram}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Telegram
                </Button>
                <Button
                  onClick={handleInstagram}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Instagram
                </Button>
              </div>
            </div>

            {/* SEO copy block */}
            <div className="mt-16 max-w-3xl mx-auto text-muted-foreground text-sm leading-relaxed space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Работа мастером маникюра в Витебске — присоединяйся к KOGTI
              </h2>
              <p>
                Ищешь <strong>работу мастером маникюра в&nbsp;Витебске</strong>? Студия KOGTI открывает
                актуальную <strong>вакансию мастера маникюра&nbsp;— Витебск</strong>, центр города,
                БЦ&nbsp;СИТИ на&nbsp;ул.&nbsp;Ленина&nbsp;26. Мы предлагаем растущий процент до&nbsp;45%,
                удобный график «выход под запись», все чаевые остаются мастеру, оборудованное рабочее
                место и&nbsp;поддержку дружного коллектива.
              </p>
              <p>
                Если ты&nbsp;ищешь, где <strong>требуется мастер маникюра в&nbsp;Витебске</strong>,
                или хочешь сменить салон на&nbsp;более комфортный, напиши нам. Для&nbsp;начинающих
                мастеров&nbsp;— бесплатное обучение от&nbsp;основательницы студии.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
