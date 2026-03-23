import { Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/data/site";
import {
  getTradePageHref,
  tradePages,
  type TradePageKey,
} from "@/data/tradePages";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "@/utils/seo";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

function renderRelatedTradeLinks(keys: TradePageKey[]) {
  return keys.map((key, index) => {
    const trade = tradePages[key];
    const isLast = index === keys.length - 1;
    const needsAnd = index === keys.length - 2;

    return (
      <Fragment key={key}>
        <Link href={getTradePageHref(key)} className="text-accent hover:underline">
          {trade.shortLabel.toLowerCase()}
        </Link>
        {!isLast && (needsAnd ? ", and " : ", ")}
      </Fragment>
    );
  });
}

export default function TradeLandingPage({
  tradeKey,
}: {
  tradeKey: TradePageKey;
}) {
  const trade = tradePages[tradeKey];
  const project = siteConfig.projects.find((item) => item.id === trade.projectId);

  if (!project) {
    throw new Error(`Missing project data for trade page "${tradeKey}"`);
  }

  const path = `/${trade.slug}`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: trade.h1, path },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: trade.h1,
    description: trade.description,
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

  return (
    <>
      <SEOHead
        title={trade.title}
        description={trade.description}
        path={path}
        image={project.image}
        jsonLd={[breadcrumbSchema, serviceSchema, generateLocalBusinessSchema()]}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-accent font-medium mb-3"
          >
            Web design for trades
          </motion.p>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-5"
          >
            {trade.h1}
          </motion.h1>
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-lg text-text-secondary max-w-2xl mb-8"
          >
            {trade.heroText}
          </motion.p>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
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

      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-6"
          >
            {trade.whyHeading}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            {trade.whyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-8"
          >
            What a {trade.shortLabel.toLowerCase()} website from NorthSummit includes
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {trade.includeItems.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-border-color"
                style={{ backgroundColor: "var(--secondary-bg)" }}
              >
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
          >
            See what a {trade.shortLabel.toLowerCase()} website looks like
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-secondary mb-6"
          >
            We built {project.title} as a demo to show what a conversion-focused{" "}
            {trade.shortLabel.toLowerCase()} website can do. {project.shortDesc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              View {trade.shortLabel.toLowerCase()} demo site
            </a>
            <Link
              href="/portfolio"
              className="inline-block px-6 py-3 rounded-lg border border-border-color text-text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
            >
              See trade website examples
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
          >
            {trade.pricingHeading}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-secondary leading-relaxed space-y-4"
          >
            <p>{trade.pricingIntro}</p>
            <p>
              See our{" "}
              <Link href="/#pricing" className="text-accent font-medium hover:underline">
                full pricing
              </Link>
              , browse more{" "}
              <Link href="/portfolio" className="text-accent font-medium hover:underline">
                trade website examples
              </Link>
              , or{" "}
              <Link href="/faq" className="text-accent font-medium hover:underline">
                read the FAQ
              </Link>{" "}
              if you want quick answers on hosting, timelines, and how the process works.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: "var(--secondary-bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text-secondary">
            We also build websites for {renderRelatedTradeLinks(trade.relatedTradeKeys)}.
            If you already have a site,{" "}
            <Link href="/audit" className="text-accent hover:underline">
              request a free audit
            </Link>
            . Based in Nottingham, working UK-wide.{" "}
            <Link href="/web-design-nottingham" className="text-accent hover:underline">
              See our Nottingham page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            {trade.finalHeading}
          </h2>
          <p className="text-text-secondary mb-8">{trade.finalText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
              style={{ color: "var(--primary-bg)" }}
            >
              Get a free quote
            </Link>
            <Link
              href="/audit"
              className="inline-block px-8 py-3.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
            >
              Request a free audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
