import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem =
  | { label: string; type: "anchor"; id: string }
  | { label: string; type: "route"; to: string };

const menuItems: MenuItem[] = [
  { label: "Главная", type: "anchor", id: "hero" },
  { label: "Услуги", type: "anchor", id: "services" },
  { label: "Наша команда", type: "anchor", id: "team" },
  { label: "Контакты", type: "anchor", id: "contact" },
  { label: "Как нас найти", type: "anchor", id: "location" },
  { label: "О нас", type: "route", to: "/about" },
  { label: "Вопросы и ответы", type: "route", to: "/faq" },
  { label: "Вакансии", type: "route", to: "/careers" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(
    (item: MenuItem) => {
      setIsOpen(false);
      setTimeout(() => {
        if (item.type === "route") {
          navigate(item.to);
          window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
          return;
        }
        // anchor
        if (location.pathname !== "/") {
          navigate(`/#${item.id}`);
          return;
        }
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    },
    [navigate, location.pathname]
  );

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[60] w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center gap-[5px] transition-all duration-300"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      >
        <span
          className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${
            isOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/90 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-2">
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`text-xl font-medium text-white/80 hover:text-tropical-gold py-3 px-8 rounded-xl transition-all duration-300 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isOpen ? `${i * 50 + 100}ms` : "0ms",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
