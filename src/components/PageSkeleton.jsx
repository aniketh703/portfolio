import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';

const Bar = ({ className = '' }) => (
  <div className={`animate-pulse rounded-lg bg-[#1f1f1f] ${className}`} />
);

const HomeSkeleton = () => (
  <div className="min-h-screen bg-black">
    <div className="h-screen w-full animate-pulse bg-[#141414]" />
    <div className="max-w-3xl mx-auto px-6 md:px-10 pt-16 pb-16 text-center">
      <Bar className="h-3 w-40 mx-auto mb-8" />
      <Bar className="h-4 w-full mb-2" />
      <Bar className="h-4 w-2/3 mx-auto mb-10" />
      <div className="flex justify-center gap-10 mb-10">
        <Bar className="h-10 w-16" />
        <Bar className="h-10 w-16" />
        <Bar className="h-10 w-16" />
      </div>
      <div className="flex justify-center gap-3">
        <Bar className="h-11 w-32" />
        <Bar className="h-11 w-32" />
      </div>
    </div>
  </div>
);

const WorkSkeleton = () => (
  <div className="max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-16">
    <Bar className="h-14 w-48 mb-10" />
    <div className="flex gap-2 mb-10">
      {Array.from({ length: 5 }).map((_, i) => (
        <Bar key={i} className="h-8 w-20 rounded-full" />
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <Bar key={i} className="aspect-[4/3]" />
      ))}
    </div>
  </div>
);

const ResumeSkeleton = () => (
  <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-32 pb-20">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
      <div>
        <Bar className="h-12 w-64 mb-3" />
        <Bar className="h-5 w-80" />
      </div>
      <Bar className="h-11 w-40 rounded-xl" />
    </div>
    <div className="space-y-6 mb-12">
      <Bar className="h-40 w-full rounded-2xl" />
      <Bar className="h-40 w-full rounded-2xl" />
      <Bar className="h-40 w-full rounded-2xl" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Bar className="h-56 rounded-2xl" />
      <Bar className="h-56 rounded-2xl" />
    </div>
  </div>
);

const ContactSkeleton = () => (
  <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-36 sm:pt-44 pb-28 md:pb-36">
    <div className="mb-14 max-w-3xl">
      <Bar className="h-8 w-60 rounded-full mb-6" />
      <Bar className="h-16 w-full mb-4" />
      <Bar className="h-6 w-3/4" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
      <div className="lg:col-span-5 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Bar key={i} className="h-20 w-full rounded-2xl" />
        ))}
      </div>
      <div className="lg:col-span-7">
        <Bar className="h-[540px] w-full rounded-3xl" />
      </div>
    </div>
  </div>
);

const ProjectSkeleton = () => (
  <div className="min-h-screen bg-stone-50 dark:bg-[#141414]">
    <Bar className="h-[52vh] md:h-[70vh] w-full rounded-none bg-stone-200 dark:bg-[#1c1c1c]" />
    <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 md:pt-16 pb-20 md:pb-32 px-4 md:px-8 xl:px-12 2xl:px-16">
      <aside className="md:col-span-3 space-y-8 md:space-y-10 pt-6">
        <Bar className="h-10 w-full" />
        <Bar className="h-10 w-full" />
        <Bar className="h-10 w-full" />
      </aside>
      <div className="md:col-span-8 md:col-start-5 pt-6 flex flex-col gap-4">
        <Bar className="h-5 w-full" />
        <Bar className="h-5 w-5/6" />
        <Bar className="h-5 w-3/4" />
      </div>
    </div>
  </div>
);

function skeletonForPath(pathname = '') {
  if (pathname === '/' || pathname === '') return { Content: HomeSkeleton, dark: true };
  if (pathname.startsWith('/work/')) return { Content: ProjectSkeleton, dark: false };
  if (pathname === '/work') return { Content: WorkSkeleton, dark: false };
  if (pathname === '/about' || pathname === '/resume') return { Content: ResumeSkeleton, dark: false };
  if (pathname === '/contact') return { Content: ContactSkeleton, dark: false };
  return { Content: WorkSkeleton, dark: false };
}

/**
 * Generic page-switch skeleton, replacing the old grid-block wipe.
 * `targetPath` picks a layout shaped like the page being navigated to.
 * Same status/onAnimationComplete contract as the old GridTransition,
 * so App.jsx's navigation timing doesn't need to change.
 */
const PageSkeleton = ({ status, onAnimationComplete, targetPath }) => {
  const containerRef = useRef(null);
  const { Content, dark } = skeletonForPath(targetPath);

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (status === 'exit') lenis.stop();
    else if (status === 'enter') lenis.start();
  }, [status, lenis]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      if (status === 'exit') {
        gsap.fromTo(
          container,
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: 'power2.out',
            onComplete: () => {
              if (onAnimationComplete) onAnimationComplete();
            },
          }
        );
      } else if (status === 'enter') {
        gsap.to(container, {
          opacity: 0,
          scale: 1.02,
          duration: 0.3,
          delay: 0,
          ease: 'power2.in',
          onComplete: () => {
            container.style.pointerEvents = 'none';
            if (onAnimationComplete) onAnimationComplete();
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [status, onAnimationComplete]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[200] overflow-hidden opacity-0 ${dark ? 'bg-black' : 'bg-stone-50 dark:bg-[#111]'}`}
      style={{ pointerEvents: status === 'exit' ? 'all' : 'none' }}
      // GSAP's mount-time 'enter' tween writes an inline opacity directly to
      // this element (see the effect above), which is already baked into a
      // prerendered snapshot by the time it's captured but hasn't run yet on
      // a fresh client's first render — an expected, harmless divergence.
      suppressHydrationWarning
      aria-hidden="true"
    >
      <Content />
    </div>
  );
};

export default PageSkeleton;
