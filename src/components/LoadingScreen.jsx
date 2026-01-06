import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => { 
      setProgress(prev => { 
        const next = prev + 1; 
        if (next >= 100) { 
          clearInterval(timer); 
          return 100; 
        } 
        return next; 
      }); 
    }, 20);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => { 
    if (progress === 100) { 
      setTimeout(() => { 
        setIsExiting(true); 
        setTimeout(onComplete, 800); 
      }, 600); 
    } 
  }, [progress, onComplete]);

  return (
    <div className={`fixed inset-0 z-[250] bg-stone-900 text-stone-50 flex flex-col justify-between p-6 md:p-12 cursor-wait ${isExiting ? 'loader-exit' : ''}`}>
      <div className="flex justify-between items-start font-mono text-xs uppercase tracking-widest">
        <span>Aniketh Vustepalle</span>
        <span>Portfolio 2024</span>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="font-serif text-[20vw] md:text-[25vw] leading-none font-medium tracking-tighter tabular-nums">
          {progress}%
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-end font-mono text-xs uppercase tracking-widest w-full gap-4">
        <div className="flex flex-col gap-1 text-stone-400">
          <span className={progress > 20 ? 'text-white' : ''}>[ SYS ] Checking Dependencies... {progress < 20 ? '...' : 'OK'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="animate-blink text-orange-500">_INITIALIZING_CORE</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
