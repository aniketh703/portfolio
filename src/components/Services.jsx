import React from 'react';
import { PenTool, Code, Globe, Smartphone } from 'lucide-react';

const serviceItems = [
  {
    icon: <PenTool strokeWidth={1.5} size={22} />,
    num: '01',
    title: 'UI/UX Design',
    description: 'Crafting intuitive user experiences with Figma and modern design systems. Wireframing, prototyping, and high-fidelity UI design.',
  },
  {
    icon: <Code strokeWidth={1.5} size={22} />,
    num: '02',
    title: 'Frontend Development',
    description: 'Building responsive, performant interfaces with React, TypeScript, and Tailwind CSS.',
  },
  {
    icon: <Globe strokeWidth={1.5} size={22} />,
    num: '03',
    title: 'Full Stack',
    description: 'Scalable web apps with Python, Flask, FastAPI, and cloud deployment on AWS and Docker.',
  },
  {
    icon: <Smartphone strokeWidth={1.5} size={22} />,
    num: '04',
    title: 'Design Systems',
    description: 'Building comprehensive design systems and ensuring smooth handoff between design and engineering.',
  },
];

const Services = ({ onNavigate }) => (
  <section className="w-full bg-white dark:bg-[#141414] border-t border-brand-border dark:border-[#2e2e2e]">
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
      <div className="flex justify-between items-end mb-10 pb-6 border-b border-brand-border dark:border-[#2e2e2e]">
        <div>
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brand-muted dark:text-[#888] block mb-2">Expertise</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-brand-dark dark:text-[#eee]">What I offer</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border dark:bg-[#2e2e2e]">
        {serviceItems.map((s, i) => (
          <div key={i} className="flex flex-col gap-6 p-8 bg-white dark:bg-[#141414] hover:bg-brand-bg dark:hover:bg-[#1a1a1a] transition-colors duration-200">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[11px] text-brand-muted dark:text-[#aaa] font-medium tracking-[0.15em]">{s.num}</span>
              <span className="text-brand-dark dark:text-[#888]">{s.icon}</span>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-2xl tracking-tight text-brand-dark dark:text-[#eee] mb-3">{s.title}</h3>
              <p className="font-sans text-[13px] text-[#666] dark:text-[#aaa] leading-relaxed tracking-tight">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center font-sans text-sm text-brand-muted dark:text-[#888] tracking-tight">
        Need a different approach?{' '}
        <a href="mailto:anikethvustepalle03@gmail.com" className="text-brand-dark dark:text-[#ccc] underline underline-offset-2 hover:text-brand transition-colors duration-200">
          Let&apos;s discuss.
        </a>
      </p>
    </div>
  </section>
);

export default Services;
