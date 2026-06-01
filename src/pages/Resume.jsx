import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';

const experience = [
  {
    role: 'Associate - UI/UX Designer',
    company: 'PanTerra Networks',
    period: 'Nov 2025 – Present',
    description: 'Prompt Engineering and AI Product Design. Designing responsive interfaces, leading the end-to-end redesign of enterprise platforms, and working on HITL (Human-in-the-Loop) AI systems.',
    color: '#4A90E2',
  },
  {
    role: 'User Experience Designer (Apprenticeship)',
    company: 'PanTerra Networks',
    period: 'May 2025 – Nov 2025',
    description: 'Focused on designing responsive interfaces and improving user experience across digital platforms. Collaborated with cross-functional teams to deliver user-centered solutions.',
    color: '#059669',
  },
  {
    role: 'Data Acquisition and Tools Development Intern',
    company: 'Q-DITS',
    period: 'Sep 2024 – Dec 2024',
    description: 'Redesigned the company website, analyzed large data sets for stock market analysis, developed a GUI for syncing stock data, and worked on PDF generation projects.',
    color: '#FF6B35',
  },
  {
    role: 'UI/UX Designer Intern',
    company: 'InternPixel',
    period: 'Feb 2024 – Mar 2024',
    description: 'Collaborated with design and development teams to create visually appealing and user-friendly interfaces. Utilized Figma extensively for prototyping.',
    color: '#D6F343',
  },
  {
    role: 'Web Developer Intern',
    company: 'Bharat Intern',
    period: 'Sep 2023 – Oct 2023',
    description: 'Developed and maintained web applications utilizing HTML, CSS, and JavaScript. Successfully delivered 3 projects meeting all deadlines.',
    color: '#7C3AED',
  }
];

const education = [
  {
    degree: 'Executive MTech in Applied AI',
    institution: 'VNIT Nagpur',
    period: 'Present',
    location: 'Nagpur, MH',
    color: '#4A90E2',
  },
  {
    degree: 'B.E., Computer Science',
    institution: 'Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya',
    period: 'Dec 2020 – Jul 2024',
    location: 'Kancheepuram, TN',
    color: '#D6F343',
  },
];

const skills = [
  'AI Product Design', 'Design Systems', 'React.js', 'Figma',
  'Prompt Engineering', 'Python', 'UX Research', 'Prototyping',
  'CI/CD', 'SQL', 'HTML/CSS', 'JavaScript'
];

const tools = [
  'Figma', 'VS Code', 'Git', 'GitHub', 'AWS', 'Google Cloud', 'Adobe XD'
];

