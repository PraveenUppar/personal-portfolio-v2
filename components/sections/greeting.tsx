"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anton } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lines = [
  "I am Praveen Uppar",
  "A third year CS grad",
  "Full Stack Developer",
  "AWS Solution Architect",
  "DevOps Engineer",
];

export default function Greeting() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const animatedLines = lineRefs.current.filter(
      (line): line is HTMLSpanElement => Boolean(line),
    );

    if (animatedLines.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(animatedLines, {
        opacity: 0.08,
        xPercent: (index: number) => (index % 2 === 0 ? -125 : 125),
        force3D: true,
      });

      gsap.to(animatedLines, {
        opacity: 1,
        xPercent: 0,
        duration: 1.35,
        stagger: 0.24,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      if (headingRef.current) {
        gsap.to(headingRef.current, {
          opacity: 0.38,
          yPercent: -6,
          scale: 0.97,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-x-hidden"
    >
      <div className="mx-auto flex min-h-screen w-full items-center px-5 py-16 sm:px-8 md:px-12 lg:px-16">
        <h2
          ref={headingRef}
          className={`${anton.className} w-full text-center text-[clamp(2.2rem,8.2vw,8.6rem)] uppercase leading-[0.9] tracking-[-0.02em]`}
        >
          {lines.map((line, index) => (
            <span
              key={line}
              ref={(element) => {
                lineRefs.current[index] = element;
              }}
              className={`block w-full whitespace-nowrap border-white/25 py-[0.05em] ${
                index === 0
                  ? "border-t border-b"
                  : index === lines.length - 1
                    ? "border-b"
                    : "border-b"
              }`}
            >
              {line}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
