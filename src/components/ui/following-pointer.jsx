import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { cn } from '@/lib/utils';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, summary, label';

const ICONS = {
  normal: {
    viewBox: '0 0 24 24',
    path: 'M20.83,15.831c-0.12,0.41-0.47,0.71-0.89,0.77l-7.51,1.18l-5.63,4.66c-0.2,0.16-0.45,0.25-0.7,0.25 c-0.16,0-0.32-0.03-0.47-0.11C5.25,22.401,5,22.011,5,21.591V3.361c0-0.43,0.26-0.83,0.65-1c0.39-0.18,0.86-0.11,1.18,0.18 l13.68,12.15C20.82,14.981,20.95,15.421,20.83,15.831z',
    className: 'h-5 w-5 -translate-x-1 -translate-y-0.5',
  },
  pointer: {
    viewBox: '0 0 24 24',
    path: 'M 9.5 1 C 8.672 1 8 1.672 8 2.5 L 8 9 L 8 14 L 8 15.060547 L 5.3378906 13.710938 C 4.7798906 13.427938 4.1072344 13.492906 3.6152344 13.878906 C 2.8562344 14.474906 2.7887031 15.601203 3.4707031 16.283203 L 8.3085938 21.121094 C 8.8715937 21.684094 9.6346875 22 10.429688 22 L 17 22 C 18.657 22 20 20.657 20 19 L 20 12.193359 C 20 11.216359 19.292125 10.381703 18.328125 10.220703 L 11 9 L 11 2.5 C 11 1.672 10.328 1 9.5 1 z',
    className: 'h-5 w-5 -translate-x-1 -translate-y-0.5',
  },
  project: {
    viewBox: '0 0 50 50',
    path: 'M 25.089844 12 C 19.486751 12 13.708451 15.640598 13.101562 21.791016 C 9.5338496 22.293671 6.4845848 23.003114 4.2363281 23.90625 C 3.027941 24.391665 2.0394454 24.924791 1.2929688 25.568359 C 0.54649197 26.211927 1.4802974e-16 27.039912 0 28 C 0 29.368884 1.0251132 30.398215 2.3769531 31.197266 C 3.728793 31.996317 5.5574898 32.655502 7.7871094 33.212891 C 12.246349 34.327668 18.304953 35 25 35 C 31.695047 35 37.753651 34.327668 42.212891 33.212891 C 44.44251 32.655502 46.271207 31.996317 47.623047 31.197266 C 48.974887 30.398215 50 29.368884 50 28 C 50 27.03961 49.451946 26.21206 48.705078 25.568359 C 47.95821 24.924659 46.97079 24.389761 45.761719 23.904297 C 43.535052 23.01025 40.520765 22.30826 36.998047 21.806641 C 36.998099 21.788756 37 21.771816 37 21.753906 C 37 19.141906 35.512984 15.303484 31.458984 15.021484 C 30.657984 14.122484 28.413844 12 25.089844 12 z M 30.021484 20 C 30.689484 21.065 33.021484 23.845 33.021484 26 C 33.021484 28.714 34.241391 29.358031 34.525391 29.457031 C 34.633391 29.494031 34.742563 29.513672 34.851562 29.513672 C 35.123552 29.513672 35.375374 29.392459 35.5625 29.199219 C 35.858977 29.612395 36.093611 30.179551 36 30.939453 C 35.931292 31.507438 35.773357 31.974289 35.578125 32.371094 C 32.399372 32.76779 28.811161 33 25 33 C 21.218301 33 17.656761 32.771868 14.496094 32.380859 C 14.284807 31.976712 14.11278 31.500449 14.039062 30.919922 C 13.944541 30.147073 14.219728 29.584434 14.548828 29.177734 C 14.814222 29.47466 15.241571 29.597919 15.636719 29.451172 C 15.878719 29.362172 16.668484 28.942 17.021484 26 C 17.282484 23.827 20.625484 23 24.021484 23 C 27.219484 23 29.172484 21.006 30.021484 20 z M 21 29 A 1 1 0 0 0 21 31 A 1 1 0 0 0 21 29 z M 29 29 A 1 1 0 0 0 29 31 A 1 1 0 0 0 29 29 z',
    className: 'h-7 w-7 -translate-x-3 -translate-y-3',
  },
};

