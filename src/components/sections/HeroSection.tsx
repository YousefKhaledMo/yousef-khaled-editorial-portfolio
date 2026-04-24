import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=560&h=590&fit=crop&crop=face';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const nameEl = nameRef.current;
    const cardEl = cardRef.current;
    const leftText = leftTextRef.current;
    const rightText = rightTextRef.current;
    if (!section || !nameEl || !cardEl || !leftText || !rightText) return;

    const ctx = gsap.context(() => {
      // Horizontal scroll on the name - moves left as user scrolls
      gsap.to(nameEl, {
        x: '-40%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });

      // Parallax: center card moves up slightly
      gsap.to(cardEl, {
        y: -60,
        scale: 0.96,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Parallax: side texts move horizontally at different speeds
      gsap.to(leftText, {
        x: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(rightText, {
        x: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] bg-[#F5F5F0] overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Scrolling oversized name - moves horizontally */}
        <div
          ref={nameRef}
          className="absolute whitespace-nowrap will-change-transform"
          style={{ left: '-10%' }}
        >
          <h1 className="font-display text-display-hero tracking-tight text-[#1A1A1A]">
            YOUSEF KHALED&ensp;—&ensp;YOUSEF KHALED&ensp;—&ensp;YOUSEF KHALED&ensp;—&ensp;YOUSEF KHALED&ensp;—
          </h1>
        </div>

        {/* Parallax trio: left text | center card | right text */}
        <div className="relative z-10 flex items-center justify-center gap-8 md:gap-16 lg:gap-24 px-6 mt-8 md:mt-12">
          <span
            ref={leftTextRef}
            className="font-display text-[clamp(24px,4vw,48px)] leading-none tracking-tight text-[rgba(26,26,26,0.3)] will-change-transform hidden md:block"
          >
            A VISUAL
          </span>

          <div
            ref={cardRef}
            className="relative w-[180px] md:w-[240px] lg:w-[280px] aspect-[170/179] will-change-transform flex-shrink-0"
          >
            <img
              src={HERO_IMAGE}
              alt="Yousef Khaled"
              className="w-full h-full object-cover"
            />
          </div>

          <span
            ref={rightTextRef}
            className="font-display text-[clamp(24px,4vw,48px)] leading-none tracking-tight text-[rgba(26,26,26,0.3)] will-change-transform hidden md:block"
          >
            DESIGNER
          </span>
        </div>

        {/* Bottom descriptor */}
        <div className="absolute bottom-10 left-5 md:left-10">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.15em] text-[rgba(26,26,26,0.4)] max-w-[280px]">
            Creating meaningful digital experiences through purposeful design and kinetic storytelling.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-5 md:right-10 flex flex-col items-center gap-2">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[rgba(26,26,26,0.35)]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[rgba(26,26,26,0.3)] to-transparent" />
        </div>
      </div>
    </section>
  );
}