const About = ({ onNavigate }) => {
  return (
    <>
      <Helmet>
        <title>About Aniketh Vustepalle | AI Product Designer &amp; Developer</title>
        <meta name="description" content="AI Product Designer and Creative Developer at PanTerra Networks — 1+ years designing enterprise SaaS dashboards, HITL AI systems, and building full-stack products. Based in Hyderabad, India." />
        <meta property="og:title" content="About Aniketh Vustepalle | AI Product Designer & Developer" />
        <meta property="og:description" content="AI Product Designer at PanTerra Networks — enterprise SaaS, HITL AI systems, React, Figma, Python." />
        <meta property="og:url" content="https://aniketh703.github.io/portfolio/about" />
        <meta property="og:image" content="https://aniketh703.github.io/portfolio/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Aniketh Vustepalle | AI Product Designer" />
        <meta name="twitter:description" content="AI Product Designer and Creative Developer — PanTerra Networks, Q-DITS. 1+ years designing enterprise SaaS and AI-driven systems." />
        <meta name="twitter:image" content="https://aniketh703.github.io/portfolio/og-image.jpg" />
        <link rel="canonical" href="https://aniketh703.github.io/portfolio/about" />
      </Helmet>

      <section className="min-h-screen bg-stone-50 dark:bg-[#111]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* ── HERO ─────────────────────────────────────────────── */}
          <div className="pt-32 pb-16">

            {/* Centered heading — bold sans like Portfolica */}
            <div className="text-center mb-14">
              <h1
                className="font-sans font-bold leading-[1.05] tracking-tight text-brand-dark dark:text-[#eee]"
                style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
              >
                AI Product Designer +<br />Creative Developer
              </h1>
            </div>

            {/* Photo (left 40%) + Bio (right 60%) */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-14">

              {/* Photo */}
              <div className="aspect-[3/4] w-full max-w-[300px] mx-auto md:max-w-full bg-stone-200 dark:bg-[#1c1c1c] rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-sans text-xs text-[#aaa] dark:text-[#888] uppercase tracking-widest">
                    [Photo]
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-sans text-xs text-white/80 tracking-tight">Hyderabad, India</p>
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center gap-5">
                <p className="font-sans text-lg md:text-xl leading-relaxed text-brand-dark dark:text-[#ddd] font-medium">
                  I design intelligent interfaces — and I build them. As a UI/UX Designer at PanTerra Networks, I led the end-to-end redesign of enterprise platforms.
                </p>
                <p className="font-sans text-sm text-[#666] dark:text-[#aaa] leading-relaxed">
                  What sets me apart: I don't just design for AI — I understand how it works underneath. Currently completing an Executive MTech in Applied AI at VNIT Nagpur.
                </p>
                <p className="font-sans text-sm text-[#666] dark:text-[#aaa] leading-relaxed">
                  My edge at the intersection of design and AI: I can read a RAG pipeline and design the error states for it, I can write a React component and critique its accessibility in the same session, and I've shipped HITL AI systems.
                </p>
                <div className="flex gap-3 flex-wrap pt-1">
                  <a
                    href="mailto:anikethvustepalle03@gmail.com"
                    className="group inline-flex items-center gap-2 bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] px-6 py-3 rounded-md font-sans text-sm font-semibold tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get in touch
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/aniketh-vustepalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border border-stone-300 dark:border-[#333] text-brand-dark dark:text-[#ccc] px-6 py-3 rounded-md font-sans text-sm font-medium tracking-tight hover:border-stone-400 dark:hover:border-[#555] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-transparent hover:bg-stone-50 dark:hover:bg-[#1a1a1a]"
                  >
                    LinkedIn
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── EXPERIENCE + EDUCATION ───────────────────────────── */}
          <div className="py-16 border-t border-stone-200 dark:border-[#222]">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              {/* Work Experience */}
              <section className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 dark:border-[#232323] bg-white/85 dark:bg-[#141414] p-6 md:p-8 shadow-[0_14px_40px_rgba(28,25,23,0.05)]">
                <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-brand-lime/20 blur-2xl pointer-events-none" aria-hidden="true" />
                <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-brand-lime shadow-[0_0_0_6px_rgba(214,243,67,0.16)] pointer-events-none" aria-hidden="true" />
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark/55 dark:text-[#aaa] mb-6">
                  Work Experience
                </p>
                <div className="flex flex-col gap-4 md:gap-5">
                  {experience.map((job, i) => (
                    <article
                      key={i}
                      className="relative rounded-2xl border border-stone-200/80 dark:border-[#262626] bg-stone-50/90 dark:bg-[#171717] px-4 py-4 md:px-5 md:py-5 shadow-[0_8px_24px_rgba(28,25,23,0.04)]"
                    >
                      <div
                        className="absolute left-4 top-4 h-3 w-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: job.color }}
                        aria-hidden="true"
                      />
                      <div className="pl-6 md:pl-7">
                        <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-4 mb-2">
                          <h3 className="font-sans text-sm font-semibold text-brand-dark dark:text-[#eee] leading-snug">
                            {job.role}
                          </h3>
                          <span className="font-sans text-[11px] text-[#666] dark:text-[#aaa] whitespace-nowrap flex-shrink-0 md:pt-0.5">
                            {job.period}
                          </span>
                        </div>
                        <p className="font-sans text-sm text-[#666] dark:text-[#888] mb-2">
                          {job.company}
                        </p>
                        <p className="font-sans text-[13px] text-[#666] dark:text-[#aaa] leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 dark:border-[#232323] bg-white/85 dark:bg-[#141414] p-6 md:p-8 shadow-[0_14px_40px_rgba(28,25,23,0.05)]">
                <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-brand/20 blur-2xl pointer-events-none" aria-hidden="true" />
                <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-brand shadow-[0_0_0_6px_rgba(197,222,73,0.16)] pointer-events-none" aria-hidden="true" />
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark/55 dark:text-[#aaa] mb-6">
                  Education
                </p>
                <div className="flex flex-col gap-4 md:gap-5">
                  {education.map((edu, i) => (
                    <article
                      key={i}
                      className="relative rounded-2xl border border-stone-200/80 dark:border-[#262626] bg-stone-50/90 dark:bg-[#171717] px-4 py-4 md:px-5 md:py-5 shadow-[0_8px_24px_rgba(28,25,23,0.04)]"
                    >
                      <div
                        className="absolute left-4 top-4 h-3 w-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: edu.color }}
                        aria-hidden="true"
                      />
                      <div className="pl-6 md:pl-7">
                        <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-4 mb-2">
                          <h3 className="font-sans text-sm font-semibold text-brand-dark dark:text-[#eee] leading-snug">
                            {edu.institution}
                          </h3>
                          <span className="font-sans text-[11px] text-[#666] dark:text-[#aaa] whitespace-nowrap flex-shrink-0 md:pt-0.5">
                            {edu.period}
                          </span>
                        </div>
                        <p className="font-sans text-sm text-[#666] dark:text-[#888] mb-1">
                          {edu.degree}
                        </p>
                        <p className="font-sans text-[11px] text-[#888] dark:text-[#aaa]">
                          {edu.location}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* ── SKILLS + TOOLS ───────────────────────────────────── */}
          <div className="py-16 border-t border-stone-200 dark:border-[#222]">

            {/* Skills */}
            <div className="mb-8">
              <p className="font-sans text-base font-semibold text-brand-dark dark:text-[#eee] mb-4">
                Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="font-sans text-sm text-brand-dark dark:text-[#ccc] border border-stone-200 dark:border-[#2a2a2a] bg-white dark:bg-[#191919] px-3 py-1.5 rounded-md hover:border-brand-lime dark:hover:border-brand-lime transition-colors duration-200 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="font-sans text-base font-semibold text-brand-dark dark:text-[#eee] mb-4">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="font-sans text-sm text-brand-dark dark:text-[#ccc] border border-stone-200 dark:border-[#2a2a2a] bg-white dark:bg-[#191919] px-3 py-1.5 rounded-md hover:border-brand-lime dark:hover:border-brand-lime transition-colors duration-200 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Résumé link */}
            <div className="mt-10">
              <a
                href="mailto:anikethvustepalle03@gmail.com?subject=Resume%20Request"
                className="inline-flex items-center gap-2 font-sans text-sm text-brand-dark dark:text-[#eee] underline underline-offset-4 decoration-stone-300 dark:decoration-[#444] hover:decoration-brand-lime hover:text-brand-lime dark:hover:text-brand-lime transition-colors duration-200"
              >
                Request resume
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default About;
