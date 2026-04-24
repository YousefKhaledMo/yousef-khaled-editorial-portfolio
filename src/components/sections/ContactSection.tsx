import { useState } from 'react';
import { PillButton } from '../ui/PillButton';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="bg-[#F5F5F0] py-28 md:py-48 px-5 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <span className="font-body text-label text-[rgba(26,26,26,0.4)] block mb-3">
              Contact
            </span>
            <h2 className="font-display text-display-section leading-none tracking-tight text-[#1A1A1A] mb-6 md:mb-8">
              LET&apos;S<br />WORK
            </h2>
            <p className="font-body text-base leading-relaxed text-[rgba(26,26,26,0.55)] max-w-sm mb-10">
              Have a project in mind or just want to say hello? I am always open to discussing
              new opportunities and creative collaborations.
            </p>
            <div className="space-y-4">
              <div>
                <span className="font-body text-label text-[rgba(26,26,26,0.35)] block mb-1">
                  Email
                </span>
                <a
                  href="mailto:youseefkhald@gmail.com"
                  className="font-body text-base text-[#1A1A1A] hover:opacity-60 transition-opacity"
                >
                  youseefkhald@gmail.com
                </a>
              </div>
              <div>
                <span className="font-body text-label text-[rgba(26,26,26,0.35)] block mb-1">
                  LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/yousef-khaled-mo5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-[#1A1A1A] hover:opacity-60 transition-opacity"
                >
                  yousef-khaled-mo5
                </a>
              </div>
              <div>
                <span className="font-body text-label text-[rgba(26,26,26,0.35)] block mb-1">
                  Location
                </span>
                <span className="font-body text-base text-[rgba(26,26,26,0.7)]">
                  Cairo, Egypt
                </span>
              </div>
            </div>
          </div>

          <div className="md:pt-24">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <p className="font-body text-lg text-[rgba(26,26,26,0.7)]">
                  Thank you. I will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-body text-label text-[rgba(26,26,26,0.4)] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[rgba(26,26,26,0.15)] pb-3 font-body text-base text-[#1A1A1A] placeholder:text-[rgba(26,26,26,0.25)] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-label text-[rgba(26,26,26,0.4)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[rgba(26,26,26,0.15)] pb-3 font-body text-base text-[#1A1A1A] placeholder:text-[rgba(26,26,26,0.25)] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-label text-[rgba(26,26,26,0.4)] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[rgba(26,26,26,0.15)] pb-3 font-body text-base text-[#1A1A1A] placeholder:text-[rgba(26,26,26,0.25)] focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <div className="pt-2">
                  <PillButton>Send Message</PillButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}