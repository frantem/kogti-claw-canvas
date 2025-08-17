import InspirationGallery from "@/components/InspirationGallery";
import appBackground from "@/assets/app-background.jpg";
const InspirationSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${appBackground})` }}
      />
      
      <div className="relative z-10 px-6 w-full max-w-4xl mx-auto">
        <InspirationGallery />
      </div>
    </section>
  );
};
export default InspirationSection;