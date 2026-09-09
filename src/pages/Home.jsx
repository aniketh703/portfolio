import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Carousel, Card } from '../components/ui/apple-cards-carousel';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WillemHero from '../components/WillemHero';
import { profile } from '../data/profile';
import mapPinIcon from '../assets/icons/map-pin.png';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: profile.yearsExperience, label: 'years of exp.' },
  { value: '15+', label: 'projects shipped' },
  { value: '2', label: 'companies worked' },
];

// Recurring disciplines pulled from the actual project set and work history
// (src/data/projects.js roles/stacks + Resume.jsx experience tags) — not a
// generic skills list.
const capabilities = [
  'AI Product Design',
  'Human-in-the-Loop Systems',
  'Design Systems',
  'Frontend Engineering',
  'Enterprise SaaS Design',
  'Full-Stack Development',
  'MLOps & Model Deployment',
  'Prompt Engineering',
  'Agentic AI Workflows',
  'Applied NLP & Retrieval',
  'Data Engineering',
  'Brand & Visual Identity',
];

const featuredProjects = [
  { id: 1, title: 'GITA APP', category: 'Mobile Application', year: '2026', color: '#FF6B35', details: [] },
  { id: 2, title: 'LAKSHYA', category: 'Career Platform', year: '2025', color: '#4A90E2', details: [] },
  { id: 3, title: 'PANTERRA UI', category: 'Enterprise SaaS', year: '2025', color: '#7C3AED', details: [] },
  { id: 4, title: 'DESIGN SYSTEM', category: 'Component Library', year: '2024', color: '#059669', details: [] },
];

const Home = ({ projects = [], onSelect, onNavigate }) => {
  const heroRef = useRef(null);

  // Pull featured projects sorted by featuredRank; fall back to hardcoded list
  const allProjects = projects.length > 0
    ? [...projects]
        .filter(p => p.featured)
        .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99))
    : featuredProjects;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-sub', {
        y: 20, opacity: 0, duration: 0.7, ease: 'power2.out', delay: 0.3,
      });
      gsap.from('.hero-stat', {
        y: 18, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.45, stagger: 0.09,
      });
      gsap.from('.hero-cta', {
        y: 16, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.68,
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
        <meta name="description" content={`AI Product Designer and Creative Developer with ${profile.yearsExperience} years designing enterprise SaaS interfaces and AI-driven systems. Specialized in React, TypeScript, Python, and Figma. Based in ${profile.location}.`} />
        <meta property="og:title" content="Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta property="og:description" content={`AI Product Designer and Creative Developer — ${profile.yearsExperience} years designing enterprise SaaS interfaces and AI-driven systems. Based in ${profile.location}.`} />
        <meta property="og:url" content="https://aniketh.is-a.dev/" />
        <meta property="og:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta name="twitter:description" content={`AI Product Designer and Creative Developer — ${profile.yearsExperience} years designing enterprise SaaS interfaces and AI-driven systems. Based in ${profile.location}.`} />
        <meta name="twitter:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <link rel="canonical" href="https://aniketh.is-a.dev/" />
      </Helmet>
    <div ref={heroRef} className="bg-stone-50 dark:bg-[#111]">

      {/* HERO */}
      <WillemHero />

      {/* INTRO + WHAT I OFFER — merged: status/location badge leads straight
          into the services grid so the page opens with one continuous
          "who I am / what I do" panel instead of two disconnected sections. */}
      <section className="bg-white dark:bg-[#0d0d0d]">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 pt-16 md:pt-20 text-center">
          <div className="mb-6 flex justify-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime/15 dark:bg-brand-lime/10 border border-brand-lime/35 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-brand-dark dark:text-brand-lime">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for projects
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#181818]/80 border border-stone-200/80 dark:border-[#282828] font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">
              <img src={mapPinIcon} alt="" width={12} height={12} className="w-3 h-3 object-contain flex-shrink-0" aria-hidden="true" />
              {profile.location}
            </span>
          </div>

          <p className="hero-sub font-sans text-base md:text-lg text-[#666] dark:text-[#888] max-w-xl leading-relaxed tracking-tight mb-10 mx-auto text-center">
            {"I design intelligent interfaces — and I build them. AI Product Designer & Developer based in "}
            <em className="not-italic text-brand-dark dark:text-[#ccc]">{profile.location}</em>
            {", blending design systems with real engineering."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 md:gap-24 text-center mb-10">
            {stats.map((s) => (
              <div key={s.value} className="hero-stat">
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

        <div className="max-w-3xl xl:max-w-4xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 pt-12 md:pt-16 pb-16 md:pb-24 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-stone-400 dark:text-[#666] mb-12 md:mb-16">
            Expertise &amp; Capabilities
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
            {capabilities.map((item) => (
              <span
                key={item}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-stone-300 dark:border-[#333] font-sans text-sm text-stone-600 dark:text-[#999] tracking-tight hover:border-brand-dark dark:hover:border-brand-lime hover:text-brand-dark dark:hover:text-[#eee] transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-14 sm:mt-16 pt-8 border-t border-stone-200 dark:border-[#1f1f1f] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <p className="font-sans text-sm text-[#666] dark:text-[#aaa] tracking-tight">
              Need a different approach? I&apos;m flexible &mdash; let&apos;s discuss.
            </p>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="group inline-flex items-center gap-2 bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] px-6 py-2.5 rounded-[5px] font-sans text-sm font-medium tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl flex-shrink-0"
            >
              Reach out <ArrowUpRight aria-hidden="true" size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="border-t border-stone-200 dark:border-[#1f1f1f] bg-stone-50 dark:bg-[#111]">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 pt-16 md:pt-24">
          <div className="flex justify-between items-center">
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
        </div>

        <Carousel
          items={allProjects.slice(0, 6).map((project, index) => (
            <Card
              key={project.id}
              index={index}
              card={{
                category: project.category,
                title: project.title,
                src: project.coverImage,
                content: (
                  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                      {project.description}
                    </p>
                    <button
                      onClick={() => handleProjectSelect(project)}
                      className="group mt-8 inline-flex items-center gap-2 bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] px-6 py-3 rounded-md font-sans text-sm font-medium tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-300"
                    >
                      View full case study
                      <ArrowUpRight aria-hidden="true" size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                ),
              }}
            />
          ))}
        />

        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 pb-16 md:pb-24">
          <div className="flex md:hidden -mt-6">
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
      <section className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 py-16 md:py-24">
        <div className="relative overflow-hidden bg-brand-lime rounded-[2.5rem] md:rounded-[3rem] px-8 py-16 md:py-24 text-center">
          <p className="font-sans text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-brand-dark/60 mb-5">
            Got a project in mind?
          </p>
          <h2
            className="font-sans font-black uppercase tracking-tight text-brand-dark leading-[0.85] mb-10"
            style={{ fontSize: 'clamp(3rem, 11vw, 8rem)' }}
          >
            Let&apos;s talk
          </h2>
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="group inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-tight hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            Get in touch </button>
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
