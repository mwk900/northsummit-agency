import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/utils/seo";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Web Design Nottingham", path: "/web-design-nottingham" },
]);

const localServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design in Nottingham",
  description:
    "Web design for trades and local businesses in Nottingham. Fast, mobile-first websites built to turn local searches into calls.",
  provider: {
    "@type": "ProfessionalService",
    name: "NorthSummit",
    url: "https://northsummit.agency",
  },
  serviceType: "Web Design",
  areaServed: [
    {
      "@type": "City",
      name: "Nottingham",
    },
    {
      "@type": "AdministrativeArea",
      name: "Nottingham",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function WebDesignNottingham() {
  return (
    <>
      <SEOHead
        title="Web Design Nottingham - Trades & Local Businesses"
        description="Web design in Nottingham for trades and local businesses. Fast, mobile-first websites that turn local searches into calls. Based in Nottingham, working UK-wide."
        path="/web-design-nottingham"
        jsonLd={[breadcrumbSchema, localServiceSchema, generateLocalBusinessSchema()]}
      />

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            custom={0} initial="hidden" animate="visible" variants={fadeIn}
            className="text-accent font-medium mb-3"
          >
            NorthSummit &middot; Nottingham
          </motion.p>
          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-5"
          >
            Web design in Nottingham for trades and local businesses
          </motion.h1>
          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeIn}
            className="text-lg text-text-secondary max-w-2xl mb-8"
          >
            NorthSummit is based in Nottingham and we work with trades and local service businesses across the UK. If you are a Nottingham-area business looking for a website that actually brings in work, you are dealing with someone local who understands the market.
          </motion.p>
          <motion.div
            custom={3} initial="hidden" animate="visible" variants={fadeIn}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              Get a free quote
            </Link>
            <Link
              href="/audit"
              className="inline-block px-6 py-3 rounded-lg border border-border-color text-text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              Free website audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            A web designer in Nottingham who builds for results
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            <p>
              There are plenty of web designers in Nottingham. Most of them build generic template sites and move on. We take a different approach. Every website we build starts with one question: what does this business need the site to do?
            </p>
            <p>
              For most trades and local businesses in the Nottingham area - plumbers, electricians, roofers, builders, cleaners, landscapers - the answer is the same. Get found in local searches, look trustworthy, and make it easy for customers to get in touch. That is what we optimise for.
            </p>
            <p>
              Being based in Nottingham means we understand the local market, but our sites are built to work anywhere. Whether you serve Nottingham city centre, the wider county, or the entire East Midlands, the approach is the same: fast, mobile-first, built to convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-8"
          >
            What Nottingham businesses get from NorthSummit
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {[
              {
                title: "Local knowledge, UK-wide capability",
                text: "We are based in Nottingham and work with businesses across the UK. You get someone local who also builds sites that compete nationally.",
              },
              {
                title: "Mobile-first, fast-loading sites",
                text: "Custom-built with clean code, not drag-and-drop templates. Fast on mobile, easy to navigate, and designed to convert visitors into enquiries.",
              },
              {
                title: "Built for your trade",
                text: "Whether you are a plumber in Beeston, an electrician in West Bridgford, or a roofer covering all of Nottingham - we build around your specific business needs.",
              },
              {
                title: "Technical SEO from day one",
                text: "Clean heading structure, fast load times, correct meta tags, and schema markup. Proper foundations so your Nottingham business has the best chance of ranking locally.",
              },
              {
                title: "Clear pricing, no agency rubbish",
                text: "You know the price before we start. No retainers, no account managers, no scope creep. One person builds your site and communicates with you directly.",
              },
              {
                title: "You own everything",
                text: "Your domain, hosting, and code stay in your name. Nothing is tied to us. You can move, change, or hand the site to someone else at any time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-border-color"
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trades we work with */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            Trades and businesses we work with in Nottingham
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-text-secondary leading-relaxed space-y-4"
          >
            <p>
              We build websites for any trade or local service business, but we have particular experience with:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {[
                "Plumbers & heating engineers",
                "Electricians",
                "Roofers",
                "Builders & general contractors",
                "Landscapers & garden services",
                "Cleaners & domestic services",
                "Painters & decorators",
                "Kitchen & bathroom fitters",
              ].map((trade) => (
                <li key={trade} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {trade}
                </li>
              ))}
            </ul>
            <p>
              See dedicated pages for{" "}
              <Link href="/web-design-for-plumbers" className="text-accent hover:underline">plumber web design</Link>,{" "}
              <Link href="/web-design-for-electricians" className="text-accent hover:underline">electrician web design</Link>, and{" "}
              <Link href="/web-design-for-roofers" className="text-accent hover:underline">roofer web design</Link>,{" "}
              <Link href="/web-design-for-builders" className="text-accent hover:underline">builder web design</Link>,{" "}
              <Link href="/web-design-for-landscapers" className="text-accent hover:underline">landscaper web design</Link>, and{" "}
              <Link href="/web-design-for-cleaners" className="text-accent hover:underline">cleaner web design</Link> - or browse the{" "}
              <Link href="/portfolio" className="text-accent hover:underline">full portfolio</Link> to see the kind of sites we build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
          >
            Web design pricing for Nottingham businesses
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-text-secondary leading-relaxed space-y-4"
          >
            <p>
              Our pricing is the same whether you are in Nottingham or anywhere else in the UK. Websites start from £149 for a single-page site, from £349 for a multi-page build, or from £699 for a full website with booking, blog, and 30 days of support.
            </p>
            <p>
              See our{" "}
              <Link href="/#pricing" className="text-accent font-medium hover:underline">
                full pricing
              </Link>{" "}
              or{" "}
              <Link href="/faq" className="text-accent font-medium hover:underline">
                read the FAQ
              </Link>{" "}
              for answers about timelines, hosting, and ownership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Need a website for your Nottingham business?
          </h2>
          <p className="text-text-secondary mb-8">
            Tell us about your business and we will get back to you within 24 hours. Based in Nottingham, working with businesses across the UK.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              Get a free quote
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
