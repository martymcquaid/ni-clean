import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-24">
      <div 
        className="bg-cover bg-center h-[500px] rounded-3xl shadow-2xl mb-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop')" }}
      >
        <div className="bg-gradient-to-r from-blue-600/70 to-green-600/70 h-full flex items-center justify-center rounded-3xl">
          <h1 className="text-white text-5xl font-extrabold text-center">About NI Clean</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-10">
          At NI Clean, we are committed to delivering top-tier carpet cleaning services across Northern Ireland. Our focus is on customer satisfaction, eco-friendly practices, and leveraging the latest cleaning technologies to ensure the best results.
        </p>
        <h2 className="text-3xl font-bold mb-6">Our History</h2>
        <p className="text-lg text-gray-700 mb-10">
          Founded in 2010, NI Clean has been a leader in the cleaning industry, known for our innovative techniques and reliable service. Over the years, we've expanded our offerings and grown our team to better serve our community.
        </p>
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop" 
              alt="Team Member" 
              className="rounded-full w-40 h-40 mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Lead Technician</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop" 
              alt="Team Member" 
              className="rounded-full w-40 h-40 mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Customer Service Manager</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop" 
              alt="Team Member" 
              className="rounded-full w-40 h-40 mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
            <p className="text-gray-600">Operations Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;