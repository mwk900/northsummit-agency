import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/utils/seo";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Web Design for Roofers", path: "/web-design-for-roofers" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design for Roofers",
  description:
    "Websites for roofers across the UK. Emergency-first design, click-to-call, before-and-after galleries, and fast mobile speed. Built to win local work.",
  provider: {
    "@type": "ProfessionalService",
    name: "NorthSummit",
    url: "https://northsummit.agency",
  },
  serviceType: "Web Design",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function WebDesignForRoofers() {
  return (
    <>
      <SEOHead
        title="Web Design for Roofers - Get More Calls"
        description="Websites for roofers across the UK. Emergency-first design, click-to-call, before-and-after galleries, and fast mobile speed. Built to win local work."
        path="/web-design-for-roofers"
        jsonLd={[breadcrumbSchema, serviceSchema, generateLocalBusinessSchema()]}
      />

      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            custom={0} initial="hidden" animate="visible" variants={fadeIn}
            className="text-accent font-medium mb-3"
          >
            Web design for trades
          </motion.p>
          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-5"
          >
            Websites for roofers that turn urgent searches into calls
          </motion.h1>
          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeIn}
            className="text-lg text-text-secondary max-w-2xl mb-8"
          >
            When a storm blows tiles off or a leak is coming through the ceiling, homeowners need a roofer now. If your website is slow, outdated, or hard to use on a phone, they are calling someone else. We build roofing websites that load fast, look professional, and make contact instant.
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

      {/* Why roofers lose work */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            Why roofers lose leads with a poor website
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            <p>
              Roofing is one of the most competitive trades online. In most towns and cities, there are dozens of roofers competing for the same local searches. The difference between getting the call and losing it often comes down to which website loads fastest, looks most trustworthy, and makes it easiest to get in touch.
            </p>
            <p>
              Many roofing businesses still rely on Facebook pages or outdated websites that were built years ago. These sites do not rank well, do not work properly on mobile, and do not convince homeowners to pick up the phone. A modern, fast roofing website built around lead generation changes that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we build */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-8"
          >
            What a roofer website from NorthSummit includes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {[
              {
                title: "Emergency-first layout",
                text: "Click-to-call above the fold, clear emergency service messaging, and a layout designed for the moment someone has water coming through their roof.",
              },
              {
                title: "Before-and-after project galleries",
                text: "Show the quality of your work with image sliders that let visitors see the transformation. Nothing builds trust faster than proof of real completed jobs.",
              },
              {
                title: "Fast mobile speed",
                text: "Roofing searches are overwhelmingly on mobile. Lightweight code, optimised images, and clean architecture mean your site loads fast even on patchy connections.",
              },
              {
                title: "Service area visibility",
                text: "Dedicated pages for the towns and areas you cover. Helps with local SEO and shows customers you work in their area before they even ask.",
              },
              {
                title: "Trust and legitimacy signals",
                text: "Insurance details, trade body memberships, years of experience, and real project photos. The things homeowners look for before trusting someone on their roof.",
              },
              {
                title: "Simple contact options",
                text: "Phone, form, or WhatsApp - whatever works for your business. Every page makes it obvious how to get a quote or report an emergency.",
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

      {/* Example project */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
          >
            See what a roofer website looks like
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-text-secondary mb-6"
          >
            Northcrest Roofing is a demo site we built to show what an emergency-first roofing website can do. It features a click-to-call banner above the fold, before-and-after project sliders, and a layout built to turn urgent searches into same-day calls.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://roofing.northsummit.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              View roofer demo site
            </a>
            <Link
              href="/portfolio"
              className="inline-block px-6 py-3 rounded-lg border border-border-color text-text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              See full portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing mention */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
          >
            Honest pricing for roofing websites
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-text-secondary leading-relaxed space-y-4"
          >
            <p>
              Roofer websites start from £149 for a single-page site, or from £349 for a multi-page build with service pages, a project gallery, and SEO foundations. You will always know the full cost before we start - no hidden fees, no surprises.
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
              for answers to the questions we get asked most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Other trades */}
      <section className="py-12" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text-secondary">
            We also build websites for{" "}
            <Link href="/web-design-for-plumbers" className="text-accent hover:underline">plumbers</Link>,{" "}
            <Link href="/web-design-for-electricians" className="text-accent hover:underline">electricians</Link>,{" "}
            and other trades across the UK. Based in Nottinghamshire -{" "}
            <Link href="/web-design-nottingham" className="text-accent hover:underline">see our Nottingham page</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Ready for a website that wins you more roofing work?
          </h2>
          <p className="text-text-secondary mb-8">
            Tell us about your roofing business and we will get back to you within 24 hours with a clear quote.
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
