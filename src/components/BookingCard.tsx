import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import masterEmily from "@/assets/master-anna.jpg";
const BookingCard = () => {
  return <div className="w-full bg-white/95 backdrop-blur-xl rounded-t-[3rem] p-6 shadow-2xl border border-white/20">

      {/* Service Card */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
            <span className="text-xl">💅</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Маникюр</h3>
            <p className="text-xs text-gray-500">+ mini pedicure</p>
          </div>
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">рекомендуем</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src={masterEmily} alt="Stylist" />
            <AvatarFallback>ET</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Мастер: Аня</p>
            <p className="text-xs text-gray-500">nail studio</p>
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
          <p className="text-sm text-gray-500 mb-2">Горящие окна🔥</p>
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

      <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">При записи Вы получаете карту клиента с пеперсанальной скидкой 20%</p>
    </div>;
};
export default BookingCard;