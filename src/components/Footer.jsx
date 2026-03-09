import React from 'react';
import { MoveRight } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  return (
    <section id="info" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden rounded-t-xl">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-4 md:grid-cols-2 md:px-8 relative z-10">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-12 tracking-tighter leading-tight">Let's build <br/> <span className="text-stone-400 font-light italic">tomorrow.</span></h2>
            <div className="flex flex-col space-y-2 font-sans text-sm uppercase tracking-widest text-stone-400">
                <a href="mailto:anikethvustepalle03@gmail.com" className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 opacity-70 hover:opacity-100"><MoveRight size={12}/> Email</a>
                <a href="https://github.com/aniketh703" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 opacity-70 hover:opacity-100"><MoveRight size={12}/> GitHub</a>
                <a href="https://www.linkedin.com/in/aniketh-vustepalle/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 opacity-70 hover:opacity-100"><MoveRight size={12}/> LinkedIn</a>
                {onNavigate && (
                    <button onClick={() => onNavigate('pricing')} className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 text-left opacity-70 hover:opacity-100">
                        <MoveRight size={12}/> Services & Pricing
                    </button>
                )}
                {onNavigate && (
                    <button onClick={() => onNavigate('brand')} className="hover:text-brand-orange flex items-center gap-2 hover:pl-4 transition-all duration-300 text-left opacity-70 hover:opacity-100">
                        <MoveRight size={12}/> Brand System
                    </button>
                )}
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl text-stone-300 opacity-85">I build intuitive digital experiences that align user needs with business outcomes. UI/UX Designer at PanTerra Networks with expertise in React, Python, and AI-driven systems.</p>
            <div className="mt-12 pt-12 border-t border-stone-800 flex justify-between font-sans text-xs text-stone-500 opacity-60">
                <p>© <span data-current-year>{new Date().getFullYear()}</span> Aniketh Vustepalle</p>
                <span>Designed & Coded in React</span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Footer;
