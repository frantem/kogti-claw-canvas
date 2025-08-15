import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-nail-black flex items-center justify-center">
              <span className="text-2xl text-nail-white">🐾</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-nail-black">KOGTI</h1>
              <p className="text-sm text-nail-gray">nail studio</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Команда
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#hero" className="text-foreground hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">
                Команда
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;