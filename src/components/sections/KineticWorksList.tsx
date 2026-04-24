import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

export function KineticWorksList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      itemsRef.current.forEach((item) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - itemCenter);
        const maxDistance = window.innerHeight * 0.55;
        const progress = Math.min(distance / maxDistance, 1);

        const scale = 1 - progress * 0.12;
        const opacity = 1 - progress * 0.65;
        const blur = progress * 1.5;

        item.style.transform = `scale(${scale})`;
        item.style.opacity = `${opacity}`;
        item.style.filter = blur > 0.5 ? `blur(${blur}px)` : 'none';
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
    <section className="bg-[#1A1A1A] py-28 md:py-48 px-5 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 md:mb-20">
          <span className="font-body text-label text-[rgba(245,245,240,0.35)] block mb-3">
            Archive
          </span>
          <h2 className="font-display text-display-section leading-none tracking-tight text-[#F5F5F0]">
            ALL WORKS
          </h2>
        </div>

        <div ref={containerRef} className="border-t border-[rgba(245,245,240,0.08)]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="will-change-transform border-b border-[rgba(245,245,240,0.08)]"
            >
              <Link
                to={`/project/${project.id}`}
                className="flex items-center justify-between gap-4 md:gap-8 py-6 md:py-8 group"
              >
                <div className="flex items-baseline gap-4 md:gap-6 min-w-0">
                  <span className="font-body text-label text-[rgba(245,245,240,0.2)] flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-display-list leading-none tracking-tight text-[#F5F5F0] group-hover:text-[rgba(245,245,240,0.7)] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                  <span className="font-body text-label text-[rgba(245,245,240,0.35)] hidden md:block">
                    {project.category}
                  </span>
                  <span className="font-body text-label text-[rgba(245,245,240,0.2)]">
                    {project.year}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}