
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCards } from '@/components/ServiceCards';
import { PrePaymentBanner } from '@/components/PrePaymentBanner';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { GlobalImpact } from '@/components/GlobalImpact';
import { WhyKnowledgeExchange } from '@/components/WhyKnowledgeExchange';
import { FloatingCTA } from '@/components/FloatingCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServiceCards />
      <PrePaymentBanner />
      <TestimonialsCarousel />
      <GlobalImpact />
      <WhyKnowledgeExchange />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
