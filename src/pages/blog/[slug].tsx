import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { blogPosts, type BlogPost } from "@/data/blog";

interface Props {
  post: BlogPost;
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

function renderMarkdown(content: string) {
  // Split into paragraphs and headings, render as simple HTML
  const lines = content.split("\n");
  const elements: { type: string; content: string; level?: number }[] = [];
  let currentParagraph: string[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      elements.push({ type: "p", content: currentParagraph.join(" ") });
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push({ type: "ul", content: listItems.join("|||") });
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push({ type: "table", content: JSON.stringify(tableRows) });
      tableRows = [];
      inTable = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // Table rows
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushParagraph();
      flushList();
      const cells = trimmed
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());
      // Skip separator rows
      if (cells.every((c) => /^[-:]+$/.test(c))) {
        inTable = true;
        continue;
      }
      tableRows.push(cells);
      inTable = true;
      continue;
    }
    if (inTable) flushTable();

    // Headings
    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      elements.push({
        type: "h2",
        content: trimmed.slice(3),
        level: 2,
      });
      continue;
    }
    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      elements.push({
        type: "h3",
        content: trimmed.slice(4),
        level: 3,
      });
      continue;
    }

    // List items
    if (trimmed.startsWith("- ")) {
      flushParagraph();
      inList = true;
      listItems.push(trimmed.slice(2));
      continue;
    }
    if (inList && !trimmed.startsWith("- ")) {
      flushList();
    }

    // Empty line
    if (trimmed === "") {
      flushParagraph();
      continue;
    }

    // Regular text
    currentParagraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushTable();

  return elements;
}

function formatInline(text: string) {
  // Bold
  const parts: (string | React.ReactElement)[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-text-primary">
        {match[1]}
      </strong>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export default function BlogPost({ post }: Props) {
  const elements = renderMarkdown(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.ogImage || "https://northsummit.agency/og.jpg",
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Person",
      name: "Mati Wozniak",
    },
    publisher: {
      "@type": "Organization",
      name: "NorthSummit",
      logo: {
        "@type": "ImageObject",
        url: "https://northsummit.agency/new-logo-white.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://northsummit.agency/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://northsummit.agency",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://northsummit.agency/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://northsummit.agency/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        image={post.ogImage}
        jsonLd={[articleSchema, breadcrumbSchema]}
      />

      <article className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors mb-6"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mb-4">
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

            <h1 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {post.description}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose-custom"
          >
            {elements.map((el, i) => {
              if (el.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-xl sm:text-2xl font-bold text-text-primary mt-10 mb-4"
                  >
                    {el.content}
                  </h2>
                );
              }
              if (el.type === "h3") {
                return (
                  <h3
                    key={i}
                    className="text-lg font-semibold text-text-primary mt-8 mb-3"
                  >
                    {el.content}
                  </h3>
                );
              }
              if (el.type === "ul") {
                return (
                  <ul key={i} className="space-y-2 my-4 pl-1">
                    {el.content.split("|||").map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-text-secondary leading-relaxed"
                      >
                        <span className="text-accent mt-1.5 shrink-0">
                          <svg
                            width="6"
                            height="6"
                            viewBox="0 0 6 6"
                            fill="currentColor"
                          >
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        <span>{formatInline(item)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (el.type === "table") {
                const rows: string[][] = JSON.parse(el.content);
                if (rows.length === 0) return null;
                const header = rows[0];
                const body = rows.slice(1);
                return (
                  <div key={i} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr>
                          {header.map((cell, ci) => (
                            <th
                              key={ci}
                              className="text-left px-4 py-2.5 font-semibold text-text-primary border-b border-border-color"
                              style={{ backgroundColor: "var(--secondary-bg)" }}
                            >
                              {cell}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {body.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className="px-4 py-2.5 text-text-secondary border-b border-border-color/50"
                              >
                                {formatInline(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              // Paragraph
              return (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed mb-4"
                >
                  {formatInline(el.content)}
                </p>
              );
            })}
          </motion.div>

          {/* Post footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-14 p-6 rounded-xl border border-accent/20 bg-accent/5 text-center"
          >
            <h2 className="text-lg font-bold text-text-primary mb-2">
              Need a website that works as hard as you do?
            </h2>
            <p className="text-sm text-text-secondary mb-5">
              We build fast, mobile-friendly websites for trades and local
              businesses across the UK. See our{" "}
              <Link
                href="/portfolio"
                className="text-accent font-medium hover:underline"
              >
                portfolio
              </Link>{" "}
              or get a free quote.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-block px-6 py-2.5 rounded-lg bg-accent text-sm font-semibold hover:opacity-90 transition-all"
                style={{ color: "var(--primary-bg)" }}
              >
                Get a free quote
              </Link>
              <Link
                href="/audit"
                className="inline-block px-6 py-2.5 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
              >
                Free website audit
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
