import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '@/components/SEOHead';
import ProjectCard from '@/components/ProjectCard';
import { siteConfig } from '@/data/site';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const childFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Trade Website Examples & Web Design Portfolio"
        description="Trade website examples and portfolio work for plumbers, electricians, roofers, builders, landscapers, cleaners, and local businesses across the UK."
        path="/portfolio"
        image="/projects/builder.webp"
      />

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Trade website examples and portfolio</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-6" />
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Every site below was built around a simple question: <span className="text-text-primary font-medium">what does this business need people to do?</span>
            </p>
            <p className="text-text-secondary leading-relaxed">
  These trade website examples show how we approach{" "}
  <Link href="/web-design-for-plumbers" className="text-accent hover:underline">
    plumbers
  </Link>
  ,{" "}
  <Link href="/web-design-for-electricians" className="text-accent hover:underline">
    electricians
  </Link>
  ,{" "}
  <Link href="/web-design-for-roofers" className="text-accent hover:underline">
    roofers
  </Link>
  ,{" "}
  <Link href="/web-design-for-builders" className="text-accent hover:underline">
    builders
  </Link>
  ,{" "}
  <Link href="/web-design-for-landscapers" className="text-accent hover:underline">
    landscapers
  </Link>
  ,{" "}
  <Link href="/web-design-for-painters-and-decorators" className="text-accent hover:underline">
    painters
  </Link>
  ,{" "}
  <Link href="/web-design-for-cleaners" className="text-accent hover:underline">
    cleaners
  </Link>
  , and other local businesses. The design choices change by trade, but the goal stays the same: make it obvious what you do, make it easy to enquire, and remove friction.
</p>



            <p className="text-text-secondary leading-relaxed mt-4">
              Already have a website? <Link href="/audit" className="text-accent font-medium hover:underline">Get a free audit</Link> and we&apos;ll tell you what&apos;s working and what could be better.
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {siteConfig.projects.map((project) => (
              <motion.div key={project.id} variants={childFade}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Want something like this for your business?</h2>
          <p className="text-text-secondary mb-8">Tell us what you need and we&apos;ll get back to you within 24 hours.</p>
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
