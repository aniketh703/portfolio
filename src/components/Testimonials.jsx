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
                 <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-500 opacity-60 block mb-2">Feedback</span>
                 <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">Testimonials</h2>
                 <p className="font-sans text-sm text-stone-600 opacity-70">Kind words from collaborators</p>
            </div>
            <div className="md:w-2/3 grid gap-12">
                {testimonials.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-stone-200 hover:border-brand-orange transition-all duration-300 group rounded-lg">
                        <Quote className="absolute -left-3 -top-3 w-6 h-6 bg-white text-stone-300 p-1 rounded" />
                        <blockquote className="font-serif text-2xl leading-relaxed mb-4 text-stone-800 opacity-85">“{item.text}”</blockquote>
                        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-stone-200 group-hover:border-stone-300 transition-colors">
                           <CompanyLogo domain={item.domain} name={item.company} className="w-10 h-10 rounded-lg border border-stone-200 bg-white object-contain p-1" />
                           <div>
                             <p className="font-serif text-lg font-medium">{item.author}</p>
                             <p className="font-sans text-xs text-stone-500 uppercase tracking-wide opacity-60">{item.role}</p>
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
