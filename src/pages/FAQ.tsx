import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MobileMenu from "@/components/MobileMenu";

const faqData = [
  {
    question: "Где находится салон красоты KOGTI в Витебске?",
    answer:
      "Наша студия красоты расположена в центре Витебска по адресу: ул. Ленина, 26, БЦ СИТИ (вход в Сбербанк), 3 этаж, офис 314. Очень удобное расположение с хорошей транспортной доступностью.",
  },
  {
    question: "Сколько стоит маникюр в Витебске в вашем салоне?",
    answer:
      "Стоимость маникюра в нашей студии в Витебске зависит от выбранного мастера и вида услуги. Коррекция ногтей гелем от 50 BYN. Точную стоимость уточняйте при записи к конкретному мастеру.",
  },
  {
    question: "Какие материалы вы используете для маникюра и педикюра?",
    answer:
      "Мы работаем только с качественными и проверенными брендами материалов для nail-сервиса. Используем профессиональные гель-лаки, которые держатся до 3-4 недель, безопасные средства для обработки кутикулы и современное стерилизационное оборудование.",
  },
  {
    question: "Как записаться на маникюр в Витебске к вашим мастерам?",
    answer:
      "Записаться на маникюр или педикюр можно несколькими способами: через виджет записи на нашем сайте, по телефону или в сообщениях социальных сетей. У каждого мастера есть своя ссылка для онлайн-записи.",
  },
  {
    question: "Делаете ли вы наращивание ногтей в Витебске?",
    answer:
      "Да, в нашей студии красоты KOGTI вы можете сделать наращивание ногтей гелем на верхние и нижние формы. Наши мастера владеют современными техниками наращивания и могут создать ногти любой длины и формы.",
  },
  {
    question: "Сколько времени занимает процедура маникюра?",
    answer:
      "Время выполнения маникюра зависит от сложности ногтей и дизайна: коррекция ногтей гелем — 1-1,5 часа, коррекция с дизайном — 1,5-2 часа, наращивание ногтей — 2-2,5 часа.",
  },
  {
    question: "Какой опыт у ваших мастеров маникюра в Витебске?",
    answer:
      "В нашей команде работают мастера с опытом от 2 до 6 лет. Все регулярно повышают квалификацию, изучают новые техники nail-арта и следят за трендами в индустрии красоты.",
  },
  {
    question: "Работаете ли вы в выходные дни?",
    answer:
      "Да, наша студия красоты в Витебске работает 7 дней в неделю. График работы каждого мастера может отличаться, поэтому при записи уточняйте удобное для вас время.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Частые вопросы о маникюре в Витебске — KOGTI</title>
        <meta
          name="description"
          content="Ответы на популярные вопросы о маникюре, педикюре и наращивании ногтей в студии KOGTI в Витебске. Цены, материалы, запись, адрес."
        />
        <meta name="keywords" content="маникюр Витебск вопросы, цена маникюра Витебск, запись на маникюр Витебск, KOGTI FAQ" />
        <link rel="canonical" href="https://kogtistudio.by/faq" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Частые вопросы о маникюре в Витебске — KOGTI" />
        <meta property="og:description" content="Цены, материалы, запись, адрес — отвечаем на популярные вопросы о наших услугах." />
        <meta property="og:url" content="https://kogtistudio.by/faq" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://kogtistudio.by/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((q) => ({
              "@type": "Question",
              "name": q.question,
              "acceptedAnswer": { "@type": "Answer", "text": q.answer },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://kogtistudio.by/" },
              { "@type": "ListItem", "position": 2, "name": "Вопросы и ответы", "item": "https://kogtistudio.by/faq" }
            ]
          })}
        </script>
      </Helmet>

      <MobileMenu />

      <section className="py-20 bg-muted/30">
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
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Частые вопросы о маникюре в Витебске
              </h1>
              <p className="text-xl text-muted-foreground">
                Ответы на популярные вопросы о наших услугах в студии красоты KOGTI
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Лучший салон красоты в Витебске для ваших ногтей
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Студия красоты KOGTI в Витебске — это место, где вы получите качественный
                маникюр, педикюр и наращивание ногтей от опытных мастеров. Мы используем только
                проверенные материалы и современные техники для создания идеального образа ваших
                ногтей.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/about" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  О студии KOGTI →
                </Link>
                <Link to="/careers" className="text-primary hover:text-primary/80 underline underline-offset-4">
                  Работа мастером маникюра →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
