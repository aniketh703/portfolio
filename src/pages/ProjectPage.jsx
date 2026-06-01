import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { X, ArrowRight, ArrowLeft, Home, Quote } from 'lucide-react';
import { projects } from '../data/projects';
import { CoverImage, renderModule, Label } from '../components/ProjectContent';

const BASE_URL = 'https://aniketh703.github.io/portfolio';

/* ── ProjectPage ────────────────────────────────────────────── */
const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex(p => p.id === parseInt(projectId, 10));
  const project = currentIndex >= 0 ? projects[currentIndex] : null;

  // Scroll to top on project change
  useEffect(() => { window.scrollTo(0, 0); }, [projectId]);

  if (!project) return <Navigate to="/work" replace />;

  const handleClose = () => navigate('/work');
  const handleHome  = () => navigate('/');
  const handleNext  = () => navigate(`/work/${projects[(currentIndex + 1) % projects.length].id}`);
  const handlePrev  = () => navigate(`/work/${projects[(currentIndex - 1 + projects.length) % projects.length].id}`);

  const ogImage = project.coverImage || `${BASE_URL}/og-image.jpg`;

  return (
    <>
      <Helmet>
        <title>{project.title} | Aniketh Vustepalle</title>
        <meta name="description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${project.title} | Aniketh Vustepalle`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={`${BASE_URL}/work/${project.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} | Aniketh Vustepalle`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={`${BASE_URL}/work/${project.id}`} />
      </Helmet>

      <div className="min-h-screen bg-stone-50 dark:bg-[#141414] antialiased [font-synthesis:none]">

        {/* Close button */}
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[160] mix-blend-difference text-white pointer-events-auto">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-300 touch-target"
          >
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] hidden md:block">Close</span>
            <div className="border border-current rounded-full p-2"><X size={18} /></div>
          </button>
        </div>

        {/* ── HEADER ART ──────────────────────────────────────── */}
        <header className="relative w-full h-[52vh] md:h-[70vh] bg-stone-200 dark:bg-[#1c1c1c] overflow-hidden">
          <CoverImage project={project} fallbackSeed={project.id} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 mb-2 drop-shadow-sm">
              {project.category} · {project.year}
            </p>
            <h1
              style={{ fontSize: 'clamp(2.5rem, 10vw, 12rem)' }}
              className="leading-[0.85] font-sans font-semibold tracking-tighter text-white select-none drop-shadow-lg"
            >
              {project.title}
            </h1>
          </div>
        </header>

        {/* ── CONTENT ─────────────────────────────────────────── */}
        <div className="bg-stone-50 dark:bg-[#141414]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 md:pt-16 pb-20 md:pb-32 px-4 md:px-8">

            {/* Sidebar */}
            <aside className="md:col-span-3 space-y-8 md:space-y-10 border-t border-stone-300 dark:border-[#2e2e2e] pt-6">
              <div>
                <Label>Discipline</Label>
                <span className="font-sans text-lg font-medium text-stone-900 dark:text-[#eee]">{project.category}</span>
              </div>
              <div>
                <Label>Year</Label>
                <span className="font-sans text-lg font-medium text-stone-900 dark:text-[#eee]">{project.year}</span>
              </div>
              <div>
                <Label>Stack</Label>
                <div className="flex flex-wrap gap-2">
                  {project.details.map(tech => (
                    <span
                      key={tech}
                      className="border border-stone-200 dark:border-[#2e2e2e] px-2 py-1 text-[11px] font-sans font-medium rounded-full bg-white dark:bg-[#1e1e1e] text-stone-700 dark:text-[#ccc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.liveUrl && (
                <div>
                  <Label>Live</Label>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full border border-stone-900 dark:border-[#eee] bg-stone-900 dark:bg-[#eee] text-white dark:text-[#111] px-4 py-3 text-[11px] font-sans font-medium uppercase tracking-[0.14em] hover:bg-stone-700 dark:hover:bg-[#ccc] transition-colors duration-200"
                  >
                    {project.liveLabel || 'Open Live Project'}
                  </a>
                </div>
              )}
              {project.repoUrl && (
                <div>
                  <Label>Repository</Label>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full border border-stone-300 dark:border-[#333] bg-white dark:bg-[#1e1e1e] text-stone-900 dark:text-[#eee] px-4 py-3 text-[11px] font-sans font-medium uppercase tracking-[0.14em] hover:bg-stone-100 dark:hover:bg-[#262626] transition-colors duration-200"
                  >
                    {project.repoLabel || 'View Repository'}
                  </a>
                </div>
              )}
            </aside>

            {/* Main body */}
            <div className="md:col-span-8 md:col-start-5 border-t border-stone-300 dark:border-[#2e2e2e] pt-6">
              {project.modules ? (
                <div>{project.modules.map((m, i) => renderModule(m, i))}</div>
              ) : (
                <>
                  <p className="text-xl md:text-4xl font-sans leading-tight mb-10 md:mb-16 text-stone-900 dark:text-[#eee] md:indent-24">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div>
                      <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] mb-4 text-stone-400 dark:text-[#555] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand rounded-full" />The Challenge
                      </h3>
                      <p className="text-base leading-relaxed text-stone-700 dark:text-[#bbb] font-light">
                        {project.challenge || 'Defining the problem space required a deep dive into user behaviour and systemic inefficiencies.'}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] mb-4 text-stone-400 dark:text-[#555] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-stone-400 dark:bg-[#555] rounded-full" />The Solution
                      </h3>
                      <p className="text-base leading-relaxed text-stone-700 dark:text-[#bbb] font-light">
                        {project.solution || 'By simplifying the core interaction loop, I created a system that feels both novel and intuitive.'}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* Fig render */}
              <div className="mt-16 md:mt-24">
                <div className="w-full h-[260px] md:h-[400px] bg-stone-200 dark:bg-[#1c1c1c] overflow-hidden relative">
                  <CoverImage project={project} fallbackSeed={project.id + 10} />
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-[#111]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-stone-700 dark:text-[#ccc]">
                    Fig 1.1 — Final Render
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── PREV / HOME / NEXT ──────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-stone-300 dark:border-[#2e2e2e]">
            {[
              { label: 'Previous', sub: 'Previous Project', icon: <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />, iconPos: 'left',  handler: handlePrev, border: 'md:border-r border-stone-300 dark:border-[#2e2e2e]' },
              { label: 'Home',     sub: 'Index',            icon: <Home      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />,        iconPos: 'left',  handler: handleHome, border: 'md:border-r border-stone-300 dark:border-[#2e2e2e]' },
              { label: 'Next',     sub: 'Next Project',     icon: <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />,  iconPos: 'right', handler: handleNext, border: '' },
            ].map(({ label, sub, icon, iconPos, handler, border }) => (
              <div
                key={label}
                onClick={handler}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handler())}
                role="button"
                tabIndex="0"
                className={`group ${border} border-b md:border-b-0 bg-stone-50 dark:bg-[#141414] hover:bg-stone-900 dark:hover:bg-[#1f1f1f] transition-colors duration-300 cursor-pointer py-10 md:py-14 px-6 md:px-8 flex flex-col items-center justify-center text-center outline-none focus:bg-stone-900 dark:focus:bg-[#1f1f1f]`}
              >
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] mb-3 text-stone-400 dark:text-[#555] group-hover:text-stone-400">{sub}</span>
                <div className="flex items-center gap-3 text-stone-900 dark:text-[#eee] group-hover:text-white dark:group-hover:text-[#eee]">
                  {iconPos === 'left'  && icon}
                  <span className="font-sans font-medium text-2xl">{label}</span>
                  {iconPos === 'right' && icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
