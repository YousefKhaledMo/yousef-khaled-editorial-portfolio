import { Link } from 'react-router-dom';
import type { Project } from '../../types';

interface KineticListItemProps {
  project: Project;
  index: number;
}

export function KineticListItem({ project, index }: KineticListItemProps) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block py-6 md:py-8 transition-colors duration-300"
    >
      <div className="flex items-center justify-between gap-4 md:gap-8">
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
      </div>
    </Link>
  );
}