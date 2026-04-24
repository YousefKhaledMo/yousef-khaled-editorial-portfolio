import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

const lines = ['CREATING', 'DESIGN', 'WITH', 'MEANING'];

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
            duration: 0.9,
            ease: 'power3.out',
            delay: index * 0.12,
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
      className="bg-[#5C3D2E] text-[#F5F5F0] py-32 md:py-48 px-5 md:px-10 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-20">
          <span className="font-body text-label text-[rgba(245,245,240,0.45)]">
            Purposeful Design
          </span>
        </div>

        <div className="space-y-1 md:space-y-2">
          {lines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <div
                ref={(el) => {
                  if (el) linesRef.current[index] = el;
                }}
                className="will-change-transform"
              >
                <h2 className="font-display text-display-section leading-[0.9] tracking-tight text-[#F5F5F0]">
                  {line}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 max-w-md">
          <p className="font-body text-base md:text-lg leading-relaxed text-[rgba(245,245,240,0.65)]">
            Every project begins with a question: what is this for? I believe design should
            serve a purpose beyond aesthetics — it should communicate, connect, and create
            lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}