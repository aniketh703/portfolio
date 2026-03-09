import React, { useState, useEffect, useRef } from 'react';
import { Grid3X3 } from 'lucide-react';
import gsap from 'gsap';

const SideNavigation = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Use standard ease instead of CustomEase to ensure compatibility
    const ease = "power3.inOut";
    
    const navWrap = containerRef.current.querySelector("[data-sidenav-wrap]");
    const overlay = navWrap.querySelector("[data-sidenav-overlay]");
    const bgPanels = containerRef.current.querySelectorAll("[data-sidenav-panel]");
    const menuLinks = containerRef.current.querySelectorAll("[data-sidenav-link]");
    const fadeTargets = containerRef.current.querySelectorAll("[data-sidenav-fade]");
    const menuButtonIcon = containerRef.current.querySelector("[data-sidenav-icon]");
    const menuButtonTexts = containerRef.current.querySelectorAll("[data-sidenav-label]");
    const menuInner = containerRef.current.querySelector('.sidenav__menu-inner');

    if (tlRef.current) tlRef.current.kill();

    if (isOpen) {
        gsap.set(navWrap, { display: "block" });
        tlRef.current = gsap.timeline();
        tlRef.current.to(menuButtonTexts, { yPercent: -100, duration: 0.4, ease: ease })
            .to(menuButtonIcon, { rotation: 315, duration: 0.4, ease: ease }, "<")
            .to(overlay, { autoAlpha: 1, duration: 0.4 }, "<")
            .fromTo(bgPanels, { xPercent: 100 }, { xPercent: 0, stagger: 0.12, duration: 0.75, ease: ease }, "<")
            .fromTo(menuInner, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.1 }, "-=0.5")
            .fromTo(menuLinks, { yPercent: 140, rotation: 10 }, { yPercent: 0, rotation: 0, stagger: 0.05, duration: 0.6, ease: ease }, "-=0.4")
            .fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, duration: 0.4 }, "-=0.4");
    } else {
        tlRef.current = gsap.timeline({ onComplete: () => { gsap.set(navWrap, { display: "none" }); } });
        tlRef.current.to(overlay, { autoAlpha: 0, duration: 0.4 })
            .to(menuButtonTexts, { yPercent: 0, duration: 0.4, ease: ease }, "<")
            .to(menuButtonIcon, { rotation: 0, duration: 0.4, ease: ease }, "<")
            .to(menuInner, { autoAlpha: 0, duration: 0.3 }, "<")
            .to(bgPanels, { xPercent: 100, stagger: { from: "end", amount: 0.1 }, duration: 0.6, ease: ease }, "<");
    }
  }, [isOpen]);

  const handleLinkClick = (view) => {
    if (view) onNavigate(view);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef}>
      <header className="sidenav__header">
        <button 
          className="sidenav__button touch-target" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="sidenav__button-text">
            <p className="sidenav__button-label" data-sidenav-label>Menu</p>
            <p className="sidenav__button-label" data-sidenav-label>Close</p>
          </div>
          <div className="sidenav__button-icon" data-sidenav-icon>
            <Grid3X3 size={24} className="text-current" strokeWidth={1.5} />
          </div>
        </button>
      </header>
      <div className="sidenav__nav" data-sidenav-wrap style={{ display: 'none' }}>
        <div className="sidenav__overlay" data-sidenav-overlay onClick={() => setIsOpen(false)}></div>
        <nav className="sidenav__menu" data-sidenav-menu>
          <div className="sidenav__menu-bg">
            <div className="sidenav__menu-bg-panel is--first" data-sidenav-panel></div>
            <div className="sidenav__menu-bg-panel is--second" data-sidenav-panel></div>
            <div className="sidenav__menu-bg-panel is--third" data-sidenav-panel></div>
          </div>
          <div className="sidenav__menu-inner">
            <ul className="sidenav__menu-list">
              {[{ id: 'index', label: 'Index', num: '01' }, { id: 'pricing', label: 'Services', num: '02' }, { id: 'archive', label: 'Archive', num: '03' }, { id: 'brand', label: 'System', num: '04' }].map((item) => (
                <li key={item.id} className="sidenav__menu-list-item">
                  <a href="#" className="sidenav__menu-link touch-target" data-sidenav-link onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}>
                    <p className="sidenav__menu-link-heading">{item.label}</p>
                    <p className="sidenav__menu-link-eyebrow">{item.num}</p>
                  </a>
                </li>
              ))}
            </ul>
            <div className="sidenav__menu-details" data-sidenav-fade>
              <p className="sidenav__button-label" style={{ opacity: 0.5, color: '#1C1917' }}>Socials</p>
              <div className="sidenav__menu-socials">
                <a href="mailto:anikethvustepalle03@gmail.com" className="sidenav__social-link" data-sidenav-fade>Email</a>
                <a href="https://github.com/aniketh703" target="_blank" rel="noopener noreferrer" className="sidenav__social-link" data-sidenav-fade>GitHub</a>
                <a href="https://www.linkedin.com/in/aniketh-vustepalle/" target="_blank" rel="noopener noreferrer" className="sidenav__social-link" data-sidenav-fade>LinkedIn</a>
                <span className="sidenav__social-link opacity-50 cursor-not-allowed" data-sidenav-fade>Contra</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNavigation;
