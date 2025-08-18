import { Button } from "@/components/ui/button";

const Team = () => {
  const masters = [
    {
      name: "Анна",
      description: "Мастер\nопыт 2 года\nбыстро и без потери качества\nсделает самый чёткий квадрат.",
      image: "/lovable-uploads/e84b7e94-c364-40bc-a99e-5d69cc533df3.png"
    },
    {
      name: "Алина", 
      description: "мастер\nопыт 3 года\nсделает как нюд так и крутой дизайн\nтворческая\nслишком добрая\nотзывчивая",
      image: "/lovable-uploads/4dd231fb-3fef-4306-9f06-e42942cfde19.png"
    },
    {
      name: "Виктория",
      description: "ТОП-мастер\nопыт 6 лет\nсделает безупречный маникюр так и педикюр\n100% возвращаемость клиентов.",
      image: "/lovable-uploads/b85037a7-90ce-4158-af33-f564797e2736.png"
    },
    {
      name: "Оля",
      description: "ТОП-мастер\nопыт 5 лет\nкоммуникабельность\nнюд за час\nидеальный френч.",
      image: "/lovable-uploads/3663b521-4a9a-4846-90b4-6c24e0c5cf6c.png"
    }
  ];

  return (
    <section id="team" className="relative min-h-screen py-20" style={{ backgroundImage: 'url(/lovable-uploads/82f78b18-14fe-4e4d-9d23-d4c0f6f9cdcb.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Команда
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {masters.map((master, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div 
                    className="w-48 h-48 md:w-80 md:h-80 rounded-full bg-cover bg-center shadow-lg transition-all duration-300"
                    style={{ 
                      backgroundImage: `url(${master.image})`,
                      boxShadow: '0 0 7.5px #fbbf24, 0 0 15px #fbbf24, 0 0 22.5px rgba(251, 191, 36, 0.075)'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-white text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {master.name}
                  </h3>
                  <div className="text-base md:text-lg font-medium mb-6 leading-relaxed">
                    {master.description.split('\n').map((line, lineIndex) => (
                      <div key={lineIndex}>{line}</div>
                    ))}
                  </div>
                  <Button 
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl text-base transition-all duration-300"
                  >
                    Записаться
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;