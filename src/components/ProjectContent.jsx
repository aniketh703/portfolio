import React, { useEffect, useState } from 'react';
import { Quote, Maximize2, X } from 'lucide-react';
import GenerativeArt from './GenerativeArt';

export const CoverImage = ({ project, fallbackSeed, className }) => {
  const [imgFailed, setImgFailed] = useState(false);
  if (project.coverImage && !imgFailed) {
    return (
      <img
        src={project.coverImage}
        alt={project.title}
        onError={() => setImgFailed(true)}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${className || ''}`}
      />
    );
  }
  return <GenerativeArt id={fallbackSeed ?? project.id} color={project.color} />;
};

export const Label = ({ children }) => (
  <span className="block font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-stone-400 dark:text-[#555] mb-2">
    {children}
  </span>
);

const ImageLightboxModule = ({ module, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div key={index} className="mb-16 md:mb-24">
      <div
        className="group relative w-full aspect-video bg-stone-200 dark:bg-[#1c1c1c] overflow-hidden border border-stone-200 dark:border-[#2e2e2e] cursor-zoom-in rounded-xl transition-all duration-300 hover:shadow-2xl"
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(true)}
        tabIndex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label={`Zoom in on visual: ${module.caption || 'Project visual'}`}
      >
        <img
          src={module.url}
          alt={module.caption || 'Project visual'}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {module.caption && (
          <div className="absolute bottom-4 left-4 z-10 bg-white/90 dark:bg-[#111]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-stone-700 dark:text-[#ccc] rounded">
            {module.caption}
          </div>
        )}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 text-white backdrop-blur-md px-2.5 py-1.5 rounded-full text-xs flex items-center gap-1.5 font-sans font-medium pointer-events-none shadow-lg">
          <Maximize2 size={12} />
          <span>Click to expand</span>
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={module.caption || 'Full screen image preview'}
          className="fixed inset-0 z-[500] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close image preview"
            className="fixed top-6 right-6 z-[510] flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-md border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime"
          >
            <X size={20} />
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={module.url}
              alt={module.caption || 'Project visual enlarged'}
              className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            {module.caption && (
              <p className="mt-4 text-xs md:text-sm font-sans font-medium tracking-wide text-white/80 text-center max-w-2xl px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm">
                {module.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const ProjectModule = ({ module, index }) => {
  switch (module.type) {
    case 'intro':
      return (
        <p key={index} className="text-xl md:text-5xl font-sans leading-tight mb-10 md:mb-16 text-stone-900 dark:text-[#eee] md:indent-24">
          {module.content}
        </p>
      );
    case 'text':
      return (
        <div key={index} className="mb-10 md:mb-16 max-w-3xl">
          {module.title && (
            <h3 className="font-sans font-semibold text-2xl md:text-3xl mb-4 md:mb-6 text-stone-900 dark:text-[#eee]">
              {module.title}
            </h3>
          )}
          <p className="text-base md:text-lg leading-relaxed text-stone-700 dark:text-[#bbb] font-light">
            {module.content}
          </p>
        </div>
      );
    case 'quote':
      return (
        <div key={index} className="py-10 md:py-16 border-y border-stone-200 dark:border-[#2e2e2e] my-10 md:my-16">
          <Quote className="text-brand mb-4 md:mb-6" size={36} />
          <p className="text-2xl md:text-5xl font-sans font-light italic leading-tight text-stone-900 dark:text-[#eee]">
            &ldquo;{module.content}&rdquo;
          </p>
        </div>
      );
    case 'grid':
      return (
        <div key={index} className="mb-16 md:mb-24">
          {module.title && (
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] mb-8 text-stone-400 dark:text-[#555]">
              {module.title}
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 dark:bg-[#2e2e2e]">
            {module.items.map((item, i) => (
              <div key={i} className="bg-white dark:bg-[#1a1a1a] p-6">
                <span className="font-sans text-[11px] font-medium text-brand uppercase tracking-[0.14em] block mb-3">{item.label}</span>
                <p className="font-sans text-base md:text-lg leading-relaxed text-stone-800 dark:text-[#ccc]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'code':
      return (
        <div key={index} className="mb-10 md:mb-16 bg-[#0d0d0d] text-stone-100 p-4 md:p-8 font-mono text-xs md:text-sm overflow-x-auto rounded-sm shadow-xl no-scrollbar">
          <div className="flex justify-between items-center mb-4 border-b border-stone-700 pb-2">
            <span className="text-xs uppercase tracking-widest text-stone-400">{module.title || 'Code Snippet'}</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <pre className="leading-relaxed"><code>{module.code}</code></pre>
        </div>
      );
    case 'metrics':
      return (
        <div key={index} className="mb-16 md:mb-24 border border-stone-200 dark:border-[#2e2e2e] overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-stone-200 dark:divide-[#2e2e2e]">
            {module.items.map((item, i) => (
              <div key={i} className="px-6 py-8 text-center bg-white dark:bg-[#1a1a1a]">
                <div className="font-sans font-bold leading-none text-stone-900 dark:text-[#eee] mb-1"
                     style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                  {item.value}
                  {item.unit && (
                    <span className="font-mono text-sm text-stone-400 dark:text-[#555] ml-1">{item.unit}</span>
                  )}
                </div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-stone-400 dark:text-[#555] mt-3">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'image':
      return <ImageLightboxModule key={index} module={module} index={index} />;
    default: return null;
  }
};
