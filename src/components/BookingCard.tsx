import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import masterEmily from "@/assets/master-anna.jpg";

const BookingCard = () => {
  return (
    <div className="w-full bg-white rounded-3xl p-6 shadow-xl">
      {/* Main service card */}
      <div className="flex items-start gap-4 mb-6">
        {/* Oval studio image */}
        <div className="relative">
          <div 
            className="w-20 h-20 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(/lovable-uploads/91410034-49dc-4e34-8fa7-4730a6d1e217.png)`
            }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">KOGTI</span>
            </div>
          </div>
        </div>
        
        {/* Service info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">рекомендуем</span>
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">Маникюр 3D</h3>
          <p className="text-sm text-gray-500 mb-3">+ nail patterns</p>
          
          {/* Stylist info */}
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={masterEmily} alt="Stylist" />
              <AvatarFallback>А</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">Стилист: Аня</p>
              <p className="text-xs text-gray-500">Kogti Studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Added inspiration and selected date sections */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm text-gray-500 mb-2">Added inspo</p>
          <div className="flex -space-x-2">
            <div 
              className="w-8 h-8 rounded-full border-2 border-white bg-cover bg-center"
              style={{ backgroundImage: `url(/src/assets/nail-work-1.jpg)` }}
            ></div>
            <div 
              className="w-8 h-8 rounded-full border-2 border-white bg-cover bg-center"
              style={{ backgroundImage: `url(/src/assets/nail-work-2.jpg)` }}
            ></div>
            <div 
              className="w-8 h-8 rounded-full border-2 border-white bg-cover bg-center"
              style={{ backgroundImage: `url(/src/assets/nail-work-3.jpg)` }}
            ></div>
            <div className="w-8 h-8 bg-black text-white rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs font-medium">+3</span>
            </div>
          </div>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 mb-2">Selected date</p>
          <div>
            <p className="font-bold text-gray-900 text-lg">Пн 12.11</p>
            <p className="text-sm text-gray-500">12:00-13:30</p>
          </div>
        </div>
      </div>

      {/* Payment button */}
      <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-2xl py-4 font-semibold text-base mb-3">
        Pay 48.99$
      </Button>

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        By confirming the reservation is dependent of 60% of the amount due will be collected
      </p>
    </div>
  );
};

export default BookingCard;