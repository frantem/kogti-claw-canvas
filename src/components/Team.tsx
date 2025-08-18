import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

const Team = () => {
  const masters = [
    {
      name: "Анна",
      title: "Мастер",
      experience: "опыт 2 года",
      description: "быстро и без потери качества\nсделает самый чёткий квадрат",
      images: [
        "/lovable-uploads/e84b7e94-c364-40bc-a99e-5d69cc533df3.png",
        "/lovable-uploads/91410034-49dc-4e34-8fa7-4730a6d1e217.png",
        "/lovable-uploads/97fe75cf-3ac1-4579-911e-f5dd89f29120.png"
      ]
    },
    {
      name: "Алина", 
      title: "мастер",
      experience: "опыт 3 года",
      description: "сделает как нюд так и крутой дизайн\nтворчиская\nслишком добрая\nотзывчивая",
      images: [
        "/lovable-uploads/4dd231fb-3fef-4306-9f06-e42942cfde19.png",
        "/lovable-uploads/82f78b18-14fe-4e4d-9d23-d4c0f6f9cdcb.png",
        "/lovable-uploads/70c7a95a-b7aa-413f-b691-6b738c05bfd6.png"
      ]
    },
    {
      name: "Виктория",
      title: "ТОП-мастер",
      experience: "опыт 6 лет",
      description: "сделает безупречный маникюр так и педикюр\n100% возращаемость клиентов",
      images: [
        "/lovable-uploads/b85037a7-90ce-4158-af33-f564797e2736.png",
        "/lovable-uploads/561482c5-bd57-423e-908b-8c13c394a90b.png",
        "/lovable-uploads/58196edf-6796-4ef3-8d8a-9ed421cec0e6.png"
      ]
    },
    {
      name: "Оля",
      title: "ТОП-мастер",
      experience: "опыт 5 лет", 
      description: "коммуникабильность\nнюд за час\nидальный френч",
      images: [
        "/lovable-uploads/3663b521-4a9a-4846-90b4-6c24e0c5cf6c.png",
        "/lovable-uploads/fd23db15-f23d-4ff9-8c88-6f63706dc4a1.png",
        "/lovable-uploads/770b1f7b-239e-4d27-9d9f-ccbcd0f4d782.png"
      ]
    }
  ];

  return (
    <section id="team" className="relative min-h-screen py-20" style={{ backgroundImage: 'url(/lovable-uploads/ff28dcc9-cddd-4feb-8f66-ce26adedc889.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Команда
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {masters.map((master, index) => (
            <MasterCard key={index} master={master} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MasterCard = ({ master, index }: { master: any, index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Card 
      className="relative overflow-hidden rounded-3xl h-[500px] shadow-2xl animate-fade-in group transform-gpu perspective-1000"
      style={{
        animationDelay: `${index * 150}ms`,
        transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Full Photo Background with Carousel */}
      <div className="absolute inset-0">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {master.images.map((image: string, imgIndex: number) => (
              <CarouselItem key={imgIndex}>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="right-2 top-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>
      </div>

      {/* Clear Photo Area - 60% */}
      <div className="relative h-[60%]" />

      {/* Blurred Bottom Section - 40% */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40%] flex flex-col justify-between px-6 py-4"
        style={{
          background: `linear-gradient(to bottom, 
            transparent 0%,
            rgba(0, 0, 0, 0.1) 10%,
            rgba(0, 0, 0, 0.3) 30%,
            rgba(0, 0, 0, 0.6) 70%,
            rgba(0, 0, 0, 0.8) 100%)`,
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Text Content */}
        <div className="text-white flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-1">
            {master.name}
          </h3>
          <p className="text-sm text-gray-200 mb-1">
            {master.title}
          </p>
          <p className="text-sm text-gray-200 mb-2">
            {master.experience}
          </p>
          <div className="text-sm leading-relaxed">
            {master.description.split('\n').map((line: string, lineIndex: number) => (
              <div key={lineIndex}>{line}</div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <Button 
            className="w-full bg-white text-black hover:bg-gray-50 font-semibold py-3 rounded-3xl transition-all duration-300 shadow-lg border border-gray-200"
          >
            Записаться
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Team;