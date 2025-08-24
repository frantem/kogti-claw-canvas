const Index = () => {
  console.log('Simple Index rendering');
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">KOGTI</h1>
        <p className="text-xl text-gray-600">Nail Studio</p>
        <div className="mt-8">
          <a 
            href="https://dikidi.ru/#widget=192147" 
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600"
          >
            Записаться
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;