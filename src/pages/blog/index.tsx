import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blog";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const childFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Blog() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <SEOHead
        title="Blog - Web Design Tips for Trades & Small Businesses"
        description="Practical advice on websites, SEO, and getting more customers online. Written for plumbers, electricians, builders, roofers, and local service businesses across the UK."
        path="/blog"
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-14"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
              Blog
            </h1>
            <div className="w-20 h-1 rounded-full bg-accent mb-6" />
            <p className="text-lg text-text-secondary leading-relaxed">
              Straightforward advice on websites, local SEO, and getting more
              customers online. Written for tradespeople and local businesses
              across the UK - no jargon, no fluff.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {sorted.map((post) => (
              <motion.article key={post.slug} variants={childFade}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-xl border border-border-color hover:border-accent/40 transition-colors"
                  style={{ backgroundColor: "var(--secondary-bg)" }}
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs border border-border-color text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            Want a website that actually brings in work?
          </h2>
          <p className="text-text-secondary mb-8">
            We build fast, mobile-friendly websites for trades and local
            businesses across the UK. Have a look at our{" "}
            <Link
              href="/portfolio"
              className="text-accent font-medium hover:underline"
            >
              portfolio
            </Link>{" "}
            or get in touch for a free quote.
          </p>
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
