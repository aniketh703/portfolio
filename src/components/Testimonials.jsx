import React from 'react';
import CompanyLogo from './CompanyLogo';

const testimonials = [
  {
    text: 'Aniketh consistently transforms product requirements into polished, user-centered interfaces. His ability to align design quality with delivery speed has made a measurable impact on our product experience.',
    author: 'Product Team Lead',
    role: 'PanTerra Networks',
    domain: 'panterranetworks.com',
  },
  {
    text: 'During his internship at Q-DITS, Aniketh showed strong ownership across UI implementation and collaboration. He improved usability while keeping front-end code clean and maintainable.',
    author: 'Engineering Mentor',
    role: 'Q-DITS',
    domain: 'q-dits.com',
  },
];

const Testimonials = () => (
  <section className="w-full bg-white dark:bg-[#141414] border-t border-brand-border dark:border-[#2e2e2e]">
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
      <div className="flex justify-between items-end mb-10 pb-6 border-b border-brand-border dark:border-[#2e2e2e]">
        <div>
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brand-muted dark:text-[#aaa] block mb-2">Feedback</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-brand-dark dark:text-[#eee]">Testimonials</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((item, i) => (
          <div key={i} className="flex flex-col justify-between p-6 bg-brand-bg dark:bg-[#1a1a1a] border border-brand-border dark:border-[#2e2e2e] rounded-[4px] hover:border-[#bbb] dark:hover:border-[#444] hover:bg-white dark:hover:bg-[#1f1f1f] transition-all duration-200">
            <span className="font-sans font-black text-5xl text-brand-border dark:text-[#2e2e2e] leading-none select-none mb-4">&ldquo;</span>
            <blockquote className="font-sans text-lg md:text-xl leading-relaxed tracking-tight text-brand-dark dark:text-[#ddd] flex-1">
              {item.text}
            </blockquote>
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-brand-border dark:border-[#2e2e2e]">
              <CompanyLogo domain={item.domain} name={item.role} className="w-9 h-9 rounded-[4px] border border-brand-border dark:border-[#2e2e2e] bg-white dark:bg-[#1c1c1c] object-contain p-1" />
              <div>
                <p className="font-sans text-sm font-medium text-brand-dark dark:text-[#eee] tracking-tight">{item.author}</p>
                <p className="font-sans text-[11px] text-brand-muted dark:text-[#aaa] uppercase tracking-[0.08em]">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
