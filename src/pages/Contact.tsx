import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
      <p className="text-lg text-center mb-6">Get in touch with us for any inquiries or to book a service.</p>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-3xl shadow-xl">
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Name" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Email" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea id="message" className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Message" rows={4}></textarea>
        </div>
        <button type="submit" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;