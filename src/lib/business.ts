export const BUSINESS = {
  name: "Shayan Packages",
  tagline: "Premium Poly Bags Manufacturer",
  description:
    "Leading manufacturer of printed Poly Bags, industrial liners, and custom packaging solutions since 1988. ISO 9001:2015 certified. Factory direct from S.I.T.E., Karachi.",
  phone: "+92 311 2770257",
  phoneRaw: "923112770257",
  email: "info@shayanpackages.com",
  address: {
    line1: "S.I.T.E. Industrial Area",
    line2: "Karachi, Sindh, Pakistan",
    full: "S.I.T.E. Industrial Area, Karachi, Sindh, Pakistan",
  },
  whatsapp: {
    number: "923112770257",
    message: "Hello Shayan Packages! I'm interested in your Poly Bags and packaging solutions. Can you please share your product catalog and bulk pricing?",
  },
  hours: {
    weekdays: "Mon–Sat: 9:00 AM – 6:00 PM",
    sunday: "Sunday: Closed",
  },
  founded: 1988,
  yearsActive: 35,
  certifications: ["ISO 9001:2015"],
  social: {
    whatsapp: "https://wa.me/923112770257",
  },
};

export const WHATSAPP_LINKS = {
  default: `https://wa.me/${BUSINESS.whatsapp.number}`,
  samples: `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent("Hello Shayan Packages! I'd like to request free samples of your Poly Bags for my business.")}`,
  quote: `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent("Hello Shayan Packages! I need a bulk quote for Poly Bags. Please share your pricing and MOQ details.")}`,
  inquire: `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent("Hello Shayan Packages! I'm interested in your products. Please provide more information.")}`,
  technical: `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent("Hello Shayan Packages! I need technical consultation for specialized packaging formulations.")}`,
};
