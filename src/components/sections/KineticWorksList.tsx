import { useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import { KineticListItem } from '../ui/KineticListItem';

export function KineticWorksList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      itemsRef.current.forEach((item) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - itemCenter);
        const maxDistance = window.innerHeight * 0.6;
        const progress = Math.min(distance / maxDistance, 1);

        const scale = 1 - progress * 0.15;
        const opacity = 1 - progress * 0.7;
        const blur = progress * 2;

        item.style.transform = `scale(${scale})`;
        item.style.opacity = `${opacity}`;
        item.style.filter = `blur(${blur}px)`;
      });
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="bg-bg-primary py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-4">
            Archive
          </span>
          <h2 className="font-display text-display-section leading-none tracking-tight text-text-primary">
            ALL WORKS
          </h2>
        </div>

        <div ref={containerRef} className="border-t border-border-light">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="will-change-transform transition-all duration-100"
            >
              <KineticListItem project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
