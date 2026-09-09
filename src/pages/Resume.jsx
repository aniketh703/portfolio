import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';
import { Timeline } from '@/components/ui/timeline';
import figmaIcon from '../assets/icons/figma.png';
import vscodeIcon from '../assets/icons/vscode.png';
import gitIcon from '../assets/icons/git.png';
import githubIcon from '../assets/icons/github.png';
import awsIcon from '../assets/icons/aws.png';
import gcloudIcon from '../assets/icons/google-cloud.png';
import adobeIcon from '../assets/icons/adobe.png';
import reactIcon from '../assets/icons/react.png';
import tsIcon from '../assets/icons/typescript.png';
import nextjsIcon from '../assets/icons/nextjs.png';
import pythonIcon from '../assets/icons/python.png';
import tailwindIcon from '../assets/icons/tailwind.png';
import pytorchIcon from '../assets/icons/pytorch.png';
import dockerIcon from '../assets/icons/docker.png';
import xIcon from '../assets/icons/x.png';
import emailIcon from '../assets/icons/email.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import whatsappIcon from '../assets/icons/whatsapp.png';
import briefcaseIcon from '../assets/icons/briefcase.png';
import graduationIcon from '../assets/icons/graduation.png';
import aiIcon from '../assets/icons/ai.png';
import mapPinIcon from '../assets/icons/map-pin.png';
import { profile, skills } from '../data/profile';

