import { Link } from 'react-router-dom';
import type { Project } from '../../types';

interface KineticListItemProps {
  project: Project;
  style?: React.CSSProperties;
}

export function KineticListItem({ project, style }: KineticListItemProps) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block py-6 md:py-8 border-b border-border-light transition-all duration-300 will-change-transform"
      style={style}
    >
      <div className="flex items-center justify-between gap-6">
        <h3 className="font-display text-display-list leading-none tracking-tight text-text-primary">
          {project.title}
        </h3>
        <div className="flex items-center gap-6 flex-shrink-0">
          <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 hidden md:block">
            {project.category}
          </span>
          <span className="font-body text-xs uppercase tracking-widest text-text-primary/30">
            {project.year}
          </span>
        </div>
      </div>
    </Link>
  );
}
