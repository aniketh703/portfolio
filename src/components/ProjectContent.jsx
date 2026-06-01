import React, { useState } from 'react';
import { Quote } from 'lucide-react';
import GenerativeArt from './GenerativeArt';
import LazyImage from './ui/LazyImage';

export const CoverImage = ({ project, fallbackSeed, className }) => {
  const [imgFailed, setImgFailed] = useState(false);
  if (project.coverImage && !imgFailed) {
    return (
      <img
        src={project.coverImage}
        alt={project.title}
        onError={() => setImgFailed(true)}
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

export const renderModule = (module, index) => {
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
    case 'image':
      return (
        <div key={index} className="mb-16 md:mb-24">
          <div className="w-full aspect-video bg-stone-200 dark:bg-[#1c1c1c] overflow-hidden relative border border-stone-200 dark:border-[#2e2e2e]">
            <LazyImage src={module.url} alt={module.caption || 'Project visual'} className="w-full h-full" />
            {module.caption && (
              <div className="absolute bottom-4 left-4 z-10 bg-white/90 dark:bg-[#111]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-stone-700 dark:text-[#ccc]">
                {module.caption}
              </div>
            )}
          </div>
        </div>
      );
    default: return null;
  }
};
