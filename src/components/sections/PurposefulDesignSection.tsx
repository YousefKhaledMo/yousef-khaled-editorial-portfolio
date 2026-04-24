import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const lines = [
  'CREATING',
  'DESIGN',
  'WITH',
  'MEANING',
];

export function PurposefulDesignSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      linesRef.current.forEach((line, index) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { y: 80, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bg-brown text-text-inverse py-32 md:py-48 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="font-body text-xs uppercase tracking-widest text-text-inverse/50">
            Philosophy
          </span>
        </div>
        <div className="space-y-2">
          {lines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <div
                ref={(el) => {
                  if (el) linesRef.current[index] = el;
                }}
                className="will-change-transform"
              >
                <h2 className="font-display text-display-section leading-none tracking-tight">
                  {line}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-md">
          <p className="font-body text-base leading-relaxed text-text-inverse/70">
            Every project begins with a question: what is this for? I believe design should
            serve a purpose beyond aesthetics — it should communicate, connect, and create
            lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
