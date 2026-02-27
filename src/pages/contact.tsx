import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/data/site';

export default function Contact() {
  const router = useRouter();
  const packageParam = (router.query.package as string) || '';
  const packageLabel =
    packageParam === 'starter' ? 'Starter' :
    packageParam === 'growth' ? 'Growth' :
    packageParam === 'premium' ? 'Premium' : '';

  return (
    <>
      <SEOHead
        title="Get a Quote | NorthSummit"
        description="Tell us what you need and we'll get back to you within 24 hours. Clear pricing, no obligation."
        path="/contact"
      />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
              {packageParam === 'premium' ? 'Discuss your project' : 'Get a quote'}
            </h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-4" />
            <p className="text-text-secondary">Tell us what you need and we&apos;ll get back to you within 24 hours.</p>
          </motion.div>

          {/* Package interest badge */}
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

          {/* Calendly CTA for Premium */}
          {packageParam === 'premium' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mb-6 p-5 rounded-xl border border-border-color text-center"
              style={{ backgroundColor: 'var(--secondary-bg)' }}
            >
              <p className="text-sm text-text-secondary mb-3">
                Premium projects work best with a quick conversation first.
              </p>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
                style={{ color: 'var(--primary-bg)' }}
              >
                Book a 30-min call
              </a>
              <p className="mt-2 text-xs text-text-secondary">Or fill in the form below if you prefer.</p>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <ContactForm intent="quote" />

            {packageParam !== 'premium' && (
              <div className="mt-4">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-lg text-sm font-semibold border border-border-color text-text-secondary hover:border-accent hover:text-accent transition-colors"
                >
                  Prefer a call? Book a time
                </a>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 pt-8 border-t border-border-color"
          >
            <p className="text-sm font-semibold text-text-primary mb-2">Or reach out directly</p>
            <a
              href={`mailto:${siteConfig.agency.email}`}
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {siteConfig.agency.email}
            </a>
            <p className="mt-1 text-sm text-text-secondary">{siteConfig.agency.location}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
