import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';
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

const CHANNELS = [
  {
    key: 'email',
    label: 'Email',
    icon: emailIcon,
    description: 'Direct email',
    handle: 'anikethvustepalle03@gmail.com',
    href: 'mailto:anikethvustepalle03@gmail.com',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: linkedinIcon,
    description: 'Connect & message',
    handle: '/in/aniketh-vustepalle',
    href: 'https://www.linkedin.com/in/aniketh-vustepalle/',
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: githubIcon,
    description: 'Code & repositories',
    handle: '@aniketh703',
    href: 'https://github.com/aniketh703',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: whatsappIcon,
    description: 'Direct chat',
    handle: '+91 93117 61114',
    href: 'https://wa.me/919311761114',
  },
  {
    key: 'x',
    label: 'X',
    icon: xIcon,
    description: 'Thoughts & updates',
    handle: '@iamanikethv',
    href: 'https://x.com/iamanikethv',
  },
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

      <section className="bg-stone-50 dark:bg-[#0f0f0f] text-stone-900 dark:text-stone-100 transition-colors duration-300">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 pt-28 sm:pt-36 md:pt-40 pb-24 md:pb-32">

          {/* ── HEADER ── */}
          <div className="mb-16 md:mb-24">

            <h1 className="font-sans font-black tracking-tight leading-[0.95] text-brand-dark dark:text-white mb-6 sm:mb-8"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)' }}
            >
              Let&apos;s build something<br />
              <span className="font-serif italic font-normal">worth talking about.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-stone-600 dark:text-[#999] leading-relaxed mb-6 sm:mb-8">
              Have a product idea, an AI workflow, or a design problem? Tell me what you&apos;re working on.
            </p>

            {/* <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-[#888]">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" aria-hidden="true" />
                Available for projects
              </span>
              <span className="text-stone-300 dark:text-[#444]">&middot;</span>
              <span>{profile.locationShort} &middot; {currentTime} IST</span>
              <span className="text-stone-300 dark:text-[#444]">&middot;</span>
              <span>Usually replies within 24h</span>
            </div> */}
          </div>

          {/* ── MAIN CONTACT AREA ── */}
          <div className="border-t border-stone-200 dark:border-[#1f1f1f] pt-14 md:pt-20 grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">

            {/* LEFT (~60%): form / success */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="slide-in-from-bottom-12 max-w-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <IllustrationMessageSent className="w-10 h-10 flex-shrink-0 [--ill-line:#0A0A0A] dark:[--ill-line:#EDEDED] [--ill-bg:transparent] dark:[--ill-bg:transparent]" />
                    <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark dark:text-[#eee]">
                      Message sent
                    </h2>
                  </div>
                  <p className="font-sans text-base text-stone-600 dark:text-[#aaa] leading-relaxed mb-8">
                    Thanks for reaching out. Your note is on its way and I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 border border-stone-300 dark:border-[#333] text-brand-dark dark:text-[#eee] px-6 py-3 rounded-full font-sans text-sm font-semibold tracking-tight hover:border-brand-dark dark:hover:border-brand-lime hover:text-brand dark:hover:text-brand-lime transition-all duration-200"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-[#777] mb-3">
                      Tell me a little about what you&apos;re building.
                    </h2>
                  </div>

                  <form
                    ref={formRef}
                    action={PAGECLIP_URL}
                    method="post"
                    onSubmit={handleSubmit}
                    className="pageclip-form flex flex-col gap-8 max-w-xl"
                  >
                    {/* Error banner */}
                    {status === 'error' && (
                      <div className="border-l-2 border-red-400 dark:border-red-500 pl-4">
                        <p className="font-sans text-sm text-red-700 dark:text-red-400">
                          Something went wrong. Please{' '}
                          <a href="mailto:anikethvustepalle03@gmail.com" className="underline font-semibold">
                            email me directly
                          </a>{' '}
                          or try again.
                        </p>
                      </div>
                    )}

                    {/* Field 01 — Name */}
                    <div className="flex flex-col gap-2.5">
                      <label
                        htmlFor="contact-name"
                        className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 dark:text-[#666]"
                      >
                        Your name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-transparent border-0 border-b-2 border-stone-200 dark:border-[#2a2a2a] rounded-none px-0 py-3 font-sans text-lg text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:ring-0 focus:border-brand-dark dark:focus:border-brand-lime transition-colors duration-200"
                      />
                    </div>

                    {/* Field 02 — Email */}
                    <div className="flex flex-col gap-2.5">
                      <label
                        htmlFor="contact-email"
                        className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 dark:text-[#666]"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full bg-transparent border-0 border-b-2 border-stone-200 dark:border-[#2a2a2a] rounded-none px-0 py-3 font-sans text-lg text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:ring-0 focus:border-brand-dark dark:focus:border-brand-lime transition-colors duration-200"
                      />
                    </div>

                    {/* Field 03 — Scope */}
                    <div className="flex flex-col gap-3">
                      <label className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 dark:text-[#666]">
                        What are we building?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SCOPES.map((scope) => {
                          const isSelected = selectedScope === scope;
                          return (
                            <button
                              key={scope}
                              type="button"
                              onClick={() => handleScopeSelect(scope)}
                              className={`text-sm font-sans font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                                isSelected
                                  ? 'bg-brand-dark dark:bg-brand-lime text-white dark:text-brand-dark border-brand-dark dark:border-brand-lime shadow-sm'
                                  : 'bg-transparent text-stone-500 dark:text-[#999] border-stone-300 dark:border-[#333] hover:border-stone-400 dark:hover:border-[#555] hover:text-stone-700 dark:hover:text-[#ccc]'
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

                    {/* Field 04 — Message */}
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="contact-message"
                          className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400 dark:text-[#666]"
                        >
                          Tell me more
                        </label>
                        <span className="font-mono text-[11px] text-stone-400 dark:text-[#666]">
                          {form.message.length} chars
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about the problem, product, timeline, or idea…"
                        required
                        rows={5}
                        className="w-full bg-transparent border-0 border-b-2 border-stone-200 dark:border-[#2a2a2a] rounded-none px-0 py-3 font-sans text-base text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:ring-0 focus:border-brand-dark dark:focus:border-brand-lime transition-colors duration-200 resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="pageclip-form__submit w-full bg-brand-lime text-brand-dark font-sans text-base font-bold tracking-tight py-4 sm:py-5 rounded-full transition-all duration-300 ease-out hover:bg-white hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2.5 mt-2"
                    >
                      <Send size={16} className={status === 'submitting' ? 'animate-spin' : ''} />
                      <span>{status === 'submitting' ? 'Sending note...' : 'Send Message'}</span>
                      {status !== 'submitting' && <ArrowUpRight size={16} />}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* RIGHT (~40%): direct channels */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 dark:text-[#777] mb-3">
                  If forms aren&apos;t your thing, pick a channel.
                </h2>
              </div>

              <div>
                {CHANNELS.map((channel) => (
                  <a
                    key={channel.key}
                    href={channel.href}
                    target={channel.key === 'email' ? undefined : '_blank'}
                    rel={channel.key === 'email' ? undefined : 'noopener noreferrer'}
                    className="group block py-5 border-b border-stone-200 dark:border-[#242424] first:pt-0 hover:border-stone-300 dark:hover:border-[#3a3a3a] transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between gap-3 min-h-[20px]">
                      <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wide text-brand-dark dark:text-[#eee] group-hover:text-brand dark:group-hover:text-brand-lime transition-colors duration-200">
                        <img src={channel.icon} alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                        {channel.label}
                      </span>
                      {channel.key === 'email' ? (
                        <button
                          onClick={handleCopyEmail}
                          title="Copy email address"
                          className="relative z-10 p-1.5 rounded-full text-stone-400 dark:text-[#666] hover:text-brand-dark dark:hover:text-brand-lime hover:bg-stone-100 dark:hover:bg-[#1e1e1e] transition-all flex-shrink-0"
                        >
                          {copiedEmail ? <Check size={14} className="text-emerald-600 dark:text-brand-lime" /> : <Copy size={14} />}
                        </button>
                      ) : (
                        <ArrowUpRight
                          size={15}
                          className="text-stone-300 dark:text-[#444] group-hover:text-brand dark:group-hover:text-brand-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                        />
                      )}
                    </div>
                    <p className="font-sans text-sm text-stone-500 dark:text-[#888] mt-1.5">{channel.description}</p>
                    <p className="font-mono text-xs text-stone-400 dark:text-[#666] mt-0.5 truncate">{channel.handle}</p>
                  </a>
                ))}

                {/* Location — informational, not a link */}
                <div className="py-5">
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wide text-brand-dark dark:text-[#eee]">
                    <img src={mapPinIcon} alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain opacity-50" aria-hidden="true" />
                    Location
                  </span>
                  <p className="font-sans text-sm text-stone-500 dark:text-[#888] mt-1.5">{profile.location}</p>
                  <p className="font-mono text-xs text-stone-400 dark:text-[#666] mt-0.5">Open to worldwide remote</p>
                </div>
              </div>

              {onNavigate && (
                <p className="font-sans text-xs text-stone-400 dark:text-[#666] mt-6">
                  Want more context?{' '}
                  <button onClick={() => onNavigate('about')} className="underline hover:text-brand-dark dark:hover:text-brand-lime transition-colors">About</button>
                  {' · '}
                  <button onClick={() => onNavigate('projects')} className="underline hover:text-brand-dark dark:hover:text-brand-lime transition-colors">{profile.projectCount} Projects</button>
                </p>
              )}
            </div>
          </div>

          {/* ── CLOSING CTA ── */}
          <div className="mt-16 md:mt-24 pt-10 border-t border-stone-200 dark:border-[#1f1f1f] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="font-sans text-lg font-semibold text-brand-dark dark:text-[#eee]">Not sure where to start?</p>
              <p className="font-sans text-sm text-stone-500 dark:text-[#888] mt-1">That&apos;s completely fine. Just say hello.</p>
            </div>
            <a
              href="mailto:anikethvustepalle03@gmail.com"
              className="group inline-flex items-center gap-2 border border-stone-300 dark:border-[#333] text-brand-dark dark:text-[#eee] px-6 py-3 rounded-full font-sans text-sm font-semibold tracking-tight hover:border-brand-dark dark:hover:border-brand-lime hover:text-brand dark:hover:text-brand-lime transition-all duration-200 flex-shrink-0"
            >
              Say hello
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Contact;
