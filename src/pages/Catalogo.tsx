
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Star, ShoppingCart, Filter, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Catalogo = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  
  const categories = ['Todas', 'Graduadas', 'Sol', 'Deportivas', 'Lectura', 'Premium'];
  
  const products = [
    {
      id: 1,
      name: 'Ray-Ban Aviator Classic',
      price: '$89.990',
      originalPrice: '$109.990',
      category: 'Sol',
      rating: 4.8,
      reviews: 234,
      image: 'bg-gradient-to-br from-amber-200 to-amber-400',
      badge: 'Bestseller',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Oakley Holbrook',
      price: '$129.990',
      originalPrice: '$159.990',
      category: 'Deportivas',
      rating: 4.9,
      reviews: 156,
      image: 'bg-gradient-to-br from-gray-700 to-gray-900',
      badge: 'Nuevo',
      badgeColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Persol Vintage Round',
      price: '$149.990',
      originalPrice: '$189.990',
      category: 'Graduadas',
      rating: 4.7,
      reviews: 89,
      image: 'bg-gradient-to-br from-amber-600 to-amber-800',
      badge: 'Oferta',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 4,
      name: 'Tom Ford Elegance',
      price: '$219.990',
      originalPrice: '$269.990',
      category: 'Premium',
      rating: 4.9,
      reviews: 67,
      image: 'bg-gradient-to-br from-black to-gray-800',
      badge: 'Premium',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 5,
      name: 'Gucci Modern Cat Eye',
      price: '$189.990',
      originalPrice: '$229.990',
      category: 'Sol',
      rating: 4.8,
      reviews: 124,
      image: 'bg-gradient-to-br from-pink-300 to-pink-500',
      badge: 'Trending',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 6,
      name: 'Warby Parker Classic',
      price: '$69.990',
      originalPrice: '$89.990',
      category: 'Graduadas',
      rating: 4.6,
      reviews: 312,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      badge: 'Económica',
      badgeColor: 'bg-blue-500'
    }
  ];

  const filteredProducts = selectedCategory === 'Todas' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-black">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Inicio
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Catálogo</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Catálogo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra amplia colección de gafas graduadas y lentes de sol
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar gafas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${
                    selectedCategory === category
                      ? 'bg-black hover:bg-gray-800 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-black hover:text-black'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Filter button */}
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filtros</span>
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <div className={`h-64 ${product.image} relative group-hover:scale-105 transition-transform duration-500`}>
                  {/* Glasses mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-12 border-4 border-white/80 rounded-full relative">
                        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-24 h-12 border-4 border-white/80 rounded-full"></div>
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-white/80 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white border-none`}>
                    {product.badge}
                  </Badge>
                  
                  {/* Try-on button */}
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300">
                    <Eye className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {product.category}
                </p>
                
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-black text-black" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reseñas)
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>
                
                {/* Actions */}
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-black hover:bg-gray-800 text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Añadir
                  </Button>
                  <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                    Probar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4"
          >
            Ver Más Productos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
