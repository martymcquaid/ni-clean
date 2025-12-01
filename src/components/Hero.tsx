import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&h=1080&fit=crop')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24">
        <h1 className="text-6xl font-bold leading-tight mb-6">Professional Carpet Cleaning Across Northern Ireland</h1>
        <p className="text-xl mb-8">Fast, affordable, eco-friendly cleaning for homes & businesses.</p>
        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Get a Free Quote</button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;