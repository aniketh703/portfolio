import React, { useState } from 'react';

function CompanyLogo({ domain, name = 'Company', className = '' }) {
  const [hasError, setHasError] = useState(false);
  const logoKey = import.meta.env.VITE_LOGO_DEV_KEY;

  if (!domain || hasError || !logoKey) {
    return (
      <div className={`inline-flex items-center justify-center bg-stone-100 border border-stone-200 text-stone-500 text-xs font-mono ${className}`}>
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
