import { Button } from "@/components/ui/button";

const Team = () => {
  const masters = [
    {
      name: "Анна",
      role: "мастер",
      experience: "опыт 2 года",
      image: "/lovable-uploads/e84b7e94-c364-40bc-a99e-5d69cc533df3.png"
    },
    {
      name: "Алина", 
      role: "мастер",
      experience: "опыт 3 года",
      image: "/lovable-uploads/4dd231fb-3fef-4306-9f06-e42942cfde19.png"
    },
    {
      name: "Виктория",
      role: "ТОП-мастер",
      experience: "опыт 6 лет",
      image: "/lovable-uploads/b85037a7-90ce-4158-af33-f564797e2736.png"
    },
    {
      name: "Оля",
      role: "ТОП-мастер", 
      experience: "опыт 5 лет",
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
                className={`flex items-center gap-12 animate-fade-in ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div 
                    className="w-80 h-80 rounded-full bg-cover bg-center shadow-lg transition-all duration-300"
                    style={{ 
                      backgroundImage: `url(${master.image})`,
                      boxShadow: '0 0 7.5px #fbbf24, 0 0 15px #fbbf24, 0 0 22.5px rgba(251, 191, 36, 0.075)'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-white">
                  <h3 className="text-4xl font-bold mb-4">
                    {master.name}
                  </h3>
                  <p className="text-xl font-medium mb-2 leading-tight">
                    {master.role}
                  </p>
                  <p className="text-lg font-medium mb-6 leading-tight">
                    {master.experience}
                  </p>
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