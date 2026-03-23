/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://northsummit.agency',
  generateRobotsTxt: false,
  outDir: 'public',
  transform: async (config, path) => {
    // Homepage gets highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Portfolio and audit are high-value pages
    if (path === '/portfolio' || path === '/audit' || path === '/blog') {
      return {
        loc: path,
        changefreq: path === '/blog' ? 'weekly' : 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Blog posts
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }

    // Trade landing pages and local pages
    if (path.startsWith('/web-design-for-') || path === '/web-design-nottingham') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // Contact, about, FAQ
    if (['/contact', '/about', '/faq'].includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: path === '/contact' ? 0.7 : 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    // Question page
    if (path === '/question') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.4,
        lastmod: new Date().toISOString(),
      };
    }

    // Legal pages
    if (['/privacy', '/terms', '/cookies'].includes(path)) {
      return {
        loc: path,
        changefreq: 'yearly',
        priority: 0.3,
        lastmod: new Date().toISOString(),
      };
    }

    // Default fallback
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
