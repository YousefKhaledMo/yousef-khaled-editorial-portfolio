import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'group cursor-pointer transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative overflow-hidden aspect-[4/5] bg-bg-dark mb-5">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-bg-dark/0 group-hover:bg-bg-dark/20 transition-colors duration-500" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-body text-lg font-medium text-text-primary mb-1 group-hover:opacity-70 transition-opacity">
              {project.title}
            </h3>
            <p className="font-body text-xs uppercase tracking-widest text-text-primary/60">
              {project.category}
            </p>
          </div>
          <span className="font-body text-xs uppercase tracking-widest text-text-primary/40">
            {project.year}
          </span>
        </div>
      </Link>
    </div>
  );
}
