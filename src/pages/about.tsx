import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";

export default function About() {
  return (
    <>
      <SEOHead
        title="About NorthSummit | UK Web Design for Trades & Local Businesses"
        description="NorthSummit builds websites for tradespeople and local businesses across the UK. One person, direct communication, honest pricing."
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
              Built for businesses that want results. Not just a pretty website.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="space-y-4 text-text-secondary leading-relaxed text-lg"
            >
              <p>
                Hi, I&apos;m Mati. I run NorthSummit and I build every site myself. No outsourcing, no middlemen, no account managers passing messages back and forth.
              </p>
              <p>
                NorthSummit exists because too many tradespeople and small businesses were paying good money for a website that did nothing. No calls. No enquiries. Just an expensive page sitting on the internet.
              </p>
              <p>
                We took a different approach. Before anything gets designed, we ask one question.{" "}
                <span className="text-text-primary font-medium">what does this business actually need the website to do?</span>{" "}
                Every layout, every headline, and every button is there for a reason. It is there to get your phone ringing.
              </p>
              <p>
                I only take on a handful of projects at a time so each one gets proper attention. You speak directly with the person building your site, and you&apos;ll never wait a week for a reply.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you can expect */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-10 text-center"
          >
            What you can expect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: "💬", title: "You talk to the person building it", text: "No middlemen, no account managers. You speak directly with whoever is working on your site." },
              { icon: "🎯", title: "Built to bring in work", text: "Every element on your site is there to turn visitors into enquiries. It is not there just to look good." },
              { icon: "📱", title: "Mobile-first", text: "Most of your customers are searching on their phones. Every site is built for that first." },
              { icon: "🔍", title: "Technical SEO included", text: "Fast load times, clean code, correct structure. Google rankings take months, but you'll start in the right position." },
              { icon: "💷", title: "You know the price upfront", text: "No hidden fees, no surprise invoices. You know the full cost before we start." },
              { icon: "🔒", title: "You own everything", text: "Your domain, hosting, and code stay in your name. Nothing is ever tied to us. You can move or change anything at any time." },
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

      {/* Tech section: balanced, not defensive */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
          >
            How we build differently
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-text-secondary leading-relaxed mb-8"
          >
            Platforms like Wix and WordPress can be a perfectly good fit when you only need a basic online presence.
            We typically work with trades and local services that need speed, clarity, and a layout built to generate calls.
            That&apos;s why we build lightweight, custom sites with clean code and strong technical foundations so the site
            feels fast on mobile and is easy to expand later.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "Tailwind CSS", "Vercel / Netlify", "TypeScript", "Mobile-first", "Core Web Vitals optimised"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full border border-border-color text-sm text-text-secondary" style={{ backgroundColor: "var(--secondary-bg)" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Want to see what we&apos;d build for you?</h2>
          <p className="text-text-secondary mb-8">Get in touch and we&apos;ll get back to you within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
              Get a free quote
            </Link>
            <a href="https://calendly.com/north-summit-tuta/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors">
              Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
