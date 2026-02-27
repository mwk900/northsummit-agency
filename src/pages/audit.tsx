import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";

export default function Audit() {
  return (
    <>
      <SEOHead
        title="Free Website Audit | NorthSummit"
        description="Send your website and we'll reply with clear, practical improvements to help you get more calls and enquiries. No obligation, no hard sell."
        path="/audit"
      />

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <p className="text-accent font-medium mb-2">Free with no strings attached</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Request a free website audit</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-4" />
            <p className="text-text-secondary">
              Send your website link and a few details about your business. We&apos;ll review it and reply with clear, practical improvements you can act on. You can use them whether you work with us or not.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-xl border border-border-color p-5 mb-8"
            style={{ backgroundColor: "var(--secondary-bg)" }}
          >
            <p className="text-sm font-semibold text-text-primary mb-2">To get the best audit, include:</p>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span> Your website URL
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span> Your trade or service
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span> Your service area (town/city + radius)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span> What you want more of (calls, quote requests, bookings)
              </li>
            </ul>
            <p className="mt-3 text-xs text-text-secondary">Typical turnaround: 24-48 hours. No spam, no hard sell.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <ContactForm intent="audit" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-center">
            <p className="text-sm text-text-secondary">
              Prefer a quick call?{" "}
              <a href="https://calendly.com/north-summit-tuta/30min" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Book a time
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
