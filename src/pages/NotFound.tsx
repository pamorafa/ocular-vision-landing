
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header />
      
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-4">
          <div className="mb-8">
            <h1 className="font-playfair text-6xl font-bold text-gray-900 mb-4">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Página no encontrada
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
          </div>

          <div className="space-y-4">
            <Link to="/">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3">
                <Home className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Button>
            </Link>
            
            <div>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="border-black text-black hover:bg-gray-100 px-6 py-3"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Página Anterior
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
