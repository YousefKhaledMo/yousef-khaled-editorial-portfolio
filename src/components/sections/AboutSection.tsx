import { useInView } from '../../hooks/useInView';
import { cn } from '../../lib/utils';

export function AboutSection() {
  const { ref: titleRef, isInView: titleInView } = useInView<HTMLDivElement>();
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="bg-bg-primary py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={titleRef}
          className={cn(
            'mb-16 md:mb-24 transition-all duration-700 ease-out',
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-4">
            About
          </span>
          <h2 className="font-display text-display-section leading-none tracking-tight text-text-primary">
            YOUSEF<br />KHALED
          </h2>
        </div>

        <div
          ref={textRef}
          className={cn(
            'grid md:grid-cols-2 gap-12 md:gap-24 transition-all duration-700 ease-out delay-200',
            textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="space-y-6">
            <p className="font-body text-lg md:text-xl leading-relaxed text-text-primary/80">
              A multidisciplinary designer with a background in law, now crafting digital
              experiences that bridge strategy and aesthetics. Based in Cairo, working globally.
            </p>
            <p className="font-body text-base leading-relaxed text-text-primary/60">
              My journey from the courtroom to the canvas taught me that great design, like great
              arguments, requires clarity, conviction, and understanding your audience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="border-t border-border-light pt-4">
              <span className="font-display text-4xl md:text-5xl text-text-primary">4+</span>
              <p className="font-body text-xs uppercase tracking-widest text-text-primary/50 mt-2">
                Years Experience
              </p>
            </div>
            <div className="border-t border-border-light pt-4">
              <span className="font-display text-4xl md:text-5xl text-text-primary">∞</span>
              <p className="font-body text-xs uppercase tracking-widest text-text-primary/50 mt-2">
                Curiosity
              </p>
            </div>
            <div className="border-t border-border-light pt-4">
              <span className="font-display text-4xl md:text-5xl text-text-primary">5</span>
              <p className="font-body text-xs uppercase tracking-widest text-text-primary/50 mt-2">
                Certifications
              </p>
            </div>
            <div className="border-t border-border-light pt-4">
              <span className="font-display text-4xl md:text-5xl text-text-primary">2</span>
              <p className="font-body text-xs uppercase tracking-widest text-text-primary/50 mt-2">
                Languages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}