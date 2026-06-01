import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, ArrowRight, Layers, User, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GenerativeArt from '../components/GenerativeArt';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import CompanyLogo from '../components/CompanyLogo';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '1+', label: 'years of exp.' },
  { value: '15+', label: 'projects shipped' },
  { value: '2', label: 'companies worked' },
];

const workedAt = [
  { name: 'PanTerra Networks', short: 'PanTerra', domain: 'panterranetworks.com' },
  { name: 'Q-DITS', short: 'Q-DITS', domain: 'q-dits.com' },
];

const technologies = [
  { name: 'React', domain: 'react.dev' },
  { name: 'TypeScript', domain: 'typescriptlang.org' },
  { name: 'Python', domain: 'python.org' },
  { name: 'Figma', domain: 'figma.com' },
  { name: 'GCP', domain: 'cloud.google.com' },
  { name: 'Tailwind', domain: 'tailwindcss.com' },
];

const whatIOffer = [
  {
    num: '01',
    title: 'UI / UX Design',
    description:
      'End-to-end interface design from discovery to high-fidelity — wireframes, prototypes, and polished visual systems built in Figma.',
  },
  {
    num: '02',
    title: 'Frontend Engineering',
    description:
      'Pixel-perfect, performant React applications with TypeScript and Tailwind. Clean code, accessible markup, smooth interactions.',
  },
  {
    num: '03',
    title: 'Full-Stack Development',
    description:
      'Scalable back-ends with Python and FastAPI, deployed on AWS. From database schema to REST API to production.',
  },
];

