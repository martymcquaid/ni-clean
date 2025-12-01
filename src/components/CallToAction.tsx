import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Need Same-Day Cleaning? We’re Available Across Northern Ireland!</h2>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Call Now</button>
    </div>
  );
};

export default CallToAction;