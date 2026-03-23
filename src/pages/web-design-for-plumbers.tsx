import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/utils/seo";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Web Design for Plumbers", path: "/web-design-for-plumbers" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design for Plumbers",
  description:
    "Custom websites for plumbers and heating engineers across the UK. Mobile-first design built to convert emergency searches into calls.",
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

export default function WebDesignForPlumbers() {
  return (
    <>
      <SEOHead
        title="Web Design for Plumbers - Get More Calls"
        description="Custom websites for plumbers across the UK. Mobile-first design built to convert emergency searches into calls. Quote forms, trust signals, and clear pricing."
        path="/web-design-for-plumbers"
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
            Websites for plumbers that actually get the phone ringing
          </motion.h1>
          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeIn}
            className="text-lg text-text-secondary max-w-2xl mb-8"
          >
            When someone has a burst pipe at 10pm, they are not browsing five websites. They are calling the first plumber whose site loads fast, looks trustworthy, and makes it easy to get in touch. We build that site.
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

      {/* Why plumbers lose work online */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            Why plumbers lose work without a proper website
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            <p>
              Most plumbing enquiries start with a mobile search. Someone types &ldquo;emergency plumber near me&rdquo; or &ldquo;boiler repair&rdquo; and picks from the first few results. If your website is slow, hard to navigate, or does not clearly show your phone number, that customer moves on to the next plumber in seconds.
            </p>
            <p>
              A good plumber website does not need to be flashy. It needs to load fast, show what you do, cover your service area, and make it dead simple to call or request a quote. That is exactly what we build.
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
            What a plumber website from NorthSummit includes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {[
              {
                title: "Click-to-call on every page",
                text: "Your phone number front and centre. One tap on mobile and the customer is calling you. No hunting, no forms to fill in first.",
              },
              {
                title: "Mobile-first design",
                text: "Most plumbing searches happen on phones. Every layout, button, and image is designed for mobile screens first, desktop second.",
              },
              {
                title: "Service area pages",
                text: "Show Google and your customers exactly where you work. We can build dedicated pages for each area you cover to help with local search visibility.",
              },
              {
                title: "Quote request forms",
                text: "Structured forms that capture the right information upfront - type of job, urgency, postcode - so you can quote quickly and accurately.",
              },
              {
                title: "Trust signals that matter",
                text: "Gas Safe registration, insurance details, years of experience, genuine customer testimonials. The things that make a homeowner feel safe letting you through the door.",
              },
              {
                title: "Fast loading speed",
                text: "A slow site loses emergency callers. We build lightweight, clean-coded sites that load in under two seconds on mobile connections.",
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
            See what a plumber website looks like
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-text-secondary mb-6"
          >
            We built Cresco Plumbing &amp; Heating as a demo to show what a conversion-focused plumber site can do. It has a symptom picker so visitors can describe their problem fast, an instant price guide, and Gas Safe trust badges throughout.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://plumber.northsummit.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              View plumber demo site
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
            Clear pricing, no surprises
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-text-secondary leading-relaxed space-y-4"
          >
            <p>
              Plumber websites start from £149 for a single-page site, or from £349 for a multi-page setup with dedicated service and area pages. You will always know the full cost before we start - no hidden fees, no scope creep.
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
            <Link href="/web-design-for-electricians" className="text-accent hover:underline">electricians</Link>,{" "}
            <Link href="/web-design-for-roofers" className="text-accent hover:underline">roofers</Link>,{" "}
            and other trades across the UK. Based in Nottinghamshire -{" "}
            <Link href="/web-design-nottingham" className="text-accent hover:underline">see our Nottingham page</Link>.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Ready to get a website that brings in work?
          </h2>
          <p className="text-text-secondary mb-8">
            Tell us about your plumbing business and we will get back to you within 24 hours with a clear quote.
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
