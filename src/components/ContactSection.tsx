import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const handleDikidiBooking = () => {
    // Load Dikidi widget script if not already loaded
    if (!document.querySelector('script[src*="widget2.min.js"]')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://dikidi.ru/assets/js/widget_record/widget2.min.js?v=1755082659';
      document.head.appendChild(script);
    }
    
    // Open Dikidi widget
    window.open('https://dikidi.ru/#widget=192160', '_blank');
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+375336582639';
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/kogti.studio_?igsh=MTBhd3lxZzB5ZHpqcw==', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/kotovichOlga', '_blank');
  };

  const handleViber = () => {
    window.open('viber://chat?number=%2B375336582639', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/375336582639', '_blank');
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-20 flex items-center justify-center"
      style={{ 
        backgroundImage: 'url(/lovable-uploads/faf7cd88-9898-4ed8-b10f-87f855f3fe1b.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Переходите для записи по удобному для Вас сервису!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Онлайн-запись */}
          <Button
            onClick={handleDikidiBooking}
            variant="default"
            size="lg"
            className="h-16 text-lg font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
          >
            Онлайн-запись
          </Button>

          {/* Позвонить */}
          <Button
            onClick={handlePhoneCall}
            variant="default"
            size="lg"
            className="h-16 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Позвонить
          </Button>

          {/* Instagram */}
          <Button
            onClick={handleInstagram}
            variant="default"
            size="lg"
            className="h-16 text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300"
          >
            Instagram
          </Button>

          {/* Telegram */}
          <Button
            onClick={handleTelegram}
            variant="default"
            size="lg"
            className="h-16 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300"
          >
            Telegram
          </Button>

          {/* Viber */}
          <Button
            onClick={handleViber}
            variant="default"
            size="lg"
            className="h-16 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Viber
          </Button>

          {/* WhatsApp */}
          <Button
            onClick={handleWhatsApp}
            variant="default"
            size="lg"
            className="h-16 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;