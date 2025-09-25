import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { supabase } from '@/integrations/supabase/client';
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Team from "@/components/Team";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import SEOContent from "@/components/SEOContent";
import Footer from "@/components/Footer";

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
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kogti.lovable.app" />
        <meta property="og:locale" content="ru_BY" />
        <meta property="og:site_name" content="KOGTI Beauty Studio" />
        
        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "KOGTI Beauty Studio",
            "description": "Профессиональный маникюр и педикюр в Витебске",
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
            "url": "https://kogti.lovable.app",
            "telephone": "+375 (29) 123-45-67",
            "priceRange": "$$",
            "openingHours": "Mo-Su 10:00-20:00",
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
        <ServicesSection />
        <Team />
        <ContactSection />
        <LocationSection />
        <SEOContent />
        <AboutSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
