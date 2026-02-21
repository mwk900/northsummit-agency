import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SEOHead from '@/components/SEOHead';
import { siteConfig } from '@/data/site';

const categories = ['All', 'Trades', 'Local Business', 'Business'] as const;
type Category = (typeof categories)[number];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const childFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function PortfolioCard({
  title,
  description,
  hook,
  image,
  category,
  link,
}: {
  title: string;
  description: string;
  hook: string;
  image: string;
  category: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border-color overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer"
      style={{ backgroundColor: 'var(--secondary-bg)' }}
    >
      <div className="relative aspect-video overflow-hidden bg-border-color">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-95"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-text-secondary text-sm">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 rounded-lg bg-accent text-sm font-semibold" style={{ color: 'var(--primary-bg)' }}>
            View live site
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-text-secondary italic mb-3">{hook}</p>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return siteConfig.projects;
    return siteConfig.projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEOHead
        title="Portfolio | Web Design Examples for Trades & Local Businesses"
        description="See the kind of websites we build for trades and local businesses. Each one is designed around one thing: getting your customers to pick up the phone."
        path="/portfolio"
      />

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">Portfolio</h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-6" />
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Every site below was built around a simple question: <span className="text-text-primary font-medium">what does this business need people to do?</span>
            </p>
            <p className="text-text-secondary leading-relaxed">
              For a plumber, it might be a click-to-call button that works the second someone lands on the page. For a gym, it might be a sign-up flow that catches people while they&apos;re still motivated. The design choices are different every time - but the goal is always the same. Make it obvious what you do, make it easy to get in touch, and don&apos;t get in the way.
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent'
                    : 'border border-border-color text-text-secondary hover:text-accent hover:border-accent'
                }`}
                style={activeCategory === cat ? { color: 'var(--primary-bg)' } : undefined}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={childFade}>
                  <PortfolioCard
                    title={project.title}
                    description={project.description}
                    hook={project.hook}
                    image={project.image}
                    category={project.category}
                    link={project.link}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <p className="text-center text-text-secondary py-12">No projects in this category yet.</p>
          )}
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
