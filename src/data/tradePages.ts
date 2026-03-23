export type TradePageKey =
  | "plumbers"
  | "electricians"
  | "roofers"
  | "builders"
  | "landscapers"
  | "paintersAndDecorators"
  | "kitchenAndBathroomFitters"
  | "cleaners";

export interface TradeFeatureItem {
  title: string;
  text: string;
}

export interface TradePageData {
  key: TradePageKey;
  slug: string;
  shortLabel: string;
  title: string;
  description: string;
  h1: string;
  heroText: string;
  whyHeading: string;
  whyParagraphs: string[];
  includeItems: TradeFeatureItem[];
  pricingHeading: string;
  pricingIntro: string;
  finalHeading: string;
  finalText: string;
  projectId: string;
  relatedTradeKeys: TradePageKey[];
}

export const tradePages: Record<TradePageKey, TradePageData> = {
  plumbers: {
    key: "plumbers",
    slug: "web-design-for-plumbers",
    shortLabel: "Plumbers",
    title: "Plumber Website Design UK",
    description:
      "Plumber website design UK. Web design for plumbers across the UK with fast mobile layouts, clear quote forms, trust signals, and pages built to turn local searches into calls.",
    h1: "Web design for plumbers that turns local searches into calls",
    heroText:
      "When someone has a leak, a broken boiler, or no hot water, they are not comparing ten agencies. They are calling the plumber whose site loads quickly, looks trustworthy, and makes it easy to get in touch. We build plumber websites that do exactly that.",
    whyHeading: "Why plumbers lose work with a weak website",
    whyParagraphs: [
      "Most plumbing enquiries start on a phone. A customer searches for an emergency plumber, boiler repair, or bathroom fitter in their area and chooses from the first businesses that feel credible and easy to contact.",
      "If your site is slow, vague, or hard to use on mobile, you lose the call before the customer has even spoken to you. A good plumber website needs to be fast, clear about what you do, and built around getting quote requests and phone calls.",
    ],
    includeItems: [
      {
        title: "Click-to-call contact paths",
        text: "Your phone number stays easy to find on mobile so urgent visitors can call without hunting around the page.",
      },
      {
        title: "Clear service pages",
        text: "Boiler work, bathrooms, emergency call-outs, heating, and general plumbing can each be explained properly so Google and customers understand what you do.",
      },
      {
        title: "Quote forms that ask the right questions",
        text: "Structured enquiry forms help you capture the job type, urgency, and service area up front so you can reply faster.",
      },
      {
        title: "Trust signals that matter",
        text: "Insurance, Gas Safe details, years in trade, and real proof points help visitors feel comfortable contacting you.",
      },
      {
        title: "Coverage and local-search support",
        text: "Your site can make it clear where you work without turning into a pile of thin city pages.",
      },
      {
        title: "Fast mobile performance",
        text: "Plumber websites need to feel quick and reliable on a phone, especially when the customer needs help now.",
      },
    ],
    pricingHeading: "Clear pricing for plumber websites",
    pricingIntro:
      "Plumber websites start from £149 for a single-page site, or from £349 for a multi-page build with service sections, lead-capture forms, and technical SEO foundations.",
    finalHeading: "Need a plumber website that brings in better enquiries?",
    finalText:
      "Tell us about your plumbing business and we will come back with a clear quote, realistic scope, and a site structure built to help you win more local work.",
    projectId: "plumber001",
    relatedTradeKeys: ["electricians", "roofers", "builders", "kitchenAndBathroomFitters"],
  },
  electricians: {
    key: "electricians",
    slug: "web-design-for-electricians",
    shortLabel: "Electricians",
    title: "Electrician Website Design UK",
    description:
      "Electrician website design UK. Web design for electricians across the UK with fast mobile layouts, certification-led trust signals, and pages built to turn searches into enquiries.",
    h1: "Web design for electricians that helps win more enquiries",
    heroText:
      "Electricians need a website that feels competent from the first screen. Whether the enquiry is domestic, commercial, EV charging, or testing work, the site needs to show what you do, where you work, and why you can be trusted.",
    whyHeading: "Why electricians need a clearer online presence",
    whyParagraphs: [
      "Customers looking for an electrician often compare a few options quickly. If your website does not make your services, qualifications, and contact path obvious, you lose enquiries to businesses that look more established online.",
      "A strong electrician website should support domestic and commercial intent, explain your service mix properly, and keep the route to a quote simple on every device.",
    ],
    includeItems: [
      {
        title: "Certification-first messaging",
        text: "NICEIC, NAPIT, Part P, and similar credentials can be positioned where visitors will actually see them.",
      },
      {
        title: "Service pages with commercial intent",
        text: "Domestic, commercial, EV charger installation, rewires, inspections, and fault finding can each be targeted clearly.",
      },
      {
        title: "Quote forms built for real jobs",
        text: "Capture the right information up front so you can tell the difference between a quick job, a larger install, and an urgent fault.",
      },
      {
        title: "Mobile-first layout",
        text: "Most electrical enquiries start on a phone, so the whole layout needs to be quick, readable, and easy to act on.",
      },
      {
        title: "Area and service clarity",
        text: "The site can explain both what you do and where you work without relying on spammy location-page tactics.",
      },
      {
        title: "Professional, credible design",
        text: "The first impression should feel reliable and capable, not generic or stitched together from a template.",
      },
    ],
    pricingHeading: "Clear pricing for electrician websites",
    pricingIntro:
      "Electrician websites start from £149 for a single-page brochure site, or from £349 for a multi-page build with service targeting, trust content, and stronger lead capture.",
    finalHeading: "Ready for an electrician website that supports growth?",
    finalText:
      "Tell us what sort of electrical work you want more of and we will shape the site around the services, areas, and enquiries that matter most to your business.",
    projectId: "electrician",
    relatedTradeKeys: ["plumbers", "roofers", "builders", "cleaners"],
  },
  roofers: {
    key: "roofers",
    slug: "web-design-for-roofers",
    shortLabel: "Roofers",
    title: "Roofer Website Design UK",
    description:
      "Roofer website design UK. Web design for roofers across the UK with emergency-first messaging, strong mobile UX, project galleries, and contact paths built for urgent local searches.",
    h1: "Web design for roofers that helps urgent searches turn into calls",
    heroText:
      "Roofing enquiries often come with urgency attached. If someone has storm damage, a leak, or a roof repair problem, they need a site that loads fast, looks legitimate, and makes it obvious how to get a quote or call for help.",
    whyHeading: "Why roofing businesses lose leads online",
    whyParagraphs: [
      "Roofing is highly competitive in local search. Homeowners compare businesses quickly, and the site that feels clearer, faster, and more trustworthy usually gets the call.",
      "A roofer website should show your services, project proof, coverage area, and next steps immediately. If it buries contact details or feels outdated, it costs you enquiries.",
    ],
    includeItems: [
      {
        title: "Emergency-first layout",
        text: "The site can support urgent repair intent without losing sight of larger planned roofing jobs and quote requests.",
      },
      {
        title: "Project galleries and proof",
        text: "Before-and-after work, completed projects, and visible proof help homeowners trust the quality of your work.",
      },
      {
        title: "Fast mobile UX",
        text: "Roofing searches are heavily mobile, so the contact path needs to stay quick and simple on smaller screens.",
      },
      {
        title: "Service-specific positioning",
        text: "Repairs, replacements, flat roofs, gutters, soffits, and fascias can be presented clearly so both search engines and customers understand the offer.",
      },
      {
        title: "Legitimacy signals",
        text: "Insurance, guarantees, years of experience, and clear business information help remove doubt before the first call.",
      },
      {
        title: "Coverage without doorway-page clutter",
        text: "The site can support the towns and areas you work in while keeping the structure useful and honest.",
      },
    ],
    pricingHeading: "Clear pricing for roofer websites",
    pricingIntro:
      "Roofer websites start from £149 for a simple lead-generation page, or from £349 for a multi-page site with service targeting, image galleries, and stronger SEO foundations.",
    finalHeading: "Need a roofer website that helps you win more local work?",
    finalText:
      "Tell us about your roofing business and we will map out a site structure that supports urgent enquiries, bigger quote requests, and clearer local trust signals.",
    projectId: "roofing01",
    relatedTradeKeys: ["plumbers", "electricians", "builders", "landscapers"],
  },
  builders: {
    key: "builders",
    slug: "web-design-for-builders",
    shortLabel: "Builders",
    title: "Builder Website Design UK",
    description:
      "Builder website design UK. Web design for builders across the UK with project-led proof, clear service pages, and enquiry flows built for extensions, renovations, and general building work.",
    h1: "Web design for builders that supports bigger quotes and better enquiries",
    heroText:
      "Builders need more than a basic brochure page. The website has to show the quality and scope of the work, explain the services clearly, and make it easy for the right clients to ask about extensions, renovations, conversions, and general building projects.",
    whyHeading: "Why builders need a stronger website than a simple template",
    whyParagraphs: [
      "Building work is trust-heavy and value-heavy. Customers want to see what you do, understand the sort of projects you take on, and feel confident before they send an enquiry.",
      "A builder website should help you qualify the right work, show project proof properly, and give homeowners a clearer reason to contact you instead of another local building firm.",
    ],
    includeItems: [
      {
        title: "Service pages for real building work",
        text: "Extensions, renovations, loft conversions, structural work, and general building services can all be presented clearly.",
      },
      {
        title: "Project-focused proof",
        text: "Larger jobs need stronger evidence, so galleries, process sections, and completed-project highlights matter more here than on a basic trade page.",
      },
      {
        title: "Enquiry forms that qualify scope",
        text: "Capture enough project detail up front to separate serious building enquiries from vague tyre-kicker messages.",
      },
      {
        title: "Trust and legitimacy signals",
        text: "Insurance, experience, trade memberships, and project detail help reassure clients who are planning major spend.",
      },
      {
        title: "Mobile-first but built for longer research",
        text: "The site still has to work brilliantly on mobile, while also giving enough depth for people comparing builders carefully.",
      },
      {
        title: "SEO foundations for local service terms",
        text: "The site can target builder-related searches without depending on thin location pages or generic copy.",
      },
    ],
    pricingHeading: "Clear pricing for builder websites",
    pricingIntro:
      "Builder websites start from £149 for a focused one-page presence, or from £349 for a stronger multi-page build with service targeting, galleries, and project-led structure.",
    finalHeading: "Want a builder website that helps you win better-fit projects?",
    finalText:
      "Tell us what sort of building work you want more of and we will shape a site that helps you look credible, explain the job properly, and attract better enquiries.",
    projectId: "builder",
    relatedTradeKeys: ["roofers", "plumbers", "kitchenAndBathroomFitters", "paintersAndDecorators"],
  },
  landscapers: {
    key: "landscapers",
    slug: "web-design-for-landscapers",
    shortLabel: "Landscapers",
    title: "Landscaper Website Design UK",
    description:
      "Landscaper website design UK. Web design for landscapers across the UK with project galleries, service targeting, and mobile-first enquiry flows for garden and outdoor living work.",
    h1: "Web design for landscapers that turns project interest into enquiries",
    heroText:
      "Landscaping is visual, local, and trust-led. Your website needs to show the standard of your work, explain the services clearly, and turn garden-improvement searches into real consultations and quote requests.",
    whyHeading: "Why landscapers need a site that shows the work properly",
    whyParagraphs: [
      "Potential customers want to see the finish, the style, and the sort of jobs you take on before they ever send a message. A weak website hides your best selling point: the work itself.",
      "A good landscaper website should balance strong imagery with clear service targeting, local relevance, and a simple route to a quote or site visit.",
    ],
    includeItems: [
      {
        title: "Project galleries that sell the result",
        text: "Landscaping websites need before-and-after proof, finished-project imagery, and a layout that makes the work easy to browse.",
      },
      {
        title: "Service targeting for outdoor work",
        text: "Patios, paving, fencing, turfing, decking, garden design, and full garden builds can each be explained clearly.",
      },
      {
        title: "Lead capture for higher-value jobs",
        text: "Quote forms can ask the right questions about job type, timing, and location without overwhelming the visitor.",
      },
      {
        title: "Seasonal and local-search support",
        text: "The site can support the terms customers actually search for when they are planning outdoor work in their area.",
      },
      {
        title: "Mobile-friendly image experience",
        text: "The visuals need to stay persuasive on a phone, not just on a desktop gallery.",
      },
      {
        title: "Clear trust signals",
        text: "Real project proof, years of experience, and clear business information help move visitors from browsing to booking.",
      },
    ],
    pricingHeading: "Clear pricing for landscaper websites",
    pricingIntro:
      "Landscaper websites start from £149 for a simple online presence, or from £349 for a multi-page build with service sections, galleries, and stronger enquiry capture.",
    finalHeading: "Need a landscaper website that helps you win more project enquiries?",
    finalText:
      "Tell us what sort of outdoor work you want more of and we will map out a site that shows the work properly and makes it easier for the right clients to get in touch.",
    projectId: "landscaping001",
    relatedTradeKeys: ["builders", "paintersAndDecorators", "cleaners", "roofers"],
  },
  paintersAndDecorators: {
    key: "paintersAndDecorators",
    slug: "web-design-for-painters-and-decorators",
    shortLabel: "Painters & Decorators",
    title: "Painter and Decorator Website Design UK",
    description:
      "Painter and decorator website design UK. Web design for painters and decorators across the UK with visual proof, clear service pages, and quote paths built for local decorating work.",
    h1: "Web design for painters and decorators that helps the right customers enquire",
    heroText:
      "Painting and decorating websites need to feel clean, trustworthy, and visually strong. Customers want to see your finish, understand the services, and know how to ask for a quote without friction.",
    whyHeading: "Why painters and decorators need better proof online",
    whyParagraphs: [
      "Decorating work is judged visually, so weak websites leave too much to the imagination. If the site does not show your standards properly, it becomes harder to justify your quote and harder to stand out.",
      "A strong decorator website should support local search, show finished work clearly, and make it easy for homeowners and businesses to request the next step.",
    ],
    includeItems: [
      {
        title: "Visual proof that sells the finish",
        text: "Decorating websites work best when real project images, before-and-after visuals, and service examples are easy to browse.",
      },
      {
        title: "Clear service targeting",
        text: "Interior, exterior, wallpapering, commercial decorating, and prep work can be explained clearly instead of being buried in one vague page.",
      },
      {
        title: "Quote forms built for practical jobs",
        text: "Visitors can tell you what needs painting, where it is, and what sort of timescale they are working to.",
      },
      {
        title: "Mobile-first local search support",
        text: "The site needs to work for local homeowners searching on their phone as well as businesses comparing options.",
      },
      {
        title: "Credible, professional presentation",
        text: "A clean layout and consistent messaging help the business feel professional before a client has seen your quote.",
      },
      {
        title: "Natural internal structure",
        text: "The site can grow into service and proof pages without turning into a bloated or repetitive mess.",
      },
    ],
    pricingHeading: "Clear pricing for painter and decorator websites",
    pricingIntro:
      "Painter and decorator websites start from £149 for a single-page setup, or from £349 for a multi-page build with gallery sections, stronger service targeting, and better lead capture.",
    finalHeading: "Want a decorator website that helps you look more established online?",
    finalText:
      "Tell us what sort of decorating work you want more of and we will build around the proof, service mix, and local search intent that matters to your business.",
    projectId: "painter",
    relatedTradeKeys: ["builders", "landscapers", "kitchenAndBathroomFitters", "cleaners"],
  },
  kitchenAndBathroomFitters: {
    key: "kitchenAndBathroomFitters",
    slug: "web-design-for-kitchen-and-bathroom-fitters",
    shortLabel: "Kitchen & Bathroom Fitters",
    title: "Kitchen and Bathroom Fitter Website Design UK",
    description:
      "Kitchen and bathroom fitter website design UK. Web design for fitters across the UK with project-led proof, clear service positioning, and quote paths built for higher-value home improvement work.",
    h1: "Web design for kitchen and bathroom fitters that helps win better enquiries",
    heroText:
      "Kitchen and bathroom projects are considered purchases. The website has to show the finish, explain the service clearly, and make clients confident enough to ask about a quote, survey, or consultation.",
    whyHeading: "Why fitting businesses need stronger online positioning",
    whyParagraphs: [
      "Homeowners spend time comparing fitters, styles, and project quality. If your site feels vague, generic, or thin on proof, you lose trust before the conversation even starts.",
      "A strong kitchen and bathroom fitting website should support higher-value enquiries with better project proof, clearer service detail, and a simple path to book the next step.",
    ],
    includeItems: [
      {
        title: "Project-led service pages",
        text: "Kitchen fitting, bathroom fitting, refurbishments, design-and-fit work, and related services can be explained clearly and commercially.",
      },
      {
        title: "Visual proof built around finished work",
        text: "This type of trade needs strong imagery, process clarity, and project detail to help clients picture the end result.",
      },
      {
        title: "Quote and consultation capture",
        text: "The enquiry flow can capture the basics of the project, budget fit, and location without turning into a long form.",
      },
      {
        title: "Trust signals for higher-value work",
        text: "Professional presentation, business clarity, and real project proof matter more when the customer is planning a larger spend.",
      },
      {
        title: "Mobile-first but detail-rich",
        text: "The site needs to work brilliantly on mobile while still giving enough information for considered buying decisions.",
      },
      {
        title: "SEO foundations for service-led searches",
        text: "The structure should support the services people actually search for without forcing spammy local landing pages.",
      },
    ],
    pricingHeading: "Clear pricing for kitchen and bathroom fitter websites",
    pricingIntro:
      "Kitchen and bathroom fitter websites start from £149 for a focused one-page presence, or from £349 for a multi-page build with galleries, service sections, and stronger enquiry support.",
    finalHeading: "Need a fitting website that helps you win better-quality projects?",
    finalText:
      "Tell us what sort of kitchen and bathroom work you want more of and we will plan a site that shows the work properly and helps clients feel ready to enquire.",
    projectId: "bathroom-kitchen",
    relatedTradeKeys: ["builders", "plumbers", "paintersAndDecorators", "cleaners"],
  },
  cleaners: {
    key: "cleaners",
    slug: "web-design-for-cleaners",
    shortLabel: "Cleaners",
    title: "Cleaner Website Design UK",
    description:
      "Cleaner website design UK. Web design for cleaning businesses across the UK with clear service menus, local-search support, and fast enquiry paths for domestic and commercial cleaning work.",
    h1: "Web design for cleaners that helps turn local searches into bookings",
    heroText:
      "Cleaning businesses need a website that feels simple, trustworthy, and easy to act on. People want to know what you clean, where you work, and how quickly they can get a quote or book the next step.",
    whyHeading: "Why cleaning businesses need a clearer, faster website",
    whyParagraphs: [
      "A lot of cleaning websites stay too vague. They do not explain the service types properly, they hide the contact path, and they make it harder than it should be for a customer to understand what happens next.",
      "A stronger cleaning website should support domestic and commercial searches, explain service types clearly, and keep the route to a quote simple on mobile.",
    ],
    includeItems: [
      {
        title: "Clear service menus",
        text: "Domestic cleaning, commercial cleaning, end-of-tenancy, deep cleans, and specialist services can each be described properly.",
      },
      {
        title: "Simple quote and booking paths",
        text: "Visitors should be able to ask about a service, location, and frequency without filling out a clumsy form.",
      },
      {
        title: "Local-search support",
        text: "The site can show where you work and what services you offer without overdoing the location targeting.",
      },
      {
        title: "Trust signals that reduce hesitation",
        text: "Clear business details, reviews when available, and a professional presentation help the business feel reliable.",
      },
      {
        title: "Mobile-first layout",
        text: "Cleaning enquiries often happen quickly on a phone, so speed and clarity matter more than fancy effects.",
      },
      {
        title: "Natural room to grow",
        text: "The structure can expand into service and proof pages over time without needing a full rebuild.",
      },
    ],
    pricingHeading: "Clear pricing for cleaning-business websites",
    pricingIntro:
      "Cleaning-business websites start from £149 for a focused one-page site, or from £349 for a multi-page build with service sections, stronger local targeting, and better enquiry capture.",
    finalHeading: "Need a cleaner website that helps you win more local enquiries?",
    finalText:
      "Tell us what type of cleaning work you want more of and we will shape a site that keeps the offer clear, the contact path simple, and the business easy to trust online.",
    projectId: "cleaners",
    relatedTradeKeys: ["paintersAndDecorators", "landscapers", "builders", "electricians"],
  },
};

export const tradePageOrder: TradePageKey[] = [
  "plumbers",
  "electricians",
  "roofers",
  "builders",
  "landscapers",
  "paintersAndDecorators",
  "kitchenAndBathroomFitters",
  "cleaners",
];

export const featuredTradeKeys: TradePageKey[] = [
  "plumbers",
  "electricians",
  "roofers",
  "builders",
  "landscapers",
];

export function getTradePageHref(key: TradePageKey) {
  return `/${tradePages[key].slug}`;
}

