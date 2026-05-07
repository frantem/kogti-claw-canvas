import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Set page title
    const previousTitle = document.title;
    document.title = "404 — Страница не найдена | KOGTI";

    // Add noindex meta tag dynamically so search engines don't index 404 pages
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.title = previousTitle;
      document.head.removeChild(meta);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Страница не найдена</h1>
        <p className="text-muted-foreground mb-8">
          Извините, запрашиваемая страница не существует или была перемещена.
        </p>
        <a 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
