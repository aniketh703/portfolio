import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import * as Sentry from '@sentry/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, Moon, Sun, Linkedin } from 'lucide-react';
import { projects } from './data/projects';
import SideNavigation from './components/SideNavigation';
import PageSkeleton from './components/PageSkeleton';
import { FollowerPointerCard } from './components/ui/following-pointer';
import DrawUnderline from './components/ui/DrawUnderline';
import Home from './pages/Home';
import Projects from './pages/Archive';
import About from './pages/Resume';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const BLOG_URL = 'https://aniketh703.github.io/blog/';



const VIEW_TO_PATH = {
  index:    '/',
  projects: '/work',
  about:    '/about',
  contact:  '/contact',
};

/* ─────────────────────────────────────────────────────────────
   AppLayout — lives inside BrowserRouter so useNavigate works
───────────────────────────────────────────────────────────── */
function AppLayout() {
  const rrNavigate = useNavigate();
  const location   = useLocation();
  const lenisRef        = useRef();

  const [gridStatus,    setGridStatus]    = useState('enter');
  const [pendingPath,   setPendingPath]   = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [heroScrolledPast, setHeroScrolledPast] = useState(false);
  // Starts false to match the prerendered/static HTML (which never has a system
  // dark-mode preference baked in), then corrects immediately post-mount. Reading
  // document.documentElement here in the initializer would make this component's
  // very first render depend on the visitor's actual OS theme — which differs from
  // the prerender snapshot for anyone whose system prefers dark, and React discards
  // the whole mismatched tree and re-renders client-side when that happens.
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  /* ── Lenis RAF ──────────────────────────────────────────── */
  useEffect(() => {
    function update(time) { lenisRef.current?.lenis?.raf(time * 1000); }
    gsap.ticker.add(update);
    // Recommended when driving GSAP's ticker from an external RAF loop (Lenis):
    // without this, GSAP tries to "catch up" after a dropped frame/tab-switch,
    // which fights Lenis's own smoothing and causes a visible jump.
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  /* ── Scroll-to-top button + hero-overlay nav ──────────────── */
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setHeroScrolledPast(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Reset scroll on route change ─────────────────────────── */
  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroScrolledPast(false); // Home's hero-overlay nav starts fresh on every visit
  }, [location.pathname]);

  const navIsOverlay = location.pathname === '/' && !heroScrolledPast;

  /* ── Dark mode ──────────────────────────────────────────── */
  const toggleDark = useCallback(() => {
    const html   = document.documentElement;
    const nowDark = html.classList.contains('dark');
    if (nowDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  }, []);

  /* ── Navigation ─────────────────────────────────────────── */
  // handleNavigate accepts the old view keys ('index', 'projects', …)
  // OR raw paths ('/work/6'). Blog always opens in a new tab.
  const handleNavigate = useCallback((viewOrPath) => {
    if (viewOrPath === 'blog') {
      window.open(BLOG_URL, '_blank', 'noopener,noreferrer');
      return;
    }
    const path = viewOrPath.startsWith('/')
      ? viewOrPath
      : (VIEW_TO_PATH[viewOrPath] ?? `/${viewOrPath}`);
    if (path === location.pathname) return;
    setPendingPath(path);
    setGridStatus('exit');
  }, [location.pathname]);

  // Called when a project card is clicked in Home / Archive — real route
  // navigation (not a local overlay) so the URL reflects the open project.
  const handleProjectSelect = useCallback((project) => {
    handleNavigate(`/work/${project.id}`);
  }, [handleNavigate]);

  const onGridAnimationComplete = useCallback(() => {
    if (gridStatus === 'exit' && pendingPath) {
      rrNavigate(pendingPath);
      window.scrollTo(0, 0);
      setPendingPath(null);
      setGridStatus('enter');
    }
  }, [gridStatus, pendingPath, rrNavigate]);

  /* ── Active nav view (derived from URL) ─────────────────── */
  const activeView = (() => {
    const p = location.pathname;
    if (p === '/' || p === '')       return 'index';
    if (p.startsWith('/work'))       return 'projects';
    if (p === '/about')              return 'about';
    if (p === '/contact')            return 'contact';
    return '';
  })();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <div className="bg-stone-50 dark:bg-[#111] min-h-screen text-brand-dark dark:text-[#eee] selection:bg-brand selection:text-white font-sans no-scrollbar transition-colors duration-300">
       <FollowerPointerCard title="Curious Traveller" className="block min-h-screen">

        <PageSkeleton
          status={gridStatus}
          onAnimationComplete={onGridAnimationComplete}
          targetPath={pendingPath || location.pathname}
        />
        <SideNavigation onNavigate={handleNavigate} />

        {/* ── ARIA LIVE: announces page changes to screen readers ── */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {location.pathname === '/'        && 'Home page'}
          {location.pathname === '/work'    && 'Work page'}
          {location.pathname === '/about'   && 'About page'}
          {location.pathname === '/contact' && 'Contact page'}
        </div>

        {/* ── TOP NAV ───────────────────────────────────────── */}
        {/* `dark` here forces every dark: utility below to activate while the nav
            overlays the (always-dark) hero photo, regardless of the site's real theme. */}
        <nav className={`fixed top-0 left-0 w-full z-[60] transition-colors duration-300 ${
          navIsOverlay
            ? 'dark bg-transparent border-b border-transparent'
            : 'bg-stone-50/90 backdrop-blur-sm border-b border-stone-200 dark:bg-[#111] dark:border-transparent'
        }`}>
          <div className="grid grid-cols-3 items-center px-6 md:px-10 h-[60px]">

            {/* LEFT: name + dark-mode toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavigate('index')}
                className="font-sans font-bold text-sm md:text-base text-brand-dark dark:text-[#eee] hover:text-brand dark:hover:text-brand-lime transition-colors duration-200 tracking-tight"
              >
                Aniketh<span className="hidden sm:inline"> Vustepalle</span>
              </button>
              <button
                onClick={toggleDark}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className={`flex items-center justify-center w-11 h-11 rounded-md border transition-all duration-200 ${
                  isDark || navIsOverlay
                    ? 'border-[#2a2a2a] text-[#aaa] hover:text-[#ccc] hover:border-[#444] bg-[#191919]'
                    : 'border-stone-200 text-[#666] hover:text-brand-dark hover:border-stone-300 bg-white'
                }`}
              >
                {isDark ? <Sun size={14} strokeWidth={2} aria-hidden="true" /> : <Moon size={14} strokeWidth={2} aria-hidden="true" />}
              </button>
            </div>

            {/* CENTER: nav links */}
            <div className="hidden lg:flex items-center justify-center gap-6">
              {[
                { label: 'Work',  view: 'projects' },
                { label: 'About', view: 'about'    },
              ].map(({ label, view }) => (
                <DrawUnderline
                  key={view}
                  onClick={() => handleNavigate(view)}
                  lineClassName="text-brand dark:text-brand-lime"
                  className={`font-sans text-base font-medium tracking-tight transition-colors duration-200 drop-shadow-sm ${
                    activeView === view
                      ? 'text-brand-dark dark:text-white'
                      : 'text-[#666] dark:text-[#f5f5f5] hover:text-brand-dark dark:hover:text-white'
                  }`}
                >
                  {label}
                </DrawUnderline>
              ))}
              <DrawUnderline
                as="a"
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                lineClassName="text-brand dark:text-brand-lime"
                className="font-sans text-base font-medium tracking-tight text-[#666] dark:text-[#f5f5f5] hover:text-brand-dark dark:hover:text-white transition-colors duration-200 drop-shadow-sm"
              >
                Blog
              </DrawUnderline>
            </div>

            {/* RIGHT: LinkedIn icon + Contact me CTA */}
            <div className="hidden lg:flex items-center justify-end gap-3 pr-16 md:pr-0">
              <a
                href="https://www.linkedin.com/in/aniketh-vustepalle/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hidden sm:flex items-center justify-center w-11 h-11 rounded-md border border-stone-200 dark:border-[#2a2a2a] text-[#666] dark:text-[#aaa] hover:text-brand-dark dark:hover:text-[#ccc] hover:border-stone-300 dark:hover:border-[#444] bg-white dark:bg-[#191919] transition-all duration-200"
              >
                <Linkedin size={13} strokeWidth={1.75} aria-hidden="true" />
              </a>
              <button
                onClick={() => handleNavigate('contact')}
                className="hidden sm:inline-flex items-center gap-1.5 bg-brand-lime text-[#111] px-4 py-1.5 rounded-md font-sans text-sm font-semibold tracking-tight hover:bg-white dark:hover:bg-[#eee] transition-all duration-200 active:scale-[0.98]"
              >
                Contact me
              </button>
            </div>
          </div>
        </nav>

        {/* ── ROUTES ────────────────────────────────────────── */}
        <main id="main-content">
        <Routes>
          <Route path="/"              element={<Home     projects={projects} onSelect={handleProjectSelect} onNavigate={handleNavigate} />} />
          <Route path="/work"          element={<Projects projects={projects} onSelect={handleProjectSelect} onNavigate={handleNavigate} />} />
          <Route path="/work/:projectId" element={<ProjectPage onNavigate={handleNavigate} />} />
          <Route path="/about"         element={<About   onNavigate={handleNavigate} />} />
          <Route path="/contact"       element={<Contact onNavigate={handleNavigate} />} />
          {/* Legacy hash-style fallbacks */}
          <Route path="/blog"          element={<Navigate to="/" replace />} />
          <Route path="*"              element={<Navigate to="/" replace />} />
        </Routes>
        </main>

        {/* ── SCROLL TO TOP ─────────────────────────────────── */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] flex items-center justify-center shadow-lg hover:bg-brand transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <ArrowUp size={16} aria-hidden="true" />
        </button>
       </FollowerPointerCard>
      </div>
    </ReactLenis>
  );
}

/* ─────────────────────────────────────────────────────────────
   App — BrowserRouter wraps everything; basename matches the
   GitHub Pages repo sub-path configured in vite.config.js
───────────────────────────────────────────────────────────── */
export default function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/' : '/portfolio';
  return (
    <BrowserRouter basename={basename}>
      <AppLayout />
    </BrowserRouter>
  );
}
