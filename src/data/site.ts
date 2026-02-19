export const siteConfig = {
  agency: {
    name: 'NorthSummit',
    domain: 'NorthSummit.agency',
    email: 'north-summit@tuta.com',
    tagline: 'Websites that work as hard as you do.',
    description:
      'We design and build fast, modern websites for trades and local businesses across the UK & Europe.',
    location: 'UK & Europe',
  },

  navigation: [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ],

  process: [
    {
      step: 1,
      title: 'Quick brief',
      description: 'Send us an email with what you need. No lengthy forms — just the basics.',
    },
    {
      step: 2,
      title: 'Build & refine',
      description: 'We design and develop your site, sharing progress so you stay in the loop.',
    },
    {
      step: 3,
      title: 'Launch & optimise',
      description: 'Your site goes live. We handle hosting, speed, and SEO out of the box.',
    },
    {
      step: 4,
      title: 'Support & improve',
      description: 'Ongoing tweaks, updates, and support whenever you need it.',
    },
  ],

pricing: [
  {
    name: 'Starter',
    price: '£249',
    popular: false,
    description: 'Ideal for trades and small businesses that need a professional website quickly and affordably.',
    features: [
      'Single-page responsive website',
      'Mobile-optimised design',
      'Contact form + Google Maps',
      'Basic SEO setup',
      'Hosting guidance included',
      '1 round of revisions',
      'Launch in 3–5 days',
    ],
  },
  {
    name: 'Growth',
    price: '£599',
    popular: true,
    description: 'For businesses ready to stand out online and convert more visitors into enquiries.',
    features: [
      'Up to 4 pages',
      'Custom design & branding',
      'Portfolio or gallery section',
      'SEO & performance optimisation',
      'Analytics integration',
      'Speed optimisation',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'Premium Business',
    price: '£1,199',
    popular: false,
    description: 'A complete website designed to attract enquiries, convert visitors, and support your business growth.',
    features: [
      'Up to 8 pages',
      'Advanced design & layout',
      'Booking or enquiry system',
      'Blog or CMS integration',
      'Conversion-focused structure',
      'Performance optimisation',
      '30 days support after launch',
    ],
  },
],


  projects: [
    {
      id: 'roofing01',
      title: 'Roofing Business',
      description: 'Clean, professional site for a roofing contractor with service pages and quote request.',
      image: '/projects/roofing01.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Netlify', 'Static'],
      link: 'https://roofing01.netlify.app/',
    },
    {
      id: 'plumber001',
      title: 'Plumber',
      description: 'Fast-loading plumber website with emergency callout info and service area coverage.',
      image: '/projects/plumber001.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Netlify', 'Static'],
      link: 'https://plumber001.netlify.app/',
    },
    {
      id: 'digital-agency',
      title: 'Digital Agency',
      description: 'Modern agency landing page with animated sections, portfolio showcase, and contact flow.',
      image: '/projects/digital-agency.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Netlify', 'Static'],
      link: 'https://eclectic-melomakarona-8521c0.netlify.app/',
    },
    {
      id: 'garagecar',
      title: 'Garage / Car Service',
      description: 'Auto repair shop website with service listings, pricing, and online booking prompt.',
      image: '/projects/garagecar.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Cloudflare Pages', 'Static'],
      link: 'https://garagecar.pages.dev/',
    },
    {
      id: 'gym001',
      title: 'Gym / Personal Trainer',
      description: 'Energetic fitness site with class schedules, trainer profiles, and membership sign-up.',
      image: '/projects/gym001.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Static'],
      link: 'https://gym001.vercel.app/',
    },
    {
      id: 'cleaners',
      title: 'Cleaners',
      description: 'Cleaning service site with dynamic pricing calculator and instant quote functionality.',
      image: '/projects/cleaners.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'Non-static'],
      link: 'https://cleaners-nonstatic.vercel.app/',
    },
    {
      id: 'sonia-vet',
      title: 'Veterinary Surgeon',
      description: 'Warm, trustworthy vet practice site with services, team bios, and appointment booking.',
      image: '/projects/sonia-vet.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Cloudflare Pages', 'Static'],
      link: 'https://sonia-e6b.pages.dev/',
    },
  ],
} as const;
