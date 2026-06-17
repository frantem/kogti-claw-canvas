const Footer = () => {
  const handleInstagram = () => {
    window.open('https://www.instagram.com/kogti.studio_?igsh=MTBhd3lxZzB5ZHpqcw==', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/kotovichOlga', '_blank');
  };

  const handleViber = () => {
    window.open('viber://chat?number=%2B375336582639', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/375336582639', '_blank');
  };

  return (
    <footer className="bg-gray-900 py-16 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-4">
          ИП Котович О.А.
        </h3>
        
        <div className="mb-8">
          <p className="text-gray-300 text-lg mb-2">УНП: 391863210</p>
          <p className="text-gray-300 text-lg">+375336582639</p>
        </div>
        
        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 underline underline-offset-4">
            О студии
          </a>
          <a href="/faq" className="text-gray-400 hover:text-white transition-colors duration-300 underline underline-offset-4">
            Вопросы и ответы
          </a>
          <a href="/careers" className="text-gray-400 hover:text-white transition-colors duration-300 underline underline-offset-4">
            Вакансии
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 underline underline-offset-4">
            Политика конфиденциальности
          </a>
        </div>
        
        <div className="flex justify-center space-x-6">
          {/* Instagram */}
          <button
            onClick={handleInstagram}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </button>

          {/* Viber */}
          <button
            onClick={handleViber}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            aria-label="Viber"
          >
            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.534 4.034 1.47 5.735L0 24l6.442-1.468c1.62.835 3.465 1.314 5.575 1.314 6.621 0 11.987-5.367 11.987-11.987C23.975 5.367 18.608.029 12.017.029zm5.47 16.767c-.24.678-1.203 1.238-1.98 1.397-.504.104-.926.156-3.043-.647-2.267-.86-3.732-3.148-3.845-3.292-.113-.145-.922-1.225-.922-2.338 0-1.113.583-1.66.79-1.888.206-.227.45-.284.6-.284.15 0 .301.001.433.008.138.007.323-.053.505.385.187.45.637 1.558.693 1.671.057.113.095.245.019.396-.076.15-.113.245-.227.377-.113.132-.238.294-.34.396-.113.113-.231.234-.099.458.132.227.588.97 1.261 1.57.866.77 1.595 1.009 1.821 1.122.227.113.359.095.49-.057.132-.15.566-.66.717-.887.15-.227.301-.189.509-.113.207.075 1.321.623 1.547.736.227.113.378.17.434.264.057.095.057.547-.184 1.125z"/>
            </svg>
          </button>

          {/* Telegram */}
          <button
            onClick={handleTelegram}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            aria-label="Telegram"
          >
            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </button>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;