import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg py-4 border-b border-gray-200/20">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold text-blue-600">NI Clean</Link>
        <div className="space-x-4">
          <Link to="/" className="text-lg text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/services" className="text-lg text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/testimonials" className="text-lg text-gray-700 hover:text-blue-600">Testimonials</Link>
          <Link to="/about" className="text-lg text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-lg text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;