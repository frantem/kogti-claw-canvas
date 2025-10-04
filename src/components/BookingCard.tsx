import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { useState, useEffect, memo } from "react";
import { supabase } from '@/integrations/supabase/client';
import LazyImage from "@/components/LazyImage";
import masterEmily from "@/assets/master-anna.jpg";
import { normalizeDikidiUrl, getWidgetIdFromUrl, openDikidiWidgetById } from "@/lib/dikidi";
const BookingCard = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isBookingLoading, setIsBookingLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    serviceTitle: 'Маникюр',
    serviceSubtitle: '+ pedicure',
    serviceImage: '/lovable-uploads/91410034-49dc-4e34-8fa7-4730a6d1e217.png',
    masterName: 'Мастер: Аня',
    masterAvatar: '/lovable-uploads/0037d6a4-735d-49bb-8011-d4ba7f19c613.png',
    hotDate: 'Пн 21.08',
    hotTime: '12:00-18:30',
    masterPhotos: ["/lovable-uploads/58196edf-6796-4ef3-8d8a-9ed421cec0e6.png", "/lovable-uploads/e16237c3-b291-4dbe-8aaa-562788dd5191.png", "/lovable-uploads/14cd72d6-4ee9-44f2-851e-66bdb17cc1a2.png", "/lovable-uploads/fc02b8a7-9d93-48fc-a79a-b0584e950765.png"],
    bookingLink: 'https://dikidi.ru/#widget=192147'
  });
  useEffect(() => {
    fetchBookingData();
  }, []);
  const fetchBookingData = async () => {
    try {
      const {
        data
      } = await supabase.from('site_settings').select('setting_key, setting_value').in('setting_key', ['booking_service_title', 'booking_service_subtitle', 'booking_service_image', 'booking_master_name', 'booking_master_avatar', 'booking_hot_date', 'booking_hot_time', 'booking_master_photos', 'booking_link']);
      if (data) {
        const settingsMap = data.reduce((acc, item) => {
          acc[item.setting_key] = item.setting_value || '';
          return acc;
        }, {} as Record<string, string>);
        let masterPhotos = [];
        try {
          masterPhotos = JSON.parse(settingsMap.booking_master_photos || '[]');
        } catch (e) {
          masterPhotos = ["/lovable-uploads/58196edf-6796-4ef3-8d8a-9ed421cec0e6.png", "/lovable-uploads/e16237c3-b291-4dbe-8aaa-562788dd5191.png", "/lovable-uploads/14cd72d6-4ee9-44f2-851e-66bdb17cc1a2.png", "/lovable-uploads/fc02b8a7-9d93-48fc-a79a-b0584e950765.png"];
        }
        setBookingData({
          serviceTitle: settingsMap.booking_service_title || 'Маникюр',
          serviceSubtitle: settingsMap.booking_service_subtitle || '+ pedicure',
          serviceImage: settingsMap.booking_service_image || '/lovable-uploads/91410034-49dc-4e34-8fa7-4730a6d1e217.png',
          masterName: settingsMap.booking_master_name || 'Мастер: Аня',
          masterAvatar: settingsMap.booking_master_avatar || '/lovable-uploads/0037d6a4-735d-49bb-8011-d4ba7f19c613.png',
          hotDate: settingsMap.booking_hot_date || 'Пн 21.08',
          hotTime: settingsMap.booking_hot_time || '12:00-18:30',
          masterPhotos: masterPhotos,
          bookingLink: settingsMap.booking_link || 'https://dikidi.ru/#widget=192147'
        });
      }
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  };
  const handleBookingClick = async () => {
    setIsBookingLoading(true);
    
    try {
      const normalizedUrl = normalizeDikidiUrl(bookingData.bookingLink);
      const widgetId = getWidgetIdFromUrl(normalizedUrl);
      
      if (widgetId) {
        await openDikidiWidgetById(widgetId);
      } else {
        window.open(normalizedUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error('Error opening booking:', error);
      try {
        const normalizedUrl = normalizeDikidiUrl(bookingData.bookingLink);
        window.open(normalizedUrl, '_blank', 'noopener,noreferrer');
      } catch {}
    } finally {
      setIsBookingLoading(false);
    }
  };
  return <div className="w-full bg-white/95 backdrop-blur-xl rounded-[4rem] p-6 shadow-2xl border border-white/20">

      {/* Service Card */}
      <div className="rounded-[4rem] p-6 mb-3 -mt-[20px] -mx-[20px] bg-gray-200">
        <div className="flex items-center gap-4">
          {/* Oval image with KOGTI text */}
          <div className="relative -mt-4 -ml-4 -mb-4">
            <div className="w-24 h-36 rounded-[4rem] bg-cover bg-center border-2 border-white shadow-md" style={{
            backgroundImage: `url(${bookingData.serviceImage})`
          }}>
              <div className="absolute inset-0 bg-black/30 rounded-[4rem] flex items-center justify-center">
                <span className="text-white text-xs font-bold">Ленина 26</span>
              </div>
            </div>
          </div>
          
          {/* Content on the right */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">{bookingData.serviceTitle}</h3>
                <p className="text-xs text-gray-500">{bookingData.serviceSubtitle}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">рекомендуем</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-12 h-12 border-2 border-white">
                  <AvatarImage src={bookingData.masterAvatar} alt="Stylist" />
                  <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-gray-300">
                  <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">{bookingData.masterName}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Date & Time Selection */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-start mb-6">
        <div className="min-w-0">
          <p className="text-xs text-gray-500 mb-2">Работы мастера</p>
          <div className="flex -space-x-3">
            {bookingData.masterPhotos && bookingData.masterPhotos.length > 0 ? (
              <>
                {bookingData.masterPhotos.slice(0, 3).map((photo, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div className="relative w-12 h-12 flex-shrink-0 rounded-full border-2 border-white cursor-pointer hover:scale-105 hover:z-10 transition-all shadow-md overflow-hidden aspect-square" style={{ zIndex: index }}>
                        <LazyImage
                          src={photo}
                          alt={`Master work ${index + 1}`}
                          wrapperClassName="w-full h-full rounded-full overflow-hidden aspect-square"
                          imgClassName="w-full h-full object-cover"
                          placeholder="true"
                        />
                        {index === 2 && bookingData.masterPhotos.length > 3 && (
                          <div className="absolute inset-0 bg-black/60 text-white text-xs font-medium rounded-full flex items-center justify-center">
                            +{bookingData.masterPhotos.length - 2}
                          </div>
                        )}
                      </div>
                    </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0 bg-black/95">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {bookingData.masterPhotos.map((photo, photoIndex) => (
                              <CarouselItem key={photoIndex}>
                                <div className="flex aspect-square items-center justify-center p-6">
                                  <LazyImage 
                                    src={photo}
                                    alt={`Nail work ${photoIndex + 1}`}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </DialogContent>
                  </Dialog>
                ))}
              </>
            ) : (
              <div className="text-xs text-gray-400">Нет фотографий</div>
            )}
          </div>
        </div>
        
        <Separator orientation="vertical" className="h-16 justify-self-center mx-4" />
        
        <div className="min-w-0">
          <p className="text-xs text-gray-500 mb-2">Горящие окна🔥</p>
          <div className="text-right">
             <p className="font-semibold text-gray-900">{bookingData.hotDate}</p>
             <p className="text-sm text-gray-500">{bookingData.hotTime}</p>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <button 
        onClick={handleBookingClick}
        disabled={isBookingLoading}
        className="w-full bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl py-4 font-semibold text-base"
      >
        {isBookingLoading ? 'Загрузка...' : 'Записаться'}
      </button>

      <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">При записи Вы получаете карту клиента с персональной скидкой 20%</p>
    </div>;
};
export default memo(BookingCard);