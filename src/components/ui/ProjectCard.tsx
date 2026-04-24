import { Link } from 'react-router-dom';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
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
  );
}