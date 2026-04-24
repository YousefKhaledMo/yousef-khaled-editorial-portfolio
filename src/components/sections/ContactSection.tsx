import { ContactForm } from '../ui/ContactForm';

export function ContactSection() {
  return (
    <section id="about" className="bg-bg-primary py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <span className="font-body text-xs uppercase tracking-widest text-text-primary/50 block mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-display-section leading-none tracking-tight text-text-primary mb-8">
              CONTACT
            </h2>
            <p className="font-body text-base leading-relaxed text-text-primary/70 max-w-sm mb-12">
              Have a project in mind or just want to say hello? I am always open to discussing
              new opportunities and creative collaborations.
            </p>
            <div className="space-y-4">
              <div>
                <span className="font-body text-xs uppercase tracking-widest text-text-primary/40 block mb-1">
                  Email
                </span>
                <a
                  href="mailto:youseefkhald@gmail.com"
                  className="font-body text-base text-text-primary hover:opacity-70 transition-opacity"
                >
                  youseefkhald@gmail.com
                </a>
              </div>
              <div>
                <span className="font-body text-xs uppercase tracking-widest text-text-primary/40 block mb-1">
                  Location
                </span>
                <span className="font-body text-base text-text-primary/70">
                  Cairo, Egypt
                </span>
              </div>
            </div>
          </div>

          <div className="md:pt-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
