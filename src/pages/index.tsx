import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/utils/seo";
import { siteConfig } from "@/data/site";
import ScrollSpyNav from "@/components/ScrollSpyNav";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const childFade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const featuredProjects = siteConfig.projects.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Web Design for Trades & Local Businesses | UK Web Design Agency"
        description="Affordable web design for tradespeople and local businesses across the UK. Fast turnaround, clear pricing, conversion-focused. Get more calls and enquiries from your website."
        jsonLd={[generateOrganizationSchema(), generateWebSiteSchema()]}
      />

      <ScrollSpyNav
        position="right"
        showAfterPx={250}
        offsetTopPx={96}
        sections={[
          { id: "process", label: "Steps", icon: "steps" },
          { id: "portfolio", label: "Portfolio", icon: "portfolio" },
          { id: "who-this-is-for", label: "Fit", icon: "fit" },
          { id: "audit", label: "Audit", icon: "audit" },
          { id: "pricing", label: "Pricing", icon: "pricing" },
          { id: "next", label: "Begin", icon: "begin" },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.p custom={0} initial="hidden" animate="visible" variants={fadeIn} className="text-accent font-medium mb-4">
              Web design for trades &amp; local businesses &middot; {siteConfig.agency.location}
            </motion.p>

            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeIn}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4"
            >
              {siteConfig.agency.tagline}
            </motion.h1>

            <motion.p custom={2} initial="hidden" animate="visible" variants={fadeIn}
              className="text-base sm:text-lg text-text-secondary max-w-xl mb-6"
            >
              Affordable websites for plumbers, roofers, mechanics, and local businesses across the UK — designed to rank on Google and turn visitors into paying customers.
            </motion.p>

            <motion.p custom={3} initial="hidden" animate="visible" variants={fadeIn} className="mt-4 text-xs text-text-secondary">
              Typical response time: under 24 hours (often same day).
            </motion.p>

            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
                  Get a quote
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a href="https://calendly.com/north-summit-tuta/30min" target="_blank" rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
                >
                  Book a call
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-20" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            Website design for trades &amp; local businesses
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            We build fast, conversion-focused websites for tradespeople, local businesses, and growing companies across the UK.
            From single-page trade sites to full multi-page builds — designed to rank on Google, load fast, and turn visitors into enquiries.
          </motion.p>
        </div>
      </section>

      {/* How We Build */}
      <section id="process" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">How we build your website</h2>
            <p className="text-text-secondary">A straightforward, collaborative approach focused on speed, clarity, and results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Simple start", text: "You tell us what you need - no long forms or complicated onboarding." },
              { step: "2", title: "Collaborative build", text: "We design and develop your site while keeping you involved at key points." },
              { step: "3", title: "Fast launch", text: "Your website goes live quickly with modern performance and SEO foundations." },
              { step: "4", title: "Ongoing support", text: "We can help with updates, improvements, or future changes whenever needed." },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl border border-border-color" style={{ backgroundColor: "var(--secondary-bg)" }}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4">{item.step}</span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="portfolio" className="py-20" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Recent work</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Example projects showing conversion-first website designs for trades and local businesses.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-color text-text-primary text-sm font-medium hover:border-accent hover:text-accent transition-colors">
                View all projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="who-this-is-for" className="pt-16 pb-8" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">Who this is for</h2>
            <p className="text-base sm:text-lg text-text-secondary mb-10">
              NorthSummit is built for UK trades and local businesses that want a professional website without the agency price tag — and without the wait.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 max-w-5xl mx-auto">
            {[
              "🔧 Trades & home services (plumbers, roofers, mechanics, electricians)",
              "📍 Local businesses that need more calls and enquiries",
              "🚀 New businesses launching and need a site fast",
              "⚡ Businesses with outdated, slow, or non-mobile-friendly websites",
              "💼 Companies that want clear pricing and a fast turnaround",
              "✅ Anyone who wants a professional site without big agency fees",
            ].map((item) => (
              <div key={item} className="group rounded-xl border border-border-color px-5 py-4 transition-all duration-300 hover:-translate-y-[2px]" style={{ backgroundColor: "var(--primary-bg)" }}>
                <p className="text-text-primary/90 font-medium transition-colors group-hover:text-text-primary">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-text-secondary">If that sounds like you, <span className="font-semibold text-text-primary">we can help.</span></p>
          </div>
        </div>
      </section>

      {/* Launch Offer Banner */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="font-semibold text-amber-900">🚀 Launch Offer — 5 spots only</p>
              <p className="text-sm text-amber-900/80">
                First 5 clients receive discounted pricing in exchange for honest feedback and permission to feature the project in our portfolio.{" "}
                <span className="font-semibold">Limited availability.</span>
              </p>
            </div>
            <Link href="/contact" className="inline-flex justify-center whitespace-nowrap px-4 py-2 rounded-lg bg-amber-900 text-sm font-semibold hover:opacity-90 transition-opacity" style={{ color: "#fff" }}>
              Claim your spot →
            </Link>
          </div>
        </div>
      </section>

      {/* Free Audit */}
      <section id="audit" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border-color p-8 sm:p-10" style={{ backgroundColor: "var(--secondary-bg)" }}>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Get a free website audit</h2>
                <p className="mt-3 text-text-secondary max-w-2xl">
                  I&apos;ll review your current website and send back clear, practical improvements to help you get more calls and enquiries. No obligation — just useful feedback.
                </p>
                <ul className="mt-6 grid sm:grid-cols-3 gap-3">
                  {["Quick wins to improve conversions", "Mobile and speed checks", "Clear CTA + layout fixes"].map((item) => (
                    <li key={item} className="rounded-xl border border-border-color px-4 py-3 text-sm text-text-secondary" style={{ backgroundColor: "var(--primary-bg)" }}>{item}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-text-secondary">Typical turnaround: 24–48 hours. No spam, no pressure.</p>
              </div>
              <div className="lg:col-span-1">
                <div className="rounded-xl border border-border-color p-5" style={{ backgroundColor: "var(--primary-bg)" }}>
                  <p className="text-sm font-semibold text-text-primary">Want the audit?</p>
                  <p className="mt-1 text-sm text-text-secondary">Send your website link and what you do — I&apos;ll do the rest.</p>
                  <div className="mt-4 flex flex-col gap-3">
                    <a href="/contact?intent=audit" className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-accent hover:opacity-90 transition" style={{ color: "var(--primary-bg)" }}>
                      Request free audit
                    </a>
                    <a href="https://calendly.com/north-summit-tuta/30min" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold border border-border-color hover:bg-white/5 transition" style={{ color: "var(--text-primary)" }}>
                      Book a call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Website design pricing — no hidden fees</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Transparent, fixed pricing for UK trades and local businesses. Pick a package or get in touch for something custom.</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {siteConfig.pricing.map((pkg) => (
              <motion.div key={pkg.name} variants={childFade}
                className={`relative p-6 rounded-xl border ${pkg.popular ? "border-accent shadow-lg shadow-accent/10" : "border-border-color"}`}
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-xs font-semibold" style={{ color: "var(--primary-bg)" }}>
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-text-primary mb-1">{pkg.name}</h3>
                <p className="text-3xl font-bold text-accent mb-2">from {pkg.price}</p>
                <p className="text-sm text-text-secondary mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact"
                    className={`block text-center py-3 rounded-lg text-sm font-semibold transition-all ${pkg.popular ? "bg-accent hover:opacity-90" : "border border-accent text-accent hover:bg-accent/10"}`}
                    style={pkg.popular ? { color: "var(--primary-bg)" } : undefined}
                  >
                    Get a quote
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section id="next" className="py-20" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">What happens next?</h2>
            <p className="text-text-secondary">Clear steps, no pressure — you decide if it&apos;s right for you.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "We review your business", text: "We look at your goals, competitors, and what your website needs to achieve." },
              { step: "2", title: "You get a clear quote", text: "No hidden fees. You'll know exactly what's included and the timeline." },
              { step: "3", title: "You decide", text: "There's no obligation - you choose whether to move forward." },
              { step: "4", title: "We start building", text: "Once approved, we begin building and keep you updated along the way." },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl border border-border-color" style={{ backgroundColor: "var(--primary-bg)" }}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4">{item.step}</span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Ready to get more enquiries?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-text-secondary mb-8">
            Get in touch today and we&apos;ll get back to you within 24 hours — often the same day.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
                Get a quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href="https://calendly.com/north-summit-tuta/30min" target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
              >
                Book a call
              </a>
            </motion.div>
          </motion.div>
          <p className="mt-4 text-xs text-text-secondary">No obligation. We typically respond within a few hours during business hours.</p>
        </div>
      </section>
    </>
  );
}