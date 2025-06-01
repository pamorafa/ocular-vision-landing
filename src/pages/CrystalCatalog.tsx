
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, Heart, Info, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CrystalCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const crystals = [
    {
      id: 1,
      name: 'Cuarzo Rosa',
      category: 'Amor',
      properties: ['Amor propio', 'Sanación emocional', 'Paz interior'],
      chakra: 'Corazón',
      color: 'Rosa suave',
      hardness: '7',
      image: 'bg-gradient-to-br from-pink-200 to-pink-400',
      description: 'Conocido como la piedra del amor incondicional, ayuda a sanar heridas emocionales.',
      price: '€15',
      rarity: 'Común'
    },
    {
      id: 2,
      name: 'Amatista',
      category: 'Protección',
      properties: ['Claridad mental', 'Protección espiritual', 'Intuición'],
      chakra: 'Corona',
      color: 'Púrpura',
      hardness: '7',
      image: 'bg-gradient-to-br from-purple-300 to-purple-600',
      description: 'Cristal de alta vibración que promueve la claridad mental y la conexión espiritual.',
      price: '€25',
      rarity: 'Común'
    },
    {
      id: 3,
      name: 'Citrino',
      category: 'Abundancia',
      properties: ['Prosperidad', 'Confianza', 'Energía solar'],
      chakra: 'Plexo Solar',
      color: 'Amarillo dorado',
      hardness: '7',
      image: 'bg-gradient-to-br from-yellow-300 to-amber-500',
      description: 'La piedra de la abundancia, atrae prosperidad y éxito en los negocios.',
      price: '€30',
      rarity: 'Moderado'
    },
    {
      id: 4,
      name: 'Malaquita',
      category: 'Transformación',
      properties: ['Transformación', 'Protección', 'Sanación'],
      chakra: 'Corazón',
      color: 'Verde intenso',
      hardness: '3.5-4',
      image: 'bg-gradient-to-br from-emerald-400 to-emerald-700',
      description: 'Poderoso cristal de transformación que ayuda a liberar patrones negativos.',
      price: '€45',
      rarity: 'Raro'
    },
    {
      id: 5,
      name: 'Lapislázuli',
      category: 'Sabiduría',
      properties: ['Sabiduría', 'Verdad', 'Comunicación'],
      chakra: 'Garganta',
      color: 'Azul profundo',
      hardness: '5-6',
      image: 'bg-gradient-to-br from-blue-600 to-blue-900',
      description: 'Piedra de la sabiduría y la verdad, mejora la comunicación y el conocimiento.',
      price: '€35',
      rarity: 'Moderado'
    },
    {
      id: 6,
      name: 'Obsidiana Negra',
      category: 'Protección',
      properties: ['Protección intensa', 'Liberación', 'Grounding'],
      chakra: 'Raíz',
      color: 'Negro brillante',
      hardness: '5-6',
      image: 'bg-gradient-to-br from-gray-800 to-black',
      description: 'Cristal volcánico de protección que absorbe energías negativas.',
      price: '€20',
      rarity: 'Común'
    }
  ];

  const categories = ['Todos', 'Amor', 'Protección', 'Abundancia', 'Transformación', 'Sabiduría'];

  const filteredCrystals = crystals.filter(crystal => {
    const matchesSearch = crystal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crystal.properties.some(prop => prop.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todos' || crystal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Común': return 'bg-green-500';
      case 'Moderado': return 'bg-yellow-500';
      case 'Raro': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen font-inter animate-fade-in">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bottle-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Catálogo de 
            <span className="text-bottle-600"> Cristales</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Descubre la energía y propiedades únicas de cada cristal. 
            Encuentra el compañero perfecto para tu bienestar espiritual.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar cristales o propiedades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-bottle-200 focus:border-bottle-600"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 ${
                    selectedCategory === category 
                      ? 'bg-bottle-600 hover:bg-bottle-700 text-white' 
                      : 'border-bottle-200 text-gray-700 hover:border-bottle-600 hover:text-bottle-700 hover:bg-bottle-50'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crystal Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCrystals.map((crystal, index) => (
              <div 
                key={crystal.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Crystal Image */}
                <div className="relative overflow-hidden">
                  <div className={`h-48 ${crystal.image} relative group-hover:scale-105 transition-transform duration-500`}>
                    {/* Crystal mockup */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 transform rotate-45 bg-white/30 backdrop-blur-sm border-2 border-white/50 rounded-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Rarity Badge */}
                    <Badge className={`absolute top-3 left-3 ${getRarityColor(crystal.rarity)} text-white border-none`}>
                      {crystal.rarity}
                    </Badge>
                    
                    {/* Favorite button */}
                    <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300">
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Crystal Info */}
                <div className="p-6">
                  {/* Category and Name */}
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-bottle-600">
                      {crystal.category}
                    </p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2 group-hover:text-bottle-600 transition-colors">
                    {crystal.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {crystal.description}
                  </p>

                  {/* Properties */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Propiedades:</p>
                    <div className="flex flex-wrap gap-1">
                      {crystal.properties.slice(0, 2).map((property, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-bottle-50 text-bottle-700">
                          {property}
                        </Badge>
                      ))}
                      {crystal.properties.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                          +{crystal.properties.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Chakra:</span>
                      <p className="font-medium text-gray-900">{crystal.chakra}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Dureza:</span>
                      <p className="font-medium text-gray-900">{crystal.hardness}</p>
                    </div>
                  </div>
                  
                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {crystal.price}
                    </span>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm"
                        variant="outline" 
                        className="border-bottle-600 text-bottle-700 hover:bg-bottle-50"
                      >
                        <Info className="mr-1 h-4 w-4" />
                        Info
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-bottle-600 hover:bg-bottle-700 text-white"
                      >
                        Añadir
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filteredCrystals.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron cristales</h3>
              <p className="text-gray-600">Intenta ajustar tus filtros o término de búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrystalCatalog;
