import React from 'react';
import { ArrowUpRight, Grid3X3, MoveRight } from 'lucide-react';
import GenerativeArt from '../components/GenerativeArt';

const Home = ({ projects, onProjectSelect, onNavigate }) => {
  return (
    <>
      <header className="relative pt-40 pb-20 px-4 md:px-12 min-h-[80vh] flex flex-col justify-center animate-in fade-in duration-700">
        <div className="max-w-[90vw] border-t border-stone-300 pt-8 container">
            <h1 className="text-[13vw] leading-[0.85] font-serif font-medium tracking-tighter">ANIKETH <br/> <span className="ml-[10vw] italic text-stone-400 hover:text-orange-600 transition-colors duration-300">VUSTEPALLE</span></h1>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end md:items-start gap-8 max-w-6xl ml-auto container">
            <p className="font-mono text-sm max-w-md leading-relaxed text-justify uppercase tracking-tight">( Manifest ) — Designing distinct digital artifacts for the modern web. Focusing on the intersection of raw data and emotional typography. Based in India, working globally.</p>
            <ArrowUpRight size={64} strokeWidth={1} className="animate-pulse" />
        </div>
        <div className="absolute top-20 right-0 -z-10 opacity-5 font-serif text-[40rem] leading-none select-none pointer-events-none">A</div>
      </header>
      <main id="index" className="px-4 md:px-8 pb-32 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards container">
        <div className="flex justify-between items-end mb-8 border-b border-stone-900 pb-2">
            <span className="font-mono text-xs uppercase tracking-widest">[ Selected Works ]</span>
            <Grid3X3 size={16} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(300px,auto)]">
          {projects.map((project, index) => (
            <div key={project.id} onClick={() => onProjectSelect(index)} className={`group relative bg-white border border-stone-200 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:z-10 ${project.span}`}>
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-20 mix-blend-difference text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start">
                    <span className="font-mono text-xs border border-white/30 px-2 py-1 rounded-full">{project.category}</span>
                    <ArrowUpRight className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                </div>
                <div>
                    <h3 className="font-serif text-4xl italic mb-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                    <p className="font-mono text-xs uppercase tracking-widest">{project.year}</p>
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                <GenerativeArt id={project.id} color={project.color} />
              </div>
              <div className="absolute bottom-6 left-6 z-10 group-hover:opacity-0 transition-opacity duration-200 bg-white/80 backdrop-blur-md px-4 py-2 border border-stone-200">
                <span className="font-mono text-xs uppercase tracking-widest text-stone-900">{project.id < 10 ? `0${project.id}` : project.id} — {project.title}</span>
              </div>
            </div>
          ))}
          <div onClick={() => onNavigate('archive')} className="col-span-1 row-span-1 flex items-center justify-center bg-stone-900 text-stone-50 p-8 group cursor-pointer">
            <div className="text-center">
                <p className="font-serif text-3xl italic mb-4 group-hover:scale-110 transition-transform duration-300">View Archive</p>
                <div className="w-full h-px bg-stone-700 group-hover:w-1/2 transition-all duration-300 mx-auto"></div>
            </div>
          </div>
        </div>
      </main>

      <section id="info" className="px-4 md:px-12 py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 container">
          <div>
            <h2 className="font-serif text-6xl md:text-8xl mb-12 tracking-tighter">Let's build <br/> <span className="text-stone-500 italic">tomorrow.</span></h2>
            <div className="flex flex-col space-y-2 font-mono text-sm uppercase tracking-widest text-stone-400">
                <a href="#" className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200"><MoveRight size={12}/> Email</a>
                <a href="#" className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200"><MoveRight size={12}/> Twitter / X</a>
                <a href="#" className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200"><MoveRight size={12}/> LinkedIn</a>
                <a href="#" className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200"><MoveRight size={12}/> Instagram</a>
                <button onClick={() => onNavigate('brand')} className="hover:text-white flex items-center gap-2 hover:pl-4 transition-all duration-200 text-left"><MoveRight size={12}/> Brand System</button>
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
    </>
  );
};

export default Home;
