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

function SpotsCounter() {
  const { totalSpots, spotsClaimed, active } = siteConfig.launch;
  if (!active) return null;
  const remaining = totalSpots - spotsClaimed;
  const filled = spotsClaimed;

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {Array.from({ length: totalSpots }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i < filled ? "bg-accent" : "bg-border-color"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-text-secondary">
        <span className="font-semibold text-text-primary">{remaining}</span> of {totalSpots} spots left
      </span>
    </div>
  );
}

export default function Home() {
  const featuredProjects = siteConfig.projects.slice(0, 3);
  const spotsRemaining = siteConfig.launch.totalSpots - siteConfig.launch.spotsClaimed;

  return (
    <>
      <SEOHead
        title="Web Design for Trades & Local Businesses | UK Web Design Agency"
        description="Professional websites for plumbers, roofers, electricians, and local businesses across the UK. Fast turnaround, clear pricing, and a site that actually brings in work."
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
      <section className="relative min-h-[60vh] md:min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.p custom={0} initial="hidden" animate="visible" variants={fadeIn} className="text-accent font-medium mb-4">
              Web design for trades &middot; {siteConfig.agency.location}
            </motion.p>

            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeIn}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4"
            >
              {siteConfig.agency.tagline}
            </motion.h1>

            <motion.p custom={2} initial="hidden" animate="visible" variants={fadeIn}
              className="text-base sm:text-lg text-text-secondary max-w-xl mb-2"
            >
              Professional websites for plumbers, roofers, electricians, and local businesses across the UK. Your site live in as little as 3 days - with pricing you know upfront.
            </motion.p>

            <motion.p custom={3} initial="hidden" animate="visible" variants={fadeIn}
              className="text-sm text-text-secondary"
            >
              Every site is hand-built and personally checked before it goes live.
            </motion.p>

            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
                  Get a free quote
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

            <motion.p custom={5} initial="hidden" animate="visible" variants={fadeIn} className="mt-4 text-xs text-text-secondary">
              We respond within 24 hours - usually much sooner.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Launch Offer */}
      {siteConfig.launch.active && spotsRemaining > 0 && (
        <section className="py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-2xl">
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                      Get a professional website from {siteConfig.pricing[0].price} - seriously.
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-3">
                      We&apos;re taking on {siteConfig.launch.totalSpots} businesses at a heavily reduced rate while we build our portfolio. You get a custom-built website at a price that probably sounds too good to be true. In return, all we ask for is your honest feedback and permission to show off your site in our portfolio.
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      Every launch package includes a <span className="text-text-primary font-medium">free audit of your current website</span> before we start building - so you can see exactly what we&apos;d improve and why. No pressure after that. If you like what you see, we get to work.
                    </p>
                    <SpotsCounter />
                  </div>
                  <div className="shrink-0 flex flex-col gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-opacity"
                      style={{ color: "var(--primary-bg)" }}
                    >
                      Claim a spot
                    </Link>
                    <p className="text-xs text-text-secondary text-center">No commitment until you&apos;re happy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* What We Do */}
      <section id="services" className="py-20" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            What we actually build
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            Websites that do something for your business. Not a digital business card that sits there collecting dust -
            a proper site that loads fast on any phone, shows up when people search for your trade, and makes it easy
            for customers to call you or request a quote.
          </motion.p>
        </div>
      </section>

      {/* How We Build - Professional & explanatory */}
      <section id="process" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">How we build your website</h2>
            <p className="text-text-secondary">Here&apos;s what working with us looks like, start to finish.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Tell us what you need",
                text: "Send a message or book a quick call. Tell us about your business, what services you offer, and what you want the site to do. That's it.",
              },
              {
                step: "2",
                title: "We build, you check",
                text: "We put your site together and share it with you as we go. You tell us what you like and what you don't. No surprises.",
              },
              {
                step: "3",
                title: "Go live",
                text: "Your site launches. We set up the technical SEO foundations and guide you through hosting and your domain - all in your name, so you own everything.",
              },
              {
                step: "4",
                title: "We don't disappear",
                text: "Need something changed after launch? Get in touch. We're here for tweaks, updates, and questions - not just on launch day.",
              },
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
            <p className="text-text-secondary max-w-2xl mx-auto">Example builds showing the kind of sites we create for trades and local businesses.</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">Is this a good fit for you?</h2>
            <p className="text-base sm:text-lg text-text-secondary mb-10">
              We work best with people who want a solid, professional website without the runaround. If any of these sound like you, we should talk.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 max-w-5xl mx-auto">
            {[
              "🔧 Plumbers, roofers, electricians, mechanics, and other trades",
              "📍 Local businesses that rely on phone calls and enquiries",
              "🚀 New businesses that need a site before they can start marketing",
              "⚡ Anyone stuck with a slow, outdated site that doesn't bring in work",
              "💷 People who want to know the price before they commit",
              "🔁 Businesses that got burned by a developer who disappeared",
            ].map((item) => (
              <div key={item} className="group rounded-xl border border-border-color px-5 py-4 transition-all duration-300 hover:-translate-y-[2px]" style={{ backgroundColor: "var(--primary-bg)" }}>
                <p className="text-text-primary/90 font-medium transition-colors group-hover:text-text-primary">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-text-secondary">Sound familiar? <Link href="/contact" className="font-semibold text-accent hover:underline">Let&apos;s have a chat.</Link></p>
          </div>
        </div>
      </section>

      {/* Free Audit */}
      <section id="audit" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border-color p-8 sm:p-10" style={{ backgroundColor: "var(--secondary-bg)" }}>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Already have a website? Get a free audit.</h2>
                <p className="mt-3 text-text-secondary max-w-2xl">
                  Send us your website link and we&apos;ll review it for free. You&apos;ll get back clear, practical improvements to help you get more calls and enquiries. No obligation - just useful feedback you can act on straight away.
                </p>
                <ul className="mt-6 grid sm:grid-cols-3 gap-3">
                  {["Quick wins to improve conversions", "Mobile and speed checks", "Clear CTA + layout fixes"].map((item) => (
                    <li key={item} className="rounded-xl border border-border-color px-4 py-3 text-sm text-text-secondary" style={{ backgroundColor: "var(--primary-bg)" }}>{item}</li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-text-secondary">Typical turnaround: 24-48 hours. No spam, no pressure.</p>
              </div>
              <div className="lg:col-span-1">
                <div className="rounded-xl border border-border-color p-5" style={{ backgroundColor: "var(--primary-bg)" }}>
                  <p className="text-sm font-semibold text-text-primary">Want the audit?</p>
                  <p className="mt-1 text-sm text-text-secondary">Send your website link and what you do - we&apos;ll do the rest.</p>
                  <div className="mt-4 flex flex-col gap-3">
                    <a href="/contact?intent=audit" className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-accent hover:opacity-90 transition" style={{ color: "var(--primary-bg)" }}>
                      Request free audit
                    </a>
                    <a href="https://calendly.com/north-summit-tuta/30min" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold border border-border-color hover:bg-white/5 transition" style={{ color: "var(--text-primary)" }}>
                      Book a call instead
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
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">What you see is what you pay</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Every price is fixed - no surprises halfway through. Pick a package or get in touch for something custom.</p>
            {siteConfig.launch.active && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-sm text-accent font-medium">Launch pricing - limited spots</span>
              </div>
            )}
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
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-3xl font-bold text-accent">{pkg.price}</p>
                  {siteConfig.launch.active && (
                    <p className="text-lg text-text-secondary line-through">{pkg.originalPrice}</p>
                  )}
                </div>
                {siteConfig.launch.active && (
                  <p className="text-xs text-accent font-medium mb-3">Launch price - includes free site audit</p>
                )}
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
                    Get a free quote
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          {siteConfig.launch.active && (
            <div className="mt-8 flex justify-center">
              <SpotsCounter />
            </div>
          )}
        </div>
      </section>

      {/* What Happens Next - Friendly, inviting, conversion-focused */}
      <section id="next" className="py-20" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Ready? Here&apos;s what happens next.</h2>
            <p className="text-text-secondary">No pressure, no hard sell - just a simple conversation to see if we&apos;re a good fit.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "You get in touch", text: "Send a message or book a call. Tell us a bit about your business - even a few sentences is enough to get started." },
              { step: "2", title: "We send you a clear quote", text: "No hidden fees, no vague estimates. You'll know exactly what you're getting, what it costs, and how long it takes." },
              { step: "3", title: "You decide - no rush", text: "Take your time. There's no obligation and no chasing. If it feels right, we move forward. If not, no hard feelings." },
              { step: "4", title: "We get to work", text: "Once you give the go-ahead, we start building. You'll see progress throughout and your site will be live before you know it." },
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

      {/* Final CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Let&apos;s get your site sorted.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-text-secondary mb-8">
            Send us a message or book a call - we&apos;ll get back to you within 24 hours.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
                Get a free quote
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
