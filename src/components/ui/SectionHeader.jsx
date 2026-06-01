import React from 'react';

const SectionHeader = ({ 
  eyebrow, 
  title, 
  subtitle, 
  icon: Icon, 
  align = 'left',
  className = '' 
}) => {
  return (
    <div className={`flex ${align === 'center' ? 'justify-center text-center' : 'justify-between items-end'} mb-12 border-b border-stone-300 pb-6 ${className}`}>
      <div className={align === 'center' ? 'mx-auto' : ''}>
        {eyebrow && (
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#999] block mb-2">
            {eyebrow}
          </span>
        )}
        <div className="flex items-center gap-3">
          {Icon && <Icon size={20} className="text-brand" />}
          <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="font-sans text-sm text-[#666] mt-3 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
