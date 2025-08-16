import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import masterEmily from "@/assets/master-anna.jpg";
const BookingCard = () => {
  return <div className="w-full bg-white/95 backdrop-blur-xl rounded-[3rem] p-6 shadow-2xl border border-white/20">

      {/* Service Card */}
      <div className="rounded-[3rem] p-6 mb-3 -mt-[21px] -mx-[21px] bg-neutral-300">
        <div className="flex items-center gap-4">
          {/* Oval image with KOGTI text */}
          <div className="relative">
            <div className="w-20 h-28 rounded-[3rem] bg-cover bg-center border-2 border-white shadow-md" style={{
            backgroundImage: `url(/lovable-uploads/91410034-49dc-4e34-8fa7-4730a6d1e217.png)`
          }}>
              <div className="absolute inset-0 bg-black/30 rounded-[3rem] flex items-center justify-center">
                <span className="text-white text-xs font-bold">KOGTI</span>
              </div>
            </div>
          </div>
          
          {/* Content on the right */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                <span className="text-sm">💅</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">Маникюр</h3>
                <p className="text-xs text-gray-500">+ pedicure</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">рекомендуем</span>
            </div>

            <div className="flex items-center gap-3">
              <Avatar className="w-6 h-6">
                <AvatarImage src={masterEmily} alt="Stylist" />
                <AvatarFallback>ET</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-900">Мастер: Аня</p>
                <p className="text-xs text-gray-500">Kogti studio</p>
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
      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-2xl py-4 font-semibold text-base">
        Записаться
      </Button>

      <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">При записи Вы получаете карту клиента с персанальной скидкой 20%</p>
    </div>;
};
export default BookingCard;