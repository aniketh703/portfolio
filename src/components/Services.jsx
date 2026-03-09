import React from 'react';
import { Globe, PenTool, Smartphone, Code } from 'lucide-react';

const Services = ({ onNavigate }) => {
  const services = [
    {
      icon: <PenTool className="w-8 h-8 mb-4" />,
      title: "UI/UX Design",
      description: "Crafting intuitive user experiences using Figma, Adobe XD, and modern design systems. Specialized in wireframing, prototyping, and high-fidelity UI design.",
      span: "md:col-span-4 md:row-span-2",
      details: {
        tools: "Figma • Adobe XD • FigJam",
        outcomes: [
          "Improved product usability while keeping front-end code clean and maintainable (Q-DITS internship feedback)",
          "Reduced model deployment time through CI/CD-ready interface and workflow decisions",
          "Shipped responsive, accessible interfaces across web apps with better handoff between design and development"
        ],
        deliverables: "Personas, wireframes, design system tokens, clickable prototypes"
      }
    },
    {
      icon: <Code className="w-8 h-8 mb-4" />,
      title: "Frontend Development",
      description: "Building responsive interfaces with React, JavaScript (ES6+), Tailwind CSS, and integrating Lottie animations for enhanced user interactions.",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      icon: <Globe className="w-8 h-8 mb-4" />,
      title: "Full Stack Development",
      description: "Developing scalable web applications using React, Python, Flask, and Django with cloud deployment on AWS and Docker.",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      icon: <Smartphone className="w-8 h-8 mb-4" />,
      title: "Design Systems",
      description: "Creating comprehensive design systems and ensuring seamless handoff between design and development teams.",
      span: "md:col-span-6 md:row-span-1"
    }
  ];

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-20 md:gap-12 md:px-8">
      <div>
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-500 opacity-60 block mb-2">Expertise</span>
        <h2 className="font-serif text-4xl md:text-5xl mb-12 border-b border-stone-300 pb-6 tracking-tight">Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(180px,auto)] gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 border border-stone-200 hover:bg-stone-50/50 backdrop-blur-sm transition-all duration-300 group flex flex-col rounded-lg hover:shadow-lg hover:border-stone-300 ${service.span}`}
          >
            <div className="text-stone-800 group-hover:text-brand-orange transition-colors duration-300">
                {service.icon}
            </div>
            <h3 className="font-serif text-xl mt-2 mb-2">{service.title}</h3>
            <p className="font-sans text-sm text-stone-600 leading-relaxed opacity-70">{service.description}</p>

            {service.title === "UI/UX Design" && service.details && (
              <div className="mt-5 border-t border-stone-200 pt-4 space-y-3">
                <p className="font-sans text-xs font-semibold uppercase tracking-wide text-stone-500 opacity-60">{service.details.tools}</p>
                <ul className="space-y-2">
                  {service.details.outcomes.map((item) => (
                    <li key={item} className="font-sans text-sm text-stone-700 leading-relaxed opacity-70">• {item}</li>
                  ))}
                </ul>
                <p className="font-sans text-xs text-stone-500 leading-relaxed opacity-60">
                  <span className="font-semibold uppercase tracking-wide">Typical deliverables:</span> {service.details.deliverables}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
          <p className="text-stone-500 font-sans text-sm mb-4 opacity-60">Looking for detailed packages?</p>
          <button onClick={() => onNavigate('pricing')} className="inline-block border-b-2 border-stone-900 pb-1 font-serif italic text-xl hover:text-brand-orange hover:border-brand-orange transition-all duration-300">
              View Pricing & Packages
          </button>
      </div>
    </section>
  );
};

export default Services;
