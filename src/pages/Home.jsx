import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Carousel, Card } from '../components/ui/apple-cards-carousel';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import CompanyLogo from '../components/CompanyLogo';
import WillemHero from '../components/WillemHero';

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
        <meta name="description" content="AI Product Designer and Creative Developer with 1+ years designing enterprise SaaS interfaces and AI-driven systems. Specialized in React, TypeScript, Python, and Figma. Based in Hyderabad, India." />
        <meta property="og:title" content="Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta property="og:description" content="AI Product Designer and Creative Developer — 1+ years designing enterprise SaaS interfaces and AI-driven systems. Based in Hyderabad, India." />
        <meta property="og:url" content="https://aniketh.is-a.dev/" />
        <meta property="og:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta name="twitter:description" content="AI Product Designer and Creative Developer — 1+ years designing enterprise SaaS interfaces and AI-driven systems. Based in Hyderabad, India." />
        <meta name="twitter:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <link rel="canonical" href="https://aniketh.is-a.dev/" />
      </Helmet>
    <div ref={heroRef} className="bg-stone-50 dark:bg-[#111]">

      {/* HERO */}
      <WillemHero />

      {/* HERO — bio / stats / CTAs */}
      <section className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 pt-16 pb-16 md:pt-20 md:pb-20 text-center">
        <div className="mb-6 flex justify-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for projects
          </span>
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">·</span>
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">
            Hyderabad, India
          </span>
        </div>

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
      </section>

      {/* WHERE I WORKED / TECHNOLOGIES */}
      <section className="border-t border-stone-200 dark:border-[#1f1f1f] bg-white dark:bg-[#0d0d0d]">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-5 sm:gap-0 sm:divide-x sm:divide-stone-200 sm:dark:divide-[#1f1f1f]">

            {/* Left: Where I Worked */}
            <div className="flex flex-col xs:flex-row xs:items-center gap-3 sm:gap-6 sm:pr-10 flex-shrink-0">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#aaa] flex-shrink-0 whitespace-nowrap">
                Where I Worked
              </span>
              <div className="flex items-center gap-5">
                {workedAt.map((company) => (
                  <div key={company.name} className="flex items-center gap-2 group">
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
                  <div key={tech.name} className="flex items-center gap-1.5 group">
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
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 py-16 md:py-24">
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
      <section className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 py-16 md:py-24">
        <div className="bg-[#111] dark:bg-[#161616] rounded-2xl p-10 md:p-16 text-center border border-[#222] dark:border-[#2a2a2a]">
          <h2
            className="font-sans font-bold tracking-tight text-white mb-8"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
          >
            Ready for growth? Let&apos;s talk.
          </h2>
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="group inline-flex items-center gap-2 bg-brand-lime text-brand-dark px-8 py-3.5 rounded-md font-sans text-sm font-semibold tracking-tight hover:bg-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-lime/20"
          >
            Get in touch <ArrowUpRight aria-hidden="true" size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
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
