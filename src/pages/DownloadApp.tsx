
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Smartphone, Apple, PlayCircle, Bell, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DownloadApp = () => {
  return (
    <div className="min-h-screen font-inter animate-fade-in">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bottle-50 to-white py-20 lg:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gold-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-bottle-100 rounded-full opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-bottle-100 rounded-full mb-8">
              <Smartphone className="h-10 w-10 text-bottle-600" />
            </div>
            
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              La App de 
              <span className="text-bottle-600"> Piti</span> 
              <br />Llegará Pronto
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Estamos trabajando en una experiencia móvil increíble que revolucionará la forma 
              en que pruebas y compras gafas. Regístrate para ser el primero en saberlo.
            </p>
            
            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Tu email para recibir notificaciones"
                  className="flex-1 h-12 text-lg border-bottle-200 focus:border-bottle-600"
                />
                <Button 
                  size="lg" 
                  className="bg-bottle-600 hover:bg-bottle-700 text-white px-8 h-12 text-lg font-semibold"
                >
                  <Bell className="mr-2 h-5 w-5" />
                  Notificarme
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Te avisaremos cuando la app esté lista para descargar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lo Que Podrás Hacer Con La App
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una experiencia completa de prueba virtual y compra de gafas en tu móvil
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-bottle-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-bottle-200 transition-colors">
                <Smartphone className="h-8 w-8 text-bottle-600" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                Prueba Virtual con IA
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tecnología avanzada de realidad aumentada para probar gafas desde tu móvil
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-200 transition-colors">
                <Star className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                Catálogo Completo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Miles de modelos de las mejores marcas, siempre actualizados
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-bottle-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-bottle-200 transition-colors">
                <CheckCircle className="h-8 w-8 text-bottle-600" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                Compra Rápida
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proceso de compra optimizado con envío gratuito y garantía total
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Availability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Disponible En Todas Las Plataformas
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 opacity-50">
              <Apple className="h-8 w-8 text-gray-400" />
              <div className="text-left">
                <p className="font-semibold text-gray-400">Próximamente en</p>
                <p className="text-lg font-bold text-gray-400">App Store</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 opacity-50">
              <PlayCircle className="h-8 w-8 text-gray-400" />
              <div className="text-left">
                <p className="font-semibold text-gray-400">Próximamente en</p>
                <p className="text-lg font-bold text-gray-400">Google Play</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 mt-8 text-lg">
            Mientras tanto, puedes explorar nuestro catálogo de cristales en la web
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bottle-600 to-bottle-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿No Puedes Esperar?
          </h2>
          <p className="text-bottle-100 text-xl mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo de cristales mientras esperamos el lanzamiento de la app
          </p>
          <Button 
            size="lg" 
            className="bg-white text-bottle-700 hover:bg-gold-50 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg"
            onClick={() => window.location.href = '/cristales'}
          >
            Ver Catálogo de Cristales
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadApp;
