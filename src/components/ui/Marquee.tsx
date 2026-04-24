import { cn } from '../../lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({ children, speed = 30, className, pauseOnHover = false }: MarqueeProps) {
  return (
    <div className={cn('overflow-hidden whitespace-nowrap', className)}>
      <div
        className={cn(
          'inline-flex will-change-transform',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        <span className="inline-flex items-center">{children}</span>
        <span className="inline-flex items-center">{children}</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
