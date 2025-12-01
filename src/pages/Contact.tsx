import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-24 px-6">
      <h1 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
        Contact Us
      </h1>
      <p className="text-lg text-center mb-16 text-gray-700">
        Reach out for any inquiries or to book a service. We're here to help!
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <form className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl lg:w-1/2 flex-grow">
          <div className="mb-8">
            <label className="block text-gray-800 mb-3" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
          </div>
          <div className="mb-8">
            <label className="block text-gray-800 mb-3" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Email" />
          </div>
          <div className="mb-8">
            <label className="block text-gray-800 mb-3" htmlFor="message">Message</label>
            <textarea id="message" className="w-full border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Message" rows={5}></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            Send Message
          </button>
        </form>
        <div className="flex flex-col items-start space-y-6 lg:w-1/2">
          <div className="text-lg text-gray-800">
            <p><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@ni-clean.com" className="text-blue-600 hover:underline">info@ni-clean.com</a></p>
            <p><strong>Operating Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM</p>
          </div>
          <div className="w-full h-64 bg-cover bg-center rounded-3xl shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523475496153-3d6ccf21e6b3?w=800&h=600&fit=crop')" }}>
            {/* Map or additional info can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;