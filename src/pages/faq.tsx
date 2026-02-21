import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "We currently have a limited launch offer while we build our portfolio.\n\nLaunch prices:\n- £99 - single-page site\n- £299 - up to 4 pages\n- £599 - full multi-page build\n\nStandard pricing is higher (£249 / £599 / £1,199), but the launch offer is available for a small number of businesses in exchange for honest feedback and permission to show the finished site in our portfolio.\n\nAll prices are fixed - you'll know the exact cost before we start. No hidden fees, no surprise invoices.",
},
  {
    q: "Is hosting included in the price?",
    a: "Hosting is not included in the build price - it's a separate ongoing cost. We'll guide you through the best options for your site (typically £5-£20/month depending on your needs), help you get set up, and make sure everything is configured correctly. The hosting account is always in your name - it's never tied to us.",
  },
  {
    q: "Do I own the website?",
    a: "Yes - 100%. Once the project is complete and paid for, the code and design are yours. We recommend registering your domain in your own name from the start and setting up hosting under your own account - we'll guide you through both. That way nothing is ever tied to us. You can move, change, or hand the site to any other developer at any time.",
  },
  {
    q: "How long until my site is live?",
    a: "Starter single-page sites typically go live in 3-5 days. Growth packages (up to 4 pages) usually take 7-10 days. Premium builds are typically 2-3 weeks. Timelines depend on how quickly you can provide content, feedback, and approvals - we'll keep things moving from our end.",
  },
  {
    q: "Do I need to provide my own photos and text?",
    a: "Ideally yes - you know your business better than anyone. We'll tell you exactly what we need: a short description of your services, your contact details, your service area, and so on. If you don't have photos, we can use high-quality stock images that suit your trade. We can also help with basic copywriting if needed.",
  },
  {
    q: "Will my site show up on Google straight away?",
    a: "Every site we build includes proper technical SEO foundations - page titles, meta descriptions, heading structure, fast load times, mobile optimisation, and clean code. This gives you the best possible starting point. However, ranking on Google typically takes 3-6 months minimum and depends on the competition in your area and how established your business is. We build it right - the rankings follow with time.",
  },
  {
    q: "Why not just use Wix or Squarespace?",
    a: "Wix and Squarespace are template builders - they're fine for a basic online presence but they're slow, generic, and harder to rank on Google. We build custom sites that are significantly faster, cleaner in code, and built specifically around your business and your customers. The difference shows in both performance and how the site converts visitors.",
  },
  {
    q: "What if I want changes after launch?",
    a: "All packages include at least one round of revisions before launch. After that, we offer ongoing support - whether that's a quick text change, a new service page, or a full update. Just get in touch and we'll sort it. We don't lock you into expensive monthly retainers for basic changes.",
  },
  {
    q: "How do I get started?",
    a: "Just hit 'Get a quote' or 'Book a call' - tell us a bit about your business and what you need, and we'll get back to you within 24 hours (usually the same day). From there we'll send a clear quote, agree on a timeline, and get started. No lengthy contracts, no complicated onboarding.",
  },
  {
    q: "Do you work with businesses outside the UK?",
    a: "Yes - we work with businesses across the UK and Europe. Everything is handled remotely so location is never an issue. We communicate via email, video call, or whatever works best for you.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. Redesigns are one of the most common projects we take on. Whether your current site is slow, outdated, not mobile-friendly, or simply not bringing in enquiries - we can assess what's wrong and rebuild it properly. We also offer free website audits if you want an honest assessment first.",
  },
  {
    q: "What about domain names?",
    a: "If you already have one, great - we'll use it. If not, we'll help you choose and register one. We always recommend registering it in your own name so you have full control. A domain typically costs around £10-£15/year.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border-color rounded-xl overflow-hidden" style={{ backgroundColor: "var(--secondary-bg)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left gap-4">
        <span className="text-sm font-semibold text-text-primary">{q}</span>
        <span className={`shrink-0 transition-transform duration-300 text-accent ${open ? "rotate-45" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <SEOHead
        title="FAQ - Web Design for Trades & Local Businesses | NorthSummit"
        description="Common questions about NorthSummit web design services - pricing, hosting, timelines, ownership, SEO, and more. Clear answers, no jargon."
        path="/faq"
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }} className="text-accent font-medium mb-3">
              Got questions?
            </motion.p>
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Frequently asked questions</h1>
            <p className="text-text-secondary">
              Straight answers to the questions we get asked most. If yours isn&apos;t here,{" "}
              <a
                href="https://calendly.com/north-summit-tuta/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                book a quick call
              </a>{" "}
              and we&apos;ll talk it through.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Still got questions?</h2>
          <p className="text-text-secondary mb-8">
            Book a free call and ask us anything. No pressure, no commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/north-summit-tuta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              Book a free call
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
