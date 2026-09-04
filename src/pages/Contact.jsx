import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, Linkedin, Mail } from 'lucide-react';
import Footer from '../components/Footer';
import { LinkPreview } from '../components/ui/link-preview';

// Pageclip form action URL — site key is public (visible in HTML by design)
const PAGECLIP_URL = 'https://send.pageclip.co/Eh7iDvt7Im97lJT6cl843Vhi3tR9OHOp/contact_form';
const PAGECLIP_KEY = 'Eh7iDvt7Im97lJT6cl843Vhi3tR9OHOp';

const Contact = ({ onNavigate }) => {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const formRef = useRef(null);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // Initialize Pageclip form listener if script is loaded
  useEffect(() => {
    if (window.Pageclip && formRef.current && status === 'idle') {
      const pageclipForm = window.Pageclip.form(formRef.current, {
        onSubmit: () => {
          setStatus('submitting');
          return true;
        },
        onResponse: (error, response) => {
          if (error) {
            setStatus('error');
          } else {
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
          }
        }
      });

      return () => {
        if (pageclipForm && typeof pageclipForm.destroy === 'function') {
          pageclipForm.destroy();
        }
      };
    }
  }, [status]);

  const handleSubmit = (e) => {
    // If Pageclip is active, its attached form listener handles it automatically.
    // If Pageclip is not loaded, use fallback fetch:
    if (!window.Pageclip) {
      e.preventDefault();
      setStatus('submitting');

      fetch(PAGECLIP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      })
      .then((res) => {
        if (res.ok || res.type === 'opaque') {
          setStatus('success');
          setForm({ name: '', email: '', message: '' });
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
        <title>Hire Aniketh Vustepalle | AI Product Designer in Hyderabad</title>
        <meta name="description" content="Get in touch with Aniketh Vustepalle — AI Product Designer and Creative Developer based in Hyderabad, India. Available for freelance, full-time, and consulting roles." />
        <meta property="og:title" content="Contact | Aniketh Vustepalle" />
        <meta property="og:description" content="Reach out via the contact form or directly at anikethvustepalle03@gmail.com." />
        <meta property="og:url" content="https://aniketh.is-a.dev/contact" />
        <meta property="og:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Aniketh Vustepalle" />
        <meta name="twitter:description" content="Reach out via the contact form or directly at anikethvustepalle03@gmail.com." />
        <meta name="twitter:image" content="https://aniketh.is-a.dev/og-image.jpg" />
        <link rel="canonical" href="https://aniketh.is-a.dev/contact" />
      </Helmet>
      <section className="min-h-screen bg-stone-50 dark:bg-[#111]">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-6 md:px-10 xl:px-12 2xl:px-16 pt-32 pb-20">

          {/* Heading */}
          <h1
            className="font-sans font-bold tracking-tight text-brand-dark dark:text-[#eee] mb-12"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            Contact me
          </h1>

          {/* Email + Social row */}
          <div className="flex flex-col sm:flex-row gap-10 mb-14">
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa] mb-2">Email</p>
              <a
                href="mailto:anikethvustepalle03@gmail.com"
                className="font-sans text-sm font-medium text-brand-dark dark:text-[#eee] hover:text-brand dark:hover:text-brand-lime transition-colors duration-200 tracking-tight"
              >
                anikethvustepalle03@gmail.com
              </a>
            </div>
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa] mb-2">Social</p>
              <div className="flex items-center gap-5">
                <LinkPreview
                  url="https://github.com/aniketh703"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 dark:border-[#2a2a2a] text-brand-dark dark:text-[#aaa] hover:text-brand dark:hover:text-brand-lime hover:border-brand dark:hover:border-brand-lime transition-all duration-300 hover:scale-110"
                >
                  <Github size={18} strokeWidth={1.6} />
                </LinkPreview>
                <LinkPreview
                  url="https://www.linkedin.com/in/aniketh-vustepalle/"
                  isStatic
                  imageSrc={`${import.meta.env.BASE_URL}linkedin-preview.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 dark:border-[#2a2a2a] text-brand-dark dark:text-[#aaa] hover:text-brand dark:hover:text-brand-lime hover:border-brand dark:hover:border-brand-lime transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={18} strokeWidth={1.6} />
                </LinkPreview>
                <LinkPreview
                  url="https://x.com/iamanikethv"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 dark:border-[#2a2a2a] text-brand-dark dark:text-[#aaa] hover:text-brand dark:hover:text-brand-lime hover:border-brand dark:hover:border-brand-lime transition-all duration-300 hover:scale-110"
                >
                  <span className="text-[18px] font-bold leading-none">𝕏</span>
                </LinkPreview>
                <a
                  href="mailto:anikethvustepalle03@gmail.com"
                  aria-label="Email"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 dark:border-[#2a2a2a] text-brand-dark dark:text-[#aaa] hover:text-brand dark:hover:text-brand-lime hover:border-brand dark:hover:border-brand-lime transition-all duration-300 hover:scale-110"
                >
                  <Mail size={18} strokeWidth={1.6} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-white dark:bg-[#161616] border border-stone-200 dark:border-[#2a2a2a] rounded-xl p-10 text-center">
              <p className="font-sans text-2xl font-bold text-brand-dark dark:text-[#eee] mb-2">Message received!</p>
              <p className="font-sans text-sm text-[#888] dark:text-[#aaa]">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 font-sans text-sm text-[#888] underline underline-offset-2 hover:text-brand-dark dark:hover:text-[#eee] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              action={PAGECLIP_URL}
              method="post"
              onSubmit={handleSubmit}
              className="pageclip-form flex flex-col gap-5"
            >
              {/* Error banner */}
              {status === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3">
                  <p className="font-sans text-sm text-red-700 dark:text-red-400">
                    Something went wrong. Please{' '}
                    <a href="mailto:anikethvustepalle03@gmail.com" className="underline">
                      email me directly
                    </a>{' '}or try again.
                  </p>
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-white dark:bg-[#161616] border border-stone-200 dark:border-[#2a2a2a] rounded-lg px-4 py-3.5 font-sans text-sm text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/30 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  required
                  className="w-full bg-white dark:bg-[#161616] border border-stone-200 dark:border-[#2a2a2a] rounded-lg px-4 py-3.5 font-sans text-sm text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/30 transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#666] dark:text-[#aaa]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  rows={6}
                  className="w-full bg-white dark:bg-[#161616] border border-stone-200 dark:border-[#2a2a2a] rounded-lg px-4 py-3.5 font-sans text-sm text-brand-dark dark:text-[#eee] placeholder-stone-400 dark:placeholder-[#555] outline-none focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/30 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="pageclip-form__submit w-full bg-brand-lime text-brand-dark font-sans text-sm font-semibold tracking-tight py-4 rounded-lg transition-all duration-300 ease-out hover:bg-white hover:scale-[1.01] active:scale-[0.99] shadow-md hover:shadow-xl shadow-brand-lime/10 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-md"
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send message'}</span>
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Contact;
