import React from 'react';
import { Globe, PenTool, Smartphone, Code } from 'lucide-react';

const Services = ({ onNavigate }) => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 mb-4" />,
      title: "Web Development",
      description: "Building scalable, performant, and accessible web applications using modern technologies."
    },
    {
      icon: <PenTool className="w-8 h-8 mb-4" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences with a focus on simplicity and functionality."
    },
    {
      icon: <Smartphone className="w-8 h-8 mb-4" />,
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly across all devices and screen sizes."
    },
    {
      icon: <Code className="w-8 h-8 mb-4" />,
      title: "Technical Strategy",
      description: "Providing architectural guidance and technical solutions to meet business goals."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-12 container mx-auto">
      <h2 className="font-serif text-4xl italic mb-12 border-b border-stone-300 pb-4">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 border border-stone-200 hover:bg-stone-50 transition-colors duration-300 group">
            <div className="text-stone-800 group-hover:text-brand-orange transition-colors duration-300">
                {service.icon}
            </div>
            <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
            <p className="font-mono text-sm text-stone-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
          <p className="text-stone-500 font-mono text-sm mb-4">Looking for detailed packages?</p>
          <button onClick={() => onNavigate('pricing')} className="inline-block border-b border-stone-900 pb-1 font-serif italic text-xl hover:text-brand-orange transition-colors duration-300">
              View Pricing & Packages
          </button>
      </div>
    </section>
  );
};

export default Services;
