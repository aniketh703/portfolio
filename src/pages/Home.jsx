import React, { useEffect } from 'react';
import { ArrowUpRight, Grid3X3 } from 'lucide-react';
import GenerativeArt from '../components/GenerativeArt';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const Home = ({ projects, onProjectSelect, onNavigate }) => {
  useEffect(() => {
    document.title = "Aniketh Vustepalle | UI/UX Designer & Frontend Developer";
  }, []);

  return (
    <>
        <header className="relative pt-24 pb-16 px-4 md:px-12 min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center animate-in fade-in duration-700 hero-grid-bg overflow-hidden">
            <div className="mx-auto w-full max-w-7xl border-t border-stone-300 pt-8 md:pt-12 section-shell">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 mb-6 opacity-60">
              Product Design & Frontend Engineering
            </p>
            <h1
                style={{ fontSize: 'var(--type-display-lg)' }}
                className="font-serif font-medium tracking-[-0.02em] text-stone-900 max-w-4xl leading-[1.03] mb-7 md:mb-8"
            >
              Most products break at the exact moment people need them most. I design and build for that moment.
            </h1>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone-400">
              Aniketh Vustepalle - Hyderabad, India
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={() => onNavigate('archive')} className="ui-button invert touch-target">
                Explore case studies
              </button>
              <button onClick={() => onNavigate('resume')} className="ui-button touch-target">
                View resume
              </button>
            </div>
          </div>
      </header>
      <main id="index" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:gap-12 md:px-8">
        <div className="flex justify-between items-end mb-8 md:mb-10 border-b border-stone-300 pb-6 md:pb-7">
            <div>
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500 block opacity-60 mb-2">Collection</span>
                <h2 style={{ fontSize: 'var(--type-heading-lg)' }} className="font-serif tracking-tight">Selected Works</h2>
            </div>
            <Grid3X3 size={16} className="opacity-60 hidden md:block" strokeWidth={1.5} />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(240px,auto)] md:auto-rows-[minmax(300px,auto)]">
          {projects.filter(p => p.featured).map((project) => (
            <div 
              key={project.id} 
              role="button"
              tabIndex="0"
              onClick={() => onProjectSelect(projects.findIndex(p => p.id === project.id))} 
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onProjectSelect(projects.findIndex(p => p.id === project.id))}
              className={`group relative bg-white border border-stone-200 rounded-lg cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:z-10 min-h-[240px] md:min-h-[300px] ${project.span}`}
            >
              <div className="absolute inset-0 ink-gradient z-10 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 z-20 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start">
                    <span className="font-mono text-xs border border-white/30 px-2 py-1 rounded-full">{project.category}</span>
                    <ArrowUpRight className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300" />
                </div>
                <div>
                    {project.realProblem && (
                      <p className="font-sans text-xs leading-relaxed mb-3 opacity-70 max-w-xs">
                        {`${project.realProblem.slice(0, 80)}...`}
                      </p>
                    )}
                    <h3 className="font-serif text-2xl md:text-4xl italic mb-2 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                    <p className="font-mono text-xs uppercase tracking-widest">{project.year}</p>
                </div>
              </div>
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 bg-stone-200">
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <GenerativeArt id={project.id} color={project.color} />
                )}
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 hidden md:block group-hover:opacity-0 transition-opacity duration-200 bg-white/85 backdrop-blur-md px-4 py-2 border border-stone-200 rounded-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-stone-900">{project.id < 10 ? `0${project.id}` : project.id} — {project.title}</span>
              </div>
            </div>
          ))}
          <div 
            onClick={() => onNavigate('archive')} 
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigate('archive')}
            role="button"
            tabIndex="0"
            className="col-span-1 row-span-1 flex items-center justify-center bg-stone-900 text-stone-50 p-6 md:p-8 group cursor-pointer min-h-[200px]"
          >
            <div className="text-center">
                <p className="font-serif text-2xl md:text-3xl italic mb-4 group-hover:scale-110 transition-transform duration-300">View Archive</p>
                <div className="w-full h-px bg-stone-700 group-hover:w-1/2 transition-all duration-300 mx-auto"></div>
            </div>
          </div>
        </div>
      </main>

      <Services onNavigate={onNavigate} />
      <Process />
      <Testimonials />

      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Home;
