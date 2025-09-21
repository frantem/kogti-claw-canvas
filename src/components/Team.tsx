import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
      description: "сделает как нюд так и крутой дизайн\nтворческая, добрая, отзывчивая",
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
      description: "сделает безупречный маникюр и педикюр\n100% возвращаемость клиентов",
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
      description: "коммуникабельность\nнюд за час\nидельный френч",
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
  return (
    <Card 
      className="relative overflow-hidden h-[450px] md:h-[600px] shadow-xl animate-fade-in border-8 border-white/20 backdrop-blur-sm"
      style={{
        borderRadius: '3rem',
        animationDelay: `${index * 150}ms`,
        boxShadow: '0 0 15px rgba(255, 204, 102, 0.6), 0 0 30px rgba(255, 204, 102, 0.4), 0 0 45px rgba(255, 204, 102, 0.3)'
      }}
    >
      {/* Single Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${master.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            transparent 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.1) 60%,
            rgba(0, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0.6) 80%,
            rgba(0, 0, 0, 0.8) 90%,
            rgba(0, 0, 0, 0.9) 100%)`
        }}
      />

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Master Name */}
        <h3 className="text-2xl font-bold mb-3">
          {master.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-200 mb-4 leading-relaxed">
          {master.description.split('\n').map((line: string, lineIndex: number) => (
            <span key={lineIndex}>
              {line}
              {lineIndex < master.description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        {/* Tags */}
        <div className="flex gap-3 mb-4">
          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-lg">
            {master.title}
          </span>
          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-lg">
            {master.experience}
          </span>
        </div>

        {/* Button */}
        {master.name === "Анна" ? (
          <a 
            href="https://dikidi.ru/#widget=192168"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-black hover:bg-white/90 font-semibold py-3 rounded-full text-base transition-all duration-300 text-center"
          >
            Записаться
          </a>
        ) : master.name === "Алина" ? (
          <a 
            href="https://dikidi.ru/#widget=192339"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-black hover:bg-white/90 font-semibold py-3 rounded-full text-base transition-all duration-300 text-center"
          >
            Записаться
          </a>
        ) : master.name === "Виктория" ? (
          <a 
            href="https://dikidi.ru/#widget=192340"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-black hover:bg-white/90 font-semibold py-3 rounded-full text-base transition-all duration-300 text-center"
          >
            Записаться
          </a>
        ) : master.name === "Оля" ? (
          <a 
            href="https://dikidi.ru/#widget=192341"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white text-black hover:bg-white/90 font-semibold py-3 rounded-full text-base transition-all duration-300 text-center"
          >
            Записаться
          </a>
        ) : (
          <Button 
            className="w-full bg-white text-black hover:bg-white/90 font-semibold py-3 rounded-full text-base transition-all duration-300"
          >
            Записаться
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Team;