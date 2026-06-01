import React from 'react';
import { MessageSquare, Search, PenTool, Rocket } from 'lucide-react';

const steps = [
  { icon: <MessageSquare size={20} strokeWidth={1.5} />, num: '01', title: 'Discovery', description: 'Understanding your vision, goals, and audience through deep conversation.' },
  { icon: <Search size={20} strokeWidth={1.5} />, num: '02', title: 'Strategy', description: 'Planning the roadmap, selecting technologies, and defining the architecture.' },
  { icon: <PenTool size={20} strokeWidth={1.5} />, num: '03', title: 'Design & Build', description: 'Crafting the visual identity and implementing the solution with clean code.' },
  { icon: <Rocket size={20} strokeWidth={1.5} />, num: '04', title: 'Launch', description: 'Testing, optimizing, and deploying your project to the world.' },
];

const Process = () => (
  <section className="w-full border-t border-brand-border dark:border-[#2e2e2e]">
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">

      {/* Header */}
      <div className="flex justify-between items-end mb-10 pb-6 border-b border-brand-border dark:border-[#2e2e2e]">
        <div>
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-brand-muted dark:text-[#aaa] block mb-2">Methodology</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight text-brand-dark dark:text-[#eee]">Process</h2>
        </div>
        <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-brand-muted dark:text-[#aaa] hidden sm:block">How I work</span>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step, i) => (
          <div key={i} className="group flex flex-col gap-4 p-6 bg-white dark:bg-[#1a1a1a] border border-brand-border dark:border-[#2e2e2e] rounded-[4px] hover:border-[#bbb] dark:hover:border-[#444] transition-colors duration-200">
            <div className="flex items-center justify-between">
              <span className="text-brand-muted dark:text-[#aaa]">{step.icon}</span>
              <span className="font-sans text-[11px] text-brand-muted dark:text-[#aaa] font-medium tracking-[0.08em]">{step.num}</span>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-lg tracking-tight text-brand-dark dark:text-[#eee] mb-2">{step.title}</h3>
              <p className="font-sans text-[13px] text-[#666] dark:text-[#aaa] leading-relaxed tracking-tight">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
