import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial Cards */}
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <p className="text-gray-600">"NI Clean transformed our office carpets, making them look brand new!"</p>
          <p className="text-blue-600 mt-4">- Sarah Johnson, Office Manager</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <p className="text-gray-600">"Their service is reliable, affordable, and top-notch!"</p>
          <p className="text-blue-600 mt-4">- Mark Thompson, Homeowner</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
          <p className="text-gray-600">"I highly recommend NI Clean for any carpet cleaning needs."</p>
          <p className="text-blue-600 mt-4">- Emily Davis, Business Owner</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;