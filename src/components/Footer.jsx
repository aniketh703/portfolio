import React from 'react';
import DrawUnderline from './ui/DrawUnderline';

const FOOTER_LINK_CLASS = 'font-sans text-sm text-[#999] hover:text-white transition-colors duration-200 tracking-tight text-left';

const Footer = ({ onNavigate }) => (
  <footer className="w-full bg-brand-dark dark:bg-[#0a0a0a] border-t border-[#1a1a1a]">
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16">

        {/* LEFT: AV monogram + tagline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="font-sans text-2xl font-black text-white tracking-tight leading-none select-none">
              AV
            </span>
          </div>
          <p className="font-sans text-sm text-[#888] tracking-tight leading-relaxed max-w-[200px]">
            UI/UX Designer &amp; Creative Developer based in Hyderabad, India.
          </p>
        </div>

        {/* RIGHT: 3 link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">

          {/* Nav */}
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#888] mb-4">Nav</p>
            <div className="flex flex-col gap-2">
              {onNavigate && (
                <>
                  <DrawUnderline onClick={() => onNavigate('index')} className={FOOTER_LINK_CLASS}>
                    Home
                  </DrawUnderline>
                  <DrawUnderline onClick={() => onNavigate('projects')} className={FOOTER_LINK_CLASS}>
                    Work
                  </DrawUnderline>
                  <DrawUnderline onClick={() => onNavigate('about')} className={FOOTER_LINK_CLASS}>
                    About
                  </DrawUnderline>
                  <DrawUnderline onClick={() => onNavigate('blog')} className={FOOTER_LINK_CLASS}>
                    Blog
                  </DrawUnderline>
                </>
              )}
            </div>
          </div>

          {/* Work with me */}
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#888] mb-4">Work with me</p>
            <div className="flex flex-col gap-2">
              <DrawUnderline as="a" href="mailto:anikethvustepalle03@gmail.com" className={FOOTER_LINK_CLASS}>
                Email
              </DrawUnderline>
              {onNavigate && (
                <DrawUnderline onClick={() => onNavigate('contact')} className={FOOTER_LINK_CLASS}>
                  Contact
                </DrawUnderline>
              )}
              {onNavigate && (
                <DrawUnderline onClick={() => onNavigate('about')} className={FOOTER_LINK_CLASS}>
                  Résumé
                </DrawUnderline>
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-[#888] mb-4">Social</p>
            <div className="flex flex-col gap-2">
              <DrawUnderline as="a" href="https://github.com/aniketh703" target="_blank" rel="noopener noreferrer" className={FOOTER_LINK_CLASS}>
                GitHub
              </DrawUnderline>
              <DrawUnderline as="a" href="https://www.linkedin.com/in/aniketh-vustepalle/" target="_blank" rel="noopener noreferrer" className={FOOTER_LINK_CLASS}>
                LinkedIn
              </DrawUnderline>
              <DrawUnderline as="a" href="https://x.com/iamanikethv" target="_blank" rel="noopener noreferrer" className={FOOTER_LINK_CLASS}>
                𝕏
              </DrawUnderline>
              <DrawUnderline as="a" href="https://wa.me/919311761114" target="_blank" rel="noopener noreferrer" className={FOOTER_LINK_CLASS}>
                WhatsApp
              </DrawUnderline>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 border-t border-[#141414] flex flex-col sm:flex-row justify-between gap-2">
      <p className="font-sans text-[11px] text-[#888] tracking-tight">
        © {new Date().getFullYear()} Aniketh Vustepalle
      </p>
      <p className="font-sans text-[11px] text-[#888] tracking-tight">
        Designed &amp; coded in React
      </p>
    </div>
  </footer>
);

export default Footer;
