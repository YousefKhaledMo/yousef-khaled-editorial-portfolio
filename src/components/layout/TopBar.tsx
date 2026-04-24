import { useEffect, useState } from 'react';

export function TopBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const cairoTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(cairoTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-b border-border-light py-3 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-body text-[11px] uppercase tracking-widest text-text-primary/60">
            Cairo, Egypt
          </span>
          <span className="font-body text-[11px] uppercase tracking-widest text-text-primary/40 hidden sm:inline">
            30.0444° N, 31.2357° E
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-body text-[11px] uppercase tracking-widest text-text-primary/60">
            {time} EET
          </span>
        </div>
      </div>
    </div>
  );
}
