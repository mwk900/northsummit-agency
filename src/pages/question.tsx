import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import ContactForm from '@/components/ContactForm';

export default function Question() {
  const router = useRouter();
  const packageParam = (router.query.package as string) || '';
  const packageLabel =
    packageParam === 'starter' ? 'Starter' :
    packageParam === 'growth' ? 'Growth' :
    packageParam === 'premium' ? 'Premium' : '';

  return (
    <>
      <SEOHead
        title="Ask a Quick Question"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <ContactForm intent="question" packageContext={packageParam || undefined} />
          </motion.div>

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
