import { siteConfig } from '@/data/site';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northsummit.agency';

export function generateSEO({
  title,
  description = siteConfig.agency.description,
  path = '',
  image = '/logo.svg',
  type = 'website',
  publishedTime,
}: SEOProps = {}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.agency.domain}`
    : `${siteConfig.agency.domain} — ${siteConfig.agency.tagline}`;

  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    url,
    openGraph: {
      title: fullTitle,
      description,
      url,
      image: `${baseUrl}${image}`,
      type,
      siteName: siteConfig.agency.domain,
      locale: 'en_GB',
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image: `${baseUrl}${image}`,
      site: '',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.agency.domain,
    description: siteConfig.agency.description,
    url: baseUrl,
    email: siteConfig.agency.email,
    logo: `${baseUrl}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.agency.domain,
    url: baseUrl,
  };
}
