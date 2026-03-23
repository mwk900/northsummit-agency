/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://northsummit.agency',
  generateRobotsTxt: false,
  outDir: 'public',
  exclude: ['/question'],
  transform: async (config, path) => {
    const routeLastMod = {
      '/': '2026-03-23',
      '/about': '2026-03-23',
      '/audit': '2026-03-23',
      '/blog': '2026-03-23',
      '/contact': '2026-03-23',
      '/faq': '2026-03-23',
      '/portfolio': '2026-03-23',
      '/web-design-for-plumbers': '2026-03-23',
      '/web-design-for-electricians': '2026-03-23',
      '/web-design-for-roofers': '2026-03-23',
      '/web-design-for-builders': '2026-03-23',
      '/web-design-for-landscapers': '2026-03-23',
      '/web-design-for-painters-and-decorators': '2026-03-23',
      '/web-design-for-kitchen-and-bathroom-fitters': '2026-03-23',
      '/web-design-for-cleaners': '2026-03-23',
      '/web-design-nottingham': '2026-03-23',
      '/blog/how-much-does-a-website-cost-uk': '2026-03-23',
      '/blog/does-your-trade-business-need-a-website': '2026-03-23',
      '/blog/wix-vs-custom-website-for-trades': '2026-03-23',
      '/blog/website-not-getting-enquiries': '2026-03-23',
      '/blog/what-makes-a-good-trades-website': '2026-03-23',
      '/blog/why-mobile-friendly-website-matters': '2026-02-17',
      '/blog/local-seo-for-trades': '2026-03-23',
      '/blog/google-business-profile-for-trades': '2026-03-23',
      '/blog/trade-website-examples': '2026-03-23',
    };
    const lastmod = routeLastMod[path]
      ? new Date(`${routeLastMod[path]}T00:00:00.000Z`).toISOString()
      : undefined;

    // Homepage gets highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        ...(lastmod ? { lastmod } : {}),
      };
    }

    // Portfolio and audit are high-value pages
    if (path === '/portfolio' || path === '/audit' || path === '/blog') {
      return {
        loc: path,
        changefreq: path === '/blog' ? 'weekly' : 'monthly',
        priority: 0.8,
        ...(lastmod ? { lastmod } : {}),
      };
    }

    // Blog posts
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        ...(lastmod ? { lastmod } : {}),
      };
    }

    // Trade landing pages and local pages
    if (path.startsWith('/web-design-for-') || path === '/web-design-nottingham') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.9,
        ...(lastmod ? { lastmod } : {}),
      };
    }

    // Contact, about, FAQ
    if (['/contact', '/about', '/faq'].includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: path === '/contact' ? 0.7 : 0.6,
        ...(lastmod ? { lastmod } : {}),
      };
    }

    // Legal pages
    if (['/privacy', '/terms', '/cookies'].includes(path)) {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 0.3,
      };
    }

    // Default fallback
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      ...(lastmod ? { lastmod } : {}),
    };
  },
};
