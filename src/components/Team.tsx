import { Button } from "@/components/ui/button";
import alinaImage from "@/assets/master-alina.jpg";
import annaImage from "@/assets/master-anna.jpg";
import olyaImage from "@/assets/master-olya.jpg";
import victoriaImage from "@/assets/master-victoria.jpg";

const Team = () => {
  const masters = [
    {
      name: "Фазлиева Алина",
      role: "Мастер",
      image: alinaImage,
      specialty: "Классический маникюр, гель-лак"
    },
    {
      name: "Островская Анна", 
      role: "Мастер",
      image: annaImage,
      specialty: "Дизайн ногтей, художественная роспись"
    },
    {
      name: "Котович Оля",
      role: "Топ-мастер",
      image: olyaImage,
      specialty: "Наращивание, сложные техники"
    },
    {
      name: "Демиденко Виктория",
      role: "Топ-мастер", 
      image: victoriaImage,
      specialty: "Авторские дизайны, VIP-обслуживание"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-nail-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-nail-dark mb-4">
            Наша команда
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональные мастера с многолетним опытом создания красоты
          </p>
          <div className="text-2xl mt-4 cat-paw">🐾</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {masters.map((master, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-6 text-center hover:transform hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="relative mb-6">
                <img 
                  src={master.image} 
                  alt={master.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-nail-pink/50"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-nail-rose rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💅</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-nail-dark mb-2">
                {master.name}
              </h3>
              
              <p className="text-primary font-medium mb-3">
                {master.role}
              </p>
              
              <p className="text-sm text-muted-foreground mb-6">
                {master.specialty}
              </p>
              
              <Button 
                variant="outline" 
                className="w-full rounded-xl border-nail-pink hover:bg-nail-pink hover:text-white transition-all duration-300"
              >
                Записаться к {master.name.split(' ')[1]}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;