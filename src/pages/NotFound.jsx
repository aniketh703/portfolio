import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, Briefcase, Mail, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';
import { Illustration404 } from '../components/illustrations';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

const NotFound = ({ onNavigate }) => {
  // Grab primary featured projects to turn 404 into a spacious discovery portal
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  const handleGo = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      const pathMap = {
        index: '/',
        projects: '/work',
        about: '/about',
        contact: '/contact',
      };
      const path = target.startsWith('/') ? target : pathMap[target] || `/${target}`;
      window.location.href = path;
    }
  };

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Aniketh Vustepalle</title>
        <meta
          name="description"
          content="The requested page could not be found. Return to Aniketh Vustepalle's AI product design and creative engineering portfolio."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="relative min-h-screen bg-stone-50 dark:bg-[#0f0f0f] text-stone-900 dark:text-stone-100 flex flex-col justify-between pt-32 sm:pt-40 transition-colors duration-300 overflow-hidden">
        {/* Full-Canvas Ambient Lighting & Gradients */}
        <div
          className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-brand-lime/10 dark:bg-brand-lime/[0.05] rounded-full blur-[160px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 -left-48 w-[600px] h-[600px] bg-stone-200/50 dark:bg-[#1a1a1a]/40 rounded-full blur-[130px]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 w-full pb-20 md:pb-28">
          
          {/* ── EXPANSIVE HERO SECTION (No Cramped Card!) ── */}
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto pt-6">

            {/* Icons8 illustration — recolored to match the page background via --ill-line/--ill-bg */}
            {/* <Illustration404
              className="mx-auto w-36 sm:w-44 [--ill-line:#0A0A0A] [--ill-bg:#fafaf9] dark:[--ill-line:#EDEDED] dark:[--ill-bg:#0f0f0f]"
            /> */}

            {/* Top Developer Diagnostics Bar */}
            {/* <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#181818]/90 border border-stone-200/80 dark:border-[#282828] text-xs font-mono text-stone-600 dark:text-[#aaa] shadow-sm backdrop-blur-sm">
                <img src={vscodeIcon} alt="VS Code" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
                <span>route_not_found</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#181818]/90 border border-stone-200/80 dark:border-[#282828] text-xs font-mono text-stone-600 dark:text-[#aaa] shadow-sm backdrop-blur-sm">
                <img src={gitIcon} alt="Git" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
                <span>HEAD: main</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/15 dark:bg-brand-lime/10 border border-brand-lime/30 text-xs font-mono text-brand-dark dark:text-brand-lime shadow-sm">
                <img src={aiIcon} alt="AI" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
                <span className="font-semibold">status: 404 exception</span>
              </div>
            </div> */}

            {/* Giant Architectural 404 Numeral */}
            <div
              className="font-mono font-black tracking-tighter leading-none select-none text-stone-300 dark:text-stone-700"
              style={{ fontSize: 'clamp(6.5rem, 18vw, 15rem)' }}
            >
              404
            </div>

            {/* Expansive Headline & Message */}
            <div className="space-y-3 max-w-2xl mx-auto">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark dark:text-white">
                Lost in the digital ether?
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl text-stone-600 dark:text-[#999] leading-relaxed">
                This page moved, got renamed, or never existed. Let&apos;s get you back to something worth your time.
              </p>
            </div>

            {/* Spacious Primary Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => handleGo('index')}
                className="inline-flex items-center gap-2.5 bg-brand-dark dark:bg-white text-white dark:text-brand-dark px-7 py-4 rounded-2xl font-sans text-base font-bold tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <Home size={18} />
                Return to Homepage
              </button>
              <button
                onClick={() => handleGo('projects')}
                className="inline-flex items-center gap-2.5 bg-white dark:bg-[#181818] text-brand-dark dark:text-[#eee] border border-stone-200 dark:border-[#303030] px-7 py-4 rounded-2xl font-sans text-base font-semibold tracking-tight hover:border-brand-dark dark:hover:border-brand-lime transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Briefcase size={18} />
                Explore Selected Work
              </button>
              <button
                onClick={() => handleGo('contact')}
                className="inline-flex items-center gap-2.5 bg-transparent text-stone-600 dark:text-[#aaa] hover:text-brand-dark dark:hover:text-white px-6 py-4 rounded-2xl font-sans text-base font-medium tracking-tight transition-colors duration-200"
              >
                <Mail size={18} />
                Contact Me
              </button>
            </div>

          </div>

          {/* ── EXPANSIVE PROJECT DISCOVERY SECTION (Uses the space freely!) ── */}
          <div className="mt-24 sm:mt-32 pt-12 border-t border-stone-200/80 dark:border-[#222]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2.5">
                <Compass size={16} className="text-brand-dark dark:text-brand-lime" />
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-[#777]">
                  Featured Projects &amp; Case Studies
                </p>
              </div>
              <button
                onClick={() => handleGo('projects')}
                className="group inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-stone-600 dark:text-[#aaa] hover:text-brand-dark dark:hover:text-brand-lime transition-colors"
              >
                <span>View all {profile.projectCount} projects</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* 4-Column Spacious Discovery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => handleGo(`/work/${proj.id}`)}
                  className="group relative p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#151515]/80 backdrop-blur-md border border-stone-200/80 dark:border-[#242424] hover:border-brand-dark dark:hover:border-brand-lime transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Category & Year Row */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-[#888]">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: proj.color || '#3b82f6' }}
                        />
                        <span>{proj.category}</span>
                      </div>
                      <span className="text-xs font-mono text-stone-400 dark:text-[#666]">{proj.year}</span>
                    </div>

                    {/* Title */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-sans text-lg sm:text-xl font-bold text-brand-dark dark:text-white group-hover:text-brand dark:group-hover:text-brand-lime transition-colors">
                        {proj.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-stone-400 group-hover:text-brand-dark dark:group-hover:text-brand-lime group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0"
                      />
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-stone-500 dark:text-[#888] line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Role / Stack Pill */}
                  {/* <div className="pt-6 mt-4 border-t border-stone-100 dark:border-[#202020] flex items-center gap-2">
                    <Sparkles size={12} className="text-brand-dark dark:text-brand-lime" />
                    <span className="text-[11px] font-mono text-stone-400 dark:text-[#777] truncate">
                      {proj.role || proj.stack?.[0] || 'Case Study'}
                    </span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>

        </div>

        <Footer onNavigate={onNavigate} />
      </section>
    </>
  );
};

export default NotFound;
