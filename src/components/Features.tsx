
import { Eye, Smartphone, Truck, Shield, Camera, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: 'Prueba Virtual con IA',
      description: 'Tecnología avanzada que te permite probarte cualquier gafa de forma realista desde tu móvil.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Eye,
      title: 'Examen de Vista',
      description: 'Realiza un examen básico de vista directamente desde la app y obtén recomendaciones personalizadas.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Truck,
      title: 'Envío Gratis',
      description: 'Entrega gratuita en toda España en 24-48h. Cambios y devoluciones sin coste adicional.',
      color: 'text-gold-600 bg-gold-100'
    },
    {
      icon: Shield,
      title: 'Garantía Premium',
      description: '2 años de garantía en todos los productos. Reposición inmediata en caso de rotura.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Users,
      title: 'Asesoría Personal',
      description: 'Estilistas expertos te ayudan a elegir el modelo perfecto según tu rostro y estilo.',
      color: 'text-pink-600 bg-pink-100'
    },
    {
      icon: Smartphone,
      title: 'Experiencia Móvil',
      description: 'Interfaz intuitiva diseñada específicamente para móviles con navegación fluida y rápida.',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir 
            <span className="text-gold-600"> VisionApp</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La tecnología más avanzada al servicio de tu visión. 
            Descubre por qué miles de usuarios ya confían en nosotros.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 animate-scale-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-1 bg-gold-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-gold-50 to-gold-100 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                +10K
              </div>
              <p className="text-gray-600 font-medium">Usuarios Activos</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                500+
              </div>
              <p className="text-gray-600 font-medium">Modelos Disponibles</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                4.9★
              </div>
              <p className="text-gray-600 font-medium">Valoración Media</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                24h
              </div>
              <p className="text-gray-600 font-medium">Entrega Express</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
