import React from 'react';
import { Quote } from 'lucide-react';
import CompanyLogo from './CompanyLogo';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Aniketh consistently transforms product requirements into polished, user-centered interfaces. His ability to align design quality with delivery speed has made a measurable impact on our product experience.",
      author: "Product Team Lead",
      role: "PanTerra Networks",
      company: "PanTerra Networks",
      domain: "panterranetworks.com"
    },
    {
      text: "During his internship at Q-DITS, Aniketh showed strong ownership across UI implementation and collaboration. He improved usability while maintaining clean, maintainable front-end code.",
      author: "Engineering Mentor",
      role: "Q-DITS",
      company: "Q-DITS",
      domain: "q-dits.com"
    }
  ];

  return (
    <section className="mx-auto mb-20 flex w-full max-w-7xl flex-col gap-6 px-4 py-20 md:gap-12 md:px-8">
       <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
                 <h2 className="font-serif text-4xl italic mb-6">Testimonials</h2>
                 <p className="font-mono text-sm uppercase tracking-widest text-stone-500">Kind words from collaborators</p>
            </div>
            <div className="md:w-2/3 grid gap-12">
                {testimonials.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-stone-200 hover:border-brand-orange transition-colors duration-300">
                        <Quote className="absolute -left-3 -top-3 w-6 h-6 bg-white text-stone-300 p-1" />
                        <blockquote className="font-serif text-2xl leading-relaxed mb-4 text-stone-800">"{item.text}"</blockquote>
                        <div className="flex items-center gap-3">
                           <CompanyLogo domain={item.domain} name={item.company} className="w-10 h-10 rounded border border-stone-200 bg-white object-contain p-1" />
                           <div>
                             <p className="font-bold font-serif text-lg">{item.author}</p>
                             <p className="font-mono text-xs text-stone-500 uppercase">{item.role}</p>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </section>
  );
};

export default Testimonials;
