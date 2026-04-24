import { useEffect, useState } from 'react';

export function TopBar() {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-b border-[rgba(26,26,26,0.1)] py-2.5 px-5 md:px-10 bg-[#F5F5F0]">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="font-body text-label text-[rgba(26,26,26,0.5)]">
            Cairo, Egypt
          </span>
          <span className="hidden md:inline font-body text-label text-[rgba(26,26,26,0.3)]">
            30.0444° N, 31.2357° E
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {mounted && (
            <span className="font-body text-label text-[rgba(26,26,26,0.5)]">
              {time} EET
            </span>
          )}
        </div>
      </div>
    </div>
  );
}