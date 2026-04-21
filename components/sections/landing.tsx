"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPressure from "../typography/TextPressure";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const sectionRef = useRef<HTMLElement>(null);
  const zoomLayerRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const zoomLayer = zoomLayerRef.current;
    const scrollHint = scrollHintRef.current;

    if (!section || !zoomLayer) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(zoomLayer, {
        transformOrigin: "50% 50%",
        force3D: true,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        zoomLayer,
        {
          keyframes: [
            {
              scale: 0.72,
              yPercent: 5,
              duration: 0.42,
            },
            {
              scale: 0.24,
              yPercent: 14,
              duration: 0.58,
            },
          ],
          ease: "none",
        },
        0,
      );

      if (scrollHint) {
        timeline.to(
          scrollHint,
          {
            opacity: 0,
            y: 16,
            ease: "none",
            duration: 0.2,
          },
          0.06,
        );
      }

      timeline.to(
        zoomLayer,
        {
          opacity: 0,
          ease: "none",
          duration: 0.34,
        },
        0.66,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden text-zinc-100"
    >
      {/* <div className="absolute inset-0 z-0 bg-linear-to-b from-black/30 via-black/10 to-black/60" /> */}
      <div
        ref={zoomLayerRef}
        className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 will-change-transform"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="mx-auto h-full w-full max-w-[1400px]">
          <TextPressure
            text="Personal Portfolio"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={30}
          />
        </div>
      </div>
      <span
        ref={scrollHintRef}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-sm text-zinc-400"
      >
        Scroll down to explore
      </span>
    </section>
  );
}
