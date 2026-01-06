import React, { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const initCursor = () => {
      // Use gsap from import, not window
      gsap.set(".cursor", {xPercent:-50, yPercent: -50});
      let xTo = gsap.quickTo(".cursor", "x", {duration: 0.6, ease: "power3"});
      let yTo = gsap.quickTo(".cursor", "y", {duration: 0.6, ease: "power3"});
      const move = (e) => { xTo(e.clientX); yTo(e.clientY); };
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    };
    const cleanup = initCursor();
    return () => { if(typeof cleanup === 'function') cleanup(); };
  }, []);
  return <div className="cursor"></div>;
};

export default CustomCursor;
