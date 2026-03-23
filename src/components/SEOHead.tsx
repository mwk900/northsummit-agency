import Head from "next/head";
import { generateSEO } from "@/utils/seo";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
  canonical?: string | false;
  ogUrl?: string | false;
}

export default function SEOHead({
  title,
  description,
  path,
  image,
  type,
  publishedTime,
  jsonLd,
  noIndex,
  canonical,
  ogUrl,
}: SEOHeadProps) {
  const seo = generateSEO({ title, description, path, image, type, publishedTime });
  const canonicalHref = canonical === false ? null : canonical ?? seo.url;
  const openGraphUrl = ogUrl === false ? null : ogUrl ?? seo.openGraph.url;

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={noIndex ? "noindex,follow" : "index,follow"} />
      {canonicalHref && <link rel="canonical" href={canonicalHref} />}

      {/* Open Graph */}
      <meta property="og:title" content={seo.openGraph.title} />
      <meta property="og:description" content={seo.openGraph.description} />
      {openGraphUrl && <meta property="og:url" content={openGraphUrl} />}
      <meta property="og:image" content={seo.openGraph.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={seo.openGraph.type} />
      <meta property="og:site_name" content={seo.openGraph.siteName} />
      <meta property="og:locale" content={seo.openGraph.locale} />
      <meta property="og:image:alt" content={seo.title} />
      {seo.openGraph.publishedTime && (
        <meta property="article:published_time" content={seo.openGraph.publishedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content={seo.twitter.card} />
      <meta name="twitter:title" content={seo.twitter.title} />
      <meta name="twitter:description" content={seo.twitter.description} />
      <meta name="twitter:image" content={seo.twitter.image} />
      {seo.twitter.site && <meta name="twitter:site" content={seo.twitter.site} />}

      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