const experience = [
  {
    role: 'UI/UX Designer',
    company: 'PanTerra Networks',
    period: 'Aug 2026 – Present',
    description: 'Promoted to UI/UX Designer. Leading end-to-end design for core enterprise platform products, driving agentic AI workflows, responsive design systems, and Human-in-the-Loop (HITL) interfaces.',
    color: '#D6F343',
    tag: 'Work',
    skills: ['HITL AI Systems', 'Enterprise SaaS', 'Agentic Workflows', 'Design Systems', 'Figma'],
  },
  {
    role: 'Associate - UI/UX Designer',
    company: 'PanTerra Networks',
    period: 'Nov 2025 – Aug 2026',
    description: 'Prompt Engineering and AI Product Design. Designing responsive interfaces, leading enterprise platform redesigns, and collaborating with cross-functional AI/ML engineering teams.',
    color: '#4A90E2',
    tag: 'Work',
    skills: ['Prompt Engineering', 'Responsive Design', 'Enterprise UI', 'Design Systems'],
  },
  {
    role: 'User Experience Designer (Apprenticeship)',
    company: 'PanTerra Networks',
    period: 'May 2025 – Nov 2025',
    description: 'Focused on designing responsive interfaces and improving user experience across digital platforms. Collaborated with cross-functional teams to deliver user-centered solutions.',
    color: '#059669',
    tag: 'Work',
    skills: ['UX Research', 'Interface Design', 'Prototyping', 'Design Systems'],
  },
  {
    role: 'Data Acquisition and Tools Development Intern',
    company: 'Q-DITS',
    period: 'Sep 2024 – Dec 2024',
    description: 'Redesigned the company website, analyzed large data sets for stock market analysis, developed a GUI for syncing stock data, and worked on PDF generation projects.',
    color: '#FF6B35',
    tag: 'Work',
    skills: ['Python GUI', 'Stock Market Analytics', 'Web Redesign', 'PDF Automation'],
  },
  {
    role: 'UI/UX Designer Intern',
    company: 'InternPixel',
    period: 'Feb 2024 – Mar 2024',
    description: 'Collaborated with design and development teams to create visually appealing and user-friendly interfaces. Utilized Figma extensively for prototyping.',
    color: '#D6F343',
    tag: 'Work',
    skills: ['Figma Prototyping', 'User Flows', 'Component Libraries'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Bharat Intern',
    period: 'Sep 2023 – Oct 2023',
    description: 'Developed and maintained web applications utilizing HTML, CSS, and JavaScript. Successfully delivered 3 projects meeting all deadlines.',
    color: '#7C3AED',
    tag: 'Work',
    skills: ['HTML5/CSS3', 'JavaScript', 'Responsive Web Design'],
  }
];

const education = [
  {
    degree: 'Executive MTech in Applied AI',
    institution: 'VNIT Nagpur',
    period: 'Present',
    location: 'Nagpur, MH',
    description: 'Specializing in Applied AI systems, neural architectures, deep learning, and advanced AI product engineering to bridge deep technical machine learning with intuitive user experiences.',
    color: '#4A90E2',
    tag: 'Education',
    skills: ['Applied AI', 'Deep Learning', 'Neural Architectures', 'Python'],
  },
  {
    degree: 'B.E., Computer Science',
    institution: 'Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya',
    period: 'Dec 2020 – Jul 2024',
    location: 'Kancheepuram, TN',
    description: 'Graduated with a comprehensive computer science curriculum encompassing software engineering, algorithms, data structures, and front-end architectures.',
    color: '#D6F343',
    tag: 'Education',
    skills: ['Software Engineering', 'Data Structures & Algorithms', 'Web Development', 'HCI'],
  },
];

function TimelineCard({ item, badgeText, badgeClass, featured = false }) {
  const isEducation = item.tag === 'Education';
  return (
    <article
      className={`group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] flex flex-col justify-between ${
        featured
          ? 'border-brand-lime/50 bg-gradient-to-br from-brand-lime/[0.08] via-stone-50/90 to-stone-50/90 dark:from-brand-lime/[0.08] dark:via-[#171717] dark:to-[#141414] shadow-[0_8px_28px_rgba(214,243,67,0.08)]'
          : isEducation
          ? 'border-blue-500/20 dark:border-blue-400/20 bg-blue-50/40 dark:bg-[#121622] shadow-[0_4px_20px_rgba(14,165,233,0.03)]'
          : 'border-stone-200/90 dark:border-[#262626] bg-stone-50/90 dark:bg-[#171717] shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-tight ${badgeClass}`}
          >
            <img
              src={isEducation ? graduationIcon : briefcaseIcon}
              alt=""
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain flex-shrink-0"
              aria-hidden="true"
            />
            {badgeText}
          </span>
          <span className="font-sans text-xs font-medium text-[#777] dark:text-[#999]">
            {item.period}{item.location ? ` • ${item.location}` : ''}
          </span>
        </div>

        <h4 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-brand-dark dark:text-[#f0f0f0] group-hover:text-black dark:group-hover:text-white transition-colors">
          {item.role || item.degree}
        </h4>

        <p
          className={`font-sans text-sm font-semibold mt-0.5 mb-3 ${
            isEducation
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-brand-muted dark:text-[#aaa]'
          }`}
        >
          {item.company || item.institution}
        </p>

        <p className="font-sans text-sm text-[#555] dark:text-[#aaa] leading-relaxed">
          {item.description}
        </p>
      </div>

      {item.skills && (
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-stone-200/60 dark:border-[#262626]">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-sans px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-[#1e1e1e] text-[#555] dark:text-[#bbb] border border-stone-200/70 dark:border-[#2a2a2a]"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

const timelineData = [
  {
    title: "2026",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 w-full">
        <TimelineCard
          item={experience[0]}
          badgeText="Work • Promotion"
          badgeClass="bg-brand-lime/25 text-brand-dark dark:text-brand-lime border border-brand-lime/50 font-medium"
          featured={true}
        />
        <TimelineCard
          item={education[0]}
          badgeText="Education • Degree"
          badgeClass="bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30 font-medium"
        />
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 w-full">
        <TimelineCard
          item={experience[1]}
          badgeText="Work"
          badgeClass="bg-brand-lime/20 text-brand-dark dark:text-brand-lime border border-brand-lime/40"
        />
        <TimelineCard
          item={experience[2]}
          badgeText="Work • Apprenticeship"
          badgeClass="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
        />
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 w-full">
        <TimelineCard
          item={experience[3]}
          badgeText="Work • Internship"
          badgeClass="bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
        />
        <TimelineCard
          item={education[1]}
          badgeText="Education • Graduation"
          badgeClass="bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30"
        />
        <div className="lg:col-span-2">
          <TimelineCard
            item={experience[4]}
            badgeText="Work • Internship"
            badgeClass="bg-brand-lime/20 text-brand-dark dark:text-brand-lime border border-brand-lime/40"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="grid grid-cols-1 gap-4 md:gap-5 w-full">
        <TimelineCard
          item={experience[5]}
          badgeText="Work • Internship"
          badgeClass="bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30"
        />
      </div>
    ),
  },
];

const toolsData = [
  { name: 'React', icon: reactIcon, category: 'Engineering' },
  { name: 'TypeScript', icon: tsIcon, category: 'Engineering' },
  { name: 'Python', icon: pythonIcon, category: 'Engineering & ML' },
  { name: 'Next.js', icon: nextjsIcon, category: 'Engineering' },
  { name: 'Tailwind CSS', icon: tailwindIcon, category: 'Engineering' },
  { name: 'PyTorch', icon: pytorchIcon, category: 'AI & Deep Learning' },
  { name: 'Docker', icon: dockerIcon, category: 'DevOps & Containers' },
  { name: 'Git', icon: gitIcon, category: 'Version Control' },
  { name: 'Google Cloud', icon: gcloudIcon, category: 'Cloud Infrastructure' },
  { name: 'AWS', icon: awsIcon, category: 'Cloud Infrastructure' },
  { name: 'Figma', icon: figmaIcon, category: 'Design Systems' },
  { name: 'GitHub', icon: githubIcon, category: 'Platform & CI/CD' },
  { name: 'VS Code', icon: vscodeIcon, category: 'Editor & Tooling' },
  { name: 'Adobe Suite', icon: adobeIcon, category: 'Creative Production' },
  { name: 'AI & LLMs', icon: aiIcon, category: 'Applied Intelligence' },
];

const About = ({ onNavigate }) => {
  return (
    <>
      <Helmet>
        <title>About Aniketh Vustepalle | AI Product Designer &amp; Creative Developer</title>
        <meta name="description" content="About Aniketh Vustepalle — AI Product Designer and Creative Developer based in Hyderabad, India. Designing enterprise SaaS, HITL AI systems, and building full-stack products." />
        <meta property="og:title" content="About Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta property="og:description" content="AI Product Designer & Creative Developer at PanTerra Networks — enterprise SaaS, HITL AI systems, React, Figma, Python." />
        <meta property="og:url" content="https://aniketh.is-a.dev/about" />
        <meta property="og:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta name="twitter:description" content="AI Product Designer and Creative Developer — PanTerra Networks, Q-DITS. Designing enterprise SaaS and AI-driven systems." />
        <meta name="twitter:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <link rel="canonical" href="https://aniketh.is-a.dev/about" />
      </Helmet>

      <section className="min-h-screen bg-stone-50 dark:bg-[#111]">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16">

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
                  <img
                    src={`${import.meta.env.BASE_URL}IMG_20221223_123147.jpg`}
                    alt="Aniketh Vustepalle"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-sans text-xs text-white/80 tracking-tight">{profile.location}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center gap-5">
                <p className="font-sans text-lg md:text-xl leading-relaxed text-brand-dark dark:text-[#ddd] font-medium">
                  {`I started in computer science and ended up designing the interfaces engineers actually want to ship. Today I'm ${profile.jobTitle} at ${profile.employer}, leading end-to-end design for enterprise SaaS and AI-driven platforms.`}
                </p>
                <div className="p-4 rounded-xl bg-brand-lime/10 dark:bg-brand-lime/5 border border-brand-lime/30 flex items-start gap-3 my-1">
                  <img src={aiIcon} alt="" width={20} height={20} className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-sans text-xs md:text-sm text-brand-dark dark:text-[#ddd] leading-relaxed">
                    <strong className="font-semibold text-brand-dark dark:text-brand-lime">Applied AI Specialization:</strong> Completing an Executive MTech in Applied AI at VNIT Nagpur &mdash; connecting foundation models and HITL systems with human product ergonomics.
                  </p>
                </div>
                <p className="font-sans text-sm text-[#666] dark:text-[#aaa] leading-relaxed">
                  My edge at the intersection of design and engineering: I can inspect a RAG pipeline and design the error states for it, build a production React component with accessible markup in the same sprint, and ship human-in-the-loop (HITL) workflows that enterprise teams trust.
                </p>
                <div className="flex gap-3 flex-wrap pt-1">
                  <button
                    onClick={() => onNavigate && onNavigate('contact')}
                    className="group inline-flex items-center gap-2 bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] px-6 py-3 rounded-md font-sans text-sm font-semibold tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get in touch
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <a
                    href="https://www.linkedin.com/in/aniketh-vustepalle/"
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

          {/* ── EXPERIENCE + EDUCATION TIMELINE ──────────────────── */}
          <div className="py-12 border-t border-stone-200 dark:border-[#222]">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-stone-200/80 dark:border-[#232323] bg-white/70 dark:bg-[#141414] p-3 sm:p-5 md:p-8 lg:p-10 shadow-[0_14px_40px_rgba(28,25,23,0.05)]">
              <Timeline
                data={timelineData}
                title="Experience & Education"
                description="My journey in AI product design, Human-in-the-Loop systems, and computer science engineering."
                className="bg-transparent dark:bg-transparent !px-0"
              />
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
                    className="font-sans text-sm text-brand-dark dark:text-[#ccc] border border-stone-200 dark:border-[#2a2a2a] bg-white dark:bg-[#191919] px-3 py-1.5 rounded-md hover:border-brand-lime dark:hover:border-brand-lime transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="font-sans text-base font-semibold text-brand-dark dark:text-[#eee] mb-4">
                Tools &amp; Technologies
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {toolsData.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-stone-200/80 dark:border-[#262626] bg-white dark:bg-[#181818] hover:border-brand-lime dark:hover:border-brand-lime transition-all duration-300 hover:scale-[1.02] shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-stone-50 dark:bg-[#202020] p-1.5 flex items-center justify-center flex-shrink-0 border border-stone-100 dark:border-[#2a2a2a]">
                      <img src={tool.icon} alt={tool.name} width={20} height={20} className="w-5 h-5 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-sans text-sm font-semibold text-brand-dark dark:text-[#eee] tracking-tight truncate group-hover:text-brand dark:group-hover:text-brand-lime transition-colors duration-200">
                        {tool.name}
                      </p>
                      <p className="font-sans text-[10px] text-stone-400 dark:text-[#777] uppercase tracking-wider">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Social Communication Channels */}
            <div className="mt-12 pt-8 border-t border-stone-200 dark:border-[#262626]">
              <p className="font-sans text-base font-semibold text-brand-dark dark:text-[#eee] mb-4">
                Communication &amp; Social Channels
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <a
                  href="mailto:anikethvustepalle03@gmail.com"
                  className="group p-3 rounded-xl border border-stone-200/80 dark:border-[#262626] bg-white dark:bg-[#181818] hover:border-brand-lime transition-all duration-200 flex items-center gap-2.5 shadow-sm"
                >
                  <div className="w-7 h-7 rounded-lg bg-stone-50 dark:bg-[#202020] p-1 flex items-center justify-center flex-shrink-0">
                    <img src={emailIcon} alt="Email" width={16} height={16} className="w-4 h-4 object-contain" />
                  </div>
                  <span className="font-sans text-xs font-semibold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">Direct Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/aniketh-vustepalle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl border border-stone-200/80 dark:border-[#262626] bg-white dark:bg-[#181818] hover:border-brand-lime transition-all duration-200 flex items-center gap-2.5 shadow-sm"
                >
                  <div className="w-7 h-7 rounded-lg bg-stone-50 dark:bg-[#202020] p-1 flex items-center justify-center flex-shrink-0">
                    <img src={linkedinIcon} alt="LinkedIn" width={16} height={16} className="w-4 h-4 object-contain" />
                  </div>
                  <span className="font-sans text-xs font-semibold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">LinkedIn</span>
                </a>
                <a
                  href="https://x.com/iamanikethv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl border border-stone-200/80 dark:border-[#262626] bg-white dark:bg-[#181818] hover:border-brand-lime transition-all duration-200 flex items-center gap-2.5 shadow-sm"
                >
                  <div className="w-7 h-7 rounded-lg bg-stone-50 dark:bg-[#202020] p-1 flex items-center justify-center flex-shrink-0">
                    <img src={xIcon} alt="X (Twitter)" width={16} height={16} className="w-4 h-4 object-contain" />
                  </div>
                  <span className="font-sans text-xs font-semibold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">X (Twitter)</span>
                </a>
                <a
                  href="https://wa.me/919311761114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl border border-stone-200/80 dark:border-[#262626] bg-white dark:bg-[#181818] hover:border-brand-lime transition-all duration-200 flex items-center gap-2.5 shadow-sm"
                >
                  <div className="w-7 h-7 rounded-lg bg-stone-50 dark:bg-[#202020] p-1 flex items-center justify-center flex-shrink-0">
                    <img src={whatsappIcon} alt="WhatsApp" width={16} height={16} className="w-4 h-4 object-contain" />
                  </div>
                  <span className="font-sans text-xs font-semibold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">WhatsApp</span>
                </a>
                <div className="p-3 rounded-xl border border-stone-200/80 dark:border-[#262626] bg-white dark:bg-[#181818] flex items-center gap-2.5 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-stone-50 dark:bg-[#202020] p-1 flex items-center justify-center flex-shrink-0">
                    <img src={mapPinIcon} alt="Location" width={16} height={16} className="w-4 h-4 object-contain" />
                  </div>
                  <span className="font-sans text-xs font-semibold text-brand-dark dark:text-[#eee] truncate">{profile.locationShort}</span>
                </div>
              </div>
            </div>

            {/* Résumé link */}
            <div className="mt-8">
              <a
                href="mailto:anikethvustepalle03@gmail.com?subject=Resume%20Request"
                className="inline-flex items-center gap-2 font-sans text-sm text-brand-dark dark:text-[#eee] underline underline-offset-4 decoration-stone-300 dark:decoration-[#444] hover:decoration-brand-dark hover:text-brand-dark dark:hover:decoration-brand-lime dark:hover:text-brand-lime transition-colors duration-200"
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
