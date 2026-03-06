import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Home, Quote } from 'lucide-react';
import GenerativeArt from './GenerativeArt';

const ProjectView = ({ project, onClose, onNext, onPrev, onHome }) => {
  const [isExiting, setIsExiting] = useState(false);

  if (!project) return null;

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 600); // Match animation duration
  };

  const handleHomeBtn = (e) => {
    e.stopPropagation();
    setIsExiting(true);
    setTimeout(() => {
        if(onHome) onHome();
        else onClose();
    }, 600);
  };

  const handleNext = (e) => {
      e.stopPropagation();
      // Optional: Add specific transition logic for next project here
      onNext(e);
  };

  const handlePrev = (e) => {
      e.stopPropagation();
      onPrev(e);
  };

  const renderModule = (module, index) => {
    switch(module.type) {
      case 'intro': 
        return (<p key={index} className="text-2xl md:text-5xl font-serif leading-tight mb-16 text-stone-900 indent-24">{module.content}</p>);
      case 'text': 
        return (<div key={index} className="mb-16 max-w-3xl">{module.title && <h3 className="font-serif text-3xl mb-6">{module.title}</h3>}<p className="text-lg leading-relaxed text-stone-700 font-light">{module.content}</p></div>);
      case 'quote': 
        return (<div key={index} className="py-16 border-y border-stone-200 my-16"><Quote className="text-orange-500 mb-6 opacity-50" size={48} /><p className="text-4xl md:text-6xl font-serif italic leading-tight text-stone-900">"{module.content}"</p></div>);
      case 'grid': 
        return (
          <div key={index} className="mb-24">
            {module.title && <h3 className="font-mono text-xs uppercase tracking-widest mb-8 text-stone-400">{module.title}</h3>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {module.items.map((item, i) => (
                    <div key={i} className="bg-white p-6 border border-stone-200 shadow-sm">
                        <span className="font-mono text-xs text-orange-500 block mb-3">{item.label}</span>
                        <p className="font-serif text-lg leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
          </div>
        );
      case 'code': 
        return (
            <div key={index} className="mb-16 bg-stone-900 text-stone-100 p-8 font-mono text-sm overflow-x-auto rounded-sm shadow-xl relative group no-scrollbar">
                <div className="flex justify-between items-center mb-4 border-b border-stone-700 pb-2">
                    <span className="text-xs uppercase tracking-widest text-stone-400">{module.title || 'Code Snippet'}</span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <pre className="leading-relaxed"><code>{module.code}</code></pre>
            </div>
        );
      default: return null;
    }
  };

  return (
    <div data-lenis-prevent className={`fixed inset-0 z-[150] bg-stone-100 overflow-y-auto no-scrollbar ${isExiting ? 'project-close' : 'project-open'}`}>
      <div className="fixed top-6 right-6 z-[160] mix-blend-difference text-white pointer-events-auto">
        <button onClick={handleClose} className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-300">
            <span className="font-mono text-xs uppercase tracking-widest hidden md:block">Close View</span>
            <div className="border border-current rounded-full p-2"><X size={20} /></div>
        </button>
      </div>
      <div key={project.id} className="project-switch">
        <header className="relative w-full h-[70vh] bg-stone-200 overflow-hidden">
          <GenerativeArt id={project.id} color={project.color} />
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 pointer-events-none">
              <h1 style={{ fontSize: 'clamp(2.5rem, 12vw, 16rem)' }} className="leading-[0.8] font-serif font-medium tracking-tighter text-stone-900 mix-blend-hard-light select-none">{project.title}</h1>
          </div>
        </header>
        <div className="bg-stone-100 relative z-10">
          <div className="max-w-[95vw] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pt-16 pb-32 px-4">
            <div className="md:col-span-3 space-y-12 border-t border-stone-900 pt-6">
              <div>
                  <span className="block font-mono text-xs text-stone-400 uppercase tracking-widest mb-2">Discipline</span>
                  <span className="font-serif text-xl">{project.category}</span>
              </div>
              <div>
                  <span className="block font-mono text-xs text-stone-400 uppercase tracking-widest mb-2">Year</span>
                  <span className="font-serif text-xl">{project.year}</span>
              </div>
              <div>
                  <span className="block font-mono text-xs text-stone-400 uppercase tracking-widest mb-2">Stack</span>
                  <div className="flex flex-wrap gap-2">
                      {project.details.map(tech => (
                          <span key={tech} className="border border-stone-300 px-2 py-1 text-xs font-mono rounded-full bg-white">{tech}</span>
                      ))}
                  </div>
              </div>
              {project.liveUrl && (
                <div>
                    <span className="block font-mono text-xs text-stone-400 uppercase tracking-widest mb-2">Live</span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full border border-stone-900 bg-stone-900 text-stone-50 px-4 py-3 text-xs font-mono uppercase tracking-widest hover:bg-stone-700 transition-colors duration-300"
                    >
                      {project.liveLabel || 'Open Live Project'}
                    </a>
                </div>
              )}
              {project.repoUrl && (
                <div>
                    <span className="block font-mono text-xs text-stone-400 uppercase tracking-widest mb-2">Repository</span>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full border border-stone-900 bg-white text-stone-900 px-4 py-3 text-xs font-mono uppercase tracking-widest hover:bg-stone-100 transition-colors duration-300"
                    >
                      {project.repoLabel || 'View Repository'}
                    </a>
                </div>
              )}
            </div>
            <div className="md:col-span-8 md:col-start-5 border-t border-stone-900 pt-6">
              {project.modules ? (<div>{project.modules.map((m, i) => renderModule(m, i))}</div>) : (
                <>
                    <p className="text-2xl md:text-5xl font-serif leading-tight mb-16 text-stone-900 indent-24">{project.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-widest mb-6 text-stone-500 flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span>The Challenge</h3>
                            <p className="text-lg leading-relaxed text-stone-700 font-light">{project.challenge || "Defining the problem space required a deep dive into user behavior and systemic inefficiencies."}</p>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-widest mb-6 text-stone-500 flex items-center gap-2"><span className="w-2 h-2 bg-stone-900 rounded-full"></span>The Solution</h3>
                            <p className="text-lg leading-relaxed text-stone-700 font-light">{project.solution || "By simplifying the core interaction loop, I was able to create a system that feels both novel and intuitive."}</p>
                        </div>
                    </div>
                </>
              )}
              <div className="mt-24 space-y-8">
                  <div className="w-full h-[400px] bg-stone-200 overflow-hidden relative group">
                      <GenerativeArt id={project.id + 10} color={project.color} />
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-mono uppercase tracking-widest">Fig 1.1 — Final Render</div>
                  </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-stone-900">
            <div 
              onClick={handlePrev} 
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handlePrev(e))}
              role="button"
              tabIndex="0"
              className="group border-b md:border-b-0 md:border-r border-stone-900 bg-stone-100 hover:bg-stone-900 hover:text-white transition-colors duration-500 cursor-pointer py-16 px-8 flex flex-col items-center justify-center text-center outline-none focus:bg-stone-900 focus:text-white"
            >
              <span className="font-mono text-xs uppercase tracking-widest mb-2 opacity-50">Previous Project</span>
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-2" />
                <span className="font-serif text-3xl italic">Prev</span>
              </div>
            </div>

            <div 
              onClick={handleHomeBtn} 
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handleHomeBtn(e))}
              role="button"
              tabIndex="0"
              className="group border-b md:border-b-0 md:border-r border-stone-900 bg-stone-100 hover:bg-stone-900 hover:text-white transition-colors duration-500 cursor-pointer py-16 px-8 flex flex-col items-center justify-center text-center outline-none focus:bg-stone-900 focus:text-white"
            >
              <span className="font-mono text-xs uppercase tracking-widest mb-2 opacity-50">Index</span>
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-serif text-3xl italic">Home</span>
              </div>
            </div>

            <div 
              onClick={handleNext} 
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handleNext(e))}
              role="button"
              tabIndex="0"
              className="group bg-stone-100 hover:bg-stone-900 hover:text-white transition-colors duration-500 cursor-pointer py-16 px-8 flex flex-col items-center justify-center text-center outline-none focus:bg-stone-900 focus:text-white"
            >
              <span className="font-mono text-xs uppercase tracking-widest mb-2 opacity-50">Next Project</span>
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl italic">Next</span>
                <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
