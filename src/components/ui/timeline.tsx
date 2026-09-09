"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  description?: string;
  className?: string;
}

export const Timeline = ({
  data,
  title = "Changelog from my journey",
  description = "I've been working on Aceternity for the past 2 years. Here's a timeline of my journey.",
  className = "",
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateHeight);
      let ro: ResizeObserver | null = null;
      if (typeof ResizeObserver !== "undefined" && ref.current) {
        ro = new ResizeObserver(updateHeight);
        ro.observe(ref.current);
      }
      return () => {
        window.removeEventListener("resize", updateHeight);
        ro?.disconnect();
      };
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full ${className.includes("bg-") ? "" : "bg-white dark:bg-neutral-950"} font-sans ${className}`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-6 md:py-10 px-2 sm:px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl mb-3 text-black dark:text-white max-w-4xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed">
          {description}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 md:pb-16">
        {data.map((item, index) => (
          <div
            key={item.title || index}
            className="flex justify-start pt-8 md:pt-14 gap-2 md:gap-4 lg:gap-8"
          >
            {/* Sticky Year Column */}
            <div className="sticky flex flex-col md:flex-row z-30 items-center top-28 md:top-36 self-start md:w-28 lg:w-36 shrink-0">
              <div className="h-10 absolute left-1 md:left-3 w-10 rounded-full bg-stone-100 dark:bg-[#151515] border border-stone-300/80 dark:border-[#2a2a2a] flex items-center justify-center shadow-sm">
                <div className="h-3.5 w-3.5 rounded-full bg-brand-lime shadow-[0_0_8px_rgba(214,243,67,0.85)] border border-black/20 dark:border-black/40" />
              </div>
              <h3 className="hidden md:block text-2xl lg:text-3xl font-bold tracking-tight text-neutral-400 dark:text-neutral-500 md:pl-16">
                {item.title}
              </h3>
            </div>

            {/* Content Column */}
            <div className="relative pl-14 sm:pl-16 md:pl-2 md:pr-0 w-full flex-1">
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold text-neutral-400 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline Track & Animated Beam in Brand Colors */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 md:left-8 -translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-stone-300 dark:via-[#262626] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-brand-lime via-brand to-transparent from-[0%] via-[20%] rounded-full shadow-[0_0_14px_rgba(214,243,67,0.9)]"
          />
        </div>
      </div>
    </div>
  );
};
