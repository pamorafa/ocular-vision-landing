
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Eye } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Si no estamos en la página principal, navegar primero y luego hacer scroll
      window.location.href = `/#${sectionId}`;
    } else {
      // Si estamos en la página principal, hacer scroll directo
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Eye className="h-8 w-8 text-black" />
            <span className="font-playfair text-2xl font-bold text-black">PITI</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleScrollToSection('inicio')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Inicio
            </button>
            <Link to="/catalogo" className="text-gray-700 hover:text-black transition-colors font-medium">
              Catálogo
            </Link>
            <button 
              onClick={() => handleScrollToSection('caracteristicas')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => handleScrollToSection('productos')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Productos
            </button>
            <button 
              onClick={() => handleScrollToSection('testimonios')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Reseñas
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-gray-100"
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/descargar">
              <Button className="bg-black hover:bg-gray-800 text-white">
                Descargar App
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => handleScrollToSection('inicio')}
                className="text-gray-700 hover:text-black font-medium py-2 text-left"
              >
                Inicio
              </button>
              <Link to="/catalogo" className="text-gray-700 hover:text-black font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Catálogo
              </Link>
              <button 
                onClick={() => handleScrollToSection('caracteristicas')}
                className="text-gray-700 hover:text-black font-medium py-2 text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => handleScrollToSection('productos')}
                className="text-gray-700 hover:text-black font-medium py-2 text-left"
              >
                Productos
              </button>
              <button 
                onClick={() => handleScrollToSection('testimonios')}
                className="text-gray-700 hover:text-black font-medium py-2 text-left"
              >
                Reseñas
              </button>
              <div className="pt-4 space-y-2">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-black text-black hover:bg-gray-100"
                  >
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/descargar" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">
                    Descargar App
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
