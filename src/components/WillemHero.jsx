import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';

const BASE = import.meta.env.BASE_URL;

const NAME_START = ['A', 'n', 'i', 'k'];
const NAME_END = ['e', 't', 'h'];
const NAME_FULL = ['A', 'n', 'i', 'k', 'e', 't', 'h', ' ', '©'];

// Quick "flipping through work" flashes before settling on the final backdrop.
const FLASH_IMAGES = [
  `${BASE}projects/gita.webp`,
  `${BASE}projects/figma sign in templates/1.png`,
  `${BASE}projects/gutle_brand_id/3.png`,
];
const BASE_IMAGE = `${BASE}IMG_20221223_123011.jpg`;

// Module-scoped (not sessionStorage): resets on an actual page refresh, since
// that re-evaluates this module from scratch, but stays true across in-app
// route navigation back to Home within the same session, so the ~6s intro
// only ever plays once per real page load, not once per browser tab.
let hasPlayedIntro = false;

function WillemHero() {
  const sectionRef = useRef(null);
  const lenis = useLenis();
  const [playIntro] = useState(() => !hasPlayedIntro);
  const [settled, setSettled] = useState(!playIntro);

  // Decoupled from the animation timeline below: the Lenis instance isn't
  // ready synchronously (ReactLenis creates it in its own useEffect, which
  // fires after this component's useLayoutEffect on first mount), so this
  // reacts independently once `lenis` becomes available instead of forcing
  // the whole timeline effect to depend on it and risk re-firing mid-intro.
  useEffect(() => {
    if (!playIntro || settled || !lenis) return;
    lenis.stop();
    return () => lenis.start();
  }, [playIntro, settled, lenis]);

  useLayoutEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    if (!playIntro) {
      const ctx = gsap.context(() => {
        gsap.from(container, { opacity: 0, duration: 0.6, ease: 'power2.out' });
      }, container);
      return () => ctx.revert();
    }

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    let cancelled = false;
    let ctx;

    // Wait for the project's webfont to finish loading before running the
    // name reveal — otherwise the "Aniketh" letters briefly render in the
    // browser's fallback font (font-display: swap) while Space Grotesk is
    // still downloading, right as the intro animates in.
    const fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();

    fontsReady.then(() => {
      if (cancelled) return;

      const letters = container.querySelectorAll('.willem__letter');
      const box = container.querySelectorAll('.willem-loader__box');
      const growingImage = container.querySelectorAll('.willem__growing-image');
      const headingStart = container.querySelectorAll('.willem__h1-start');
      const headingEnd = container.querySelectorAll('.willem__h1-end');
      const coverImageExtra = container.querySelectorAll('.willem__cover-image-extra');
      const headerLetter = container.querySelectorAll('.willem__letter-white');

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: 'expo.inOut' },
          onComplete: () => {
            document.body.style.overflow = prevBodyOverflow;
            document.documentElement.style.overflow = prevHtmlOverflow;
            hasPlayedIntro = true;
            setSettled(true);
          },
        });

        if (letters.length) {
          tl.from(letters, { yPercent: 100, stagger: 0.025, duration: 1.25 });
        }
        if (box.length) {
          tl.fromTo(box, { width: '0em' }, { width: '1em', duration: 1.25 }, '<1.25');
          tl.fromTo(growingImage, { width: '0%' }, { width: '100%', duration: 1.25 }, '<');
          tl.fromTo(headingStart, { x: '0em' }, { x: '-0.05em', duration: 1.25 }, '<');
          tl.fromTo(headingEnd, { x: '0em' }, { x: '0.05em', duration: 1.25 }, '<');
        }
        if (coverImageExtra.length) {
          tl.fromTo(
            coverImageExtra,
            { opacity: 1 },
            { opacity: 0, duration: 0.05, ease: 'none', stagger: 0.5 },
            '-=0.05'
          );
        }
        if (growingImage.length) {
          tl.to(growingImage, { width: '100vw', height: '100dvh', duration: 2 }, '<1.25');
        }
        if (box.length) {
          tl.to(box, { width: '110vw', duration: 2 }, '<');
        }
        if (headerLetter.length) {
          tl.from(headerLetter, { yPercent: 100, duration: 1.25, ease: 'expo.out', stagger: 0.025 }, '<1.2');
        }
      }, container);
    });

    return () => {
      cancelled = true;
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      if (ctx) ctx.revert();
    };
  }, [playIntro]);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden bg-black text-[#f4f4f4] ${settled ? 'min-h-[100dvh]' : 'h-[100dvh]'}`}
    >
      {/* Loader: split name + growing image, settles into the full-bleed backdrop */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className="willem__h1 relative flex justify-center whitespace-nowrap font-normal leading-[0.85]"
          style={{ fontSize: 'clamp(3.25rem, 15vw, 12rem)' }}
        >
          <div
            className={`willem__h1-start relative flex justify-end overflow-hidden ${settled ? 'w-0' : ''}`}
          >
            {NAME_START.map((ch, i) => (
              <span key={i} className="willem__letter relative block">{ch}</span>
            ))}
          </div>

          <div
            className="willem-loader__box relative flex flex-col items-center justify-center"
            style={{ width: settled ? '110vw' : '0em' }}
          >
            <div className="relative flex h-[95%] min-w-[1em] items-center justify-center">
              <div
                className="willem__growing-image absolute flex items-center justify-center overflow-hidden"
                style={{ width: settled ? '100vw' : '0%', height: settled ? '100dvh' : '100%' }}
              >
                <div className="absolute inset-0 min-w-[1em]">
                  {FLASH_IMAGES.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="eager"
                      className="willem__cover-image-extra pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
                      style={{ zIndex: 3 - i, opacity: settled ? 0 : 1 }}
                    />
                  ))}
                  <img
                    src={BASE_IMAGE}
                    alt=""
                    loading="eager"
                    className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`willem__h1-end relative flex justify-start overflow-hidden ${settled ? 'w-0' : ''}`}
          >
            {NAME_END.map((ch, i) => (
              <span key={i} className="willem__letter relative block">{ch}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground: big closing name, anchored bottom over the now-fullscreen backdrop */}
      <div className="relative z-10 flex min-h-[100dvh] w-full flex-col justify-end px-6 py-10 sm:px-10 sm:py-12 md:px-14">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        {/* Top scrim so the overlaid nav stays legible regardless of the photo underneath */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
        {/* Tight overflow-hidden wrapper (no padding) so the yPercent slide-in clips
            flush with the text's own box, not offset by the parent's padding. */}
        <div className="overflow-hidden">
          <div
            className="willem__h1 relative flex flex-wrap font-normal leading-[0.85] tracking-tight"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 9rem)' }}
          >
            {NAME_FULL.map((ch, i) => (
              <span key={i} className="willem__letter-white relative block">{ch}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WillemHero;
