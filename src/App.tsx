import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import PopularStoresSection from './components/PopularStoresSection';
import ProductSection from './components/ProductSection';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import PromoSection from './components/PromoSection';
import MobileAppSection from './components/MobileAppSection';
import DeliveryAreasSection from './components/DeliveryAreasSection';
import PartnerBenefitsSection from './components/PartnerBenefitsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <PopularStoresSection />
      <ProductSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <PromoSection />
      <MobileAppSection />
      <DeliveryAreasSection />
      <PartnerBenefitsSection />
      <Footer />
    </div>
  );
}

export default App;