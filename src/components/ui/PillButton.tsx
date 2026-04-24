import { cn } from '../../lib/utils';

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'inverse';
}

export function PillButton({ children, href, onClick, className, variant = 'default' }: PillButtonProps) {
  const baseStyles = cn(
    'relative inline-flex items-center justify-center px-8 py-3 rounded-full border text-sm font-medium uppercase tracking-widest font-body overflow-hidden transition-colors duration-400 group cursor-pointer',
    variant === 'default'
      ? 'border-text-primary text-text-primary hover:text-text-inverse'
      : 'border-text-inverse text-text-inverse hover:text-bg-brown',
    className
  );

  const inner = (
    <>
      <span
        className={cn(
          'absolute inset-0 origin-left scale-x-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100',
          variant === 'default' ? 'bg-bg-dark' : 'bg-text-inverse'
        )}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseStyles} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={baseStyles} onClick={onClick}>
      {inner}
    </button>
  );
}
