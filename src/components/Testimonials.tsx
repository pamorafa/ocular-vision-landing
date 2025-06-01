
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      location: 'Madrid',
      rating: 5,
      text: 'La prueba virtual es increíble. Pude ver exactamente cómo me quedaban las gafas antes de comprarlas. El envío fue súper rápido y la calidad excepcional.',
      avatar: 'bg-gradient-to-br from-pink-400 to-pink-600',
      verified: true
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      location: 'Barcelona',
      rating: 5,
      text: 'Llevo años comprando gafas online y esta es la mejor experiencia que he tenido. La asesoría personalizada me ayudó a encontrar el modelo perfecto.',
      avatar: 'bg-gradient-to-br from-blue-400 to-blue-600',
      verified: true
    },
    {
      id: 3,
      name: 'Ana Martín',
      location: 'Valencia',
      rating: 5,
      text: 'Me encanta la variedad de marcas y precios. Encontré unas Ray-Ban con un descuento increíble y llegaron al día siguiente. Totalmente recomendado.',
      avatar: 'bg-gradient-to-br from-green-400 to-green-600',
      verified: true
    },
    {
      id: 4,
      name: 'David López',
      location: 'Sevilla',
      rating: 5,
      text: 'El examen de vista desde la app es muy útil. Me detectó que necesitaba cambiar la graduación y me recomendó las lentes perfectas.',
      avatar: 'bg-gradient-to-br from-purple-400 to-purple-600',
      verified: true
    },
    {
      id: 5,
      name: 'Laura Fernández',
      location: 'Bilbao',
      rating: 5,
      text: 'Servicio al cliente excepcional. Tuve una duda con mi pedido y me respondieron inmediatamente. Las gafas son exactamente como esperaba.',
      avatar: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      verified: true
    },
    {
      id: 6,
      name: 'Jorge Sánchez',
      location: 'Zaragoza',
      rating: 5,
      text: 'La tecnología de prueba virtual con IA es impresionante. Muy fácil de usar y súper precisa. Ya he hecho tres pedidos y todos perfectos.',
      avatar: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      verified: true
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros 
            <span className="text-gold-600"> clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Miles de personas ya han encontrado sus gafas perfectas con VisionApp. 
            Descubre sus experiencias.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 animate-scale-in border border-gray-100 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-gold-600 mb-6 opacity-50" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-5 w-5 ${
                      star <= testimonial.rating 
                        ? 'fill-gold-400 text-gold-400' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-4">
                {/* Avatar */}
                <div className={`w-12 h-12 ${testimonial.avatar} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.name.charAt(0)}
                </div>
                
                {/* Name and location */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
              Confían en nosotros
            </h3>
            <p className="text-gray-600">
              Valoraciones verificadas de clientes reales
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="flex justify-center items-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="font-playfair text-2xl font-bold text-gray-900 mb-1">
                4.9/5
              </div>
              <p className="text-gray-600 text-sm">App Store</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-center items-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="font-playfair text-2xl font-bold text-gray-900 mb-1">
                4.8/5
              </div>
              <p className="text-gray-600 text-sm">Google Play</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="font-playfair text-2xl font-bold text-gray-900 mb-1">
                98%
              </div>
              <p className="text-gray-600 text-sm">Satisfacción</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="font-playfair text-2xl font-bold text-gray-900 mb-1">
                +5K
              </div>
              <p className="text-gray-600 text-sm">Reseñas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
