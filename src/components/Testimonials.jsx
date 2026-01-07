import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Aniketh translates complex concepts into stunning digital reality. His attention to detail and technical prowess are unmatched in the industry.",
      author: "Sarah Jenkins",
      role: "Creative Director, Studio Alpha"
    },
    {
      text: "The perfect blend of technical expertise and artistic vision. He delivered a platform that exceeded our expectations in performance and design.",
      author: "David Chen",
      role: "Founder, TechFlow"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-12 container mx-auto mb-20">
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
                        <div>
                             <p className="font-bold font-serif text-lg">{item.author}</p>
                             <p className="font-mono text-xs text-stone-500 uppercase">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </section>
  );
};

export default Testimonials;
