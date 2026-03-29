import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import GenerativeArt from '../components/GenerativeArt';
import Footer from '../components/Footer';

const Archive = ({ projects, onSelect, onNavigate }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const archiveList = [...projects]
    .sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title))
    .map((p, i) => ({ ...p, uniqueId: `${p.id}-${i}` }));

  useEffect(() => {
    document.title = "Archive | Aniketh Vustepalle";
    const handleMove = (e) => { 
      setCursorPos({ x: e.clientX, y: e.clientY }); 
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Constrain preview box position to stay within viewport
  const getPreviewPosition = () => {
    const previewWidth = 256; // w-64 = 16rem = 256px
    const previewHeight = 256; // h-64 = 16rem = 256px
    const offsetX = 20;
    const offsetY = 20;
    const padding = 15;
    let left = cursorPos.x + offsetX;
    let top = cursorPos.y + offsetY;

    // Constrain left position
    if (left + previewWidth + padding > window.innerWidth) {
      left = cursorPos.x - previewWidth - offsetX;
    }

    // Constrain top position
    if (top + previewHeight + padding > window.innerHeight) {
      top = cursorPos.y - previewHeight - offsetY;
    }

    // Ensure minimum positions
    if (left < padding) left = padding;
    if (top < padding) top = padding;

    return { left, top };
  };

  const previewPos = getPreviewPosition();

  return (
    <>
      <section className="min-h-screen bg-stone-50 page-container relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8 overflow-hidden">
        <div className="flex justify-between items-end mb-8 md:mb-12 border-b border-stone-300 pb-6 gap-4">
            <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-500 opacity-60 block mb-2">Collection</span>
            <h1 className="text-4xl md:text-7xl font-serif leading-none tracking-tighter">Archive</h1>
            </div>
            <div className="text-right hidden md:block">
                <p className="font-sans text-xs uppercase tracking-widest text-stone-500 opacity-60">Full Index</p>
                <p className="font-sans text-xs uppercase tracking-widest text-stone-600 opacity-70">2023 — 2026</p>
            </div>
        </div>
        <div 
          className="fixed w-64 h-64 pointer-events-none z-50 transition-opacity duration-300 hidden md:block overflow-hidden border border-stone-300 bg-white subtle-shadow rounded-lg" 
          style={{ 
            left: `${previewPos.left}px`, 
            top: `${previewPos.top}px`, 
            opacity: hoveredId !== null ? 1 : 0 
          }}
        >
            {hoveredId !== null && archiveList[hoveredId] && (
              archiveList[hoveredId].coverImage ? (
                <img
                  src={archiveList[hoveredId].coverImage}
                  alt={`${archiveList[hoveredId].title} preview`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <GenerativeArt id={archiveList[hoveredId].id} color={archiveList[hoveredId].color} />
              )
            )}
        </div>
        <div className="w-full">
            <div className="grid grid-cols-10 md:grid-cols-12 gap-3 md:gap-4 font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4 px-3 md:px-4 opacity-60">
              <div className="hidden md:block md:col-span-1">ID</div>
              <div className="col-span-6 md:col-span-5">Project Name</div>
              <div className="hidden md:block col-span-3">Discipline</div>
              <div className="col-span-3 md:col-span-2 text-right">Year</div>
              <div className="col-span-1 md:col-span-1 text-right">Link</div>
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
              className={`group grid grid-cols-10 md:grid-cols-12 gap-3 md:gap-4 items-center py-5 md:py-6 border-t border-stone-300 hover:bg-stone-900 hover:text-stone-50 transition-all duration-300 cursor-pointer px-3 md:px-4 outline-none focus:bg-stone-900 focus:text-stone-50 ${index % 2 === 0 ? 'bg-transparent' : 'bg-stone-50/60'}`}
            >
              <div className="hidden md:block md:col-span-1 font-mono text-xs opacity-60 group-hover:opacity-100">{String(index + 1).padStart(2, '0')}</div>
              <div className="col-span-6 md:col-span-5 font-serif text-lg md:text-3xl font-medium leading-tight truncate">{project.title}</div>
              <div className="hidden md:block col-span-3 font-mono text-xs uppercase tracking-widest opacity-70">{project.category}</div>
              <div className="col-span-3 md:col-span-2 text-right font-mono text-xs opacity-70">{project.year}</div>
              <div className="col-span-1 md:col-span-1 flex justify-end"><ArrowUpRight size={16} className="opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity" /></div>
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
