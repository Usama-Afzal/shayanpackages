"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInView from "@/components/ui/FadeInView";
import { BUSINESS, WHATSAPP_LINKS } from "@/lib/business";

const faqs = [
  {
    category: "Ordering",
    question: "What is the Minimum Order Quantity (MOQ)?",
    answer:
      "Starts from 2,000 bags. Our large-scale manufacturing facility is optimized for bulk production runs. For industrial liners, the MOQ is 500 kg.",
  },
  {
    category: "Customization",
    question: "Do you offer Pantone matching?",
    answer:
      "Yes. We offer precise Pantone color matching for all flexographic printing jobs. Our in-house QA lab ensures color accuracy across the entire production run.",
  },
  {
    category: "Ordering",
    question: "What is the lead time for custom prints?",
    answer:
      "Standard lead time is 7-12 business days from artwork approval. Complex multi-color jobs may require 14-21 days. Rush orders can be accommodated for existing clients.",
  },
  {
    category: "Delivery",
    question: "Do you deliver outside Karachi?",
    answer:
      "Yes, we deliver nationwide across Pakistan. Our logistics partners ensure scheduled bulk deliveries to all major industrial zones including Lahore, Faisalabad, Islamabad, and Sialkot.",
  },
  {
    category: "Quality",
    question: "Are your bags food-grade?",
    answer:
      "Yes. Our food-grade packaging is manufactured using virgin resin and complies with FDA standards for direct food contact. We provide certification with every batch.",
  },
  {
    category: "Customization",
    question: "Can you print custom designs?",
    answer:
      "Absolutely. Our 6-color flexographic printing press can handle complex designs, gradients, and photorealistic imagery. Send us your artwork and we'll provide a pre-print proof.",
  },
  {
    category: "Ordering",
    question: "What payment terms do you offer?",
    answer:
      "We offer flexible payment terms for B2B clients including advance payment, LC, and credit terms for established partners. Contact our sales team for details.",
  },
  {
    category: "Delivery",
    question: "Do you offer free samples?",
    answer:
      "Yes, we provide complementary sample kits to qualifying B2B entities. Fill out our sample request form and a technical sales representative will follow up to confirm specifications.",
  },
];

const categories = ["All", "Ordering", "Customization", "Delivery", "Quality"];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-mobile md:py-section-gap-desktop flex flex-col items-center">
        <FadeInView direction="up" className="text-center w-full max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-on-surface mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg leading-relaxed text-on-surface-variant">
            Everything you need to know about bulk Poly Bags procurement.
          </p>
        </FadeInView>

        {/* Search */}
        <FadeInView direction="up" delay={0.2} className="w-full max-w-2xl mb-12 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-lg bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary text-base text-on-surface shadow-[0_0_8px_rgba(0,0,0,0.04)] outline-none transition-all"
          />
        </FadeInView>

        <FadeInView direction="up" delay={0.3} className="w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Categories sidebar */}
          <aside className="md:col-span-3 space-y-2">
            <div className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-4">
              Categories
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-surface-container-high text-on-surface border-l-4 border-primary shadow-[0_0_8px_rgba(0,0,0,0.04)]"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low border-l-4 border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </aside>

          {/* FAQ items */}
          <div className="md:col-span-9 space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-[0_0_8px_rgba(0,0,0,0.04)] hover:border-primary transition-colors cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex justify-between items-center mb-2">
                  <h3
                    className={`text-2xl font-semibold transition-colors ${
                      openIndex === index
                        ? "text-primary"
                        : "text-on-surface"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`material-symbols-outlined text-outline  transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>
                {openIndex === index && (
                  <div className="text-base leading-relaxed text-on-surface-variant mt-2 pt-4 border-t border-surface-variant">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 text-on-surface-variant text-lg">
                No FAQs match your search. Try a different keyword.
              </div>
            )}
          </div>
        </FadeInView>

        {/* Bottom CTA */}
        <FadeInView direction="up" delay={0.3} className="w-full max-w-4xl mt-24 bg-surface-container-high rounded-xl p-12 text-center flex flex-col items-center shadow-[0_0_8px_rgba(0,0,0,0.04)]">
          <h2 className="text-3xl font-bold text-on-surface mb-4">
            Still have questions?
          </h2>
          <p className="text-base text-on-surface-variant mb-8 max-w-lg">
            Our technical sales team is ready to assist you with specific
            requirements or bulk procurement inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINKS.quote}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest px-8 py-3 rounded-lg hover:brightness-90 transition-all no-underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant text-on-surface text-sm font-semibold uppercase tracking-widest px-8 py-3 rounded-lg hover:bg-surface-container-low transition-all no-underline"
            >
              <span className="material-symbols-outlined">call</span>
              Call {BUSINESS.phone}
            </a>
            </div>
          </FadeInView>
      </section>
    </>
  );
}
