import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/utils';

export function AboutSection() {
  const { ref: titleRef, isInView: titleInView } = useInView<HTMLDivElement>();
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="bg-[#F5F5F0] py-28 md:py-48 px-5 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div
          ref={titleRef}
          className={cn(
            'mb-12 md:mb-20 transition-all duration-700 ease-out',
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="font-body text-label text-[rgba(26,26,26,0.4)] block mb-3">
            About
          </span>
          <h2 className="font-display text-display-section leading-none tracking-tight text-[#1A1A1A]">
            YOUSEF<br />KHALED
          </h2>
        </div>

        <div
          ref={textRef}
          className={cn(
            'grid md:grid-cols-2 gap-10 md:gap-24 transition-all duration-700 ease-out delay-200',
            textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="space-y-5">
            <p className="font-body text-lg md:text-xl leading-relaxed text-[rgba(26,26,26,0.8)]">
              A multidisciplinary designer with a background in law, now crafting digital
              experiences that bridge strategy and aesthetics. Based in Cairo, working globally.
            </p>
            <p className="font-body text-base leading-relaxed text-[rgba(26,26,26,0.55)]">
              My journey from the courtroom to the canvas taught me that great design, like great
              arguments, requires clarity, conviction, and understanding your audience. Every
              project I take on is driven by purpose — design should communicate, not just decorate.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="border-t border-[rgba(26,26,26,0.1)] pt-4">
              <span className="font-display text-4xl md:text-5xl text-[#1A1A1A]">4+</span>
              <p className="font-body text-label text-[rgba(26,26,26,0.4)] mt-2">
                Years Experience
              </p>
            </div>
            <div className="border-t border-[rgba(26,26,26,0.1)] pt-4">
              <span className="font-display text-4xl md:text-5xl text-[#1A1A1A]">5</span>
              <p className="font-body text-label text-[rgba(26,26,26,0.4)] mt-2">
                Certifications
              </p>
            </div>
            <div className="border-t border-[rgba(26,26,26,0.1)] pt-4">
              <span className="font-display text-4xl md:text-5xl text-[#1A1A1A]">∞</span>
              <p className="font-body text-label text-[rgba(26,26,26,0.4)] mt-2">
                Curiosity
              </p>
            </div>
            <div className="border-t border-[rgba(26,26,26,0.1)] pt-4">
              <span className="font-display text-4xl md:text-5xl text-[#1A1A1A]">2</span>
              <p className="font-body text-label text-[rgba(26,26,26,0.4)] mt-2">
                Languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}