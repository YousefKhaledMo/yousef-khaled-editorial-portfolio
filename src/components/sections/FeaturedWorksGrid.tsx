import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

export function FeaturedWorksGrid() {
  return (
    <section id="works" className="bg-bg-primary py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-4">
              Selected Work
            </span>
            <h2 className="font-display text-display-section leading-none tracking-tight text-text-primary">
              FEATURED
            </h2>
          </div>
          <span className="font-body text-xs uppercase tracking-widest text-text-primary/40 hidden md:block">
            2023 — 2024
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
