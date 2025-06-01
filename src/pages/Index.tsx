
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductGallery from '@/components/ProductGallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Hero />
      <Features />
      <ProductGallery />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
