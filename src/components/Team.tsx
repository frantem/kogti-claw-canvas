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
    <section id="team" className="py-20 bg-gradient-to-b from-tropical-dark to-tropical-green">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-tropical-cream mb-4">
            Наша команда
          </h2>
          <p className="text-xl text-tropical-gold max-w-2xl mx-auto">
            Профессиональные мастера с многолетним опытом создания красоты
          </p>
          <div className="text-2xl mt-4 cat-paw">🌿</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {masters.map((master, index) => (
            <div 
              key={index}
              className="profile-card p-6 text-center animate-fade-in"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="relative mb-6">
                <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden">
                  <img 
                    src={master.image} 
                    alt={master.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-tropical-gold rounded-xl flex items-center justify-center">
                  <span className="text-tropical-dark text-sm">💅</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-tropical-cream mb-1">
                {master.name}
              </h3>
              
              <p className="text-tropical-gold text-sm font-medium mb-3 uppercase tracking-wide">
                {master.role}
              </p>
              
              <p className="text-xs text-tropical-cream/70 mb-6 leading-relaxed">
                {master.specialty}
              </p>
              
              <Button 
                variant="secondary" 
                size="sm"
                className="w-full"
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;