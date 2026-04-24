import { useState } from 'react';
import { PillButton } from './PillButton';

export function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <label className="block font-body text-xs uppercase tracking-widest text-text-primary/50 mb-3">
            Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-transparent border-b border-text-primary/20 pb-3 font-body text-base text-text-primary placeholder:text-text-primary/30 focus:outline-none focus:border-text-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        <div className="relative">
          <label className="block font-body text-xs uppercase tracking-widest text-text-primary/50 mb-3">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-transparent border-b border-text-primary/20 pb-3 font-body text-base text-text-primary placeholder:text-text-primary/30 focus:outline-none focus:border-text-primary transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="relative">
        <label className="block font-body text-xs uppercase tracking-widest text-text-primary/50 mb-3">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-transparent border-b border-text-primary/20 pb-3 font-body text-base text-text-primary placeholder:text-text-primary/30 focus:outline-none focus:border-text-primary transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>
      <div className="pt-4">
        {submitted ? (
          <p className="font-body text-sm text-text-primary/70">Thank you. I will be in touch soon.</p>
        ) : (
          <PillButton>Send Message</PillButton>
        )}
      </div>
    </form>
  );
}
