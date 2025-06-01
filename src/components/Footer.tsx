
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Glasses, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-bottle-600 to-bottle-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-playfair text-3xl font-bold text-white mb-4">
            ¿Listo para encontrar tus gafas perfectas?
          </h3>
          <p className="text-bottle-100 text-xl mb-8 max-w-2xl mx-auto">
            Descarga Piti y únete a miles de usuarios que ya han revolucionado su forma de comprar gafas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Tu email para ofertas exclusivas"
              className="bg-white/10 border-white/20 text-white placeholder:text-bottle-100 focus:border-white"
            />
            <Button 
              className="bg-white text-bottle-700 hover:bg-bottle-50 font-semibold px-8"
            >
              Suscribirme
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Glasses className="h-8 w-8 text-bottle-600" />
                <span className="font-playfair text-2xl font-bold">Piti</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                La revolución en la compra de gafas ha llegado. Tecnología de prueba virtual, 
                miles de modelos y la mejor experiencia de usuario en una sola app.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-bottle-600" />
                  <span className="text-gray-300">Madrid, España</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-bottle-600" />
                  <span className="text-gray-300">+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-bottle-600" />
                  <span className="text-gray-300">hola@piti.es</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#inicio" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#caracteristicas" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#productos" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#testimonios" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Soporte
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Envíos y Devoluciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Garantía
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-bottle-600 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Apps */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 mr-4">Síguenos:</span>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bottle-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bottle-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bottle-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bottle-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              {/* App Download */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Descarga la app:</span>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:border-bottle-600 hover:text-bottle-600"
                >
                  App Store
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:border-bottle-600 hover:text-bottle-600"
                >
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Piti. Todos los derechos reservados. Hecho con ❤️ en España.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
