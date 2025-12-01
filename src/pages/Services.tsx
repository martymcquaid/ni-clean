import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <p className="text-lg text-center mb-6">Explore our range of professional carpet cleaning services.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Add detailed service descriptions here */}
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Residential Cleaning</h2>
          <p className="text-gray-600">High-quality residential carpet cleaning for homes of all sizes.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Commercial Cleaning</h2>
          <p className="text-gray-600">Efficient and thorough cleaning solutions for businesses.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Stain Removal</h2>
          <p className="text-gray-600">Expert stain removal to keep your carpets looking like new.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;