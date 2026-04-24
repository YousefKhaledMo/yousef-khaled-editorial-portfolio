import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { gsap } from '../../lib/gsap';

export function FeaturedWorksGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={sectionRef} className="bg-[#F5F5F0] py-28 md:py-48 px-5 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <div>
            <span className="font-body text-label text-[rgba(26,26,26,0.4)] block mb-3">
              Selected Work
            </span>
            <h2 className="font-display text-display-section leading-none tracking-tight text-[#1A1A1A]">
              FEATURED
            </h2>
          </div>
          <span className="font-body text-label text-[rgba(26,26,26,0.3)] hidden md:block">
            2023 — 2024
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-16">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
            >
              <Link to={`/project/${project.id}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/5] bg-[#1A1A1A] mb-4">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/20 transition-colors duration-500" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-body text-lg md:text-xl font-medium text-[#1A1A1A] group-hover:opacity-70 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="font-body text-label text-[rgba(26,26,26,0.5)] mt-1">
                      {project.category}
                    </p>
                  </div>
                  <span className="font-body text-label text-[rgba(26,26,26,0.3)]">
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