export const siteConfig = {
  agency: {
    name: 'NorthSummit',
    domain: 'NorthSummit.agency',
    email: 'North-Summit@tuta.com',
    phone: '+447776937164',
    whatsapp: '+447776937164',
    tagline: 'Websites built to turn local searches into calls and enquiries.',
    description:
      'Professional websites for trades and local businesses across the UK. Clear pricing, honest timelines, and a site that actually brings in work.',
    location: 'UK-based',
  },

  launch: {
    active: true,
    programmeNote:
      "Our rates are lower right now while we build our portfolio. This pricing reflects where we are, not the quality of the work - and it will not stay this way. Once our portfolio speaks for itself, pricing will reflect that.",
  },

  navigation: [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
  ],

  calendly: 'https://calendly.com/north-summit-tuta/30min',

  pricing: [
    {
      name: 'Starter',
      price: '£149',
      priceLabel: '£149',
      stripeLink: 'https://buy.stripe.com/7sYcN4eR05Q87uFbYx8ww04',
      depositLink: null,
      popular: false,
      description:
        'A professional single-page site to get your business online properly.',
      features: [
        'Single-page responsive website',
        'Mobile-first design',
        'Contact form + Google Maps',
        'Technical SEO foundations',
        'Hosting setup guidance',
        '1 round of revisions',
      ],
      cta: {
        primary: { label: 'Get started for £149', type: 'stripe' as const },
        secondary: { label: 'Talk to us', type: 'question' as const },
        microcopy: 'Prefer to chat first? Send a quick question.',
      },
    },

    {
      name: 'Growth',
      price: 'From £349',
      priceLabel: 'From £349',
      stripeLink: 'https://buy.stripe.com/3cI14mbEO2DW9CNgeN8ww05',
      depositLink: 'https://buy.stripe.com/7sY5kC7oy92k9CN0fP8ww07',
      popular: true,
      description:
        'For businesses that need more than one page - with branding, gallery, and analytics built in.',
      features: [
        'Everything from a Starter',
        'Up to 4 pages',
        'Custom design & branding',
        'Portfolio or gallery section',
        'SEO & performance optimisation',
        'Analytics integration',
        'Speed optimisation',
        '2 rounds of revisions',
      ],
      cta: {
        primary: { label: 'Start the project', type: 'contact' as const },
        secondary: { label: 'Pay £100 deposit', type: 'deposit' as const },
        microcopy:
          "We confirm scope first. You will receive a written quote before work starts.",
      },
    },

    {
      name: 'Premium',
      price: 'From £699',
      priceLabel: 'From £699',
      stripeLink: 'https://buy.stripe.com/bJe7sK9wGa6o6qB7Ih8ww06',
      depositLink: 'https://buy.stripe.com/7sY5kC7oy92k9CN0fP8ww07',
      popular: false,
      description:
        'A full website with booking, blog, and everything set up to bring in work. 30 days of support included.',
      features: [
        'Everything from a Starter & Growth',
        'Up to 8 pages',
        'Advanced design & layout',
        'Booking or enquiry system',
        'Blog or CMS integration',
        'Conversion-focused structure',
        'Performance optimisation',
        '30 days support after launch',
      ],
      cta: {
        primary: { label: 'Discuss your project', type: 'contact' as const },
        secondary: { label: 'Book a call', type: 'calendly' as const },
        microcopy:
          'Best for larger or more complex websites. We will confirm everything on a quick call.',
      },
    },
  ],

  depositPolicy:
    'Deposits are refundable until work begins. Once design work starts, deposits are non-refundable.',

  projects: [
{
  id: 'roofing01',
  title: 'Northcrest Roofing Nottingham',
  category: 'Trades',
  hook: 'Emergency-first layout built to turn local searches into calls.',
  description:
    'Mobile-first sticky emergency CTA, clear trust promises, service-area clarity, and a fast quote form - designed for roof repairs and storm callouts. Built as a realistic demo project to showcase conversion-focused design for trades.',
  image: '/projects/roofing01.png',
  link: 'https://roofing.northsummit.agency/',
},
{
  id: 'landscaping001',
  title: 'Verdance Outdoor Living',
  category: 'Trades',
  hook:
    'Premium landscaping website designed to turn garden ideas into booked consultations.',
  description:
    'Mobile-first layout with a sticky call-to-action, immersive transformation visuals, and a smooth scroll navigation to guide visitors through services and enquiry steps without friction. The design focuses on trust, lifestyle inspiration, and clear next actions to help homeowners confidently request a quote. Built as a realistic demo project to showcase conversion-focused design for local landscaping businesses.',
  image: '/projects/landscaping.png',
  link: 'https://landscaping.northsummit.agency/',
},
{
  id: 'printcompany',
  title: 'Trent Valley PrintWorks',
  category: 'Local Business',
  hook:
    'Modern print studio concept designed to turn enquiries into quote requests with clear service navigation.',
  description:
    'Professional print business website concept featuring structured service pages for products like leaflets, stationery, booklets, and NCR forms. Built with mobile-first UX, clear quote pathways, and local SEO targeting to improve visibility in searches such as printing services near me. The layout adapts between desktop and mobile to prioritise detailed browsing on larger screens and quick contact actions on phones. Created as a realistic demo project to showcase conversion-focused design for print and manufacturing businesses.',
  image: '/projects/printcompany.png',
  link: 'https://printcompany.northsummit.agency/',
},
{
  id: 'gym001',
  title: 'NorthPeak Performance',
  category: 'Local Business',
  hook:
    'High-energy fitness site designed to turn motivation into booked consultations.',
  description:
    'Bold visual hero, clear coaching pathways, and friction-free consultation booking - built to capture interest while motivation is highest. Includes trust elements, program clarity, and mobile-first UX to support local client acquisition. Created as a realistic demo project to showcase conversion-focused design for fitness businesses.',
  image: '/projects/gym001.png',
  link: 'https://gym.northsummit.agency/',
},
{
  id: 'plumber001',
  title: 'Cresco Plumbing & Heating',
  category: 'Trades',
  hook:
    'Emergency plumbing site designed to turn urgent searches into immediate calls.',
  description:
    'Mobile-first click-to-call, clear trust signals, and fast quote access positioned above the fold. Service coverage structured for local SEO visibility and rapid customer action during urgent situations. Built as a realistic demo project to showcase conversion-focused design for trades businesses.',
  image: '/projects/plumber001.png',
  link: 'https://plumber001.netlify.app/',
},
    {
      id: 'garagecar',
      title: 'Midlands AutoCare',
      category: 'Trades',
      hook:
        'Most people pick a garage based on trust and convenience. This site was built to earn both in under 10 seconds.',
      description:
        'Service listings with clear pricing so there are no surprises. Location and opening hours impossible to miss. Online booking prompt that catches people while they are already thinking about it.',
      image: '/projects/garagecar.png',
      link: 'https://garagecar.pages.dev/',
    },
    {
      id: 'cleaners',
      title: 'Nottingham Clean Co.',
      category: 'Local Business',
      hook:
        'People want to know one thing: how much will it cost? This site answers that question before they even have to ask.',
      description:
        'Dynamic pricing calculator that gives an instant quote. No back-and-forth emails, no waiting for a callback. Customers see the price, like it, and book - all in one visit.',
      image: '/projects/cleaners.png',
      link: 'https://cleaners-nonstatic.vercel.app/',
    },
    {
      id: 'sonia-vet',
      title: 'Sonia Veterinary Practice',
      category: 'Local Business',
      hook:
        'Pet owners are protective. They need to trust you before they trust you with their dog. This site was built to feel warm from the first click.',
      description:
        'Friendly team bios that put a face to the practice. Services explained without the medical jargon. Appointment booking that is simple enough to use when you are worried about your pet.',
      image: '/projects/sonia-vet.png',
      link: 'https://sonia-e6b.pages.dev/',
    },
  ],
} as const;
