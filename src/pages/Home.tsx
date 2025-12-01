import React from 'react';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;