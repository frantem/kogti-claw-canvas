import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import MobileMenu from "@/components/MobileMenu";
import DeferredSection from "@/components/DeferredSection";
import { useSettings } from "@/hooks/useSettings";

// Lazy load non-critical components
const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const ServicesSection = React.lazy(() => import("@/components/ServicesSection"));
const Team = React.lazy(() => import("@/components/Team"));
const FAQSection = React.lazy(() => import("@/components/FAQSection"));
const LocationSection = React.lazy(() => import("@/components/LocationSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));

const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  const { data: settings } = useSettings(['seo_title', 'seo_description', 'seo_keywords', 'favicon_url', 'og_image_url']);

  const seoData = useMemo(() => ({
    title: settings?.seo_title || 'Маникюр Витебск - Салон красоты KOGTI | Лучший маникюр и педикюр в Витебске',
    description: settings?.seo_description || 'Профессиональный маникюр и педикюр в Витебске в салоне красоты KOGTI. Наращивание ногтей, гель-лак, nail-арт. Опытные мастера, качественные материалы. г. Витебск, ул. Ленина 26.',
    keywords: settings?.seo_keywords || 'маникюр Витебск, педикюр Витебск, наращивание ногтей Витебск, салон красоты Витебск, студия красоты Витебск, гель-лак Витебск, френч Витебск, ногтевая студия Витебск, nail арт Витебск',
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
        <link rel="alternate" hrefLang="ru" href="https://kogtistudio.by/" />
        
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
            "@type": "BeautySalon",
            "name": "KOGTI Beauty Studio",
            "description": "Профессиональный маникюр и педикюр в Витебске",
            "image": "https://kogtistudio.by/og-image.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Ленина, 26, БЦ СИТИ, 3 этаж, офис 314",
              "addressLocality": "Витебск",
              "addressCountry": "BY"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "55.1904",
              "longitude": "30.2049"
            },
            "url": "https://kogtistudio.by/",
            "telephone": "+375 (29) 123-45-67",
            "priceRange": "$$",
            "openingHours": "Mo-Su 10:00-20:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "150"
            },
            "sameAs": [
              "https://instagram.com/kogtistudio",
              "https://vk.com/kogtistudio"
            ],
            "servedCuisine": [],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Услуги маникюра и педикюра",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Маникюр Витебск",
                    "description": "Профессиональный маникюр в Витебске"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Педикюр Витебск",
                    "description": "Качественный педикюр в Витебске"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Наращивание ногтей Витебск",
                    "description": "Наращивание ногтей в Витебске"
                  }
                }
              ]
            }
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
            <AboutSection />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-muted/20 animate-pulse" />}>
          <DeferredSection delay={0}>
            <FAQSection />
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
