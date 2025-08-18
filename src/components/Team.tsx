import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Team = () => {
  const masters = [
    {
      name: "Анна",
      experience: "опыт 2 года",
      description: "быстро и без потери качества\nсделает самый чёткий квадрат",
      image: "/lovable-uploads/e84b7e94-c364-40bc-a99e-5d69cc533df3.png"
    },
    {
      name: "Алина", 
      experience: "опыт 3 года",
      description: "сделает как нюд так и крутой дизайн\nтворческая, слишком добрая, отзывчивая",
      image: "/lovable-uploads/4dd231fb-3fef-4306-9f06-e42942cfde19.png"
    },
    {
      name: "Виктория",
      experience: "ТОП-мастер, опыт 6 лет",
      description: "сделает безупречный маникюр и педикюр\n100% возвращаемость клиентов",
      image: "/lovable-uploads/b85037a7-90ce-4158-af33-f564797e2736.png"
    },
    {
      name: "Оля",
      experience: "ТОП-мастер, опыт 5 лет", 
      description: "коммуникабельность, нюд за час\nидеальный френч",
      image: "/lovable-uploads/3663b521-4a9a-4846-90b4-6c24e0c5cf6c.png"
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
            <Card 
              key={index}
              className="relative overflow-hidden rounded-3xl h-96 shadow-2xl animate-fade-in group"
              style={{ 
                backgroundImage: `url(${master.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">
                    {master.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {master.experience}
                  </p>
                  <div className="text-sm leading-relaxed mb-6">
                    {master.description.split('\n').map((line, lineIndex) => (
                      <div key={lineIndex}>{line}</div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Записаться
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;