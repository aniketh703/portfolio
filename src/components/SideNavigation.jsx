import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Grid3X3 } from 'lucide-react';
import gsap from 'gsap';

const SideNavigation = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ease = "power3.inOut";
    const navWrap     = containerRef.current.querySelector("[data-sidenav-wrap]");
    const overlay     = navWrap.querySelector("[data-sidenav-overlay]");
    const bgPanels    = containerRef.current.querySelectorAll("[data-sidenav-panel]");
    const menuLinks   = containerRef.current.querySelectorAll("[data-sidenav-link]");
    const fadeTargets = containerRef.current.querySelectorAll("[data-sidenav-fade]");
    const menuButtonIcon  = containerRef.current.querySelector("[data-sidenav-icon]");
    const menuButtonTexts = containerRef.current.querySelectorAll("[data-sidenav-label]");
    const menuInner   = containerRef.current.querySelector('.sidenav__menu-inner');

    if (tlRef.current) tlRef.current.kill();

    if (isOpen) {
      gsap.set(navWrap, { display: "block" });
      tlRef.current = gsap.timeline({
        onComplete: () => {
          // Move focus to first nav item after animation completes
          if (firstLinkRef.current) firstLinkRef.current.focus();
        },
      });
      tlRef.current
        .to(menuButtonTexts, { yPercent: -100, duration: 0.4, ease })
        .to(menuButtonIcon,  { rotation: 315, duration: 0.4, ease }, "<")
        .to(overlay,         { autoAlpha: 1,  duration: 0.4 }, "<")
        .fromTo(bgPanels,    { xPercent: 100 }, { xPercent: 0, stagger: 0.12, duration: 0.75, ease }, "<")
        .fromTo(menuInner,   { autoAlpha: 0  }, { autoAlpha: 1, duration: 0.1 }, "-=0.5")
        .fromTo(menuLinks,   { yPercent: 140, rotation: 10 }, { yPercent: 0, rotation: 0, stagger: 0.05, duration: 0.6, ease }, "-=0.4")
        .fromTo(fadeTargets, { autoAlpha: 0,  yPercent: 50  }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, duration: 0.4 }, "-=0.4");
    } else {
      tlRef.current = gsap.timeline({
        onComplete: () => { gsap.set(navWrap, { display: "none" }); },
      });
      tlRef.current
        .to(overlay,         { autoAlpha: 0, duration: 0.4 })
        .to(menuButtonTexts, { yPercent: 0,  duration: 0.4, ease }, "<")
        .to(menuButtonIcon,  { rotation: 0,  duration: 0.4, ease }, "<")
        .to(menuInner,       { autoAlpha: 0, duration: 0.3 }, "<")
        .to(bgPanels,        { xPercent: 100, stagger: { from: "end", amount: 0.1 }, duration: 0.6, ease }, "<");
    }
  }, [isOpen]);

  const handleLinkClick = useCallback((view) => {
    if (view) onNavigate(view);
    setIsOpen(false);
  }, [onNavigate]);

  const navItems = [
    { id: 'index',    label: 'Home',    num: '01' },
    { id: 'projects', label: 'Work',    num: '02' },
    { id: 'blog',     label: 'Blog',    num: '03' },
    { id: 'about',    label: 'About',   num: '04' },
    { id: 'contact',  label: 'Contact', num: '05' },
  ];

  return (
    <div ref={containerRef} className="md:hidden">
      <header className="sidenav__header">
        <button
          className="sidenav__button touch-target"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="side-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="sidenav__button-text">
            <p className="sidenav__button-label" data-sidenav-label>Menu</p>
            <p className="sidenav__button-label" data-sidenav-label>Close</p>
          </div>
          <div className="sidenav__button-icon" data-sidenav-icon>
            <Grid3X3 size={24} className="text-current" strokeWidth={1.5} aria-hidden="true" />
          </div>
        </button>
      </header>

      <div className="sidenav__nav" data-sidenav-wrap style={{ display: 'none' }}>
        {/* Overlay — clicking closes menu */}
        <div
          className="sidenav__overlay"
          data-sidenav-overlay
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Menu — announced as a dialog by screen readers */}
        <nav
          id="side-menu"
          className="sidenav__menu"
          data-sidenav-menu
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="sidenav__menu-bg">
            <div className="sidenav__menu-bg-panel is--first"  data-sidenav-panel />
            <div className="sidenav__menu-bg-panel is--second" data-sidenav-panel />
            <div className="sidenav__menu-bg-panel is--third"  data-sidenav-panel />
          </div>

          <div className="sidenav__menu-inner">
            <ul className="sidenav__menu-list">
              {navItems.map((item, idx) => (
                <li key={item.id} className="sidenav__menu-list-item">
                  <button
                    ref={idx === 0 ? firstLinkRef : null}
                    className="sidenav__menu-link touch-target"
                    data-sidenav-link
                    onClick={() => handleLinkClick(item.id)}
                  >
                    <p className="sidenav__menu-link-heading">{item.label}</p>
                    <p className="sidenav__menu-link-eyebrow">{item.num}</p>
                  </button>
                </li>
              ))}
            </ul>

            <div className="sidenav__menu-details" data-sidenav-fade>
              <p className="sidenav__button-label sidenav__socials-label">Socials</p>
              <div className="sidenav__menu-socials">
                <a href="mailto:anikethvustepalle03@gmail.com" className="sidenav__social-link" data-sidenav-fade>Email</a>
                <a href="https://wa.me/919311761114"         target="_blank" rel="noopener noreferrer" className="sidenav__social-link" data-sidenav-fade>WhatsApp</a>
                <a href="https://github.com/aniketh703"      target="_blank" rel="noopener noreferrer" className="sidenav__social-link" data-sidenav-fade>GitHub</a>
                <a href="https://www.linkedin.com/in/aniketh-vustepalle/" target="_blank" rel="noopener noreferrer" className="sidenav__social-link" data-sidenav-fade>LinkedIn</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideNavigation;
