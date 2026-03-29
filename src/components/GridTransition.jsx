import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const GridTransition = ({ status, onAnimationComplete }) => {
  const containerRef = useRef(null);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const calculateGrid = () => {
      const width = window.innerWidth; 
      const height = window.innerHeight;
      let columns = width < 479 ? 4 : width < 767 ? 6 : 8;
      const blockSize = width / columns; 
      const rows = Math.ceil(height / blockSize);
      if (containerRef.current) { 
        containerRef.current.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; 
        containerRef.current.style.gridTemplateRows = `repeat(${rows}, ${blockSize}px)`; 
      }
      setBlocks(Array.from({ length: columns * rows }));
    };
    calculateGrid(); 
    window.addEventListener('resize', calculateGrid); 
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  useEffect(() => {
    if (blocks.length === 0 || !containerRef.current) return;
    const ctx = gsap.context(() => {
      const targets = containerRef.current.querySelectorAll('.transition-block');
      if (status === 'enter') {
        gsap.to(targets, { 
          opacity: 0, 
          duration: 0.1, 
          stagger: { amount: 0.75, from: "random" }, 
          onComplete: () => { 
            if (onAnimationComplete) onAnimationComplete(); 
          } 
        });
      } else if (status === 'exit') {
        gsap.fromTo(targets, 
          { opacity: 0 }, 
          { 
            opacity: 1, 
            duration: 0.001, 
            ease: "linear", 
            stagger: { amount: 0.5, from: "random" }, 
            onComplete: () => { if (onAnimationComplete) onAnimationComplete(); } 
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, [status, blocks, onAnimationComplete]);

  return (
    <div ref={containerRef} className="transition-grid">
      {blocks.map((_, i) => <div key={i} className="transition-block" />)}
    </div>
  );
};

export default GridTransition;
