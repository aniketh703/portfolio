import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
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

export default function App() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [currentView, setCurrentView] = useState('index'); 
  const [gridStatus, setGridStatus] = useState('enter'); // 'enter' (reveal) or 'exit' (cover)
  const [isLoading, setIsLoading] = useState(true);

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

  const handleNextProject = (e) => {
    e.stopPropagation();
    setSelectedProjectIndex((prev) => (prev + 1) % projects.length);
    const modal = document.querySelector('.overflow-y-auto');
    if(modal) modal.scrollTop = 0;
  };

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex % projects.length] : null;

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 selection:bg-brand-orange selection:text-white cursor-crosshair font-sans no-scrollbar">
      {/* Noise Texture */}
      <div className="noise-overlay"></div>
      
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* GSAP Grid Transition */}
      <GridTransition status={gridStatus} onAnimationComplete={onGridAnimationComplete} />
      <CustomCursor />

      {/* Side Navigation Menu (Replaces standard top links) */}
      <div className="fixed top-0 right-0 p-6 z-50">
         <SideNavigation onNavigate={triggerNavigation} />
      </div>

      <nav className={`fixed top-0 left-0 w-full flex justify-between items-start p-6 md:p-8 z-40 pointer-events-none mix-blend-difference text-stone-50`}>
        <div onClick={() => triggerNavigation('index')} className="flex flex-col items-start pointer-events-auto cursor-pointer group">
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
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-500 container">
            <Archive projects={projects} onSelect={(p) => setSelectedProjectIndex(projects.findIndex(proj => proj.id === p.id))} />
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
      
      <div className="fixed bottom-8 right-8 hidden md:block mix-blend-difference z-50 pointer-events-none">
        <div className="animate-spin-slow">
            <Maximize2 className="text-white" size={32} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
