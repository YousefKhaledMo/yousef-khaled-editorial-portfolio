import { cn } from '../../lib/utils';

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'inverse';
  type?: 'button' | 'submit';
}

export function PillButton({ children, href, onClick, className, variant = 'default', type = 'button' }: PillButtonProps) {
  const baseStyles = cn(
    'relative inline-flex items-center justify-center px-8 py-3.5 rounded-full border text-sm font-medium uppercase tracking-[0.1em] font-body overflow-hidden transition-colors duration-[400ms] cursor-pointer group',
    variant === 'default'
      ? 'border-[#1A1A1A] text-[#1A1A1A] hover:text-[#F5F5F0]'
      : 'border-[#F5F5F0] text-[#F5F5F0] hover:text-[#5C3D2E]',
    className
  );

  const fillBg = variant === 'default' ? 'bg-[#1A1A1A]' : 'bg-[#F5F5F0]';

  const inner = (
    <>
      <span
        className={cn(
          'absolute inset-0 origin-left scale-x-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100',
          fillBg
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
    <button type={type} className={baseStyles} onClick={onClick}>
      {inner}
    </button>
  );
}