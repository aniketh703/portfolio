import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import GenerativeArt from '../components/GenerativeArt';
import Footer from '../components/Footer';

const ProjectThumb = ({ project }) => {
  const [imgFailed, setImgFailed] = useState(false);
  if (project.coverImage && !imgFailed) {
    return (
      <img
        src={project.coverImage}
        alt={project.title}
        onError={() => setImgFailed(true)}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <div role="img" aria-label={`${project.title} — decorative thumbnail`} className="w-full h-full">
      <GenerativeArt id={project.id} color={project.color} />
    </div>
  );
};

const skills = ['AI Product Design', 'Design Systems', 'React.js', 'Figma', 'Prompt Engineering', 'Python', 'UX Research', 'Prototyping', 'CI/CD', 'SQL', 'HTML/CSS', 'JavaScript'];
const tools  = ['Figma', 'VS Code', 'Git', 'GitHub', 'AWS', 'Google Cloud', 'Adobe XD'];

const Projects = ({ projects, onSelect, onNavigate }) => {
  const TYPE_FILTERS = [
    { key: 'all',         label: 'All'         },
    { key: 'design',      label: 'Design'      },
    { key: 'engineering', label: 'Engineering' },
    { key: 'ml',          label: 'ML & Data'   },
    { key: 'creative',    label: 'Creative'    },
  ];

  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);

  return (
    <>
      <Helmet>
        <title>Projects | UI/UX Design &amp; Engineering Work | Aniketh Vustepalle</title>
        <meta name="description" content="UI/UX design and engineering projects by Aniketh Vustepalle — enterprise SaaS dashboards, AI-driven systems, MLOps pipelines, mobile apps, and design systems." />
        <meta property="og:title" content="Work | Aniketh Vustepalle" />
        <meta property="og:description" content="UI/UX and engineering projects — SaaS dashboards, mobile apps, MLOps, and more." />
        <meta property="og:url" content="https://aniketh703.github.io/portfolio/work" />
        <meta property="og:image" content="https://aniketh703.github.io/portfolio/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Work | Aniketh Vustepalle" />
        <meta name="twitter:description" content="UI/UX and engineering projects — SaaS dashboards, mobile apps, MLOps, and more." />
        <meta name="twitter:image" content="https://aniketh703.github.io/portfolio/og-image.jpg" />
        <link rel="canonical" href="https://aniketh703.github.io/portfolio/work" />
      </Helmet>
      <section className="bg-stone-50 dark:bg-[#111] min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* Header */}
          <div className="pt-32 pb-10">
            <h1
              className="font-sans font-bold leading-none tracking-tight text-brand-dark dark:text-[#eee]"
              style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
            >
              Projects
            </h1>
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 flex-wrap pb-10">
            {TYPE_FILTERS.map(({ key, label }) => {
              const count = key === 'all' ? projects.length : projects.filter(p => p.type === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`font-sans text-xs font-medium px-4 py-1.5 rounded-full border transition-all duration-300 ease-out hover:scale-[1.03] active:scale-[0.97] tracking-tight ${
                    filter === key
                      ? 'bg-brand-dark text-white border-brand-dark shadow-sm dark:bg-[#eee] dark:text-[#111] dark:border-[#eee]'
                      : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-300 hover:text-stone-800 dark:text-[#aaa] dark:border-[#2a2a2a] dark:hover:border-[#444] dark:hover:text-[#888]'
                  }`}
                >
                  {label} <span className="opacity-50 ml-0.5">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Grid — matches Framer layout: dark card + text below */}
          <div className="pb-24 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
            {filtered.map((project) => (
              <div
                key={project.id}
                role="button"
                tabIndex="0"
                aria-label={`View ${project.title} project`}
                onClick={() => onSelect(project)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(project)}
                className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-dark/30 dark:focus-visible:ring-[#eee]/30"
              >
                {/* Dark image container — matches Framer's #1a1a1a card */}
                <div className="relative bg-stone-100 dark:bg-[#1a1a1a] rounded-[5px] overflow-hidden border border-stone-200 dark:border-transparent">
                  {/* Inner thumbnail with slight inset rounding */}
                  <div className="m-2 rounded-lg overflow-hidden">
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <ProjectThumb project={project} />
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/25 transition-colors duration-300 rounded-[5px]" />
                  {/* Hover arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <ArrowUpRight aria-hidden="true" size={16} className="text-brand-dark dark:text-[#111]" />
                  </div>
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 font-sans text-[10px] font-medium uppercase tracking-[0.12em] bg-brand-lime text-brand-dark px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Details below card — matches Framer's Details section */}
                <div className="mt-3 px-0.5">
                  <p className="font-sans text-[15px] font-medium tracking-[-0.01em] leading-[165%] text-brand-dark group-hover:text-brand dark:text-[#ccc] dark:group-hover:text-[#eee] transition-colors duration-200">
                    {project.title}
                  </p>
                  <p className="font-sans text-sm text-stone-500 dark:text-[#aaa] leading-relaxed tracking-tight">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-sans text-sm text-stone-500 dark:text-[#aaa]">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bio + Skills section — dark, matches projects_page.png */}
      <section className="bg-white dark:bg-[#0d0d0d] border-t border-stone-200 dark:border-[#1a1a1a] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* Large watermark stat */}
          <p
            className="font-sans font-black tracking-tight text-stone-200 dark:text-[#1c1c1c] leading-none mb-12 select-none"
            style={{ fontSize: 'clamp(5rem, 18vw, 14rem)' }}
            aria-hidden="true"
          >
            1+ years
          </p>

          {/* Bio */}
          <div className="max-w-2xl mb-12">
            <p className="font-sans text-[15px] text-stone-500 dark:text-[#aaa] leading-relaxed tracking-tight mb-4">
              I&apos;ve been designing and building digital products, starting with a
              foundation in computer science and evolving toward AI-driven product design.
            </p>
            <p className="font-sans text-[15px] text-stone-500 dark:text-[#aaa] leading-relaxed tracking-tight">
              I shifted my focus to product and UI design driven by the challenge of solving real user
              problems through thoughtful, functional interfaces and intelligent systems.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-[#888] mb-4">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="font-sans text-[12px] text-stone-600 border border-stone-200 px-3 py-1.5 rounded-full hover:border-stone-300 hover:text-stone-800 dark:text-[#aaa] dark:border-[#222] dark:hover:border-[#3a3a3a] dark:hover:text-[#777] transition-colors duration-200">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-12">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-[#888] mb-4">Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map(t => (
                <span key={t} className="font-sans text-[12px] text-stone-600 border border-stone-200 px-3 py-1.5 rounded-full hover:border-stone-300 hover:text-stone-800 dark:text-[#aaa] dark:border-[#222] dark:hover:border-[#3a3a3a] dark:hover:text-[#777] transition-colors duration-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Resume link */}
          <button
            onClick={() => onNavigate && onNavigate('about')}
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-stone-600 border border-stone-200 px-6 py-3 rounded-[5px] hover:border-stone-300 hover:text-stone-800 dark:text-[#aaa] dark:border-[#2a2a2a] dark:hover:border-[#444] dark:hover:text-[#888] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
          >
            Full resume <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Projects;
