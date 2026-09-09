import React from 'react';
import CompanyLogo from './CompanyLogo';
import { profile } from '../data/profile';

const testimonials = [
  {
    text: 'Aniketh consistently transforms product requirements into polished, user-centered interfaces. His ability to align design quality with delivery speed has made a measurable impact on our product experience.',
    author: 'Product Team Lead',
    role: profile.employer,
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
  <section className="w-full bg-stone-50/50 dark:bg-[#0f0f0f] border-t border-stone-200 dark:border-[#262626]">
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <div className="flex justify-between items-end mb-12 pb-6 border-b border-stone-200 dark:border-[#262626]">
        <div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-brand-dark dark:text-white">
            What Colleagues Say
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between p-7 md:p-9 bg-white dark:bg-[#161616] border border-stone-200/90 dark:border-[#262626] rounded-2xl hover:border-brand-dark dark:hover:border-brand-lime shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-[#202020] border border-stone-200 dark:border-[#2e2e2e] text-[11px] font-mono text-stone-600 dark:text-[#aaa]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-brand-lime animate-pulse" />
                Verified Endorsement
              </span>
              <span className="font-serif italic text-3xl text-stone-300 dark:text-[#333] group-hover:text-brand-dark dark:group-hover:text-brand-lime transition-colors leading-none select-none">
                &ldquo;&rdquo;
              </span>
            </div>
            <blockquote className="font-sans text-base sm:text-lg leading-relaxed tracking-tight text-stone-800 dark:text-[#ddd] flex-1 mb-6">
              &ldquo;{item.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3.5 pt-5 border-t border-stone-100 dark:border-[#222]">
              <CompanyLogo
                domain={item.domain}
                name={item.role}
                width={36}
                height={36}
                className="w-10 h-10 rounded-xl border border-stone-200/80 dark:border-[#2a2a2a] bg-stone-50 dark:bg-[#1f1f1f] object-contain p-1.5 flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="font-sans text-sm font-bold text-brand-dark dark:text-[#eee] tracking-tight truncate">
                  {item.author}
                </p>
                <p className="font-sans text-[11px] text-stone-500 dark:text-[#888] uppercase tracking-[0.08em] truncate">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
