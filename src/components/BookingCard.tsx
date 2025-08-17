import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import masterEmily from "@/assets/master-anna.jpg";
const BookingCard = () => {
  const handleBookingClick = () => {
    console.log('Button clicked, checking dikidi widget...');
    console.log('window.dikidi:', (window as any).dikidi);
    console.log('window.DikidiOnlineWidget:', (window as any).DikidiOnlineWidget);
    
    // Попробуем разные варианты API
    try {
      // @ts-ignore
      if (typeof (window as any).DikidiOnlineWidget === 'function') {
        // @ts-ignore
        (window as any).DikidiOnlineWidget();
        console.log('DikidiOnlineWidget() called');
      // @ts-ignore  
      } else if ((window as any).dikidi && typeof (window as any).dikidi.openWidget === 'function') {
        // @ts-ignore
        (window as any).dikidi.openWidget();
        console.log('dikidi.openWidget() called');
      // @ts-ignore
      } else if ((window as any).dikidi && typeof (window as any).dikidi.open === 'function') {
        // @ts-ignore
        (window as any).dikidi.open();
        console.log('dikidi.open() called');
      } else {
        console.error('Dikidi widget not found or not loaded properly');
        console.log('Available window properties:', Object.keys(window).filter(key => key.toLowerCase().includes('dikidi')));
      }
    } catch (error) {
      console.error('Error opening widget:', error);
    }
  };

  return <div className="w-full bg-white/95 backdrop-blur-xl rounded-[4rem] p-6 shadow-2xl border border-white/20">

      {/* Service Card */}
      <div className="rounded-[4rem] p-6 mb-3 -mt-[20px] -mx-[20px] bg-neutral-300">
        <div className="flex items-center gap-4">
          {/* Oval image with KOGTI text */}
          <div className="relative -mt-4 -ml-4 -mb-4">
            <div className="w-24 h-36 rounded-[4rem] bg-cover bg-center border-2 border-white shadow-md" style={{
            backgroundImage: `url(/lovable-uploads/91410034-49dc-4e34-8fa7-4730a6d1e217.png)`
          }}>
              <div className="absolute inset-0 bg-black/30 rounded-[4rem] flex items-center justify-center">
                <span className="text-white text-xs font-bold">KOGTI</span>
              </div>
            </div>
          </div>
          
          {/* Content on the right */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">Маникюр</h3>
                <p className="text-xs text-gray-500">+ pedicure</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">рекомендуем</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-12 h-12 border-2 border-white">
                  <AvatarImage src={masterEmily} alt="Stylist" />
                  <AvatarFallback>ET</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-gray-300">
                  <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">Мастер: Аня</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Date & Time Selection */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">Работы мастера</p>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-amber-200 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-rose-200 rounded-full border-2 border-white"></div>
            <div className="w-8 h-8 bg-purple-200 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs font-medium">+3</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">   Горящие окна🔥</p>
          <div className="text-right">
            <p className="font-semibold text-gray-900">Пн 21.08</p>
            <p className="text-sm text-gray-500">12:00-18:30</p>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <Button 
        onClick={handleBookingClick}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-2xl py-4 font-semibold text-base"
      >
        Записаться
      </Button>

      <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">При записи Вы получаете карту клиента с персанальной скидкой 20%</p>
    </div>;
};
export default BookingCard;