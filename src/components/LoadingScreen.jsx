import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const [blocks, setBlocks] = useState([]);

  // Same grid calculation as GridTransition
  useEffect(() => {
    const width  = window.innerWidth;
    const height = window.innerHeight;
    const columns = width < 479 ? 4 : width < 767 ? 6 : 8;
    const blockSize = width / columns;
    const rows = Math.ceil(height / blockSize);
    if (containerRef.current) {
      containerRef.current.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
      containerRef.current.style.gridTemplateRows    = `repeat(${rows}, ${blockSize}px)`;
    }
    setBlocks(Array.from({ length: columns * rows }));
  }, []);

  // Once blocks are in the DOM, dissolve them out exactly like the 'enter' transition
  useEffect(() => {
    if (blocks.length === 0 || !containerRef.current) return;
    const targets = containerRef.current.querySelectorAll('.loader-block');
    const ctx = gsap.context(() => {
      gsap.to(targets, {
        delay: 0.25,           // brief hold so the page has a moment to paint
        opacity: 0,
        duration: 0.1,
        stagger: { amount: 0.75, from: 'random' },
        onComplete: () => {
          containerRef.current.style.pointerEvents = 'none';
          if (onComplete) onComplete();
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, [blocks, onComplete]);

  return (
    <div
      ref={containerRef}
      style={{ display: 'grid', position: 'fixed', inset: 0, zIndex: 250, cursor: 'wait' }}
    >
      {blocks.map((_, i) => (
        <div
          key={i}
          className="loader-block"
          style={{ width: '100%', height: '100%', backgroundColor: '#D6F343', opacity: 1 }}
        />
      ))}
    </div>
  );
};

export default LoadingScreen;
