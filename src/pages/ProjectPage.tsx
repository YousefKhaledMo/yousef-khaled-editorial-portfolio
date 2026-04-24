import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { gsap } from '../lib/gsap';

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || '');
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img) => {
        if (!img) return;
        gsap.fromTo(
          img,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      if (processRef.current) {
        gsap.fromTo(
          processRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: processRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-6xl text-text-primary mb-4">404</h1>
          <p className="font-body text-base text-text-primary/60 mb-8">Project not found</p>
          <Link
            to="/"
            className="font-body text-sm uppercase tracking-widest text-text-primary hover:opacity-70 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-bg-primary">
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-text-primary/60 hover:text-text-primary transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Back to Works
          </Link>

          <h1 className="font-display text-display-hero leading-none tracking-tight text-text-primary mb-8">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 md:gap-10 border-t border-border-light pt-6">
            <div>
              <span className="font-body text-[10px] uppercase tracking-widest text-text-primary/40 block mb-1">
                Medium
              </span>
              <span className="font-body text-sm text-text-primary">{project.medium}</span>
            </div>
            <div>
              <span className="font-body text-[10px] uppercase tracking-widest text-text-primary/40 block mb-1">
                Tools
              </span>
              <span className="font-body text-sm text-text-primary">{project.tools.join(', ')}</span>
            </div>
            <div>
              <span className="font-body text-[10px] uppercase tracking-widest text-text-primary/40 block mb-1">
                Role
              </span>
              <span className="font-body text-sm text-text-primary">{project.role.join(', ')}</span>
            </div>
            <div>
              <span className="font-body text-[10px] uppercase tracking-widest text-text-primary/40 block mb-1">
                Year
              </span>
              <span className="font-body text-sm text-text-primary">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            <div>
              <div className="mb-16">
                <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-4">
                  Overview
                </span>
                <p className="font-body text-lg leading-relaxed text-text-primary/80 max-w-2xl">
                  {project.overview}
                </p>
              </div>

              {project.challenge && (
                <div className="mb-16">
                  <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-4">
                    Challenge
                  </span>
                  <p className="font-body text-base leading-relaxed text-text-primary/70 max-w-2xl">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.reflection && (
                <div className="mb-16">
                  <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-4">
                    Reflection
                  </span>
                  <p className="font-body text-base leading-relaxed text-text-primary/70 max-w-2xl">
                    {project.reflection}
                  </p>
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-32">
                <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-4">
                  Project Info
                </span>
                <div className="space-y-6 border-t border-border-light pt-6">
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-widest text-text-primary/40 block mb-1">
                      Category
                    </span>
                    <span className="font-body text-sm text-text-primary">{project.category}</span>
                  </div>
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-widest text-text-primary/40 block mb-1">
                      Tools
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-body text-xs px-3 py-1 border border-border-light rounded-full text-text-primary/70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-widest text-text-primary/40 block mb-1">
                      Role
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.role.map((r) => (
                        <span
                          key={r}
                          className="font-body text-xs px-3 py-1 border border-border-light rounded-full text-text-primary/70"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {project.images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imagesRef.current[index] = el;
              }}
              className="will-change-transform"
            >
              <div className="aspect-[16/9] bg-bg-dark overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} — Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {project.processImages && project.processImages.length > 0 && (
        <section ref={processRef} className="px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-display text-display-section leading-none tracking-tight text-text-primary mb-12">
              THE PROCESS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.processImages.map((image, index) => (
                <div key={index} className="aspect-[4/3] bg-bg-dark overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} — Process ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 md:px-12 pb-32 md:pb-48">
        <div className="max-w-[1400px] mx-auto border-t border-border-light pt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-2">
                Credits
              </span>
              <p className="font-body text-sm text-text-primary/70">
                Designed by Yousef Khaled • {project.year}
              </p>
            </div>
            <Link
              to="/"
              className="font-body text-sm uppercase tracking-widest text-text-primary hover:opacity-70 transition-opacity"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
