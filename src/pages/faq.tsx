import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";

const faqs = 
[
  {
    q: "How much does a website cost?",
    a: "Right now, our pricing is lower while we build our portfolio and work with our first clients:\n\n- £149 - single-page website\n- From £349 - up to 4 pages\n- From £699 - full multi-page website\n\nThe exact price depends on what you need, but we’ll always confirm the full cost with you before any work starts - so there are no surprises later.\n\nThese are introductory rates and won’t stay this way forever. As our portfolio grows, pricing will gradually increase.",
  },
  {
    q: "Is hosting included in the price?",
    a: "Hosting isn’t included in the build price - it’s a separate ongoing cost. We’ll guide you to the best option for your site (typically £5-£20/month), help you get set up, and make sure everything is configured correctly. The hosting account is always in your name, never tied to us.",
  },
  {
    q: "Do I own the website?",
    a: "Yes - 100%. Once the project is complete and paid for, the code and design are yours. We recommend registering your domain in your own name and setting up hosting under your own account - we’ll guide you through both. That way nothing is ever tied to us, and you can move or hand the site to another developer at any time.",
  },
  {
    q: "How long until my site is live?",
    a: "That depends on the scope of the project and how quickly you’re able to provide content and feedback. We’ll agree a realistic timeline before starting so expectations are clear from the beginning. You’ll hear back from us within 24 hours of getting in touch, and we keep things moving throughout the build.",
  },
  {
    q: "Do I need to provide my own photos and text?",
    a: "Ideally yes - you know your business better than anyone. We’ll tell you exactly what we need, such as a short description of your services, your contact details, and your service area. If you don’t have photos, we can use high-quality stock images that suit your trade. We can also help with basic copywriting if needed.",
  },
  {
    q: "Will my site show up on Google straight away?",
    a: "Every site we build includes solid technical SEO foundations - page titles, meta descriptions, heading structure, fast load times, mobile optimisation, and clean code. This gives you the best possible starting point. Rankings take time and depend on competition in your area, but many businesses begin seeing progress within a few months. We build it properly from day one so you’re set up for long-term results.",
  },
  {
    q: "Why not just use Wix or Squarespace?",
    a: "Platforms like Wix and Squarespace can be a good option if you only need a simple online presence. We usually work with trades and local services that need speed, clarity, and a layout designed to generate enquiries. That’s why we build lightweight, custom sites with clean code - so the site feels fast on mobile, is easy to expand later, and is built specifically around your business and your customers.",
  },
  {
    q: "What if I want changes after launch?",
    a: "All packages include at least one round of revisions before launch. After that, we offer pay-as-you-go support for updates - whether that’s a quick text change, a new service page, or something bigger. Just get in touch and we’ll sort it. We don’t lock you into expensive monthly retainers for basic changes.",
  },
  {
    q: "How do I get started?",
    a: "Just click ‘Get a quote’ or ‘Book a call’, tell us a bit about your business and what you need, and we’ll get back to you within 24 hours (usually the same day). From there we’ll send a clear quote, agree a timeline, and get started. No lengthy contracts or complicated onboarding.",
  },
  {
    q: "Do you work with businesses outside the UK?",
    a: "Yes. We’re UK-based, and we also work with businesses across Europe. Everything is handled remotely, so location is never a problem. We communicate via email, video call, or whatever works best for you.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. Redesigns are one of the most common projects we take on. Whether your current site is slow, outdated, not mobile-friendly, or simply not bringing in enquiries, we can assess what’s wrong and rebuild it properly. We also offer free website audits if you want an honest assessment first.",
  },
  {
    q: "What about domain names?",
    a: "If you already have a domain, great - we’ll use it. If not, we’ll help you choose and register one. We always recommend registering it in your own name so you have full control. A domain typically costs around £10-£15 per year.",
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
            <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed whitespace-pre-line">{a}</p>
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
        description="Common questions about NorthSummit web design services — pricing, hosting, timelines, ownership, SEO, and more. Clear answers, no jargon."
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
