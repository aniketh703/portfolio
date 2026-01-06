import React, { useState, useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Maximize2, ArrowUp, Mail } from 'lucide-react';
import { projects } from './data/projects';
import LoadingScreen from './components/LoadingScreen';
import SideNavigation from './components/SideNavigation';
import GridTransition from './components/GridTransition';
import CustomCursor from './components/CustomCursor';
import ProjectView from './components/ProjectView';
import Home from './pages/Home';
import Archive from './pages/Archive';
import BrandShowcase from './pages/BrandShowcase';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [currentView, setCurrentView] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
    return ['archive', 'brand'].includes(hash) ? hash : 'index';
  }); 
  const [gridStatus, setGridStatus] = useState('enter'); // 'enter' (reveal) or 'exit' (cover)
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
  
    gsap.ticker.add(update);
  
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  const handleNavigate = (view) => {
    if (view === currentView) return;
    setGridStatus('exit');
  };

  const onGridAnimationComplete = () => {
    if (gridStatus === 'exit') {
      const nextView = document.body.dataset.nextView; 
      if (nextView) {
        setCurrentView(nextView);
        window.scrollTo(0, 0);

        // Sync URL
        const targetHash = nextView === 'index' ? '' : `#${nextView}`;
        if (targetHash) {
             window.history.pushState(null, '', targetHash);
        } else {
             window.history.pushState(null, '', window.location.pathname);
        }

        setGridStatus('enter');
        document.body.dataset.nextView = '';
      }
    }
  };

  // Helper to store next view for animation callback
  const triggerNavigation = (view) => {
    if (view === currentView) return;
    document.body.dataset.nextView = view;
    setGridStatus('exit');
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'index';
      if (hash !== currentView && document.body.dataset.nextView !== hash) {
         triggerNavigation(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  const handleNextProject = (e) => {
    e.stopPropagation();
    setSelectedProjectIndex((prev) => (prev + 1) % projects.length);
    const modal = document.querySelector('.overflow-y-auto');
    if(modal) modal.scrollTop = 0;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const modal = document.querySelector('.overflow-y-auto');
    if (modal) modal.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('info');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex % projects.length] : null;

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
    <div className="bg-stone-50 min-h-screen text-stone-900 selection:bg-brand-orange selection:text-white cursor-crosshair font-sans no-scrollbar">
      {/* Noise Texture */}
      <div className="noise-overlay"></div>
      
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* GSAP Grid Transition */}
      <GridTransition status={gridStatus} onAnimationComplete={onGridAnimationComplete} />
      <CustomCursor />

      {/* Side Navigation Menu (Replaces standard top links) */}
      <SideNavigation onNavigate={triggerNavigation} />

      <nav className={`fixed top-0 left-0 w-full flex justify-between items-start p-6 md:p-8 z-[60] pointer-events-none mix-blend-difference text-stone-50`}>
        <div 
          onClick={() => triggerNavigation('index')} 
          role="button"
          tabIndex="0"
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && triggerNavigation('index')}
          className="flex flex-col items-start pointer-events-auto cursor-pointer group outline-none"
        >
          <span className="font-mono text-xs tracking-widest uppercase mb-1 group-hover:text-brand-orange transition-colors duration-300">Portfolio</span>
          <span className="font-serif text-xl font-bold leading-none">AV.24</span>
        </div>
        <div className="flex flex-col items-end text-right pointer-events-auto pr-28 md:pr-32">
          <span className="font-mono text-xs mb-1">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span className="font-mono text-xs opacity-70">HYD, IN</span>
        </div>
      </nav>

      {currentView === 'index' ? (
        <Home 
            projects={projects} 
            onProjectSelect={setSelectedProjectIndex} 
            onNavigate={triggerNavigation} 
        />
      ) : currentView === 'archive' ? (
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-500">
            <Archive 
              projects={projects} 
              onSelect={(p) => setSelectedProjectIndex(projects.findIndex(proj => proj.id === p.id))}
              onNavigate={triggerNavigation}
            />
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-500">
            <BrandShowcase />
        </div>
      )}

      {selectedProject && (
        <ProjectView 
            project={selectedProject} 
            onClose={() => setSelectedProjectIndex(null)} 
            onNext={handleNextProject} 
        />
      )}
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-8 hidden md:flex flex-col gap-4 z-50 mix-blend-difference pointer-events-none">
          <button 
              onClick={scrollToContact} 
              className="p-3 bg-white text-black hover:bg-stone-200 transition-transform duration-300 hover:scale-110 rounded-sm pointer-events-auto"
              aria-label="Contact Me"
          >
              <Mail size={24} strokeWidth={1.5} />
          </button>
          <button 
              onClick={scrollToTop} 
              className="p-3 bg-white text-black hover:bg-stone-200 transition-transform duration-300 hover:scale-110 rounded-sm pointer-events-auto"
              aria-label="Back to Top"
          >
              <ArrowUp size={24} strokeWidth={1.5} />
          </button>
      </div>

      <div className="fixed bottom-8 right-8 hidden md:block mix-blend-difference z-50 pointer-events-none">
        <div className="animate-spin-slow">
            <Maximize2 className="text-white" size={32} strokeWidth={1} />
        </div>
      </div>
    </div>
    </ReactLenis>
  );
}
