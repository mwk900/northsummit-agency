export const siteConfig = {
  agency: {
    name: 'NorthSummit',
    domain: 'NorthSummit.agency',
    emailParts: ['North-Summit', 'tuta.com'],
    phoneParts: ['+44', '7776', '937', '164'],
    whatsappParts: ['+44', '7776', '937', '164'],
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
  id: 'beautystudio',
  title: 'Velvet Bloom Beauty Studio',
  category: 'Local Business',
  shortDesc: 'Hair salon website focused on bookings, not just aesthetics.',
  description:
    'Editorial imagery builds trust, service menus are easy to scan and strong call-to-action buttons lead directly to a simple appointment request form. Designed to create a calm, high-end impression while guiding visitors smoothly toward conversion.',
  image: '/projects/beautystudio.png',
  link: 'https://beautystudio.northsummit.agency/',
},
{
  id: 'restaurant',
  title: 'Ember & East',
  category: 'Local Business',
  shortDesc: 'Restaurant website built around the booking and showcasing the menu.',
  description:
    'Dark, atmospheric design that sells the experience before the food. Signature dish cards, an evocative brand story and a reservation form that removes every reason to pick up the phone instead.',
  image: '/projects/restaurant.png',
  link: 'https://restaurant.northsummit.agency/',
},
{
  id: 'roofing01',
  title: 'Northcrest Roofing Nottingham',
  category: 'Trades',
  hook: 'Emergency-first layout built to turn local searches into calls.',
  description:
    'Emergency layout built for urgency. Click-to-call above the fold, trust signals upfront, and a quote form that works on any phone.',
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
    'Lifestyle-led design that turns garden inspiration into booked consultations. Sticky CTAs, transformation visuals, and a smooth path to enquiry.',
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
    'Clear service pages, fast quote flow, and a layout that works equally well for a quick phone browse or a detailed desktop comparison.',
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
    'High-energy design that captures interest before motivation fades. Coaching pathways, clear pricing, and a consultation booking built for mobile.',
  image: '/projects/gym001.png',
  link: 'https://gym.northsummit.agency/',
},
{
  id: 'barbershop',
  title: 'Oak and Steel Barbers',
  category: 'Local Business',
  description:
    'Warm, confident design built around walk-ins and easy bookings. Service menu with clear pricing, a photo gallery showing real craft, and a contact form that works just as well for a quick message as it does for booking ahead.',
  image: '/projects/barbershop.png',
  link: 'https://barbershop.northsummit.agency/',
},
{
  id: 'bathroom-kitchen',
  title: 'Ashwood Kitchens & Bathrooms',
  category: 'Local Business',
  description:
    'Premium design for a high-value service where trust is everything. A before-and-after transformation slider, detailed project case studies, and a consultation request form that makes it easy to take the first step without feeling pressured.',
  image: '/projects/bathroom-kitchen.png',
  link: 'https://bathroom-kitchen.northsummit.agency/',
},
{
  id: 'electrician',
  title: 'Arc & Line Electrical',
  category: 'Trades',
  description:
    'Built for a trade where credibility closes the job. Certifications and compliance badges upfront, an interactive fault-finder that helps customers self-diagnose before calling, and a rapid quote form above the fold on every device.',
  image: '/projects/electrician.png',
  link: 'https://electrician.northsummit.agency/',
},
{
  id: 'plumber001',
  title: 'Cresco Plumbing & Heating',
  category: 'Trades',
  hook:
    'Emergency plumbing site designed to turn urgent searches into immediate calls.',
  description:
    'Built for the moment someone has a leak and needs help now. Click-to-call, trust signals, and a quote form all visible without scrolling.',
  // TODO: update link and image when redesign is live
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
      // TODO: update link and image when redesign is live
      image: '/projects/garagecar.png',
      link: 'https://garagecar.northsummit.agency/',
    },
    {
      id: 'cleaners',
      title: 'Nottingham Clean Co.',
      category: 'Local Business',
      hook:
        'People want to know one thing: how much will it cost? This site answers that question before they even have to ask.',
      description:
        'Dynamic pricing calculator that gives an instant quote. No back-and-forth emails, no waiting for a callback. Customers see the price, like it, and book - all in one visit.',
      // TODO: update link and image when redesign is live
      image: '/projects/cleaners.png',
      link: 'https://cleaners-nonstatic.vercel.app/',
    },
  ],
} as const;
