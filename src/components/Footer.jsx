import React from 'react';
import { MoveRight } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  return (
    <section id="info" className="px-4 md:px-12 py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 container">
          <div>
            <h2 className="font-serif text-6xl md:text-8xl mb-12 tracking-tighter">Let's build <br/> <span className="text-stone-500 italic">tomorrow.</span></h2>
            <div className="flex flex-col space-y-2 font-mono text-sm uppercase tracking-widest text-stone-400">
                <a href="#" className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200"><MoveRight size={12}/> Email</a>
                <a href="#" className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200"><MoveRight size={12}/> Twitter / X</a>
                <a href="#" className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200"><MoveRight size={12}/> LinkedIn</a>
                <a href="#" className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200"><MoveRight size={12}/> Instagram</a>
                {onNavigate && (
                    <button onClick={() => onNavigate('brand')} className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200 text-left">
                        <MoveRight size={12}/> Brand System
                    </button>
                )}
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl text-stone-300">I am a UI Engineer and Creative Developer obsessed with the space between rigid grids and fluid interaction.</p>
            <div className="mt-12 pt-12 border-t border-stone-800 flex justify-between font-mono text-xs text-stone-500">
                <p>© <span data-current-year>{new Date().getFullYear()}</span> Aniketh Vustepalle</p>
                <span>Designed & Coded in React</span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Footer;
