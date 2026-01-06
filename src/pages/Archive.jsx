import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import GenerativeArt from '../components/GenerativeArt';
import Footer from '../components/Footer';

const Archive = ({ projects, onSelect, onNavigate }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // Removed duplication for clarity. Now strictly showing the dataset.
  const archiveList = projects.map((p, i) => ({ ...p, uniqueId: i }));

  useEffect(() => {
    const handleMove = (e) => { setCursorPos({ x: e.clientX, y: e.clientY }); };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <section className="min-h-screen bg-stone-50 pt-32 pb-20 px-4 md:px-12 relative container">
        <div className="flex justify-between items-end mb-12 border-b-4 border-stone-900 pb-4">
            <h1 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">ARCHIVE</h1>
            <div className="text-right hidden md:block">
                <p className="font-mono text-xs uppercase tracking-widest text-stone-500">Full Index</p>
                <p className="font-mono text-xs uppercase tracking-widest">2020 — 2024</p>
            </div>
        </div>
        <div className="fixed w-64 h-64 pointer-events-none z-50 transition-opacity duration-200 hidden md:block overflow-hidden border border-stone-900 bg-white" style={{ left: cursorPos.x + 20, top: cursorPos.y - 100, opacity: hoveredId !== null ? 1 : 0 }}>
            {hoveredId !== null && (<GenerativeArt id={projects[hoveredId % projects.length].id} color={projects[hoveredId % projects.length].color} />)}
        </div>
        <div className="w-full">
          <div className="grid grid-cols-12 gap-4 font-mono text-xs uppercase tracking-widest text-stone-400 mb-4 px-4">
              <div className="col-span-1">ID</div>
              <div className="col-span-6 md:col-span-5">Project Name</div>
              <div className="hidden md:block col-span-3">Discipline</div>
              <div className="col-span-3 md:col-span-2 text-right">Year</div>
              <div className="col-span-2 md:col-span-1 text-right">Link</div>
          </div>
          {archiveList.map((project, index) => (
            <div 
              key={project.uniqueId} 
              role="button"
              tabIndex="0"
              onClick={() => onSelect(project)} 
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(project)}
              onMouseEnter={() => setHoveredId(index)} 
              onMouseLeave={() => setHoveredId(null)} 
              className="group grid grid-cols-12 gap-4 items-center py-6 border-t border-stone-300 hover:bg-stone-900 hover:text-stone-50 transition-colors duration-200 cursor-pointer px-4 outline-none focus:bg-stone-900 focus:text-stone-50"
            >
              <div className="col-span-1 font-mono text-xs opacity-50 group-hover:opacity-100">{String(index + 1).padStart(2, '0')}</div>
              <div className="col-span-6 md:col-span-5 font-serif text-xl md:text-3xl font-medium leading-none truncate">{project.title}</div>
              <div className="hidden md:block col-span-3 font-mono text-xs uppercase tracking-widest opacity-70">{project.category}</div>
              <div className="col-span-3 md:col-span-2 text-right font-mono text-xs opacity-70">{project.year}</div>
              <div className="col-span-2 md:col-span-1 flex justify-end"><ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" /></div>
            </div>
          ))}
          <div className="border-t border-stone-900"></div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Archive;
