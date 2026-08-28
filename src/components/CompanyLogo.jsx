import React, { useState } from 'react';

function CompanyLogo({ domain, name = 'Company', className = '' }) {
  const [hasError, setHasError] = useState(false);
  const logoKey = import.meta.env.VITE_LOGO_DEV_KEY;

  if (!domain || hasError || !logoKey) {
    return (
      <div className={`inline-flex items-center justify-center bg-stone-100 dark:bg-[#1a1a1a] border border-stone-200 dark:border-[#2a2a2a] text-stone-500 dark:text-[#aaa] text-xs font-mono ${className}`}>
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={`https://img.logo.dev/${domain}?token=${logoKey}`}
      alt={`${name} logo`}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
}

export default CompanyLogo;
