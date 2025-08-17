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
          <h2 className="text-5xl font-bold text-black mb-4">
            Команда
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-6xl mx-auto">
          {masters.map((master, index) => (
            <div 
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in backdrop-blur-sm"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div 
                className="relative h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${master.image})` }}
              >
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">
                      {master.name}
                    </h3>
                    <p className="text-sm font-medium text-yellow-400">
                      {master.role}, {master.experience}
                    </p>
                  </div>
                  
                  <Button 
                    variant="default"
                    size="sm"
                    className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Записаться
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;