import { Marquee } from '../ui/Marquee';

export function Footer() {
  return (
    <footer className="bg-bg-dark text-text-inverse">
      <div className="py-16 md:py-24 overflow-hidden">
        <Marquee speed={20} className="font-display text-[clamp(60px,12vw,160px)] leading-none tracking-tight">
          <span className="mx-8">LET&apos;S TALK</span>
          <span className="mx-8 text-text-inverse/20">—</span>
          <span className="mx-8">LET&apos;S TALK</span>
          <span className="mx-8 text-text-inverse/20">—</span>
          <span className="mx-8">LET&apos;S TALK</span>
          <span className="mx-8 text-text-inverse/20">—</span>
          <span className="mx-8">LET&apos;S TALK</span>
          <span className="mx-8 text-text-inverse/20">—</span>
        </Marquee>
      </div>

      <div className="border-t border-text-inverse/10 px-6 md:px-12 py-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
            <span className="font-display text-xl tracking-tight">Yousef Khaled</span>
            <span className="font-body text-xs uppercase tracking-widest text-text-inverse/50">
              Visual Designer
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="mailto:youseefkhald@gmail.com"
              className="font-body text-xs uppercase tracking-widest text-text-inverse/60 hover:text-text-inverse transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/yousef-khaled-mo5"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs uppercase tracking-widest text-text-inverse/60 hover:text-text-inverse transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <span className="font-body text-[10px] uppercase tracking-widest text-text-inverse/30">
            © {new Date().getFullYear()} All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
