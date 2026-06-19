import { BUSINESS } from "@/lib/business";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: "https://shayanpackages.com",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.founded),
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 200 },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "S.I.T.E. Industrial Area",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "sales",
        availableLanguage: ["English", "Urdu"],
        areaServed: "PK",
      },
    ],
    sameAs: [
      "https://wa.me/" + BUSINESS.whatsapp.number,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Poly Bags Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Retail Shopping Bags",
            description: "Premium custom-printed carriers for retail and grocery in HDPE/LDPE blends.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Industrial Liners",
            description: "Heavy-duty drum and box liners engineered for puncture resistance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "HD Bags (High-Density)",
            description: "Extra-strong lightweight HD bags for retail and grocery.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Food-Grade Packaging",
            description: "FDA-compliant Poly Bags for direct food contact.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Security & Courier Bags",
            description: "Tamper-evident bags with permanent adhesive closures.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "350",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
