import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";

export default function About() {
  return (
    <>
      <SEOHead
        title="About NorthSummit | UK Web Design Agency for Trades & Local Businesses"
        description="NorthSummit builds conversion-focused websites for tradespeople and local businesses across the UK. Fast turnaround, clear pricing, and direct communication from start to finish."
        path="/about"
      />

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-accent font-medium mb-3">
              About NorthSummit
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6"
            >
              Built for businesses that want results — not just a pretty website.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="space-y-4 text-text-secondary leading-relaxed text-lg"
            >
              <p>
                NorthSummit was built on a simple frustration: too many small businesses and tradespeople were paying
                good money for websites that looked fine but did nothing. No calls. No enquiries. Just a digital
                business card collecting dust.
              </p>
              <p>
                We do things differently. Every site we build starts with one question —{" "}
                <span className="text-text-primary font-medium">what does this business need to achieve?</span> From
                there, every design decision, every headline, every button placement is made with conversion in mind.
              </p>
              <p>
                We work with a focused roster of clients at any one time — which means you get real attention,
                fast turnaround, and direct communication with the people actually building your site. No account
                managers, no hand-offs, no fluff.
              </p>
              <p>
                Mati leads every project from brief to launch, combining modern tooling with a sharp focus on
                what actually moves the needle for trades and local businesses across the UK.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-10 text-center"
          >
            How we work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "⚡",
                title: "Fast turnaround",
                text: "Most sites go live in 3–7 days. No waiting weeks for a basic website.",
              },
              {
                icon: "🎯",
                title: "Conversion-first thinking",
                text: "Every element is designed to turn visitors into enquiries — not just look good.",
              },
              {
                icon: "💬",
                title: "Direct communication",
                text: "You speak directly with whoever is building your site. No middlemen, ever.",
              },
              {
                icon: "🔍",
                title: "Technical SEO included",
                text: "Every site is built with proper technical SEO — fast load times, clean code, correct structure. Google rankings take months, but you'll start in the right position.",
              },
              {
                icon: "📱",
                title: "Mobile-first by default",
                text: "Most of your customers are on their phones. Every site is built for that first.",
              },
              {
                icon: "💷",
                title: "Transparent pricing",
                text: "No hidden fees, no surprise invoices. You know the full cost before we start.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border-color" style={{ backgroundColor: "var(--primary-bg)" }}>
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
          >
            Why our sites perform better
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-text-secondary leading-relaxed mb-8"
          >
            We don&apos;t use WordPress, Wix, or Squarespace. We build with{" "}
            <span className="text-text-primary font-medium">Next.js and Tailwind CSS</span> — modern tools that
            produce fast, clean, lightweight websites. Google rewards well-structured, fast-loading sites — and fast
            sites convert better. Your customers notice the difference even if they can&apos;t explain why.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "Tailwind CSS", "Vercel / Netlify", "TypeScript", "Mobile-first", "Core Web Vitals optimised"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border-color text-sm text-text-secondary"
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Ready to work together?</h2>
          <p className="text-text-secondary mb-8">Get in touch and we&apos;ll get back to you within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              Get a quote
            </Link>
            <a
              href="https://calendly.com/north-summit-tuta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}