// Adapted from Aceternity's FollowerPointerCard for site-wide use (wraps the
// whole app, not a single small card) — changes from the original:
// 1. Position is tracked in fixed/viewport coordinates (clientX/clientY)
//    instead of relative to a getBoundingClientRect() captured once on mount;
//    that rect never updates on scroll, so on a tall scrolling page the
//    original math drifts out of alignment almost immediately.
// 2. Hidden on touch/coarse-pointer devices, matching the old cursor's
//    behavior — there's no mouse to follow there.
// 3. Three states instead of one fixed icon: a "normal" arrow-cursor icon
//    over ordinary content, a "pointer" hand icon over anything interactive
//    (links, buttons, form fields, or manually via data-cursor-variant=
//    "pointer"), and a "project" icon + name tag over anything tagged
//    data-cursor-variant="project". The native cursor is hidden the whole
//    time one of these three is standing in for it.
// 4. FollowPointer is always mounted (never conditionally rendered) and
//    hides itself via opacity/scale instead — react-snap's crawler moves
//    the mouse before capturing its snapshot, so a conditionally-mounted
//    pointer bakes isInside=true into the static HTML while a fresh
//    visitor's hydration always starts isInside=false; React treats that
//    presence/absence difference as a hydration error. Keeping the element
//    always present and only animating its visibility means there's nothing
//    to mismatch structurally — the same reasoning applies to the "project"
//    label indicator's own visibility.
export const FollowerPointerCard = ({ children, className, title }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isInside, setIsInside] = useState(false);
  const [variant, setVariant] = useState('normal');
  // Starts true (matching prerender/static HTML, always rendered from a
  // desktop-shaped crawl) and corrects post-mount — same hydration-safety
  // reasoning as isDark in App.jsx.
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
    const target = e.target;
    const isProject = target.closest && target.closest('[data-cursor-variant="project"]');
    const isPointer = !isProject && target.closest &&
      target.closest(`${INTERACTIVE_SELECTOR}, [data-cursor-variant="pointer"]`);
    const next = isProject ? 'project' : isPointer ? 'pointer' : 'normal';
    setVariant((prev) => (prev === next ? prev : next));
  };
  const handleMouseLeave = () => setIsInside(false);
  const handleMouseEnter = () => setIsInside(true);

  if (!canHover) return <div className={cn('relative', className)}>{children}</div>;

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{ cursor: isInside ? 'none' : 'auto' }}
      suppressHydrationWarning
      className={cn('relative', className)}
    >
      <FollowPointer x={x} y={y} title={title} variant={variant} visible={isInside} />
      {children}
    </div>
  );
};

export const FollowPointer = ({ x, y, title, variant = 'normal', visible = true }) => {
  const icon = ICONS[variant] || ICONS.normal;
  const isProject = variant === 'project';
  return (
    <motion.div
      className="fixed z-[300] h-4 w-4 rounded-full"
      style={{ top: y, left: x, pointerEvents: 'none' }}
      initial={false}
      animate={{ scale: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox={icon.viewBox}
        className={cn(icon.className, 'transform text-brand dark:text-brand-lime')}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path}></path>
      </svg>
      <motion.div
        initial={false}
        animate={{ scale: isProject ? 1 : 0.5, opacity: isProject ? 1 : 0 }}
        className="min-w-max rounded-full bg-brand-dark dark:bg-[#eee] px-2 py-1 text-xs font-sans font-medium whitespace-nowrap text-white dark:text-[#111]"
      >
        {title || 'Curious Traveller'}
      </motion.div>
    </motion.div>
  );
};
