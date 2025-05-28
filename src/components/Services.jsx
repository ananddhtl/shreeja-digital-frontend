import React from 'react';
import {
  AiOutlineAntDesign,
  AiOutlineCode,
  AiOutlineMobile,
  AiOutlineGlobal,
  AiOutlineBarChart,
  AiOutlineThunderbolt,
} from 'react-icons/ai';

const services = [
  {
    title: 'UI/UX Design',
    description: 'We create intuitive and engaging user experiences that keep your customers coming back for more.',
    icon: <AiOutlineAntDesign />,
  },
  {
    title: 'Web Development',
    description: 'Custom web solutions built with the latest technologies to ensure performance, security, and scalability.',
    icon: <AiOutlineCode />,
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.',
    icon: <AiOutlineMobile />,
  },
  {
    title: 'Digital Branding',
    description: 'Comprehensive branding strategies that help you stand out in the digital landscape and build customer loyalty.',
    icon: <AiOutlineGlobal />,
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns that increase visibility, drive traffic, and generate qualified leads.',
    icon: <AiOutlineBarChart />,
  },
  {
    title: 'SEO Optimization',
    description: 'Strategic SEO services to improve your search engine rankings and drive organic traffic to your website.',
    icon: <AiOutlineThunderbolt />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20 px-4 font-sans scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold font-display">
          Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Services
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
          We offer a comprehensive range of digital services to help your business thrive in the digital world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-xl shadow-md transition duration-300 group hover:shadow-xl overflow-hidden"
          >
            {/* Top hover bar */}
            <span className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>

            {/* Glow background on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-500 z-0 rounded-xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-50 to-blue-50">
                {React.cloneElement(service.icon, {
                  size: 28,
                  className: 'text-purple-600',
                })}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-base text-gray-600 mt-2 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
