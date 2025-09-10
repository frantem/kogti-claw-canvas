import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { supabase } from '@/integrations/supabase/client';
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Team from "@/components/Team";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [seoData, setSeoData] = useState({
    title: 'KOGTI Beauty Studio',
    description: 'Салон красоты KOGTI - профессиональный маникюр, педикюр и nail-арт',
    keywords: 'маникюр, педикюр, nail-арт, салон красоты'
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
            title: settingsMap.seo_title || 'KOGTI Beauty Studio',
            description: settingsMap.seo_description || 'Салон красоты KOGTI - профессиональный маникюр, педикюр и nail-арт',
            keywords: settingsMap.seo_keywords || 'маникюр, педикюр, nail-арт, салон красоты'
          });
        }
      } catch (error) {
        console.error('Error fetching SEO data:', error);
      }
    };

    fetchSEOData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <ServicesSection />
        <Team />
        <ContactSection />
        <LocationSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
