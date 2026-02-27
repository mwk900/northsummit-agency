import { siteConfig } from "@/data/site";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string; // can be "/og.jpg" or absolute "https://..."
  type?: "website" | "article";
  publishedTime?: string;
}

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://northsummit.agency";

type AgencyConfig = typeof siteConfig.agency & {
  twitter?: string;
  sameAs?: string[];
};

const agency = siteConfig.agency as AgencyConfig;

function toAbsoluteUrl(pathOrUrl: string) {
  // If already absolute, keep it
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  // Ensure it becomes absolute
  return new URL(pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`, baseUrl).toString();
}

function toPageUrl(path: string) {
  // Path should be like "", "/", "/about"
  const normalized = path ? (path.startsWith("/") ? path : `/${path}`) : "/";
  return new URL(normalized, baseUrl).toString();
}

export function generateSEO({
  title,
  description = siteConfig.agency.description,
  path = "",
  image = "/og.jpg",
  type = "website",
  publishedTime,
}: SEOProps = {}) {
  const brandName = agency.name || agency.domain;
  const tagline = agency.tagline;

  const fullTitle = title
    ? `${title} | ${brandName}`
    : `${brandName} | ${tagline}`;

  const url = toPageUrl(path);
  const absoluteImage = toAbsoluteUrl(image);

  // Optional twitter handle if you have one; otherwise undefined
  const twitterHandle =
    agency.twitter ||
    process.env.NEXT_PUBLIC_TWITTER_HANDLE ||
    undefined;

  return {
    title: fullTitle,
    description,
    url,
    openGraph: {
      title: fullTitle,
      description,
      url,
      image: absoluteImage,
      type,
      siteName: brandName,
      locale: "en_GB",
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      image: absoluteImage,
      site: twitterHandle, // undefined if none
    },
  };
}

export function generateOrganizationSchema() {
  const brandName = agency.name || agency.domain;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName,
    description: agency.description,
    url: baseUrl,
    logo: toAbsoluteUrl("/logo-light.svg"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
  };

  // Optional sameAs if you add socials later:
  // const sameAs = (siteConfig as any)?.agency?.sameAs;
  // if (Array.isArray(sameAs) && sameAs.length) schema.sameAs = sameAs;

  return schema;
}

export function generateWebSiteSchema() {
  const brandName = agency.name || agency.domain;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brandName,
    url: baseUrl,
  };
}
