
import { Button } from '@/components/ui/button';
import { Play, Smartphone, Star, MapPin, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Decorative elements minimalistas */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gray-100 rounded-full opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-50 rounded-full opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map(star => 
                <Star key={star} className="h-5 w-5 fill-black text-black" />
              )}
              <span className="ml-2 text-sm font-medium text-gray-600">
                +10,000 clientes satisfechos
              </span>
            </div>

            {/* Ubicación de Chile */}
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">Valparaíso, Chile</span>
            </div>
            
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Encuentra las 
              <span className="text-gray-600"> gafas perfectas </span> 
              para tu estilo
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              La mayor colección de gafas graduadas y lentes de sol en Chile. 
              Prueba virtual con IA, examen de vista online y envío gratis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/descargar">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Descargar App
                </Button>
              </Link>
              <Link to="/catalogo">
                <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Catálogo
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Prueba Virtual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Envío Gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Examen de Vista</span>
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
                  <div className="h-full bg-white p-6">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-16 h-1 bg-black rounded-full"></div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="text-center mb-6">
                      <h3 className="font-playfair text-2xl font-bold text-black mb-2">
                        PITI Óptica
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Tu óptica digital
                      </p>
                    </div>
                    
                    {/* Virtual try-on area */}
                    <div className="bg-gray-50 rounded-2xl h-48 mb-6 flex items-center justify-center border border-gray-200">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Eye className="h-8 w-8 text-gray-600" />
                        </div>
                        <p className="text-gray-500 text-sm">Prueba Virtual</p>
                      </div>
                    </div>
                    
                    {/* Product cards */}
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded"></div>
                          <div>
                            <p className="font-semibold text-sm text-black">Ray-Ban Aviator</p>
                            <p className="text-gray-600 text-sm font-bold">$89.990</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-8 bg-black rounded"></div>
                          <div>
                            <p className="font-semibold text-sm text-black">Oakley Sport</p>
                            <p className="text-gray-600 text-sm font-bold">$129.990</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements minimalistas */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gray-100 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-50 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
