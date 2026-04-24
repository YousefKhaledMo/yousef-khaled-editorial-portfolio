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
      gsap.to(nameEl, {
        x: '-30%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(cardEl, {
        y: -60,
        scale: 0.96,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

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
      className="relative min-h-[150vh] bg-bg-primary overflow-hidden pt-20"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          ref={nameRef}
          className="absolute whitespace-nowrap will-change-transform"
          style={{ left: '5%' }}
        >
          <h1 className="font-display text-display-hero leading-none tracking-tight text-text-primary">
            YOUSEF KHALED — YOUSEF KHALED — YOUSEF KHALED —
          </h1>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-8 md:gap-16 px-6">
          <span
            ref={leftTextRef}
            className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-text-primary/60 will-change-transform hidden md:block"
          >
            A Visual
          </span>

          <div
            ref={cardRef}
            className="relative w-[200px] md:w-[280px] aspect-[170/179] will-change-transform"
          >
            <img
              src={HERO_IMAGE}
              alt="Yousef Khaled"
              className="w-full h-full object-cover"
            />
          </div>

          <span
            ref={rightTextRef}
            className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-text-primary/60 will-change-transform hidden md:block"
          >
            Designer
          </span>
        </div>

        <div className="absolute bottom-12 left-6 md:left-12">
          <p className="font-body text-xs uppercase tracking-widest text-text-primary/50 max-w-xs">
            Creating meaningful digital experiences through purposeful design and kinetic storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}
