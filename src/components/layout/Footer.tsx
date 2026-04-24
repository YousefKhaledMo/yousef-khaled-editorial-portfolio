export function Footer() {
  return (
    <footer className="bg-[#5C3D2E] text-[#F5F5F0]">
      {/* Marquee Section */}
      <div className="py-16 md:py-24 overflow-hidden">
        <div className="font-display text-[clamp(60px,12vw,160px)] leading-[0.85] tracking-tight whitespace-nowrap inline-flex animate-marquee will-change-transform">
          <span className="mx-6 md:mx-10">LET&apos;S TALK</span>
          <span className="mx-6 md:mx-10 text-[rgba(245,245,240,0.15)]">—</span>
          <span className="mx-6 md:mx-10">LET&apos;S TALK</span>
          <span className="mx-6 md:mx-10 text-[rgba(245,245,240,0.15)]">—</span>
          <span className="mx-6 md:mx-10">LET&apos;S TALK</span>
          <span className="mx-6 md:mx-10 text-[rgba(245,245,240,0.15)]">—</span>
          <span className="mx-6 md:mx-10">LET&apos;S TALK</span>
          <span className="mx-6 md:mx-10 text-[rgba(245,245,240,0.15)]">—</span>
          <span className="mx-6 md:mx-10">LET&apos;S TALK</span>
          <span className="mx-6 md:mx-10 text-[rgba(245,245,240,0.15)]">—</span>
          <span className="mx-6 md:mx-10">LET&apos;S TALK</span>
          <span className="mx-6 md:mx-10 text-[rgba(245,245,240,0.15)]">—</span>
        </div>
      </div>

      {/* Info Bar */}
      <div className="border-t border-[rgba(245,245,240,0.1)] px-5 md:px-10 py-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-body text-label text-[rgba(245,245,240,0.5)]">
              Cairo, Egypt
            </span>
            <a
              href="mailto:youseefkhald@gmail.com"
              className="font-body text-label text-[rgba(245,245,240,0.5)] hover:text-[#F5F5F0] transition-colors"
            >
              youseefkhald@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/yousef-khaled-mo5"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-label text-[rgba(245,245,240,0.5)] hover:text-[#F5F5F0] transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <span className="font-body text-[10px] uppercase tracking-[0.15em] text-[rgba(245,245,240,0.3)]">
            © {new Date().getFullYear()} Yousef Khaled. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}