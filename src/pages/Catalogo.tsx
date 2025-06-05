
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Eye, Heart, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos los productos' },
    { id: 'graduadas', name: 'Gafas Graduadas' },
    { id: 'sol', name: 'Lentes de Sol' },
    { id: 'lectura', name: 'Gafas de Lectura' },
  ];

  const products = [
    {
      id: 1,
      name: 'Modelo Clásico Negro',
      category: 'graduadas',
      price: 89990,
      originalPrice: 129990,
      image: '/placeholder.svg',
      brand: 'PITI Classic',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Aviador Premium',
      category: 'sol',
      price: 119990,
      originalPrice: 159990,
      image: '/placeholder.svg',
      brand: 'PITI Sun',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Marco Redondo Vintage',
      category: 'graduadas',
      price: 79990,
      originalPrice: 109990,
      image: '/placeholder.svg',
      brand: 'PITI Vintage',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'Deportivo Pro',
      category: 'sol',
      price: 99990,
      originalPrice: 139990,
      image: '/placeholder.svg',
      brand: 'PITI Sport',
      rating: 4.6,
      reviews: 73
    },
    {
      id: 5,
      name: 'Lectura Comfort',
      category: 'lectura',
      price: 49990,
      originalPrice: 69990,
      image: '/placeholder.svg',
      brand: 'PITI Reader',
      rating: 4.8,
      reviews: 201
    },
    {
      id: 6,
      name: 'Cat Eye Elegante',
      category: 'graduadas',
      price: 109990,
      originalPrice: 149990,
      image: '/placeholder.svg',
      brand: 'PITI Elegance',
      rating: 4.9,
      reviews: 95
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Catálogo de Gafas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Descubre nuestra amplia colección de gafas graduadas, lentes de sol y gafas de lectura. 
            Encuentra el estilo perfecto para ti.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-t border-gray-200 py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar gafas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-black text-white" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Mostrando {filteredProducts.length} productos
            </p>
            <Button variant="outline" size="sm" className="border-gray-300">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toLocaleString('es-CL')}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toLocaleString('es-CL')}
                      </span>
                    )}
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-800 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Agregar al Carrito
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalogo;
