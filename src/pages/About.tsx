import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
      <p className="text-lg text-center mb-6">Learn more about our company and team.</p>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">At NI Clean, we strive to provide the best carpet cleaning services across Northern Ireland, ensuring customer satisfaction and eco-friendly practices.</p>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-600">Our team is composed of highly trained professionals dedicated to delivering top-quality service with a smile.</p>
      </div>
    </div>
  );
};

export default About;