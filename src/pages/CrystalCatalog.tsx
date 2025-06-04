import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Filter, Heart, Info, Star, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const CrystalCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { toast } = useToast();

  const crystals = [
    {
      id: 1,
      name: 'Cuarzo Rosa',
      category: 'Amor',
      properties: ['Amor propio', 'Sanación emocional', 'Paz interior'],
      chakra: 'Corazón',
      color: 'Rosa suave',
      hardness: '7',
      image: 'bg-gradient-to-br from-pink-100 to-pink-200',
      description: 'Conocido como la piedra del amor incondicional, ayuda a sanar heridas emocionales.',
      price: '$15.000',
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
      image: 'bg-gradient-to-br from-purple-100 to-purple-200',
      description: 'Cristal de alta vibración que promueve la claridad mental y la conexión espiritual.',
      price: '$25.000',
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
      image: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
      description: 'La piedra de la abundancia, atrae prosperidad y éxito en los negocios.',
      price: '$30.000',
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
      image: 'bg-gradient-to-br from-green-100 to-green-200',
      description: 'Poderoso cristal de transformación que ayuda a liberar patrones negativos.',
      price: '$45.000',
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
      image: 'bg-gradient-to-br from-blue-100 to-blue-200',
      description: 'Piedra de la sabiduría y la verdad, mejora la comunicación y el conocimiento.',
      price: '$35.000',
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
      image: 'bg-gradient-to-br from-gray-200 to-gray-400',
      description: 'Cristal volcánico de protección que absorbe energías negativas.',
      price: '$20.000',
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
      case 'Común': return 'bg-gray-500';
      case 'Moderado': return 'bg-gray-700';
      case 'Raro': return 'bg-black';
      default: return 'bg-gray-500';
    }
  };

  const handleAddToCart = (crystalName: string) => {
    toast({
      title: "Añadido al carrito",
      description: `${crystalName} ha sido añadido a tu carrito.`,
    });
  };

  const handleShowInfo = (crystalName: string) => {
    toast({
      title: "Información del cristal",
      description: `Mostrando detalles completos de ${crystalName}.`,
    });
  };

  const handleToggleFavorite = (crystalName: string) => {
    toast({
      title: "Favoritos",
      description: `${crystalName} añadido a favoritos.`,
    });
  };

  return (
    <div className="min-h-screen font-inter animate-fade-in bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Catálogo de 
            <span className="text-gray-600"> Cristales</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Descubre la energía y propiedades únicas de cada cristal. 
            Encuentra el compañero perfecto para tu bienestar espiritual.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
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
                className="pl-10 border-gray-300 focus:border-black"
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
                      ? 'bg-black hover:bg-gray-800 text-white' 
                      : 'border-gray-300 text-gray-700 hover:border-black hover:text-black hover:bg-gray-50'
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCrystals.map((crystal, index) => (
              <div 
                key={crystal.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Crystal Image */}
                <div className="relative overflow-hidden">
                  <div className={`h-48 ${crystal.image} relative group-hover:scale-105 transition-transform duration-500`}>
                    {/* Crystal mockup */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 transform rotate-45 bg-white/50 backdrop-blur-sm border-2 border-gray-300 rounded-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Rarity Badge */}
                    <Badge className={`absolute top-3 left-3 ${getRarityColor(crystal.rarity)} text-white border-none`}>
                      {crystal.rarity}
                    </Badge>
                    
                    {/* Favorite button */}
                    <button 
                      onClick={() => handleToggleFavorite(crystal.name)}
                      className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200"
                    >
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Crystal Info */}
                <div className="p-6">
                  {/* Category and Name */}
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-gray-600">
                      {crystal.category}
                    </p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-black text-black" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
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
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700 border border-gray-200">
                          {property}
                        </Badge>
                      ))}
                      {crystal.properties.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600 border border-gray-200">
                          +{crystal.properties.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Chakra:</span>
                      <p className="font-medium text-black">{crystal.chakra}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Dureza:</span>
                      <p className="font-medium text-black">{crystal.hardness}</p>
                    </div>
                  </div>
                  
                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-black">
                      {crystal.price}
                    </span>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm"
                        variant="outline" 
                        onClick={() => handleShowInfo(crystal.name)}
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-black"
                      >
                        <Info className="mr-1 h-4 w-4" />
                        Info
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => handleAddToCart(crystal.name)}
                        className="bg-black hover:bg-gray-800 text-white"
                      >
                        <ShoppingCart className="mr-1 h-4 w-4" />
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
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center border border-gray-200">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">No se encontraron cristales</h3>
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
