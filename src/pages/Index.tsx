import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import MobileMenu from "@/components/MobileMenu";
import DeferredSection from "@/components/DeferredSection";
import { useSettings } from "@/hooks/useSettings";

// Lazy load non-critical components
const ServicesSection = React.lazy(() => import("@/components/ServicesSection"));
const Team = React.lazy(() => import("@/components/Team"));
const LocationSection = React.lazy(() => import("@/components/LocationSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));

const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  const { data: settings } = useSettings(['seo_title', 'seo_description', 'seo_keywords', 'favicon_url', 'og_image_url']);

  const seoData = useMemo(() => ({
    title: settings?.seo_title || 'KOGTI — Маникюр и педикюр в Витебске',
    description: settings?.seo_description || 'Студия KOGTI в центре Витебска: маникюр, педикюр, наращивание ногтей, гель-лак, nail-арт. ул. Ленина 26.',
    keywords: settings?.seo_keywords || 'маникюр Витебск, педикюр Витебск, наращивание ногтей Витебск, салон красоты Витебск, гель-лак Витебск, ногтевая студия Витебск',
    ogImage: settings?.og_image_url || 'https://kogtistudio.by/og-image.jpg',
    favicon: settings?.favicon_url || '/favicon.svg',
  }), [settings]);
  
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <link rel="icon" type="image/svg+xml" href={seoData.favicon} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KOGTI Beauty Studio" />
        <meta name="geo.region" content="BY-VI" />
        <meta name="geo.placename" content="Витебск" />
        <meta name="geo.position" content="55.1904;30.2049" />
        <meta name="ICBM" content="55.1904, 30.2049" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kogtistudio.by/" />
        <link rel="alternate" hrefLang="ru-BY" href="https://kogtistudio.by/" />
        <link rel="alternate" hrefLang="ru" href="https://kogtistudio.by/" />
        <link rel="alternate" hrefLang="x-default" href="https://kogtistudio.by/" />
        
        {/* Preload first 4 service images */}
        <link rel="preload" as="image" type="image/webp" href="/images/services/4fe67fb0-8003-4e98-8f68-7ecc827d5bba.webp" />
        <link rel="preload" as="image" type="image/webp" href="/images/services/5a5fefe4-d334-417b-8e67-e9fd1563b7ae.webp" />
        <link rel="preload" as="image" type="image/webp" href="/images/services/ac52d59c-f173-4e8c-bda0-e07b3687552e.webp" />
        <link rel="preload" as="image" type="image/webp" href="/images/services/b0c50a98-cb3f-4518-81bb-8897d4388396.webp" />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kogtistudio.by/" />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ru_BY" />
        <meta property="og:site_name" content="KOGTI Beauty Studio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["BeautySalon", "LocalBusiness"],
            "@id": "https://kogtistudio.by/#business",
            "name": "KOGTI — ногтевая студия в Витебске",
            "alternateName": "KOGTI Beauty Studio",
            "description": "Маникюр, педикюр и наращивание ногтей в центре Витебска. Профессиональные мастера, качественные материалы, онлайн-запись.",
            "image": "https://kogtistudio.by/og-image.jpg",
            "logo": "https://kogtistudio.by/favicon-192x192.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Ленина, 26, БЦ СИТИ, 3 этаж, офис 314",
              "addressLocality": "Витебск",
              "addressRegion": "Витебская область",
              "postalCode": "210026",
              "addressCountry": "BY"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "55.1904",
              "longitude": "30.2049"
            },
            "url": "https://kogtistudio.by/",
            "telephone": "+375336582639",
            "priceRange": "BYN 25-150",
            "currenciesAccepted": "BYN",
            "paymentAccepted": "Cash, Credit Card",
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              "opens": "09:00",
              "closes": "21:00"
            }],
            "areaServed": [
              { "@type": "City", "name": "Витебск" },
              { "@type": "AdministrativeArea", "name": "Витебская область" }
            ],
            "sameAs": [
              "https://instagram.com/kogtistudio",
              "https://vk.com/kogtistudio"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Услуги маникюра и педикюра в Витебске",
              "itemListElement": [
                { "@type": "Offer", "priceCurrency": "BYN", "price": "50", "itemOffered": { "@type": "Service", "name": "Маникюр в Витебске", "description": "Комбинированный маникюр с покрытием гель-лаком", "areaServed": "Витебск" } },
                { "@type": "Offer", "priceCurrency": "BYN", "price": "60", "itemOffered": { "@type": "Service", "name": "Педикюр в Витебске", "description": "Смарт-педикюр с покрытием гель-лаком", "areaServed": "Витебск" } },
                { "@type": "Offer", "priceCurrency": "BYN", "price": "80", "itemOffered": { "@type": "Service", "name": "Наращивание ногтей в Витебске", "description": "Наращивание ногтей гелем на формы", "areaServed": "Витебск" } },
                { "@type": "Offer", "priceCurrency": "BYN", "price": "50", "itemOffered": { "@type": "Service", "name": "Покрытие гель-лаком", "description": "Покрытие ногтей гель-лаком", "areaServed": "Витебск" } }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://kogtistudio.by/",
            "name": "KOGTI — ногтевая студия в Витебске",
            "inLanguage": "ru-BY"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://kogtistudio.by/" },
              { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://kogtistudio.by/#services" },
              { "@type": "ListItem", "position": 3, "name": "Мастера", "item": "https://kogtistudio.by/#team" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Где находится салон красоты KOGTI в Витебске?", "acceptedAnswer": { "@type": "Answer", "text": "ул. Ленина, 26, БЦ СИТИ (вход в Сбербанк), 3 этаж, офис 314, Витебск." } },
              { "@type": "Question", "name": "Сколько стоит маникюр в Витебске в вашем салоне?", "acceptedAnswer": { "@type": "Answer", "text": "Стоимость зависит от мастера и услуги. Коррекция ногтей гелем от 50 BYN." } },
              { "@type": "Question", "name": "Какие материалы вы используете для маникюра и педикюра?", "acceptedAnswer": { "@type": "Answer", "text": "Профессиональные гель-лаки, безопасные средства для кутикулы и современное стерилизационное оборудование." } },
              { "@type": "Question", "name": "Как записаться на маникюр в Витебске?", "acceptedAnswer": { "@type": "Answer", "text": "Через виджет онлайн-записи на сайте, по телефону или в соцсетях." } },
              { "@type": "Question", "name": "Делаете ли вы наращивание ногтей в Витебске?", "acceptedAnswer": { "@type": "Answer", "text": "Да, наращивание гелем на верхние и нижние формы." } },
              { "@type": "Question", "name": "Сколько времени занимает процедура маникюра?", "acceptedAnswer": { "@type": "Answer", "text": "Коррекция гелем 1–1,5 часа, с дизайном 1,5–2 часа, наращивание 2–2,5 часа." } },
              { "@type": "Question", "name": "Работаете ли вы в выходные дни?", "acceptedAnswer": { "@type": "Answer", "text": "Да, студия работает 7 дней в неделю. График мастера уточняйте при записи." } }
            ]
          })}
        </script>
      </Helmet>
      <main className="min-h-screen">
        <MobileMenu />
        <Hero />
        <React.Suspense fallback={<div className="min-h-[200px] bg-muted/20 animate-pulse" />}>
          <ServicesSection />
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-muted/20 animate-pulse" />}>
          <DeferredSection delay={0}>
            <Team />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-muted/20 animate-pulse" />}>
          <DeferredSection delay={0}>
            <ContactSection />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-muted/20 animate-pulse" />}>
          <DeferredSection delay={0}>
            <LocationSection />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-muted/20 animate-pulse" />}>
          <DeferredSection delay={0}>
            <Footer />
          </DeferredSection>
        </React.Suspense>
      </main>
    </>
  );
};

export default Index;
