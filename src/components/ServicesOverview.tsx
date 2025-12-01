import React from 'react';

const ServicesOverview: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Cards */}
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Residential Cleaning</h3>
          <p className="text-gray-600">High-quality residential carpet cleaning for homes of all sizes.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Commercial Cleaning</h3>
          <p className="text-gray-600">Efficient and thorough cleaning solutions for businesses.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">Stain Removal</h3>
          <p className="text-gray-600">Expert stain removal to keep your carpets looking like new.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;