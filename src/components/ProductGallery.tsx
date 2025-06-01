
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingCart } from 'lucide-react';

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: 'Ray-Ban Aviator Classic',
      price: '€149',
      originalPrice: '€189',
      category: 'Sol',
      rating: 4.8,
      reviews: 234,
      image: 'bg-gradient-to-br from-gold-200 to-gold-300',
      badge: 'Bestseller',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Oakley Holbrook',
      price: '€169',
      originalPrice: '€199',
      category: 'Deportiva',
      rating: 4.9,
      reviews: 156,
      image: 'bg-gradient-to-br from-gray-700 to-gray-900',
      badge: 'Nuevo',
      badgeColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Persol Vintage Round',
      price: '€199',
      originalPrice: '€249',
      category: 'Vintage',
      rating: 4.7,
      reviews: 89,
      image: 'bg-gradient-to-br from-amber-600 to-amber-800',
      badge: 'Oferta',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 4,
      name: 'Tom Ford Elegance',
      price: '€289',
      originalPrice: '€349',
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
      price: '€245',
      originalPrice: '€295',
      category: 'Mujer',
      rating: 4.8,
      reviews: 124,
      image: 'bg-gradient-to-br from-pink-300 to-pink-500',
      badge: 'Trending',
      badgeColor: 'bg-pink-500'
    },
    {
      id: 6,
      name: 'Warby Parker Classic',
      price: '€99',
      originalPrice: '€129',
      category: 'Graduada',
      rating: 4.6,
      reviews: 312,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      badge: 'Económica',
      badgeColor: 'bg-blue-500'
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestra 
            <span className="text-gold-600"> Colección</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Desde clásicos atemporales hasta las últimas tendencias. 
            Encuentra el estilo perfecto para cada ocasión.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {['Todas', 'Sol', 'Graduada', 'Deportiva', 'Premium', 'Vintage'].map((category) => (
              <Button
                key={category}
                variant={category === 'Todas' ? 'default' : 'outline'}
                className={`rounded-full px-6 ${
                  category === 'Todas' 
                    ? 'bg-gold-600 hover:bg-gold-700 text-white' 
                    : 'border-gold-200 text-gray-700 hover:border-gold-600 hover:text-gold-700 hover:bg-gold-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <div className={`h-64 ${product.image} relative group-hover:scale-105 transition-transform duration-500`}>
                  {/* Product mockup - glasses shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Glasses frame */}
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
                  
                  {/* Favorite button */}
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category */}
                <p className="text-sm font-medium text-gold-600 mb-2">
                  {product.category}
                </p>
                
                {/* Product Name */}
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
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
                  <Button 
                    className="flex-1 bg-gold-600 hover:bg-gold-700 text-white"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Añadir
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gold-600 text-gold-700 hover:bg-gold-50"
                  >
                    Probar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
