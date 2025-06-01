
import { Button } from '@/components/ui/button';
import { Play, Smartphone, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gold-100 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gold-50 rounded-full opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-600">
                +10,000 usuarios satisfechos
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Encuentra las 
              <span className="text-gold-600"> gafas perfectas</span> 
              en segundos
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Prueba virtual con IA, miles de modelos exclusivos y envío gratis. 
              La experiencia más completa para elegir tus gafas ideales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Descargar Gratis
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-gold-600 text-gray-700 hover:text-gold-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gold-50 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>iOS y Android</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Envío Gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30 días de prueba</span>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              {/* Phone mockup */}
              <div className="mx-auto w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App interface mockup */}
                  <div className="h-full bg-gradient-to-b from-gray-50 to-white p-6">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-16 h-1 bg-black rounded-full"></div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="text-center mb-6">
                      <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                        Prueba Virtual
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Ve cómo te quedan antes de comprar
                      </p>
                    </div>
                    
                    {/* Virtual try-on area */}
                    <div className="bg-gray-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gold-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Smartphone className="h-8 w-8 text-gold-600" />
                        </div>
                        <p className="text-gray-500 text-sm">Cámara activada</p>
                      </div>
                    </div>
                    
                    {/* Product cards */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-8 bg-gold-200 rounded"></div>
                          <div>
                            <p className="font-semibold text-sm">Ray-Ban Classic</p>
                            <p className="text-gold-600 text-sm font-bold">€149</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-8 bg-gray-800 rounded"></div>
                          <div>
                            <p className="font-semibold text-sm">Oakley Sport</p>
                            <p className="text-gold-600 text-sm font-bold">€189</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold-100 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold-50 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
