import React from 'react';
import { MoveRight } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  return (
    <section id="info" className="relative overflow-hidden rounded-t-xl bg-stone-900 py-16 text-stone-100 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255,69,0,0.24), rgba(255,69,0,0) 34%), radial-gradient(circle at 82% 88%, rgba(250,250,249,0.14), rgba(250,250,249,0) 44%)',
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-400">Open for projects</p>
          <h2 style={{ fontSize: 'var(--type-display-lg)' }} className="mb-7 font-serif leading-[0.98] tracking-tighter md:mb-8">
            Let's build
            <br />
            <span className="font-light italic text-stone-300">something useful.</span>
          </h2>

          <div className="mb-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:anikethvustepalle03@gmail.com"
              className="ui-button invert touch-target"
            >
              Start a project
            </a>
            <a
              href="https://wa.me/919311761114"
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button touch-target !border-stone-400 !text-stone-200 hover:!border-stone-100 hover:!bg-stone-100 hover:!text-stone-900"
            >
              WhatsApp
            </a>
          </div>

          <div className="rounded-md border border-stone-700 bg-stone-900/60 p-4 md:p-5">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-500">Connect</p>
            <div className="grid grid-cols-1 gap-2 font-sans text-sm uppercase tracking-widest text-stone-300 sm:grid-cols-2">
              <a href="mailto:anikethvustepalle03@gmail.com" className="touch-target flex items-center gap-2 py-1 opacity-80 transition-all duration-300 hover:pl-2 hover:text-brand-orange hover:opacity-100"><MoveRight size={12} /> Email</a>
              <a href="https://github.com/aniketh703" target="_blank" rel="noopener noreferrer" className="touch-target flex items-center gap-2 py-1 opacity-80 transition-all duration-300 hover:pl-2 hover:text-brand-orange hover:opacity-100"><MoveRight size={12} /> GitHub</a>
              <a href="https://www.linkedin.com/in/aniketh-vustepalle/" target="_blank" rel="noopener noreferrer" className="touch-target flex items-center gap-2 py-1 opacity-80 transition-all duration-300 hover:pl-2 hover:text-brand-orange hover:opacity-100"><MoveRight size={12} /> LinkedIn</a>
              <a href="https://wa.me/919311761114" target="_blank" rel="noopener noreferrer" className="touch-target flex items-center gap-2 py-1 opacity-80 transition-all duration-300 hover:pl-2 hover:text-brand-orange hover:opacity-100"><MoveRight size={12} /> WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="rounded-md border border-stone-700 bg-stone-950/50 p-5 md:p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-500">Quick navigation</p>
            <div className="flex flex-wrap gap-2">
              {onNavigate && (
                <button onClick={() => onNavigate('index')} className="touch-target rounded-sm border border-stone-600 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-300 transition-colors hover:border-stone-300 hover:text-stone-100">Home</button>
              )}
              {onNavigate && (
                <button onClick={() => onNavigate('archive')} className="touch-target rounded-sm border border-stone-600 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-300 transition-colors hover:border-stone-300 hover:text-stone-100">Archive</button>
              )}
              {onNavigate && (
                <button onClick={() => onNavigate('pricing')} className="touch-target rounded-sm border border-stone-600 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-300 transition-colors hover:border-stone-300 hover:text-stone-100">Services</button>
              )}
              {onNavigate && (
                <button onClick={() => onNavigate('brand')} className="touch-target rounded-sm border border-stone-600 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-300 transition-colors hover:border-stone-300 hover:text-stone-100">Brand</button>
              )}
              {onNavigate && (
                <button onClick={() => onNavigate('resume')} className="touch-target rounded-sm border border-stone-600 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-stone-300 transition-colors hover:border-stone-300 hover:text-stone-100">Resume</button>
              )}
            </div>
          </div>

          <div className="mt-8 border-t border-stone-800 pt-6 md:pt-8">
            <p style={{ fontSize: 'var(--type-body-lg)' }} className="max-w-xl font-light leading-[1.55] text-stone-300 opacity-85">
              I build intuitive digital experiences that align user needs with business outcomes. UI/UX Designer at PanTerra Networks with expertise in React, Python, and AI-driven systems.
            </p>
            <div className="mt-6 flex flex-col gap-2 font-sans text-xs text-stone-500 opacity-70 sm:flex-row sm:justify-between">
              <p>© <span data-current-year>{new Date().getFullYear()}</span> Aniketh Vustepalle</p>
              <span>Designed and coded in React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
