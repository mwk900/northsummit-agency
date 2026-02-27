import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import { siteConfig } from '@/data/site';

export default function Question() {
  const router = useRouter();
  const packageParam = (router.query.package as string) || '';
  const packageLabel =
    packageParam === 'starter' ? 'Starter' :
    packageParam === 'growth' ? 'Growth' :
    packageParam === 'premium' ? 'Premium' : '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '', // honeypot
    package: packageParam,
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please add a bit more detail (at least 10 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'question',
          name: formData.name,
          email: formData.email,
          phone: '',
          websiteUrl: '',
          trade: '',
          serviceArea: '',
          message: formData.package
            ? `[Interested in: ${formData.package}]\n\n${formData.message}`
            : formData.message,
          company: formData.company,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', company: '', package: packageParam });
      } else {
        const data = await response.json().catch(() => null);
        if (data?.error === 'rate_limit') {
          setErrors({ message: 'Too many requests. Please wait a moment and try again.' });
          setStatus('idle');
        } else {
          setStatus('error');
        }
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full px-4 py-3 rounded-lg border text-text-primary placeholder-text-secondary text-sm transition-colors focus:border-accent focus:ring-0 ${
      hasError ? 'border-red-500' : 'border-border-color'
    }`;
  const inputStyle = { backgroundColor: 'var(--secondary-bg)' };

  if (status === 'success') {
    return (
      <>
        <SEOHead
          title="Question Sent | NorthSummit"
          description="Thanks for reaching out. We'll get back to you within 24 hours."
          path="/question"
        />
        <section className="py-20">
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 px-6 rounded-xl border border-border-color"
              style={{ backgroundColor: 'var(--secondary-bg)' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">Message sent!</h3>
              <p className="text-text-secondary">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <Link
                href="/"
                className="mt-6 inline-block px-6 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent/10 transition-colors"
              >
                Back to home
              </Link>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Quick Question | NorthSummit"
        description="Send us a quick question and we'll get back to you within 24 hours."
        path="/question"
      />

      <section className="py-20">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Quick question</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-4" />
            <p className="text-text-secondary">
              Got a question before you commit? No problem. Send it over and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          {packageLabel && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-6 px-4 py-3 rounded-lg border border-accent/20 bg-accent/5"
            >
              <p className="text-sm text-text-secondary">
                Interested in: <span className="font-semibold text-text-primary">{packageLabel}</span>
              </p>
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
          >
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Your name" className={inputClass(errors.name)} style={inputStyle} />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="your@email.com" className={inputClass(errors.email)} style={inputStyle} />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Your question</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="What would you like to know?"
                rows={4}
                className={`${inputClass(errors.message)} resize-y`}
                style={inputStyle}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>

            {status === 'error' && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <p className="text-xs text-text-secondary">
              We&apos;ll only use your details to reply to your message. No mailing lists.{' '}
              <Link href="/privacy" className="underline hover:text-accent">Privacy policy</Link>.
            </p>

            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-accent text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ color: 'var(--primary-bg)' }}
            >
              {status === 'submitting' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : 'Send question'}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 pt-6 border-t border-border-color text-center"
          >
            <p className="text-sm text-text-secondary">
              Need a detailed quote instead?{' '}
              <Link href={packageParam ? `/contact?package=${packageParam}` : '/contact'} className="text-accent font-medium hover:underline">
                Go to the full contact form
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
