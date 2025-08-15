import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Search, ArrowLeft } from "lucide-react";
import nailWork1 from "@/assets/nail-work-1.jpg";
import nailWork2 from "@/assets/nail-work-2.jpg";
import nailWork3 from "@/assets/nail-work-3.jpg";
import nailWork4 from "@/assets/nail-work-4.jpg";
import nailWork5 from "@/assets/nail-work-5.jpg";
import nailWork6 from "@/assets/nail-work-6.jpg";
import masterEmily from "@/assets/master-anna.jpg";

const InspirationGallery = () => {
  const nailImages = [nailWork1, nailWork2, nailWork3, nailWork4, nailWork5, nailWork6];
  
  return (
    <div className="max-w-sm mx-auto bg-gray-900/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-700/30 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <ArrowLeft size={20} />
        </Button>
        <div className="flex gap-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Heart size={20} />
          </Button>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Add inspo</h2>
        <p className="text-gray-400 text-sm">Your references for stylist</p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-6">
        <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Autumn ×</span>
        <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Almond shape ×</span>
        <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">Nude ×</span>
      </div>

      {/* Profile Card */}
      <div className="bg-white/10 rounded-2xl p-4 mb-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={masterEmily} alt="Emily Taylor" />
            <AvatarFallback>ET</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-white">Emily Taylor</h3>
          </div>
          <Heart className="w-5 h-5 text-gray-400" />
        </div>
        <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-xl py-2 text-sm">
          Follow
        </Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {nailImages.map((image, index) => (
          <div key={index} className="relative group">
            <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden">
              <img 
                src={image} 
                alt={`Nail design ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <Heart className="w-4 h-4 text-white/70 hover:text-white cursor-pointer" />
              </div>
              {index === 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-white font-semibold">Added 13 Pics</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationGallery;