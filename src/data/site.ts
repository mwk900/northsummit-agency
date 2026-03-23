export const siteConfig = {
  agency: {
    name: 'NorthSummit',
    domain: 'NorthSummit.agency',
    emailParts: ['Hello', 'NorthSummit.agency'],
    phoneParts: ['+44', '7776', '937', '164'],
    whatsappParts: ['+44', '7776', '937', '164'],
    tagline: 'Websites built to turn local searches into calls and enquiries.',
    description:
      'Professional websites for trades and local businesses across the UK. Clear pricing, honest timelines, and a site that actually brings in work.',
    location: 'Based in Nottingham, working UK-wide',
  },

  launch: {
    active: true,
    programmeNote:
      "Our rates are lower right now while we build our portfolio. This pricing reflects where we are, not the quality of the work - and it will not stay this way. Once our portfolio speaks for itself, pricing will reflect that.",
  },

  navigation: [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
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

  // ──────────────────────────────────────────────
  // TOP 6 - homepage gallery
  // Row 1: Restaurant (dark) | Kitchen/Bath (light) | Electrician (dark)
  // Row 2: Barbershop (dark) | Auto Garage (light) | Print Company (light)
  // Visual contrast across both rows.
  // ──────────────────────────────────────────────

  projects: [
    // === TOP 6 (homepage gallery) ===
    {
      id: 'restaurant',
      title: 'Ember & East',
      trade: 'Restaurant',
      shortDesc: 'Menu with prices, chef backstory, and a reservation form. Visitors can book a table in under 30 seconds.',
      description:
        'Menu, backstory, and reservation form. Dark, moody design that sells the experience before the food. Signature dish cards with pricing and a booking form that removes friction.',
      image: '/projects/restaurant.webp',
      imageAlt: 'Ember & East restaurant website with dark moody design, signature dish cards with pricing, and online reservation form',
      link: 'https://restaurant.northsummit.agency/',
    },
    {
      id: 'bathroom-kitchen',
      title: 'Ashwood Kitchens & Bathrooms',
      trade: 'Kitchen & Bathroom Fitting',
      shortDesc: 'Style switcher, before-and-after slider, and a coverage map showing completed projects by area.',
      description:
        'Style switcher, before-and-after slider, and a coverage map with project counts per area. Built for a high-value service where trust closes the sale.',
      image: '/projects/bathroom-kitchen.webp',
      imageAlt: 'Ashwood Kitchens & Bathrooms website with style switcher, before-and-after slider, and regional coverage map',
      link: 'https://bathroom-kitchen.northsummit.agency/',
    },
    {
      id: 'electrician',
      title: 'Arc & Line Electrical',
      trade: 'Electrician',
      shortDesc: 'Fault-finder tool that helps visitors work out their issue before calling. Quote form on every page.',
      description:
        'Interactive fault-finder helps visitors self-diagnose before calling. Certification badges, EV and smart home sections, and a rapid quote form above the fold.',
      image: '/projects/electrician.webp',
      imageAlt: 'Arc & Line Electrical website with interactive fault-finder tool, certification badges, and rapid quote form',
      link: 'https://electrician.northsummit.agency/',
    },
    {
  id: 'builder',
  title: 'Hearthstone Build Co.',
  trade: 'Builder',
  shortDesc: 'Interactive cost estimator, phased build timeline, and worry-buster cards that answer objections before they are raised.',
  description:
    'Interactive cost estimator lets visitors price a project in under two minutes. Phased build-process explorer, draggable Gantt-style timeline, worry-buster flip cards, and accreditation badges build trust before the first phone call.',
  image: '/projects/builder.webp',
  imageAlt: 'Hearthstone Build Co. website with interactive cost estimator, phased build timeline, and accreditation badges',
  link: 'https://builder.northsummit.agency/',
},
{
  id: 'painter',
  title: 'Chalk & Line Decorating',
  trade: 'Painter & Decorator',
  shortDesc: 'Live colour-picker room visualiser and before/after reveal slider. Palette-driven design throughout.',
  description:
    'Room visualiser lets visitors try colours on walls, ceilings, and trim before committing. Curated palette explorer, before/after hover-reveal project gallery, and a five-step process section that sells the prep work as a feature.',
  image: '/projects/painter.webp',
  imageAlt: 'Chalk & Line Decorating website with live colour-picker room visualiser and before-and-after reveal slider',
  link: 'https://painter.northsummit.agency/',
},
    {
      id: 'barbershop',
      title: 'Oak and Steel Barbers',
      trade: 'Barber',
      shortDesc: 'Walk-in availability badge, clear price board, and a gallery grid. Everything a customer needs at a glance.',
      description:
        'Walk-in badge, product carousel, photo gallery, and a clean price board. Bold, dark design built around walk-ins and quick bookings.',
      image: '/projects/barbershop.webp',
      imageAlt: 'Oak and Steel Barbers website with walk-in availability badge, price board, and dark wood aesthetic',
      link: 'https://barbershop.northsummit.agency/',
    },
    {
      id: 'garagecar',
      title: 'Midlands AutoCare',
      trade: 'Auto Garage & MOT',
      shortDesc: 'Diagnostic tool, transparent price list, and a side-by-side comparison against main dealers.',
      description:
        'Diagnostic tool, full price list, and an us-vs-dealer comparison that builds trust fast. Multi-step booking captures the job while they are already thinking about it.',
      image: '/projects/garagecar.webp',
      imageAlt: 'Midlands AutoCare website with diagnostic tool, transparent price list, and dealer comparison section',
      link: 'https://garagecar.northsummit.agency/',
    },

    // === REMAINING PORTFOLIO ===
    {
      id: 'landscaping001',
      title: 'Verdance Outdoor Living',
      trade: 'Landscaping',
      shortDesc: 'Before-and-after project sliders and a guided process that turns ideas into consultation bookings.',
      description:
        'Before-and-after sliders and a guided process that turns garden ideas into consultations. Lifestyle positioning lifts it above a typical trades page.',
      image: '/projects/landscaping.webp',
      imageAlt: 'Verdance Outdoor Living website with before-and-after project sliders and consultation booking flow',
      link: 'https://landscaping.northsummit.agency/',
    },
    {
      id: 'roofing01',
      title: 'Northcrest Roofing Nottingham',
      trade: 'Roofing',
      shortDesc: 'Emergency-first layout with click-to-call above the fold. Built to convert urgent searches into same-day calls.',
      description:
        'Emergency-first layout with click-to-call above the fold and before-and-after project sliders. Built to turn urgent searches into same-day calls.',
      image: '/projects/roofing01.webp',
      imageAlt: 'Northcrest Roofing website with emergency-first layout, click-to-call banner, and before-and-after project gallery',
      link: 'https://roofing.northsummit.agency/',
    },
    {
      id: 'plumber001',
      title: 'Cresco Plumbing & Heating',
      trade: 'Plumber & Heating',
      shortDesc: 'Symptom picker so visitors can describe their problem fast, instant price guide, and Gas Safe trust badges.',
      description:
        'Symptom picker, instant price guide, and Gas Safe trust badges. Built for the moment someone has a leak and needs help now.',
      image: '/projects/plumber001.webp',
      imageAlt: 'Cresco Plumbing & Heating website with symptom picker, instant price guide, and Gas Safe trust badges',
      link: 'https://plumber.northsummit.agency/',
    },
    {
      id: 'beautystudio',
      title: 'Velvet Bloom Beauty Studio',
      trade: 'Beauty Salon',
      shortDesc: 'Clean service menu, simple booking form, and editorial photography that matches the salon experience.',
      description:
        'Warm editorial photography and a calm tone that matches a boutique salon experience. Easy service menu and a simple booking form.',
      image: '/projects/beautystudio.webp',
      imageAlt: 'Velvet Bloom Beauty Studio website with warm editorial photography, service menu, and simple booking form',
      link: 'https://beautystudio.northsummit.agency/',
    },
    {
      id: 'gym001',
      title: 'NorthPeak Performance',
      trade: 'Gym & Personal Training',
      shortDesc: 'Coaching programmes with real results shown in numbers. Goal-based enquiry form captures interest before it fades.',
      description:
        'Coaching programmes, real results with numbers, and a goal-based consultation form. Designed to capture interest before motivation fades.',
      image: '/projects/gym001.webp',
      imageAlt: 'NorthPeak Performance gym website with coaching programmes, real results stats, and goal-based consultation form',
      link: 'https://gym.northsummit.agency/',
    },
    {
      id: 'cleaners',
      title: 'Spotless Nottingham',
      trade: 'Cleaning Services',
      shortDesc: 'Three pricing tiers shown upfront so visitors know the cost before they ask. WhatsApp option for quick bookings.',
      description:
        'Three pricing tiers shown upfront so visitors know the cost before they ask. Simple booking flow with a WhatsApp option for quick enquiries.',
      image: '/projects/cleaners.webp',
      imageAlt: 'Spotless Nottingham cleaning website with three pricing tiers, booking flow, and WhatsApp quick-enquiry option',
      link: 'https://cleaners.northsummit.agency/',
    },
    {
      id: 'printcompany',
      title: 'Trent Valley PrintWorks',
      trade: 'Print & Design',
      shortDesc: 'Dedicated service pages, work samples with finish specs, and a quote form with quick-select options.',
      description:
        'Multi-page B2B site with dedicated service pages, a work carousel with stock and finish specs, and a quote form with quick-select options.',
      image: '/projects/printcompany.webp',
      imageAlt: 'Trent Valley PrintWorks website with dedicated service pages, work samples with finish specs, and quick-select quote form',
      link: 'https://printcompany.northsummit.agency/',
    },
  ],
} as const;