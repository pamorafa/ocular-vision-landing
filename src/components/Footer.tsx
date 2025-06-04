
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Glasses, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te has suscrito a nuestro newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="bg-black py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-playfair text-3xl font-bold text-white mb-4">
            ¿Listo para encontrar tus cristales perfectos?
          </h3>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Descarga PITI y únete a miles de usuarios que ya han transformado su bienestar espiritual.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Tu email para ofertas exclusivas"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-white"
            />
            <Button 
              type="submit"
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8"
            >
              Suscribirme
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Glasses className="h-8 w-8 text-white" />
                <span className="font-playfair text-2xl font-bold">PITI</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                La revolución en el mundo de los cristales curativos ha llegado. 
                Tecnología, espiritualidad y bienestar en una sola aplicación desde Valparaíso, Chile.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-white" />
                  <span className="text-gray-300">Valparaíso, Chile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="text-gray-300">+56 9 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-white" />
                  <span className="text-gray-300">hola@piti.cl</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/cristales" className="text-gray-300 hover:text-white transition-colors">
                    Cristales
                  </a>
                </li>
                <li>
                  <a href="#caracteristicas" className="text-gray-300 hover:text-white transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#productos" className="text-gray-300 hover:text-white transition-colors">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#testimonios" className="text-gray-300 hover:text-white transition-colors">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Soporte
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-playfair text-lg font-bold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Envíos y Devoluciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Garantía
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
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
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              {/* App Download */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Descarga la app:</span>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:border-white hover:text-white hover:bg-white hover:text-black"
                >
                  App Store
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:border-white hover:text-white hover:bg-white hover:text-black"
                >
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 PITI. Todos los derechos reservados. Hecho con ❤️ en Valparaíso, Chile.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
