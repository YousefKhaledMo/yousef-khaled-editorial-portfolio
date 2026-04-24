import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProjectById } from '../data/projects';
import { gsap } from '../lib/gsap';
import { PillButton } from '../components/ui/PillButton';

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
      <main className="min-h-screen bg-[#F5F5F0] flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="font-display text-6xl text-[#1A1A1A] mb-4">404</h1>
          <p className="font-body text-base text-[rgba(26,26,26,0.5)] mb-8">Project not found</p>
          <Link to="/">
            <PillButton>Back to Home</PillButton>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F5F5F0]">
      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-24 px-5 md:px-10">
        <div className="max-w-[1600px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-label text-[rgba(26,26,26,0.5)] hover:text-[#1A1A1A] transition-colors mb-10 md:mb-14"
          >
            <ArrowLeft size={14} />
            Back to Works
          </Link>

          <h1 className="font-display text-display-hero leading-[0.9] tracking-tight text-[#1A1A1A] mb-8">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 md:gap-10 border-t border-[rgba(26,26,26,0.1)] pt-5">
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[rgba(26,26,26,0.35)] block mb-1">
                Medium
              </span>
              <span className="font-body text-sm text-[#1A1A1A]">{project.medium}</span>
            </div>
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[rgba(26,26,26,0.35)] block mb-1">
                Tools
              </span>
              <span className="font-body text-sm text-[#1A1A1A]">{project.tools.join(', ')}</span>
            </div>
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[rgba(26,26,26,0.35)] block mb-1">
                Role
              </span>
              <span className="font-body text-sm text-[#1A1A1A]">{project.role.join(', ')}</span>
            </div>
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[rgba(26,26,26,0.35)] block mb-1">
                Year
              </span>
              <span className="font-body text-sm text-[#1A1A1A]">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 md:px-10 pb-12 md:pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 md:gap-16">
            <div>
              <div className="mb-14">
                <span className="font-body text-label text-[rgba(26,26,26,0.4)] block mb-4">
                  Overview
                </span>
                <p className="font-body text-lg leading-relaxed text-[rgba(26,26,26,0.75)] max-w-2xl">
                  {project.overview}
                </p>
              </div>

              {project.challenge && (
                <div className="mb-14">
                  <span className="font-body text-label text-[rgba(26,26,26,0.4)] block mb-4">
                    Challenge
                  </span>
                  <p className="font-body text-base leading-relaxed text-[rgba(26,26,26,0.6)] max-w-2xl">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.reflection && (
                <div className="mb-14">
                  <span className="font-body text-label text-[rgba(26,26,26,0.4)] block mb-4">
                    Reflection
                  </span>
                  <p className="font-body text-base leading-relaxed text-[rgba(26,26,26,0.6)] max-w-2xl">
                    {project.reflection}
                  </p>
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-28">
                <span className="font-body text-label text-[rgba(26,26,26,0.4)] block mb-4">
                  Project Info
                </span>
                <div className="space-y-5 border-t border-[rgba(26,26,26,0.1)] pt-5">
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[rgba(26,26,26,0.3)] block mb-1">
                      Category
                    </span>
                    <span className="font-body text-sm text-[#1A1A1A]">{project.category}</span>
                  </div>
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[rgba(26,26,26,0.3)] block mb-1">
                      Tools
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-body text-xs px-3 py-1 border border-[rgba(26,26,26,0.1)] rounded-full text-[rgba(26,26,26,0.6)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[rgba(26,26,26,0.3)] block mb-1">
                      Role
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.role.map((r) => (
                        <span
                          key={r}
                          className="font-body text-xs px-3 py-1 border border-[rgba(26,26,26,0.1)] rounded-full text-[rgba(26,26,26,0.6)]"
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

      {/* Images */}
      <section className="px-5 md:px-10 pb-12 md:pb-24">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {project.images.map((image, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (el) imagesRef.current[idx] = el;
              }}
              className="will-change-transform"
            >
              <div className="aspect-[16/9] bg-[#1A1A1A] overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} — Image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      {project.processImages && project.processImages.length > 0 && (
        <section ref={processRef} className="px-5 md:px-10 pb-12 md:pb-24">
          <div className="max-w-[1600px] mx-auto">
            <h2 className="font-display text-display-section leading-none tracking-tight text-[#1A1A1A] mb-10 md:mb-12">
              THE PROCESS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.processImages.map((image, idx) => (
                <div key={idx} className="aspect-[4/3] bg-[#1A1A1A] overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} — Process ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Credits */}
      <section className="px-5 md:px-10 pb-28 md:pb-48">
        <div className="max-w-[1600px] mx-auto border-t border-[rgba(26,26,26,0.1)] pt-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <span className="font-body text-label text-[rgba(26,26,26,0.4)] block mb-1.5">
                Credits
              </span>
              <p className="font-body text-sm text-[rgba(26,26,26,0.6)]">
                Designed by Yousef Khaled &middot; {project.year}
              </p>
            </div>
            <Link
              to="/"
              className="font-body text-label text-[rgba(26,26,26,0.5)] hover:text-[#1A1A1A] transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}