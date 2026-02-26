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
        description="Professional websites for plumbers, roofers, electricians, and local businesses across the UK. Honest pricing, real timelines, and a site that actually brings in work."
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
              Fast, mobile-first sites for plumbers, roofers, electricians, and local businesses across the UK. Clear pricing, clean build, and you own everything.
            </motion.p>

            <motion.p custom={3} initial="hidden" animate="visible" variants={fadeIn}
              className="text-sm text-text-secondary"
            >
              Every site is hand-built and personally checked before it goes live.
            </motion.p>

            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap gap-3 mt-8">
              <a href="#pricing" className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
                View pricing
              </a>
              <a href="#portfolio" className="inline-block px-6 py-3 rounded-lg border border-border-color text-text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors">
                See our work
              </a>
            </motion.div>

            <motion.p custom={5} initial="hidden" animate="visible" variants={fadeIn} className="mt-4 text-sm text-text-secondary">
              Already have a site?{" "}
              <a href="#audit" className="text-accent font-medium hover:underline">Get a free audit &darr;</a>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founding Client Programme */}
      {siteConfig.launch.active && (
        <section className="py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8"
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                  Fair pricing while we build our track record.
                </h2>
                <p className="text-text-secondary leading-relaxed">
                We’re currently working with a small number of businesses while we grow our portfolio, so pricing is reduced for now.
                You’ll get a full, professionally built site just without the agency-level price tag.
              </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

{/* What We Do */}
<section
  id="services"
  className="py-20"
  style={{ backgroundColor: "var(--secondary-bg)" }}
>
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
    >
      Websites for real local businesses
    </motion.h2>

    {/* Paragraph 1 */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-lg text-text-secondary leading-relaxed mb-4"
    >
      We’re an independent web design agency working with trades and service businesses across the UK.
    </motion.p>

    {/* Paragraph 2 */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
      className="text-lg text-text-secondary leading-relaxed"
    >
      Our goal is simple. Help you get found locally and make it easy for customers to contact you.
      We focus on fast loading, mobile friendly websites with clear calls to action so when someone
      needs your service, you’re the obvious choice.
    </motion.p>

  </div>
</section>

      {/* How We Build */}
      <section id="process" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">How we build your website</h2>
            <p className="text-text-secondary">Here&apos;s what working with us looks like, start to finish.</p>
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Tell us what you need", text: "Send a message or book a quick call. Tell us about your business, what services you offer, and what you want the site to do." },
              { step: "2", title: "We build, you check", text: "We put your site together and share it with you as we go. You tell us what you like and what you don't. No surprises." },
              { step: "3", title: "Go live", text: "Your site launches with proper technical SEO foundations. We guide you through hosting and your domain – all in your name, so you own everything." },
              { step: "4", title: "We don't disappear", text: "Need something changed after launch? Get in touch. We're here for tweaks, updates, and questions – not just on launch day." },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl border border-border-color" style={{ backgroundColor: "var(--secondary-bg)" }}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4">{item.step}</span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="sm:hidden space-y-3">
            {[
              { step: "1", title: "Tell us what you need", text: "Send a message or book a call. Tell us about your business and what the site should do." },
              { step: "2", title: "We build, you check", text: "We share progress as we go. You give feedback. No surprises." },
              { step: "3", title: "Go live", text: "Your site launches with SEO foundations. Domain and hosting in your name – you own everything." },
              { step: "4", title: "We don't disappear", text: "Need changes after launch? We're here. Not just on day one." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-border-color" style={{ backgroundColor: "var(--secondary-bg)" }}>
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">{item.step}</span>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
                  <p className="text-xs text-text-secondary mt-1">{item.text}</p>
                </div>
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
            <p className="text-text-secondary max-w-2xl mx-auto">Example builds showing the kind of sites we create. These are demo projects – not past client work – built to demonstrate layout, speed, and how we think about getting people to pick up the phone.</p>
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
              <Link href="/portfolio" className="inline-block px-6 py-3 rounded-lg border border-border-color text-text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors">
                View all projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section id="who-this-is-for" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Is this for you?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">We work best with trades and local businesses who want a website that actually generates enquiries – not just &quot;looks nice.&quot;</p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tradespeople", text: "Plumbers, electricians, roofers, builders, landscapers – anyone whose customers search locally and want someone they can trust." },
              { title: "Local service businesses", text: "Cleaners, dog walkers, personal trainers, tutors, mobile mechanics – if your business serves a local area, we'll make sure people find you." },
              { title: "New or growing businesses", text: "Just starting out or ready to replace a DIY site? We'll get you set up properly without overcomplicating things." },
            ].map((item) => (
              <motion.div key={item.title} variants={childFade} className="p-6 rounded-xl border border-border-color" style={{ backgroundColor: "var(--secondary-bg)" }}>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Free Audit */}
      <section id="audit" className="py-20" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Already have a website?</h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              We&apos;ll review your current site and tell you what&apos;s working, what&apos;s not, and what we&apos;d change – for free. No strings attached.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href="/audit" className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
                Request a free audit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Honest pricing, no surprises</h2>
            <p className="text-text-secondary max-w-lg mx-auto">Pick a package or get in touch for something custom. You&apos;ll always know the full cost before we start.</p>
            {siteConfig.launch.active && (
              <p className="mt-3 text-sm text-accent font-medium">Introductory rates – available while we build our portfolio.</p>
            )}
          </motion.div>

          {/*
            Grid alignment strategy:
            - Each card is h-full + flex col
            - Content area (title/price/desc/features) is flex-1, pushes CTA to bottom
            - CTA footer is mt-auto with a FIXED height so buttons align even when
              one card has extra content (like Premium's deposit link)
            - The fixed height (min-h-[160px]) accounts for: 2 buttons + microcopy + deposit link
          */}

          
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 items-stretch">
            {siteConfig.pricing.map((pkg) => {
              const pkgSlug = pkg.name.toLowerCase();

              const primaryHref =
                pkg.cta.primary.type === 'stripe' ? pkg.stripeLink :
                `/contact?package=${pkgSlug}`;
              const primaryIsExternal = pkg.cta.primary.type === 'stripe';

              const secondaryHref =
                pkg.cta.secondary.type === 'question' ? `/question?package=${pkgSlug}` :
                pkg.cta.secondary.type === 'calendly' ? siteConfig.calendly :
                pkg.cta.secondary.type === 'deposit' && pkg.depositLink ? pkg.depositLink :
                `/contact?package=${pkgSlug}`;
              const secondaryIsExternal =
                pkg.cta.secondary.type === 'calendly' ||
                (pkg.cta.secondary.type === 'deposit' && !!pkg.depositLink);

              const showSecondary =
                pkg.cta.secondary.type !== 'deposit' || !!pkg.depositLink;

              const showDepositLink =
                pkgSlug === 'premium' && !!pkg.depositLink;

              return (
                <motion.div key={pkg.name} variants={childFade}
                  className={`relative h-full flex flex-col p-6 rounded-xl border ${pkg.popular ? "border-accent shadow-lg shadow-accent/10" : "border-border-color"}`}
                  style={{ backgroundColor: "var(--secondary-bg)" }}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-accent text-xs font-semibold" style={{ color: "var(--primary-bg)" }}>
                      Most popular
                    </span>
                  )}

                  {/* Content — flex-1 so it expands to fill available space */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-1">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-accent mb-1">{pkg.price}</p>
                    <p className="text-sm text-text-secondary mb-6">{pkg.description}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA footer — mt-auto + fixed min-height so ALL cards align */}
                  <div className="mt-auto pt-8 min-h-[200px] flex flex-col">
                    {/* Buttons */}
                    <div className="space-y-2">
                      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        {primaryIsExternal ? (
                          <a href={primaryHref} target="_blank" rel="noopener noreferrer"
                            className="block text-center py-3 rounded-lg text-sm font-semibold bg-accent hover:opacity-90 transition-all"
                            style={{ color: "var(--primary-bg)" }}
                          >
                            {pkg.cta.primary.label}
                          </a>
                        ) : (
                          <Link href={primaryHref}
                            className="block text-center py-3 rounded-lg text-sm font-semibold bg-accent hover:opacity-90 transition-all"
                            style={{ color: "var(--primary-bg)" }}
                          >
                            {pkg.cta.primary.label}
                          </Link>
                        )}
                      </motion.div>

                      {showSecondary && (
                        secondaryIsExternal ? (
                          <a href={secondaryHref} target="_blank" rel="noopener noreferrer"
                            className="block text-center py-3 rounded-lg text-sm font-semibold border border-border-color text-text-secondary hover:text-accent hover:border-accent transition-colors"
                          >
                            {pkg.cta.secondary.label}
                          </a>
                        ) : (
                          <Link href={secondaryHref}
                            className="block text-center py-3 rounded-lg text-sm font-semibold border border-border-color text-text-secondary hover:text-accent hover:border-accent transition-colors"
                          >
                            {pkg.cta.secondary.label}
                          </Link>
                        )
                      )}
                    </div>

                    {/* Microcopy */}
                    <p className="mt-3 text-xs text-text-secondary text-center">{pkg.cta.microcopy}</p>

                    {/* Premium deposit subtle link */}
                    {showDepositLink && (
                      <p className="mt-2 text-center">
                        <a
                          href={pkg.depositLink!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-accent hover:opacity-80 transition-colors underline underline-offset-2 decoration-accent/40"
                        >
                          Pay £100 deposit
                        </a>
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Payment trust strip — vertical on mobile */}
          <div className="mt-8 flex flex-col items-center text-center gap-3">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary shrink-0"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span className="text-sm text-text-secondary">Secure checkout via Stripe</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0"><rect width="38" height="24" rx="4" fill="#1A1F71"/><path d="M16.5 16.5H14.1L15.6 7.5H18L16.5 16.5Z" fill="#fff"/><path d="M23.4 7.7C22.9 7.5 22.1 7.3 21.2 7.3C18.9 7.3 17.3 8.5 17.3 10.2C17.3 11.5 18.4 12.2 19.3 12.6C20.2 13 20.5 13.3 20.5 13.7C20.5 14.3 19.8 14.6 19.1 14.6C18.1 14.6 17.6 14.4 16.8 14.1L16.5 13.9L16.2 16C16.8 16.3 17.9 16.5 19 16.5C21.5 16.5 23 15.3 23 13.5C23 12.5 22.4 11.8 21.1 11.2C20.3 10.8 19.8 10.6 19.8 10.1C19.8 9.7 20.2 9.3 21.1 9.3C21.9 9.3 22.4 9.5 22.8 9.7L23 9.8L23.4 7.7Z" fill="#fff"/><path d="M26.4 13.4C26.6 12.9 27.4 10.8 27.4 10.8C27.4 10.8 27.6 10.3 27.7 10L27.9 10.7C27.9 10.7 28.4 13 28.5 13.4H26.4ZM29.3 7.5H27.4C26.8 7.5 26.3 7.7 26.1 8.3L22.9 16.5H25.4C25.4 16.5 25.8 15.4 25.9 15.1H28.9C29 15.5 29.2 16.5 29.2 16.5H31.5L29.3 7.5Z" fill="#fff"/><path d="M14.1 7.5L11.8 13.4L11.6 12.4C11.1 11 9.8 9.4 8.4 8.6L10.5 16.5H13L16.6 7.5H14.1Z" fill="#fff"/><path d="M9.7 7.5H5.8L5.8 7.7C8.8 8.5 10.8 10.4 11.6 12.4L10.7 8.3C10.6 7.7 10.2 7.5 9.7 7.5Z" fill="#F9A533"/></svg>
              <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0"><rect width="38" height="24" rx="4" fill="#252525"/><circle cx="15" cy="12" r="6" fill="#EB001B"/><circle cx="23" cy="12" r="6" fill="#F79E1B"/><path d="M19 7.8C20.3 8.8 21.2 10.3 21.2 12C21.2 13.7 20.3 15.2 19 16.2C17.7 15.2 16.8 13.7 16.8 12C16.8 10.3 17.7 8.8 19 7.8Z" fill="#FF5F00"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="shrink-0"><path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/></svg>
              <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0"><rect width="38" height="24" rx="4" fill="#fff" stroke="#E0E0E0" strokeWidth="0.5"/><g transform="translate(5.5, 5.5)"><path d="M6.5 0.2C5 0.2 3.6 0.8 2.5 1.8L4.2 3.5C4.8 2.9 5.6 2.5 6.5 2.5C7.4 2.5 8.1 2.8 8.7 3.3L10.3 1.7C9.2 0.8 7.9 0.2 6.5 0.2Z" fill="#EA4335"/><path d="M2.5 1.8C1.6 2.8 1 4.1 1 5.5C1 6.9 1.6 8.2 2.5 9.2L4.2 7.5C3.8 7 3.5 6.3 3.5 5.5C3.5 4.7 3.8 4 4.2 3.5L2.5 1.8Z" fill="#FBBC05"/><path d="M2.5 9.2C3.6 10.2 5 10.8 6.5 10.8C8 10.8 9.2 10.4 10.1 9.5L8.4 7.9C7.9 8.3 7.3 8.5 6.5 8.5C5.2 8.5 4.1 7.7 3.7 6.5L2.5 9.2Z" fill="#34A853"/><path d="M12 5.5C12 5 11.9 4.5 11.8 4H6.5V6.5H9.6C9.4 7.3 8.9 7.7 8.4 7.9L10.1 9.5C11.2 8.5 12 7.1 12 5.5Z" fill="#4285F4"/></g><text x="20" y="16" fontFamily="system-ui" fontSize="8.5" fontWeight="500" fill="#5F6368">Pay</text></svg>
              <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0"><rect width="38" height="24" rx="4" fill="#FFB3C7"/><text x="19" y="15" fontFamily="system-ui" fontSize="9" fontWeight="800" fill="#0A0B09" textAnchor="middle">Klarna</text></svg>
              <svg width="38" height="24" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0"><rect width="38" height="24" rx="4" fill="#191C1F"/><text x="19" y="15" fontFamily="system-ui" fontSize="7.5" fontWeight="600" fill="#fff" textAnchor="middle">Revolut</text></svg>
            </div>
            <p className="text-xs text-text-secondary max-w-xs">No card details stored by us</p>
          </div>
          <p className="mt-2 text-sm text-text-secondary text-center">
  Questions before paying? Call <a href={`tel:${siteConfig.agency.phone}`} className="text-accent hover:underline">
    {siteConfig.agency.phone}
  </a>
</p>

          <p className="mt-4 text-center text-xs text-text-secondary">
            {siteConfig.depositPolicy}
          </p>

          <p className="mt-4 text-center text-sm text-text-secondary">
            Timelines depend on scope and your availability for feedback – we&apos;ll agree a realistic schedule before starting. You&apos;ll hear back from us within 24 hours of getting in touch.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section id="next" className="py-16 sm:py-20" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Ready? Here&apos;s what happens next.</h2>
            <p className="text-text-secondary">No pressure, no hard sell – just a simple conversation to see if we&apos;re a good fit.</p>
          </div>

          <div className="hidden sm:grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "You get in touch", text: "Send a message or book a call. Tell us a bit about your business – even a few sentences is enough to get started." },
              { step: "2", title: "We send a clear quote", text: "No hidden fees, no vague estimates. You'll know exactly what you're getting, what it costs, and a realistic timeline." },
              { step: "3", title: "You decide – no rush", text: "Take your time. There's no obligation and no chasing. If it feels right, we move forward. If not, no hard feelings." },
              { step: "4", title: "We get to work", text: "Once you give the go-ahead, we start building. You'll see progress throughout and we'll keep you in the loop at every stage." },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl border border-border-color" style={{ backgroundColor: "var(--primary-bg)" }}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-sm mb-4">{item.step}</span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="sm:hidden space-y-3">
            {[
              { step: "1", title: "You get in touch", text: "Send a message or book a call. A few sentences about your business is enough." },
              { step: "2", title: "We send a clear quote", text: "Exact cost, what's included, and a realistic timeline. No surprises." },
              { step: "3", title: "You decide – no rush", text: "No obligation, no chasing. Take your time." },
              { step: "4", title: "We get to work", text: "We build, you see progress, and we keep you in the loop." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-border-color" style={{ backgroundColor: "var(--primary-bg)" }}>
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">{item.step}</span>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
                  <p className="text-xs text-text-secondary mt-1">{item.text}</p>
                </div>
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
            Send us a message or book a call – we&apos;ll get back to you within 24 hours.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all" style={{ color: "var(--primary-bg)" }}>
              Start a project
            </Link>
            <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
            >
              Book a call
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-4 text-center">
            <a href="#pricing" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors">
              View pricing instead
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
