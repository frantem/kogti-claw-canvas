import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { supabase } from '@/integrations/supabase/client';
import Hero from "@/components/Hero";
import DeferredSection from "@/components/DeferredSection";

// Lazy load non-critical components
const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const ServicesSection = React.lazy(() => import("@/components/ServicesSection"));
const Team = React.lazy(() => import("@/components/Team"));
const FAQSection = React.lazy(() => import("@/components/FAQSection"));
const LocationSection = React.lazy(() => import("@/components/LocationSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));
const SEOContent = React.lazy(() => import("@/components/SEOContent"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  const [seoData, setSeoData] = useState({
    title: 'Маникюр Витебск - Салон красоты KOGTI | Лучший маникюр и педикюр в Витебске',
    description: 'Профессиональный маникюр и педикюр в Витебске в салоне красоты KOGTI. Наращивание ногтей, гель-лак, nail-арт. Опытные мастера, качественные материалы. г. Витебск, ул. Ленина 26.',
    keywords: 'маникюр Витебск, педикюр Витебск, наращивание ногтей Витебск, салон красоты Витебск, студия красоты Витебск, гель-лак Витебск, френч Витебск, ногтевая студия Витебск, nail арт Витебск'
  });

  useEffect(() => {
    const fetchSEOData = async () => {
      try {
        const { data } = await supabase
          .from('site_settings')
          .select('setting_key, setting_value')
          .in('setting_key', ['seo_title', 'seo_description', 'seo_keywords']);

        if (data) {
          const settingsMap = data.reduce((acc, item) => {
            acc[item.setting_key] = item.setting_value || '';
            return acc;
          }, {} as Record<string, string>);

          setSeoData({
            title: settingsMap.seo_title || 'Маникюр Витебск - Салон красоты KOGTI | Лучший маникюр и педикюр в Витебске',
            description: settingsMap.seo_description || 'Профессиональный маникюр и педикюр в Витебске в салоне красоты KOGTI. Наращивание ногтей, гель-лак, nail-арт. Опытные мастера, качественные материалы. г. Витебск, ул. Ленина 26.',
            keywords: settingsMap.seo_keywords || 'маникюр Витебск, педикюр Витебск, наращивание ногтей Витебск, салон красоты Витебск, студия красоты Витебск, гель-лак Витебск, френч Витебск, ногтевая студия Витебск, nail арт Витебск'
          });
        }
      } catch (error) {
        console.error('Error fetching SEO data:', error);
      }
    };

    fetchSEOData();
  }, []);

  console.log('Index component rendering', { seoData });
  
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
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
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kogtistudio.by/" />
        <meta property="og:image" content="https://kogtistudio.by/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ru_BY" />
        <meta property="og:site_name" content="KOGTI Beauty Studio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://kogtistudio.by/og-image.jpg" />
        
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
        <Hero />
        <React.Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse" />}>
          <DeferredSection delay={500}>
            <ServicesSection />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse" />}>
          <DeferredSection delay={800}>
            <Team />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse" />}>
          <DeferredSection delay={1000}>
            <ContactSection />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse" />}>
          <DeferredSection delay={1200}>
            <LocationSection />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse" />}>
          <DeferredSection delay={1400}>
            <SEOContent />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse" />}>
          <DeferredSection delay={1600}>
            <AboutSection />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse" />}>
          <DeferredSection delay={1800}>
            <FAQSection />
          </DeferredSection>
        </React.Suspense>
        <React.Suspense fallback={<div className="min-h-[200px] bg-gray-100 animate-pulse" />}>
          <DeferredSection delay={2000}>
            <Footer />
          </DeferredSection>
        </React.Suspense>
      </main>
    </>
  );
};

export default Index;
