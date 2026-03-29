import React from 'react';
import { MoveRight } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  return (
    <section id="info" className="py-16 md:py-24 bg-stone-900 text-stone-100 relative overflow-hidden rounded-t-xl">
      <div className="absolute inset-0 opacity-60 pointer-events-none" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(255,69,0,0.22), rgba(255,69,0,0) 35%), radial-gradient(circle at 75% 100%, rgba(250,250,249,0.12), rgba(250,250,249,0) 40%)' }} />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:gap-16 px-4 md:grid-cols-2 md:px-8 relative z-10">
          <div>
        <h2 className="font-serif text-4xl md:text-7xl mb-8 md:mb-12 tracking-tighter leading-tight">Let's build <br/> <span className="text-stone-300 font-light italic">tomorrow.</span></h2>
            <div className="flex flex-col space-y-2 font-sans text-sm uppercase tracking-widest text-stone-300 p-4 md:p-5 border border-stone-700 bg-stone-900/60">
          <a href="mailto:anikethvustepalle03@gmail.com" className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 opacity-70 hover:opacity-100 py-1 touch-target"><MoveRight size={12}/> Email</a>
          <a href="https://wa.me/919311761114" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 opacity-70 hover:opacity-100 py-1 touch-target"><MoveRight size={12}/> WhatsApp</a>
          <a href="https://github.com/aniketh703" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 opacity-70 hover:opacity-100 py-1 touch-target"><MoveRight size={12}/> GitHub</a>
          <a href="https://www.linkedin.com/in/aniketh-vustepalle/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 opacity-70 hover:opacity-100 py-1 touch-target"><MoveRight size={12}/> LinkedIn</a>
                {onNavigate && (
            <button onClick={() => onNavigate('pricing')} className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 text-left opacity-70 hover:opacity-100 py-1 touch-target">
                        <MoveRight size={12}/> Services & Pricing
                    </button>
                )}
                {onNavigate && (
            <button onClick={() => onNavigate('brand')} className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 text-left opacity-70 hover:opacity-100 py-1 touch-target">
                        <MoveRight size={12}/> Brand System
                    </button>
                )}
                {onNavigate && (
              <button onClick={() => onNavigate('resume')} className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 text-left opacity-70 hover:opacity-100 py-1 touch-target">
                    <MoveRight size={12}/> Resume
                  </button>
                )}
            </div>
          </div>
          <div className="flex flex-col justify-end">
        <p className="text-lg md:text-2xl font-light leading-relaxed max-w-xl text-stone-300 opacity-85">I build intuitive digital experiences that align user needs with business outcomes. UI/UX Designer at PanTerra Networks with expertise in React, Python, and AI-driven systems.</p>
        <div className="mt-10 md:mt-12 pt-8 md:pt-12 border-t border-stone-800 flex flex-col sm:flex-row gap-2 sm:justify-between font-sans text-xs text-stone-500 opacity-60">
                <p>© <span data-current-year>{new Date().getFullYear()}</span> Aniketh Vustepalle</p>
                <span>Designed & Coded in React</span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Footer;
