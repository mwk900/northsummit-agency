import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/utils/seo";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Web Design for Electricians", path: "/web-design-for-electricians" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design for Electricians",
  description:
    "Professional websites for electricians across the UK. Built to generate domestic and commercial enquiries with clear service pages and fast mobile design.",
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

export default function WebDesignForElectricians() {
  return (
    <>
      <SEOHead
        title="Web Design for Electricians - Get More Enquiries"
        description="Professional websites for electricians across the UK. Built to generate enquiries with clear service pages, certification badges, and fast mobile design."
        path="/web-design-for-electricians"
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
            Websites for electricians that win domestic and commercial work
          </motion.h1>
          <motion.p
            custom={2} initial="hidden" animate="visible" variants={fadeIn}
            className="text-lg text-text-secondary max-w-2xl mb-8"
          >
            Homeowners and businesses choose electricians they trust. Your website is where that trust starts. We build sites that show your credentials clearly, explain your services, and make it easy to get a quote - all on a layout that works perfectly on mobile.
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

      {/* Why electricians need a good website */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            Why your electrical business needs a clear, professional website
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            <p>
              Electrical work requires trust. Whether it is a homeowner needing a consumer unit upgrade or a business looking for a commercial contractor, the customer wants to know you are qualified, insured, and reliable. A professional website is the fastest way to prove that.
            </p>
            <p>
              Most electricians rely on word of mouth and directory listings. That works - until a competitor with a proper website starts showing up in local search results and taking enquiries you never even knew existed. A clean, fast website with your NICEIC or NAPIT registration front and centre changes that.
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
            What an electrician website from NorthSummit includes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {[
              {
                title: "Certification badges up front",
                text: "NICEIC, NAPIT, Part P, or whichever scheme you belong to - displayed clearly so visitors see your credentials before they read a word of copy.",
              },
              {
                title: "Clear service pages",
                text: "Separate pages for domestic, commercial, EV charger installation, rewiring, testing, and any other services you offer. Helps Google understand what you do and where.",
              },
              {
                title: "Fast quote request flow",
                text: "Structured contact forms that capture job type, property details, and urgency. You get the information you need to quote, the customer gets a fast response.",
              },
              {
                title: "Mobile-first layout",
                text: "Most people searching for an electrician are on their phone. Every element is designed for small screens first - big tap targets, readable text, fast load times.",
              },
              {
                title: "Local search visibility",
                text: "Technical SEO foundations built in from day one. Clean code, fast loading, correct heading structure, and schema markup that helps search engines understand your business.",
              },
              {
                title: "Professional, trustworthy design",
                text: "Clean layout, consistent branding, and a tone that feels competent and reliable. No flashy gimmicks - just a site that makes a good first impression.",
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
            See what an electrician website looks like
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-text-secondary mb-6"
          >
            Arc &amp; Line Electrical is a demo site we built to show what a conversion-focused electrician website can do. It features an interactive fault-finder tool, certification badges, EV and smart home sections, and a rapid quote form above the fold.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://electrician.northsummit.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              View electrician demo site
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
            Straightforward pricing
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-text-secondary leading-relaxed space-y-4"
          >
            <p>
              Electrician websites start from £149 for a single-page site, or from £349 for a multi-page setup with service pages, a gallery, and full SEO foundations. You will always know the full cost before we start.
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
              for answers to common questions about timelines, hosting, and ownership.
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
            Ready for a website that generates enquiries?
          </h2>
          <p className="text-text-secondary mb-8">
            Tell us about your electrical business and we will get back to you within 24 hours with a clear quote.
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
