import { Helmet } from "react-helmet-async";

const SITE_URL = "https://gcodelabs.dev";
const LOGO_URL = `${SITE_URL}/logo.png`;

const DEFAULT_SEO = {
  title: "GCode Labs | Professional Web Development In Sri Lanka",
  description:
    "GCode Labs delivers premium web development in Sri Lanka — WordPress websites, hotel & villa sites, restaurant sites, e-commerce, POS systems and more. Transparent pricing, lifetime maintenance.",
  keywords:
    "web development Sri Lanka, WordPress website Sri Lanka, hotel website design, villa website Sri Lanka, restaurant website design, business website Sri Lanka, e-commerce website, landing page design, web design Colombo, GCode Labs, website development company Sri Lanka, professional website Sri Lanka, cheap web design Sri Lanka, affordable website Sri Lanka",
};

export function SEO({ title, description, keywords, path = "/" }) {
  const seoTitle = title || DEFAULT_SEO.title;
  const seoDesc = description || DEFAULT_SEO.description;
  const seoKeywords = keywords || DEFAULT_SEO.keywords;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="GCode Labs" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <meta name="theme-color" content="#3B9EE0" />

      {/* ── Open Graph (Facebook, LinkedIn, WhatsApp) ── */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={LOGO_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GCode Labs" />
      <meta property="og:locale" content="en_LK" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={LOGO_URL} />
    </Helmet>
  );
}

/* ── Page-level JSON-LD structured data ── */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GCode Labs",
    description:
      "Professional web development agency in Sri Lanka specialising in WordPress websites, hotel & villa websites, restaurant websites, e-commerce platforms and business web applications.",
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: "+94775912053",
    email: "contact@gcodelabs.dev",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressLocality: "Colombo",
    },
    priceRange: "Rs. 20,000 – Rs. 42,000",
    currenciesAccepted: "LKR",
    openingHours: "Mo-Su 08:00-22:00",
    areaServed: ["Sri Lanka", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Plan – 1 Page Landing Page",
          price: "20000",
          priceCurrency: "LKR",
          description:
            "Single page website for small businesses, hotels, villas, restaurants and product promotions.",
          eligibleRegion: "LK",
        },
        {
          "@type": "Offer",
          name: "Standard Plan – Up to 5 Pages",
          price: "28000",
          priceCurrency: "LKR",
          description:
            "Multi-page business website suitable for hotels, restaurants, villas, agencies and service companies.",
          eligibleRegion: "LK",
        },
        {
          "@type": "Offer",
          name: "Premium Plan – Up to 10 Pages",
          price: "42000",
          priceCurrency: "LKR",
          description:
            "Full-scale WordPress or custom websites for established businesses, resorts, boutique hotels and e-commerce stores.",
          eligibleRegion: "LK",
        },
      ],
    },
    sameAs: ["https://github.com/Sithum1220"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

export function FAQSchema() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a website cost in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GCode Labs offers professional websites starting from Rs. 20,000 for a single-page landing page, Rs. 28,000 for a standard 5-page business site, and Rs. 42,000 for a premium up to 10-page website.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build WordPress websites in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. GCode Labs specialises in WordPress website development, custom themes, and plugins for all business types including hotels, villas, restaurants, and retail stores.",
        },
      },
      {
        "@type": "Question",
        name: "Do you design hotel and villa websites in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We design and develop professional hotel, villa, guesthouse, and resort websites complete with booking integrations, galleries, and SEO optimisation.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build restaurant websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We create restaurant and café websites with menus, reservation systems, social media integrations, and Google Maps.",
        },
      },
      {
        "@type": "Question",
        name: "Is a free domain included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every GCode Labs plan includes a free .com domain for the first year, along with free premium managed hosting and a free SSL certificate.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faq, null, 2) }}
    />
  );
}