const TYPE_BADGE = {
  design:      { label: 'Design',      cls: 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20' },
  engineering: { label: 'Engineering', cls: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20' },
  ml:          { label: 'ML & Data',   cls: 'bg-teal-50 text-teal-600 border-teal-200 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20' },
  creative:    { label: 'Creative',    cls: 'bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-500/10 dark:text-violet-400 dark:border-violet-500/20' },
};

const featuredProjects = [
  { id: 1, title: 'GITA APP', category: 'Mobile Application', year: '2026', color: '#FF6B35', details: [] },
  { id: 2, title: 'LAKSHYA', category: 'Career Platform', year: '2025', color: '#4A90E2', details: [] },
  { id: 3, title: 'PANTERRA UI', category: 'Enterprise SaaS', year: '2025', color: '#7C3AED', details: [] },
  { id: 4, title: 'DESIGN SYSTEM', category: 'Component Library', year: '2024', color: '#059669', details: [] },
];

const RecentWorkMedia = ({ project }) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (project.coverImage && !imgFailed) {
    return (
      <img
        src={project.coverImage}
        alt={project.title}
        onError={() => setImgFailed(true)}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div role="img" aria-label={`${project.title} — decorative thumbnail`} className="w-full h-full">
      <GenerativeArt id={project.id} color={project.color} />
    </div>
  );
};

const Home = ({ projects = [], onSelect, onNavigate }) => {
  const heroRef = useRef(null);
  const base = import.meta.env.BASE_URL;

  // Pull featured projects sorted by featuredRank; fall back to hardcoded list
  const allProjects = projects.length > 0
    ? [...projects]
        .filter(p => p.featured)
        .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99))
    : featuredProjects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.15,
      });
      gsap.from('.hero-sub', {
        y: 20, opacity: 0, duration: 0.7, ease: 'power2.out', delay: 0.4,
      });
      gsap.from('.hero-stat', {
        y: 18, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.55, stagger: 0.09,
      });
      gsap.from('.hero-cta', {
        y: 16, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.78,
      });
      gsap.from('.hero-photo', {
        y: 24, opacity: 0, duration: 0.9, ease: 'power2.out', delay: 0.1, stagger: 0.12,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const handleProjectSelect = (project) => {
    if (onSelect) onSelect(project);
  };

  return (
    <>
      <Helmet>
        <title>Aniketh Vustepalle | AI Product Designer &amp; Creative Developer</title>
        <meta name="description" content="AI Product Designer and Creative Developer with 1+ years designing enterprise SaaS interfaces and AI-driven systems. Specialized in React, TypeScript, Python, and Figma. Based in Hyderabad, India." />
        <meta property="og:title" content="Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta property="og:description" content="AI Product Designer and Creative Developer — 1+ years designing enterprise SaaS interfaces and AI-driven systems. Based in Hyderabad, India." />
        <meta property="og:url" content="https://aniketh703.github.io/portfolio/" />
        <meta property="og:image" content="https://aniketh703.github.io/portfolio/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta name="twitter:description" content="AI Product Designer and Creative Developer — 1+ years designing enterprise SaaS interfaces and AI-driven systems. Based in Hyderabad, India." />
        <meta name="twitter:image" content="https://aniketh703.github.io/portfolio/og-image.jpg" />
        <link rel="canonical" href="https://aniketh703.github.io/portfolio/" />
      </Helmet>
    <div ref={heroRef} className="bg-stone-50 dark:bg-[#111]">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,60ch)_1fr] gap-8 lg:gap-10 items-center justify-items-center">

          {/* LEFT PHOTOS */}
          <div className="hidden lg:flex flex-col gap-4 pt-14 items-center">
            <div className="hero-photo max-w-[170px] w-full overflow-hidden rounded-2xl border border-stone-200 dark:border-[#222] shadow-md -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={`${base}Aniketh.png`}
                alt="Aniketh Vustepalle"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="hero-photo max-w-[170px] w-full overflow-hidden rounded-xl border border-stone-200 dark:border-[#222] shadow-sm rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={`${base}projects/logos/mp1.png`}
                alt="Logo Design — GB Aesthetics Miami"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          {/* CENTER HERO CONTENT */}
          <div className="text-center w-full">
            <div className="mb-8 flex justify-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">
                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for projects
              </span>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">·</span>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">
                Hyderabad, India
              </span>
            </div>

            <h1
              className="hero-headline font-sans font-bold leading-[1.05] tracking-tight text-brand-dark dark:text-[#eee] mb-5 w-full text-center"
              style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)' }}
            >
              Designing intuitive<br />digital&nbsp;experiences.
            </h1>

            <p className="hero-sub font-sans text-[15px] text-[#666] dark:text-[#888] max-w-lg leading-relaxed tracking-tight mb-10 mx-auto text-center">
              {"I design intelligent interfaces — and I build them. AI Product Designer & Developer based in "}
              <em className="not-italic text-brand-dark dark:text-[#ccc]">Hyderabad, India</em>
              {", blending design systems with real engineering."}
            </p>

            {/* Inline stats */}
            <div className="flex justify-center gap-8 md:gap-14 mb-10">
              {stats.map((s) => (
                <div key={s.value} className="hero-stat text-center">
                  <p
                    className="font-sans font-black tracking-tight text-brand-lime leading-none mb-1"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
                  >
                    {s.value}
                  </p>
                  <p className="font-sans text-[11px] text-[#666] dark:text-[#aaa] tracking-tight">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="hero-cta flex justify-center gap-3 flex-wrap">
              <button
                onClick={() => onNavigate('projects')}
                className="group inline-flex items-center gap-2 bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] px-6 py-3 rounded-[5px] font-sans text-sm font-medium tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl"
              >
                See my work <ArrowUpRight aria-hidden="true" size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center gap-2 bg-transparent border border-stone-300 dark:border-[#333] text-brand-dark dark:text-[#ccc] px-6 py-3 rounded-[5px] font-sans text-sm font-medium tracking-tight hover:border-brand-dark dark:hover:border-[#aaa] hover:text-brand dark:hover:text-[#eee] transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                About me <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT PHOTOS */}
          <div className="hidden lg:flex flex-col gap-4 pt-8 items-center">
            <div className="hero-photo max-w-[170px] w-full overflow-hidden rounded-2xl border border-stone-200 dark:border-[#222] shadow-md rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={`${base}projects/gita.webp`}
                alt="GITA App — Mobile Application"
                className="w-full aspect-[4/3] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="hero-photo max-w-[170px] w-full overflow-hidden rounded-xl border border-stone-200 dark:border-[#222] shadow-sm -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/808/56a753203461807.Y3JvcCwxNDAwLDEwOTUsMCwyNw.jpg"
                alt="Tribute to ATARI 2600"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* WHERE TO NEXT */}
      <section className="border-t border-stone-200 dark:border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-8">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#aaa] mb-4 text-center">
            Explore
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

            {/* Work */}
            <button
              onClick={() => onNavigate('projects')}
              className="pathway-card group text-left bg-white dark:bg-[#0d0d0d] border border-stone-200 dark:border-[#1f1f1f] rounded-xl p-5 hover:border-stone-300 dark:hover:border-[#333] hover:bg-stone-50 dark:hover:bg-[#141414] transition-all duration-300 outline-none focus:ring-2 focus:ring-brand/40"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-[#1a1a1a] flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors duration-300">
                  <Layers size={16} className="text-stone-500 dark:text-[#666] group-hover:text-brand-lime transition-colors duration-300" />
                </div>
                <ArrowUpRight aria-hidden="true" size={14} className="text-stone-300 dark:text-[#444] group-hover:text-brand-dark dark:group-hover:text-[#aaa] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="font-sans text-sm font-semibold text-brand-dark dark:text-[#ddd] tracking-tight mb-1 group-hover:text-brand dark:group-hover:text-brand-lime transition-colors duration-200">
                Work
              </p>
              <p className="font-sans text-[12px] text-[#666] dark:text-[#aaa] leading-snug tracking-tight">
                15+ projects across mobile, web &amp; enterprise
              </p>
            </button>

            {/* About */}
            <button
              onClick={() => onNavigate('about')}
              className="pathway-card group text-left bg-white dark:bg-[#0d0d0d] border border-stone-200 dark:border-[#1f1f1f] rounded-xl p-5 hover:border-stone-300 dark:hover:border-[#333] hover:bg-stone-50 dark:hover:bg-[#141414] transition-all duration-300 outline-none focus:ring-2 focus:ring-brand/40"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-[#1a1a1a] flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors duration-300">
                  <User size={16} className="text-stone-500 dark:text-[#666] group-hover:text-brand-lime transition-colors duration-300" />
                </div>
                <ArrowUpRight aria-hidden="true" size={14} className="text-stone-300 dark:text-[#444] group-hover:text-brand-dark dark:group-hover:text-[#aaa] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="font-sans text-sm font-semibold text-brand-dark dark:text-[#ddd] tracking-tight mb-1 group-hover:text-brand dark:group-hover:text-brand-lime transition-colors duration-200">
                About
              </p>
              <p className="font-sans text-[12px] text-[#666] dark:text-[#aaa] leading-snug tracking-tight">
                1+ years · PanTerra Networks · Q-DITS
              </p>
            </button>

            {/* Contact */}
            <button
              onClick={() => onNavigate('contact')}
              className="pathway-card group text-left bg-white dark:bg-[#0d0d0d] border border-stone-200 dark:border-[#1f1f1f] rounded-xl p-5 hover:border-stone-300 dark:hover:border-[#333] hover:bg-stone-50 dark:hover:bg-[#141414] transition-all duration-300 outline-none focus:ring-2 focus:ring-brand/40"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-[#1a1a1a] flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors duration-300">
                  <Mail size={16} className="text-stone-500 dark:text-[#666] group-hover:text-brand-lime transition-colors duration-300" />
                </div>
                <ArrowUpRight aria-hidden="true" size={14} className="text-stone-300 dark:text-[#444] group-hover:text-brand-dark dark:group-hover:text-[#aaa] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="font-sans text-sm font-semibold text-brand-dark dark:text-[#ddd] tracking-tight mb-1 group-hover:text-brand dark:group-hover:text-brand-lime transition-colors duration-200">
                Contact
              </p>
              <p className="font-sans text-[12px] text-[#666] dark:text-[#aaa] leading-snug tracking-tight">
                Open for freelance &amp; full-time roles
              </p>
            </button>

          </div>
        </div>
      </section>

      {/* WHERE I WORKED / TECHNOLOGIES */}
      <section className="border-t border-stone-200 dark:border-[#1f1f1f] bg-white dark:bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-5 sm:gap-0 sm:divide-x sm:divide-stone-200 sm:dark:divide-[#1f1f1f]">

            {/* Left: Where I Worked */}
            <div className="flex flex-col xs:flex-row xs:items-center gap-3 sm:gap-6 sm:pr-10 flex-shrink-0">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#aaa] flex-shrink-0 whitespace-nowrap">
                Where I Worked
              </span>
              <div className="flex items-center gap-5">
                {workedAt.map((company) => (
                  <div key={company.name} className="flex items-center gap-2 group cursor-default">
                    <CompanyLogo
                      domain={company.domain}
                      name={company.short}
                      className="w-5 h-5 rounded object-contain flex-shrink-0"
                    />
                    <span className="font-sans text-sm font-medium text-stone-500 dark:text-[#aaa] tracking-tight group-hover:text-brand-dark dark:group-hover:text-[#aaa] transition-colors duration-200">
                      {company.short}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technologies */}
            <div className="flex flex-col xs:flex-row xs:items-center gap-3 sm:gap-6 sm:pl-10 flex-1 min-w-0">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#aaa] flex-shrink-0 whitespace-nowrap">
                Technologies
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-1.5 group cursor-default">
                    <CompanyLogo
                      domain={tech.domain}
                      name={tech.name}
                      className="w-5 h-5 rounded object-contain flex-shrink-0"
                    />
                    <span className="font-sans text-sm font-medium text-stone-500 dark:text-[#aaa] tracking-tight group-hover:text-brand-dark dark:group-hover:text-[#aaa] transition-colors duration-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      {/* <section className="bg-white dark:bg-[#0d0d0d] border-b border-stone-200 dark:border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 md:gap-24 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <p
                  className="font-sans font-black tracking-tight text-brand-lime leading-none mb-1.5"
                  style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
                >
                  {s.value}
                </p>
                <p className="font-sans text-[13px] text-[#666] dark:text-[#aaa] tracking-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* WHAT I OFFER */}
      <section className="bg-white dark:bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <h2
            className="font-sans font-bold tracking-tight text-brand-dark dark:text-[#eee] mb-12"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            What I offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-[#1f1f1f]">
            {whatIOffer.map((item) => (
              <div key={item.num} className="group py-8 md:py-0 md:px-8 first:pl-0 last:pr-0 transition-colors duration-300 hover:bg-stone-100/50 dark:hover:bg-[#161616]/50 rounded-xl md:rounded-none">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-[13px] font-medium text-stone-400 dark:text-[#444] tracking-wider transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-brand-dark dark:group-hover:text-brand-lime">
                    {item.num}
                  </span>
                  <h3 className="font-sans text-base font-semibold text-brand-dark dark:text-[#eee] tracking-tight transition-colors duration-300 group-hover:text-brand dark:group-hover:text-brand-lime">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-[13px] text-[#666] dark:text-[#888] leading-relaxed tracking-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-stone-200 dark:border-[#1f1f1f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="font-sans text-sm text-[#666] dark:text-[#aaa] tracking-tight">
              Need a different approach? I&apos;m flexible &mdash; let&apos;s discuss.
            </p>
            <a
              href="mailto:anikethvustepalle03@gmail.com"
              className="group inline-flex items-center gap-2 bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] px-6 py-2.5 rounded-[5px] font-sans text-sm font-medium tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl flex-shrink-0"
            >
              Reach out <ArrowUpRight aria-hidden="true" size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="border-t border-stone-200 dark:border-[#1f1f1f] bg-stone-50 dark:bg-[#111]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="flex justify-between items-center mb-10">
            <h2
              className="font-sans font-bold tracking-tight text-brand-dark dark:text-[#eee]"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Recent work
            </h2>
            <button
              onClick={() => onNavigate('projects')}
              className="hidden md:flex items-center gap-1.5 font-sans text-sm text-[#666] dark:text-[#aaa] hover:text-brand-dark dark:hover:text-[#eee] transition-colors duration-200 tracking-tight group"
            >
              All projects <ArrowRight aria-hidden="true" size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allProjects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                role="button"
                tabIndex="0"
                aria-label={`View ${project.title} project`}
                onClick={() => handleProjectSelect(project)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleProjectSelect(project)}
                className="group bg-white dark:bg-[#141414] border border-stone-200 dark:border-[#222] rounded-xl overflow-hidden cursor-pointer outline-none focus:ring-2 focus:ring-brand/40 transition-all duration-300 hover:border-stone-300 dark:hover:border-[#333]"
              >
                <div className="relative overflow-hidden bg-stone-100 dark:bg-[#1c1c1c] aspect-[4/3]">
                  <RecentWorkMedia project={project} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 dark:bg-[#eee]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <ArrowUpRight aria-hidden="true" size={18} className="text-brand-dark" />
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500 dark:text-[#aaa] mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-sans text-base md:text-lg font-semibold tracking-tight text-brand-dark dark:text-[#eee] group-hover:text-brand dark:group-hover:text-brand-lime transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <span className="font-mono text-[11px] text-stone-500 dark:text-[#aaa]">
                      {project.year}
                    </span>
                    {project.type && TYPE_BADGE[project.type] && (
                      <span className={`font-sans text-[9px] font-semibold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full border ${TYPE_BADGE[project.type].cls}`}>
                        {TYPE_BADGE[project.type].label}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex md:hidden mt-6">
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 font-sans text-sm text-[#666] dark:text-[#aaa] hover:text-brand-dark dark:hover:text-[#eee] transition-colors duration-200 tracking-tight group"
            >
              All projects <ArrowRight aria-hidden="true" size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA CARD */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="bg-[#111] dark:bg-[#161616] rounded-2xl p-10 md:p-16 text-center border border-[#222] dark:border-[#2a2a2a]">
          <h2
            className="font-sans font-bold tracking-tight text-white mb-8"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
          >
            Ready for growth? Let&apos;s talk.
          </h2>
          <a
            href="mailto:anikethvustepalle03@gmail.com"
            className="group inline-flex items-center gap-2 bg-brand-lime text-brand-dark px-8 py-3.5 rounded-md font-sans text-sm font-semibold tracking-tight hover:bg-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-lime/20"
          >
            Get in touch <ArrowUpRight aria-hidden="true" size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
    </>
  );
};

export default Home;
