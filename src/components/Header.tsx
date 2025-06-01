
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Glasses } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Glasses className="h-8 w-8 text-bottle-600" />
            <span className="font-playfair text-2xl font-bold text-bottle-700">Piti</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-bottle-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#caracteristicas" className="text-gray-700 hover:text-bottle-600 transition-colors font-medium">
              Características
            </a>
            <a href="#productos" className="text-gray-700 hover:text-bottle-600 transition-colors font-medium">
              Productos
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-bottle-600 transition-colors font-medium">
              Testimonios
            </a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button 
                variant="outline" 
                className="border-bottle-600 text-bottle-700 hover:bg-bottle-50"
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Button className="bg-bottle-600 hover:bg-bottle-700 text-white">
              Descargar App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-bottle-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-700 hover:text-bottle-600 font-medium py-2">
                Inicio
              </a>
              <a href="#caracteristicas" className="text-gray-700 hover:text-bottle-600 font-medium py-2">
                Características
              </a>
              <a href="#productos" className="text-gray-700 hover:text-bottle-600 font-medium py-2">
                Productos
              </a>
              <a href="#testimonios" className="text-gray-700 hover:text-bottle-600 font-medium py-2">
                Testimonios
              </a>
              <div className="pt-4 space-y-2">
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    className="w-full border-bottle-600 text-bottle-700 hover:bg-bottle-50"
                  >
                    Iniciar Sesión
                  </Button>
                </Link>
                <Button className="w-full bg-bottle-600 hover:bg-bottle-700 text-white">
                  Descargar App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
