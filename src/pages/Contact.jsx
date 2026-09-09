import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Copy, Check, Clock, Sparkles, Send } from 'lucide-react';
import Footer from '../components/Footer';
import { IllustrationMessageSent } from '../components/illustrations';
import { profile } from '../data/profile';
import emailIcon from '../assets/icons/email.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';
import whatsappIcon from '../assets/icons/whatsapp.png';
import xIcon from '../assets/icons/x.png';
import mapPinIcon from '../assets/icons/map-pin.png';

// Pageclip form action URL — site key is public (visible in HTML by design)
const PAGECLIP_URL = 'https://send.pageclip.co/Eh7iDvt7Im97lJT6cl843Vhi3tR9OHOp/contact_form';

const SCOPES = [
  'AI Interface Design',
  'Design Systems',
  'Web Application',
  'Consulting & Advisory',
];

const getISTTime = () => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(new Date());
  } catch {
    return '11:40 AM';
  }
};

const Contact = ({ onNavigate }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [selectedScope, setSelectedScope] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState(getISTTime());
  const formRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getISTTime());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleScopeSelect = (scope) => {
    setSelectedScope((prev) => (prev === scope ? null : scope));
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('anikethvustepalle03@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Initialize Pageclip form listener if script is loaded
  useEffect(() => {
    if (window.Pageclip && formRef.current && status === 'idle') {
      const pageclipForm = window.Pageclip.form(formRef.current, {
        onSubmit: () => {
          setStatus('submitting');
          return true;
        },
        onResponse: (error) => {
          if (error) {
            setStatus('error');
          } else {
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setSelectedScope(null);
          }
        },
      });

      return () => {
        if (pageclipForm && typeof pageclipForm.destroy === 'function') {
          pageclipForm.destroy();
        }
      };
    }
  }, [status]);

  const handleSubmit = (e) => {
    if (!window.Pageclip) {
      e.preventDefault();
      setStatus('submitting');

      const payload = {
        ...form,
        scope: selectedScope || 'General Inquiry',
      };

      fetch(PAGECLIP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (res.ok || res.type === 'opaque') {
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setSelectedScope(null);
          } else {
            setStatus('error');
          }
        })
        .catch(() => setStatus('error'));
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Aniketh Vustepalle | Hire AI Product Designer</title>
        <meta
          name="description"
          content="Available for product design roles, enterprise SaaS consulting, and creative engineering work. Get in touch with Aniketh Vustepalle, based in Hyderabad, India."
        />
        <meta property="og:title" content="Contact Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta
          property="og:description"
          content="Available for product design roles, enterprise SaaS consulting, and creative engineering projects."
        />
        <meta property="og:url" content="https://aniketh.is-a.dev/contact" />
        <meta property="og:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Aniketh Vustepalle | AI Product Designer & Creative Developer" />
        <meta
          name="twitter:description"
          content="Available for product design roles, enterprise SaaS consulting, and creative engineering projects."
        />
        <meta name="twitter:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <link rel="canonical" href="https://aniketh.is-a.dev/contact" />
      </Helmet>

      <section className="relative min-h-screen bg-stone-50 dark:bg-[#0f0f0f] text-stone-900 dark:text-stone-100 transition-colors duration-300 overflow-hidden">
        {/* Spacious Ambient Glows (Full Canvas Breathing Room) */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-lime/10 dark:bg-brand-lime/[0.06] rounded-full blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 -right-48 w-[600px] h-[600px] bg-stone-200/40 dark:bg-[#1a1a1a]/40 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 pt-36 sm:pt-44 pb-28 md:pb-36">
          
          {/* ── EXPANSIVE EDITORIAL HEADER ── */}
          <div className="space-y-6 sm:space-y-8 mb-16 lg:mb-24">
            {/* Top Status & SLA Badges with Ample Spacing */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-lime/15 dark:bg-brand-lime/10 border border-brand-lime/35 text-xs font-mono font-medium text-brand-dark dark:text-brand-lime">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                <span>Available for New Projects &amp; Advisory</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 dark:bg-[#181818]/80 border border-stone-200/80 dark:border-[#282828] text-xs font-mono text-stone-600 dark:text-[#aaa] backdrop-blur-sm">
                <img src={mapPinIcon} alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain" aria-hidden="true" />
                <span>{profile.locationShort} · {currentTime} IST</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 dark:bg-[#181818]/80 border border-stone-200/80 dark:border-[#282828] text-xs font-mono text-stone-600 dark:text-[#aaa] backdrop-blur-sm">
                <Clock size={13} className="text-brand-dark dark:text-brand-lime" />
                <span>Response SLA: Under 24h</span>
              </div>
            </div>

            {/* Giant, Spacious Headline */}
            <h1
              className="font-sans font-black tracking-tight text-brand-dark dark:text-white leading-[0.98] max-w-5xl"
              style={{ fontSize: 'clamp(2.8rem, 6.2vw, 5.8rem)' }}
            >
              Let&apos;s build something <span className="text-stone-400 dark:text-[#777] font-serif italic font-normal">intelligent</span> together.
            </h1>

            {/* Expansive Subtitle */}
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-[#999] leading-relaxed tracking-tight max-w-3xl">
              Have a new venture, enterprise redesign, or AI workflow in mind? I design intuitive, human-centered systems and engineer them for scale.
            </p>
          </div>

          {/* ── EXPANSIVE 12-COLUMN MAIN CANVAS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* ── LEFT COLUMN (5 cols): Direct Channels, Reach & Location ── */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} className="text-brand-dark dark:text-brand-lime" />
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 dark:text-[#777]">
                    Direct Channels &amp; Networks
                  </p>
                </div>
                <p className="font-sans text-sm text-stone-500 dark:text-[#888] leading-relaxed">
                  Prefer a different channel? I&apos;m reachable on all of these for quick questions or project chats.
                </p>
              </div>

              {/* Spacious Channel Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                
                {/* Email Channel with Quick Copy */}
                <div className="group p-4 sm:p-5 rounded-2xl border border-stone-200/80 dark:border-[#242424] bg-white/90 dark:bg-[#151515]/90 hover:border-brand-dark dark:hover:border-brand-lime transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md">
                  <a
                    href="mailto:anikethvustepalle03@gmail.com"
                    className="flex items-center gap-3.5 min-w-0 flex-1"
                  >
                    <div className="w-11 h-11 rounded-xl bg-stone-100 dark:bg-[#202020] p-2.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img src={emailIcon} alt="Email" width={20} height={20} className="w-5 h-5 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-stone-400 dark:text-[#666] uppercase tracking-wider">Email</p>
                      <p className="text-sm sm:text-base font-bold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">Direct Mail</p>
                      <p className="text-xs text-stone-500 dark:text-[#888] font-mono truncate">anikethvustepalle03@gmail.com</p>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-[#222] text-stone-400 dark:text-[#666] hover:text-brand-dark dark:hover:text-brand-lime transition-all flex-shrink-0 ml-2"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-600 dark:text-brand-lime" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aniketh-vustepalle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 sm:p-5 rounded-2xl border border-stone-200/80 dark:border-[#242424] bg-white/90 dark:bg-[#151515]/90 hover:border-brand-dark dark:hover:border-brand-lime transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-stone-100 dark:bg-[#202020] p-2.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img src={linkedinIcon} alt="LinkedIn" width={20} height={20} className="w-5 h-5 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-stone-400 dark:text-[#666] uppercase tracking-wider">LinkedIn</p>
                      <p className="text-sm sm:text-base font-bold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">Connect &amp; Message</p>
                      <p className="text-xs text-stone-500 dark:text-[#888] font-mono truncate">/in/aniketh-vustepalle</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-stone-400 dark:text-[#555] group-hover:text-brand dark:group-hover:text-brand-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/aniketh703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 sm:p-5 rounded-2xl border border-stone-200/80 dark:border-[#242424] bg-white/90 dark:bg-[#151515]/90 hover:border-brand-dark dark:hover:border-brand-lime transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-stone-100 dark:bg-[#202020] p-2.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img src={githubIcon} alt="GitHub" width={20} height={20} className="w-5 h-5 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-stone-400 dark:text-[#666] uppercase tracking-wider">GitHub</p>
                      <p className="text-sm sm:text-base font-bold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">Code &amp; Repositories</p>
                      <p className="text-xs text-stone-500 dark:text-[#888] font-mono truncate">@aniketh703</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-stone-400 dark:text-[#555] group-hover:text-brand dark:group-hover:text-brand-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919311761114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 sm:p-5 rounded-2xl border border-stone-200/80 dark:border-[#242424] bg-white/90 dark:bg-[#151515]/90 hover:border-brand-dark dark:hover:border-brand-lime transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-stone-100 dark:bg-[#202020] p-2.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img src={whatsappIcon} alt="WhatsApp" width={20} height={20} className="w-5 h-5 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-stone-400 dark:text-[#666] uppercase tracking-wider">WhatsApp</p>
                      <p className="text-sm sm:text-base font-bold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">Direct Chat</p>
                      <p className="text-xs text-stone-500 dark:text-[#888] font-mono truncate">+91 93117 61114</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-stone-400 dark:text-[#555] group-hover:text-brand dark:group-hover:text-brand-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/iamanikethv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 sm:p-5 rounded-2xl border border-stone-200/80 dark:border-[#242424] bg-white/90 dark:bg-[#151515]/90 hover:border-brand-dark dark:hover:border-brand-lime transition-all duration-300 flex items-center justify-between shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-stone-100 dark:bg-[#202020] p-2.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img src={xIcon} alt="X (Twitter)" width={20} height={20} className="w-5 h-5 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-stone-400 dark:text-[#666] uppercase tracking-wider">X (Twitter)</p>
                      <p className="text-sm sm:text-base font-bold text-brand-dark dark:text-[#eee] truncate group-hover:text-brand dark:group-hover:text-brand-lime">Thoughts &amp; Updates</p>
                      <p className="text-xs text-stone-500 dark:text-[#888] font-mono truncate">@iamanikethv</p>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-stone-400 dark:text-[#555] group-hover:text-brand dark:group-hover:text-brand-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Location */}
                <div className="p-4 sm:p-5 rounded-2xl border border-stone-200/80 dark:border-[#242424] bg-white/90 dark:bg-[#151515]/90 shadow-sm flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-stone-100 dark:bg-[#202020] p-2.5 flex items-center justify-center flex-shrink-0">
                    <img src={mapPinIcon} alt="Location" width={20} height={20} className="w-5 h-5 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono text-stone-400 dark:text-[#666] uppercase tracking-wider">Base Location</p>
                    <p className="text-sm sm:text-base font-bold text-brand-dark dark:text-[#eee] truncate">{profile.location}</p>
                    <p className="text-xs text-stone-500 dark:text-[#888] font-mono">Open to Worldwide Remote</p>
                  </div>
                </div>

              </div>

              {/* Direct Navigation Links */}
              <div className="p-6 rounded-2xl bg-stone-100/70 dark:bg-[#181818]/70 border border-stone-200/70 dark:border-[#262626] space-y-3">
                <p className="font-sans text-xs font-semibold text-stone-500 dark:text-[#888] uppercase tracking-wider">
                  Looking for background &amp; skills?
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => onNavigate && onNavigate('about')}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold px-3.5 py-2 rounded-xl bg-white dark:bg-[#222] border border-stone-200 dark:border-[#333] text-brand-dark dark:text-white hover:border-brand-dark dark:hover:border-brand-lime transition-all"
                  >
                    View Interactive Resume <ArrowUpRight size={13} />
                  </button>
                  <button
                    onClick={() => onNavigate && onNavigate('projects')}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold px-3.5 py-2 rounded-xl bg-white dark:bg-[#222] border border-stone-200 dark:border-[#333] text-brand-dark dark:text-white hover:border-brand-dark dark:hover:border-brand-lime transition-all"
                  >
                    Browse {profile.projectCount} Projects <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN (7 cols): Spacious Open-Air Form ── */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl bg-white/95 dark:bg-[#151515]/95 backdrop-blur-xl border border-stone-200/90 dark:border-[#282828] p-8 sm:p-12 xl:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                
                {status === 'success' ? (
                  <div className="py-16 sm:py-24 text-center space-y-6">
                    <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-3xl bg-brand-lime/20 shadow-lg p-5">
                      <IllustrationMessageSent className="w-full [--ill-line:#0A0A0A] dark:[--ill-line:#0A0A0A] [--ill-bg:transparent] dark:[--ill-bg:transparent]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-3xl sm:text-4xl font-bold text-brand-dark dark:text-[#eee]">Message received!</h3>
                      <p className="font-sans text-base sm:text-lg text-stone-600 dark:text-[#aaa] max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out &mdash; your note has arrived directly in my inbox and I&apos;ll be in touch within 24 hours.
                      </p>
                    </div>
                    <div className="pt-6">
                      <button
                        onClick={() => setStatus('idle')}
                        className="inline-flex items-center gap-2 bg-brand-dark dark:bg-[#eee] text-white dark:text-[#111] px-7 py-3.5 rounded-2xl text-base font-semibold tracking-tight hover:bg-brand dark:hover:bg-brand-lime transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    action={PAGECLIP_URL}
                    method="post"
                    onSubmit={handleSubmit}
                    className="pageclip-form flex flex-col gap-8"
                  >
                    <div className="space-y-2">
                      <h2 className="font-sans text-2xl sm:text-3xl font-bold text-brand-dark dark:text-[#eee] tracking-tight">
                        Send a Message
                      </h2>
                      <p className="font-sans text-sm sm:text-base text-stone-500 dark:text-[#888] tracking-tight">
                        Fill out the details below and I&apos;ll get back to you promptly with thoughts and next steps.
                      </p>
                    </div>

                    {/* Interactive Scope Selection (Spacious Pill Layout) */}
                    <div className="space-y-3">
                      <label className="block font-sans text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-[#888]">
                        Project Scope (Optional)
                      </label>
                      <div className="flex flex-wrap gap-2.5 sm:gap-3">
                        {SCOPES.map((scope) => {
                          const isSelected = selectedScope === scope;
                          return (
                            <button
                              key={scope}
                              type="button"
                              onClick={() => handleScopeSelect(scope)}
                              className={`text-sm sm:text-base font-sans font-medium px-4 sm:px-5 py-2.5 rounded-xl border transition-all duration-200 ${
                                isSelected
                                  ? 'bg-brand-dark dark:bg-brand-lime text-white dark:text-brand-dark border-brand-dark dark:border-brand-lime shadow-md scale-[1.02]'
                                  : 'bg-stone-50 dark:bg-[#1c1c1c] text-stone-700 dark:text-[#ccc] border-stone-200/90 dark:border-[#2c2c2c] hover:border-brand-dark/50 dark:hover:border-stone-500 hover:bg-stone-100 dark:hover:bg-[#222]'
                              }`}
                            >
                              {scope}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Hidden scope field for Pageclip */}
                    <input type="hidden" name="scope" value={selectedScope || 'General Inquiry'} />

                    {/* Error banner */}
                    {status === 'error' && (
                      <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-2xl px-5 py-4">
                        <p className="font-sans text-sm text-red-700 dark:text-red-400">
                          Something went wrong. Please{' '}
                          <a href="mailto:anikethvustepalle03@gmail.com" className="underline font-semibold">
                            email me directly
                          </a>{' '}
                          or try again.
                        </p>
                      </div>
                    )}

                    {/* Name & Email Row (Spacious Inputs) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="contact-name"
                          className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-[#888]"
                        >
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Morgan"
                          required
                          className="w-full bg-stone-50/80 dark:bg-[#1b1b1b] border border-stone-200 dark:border-[#2e2e2e] rounded-2xl px-5 py-4 font-sans text-base text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:border-brand-dark dark:focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/20 transition-all duration-200"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="contact-email"
                          className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-[#888]"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          required
                          className="w-full bg-stone-50/80 dark:bg-[#1b1b1b] border border-stone-200 dark:border-[#2e2e2e] rounded-2xl px-5 py-4 font-sans text-base text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:border-brand-dark dark:focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Message Area (Generous Height & Room) */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="contact-message"
                          className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-[#888]"
                        >
                          Project Details &amp; Context
                        </label>
                        <span className="text-xs font-mono text-stone-400 dark:text-[#666]">
                          {form.message.length} chars
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder={
                          selectedScope
                            ? `Tell me about your ${selectedScope} goals, timeline, and vision...`
                            : 'Tell me about what you are looking to build, desired timeline, or goals...'
                        }
                        required
                        rows={6}
                        className="w-full bg-stone-50/80 dark:bg-[#1b1b1b] border border-stone-200 dark:border-[#2e2e2e] rounded-2xl px-5 py-4 font-sans text-base text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:border-brand-dark dark:focus:border-brand-lime focus:ring-4 focus:ring-brand-lime/20 transition-all duration-200 resize-none leading-relaxed"
                      />
                    </div>

                    {/* Big Confident Submit CTA */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="pageclip-form__submit w-full bg-brand-lime text-brand-dark font-sans text-base sm:text-lg font-bold tracking-tight py-4 sm:py-5 px-8 rounded-2xl transition-all duration-300 ease-out hover:bg-white hover:scale-[1.01] active:scale-[0.99] shadow-xl hover:shadow-2xl shadow-brand-lime/20 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-3"
                    >
                      <Send size={18} className={status === 'submitting' ? 'animate-spin' : ''} />
                      <span>{status === 'submitting' ? 'Sending note...' : 'Send Message'}</span>
                      <ArrowUpRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Contact;
